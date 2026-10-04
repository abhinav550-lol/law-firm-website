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
    <main className="bg-white font-inter text-gray-600">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-16 lg:pb-20">
        <header>
          <p className="type-eyebrow">
            Knowledge &amp; perspective
          </p>
          <h1 className="type-display mt-4">
            Legal Resources
          </h1>
          <p className="type-intro mt-5 max-w-2xl">
            Articles, updates, and guides exploring legal concepts, procedures,
            and developments. A place to read, understand, and stay informed.
          </p>
          <div className="type-meta mt-5 flex max-w-3xl items-start gap-2">
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
