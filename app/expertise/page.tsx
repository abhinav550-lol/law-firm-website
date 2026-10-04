import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Handshake, Scale } from "lucide-react";
import ExpertiseCard from "@/app/parts/ui/ExpertiseCard";
import { expertiseAreas } from "@/lib/expertise";

export const metadata: Metadata = {
  title: "Expertise | LoremAdvocates",
  description:
    "Explore LoremAdvocates’ areas of practice across dispute resolution, intellectual property, insolvency, corporate crime, energy, employment, infrastructure, consumer protection, and civil litigation.",
};

const services = [
  { label: "Legal representation", icon: Scale },
  { label: "Legal advisory", icon: FileText },
  { label: "Dispute resolution", icon: Handshake },
];

export default function ExpertisePage() {
  return (
    <main className="bg-white font-inter text-gray-600">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        <header className="overflow-hidden rounded-xl bg-[#173B2A]">
          <div className="grid gap-6 px-6 py-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
            <div>
              <p className="type-eyebrow text-[#C8DEC8]">
                Our areas of practice
              </p>
              <h1
                id="expertise-heading"
                className="type-display mt-4 text-white"
              >
                Expertise
              </h1>
            </div>
            <p className="type-intro max-w-2xl text-[#EAF3E9] lg:pt-1">
              LoremAdvocates provides legal representation, advisory, and dispute
              resolution services across a broad range of matters. Explore our
              practice areas to learn about the scope of our work.
            </p>
          </div>

          <ul
            aria-label="Legal services"
            className="grid gap-5 border-t border-white/15 bg-white/5 px-6 py-6 sm:grid-cols-3 sm:gap-4 sm:px-10 lg:px-12"
          >
            {services.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-medium leading-6 text-[#EAF3E9]"
              >
                <Icon
                  aria-hidden="true"
                  className="size-5 shrink-0 stroke-[1.5] text-[#C8DEC8]"
                />
                {label}
              </li>
            ))}
          </ul>
        </header>

        <section aria-labelledby="practice-areas-heading" className="mt-12 sm:mt-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="type-eyebrow">
                The scope of our work
              </p>
              <h2
                id="practice-areas-heading"
                className="type-section mt-3"
              >
                Areas of Practice
              </h2>
            </div>
            <p className="type-meta">
              {expertiseAreas.length} practice areas. A considered approach to each matter.
            </p>
          </div>

          <ul
            aria-label="Areas of expertise"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          >
            {expertiseAreas.map((area, index) => (
              <li key={area.slug}>
                <ExpertiseCard area={area} index={index} />
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="practice-approach-heading"
          className="mt-12 grid gap-8 rounded-xl border border-[#DCE6DC] bg-[#EAF3E9] p-6 sm:mt-16 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div>
            <p className="type-eyebrow">
              Our professional approach
            </p>
            <h2
              id="practice-approach-heading"
              className="type-section mt-4"
            >
              Research. Strategy.
              <br />
              Practical execution.
            </h2>
          </div>
          <div>
            <p className="type-body max-w-2xl">
              Our approach combines sound legal understanding, strategic thinking,
              and practical execution, with care and attention to the individual
              requirements of every matter.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
              >
                About our firm
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/team"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
              >
                Meet our team
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
