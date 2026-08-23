import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Resources | Law Firm",
  description:
    "Browse legal articles, updates, FAQs, and important judgments for general informational purposes.",
};

// Mock article data — replace with real data
const articles = [
  {
    slug: "what-is-anticipatory-bail",
    title: "What is Anticipatory Bail?",
    excerpt:
      "A general explanation of anticipatory bail under Indian law, including when it may be sought and the relevant legal provisions.",
    category: "Legal Articles",
    date: "11 Aug 2026",
  },
  {
    slug: "understanding-consumer-rights",
    title: "Understanding Consumer Rights in India",
    excerpt:
      "An overview of the Consumer Protection Act and the remedies available to consumers.",
    category: "Legal Articles",
    date: "05 Aug 2026",
  },
  {
    slug: "property-title-verification",
    title: "Importance of Property Title Verification",
    excerpt:
      "Why verifying property titles before a transaction is essential and the common issues that may arise.",
    category: "Legal Guides",
    date: "28 Jul 2026",
  },
  {
    slug: "recent-amendments-ipc",
    title: "Recent Amendments to Criminal Law Provisions",
    excerpt:
      "A summary of recent legislative changes affecting criminal law practice in India.",
    category: "Legal Updates",
    date: "20 Jul 2026",
  },
  {
    slug: "maintenance-under-section-125",
    title: "Maintenance Under Section 125 CrPC",
    excerpt:
      "A general overview of maintenance provisions and the process involved in filing for maintenance.",
    category: "Legal Articles",
    date: "15 Jul 2026",
  },
];

const categories = ["All", "Articles", "Updates", "FAQs", "Guides"];

export default function LegalResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            Legal Resources
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            General legal information, articles, and updates for educational
            purposes. This content does not constitute legal advice.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-6 pb-4 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-text"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/legal-resources/${article.slug}`}
              className="group block rounded-lg border border-border bg-white p-6 transition-colors hover:border-primary-green"
            >
              {/* Cover image placeholder */}
              <div className="mb-4 aspect-video w-full rounded bg-pale-green" />

              <span className="text-xs font-medium uppercase tracking-wide text-primary-green">
                {article.category}
              </span>
              <h2 className="mt-2 font-serif text-lg font-semibold text-deep-green">
                {article.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text line-clamp-3">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-text">{article.date}</span>
                <span className="text-sm font-medium text-primary-green transition-colors group-hover:text-deep-green">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
