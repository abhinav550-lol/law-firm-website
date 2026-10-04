"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import ResourceCard from "@/app/parts/ui/ResourceCard";
import {
  resourceCategories,
  type ResourceFilter,
  type ResourceSummary,
} from "@/lib/legal-resources";

export default function ResourceLibrary({
  resources,
}: {
  resources: ResourceSummary[];
}) {
  const [category, setCategory] = useState<ResourceFilter>("All");
  const filteredResources = resources.filter(
    (resource) => category === "All" || resource.category === category,
  );

  return (
    <section aria-label="Browse legal resources" className="mt-8 sm:mt-10">
      <div
        role="group"
        aria-label="Filter resources by category"
        className="flex flex-wrap gap-x-5 gap-y-1 border-b border-[#DCE6DC] sm:gap-x-8"
      >
        {resourceCategories.map((filter) => {
          const selected = category === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              aria-controls="resource-results"
              onClick={() => setCategory(filter)}
              className={`relative min-h-11 cursor-pointer border-b-2 px-1 py-3 text-sm leading-6 transition-colors duration-150 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B] ${
                selected
                  ? "border-[#315F3B] font-semibold text-[#173B2A]"
                  : "border-transparent font-medium text-[#26312B]/75 hover:border-[#DCE6DC] hover:text-[#315F3B]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 py-6">
        <p
          aria-live="polite"
          aria-atomic="true"
          className="text-sm leading-6 text-[#26312B]/75"
        >
          {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
          {category !== "All" ? ` in ${category}` : " in the library"}
        </p>
        <p className="text-xs leading-5 text-[#26312B]/75">
          Latest publications first
        </p>
      </div>

      <div id="resource-results">
        {filteredResources.length > 0 ? (
          <ul
            aria-label={category === "All" ? "All legal resources" : category}
            className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-6"
          >
            {filteredResources.map((resource, index) => {
              const featured = category === "All" && index === 0;
              return (
                <li
                  key={resource.slug}
                  className={featured ? "md:col-span-2" : undefined}
                >
                  <ResourceCard resource={resource} featured={featured} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="rounded-lg border border-[#DCE6DC] bg-white p-8 sm:p-10">
            <BookOpen aria-hidden="true" className="size-6 stroke-[1.5] text-[#315F3B]" />
            <h2 className="mt-4 font-cormorant text-2xl font-semibold leading-[1.25] text-[#173B2A]">
              No {category === "FAQs" ? "FAQs" : category.toLowerCase()} published yet
            </h2>
            <p className="mt-3 max-w-prose text-base leading-7 text-[#26312B]/80">
              There are no resources in this category yet. You can continue
              browsing the full library.
            </p>
            <button
              type="button"
              onClick={() => setCategory("All")}
              className="mt-5 min-h-11 cursor-pointer rounded-sm text-sm font-semibold text-[#315F3B] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
            >
              View all resources
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
