import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team | Law Firm",
  description:
    "Meet the lawyers associated with our firm. View qualifications, enrolment details, and areas of practice.",
};

// Mock lawyer data — replace with real data
const lawyers = [
  {
    slug: "john-doe",
    name: "Adv. John Doe",
    designation: "Advocate",
    qualifications: "B.A., LL.B.",
    enrolment: "XXXXX",
    barCouncil: "State Bar Council",
    areasOfPractice: ["Civil Law", "Property Law", "Family Law"],
    photo: null,
  },
  {
    slug: "jane-smith",
    name: "Adv. Jane Smith",
    designation: "Advocate",
    qualifications: "B.Com., LL.B.",
    enrolment: "XXXXX",
    barCouncil: "State Bar Council",
    areasOfPractice: ["Corporate Law", "Commercial Law", "Contract Law"],
    photo: null,
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            Our Team
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            The lawyers associated with our firm bring experience and
            dedication across a range of legal disciplines.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <Link
              key={lawyer.slug}
              href={`/team/${lawyer.slug}`}
              className="group block rounded-lg border border-border bg-white p-6 transition-colors hover:border-primary-green"
            >
              {/* Photo placeholder */}
              <div className="mb-4 aspect-[3/4] w-full rounded bg-pale-green" />

              <h2 className="font-serif text-lg font-semibold text-deep-green">
                {lawyer.name}
              </h2>
              <p className="mt-1 text-sm text-muted-text">
                {lawyer.designation}
              </p>
              <p className="mt-2 text-sm text-text">{lawyer.qualifications}</p>
              <p className="mt-1 text-xs text-muted-text">
                Enrolment: {lawyer.enrolment}
              </p>
              <p className="mt-3 text-xs text-muted-text">
                {lawyer.areasOfPractice.join(" • ")}
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-primary-green transition-colors group-hover:text-deep-green">
                View Profile →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
