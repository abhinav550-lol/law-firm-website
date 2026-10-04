import type { Metadata } from "next";
import { Info } from "lucide-react";
import ResourceLibrary from "@/app/parts/ui/ResourceLibrary";
import { getResourceSummary, legalResources } from "@/lib/legal-resources";

export const metadata: Metadata = {
  title: "Legal Resources | LoremAdvocates",
  description:
    "Browse legal articles, legal updates, FAQs, and guides from LoremAdvocates for general informational purposes.",
};

export default function LegalResourcesPage() {
  const resources = legalResources
    .map(getResourceSummary)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <main className="bg-white font-inter text-[#26312B]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315F3B]">
            Knowledge &amp; perspective
          </p>
          <h1 className="mt-4 font-cormorant text-[38px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[56px] sm:leading-[1.05]">
            Legal Resources
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#26312B]/80">
            Articles, updates, and guides exploring legal concepts, procedures,
            and developments. A place to read, understand, and stay informed.
          </p>
          <div className="mt-5 flex max-w-3xl items-start gap-2 text-sm leading-6 text-[#26312B]/75">
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#315F3B]" />
            <p>
              For general informational purposes only. This content does not
              constitute legal advice.
            </p>
          </div>
        </header>

        <ResourceLibrary resources={resources} />
      </div>
    </main>
  );
}
