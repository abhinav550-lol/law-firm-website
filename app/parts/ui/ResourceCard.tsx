import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatResourceDate, type ResourceSummary } from "@/lib/legal-resources";

const resourceActions = {
  Articles: "Read article",
  "Legal Updates": "Read update",
  FAQs: "Read FAQ",
  Guides: "Read guide",
};

export default function ResourceCard({
  resource,
  featured = false,
  headingLevel = 2,
}: {
  resource: ResourceSummary;
  featured?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <Link
      href={`/legal-resources/${resource.slug}`}
      className={`group flex h-full flex-col rounded-lg border border-[#DCE6DC] p-6 transition-colors duration-200 hover:border-[#315F3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B] sm:p-8 ${
        featured
          ? "bg-[#EAF3E9] hover:bg-[#EAF3E9]/70"
          : "bg-white hover:bg-[#F4F8F2]"
      }`}
    >
      {featured && (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#315F3B]">
          Featured resource
        </p>
      )}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs leading-5">
        <span className="font-semibold uppercase tracking-[0.14em] text-[#315F3B]">
          {resource.category}
        </span>
        <span aria-hidden="true" className="text-[#26312B]/60">·</span>
        <span className="text-[#26312B]/75">
          {resource.readingMinutes} min read
        </span>
      </div>
      <Heading
        className={`mt-4 max-w-2xl font-cormorant font-semibold text-[#173B2A] ${
          featured
            ? "text-[32px] leading-[1.15] sm:text-[38px]"
            : "text-2xl leading-[1.25]"
        }`}
      >
        {resource.title}
      </Heading>
      <p className={`mt-4 max-w-prose flex-1 leading-7 text-[#26312B]/80 ${featured ? "text-base sm:text-lg sm:leading-8" : "text-base"}`}>
        {resource.excerpt}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-[#DCE6DC] pt-5 text-sm leading-6">
        <time dateTime={resource.publishedAt} className="text-[#26312B]/75">
          {formatResourceDate(resource.publishedAt)}
        </time>
        <span className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#315F3B]">
          {resourceActions[resource.category]}
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
