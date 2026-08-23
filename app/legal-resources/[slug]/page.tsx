import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

// Mock article data — replace with real data or fetch from database
const articles = [
  {
    slug: "what-is-anticipatory-bail",
    title: "What is Anticipatory Bail?",
    category: "Legal Articles",
    author: "Adv. John Doe",
    date: "11 Aug 2026",
    lastUpdated: "11 Aug 2026",
    content: [
      "Anticipatory bail is a provision under Section 438 of the Code of Criminal Procedure (CrPC) that allows a person to seek bail in anticipation of an arrest for a non-bailable offence.",
      "When a person has reason to believe that they may be arrested on accusation of having committed a non-bailable offence, they may apply to the High Court or the Court of Session for a direction that in the event of their arrest, they shall be released on bail.",
      "The court considers several factors when deciding whether to grant anticipatory bail, including the nature of the accusation, the severity of the punishment, the likelihood of the applicant fleeing from justice, and the possibility of the applicant tampering with evidence.",
      "It is important to note that anticipatory bail is not a right but a remedy available at the discretion of the court. The applicant must demonstrate sufficient grounds for the court to grant such relief.",
      "This article provides general information only and does not constitute legal advice. The provisions mentioned are subject to amendments and judicial interpretations. For specific legal matters, please consult a qualified advocate.",
    ],
  },
  {
    slug: "understanding-consumer-rights",
    title: "Understanding Consumer Rights in India",
    category: "Legal Articles",
    author: "Adv. Jane Smith",
    date: "05 Aug 2026",
    lastUpdated: "05 Aug 2026",
    content: [
      "The Consumer Protection Act, 2019 provides a framework for the protection of consumer rights in India. It establishes consumer dispute redressal commissions at the district, state, and national levels.",
      "Key consumer rights include the right to be protected against goods and services that are hazardous, the right to be informed about the quality and quantity of goods, and the right to seek redressal against unfair trade practices.",
      "Consumers who have experienced defective goods or deficient services may file a complaint before the appropriate consumer commission. The process involves submitting a complaint with relevant details and supporting documentation.",
      "This article provides general information only and does not constitute legal advice. For specific consumer matters, please consult a qualified advocate.",
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Legal Resources`,
    description: article.content[0],
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white">
      <article className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/legal-resources"
            className="text-sm font-medium text-primary-green hover:text-deep-green"
          >
            ← Back to Legal Resources
          </Link>

          <div className="mt-8">
            <span className="text-xs font-medium uppercase tracking-wide text-primary-green">
              {article.category}
            </span>
            <h1 className="mt-2 font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
              {article.title}
            </h1>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-text">
            <span>By {article.author}</span>
            <span>Published: {article.date}</span>
            <span>Last Updated: {article.lastUpdated}</span>
          </div>

          <hr className="mt-8 border-border" />

          <div className="mt-8 space-y-6 text-base leading-relaxed text-text">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <hr className="mt-12 border-border" />

          <p className="mt-8 text-sm text-muted-text">
            <span className="font-medium text-deep-green">Disclaimer:</span>{" "}
            This article is for general informational purposes only and does
            not constitute legal advice. Readers should not rely on this
            content as a substitute for professional legal consultation.
          </p>
        </div>
      </article>
    </main>
  );
}
