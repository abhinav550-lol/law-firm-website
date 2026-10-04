import type { Metadata } from "next";
import ContactOffices from "@/app/parts/ui/ContactOffices";
import ContactForm from "@/app/parts/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | LoremAdvocates",
  description:
    "Find office addresses, contact information, and location maps for LoremAdvocates.",
};

export default function ContactPage() {
  return (
    <main className="bg-white font-inter text-gray-600">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        <header className="max-w-2xl">
          <p className="type-eyebrow">
            LoremAdvocates · Contact information
          </p>
          <h1 className="type-display mt-4">
            Contact Us
          </h1>
          <p className="type-intro mt-5">
            For enquiries about legal consultation, representation, and advisory
            matters, you can reach our offices using the details below.
          </p>
          <p className="type-meta mt-4">
            The office addresses and contact details shown here are placeholders.
          </p>
        </header>

        <ContactOffices />

        <section
          aria-labelledby="enquiry-heading"
          className="mt-12 grid items-start gap-8 border-t border-[#DCE6DC] pt-10 sm:mt-16 sm:pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div>
            <p className="type-eyebrow">
              Written enquiries
            </p>
            <h2
              id="enquiry-heading"
              className="type-section mt-3"
            >
              Send an Enquiry
            </h2>
            <p className="type-body mt-5 max-w-prose">
              Share your contact details and a brief query. Your enquiry will be
              forwarded to the firm for review.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
