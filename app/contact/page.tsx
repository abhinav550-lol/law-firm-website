import type { Metadata } from "next";
import ContactOffices from "@/app/parts/ui/ContactOffices";

export const metadata: Metadata = {
  title: "Contact Us | LoremAdvocates",
  description:
    "Find office addresses, contact information, and location maps for LoremAdvocates.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#F4F8F2] font-inter text-[#26312B]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315F3B]">
            LoremAdvocates · Contact information
          </p>
          <h1 className="mt-4 font-cormorant text-[38px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[56px] sm:leading-[1.05]">
            Contact Us
          </h1>
          <p className="mt-5 text-base leading-7 text-[#26312B]/80">
            For enquiries about legal consultation, representation, and advisory
            matters, you can reach our offices using the details below.
          </p>
          <p className="mt-4 text-sm leading-6 text-[#26312B]/75">
            The office addresses and contact details shown here are placeholders.
          </p>
        </header>

        <ContactOffices />
      </div>
    </main>
  );
}
