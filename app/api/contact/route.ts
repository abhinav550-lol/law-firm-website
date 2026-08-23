import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, subject, message, preferredContact } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Name, phone, and message are required." },
        { status: 400 },
      );
    }

    // TODO: Validate input with Zod
    // TODO: Rate-limit the request
    // TODO: Sanitize data
    // TODO: Send email via Nodemailer to firm email addresses

    // Placeholder — return success
    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting the firm. Your enquiry has been submitted successfully. The office will review your message and respond where appropriate.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "An error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
