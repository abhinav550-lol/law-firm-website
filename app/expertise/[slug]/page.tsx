import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ExpertiseIcon from "@/app/parts/ui/ExpertiseIcon";
import { expertiseAreas, getExpertiseArea } from "@/lib/expertise";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return expertiseAreas.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getExpertiseArea(slug);

  if (!area) notFound();

  return {
    title: `${area.name} | LoremAdvocates`,
    description: area.summary,
  };
}

export default async function ExpertiseAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);

  if (!area) notFound();

  return (
    <main className="bg-white font-inter text-gray-600">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-12 sm:pt-10 sm:pb-16 lg:px-10 lg:pb-20">
        <nav aria-label="Expertise navigation">
          <Link
            href="/expertise"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All expertise
          </Link>
        </nav>

        <header className="mt-6 grid gap-6 rounded-xl bg-[#173B2A] p-6 sm:p-10 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-8 lg:p-12">
          <span className="flex size-16 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-[#C8DEC8] lg:size-20">
            <ExpertiseIcon slug={area.slug} className="size-8 stroke-[1.5] lg:size-10" />
          </span>
          <div>
            <p className="type-eyebrow text-[#C8DEC8]">
              Area of practice
            </p>
            <h1 className="type-display mt-4 max-w-4xl text-white">
              {area.name}
            </h1>
            <p className="type-intro mt-5 max-w-3xl text-[#EAF3E9]">
              {area.summary}
            </p>
          </div>
        </header>

        <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
          <section
            aria-labelledby="overview-heading"
            className="rounded-xl border border-[#DCE6DC] bg-white p-6 sm:p-10"
          >
            <p className="type-eyebrow">
              Scope of practice
            </p>
            <h2
              id="overview-heading"
              className="type-section mt-3"
            >
              Overview
            </h2>
            <div className="type-body mt-6 max-w-prose space-y-5">
              {area.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <aside className="rounded-xl border border-[#DCE6DC] bg-white p-5 lg:sticky lg:top-8">
            <nav aria-labelledby="practice-navigation-heading">
              <h2
                id="practice-navigation-heading"
                className="type-title px-3 pt-1"
              >
                Explore our expertise
              </h2>
              <ul className="mt-5 space-y-1">
                {expertiseAreas.map((practice) => {
                  const isCurrent = practice.slug === area.slug;

                  return (
                    <li key={practice.slug}>
                      <Link
                        href={`/expertise/${practice.slug}`}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm leading-6 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B] ${
                          isCurrent
                            ? "bg-[#173B2A] font-semibold text-white"
                            : "text-gray-600 hover:bg-[#EAF3E9] hover:text-[#315F3B]"
                        }`}
                      >
                        <span>{practice.name}</span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className={`size-4 shrink-0 ${isCurrent ? "text-[#C8DEC8]" : "text-[#315F3B]"}`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-5 border-t border-[#DCE6DC] px-3 pt-5">
              <Link
                href="/team"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
              >
                Meet our team
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
