import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ExpertiseIcon from "@/app/parts/ui/ExpertiseIcon";
import type { ExpertiseArea } from "@/lib/expertise";

export default function ExpertiseCard({
  area,
  index,
}: {
  area: ExpertiseArea;
  index?: number;
}) {
  return (
    <Link
      href={`/expertise/${area.slug}`}
      className="group flex h-full flex-col rounded-xl border border-[#DCE6DC] bg-white p-6 transition-colors hover:border-[#315F3B] hover:bg-[#EAF3E9]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B] sm:p-8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex size-14 items-center justify-center rounded-xl bg-[#EAF3E9] text-[#315F3B]">
          <ExpertiseIcon slug={area.slug} className="size-7 stroke-[1.5]" />
        </span>
        {index !== undefined && (
          <span
            aria-hidden="true"
            className="font-cormorant text-3xl font-medium text-gray-600"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="type-title mt-6">
        {area.name}
      </h3>
      <p className="type-body mt-4 flex-1">
        {area.summary}
      </p>
      <span className="mt-6 flex min-h-11 items-center justify-between gap-3 border-t border-[#DCE6DC] pt-5 text-sm font-semibold text-[#315F3B]">
        View practice area
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EAF3E9] transition-colors group-hover:bg-[#315F3B] group-hover:text-white group-focus-visible:bg-[#315F3B] group-focus-visible:text-white">
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
