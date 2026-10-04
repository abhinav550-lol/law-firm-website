import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Laptop,
  MessageCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  Eye,
} from "lucide-react";
import aboutUsBanner from "@/public/assets/about-us-banner.png";

export const metadata: Metadata = {
  title: "About Us | LoremAdvocates",
  description:
    "Learn about LoremAdvocates, our professional approach, research-driven legal practice, and commitment to client-focused legal assistance.",
};

const principles = [
  {
    title: "Transparency",
    description: "Clear communication and a shared understanding of each matter.",
    icon: Eye,
  },
  {
    title: "Confidentiality",
    description: "Care and discretion in handling client information.",
    icon: ShieldCheck,
  },
  {
    title: "Responsiveness",
    description: "Timely attention to client questions and legal developments.",
    icon: MessageCircle,
  },
  {
    title: "Diligence",
    description: "Thorough preparation and attention to the details that matter.",
    icon: Search,
  },
];

const researchTools = [
  { label: "Legal research", icon: BookOpen },
  { label: "Contemporary technology", icon: Laptop },
  { label: "Continuous learning", icon: RefreshCw },
];

export default function AboutPage() {
  return (
    <main className="bg-white font-inter text-gray-600">
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16"
      >
        <header className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="animate-fade-up animate-700ms">
            <p className="type-eyebrow">
              LoremAdvocates
            </p>
            <h1
              id="about-heading"
              className="type-display mt-4"
            >
              About Our Firm
            </h1>
            <p className="type-meta mt-5 max-w-sm font-medium">
              Legal representation. Advisory.
              <br />
              Dispute resolution.
            </p>
          </div>
          <p className="type-intro animate-fade-up animate-700ms animate-delay-150ms max-w-2xl lg:pt-1">
            LoremAdvocates is a professionally driven law firm focused on
            delivering effective legal representation, advisory, and dispute
            resolution services across a broad range of matters. The Firm is
            committed to providing dependable and client-focused legal solutions
            with professionalism, diligence, and attention to the individual
            requirements of every matter.
          </p>
        </header>

        <figure className="animate-fade-up animate-700ms animate-delay-150ms mt-10 overflow-hidden rounded-xl border border-[#DCE6DC] bg-white sm:mt-12">
          <Image
            src={aboutUsBanner}
            alt="Legal professionals standing together in an office with law books and scales of justice"
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) calc(100vw - 80px), calc(100vw - 48px)"
            className="h-auto w-full"
          />
          <figcaption className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="font-cormorant text-2xl font-semibold leading-[1.25] text-gray-900">
              Care. Precision. Professional integrity.
            </p>
            <Link
              href="/team"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
            >
              Meet our team
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="approach-heading"
        className="mx-auto max-w-7xl px-6 pb-12 sm:pb-16 lg:px-10 lg:pb-20"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="type-eyebrow">
              How we work
            </p>
            <h2
              id="approach-heading"
              className="type-section mt-4"
            >
              Our Approach
            </h2>
          </div>
          <div className="type-body max-w-2xl space-y-5">
            <p>
              Our approach combines sound legal understanding, strategic thinking,
              and practical execution. The team at LoremAdvocates works closely
              with clients to understand their objectives, evaluate legal
              challenges, and provide clear, timely, and result-oriented solutions.
            </p>
            <p>
              We place strong emphasis on maintaining transparency,
              confidentiality, responsiveness, and long-term client relationships.
            </p>
          </div>
        </div>

        <ul
          aria-label="Principles that guide our practice"
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
        >
          {principles.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-xl border border-[#DCE6DC] bg-white p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-[#EAF3E9] text-[#315F3B]">
                <Icon aria-hidden="true" className="size-5 stroke-[1.5]" />
              </span>
              <h3 className="type-title mt-5">
                {title}
              </h3>
              <p className="type-meta mt-3">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="research-heading"
        className="border-y border-[#DCE6DC] bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10 lg:py-20">
          <div>
            <p className="type-eyebrow">
              An evolving practice
            </p>
            <h2
              id="research-heading"
              className="type-section mt-4 max-w-sm"
            >
              A Modern, Research-Driven Practice
            </h2>
            <ul
              aria-label="Foundations of our modern practice"
              className="mt-7 space-y-4"
            >
              {researchTools.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm font-medium text-[#315F3B]"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 shrink-0 stroke-[1.5]"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="type-body max-w-2xl space-y-5 lg:pt-1">
            <p>
              The Firm follows a modern and research-driven approach to legal
              practice, supported by contemporary technology, digital legal
              resources, and efficient case-management processes.
            </p>
            <p>
              Our commitment to continuous learning and staying informed about
              evolving laws and judicial developments enables us to provide
              relevant, well-researched, and practical legal assistance.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="grid gap-8 rounded-xl bg-[#173B2A] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-12">
          <div>
            <p className="type-eyebrow text-[#C8DEC8]">
              Our commitment
            </p>
            <h2
              id="values-heading"
              className="type-section mt-4 text-white"
            >
              Traditional Values.
              <br />
              Modern Outlook.
            </h2>
          </div>
          <div>
            <p className="type-body max-w-2xl text-[#EAF3E9]">
              At LoremAdvocates, we strive to combine traditional legal values with
              a modern outlook, ensuring that every matter is handled with care,
              precision, and professional integrity.
            </p>
            <Link
              href="/expertise"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-white underline decoration-[#C8DEC8]/60 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our expertise
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
