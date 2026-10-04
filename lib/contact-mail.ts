import "server-only";
import nodemailer from "nodemailer";
import { z } from "zod";
import type { Enquiry } from "@/lib/contact-validation";

const DEVELOPMENT_EMAIL = "maabhinav550@gmail.com";

const configurationSchema = z.object({
  host: z.string().trim().min(1),
  port: z.coerce.number().int().min(1).max(65535),
  secure: z.enum(["true", "false"]).optional(),
  user: z.string().trim().min(1),
  password: z.string().min(1),
  from: z.string().email(),
  recipients: z.array(z.string().email()).min(1).max(20),
});

export class MailConfigurationError extends Error {}

export function getContactMailConfiguration() {
  const user = process.env.SMTP_USER?.trim() || DEVELOPMENT_EMAIL;
  const configuration = configurationSchema.safeParse({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port: process.env.SMTP_PORT?.trim() || "465",
    secure: process.env.SMTP_SECURE,
    user,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM?.trim() || user,
    recipients: (process.env.LAWYER_EMAILS?.trim() || DEVELOPMENT_EMAIL)
      .split(",").map((email) => email.trim()),
  });
  if (!configuration.success) throw new MailConfigurationError("SMTP configuration is missing or invalid.");
  return configuration.data;
}

export async function sendContactEnquiry(
  enquiry: Enquiry,
  configuration: ReturnType<typeof getContactMailConfiguration>,
) {
  const secure = configuration.secure
    ? configuration.secure === "true"
    : configuration.port === 465;
  const transporter = nodemailer.createTransport({
    host: configuration.host,
    port: configuration.port,
    secure,
    requireTLS: !secure,
    auth: { user: configuration.user, pass: configuration.password },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });

  const result = await transporter.sendMail({
    from: { name: "LoremAdvocates Website", address: configuration.from },
    to: configuration.recipients,
    replyTo: { name: enquiry.name, address: enquiry.email },
    subject: "New website enquiry | LoremAdvocates",
    text: [
      "A new enquiry was submitted through the LoremAdvocates website.",
      "",
      `Name: ${enquiry.name}`,
      `Phone: ${enquiry.phone}`,
      `Email: ${enquiry.email}`,
      "",
      "Query:",
      enquiry.query,
      "",
      "This is a website enquiry and does not establish an advocate-client relationship.",
    ].join("\n"),
  });

  if (result.rejected.length > 0 || result.accepted.length !== configuration.recipients.length) {
    throw new Error("The SMTP server did not accept every designated recipient.");
  }
}
