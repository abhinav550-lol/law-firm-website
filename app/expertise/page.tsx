import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas | Law Firm",
  description:
    "Explore our areas of practice including civil, criminal, property, family, corporate, and constitutional law.",
};

// Mock practice area data — replace with real data
const practiceAreas = [
  {
    slug: "civil-law",
    name: "Civil Law",
    description:
      "Representation in civil disputes including contracts, torts, and general civil litigation.",
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    description:
      "Legal representation in criminal matters including bail applications, trials, and appeals.",
  },
  {
    slug: "property-law",
    name: "Property Law",
    description:
      "Advisory and representation in property disputes, title matters, and real estate transactions.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    description:
      "Legal assistance in family matters including marriage, divorce, custody, and maintenance.",
  },
  {
    slug: "corporate-law",
    name: "Corporate & Commercial Law",
    description:
      "Advisory on corporate governance, commercial agreements, and regulatory compliance.",
  },
  {
    slug: "constitutional-law",
    name: "Constitutional Law",
    description:
      "Representation in constitutional matters, public interest litigation, and fundamental rights cases.",
  },
  {
    slug: "labour-law",
    name: "Labour & Employment Law",
    description:
      "Legal guidance on employment contracts, workplace disputes, and labour compliance.",
  },
  {
    slug: "consumer-law",
    name: "Consumer Law",
    description:
      "Representation in consumer complaint forums and related legal proceedings.",
  },
];

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            Practice Areas
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            Our lawyers handle matters across a range of legal disciplines.
            Each area is managed with diligence and professional care.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group block rounded-lg border border-border bg-white p-6 transition-colors hover:border-primary-green"
            >
              <h2 className="font-serif text-lg font-semibold text-deep-green">
                {area.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text">
                {area.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-primary-green transition-colors group-hover:text-deep-green">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
