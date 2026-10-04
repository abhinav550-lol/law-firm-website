export const resourceCategories = [
  "All",
  "Articles",
  "Legal Updates",
  "FAQs",
  "Guides",
] as const;

export type ResourceFilter = (typeof resourceCategories)[number];
export type ResourceCategory = Exclude<ResourceFilter, "All">;

export type LegalResource = {
  slug: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
  publishedAt: string;
  author?: string;
  lastUpdated?: string;
  content?: string[];
};

export type ResourceSummary = Pick<
  LegalResource,
  "slug" | "title" | "excerpt" | "category" | "publishedAt"
> & { readingMinutes: number };

// Existing sample resources. Add approved article copy to content when available.
export const legalResources: LegalResource[] = [
  {
    slug: "what-is-anticipatory-bail",
    title: "What is Anticipatory Bail?",
    excerpt:
      "A general explanation of anticipatory bail under Indian law, including when it may be sought and the relevant legal provisions.",
    category: "Articles",
    publishedAt: "2026-08-11",
    author: "Adv. John Doe",
    lastUpdated: "2026-08-11",
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
    excerpt:
      "An overview of the Consumer Protection Act and the remedies available to consumers.",
    category: "Articles",
    publishedAt: "2026-08-05",
    author: "Adv. Jane Smith",
    lastUpdated: "2026-08-05",
    content: [
      "The Consumer Protection Act, 2019 provides a framework for the protection of consumer rights in India. It establishes consumer dispute redressal commissions at the district, state, and national levels.",
      "Key consumer rights include the right to be protected against goods and services that are hazardous, the right to be informed about the quality and quantity of goods, and the right to seek redressal against unfair trade practices.",
      "Consumers who have experienced defective goods or deficient services may file a complaint before the appropriate consumer commission. The process involves submitting a complaint with relevant details and supporting documentation.",
      "This article provides general information only and does not constitute legal advice. For specific consumer matters, please consult a qualified advocate.",
    ],
  },
  {
    slug: "property-title-verification",
    title: "Importance of Property Title Verification",
    excerpt:
      "Why verifying property titles before a transaction is essential and the common issues that may arise.",
    category: "Guides",
    publishedAt: "2026-07-28",
  },
  {
    slug: "recent-amendments-ipc",
    title: "Recent Amendments to Criminal Law Provisions",
    excerpt:
      "A summary of recent legislative changes affecting criminal law practice in India.",
    category: "Legal Updates",
    publishedAt: "2026-07-20",
  },
  {
    slug: "maintenance-under-section-125",
    title: "Maintenance Under Section 125 CrPC",
    excerpt:
      "A general overview of maintenance provisions and the process involved in filing for maintenance.",
    category: "Articles",
    publishedAt: "2026-07-15",
  },
];

export function getLegalResource(slug: string): LegalResource | undefined {
  return legalResources.find((resource) => resource.slug === slug);
}

export function getResourceSummary(resource: LegalResource): ResourceSummary {
  const body = (resource.content ?? [resource.excerpt]).join(" ");
  const wordCount = body.trim().split(/\s+/).length;

  return {
    slug: resource.slug,
    title: resource.title,
    excerpt: resource.excerpt,
    category: resource.category,
    publishedAt: resource.publishedAt,
    readingMinutes: Math.max(1, Math.ceil(wordCount / 200)),
  };
}

export function formatResourceDate(date: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date + "T00:00:00Z"));
}
