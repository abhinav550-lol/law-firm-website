import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TeamCard from "@/app/parts/ui/TeamCard";
import type { Lawyer } from "@/lib/lawyers";

export const metadata: Metadata = {
  title: "Our Team | LoremAdvocates",
  description:
    "Meet the advocates at LoremAdvocates and explore their professional backgrounds and areas of practice.",
};

// Mock lawyer data — replace with real data or fetch from database
// Add full profile URLs below when available; empty links stay hidden.
const lawyers: Lawyer[] = [
  {
    name: "Arjun Mehra",
    image: "/assets/lawyer-1.png",
    linkedin: "https://www.linkedin.com/in/arjun-mehra",
    facebook: "https://www.facebook.com/arjun.mehra",
    position: "Senior Advocate",
    specialization: "Civil & Constitutional Law",
    about:
      "Arjun Mehra handles civil, constitutional, and commercial disputes, with a strong focus on legal strategy, detailed research, and effective courtroom representation.",
  },
  {
    name: "Ananya Kapoor",
    image: "/assets/lawyer-2.png",
    linkedin: "https://www.linkedin.com/in/ananya-kapoor",
    facebook: "https://www.facebook.com/ananya.kapoor",
    position: "Advocate",
    specialization: "Family & Property Law",
    about:
      "Ananya Kapoor advises clients on family disputes, inheritance matters, property conflicts, and related litigation, offering practical and client-focused legal solutions.",
  },
  {
    name: "Rohan Malhotra",
    image: "/assets/lawyer-3.png",
    linkedin: "https://www.linkedin.com/in/rohan-malhotra",
    facebook: "https://www.facebook.com/rohan.malhotra",
    position: "Advocate",
    specialization: "Criminal & Regulatory Law",
    about:
      "Rohan Malhotra represents clients in criminal and regulatory matters, with an emphasis on thorough case preparation, legal research, and clear courtroom advocacy.",
  },
  {
    name: "Meera Khanna",
    image: "/assets/lawyer-4.png",
    linkedin: "https://www.linkedin.com/in/meera-khanna",
    facebook: "https://www.facebook.com/meera.khanna",
    position: "Senior Advocate",
    specialization: "Arbitration & Commercial Disputes",
    about:
      "Meera Khanna advises individuals and businesses on arbitration, contractual conflicts, and commercial disputes, with a focus on efficient and strategic dispute resolution.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#F4F8F2] font-inter text-[#26312B]">
      <section
        aria-labelledby="team-heading"
        className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20"
      >
        <header className="mb-10 grid gap-6 border-b border-[#DCE6DC] pb-8 sm:mb-12 sm:pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315F3B]">
              The people behind the practice
            </p>
            <h1
              id="team-heading"
              className="mt-4 font-cormorant text-[42px] font-semibold leading-[1.05] text-[#173B2A] sm:text-[56px]"
            >
              Our Team
            </h1>
          </div>
          <div className="max-w-2xl lg:pt-1">
            <p className="text-base leading-7 text-[#526359] sm:text-lg sm:leading-8">
              Meet the legal professionals behind our firm, bringing experience,
              dedication, and trusted counsel to every case.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#526359]">
              Explore their areas of practice and professional backgrounds below.
            </p>
          </div>
        </header>

        <ul
          aria-label="Lawyers at the firm"
          className="grid  grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-6 "
        >
          {lawyers.map((lawyer, index) => (
            <li
              key={`${lawyer.name ?? "lawyer"}-${index}`}
              className="animate-fade-up animate-300ms"
              style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}
            >
              <TeamCard lawyer={lawyer} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-5 rounded-xl border border-[#DCE6DC] bg-[#EAF3E9] p-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315F3B]">
              A shared approach
            </p>
            <h2 className="mt-3 font-cormorant text-[28px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[32px]">
              Care. Diligence. Professional integrity.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex min-h-11 w-fit shrink-0 items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
          >
            About our firm
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
