"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactDetails, officeLocations } from "@/lib/contact";

const contactLinks = [
  { label: "Phone", value: contactDetails.phone, href: contactDetails.phoneHref },
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    label: "Website",
    value: contactDetails.website,
    href: contactDetails.websiteHref,
  },
];

export default function ContactOffices() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>(
    officeLocations[0].id,
  );
  const selectedOffice =
    officeLocations.find((office) => office.id === selectedOfficeId) ??
    officeLocations[0];
  const mapQuery = encodeURIComponent(selectedOffice.mapQuery);

  return (
    <div className="mt-10 grid items-start gap-10 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="min-w-0">
        <section aria-labelledby="offices-heading">
          <h2
            id="offices-heading"
            className="font-cormorant text-[32px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[38px]"
          >
            Our Offices
          </h2>
          <div className="mt-6 space-y-4">
            {officeLocations.map((office) => {
              const selected = office.id === selectedOffice.id;

              return (
                <article
                  key={office.id}
                  aria-labelledby={`${office.id}-heading`}
                  data-selected={selected}
                  className={`rounded-lg border p-6 transition-colors duration-200 ${
                    selected
                      ? "border-[#315F3B]/40 bg-[#EAF3E9]"
                      : "border-[#DCE6DC] bg-white"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs leading-5">
                    <p className="font-semibold uppercase tracking-[0.16em] text-[#315F3B]">
                      {office.label}
                    </p>
                    {selected && (
                      <span className="text-[#315F3B]">Shown on map</span>
                    )}
                  </div>
                  <h3
                    id={`${office.id}-heading`}
                    className="mt-3 font-cormorant text-2xl font-semibold leading-[1.25] text-[#173B2A]"
                  >
                    {office.city}
                  </h3>
                  <address className="mt-3 text-base leading-7 not-italic text-[#26312B]/80">
                    {office.addressLine}
                    <br />
                    {office.regionLine}
                    <br />
                    {office.country}
                  </address>
                </article>
              );
            })}
          </div>
        </section>

        <section
          aria-labelledby="contact-details-heading"
          className="mt-8 border-t border-[#DCE6DC] pt-8"
        >
          <h2
            id="contact-details-heading"
            className="font-cormorant text-2xl font-semibold leading-[1.25] text-[#173B2A]"
          >
            General Enquiries
          </h2>
          <dl className="mt-4 divide-y divide-[#DCE6DC]">
            {contactLinks.map(({ label, value, href }) => (
              <div
                key={label}
                className="grid items-baseline gap-x-6 gap-y-1 py-3 sm:grid-cols-[5rem_minmax(0,1fr)]"
              >
                <dt className="text-sm leading-6 text-[#26312B]/75">{label}</dt>
                <dd className="min-w-0">
                  <a
                    href={href}
                    className="inline-flex min-h-11 max-w-full items-center rounded-sm text-base font-medium leading-7 text-[#315F3B] [overflow-wrap:anywhere] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section
        aria-labelledby="location-heading"
        className="min-w-0 overflow-hidden rounded-lg border border-[#DCE6DC] bg-white"
      >
        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315F3B]">
            Office locations
          </p>
          <h2
            id="location-heading"
            className="mt-3 font-cormorant text-[32px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[38px]"
          >
            Find an Office
          </h2>
          <div
            role="group"
            aria-label="Choose an office to view on the map"
            className="mt-5 flex flex-wrap gap-x-6 gap-y-1 border-b border-[#DCE6DC]"
          >
            {officeLocations.map((office) => {
              const selected = office.id === selectedOffice.id;

              return (
                <button
                  key={office.id}
                  type="button"
                  aria-pressed={selected}
                  aria-controls="office-location"
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`min-h-11 cursor-pointer border-b-2 px-1 py-3 text-sm leading-6 transition-colors duration-150 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B] ${
                    selected
                      ? "border-[#315F3B] font-semibold text-[#173B2A]"
                      : "border-transparent font-medium text-[#26312B]/75 hover:border-[#DCE6DC] hover:text-[#315F3B]"
                  }`}
                >
                  {office.label} · {office.city}
                </button>
              );
            })}
          </div>
        </div>

        <div id="office-location" className="mt-6">
          <div className="aspect-[4/3] bg-[#EAF3E9]">
            <iframe
              key={selectedOffice.id}
              title={`Area map for ${selectedOffice.label} in ${selectedOffice.city}`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0 grayscale"
            />
          </div>
          <div className="border-t border-[#DCE6DC] px-6 py-6 sm:px-8">
            <p
              aria-live="polite"
              aria-atomic="true"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#315F3B]"
            >
              {selectedOffice.label} · {selectedOffice.city}
            </p>
            <p className="mt-2 text-base leading-7 text-[#26312B]/80">
              {selectedOffice.addressLine}
              <br />
              {selectedOffice.regionLine}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#315F3B] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
            >
              Open area in Google Maps
              <span className="sr-only">(opens in a new tab)</span>
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <p className="mt-2 text-xs leading-5 text-[#26312B]/75">
              The map shows the surrounding area for this sample office address.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
