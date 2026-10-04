import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Info } from "lucide-react";
import ResourceCard from "@/app/parts/ui/ResourceCard";
import {
  formatResourceDate,
  getLegalResource,
  getResourceSummary,
  legalResources,
} from "@/lib/legal-resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return legalResources.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getLegalResource(slug);

  if (!resource) notFound();

  return {
    title: `${resource.title} | LoremAdvocates`,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getLegalResource(slug);

  if (!resource) notFound();

  const summary = getResourceSummary(resource);
  const moreResources = legalResources
    .filter((item) => item.slug !== resource.slug)
    .map(getResourceSummary)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="bg-white font-inter text-gray-600">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:px-10 lg:pb-20">
        <article className="mx-auto max-w-4xl">
          <nav aria-label="Resource navigation">
            <Link
              href="/legal-resources"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              All legal resources
            </Link>
          </nav>

          <header className="mt-6 border-b border-[#DCE6DC] pb-8">
            <p className="type-eyebrow">
              {resource.category}
            </p>
            <h1 className="type-display mt-4">
              {resource.title}
            </h1>
            <div className="type-meta mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              {resource.author && <span>By {resource.author}</span>}
              <span>
                Published <time dateTime={resource.publishedAt}>{formatResourceDate(resource.publishedAt)}</time>
              </span>
              <span>{summary.readingMinutes} min read</span>
              {resource.lastUpdated && resource.lastUpdated !== resource.publishedAt && (
                <span>
                  Updated <time dateTime={resource.lastUpdated}>{formatResourceDate(resource.lastUpdated)}</time>
                </span>
              )}
            </div>
          </header>

          <section aria-label="Resource content" className="type-body mt-8 max-w-prose space-y-6">
            {(resource.content ?? [resource.excerpt]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <div className="mt-10 flex items-start gap-3 rounded-lg border border-[#DCE6DC] bg-[#EAF3E9] p-5">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#315F3B]" />
            <p className="type-meta">
              This resource is for general informational purposes only and does
              not constitute legal advice. Readers should not rely on it as a
              substitute for professional legal consultation.
            </p>
          </div>
        </article>

        <section aria-labelledby="more-resources-heading" className="mt-12 border-t border-[#DCE6DC] pt-10 sm:mt-16">
          <p className="type-eyebrow">
            Continue reading
          </p>
          <h2
            id="more-resources-heading"
            className="type-section mt-3"
          >
            More from the library
          </h2>
          <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-6" aria-label="More legal resources">
            {moreResources.map((item) => (
              <li key={item.slug}>
                <ResourceCard resource={item} headingLevel={3} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
