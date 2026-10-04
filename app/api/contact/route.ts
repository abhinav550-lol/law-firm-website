import { NextResponse } from "next/server";
import { enquirySchema, getEnquiryFieldErrors } from "@/lib/contact-validation";
import {
  getContactMailConfiguration,
  MailConfigurationError,
  sendContactEnquiry,
} from "@/lib/contact-mail";
import { consumeContactLimit } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_BODY_BYTES = 32 * 1024;

class RequestBodyError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

function hasAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    // Next may normalize the internal request URL; Host is the public origin.
    const originUrl = new URL(origin);
    const host = request.headers.get("host")?.toLowerCase() || new URL(request.url).host;
    return ["http:", "https:"].includes(originUrl.protocol) && originUrl.host === host;
  } catch {
    return false;
  }
}

async function readBody(request: Request): Promise<unknown> {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    throw new RequestBodyError(413, "Your enquiry is too large. Please shorten it.");
  }
  const reader = request.body?.getReader();
  if (!reader) throw new RequestBodyError(400, "Please provide your enquiry details.");

  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RequestBodyError(413, "Your enquiry is too large. Please shorten it.");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new RequestBodyError(400, "Please provide valid enquiry details.");
  }
}

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") {
    return NextResponse.json(
      { success: false, error: "Please submit your enquiry using the contact form." },
      { status: 415 },
    );
  }
  if (!hasAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, error: "Please submit your enquiry from this website." },
      { status: 403 },
    );
  }

  try {
    const parsed = enquirySchema.safeParse(await readBody(request));
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Please check your enquiry details.", fieldErrors: getEnquiryFieldErrors(parsed.error) },
        { status: 400 },
      );
    }

    const configuration = getContactMailConfiguration();
    const retryAfter = consumeContactLimit(request, parsed.data.email);
    if (retryAfter) {
      return NextResponse.json(
        { success: false, error: "Too many enquiries have been submitted. Please try again later." },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }

    await sendContactEnquiry(parsed.data, configuration);

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent to the firm. The office will review your message and respond where appropriate.",
    });
  } catch (error) {
    if (error instanceof RequestBodyError) {
      return NextResponse.json({ success: false, error: error.message }, { status: error.status });
    }
    if (error instanceof MailConfigurationError) {
      console.error("Contact email configuration is missing or invalid.");
      return NextResponse.json(
        { success: false, error: "Enquiries cannot be sent at the moment. Please contact the office by email." },
        { status: 503 },
      );
    }

    // Never log enquiry contents, credentials, or the raw SMTP response.
    const code = error instanceof Error && "code" in error && typeof error.code === "string"
      && /^[A-Z0-9_]+$/.test(error.code) ? error.code : "UNKNOWN";
    console.error("Contact email delivery failed.", { code });
    return NextResponse.json(
      { success: false, error: "Your enquiry could not be sent. Please try again later or contact the office by email." },
      { status: 502 },
    );
  }
}
