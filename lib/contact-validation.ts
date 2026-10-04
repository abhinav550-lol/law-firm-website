import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100, "Use no more than 100 characters.")
    .refine((value) => !Array.from(value).some((character) => {
      const code = character.charCodeAt(0);
      return code < 32 || code === 127;
    }), "Enter a name without line breaks or control characters."),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(25, "Use no more than 25 characters.")
    .regex(/^\+?[\d ().-]+$/, "Enter a valid phone number.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "").length;
      return digits >= 7 && digits <= 15;
    }, "Enter a phone number with 7 to 15 digits."),
  email: z.string().trim().max(254, "Use no more than 254 characters.").email("Enter a valid email address."),
  query: z.string().trim().min(10, "Please describe your query in at least 10 characters.")
    .max(5000, "Use no more than 5,000 characters.")
    .refine((value) => !Array.from(value).some((character) => {
      const code = character.charCodeAt(0);
      return (code < 32 && ![9, 10, 13].includes(code)) || code === 127;
    }), "Remove unsupported control characters from your query."),
  company: z.string().max(0).optional().default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryFieldErrors = Partial<Record<keyof Enquiry, string>>;

export function getEnquiryFieldErrors(error: z.ZodError): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as keyof Enquiry;
    if (field in enquirySchema.shape && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}
