import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Mock practice area data — replace with real data or fetch from database
const practiceAreas = [
  {
    slug: "civil-law",
    name: "Civil Law",
    shortDescription:
      "Representation in civil disputes including contracts, torts, and general civil litigation.",
    fullDescription:
      "Civil law encompasses a broad range of legal matters involving disputes between individuals, organisations, or entities. Common civil matters include breach of contract, property disputes, tort claims, and general civil litigation. Our lawyers provide representation at various levels of the court system, ensuring that each matter is handled with thorough preparation and professional diligence.",
  },
  {
    slug: "criminal-law",
    name: "Criminal Law",
    shortDescription:
      "Legal representation in criminal matters including bail applications, trials, and appeals.",
    fullDescription:
      "Criminal law involves the prosecution and defence of individuals accused of offences. Our lawyers handle matters ranging from bail applications and trial defence to appeals and revisions. Each case is approached with careful analysis of the facts, applicable provisions, and relevant precedents to ensure a robust legal defence.",
  },
  {
    slug: "property-law",
    name: "Property Law",
    shortDescription:
      "Advisory and representation in property disputes, title matters, and real estate transactions.",
    fullDescription:
      "Property law covers disputes related to ownership, possession, title, and transfer of immovable property. Matters may include partition suits, title verification, landlord-tenant disputes, and real estate transaction advisory. Our lawyers assist with both contentious and non-contentious property matters.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    shortDescription:
      "Legal assistance in family matters including marriage, divorce, custody, and maintenance.",
    fullDescription:
      "Family law deals with matters relating to marriage, divorce, child custody, maintenance, and domestic relations. These matters are often sensitive and require a careful, balanced approach. Our lawyers provide guidance and representation in family court proceedings while maintaining the dignity and privacy of all parties.",
  },
  {
    slug: "corporate-law",
    name: "Corporate & Commercial Law",
    shortDescription:
      "Advisory on corporate governance, commercial agreements, and regulatory compliance.",
    fullDescription:
      "Corporate and commercial law covers advisory and transactional work for businesses, including company formation, corporate governance, mergers and acquisitions, commercial contracts, and regulatory compliance. Our lawyers assist businesses in navigating the legal framework applicable to their operations.",
  },
  {
    slug: "constitutional-law",
    name: "Constitutional Law",
    shortDescription:
      "Representation in constitutional matters, public interest litigation, and fundamental rights cases.",
    fullDescription:
      "Constitutional law involves matters relating to the interpretation and enforcement of the Constitution of India. This includes fundamental rights, constitutional remedies, public interest litigation, and challenges to legislative or executive action. Our lawyers appear before High Courts and the Supreme Court in constitutional matters.",
  },
  {
    slug: "labour-law",
    name: "Labour & Employment Law",
    shortDescription:
      "Legal guidance on employment contracts, workplace disputes, and labour compliance.",
    fullDescription:
      "Labour and employment law governs the relationship between employers and employees, including employment contracts, workplace safety, wages, benefits, and dispute resolution. Our lawyers advise both employers and employees on compliance with applicable labour legislation and represent them in related proceedings.",
  },
  {
    slug: "consumer-law",
    name: "Consumer Law",
    shortDescription:
      "Representation in consumer complaint forums and related legal proceedings.",
    fullDescription:
      "Consumer law provides protection to consumers against unfair trade practices, defective goods, and deficient services. Our lawyers represent clients before consumer complaint forums at the district, state, and national levels, handling complaints and appeals arising from consumer transactions.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Practice Area Not Found" };

  return {
    title: `${area.name} | Practice Areas`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            {area.name}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            {area.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-pale-green px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
            Overview
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text">
            {area.fullDescription}
          </p>
        </div>
      </section>
    </main>
  );
}
