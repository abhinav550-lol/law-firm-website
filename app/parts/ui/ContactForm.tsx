"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import {
  enquirySchema,
  getEnquiryFieldErrors,
  type EnquiryFieldErrors,
} from "@/lib/contact-validation";

type SubmissionStatus = { kind: "success" | "error"; message: string } | null;

const fieldClassName =
  "mt-2 w-full rounded-lg border border-[#DCE6DC] bg-white px-4 py-3 text-base leading-6 text-gray-600 outline-none transition-colors placeholder:text-[#718078] focus:border-[#315F3B] focus:ring-1 focus:ring-[#315F3B] aria-invalid:border-[#173B2A]";

export default function ContactForm() {
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [isSending, setIsSending] = useState(false);
  const pending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const firstField = Object.keys(errors)[0];
    if (!isSending && firstField) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
    }
  }, [errors, isSending]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = enquirySchema.safeParse(Object.fromEntries(data));
    setStatus(null);
    setErrors({});
    if (!parsed.success) {
      setErrors(getEnquiryFieldErrors(parsed.error));
      return;
    }

    pending.current = true;
    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        if (result.fieldErrors) setErrors(result.fieldErrors);
        setStatus({ kind: "error", message: result.error || "Your enquiry could not be sent. Please try again later." });
        return;
      }
      form.reset();
      setStatus({
        kind: "success",
        message: result.message || "Your enquiry has been sent to the firm.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "We could not send your enquiry. Please check your connection and try again.",
      });
    } finally {
      pending.current = false;
      setIsSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      aria-label="Send an enquiry"
      aria-busy={isSending}
      action="/api/contact"
      method="post"
      noValidate
      onSubmit={handleSubmit}
      className="min-w-0 rounded-lg border border-[#DCE6DC] bg-white p-6 sm:p-8"
    >
      <p className="type-meta mb-6">
        All fields are required.
      </p>
      <fieldset disabled={isSending} className="min-w-0 space-y-6 disabled:opacity-75">
        <legend className="sr-only">Your contact details and query</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="enquiry-name" className="text-sm font-medium text-gray-900">
              Full name
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "enquiry-name-error" : undefined}
              className={fieldClassName}
            />
            {errors.name && <p id="enquiry-name-error" className="mt-2 text-sm leading-6 text-gray-900">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="enquiry-phone" className="text-sm font-medium text-gray-900">
              Phone number
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={25}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
              className={fieldClassName}
            />
            {errors.phone && <p id="enquiry-phone-error" className="mt-2 text-sm leading-6 text-gray-900">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="enquiry-email" className="text-sm font-medium text-gray-900">
            Email address
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            className={fieldClassName}
          />
          {errors.email && <p id="enquiry-email-error" className="mt-2 text-sm leading-6 text-gray-900">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="enquiry-query" className="text-sm font-medium text-gray-900">
            Your query
          </label>
          <textarea
            id="enquiry-query"
            name="query"
            rows={6}
            required
            minLength={10}
            maxLength={5000}
            aria-invalid={Boolean(errors.query)}
            aria-describedby={errors.query ? "enquiry-query-hint enquiry-query-error" : "enquiry-query-hint"}
            className={`${fieldClassName} resize-y`}
          />
          <p id="enquiry-query-hint" className="mt-2 text-xs leading-5 text-gray-600">
            10–5,000 characters. Please keep your enquiry brief.
          </p>
          {errors.query && <p id="enquiry-query-error" className="mt-2 text-sm leading-6 text-gray-900">{errors.query}</p>}
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="enquiry-company">Company</label>
          <input id="enquiry-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      <p className="type-meta mt-6">
        Please do not submit confidential or sensitive information. Sending an
        enquiry does not establish an advocate-client relationship. Read our{" "}
        <Link href="/privacy-policy" className="rounded-sm text-[#315F3B] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B]">
          privacy policy
        </Link>.
      </p>
      <button
        type="submit"
        disabled={isSending}
        className="mt-6 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#315F3B] px-6 py-3 text-sm font-semibold leading-6 text-white transition-colors hover:bg-[#173B2A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B] disabled:cursor-wait disabled:opacity-75 sm:w-auto"
      >
        {isSending && <LoaderCircle aria-hidden="true" className="size-4 motion-safe:animate-spin" />}
        {isSending ? "Sending enquiry…" : "Send enquiry"}
      </button>
      {status && (
        <p
          role={status.kind === "error" ? "alert" : "status"}
          className="mt-5 rounded-lg border border-[#DCE6DC] bg-white p-4 text-sm leading-6 text-gray-900"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
