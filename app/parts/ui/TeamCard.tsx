"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ArrowUpRight, Scale, UserRound, X } from "lucide-react";
import { useState } from "react";
import { getLawyerProfile, type Lawyer } from "@/lib/lawyers";
import Image from "next/image";

function LawyerPortrait({
  src,
  name,
  sizes,
  className,
}: {
  src: string;
  name: string;
  sizes: string;
  className: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#EAF3E9] text-[#526359]">
        <UserRound aria-hidden="true" className="size-14 stroke-1" />
        <span className="text-sm">Portrait unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      unoptimized={!src.startsWith("/")}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function TeamCard({ lawyer }: { lawyer?: Lawyer | null }) {
  const profile = getLawyerProfile(lawyer);
  const socialLinks = [
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Facebook", href: profile.facebook },
  ].filter((link) => link.href);

  return (
    <Dialog.Root>
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#DCE6DC] bg-white transition-colors hover:border-[#315F3B] focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-[#315F3B]"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#EAF3E9]">
          <LawyerPortrait
            key={profile.image}
            src={profile.image}
            name={profile.name}
            sizes="(min-width: 1280px) 282px, (min-width: 640px) 50vw, 100vw"
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.025] group-focus-within:scale-[1.025]"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6 xl:p-5">
          {profile.position && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#315F3B]">
              {profile.position}
            </p>
          )}
          <h2 className="mt-2 font-cormorant text-[28px] font-semibold leading-[1.15] text-[#173B2A]">
            {profile.name}
          </h2>
          {profile.specialization && (
            <p className="mt-3 text-sm leading-6 text-[#526359]">
              {profile.specialization}
            </p>
          )}
          <div className="flex-1" />
          <Dialog.Trigger
            aria-label={`View profile of ${profile.name}`}
            className="mt-5 flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 border-t border-[#DCE6DC] pt-4 text-left text-sm font-semibold text-[#315F3B] after:absolute after:inset-0 after:rounded-xl after:content-[''] focus-visible:outline-none"
          >
            View profile
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EAF3E9] transition-colors group-hover:bg-[#315F3B] group-hover:text-white group-focus-within:bg-[#315F3B] group-focus-within:text-white">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Dialog.Trigger>
        </div>
      </article>

      <Dialog.Portal>
        <Dialog.Backdrop className="team-profile-backdrop fixed inset-0 z-50 bg-[#173B2A]/50" />
        <Dialog.Popup className="team-profile-dialog fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-xl border border-[#DCE6DC] bg-white font-inter text-[#26312B] outline-none">
          <Dialog.Close
            aria-label="Close profile"
            className="absolute top-3 right-3 z-10 flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#DCE6DC] bg-white text-[#173B2A] hover:bg-[#EAF3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B]"
          >
            <X aria-hidden="true" className="size-5" />
          </Dialog.Close>

          <div className="grid md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF3E9] md:aspect-auto md:min-h-[560px]">
              <LawyerPortrait
                key={profile.image}
                src={profile.image}
                name={profile.name}
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10 md:pt-16">
              {profile.position && (
                <p className="inline-flex rounded-md bg-[#EAF3E9] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#315F3B]">
                  {profile.position}
                </p>
              )}
              <Dialog.Title className="mt-3 font-cormorant text-[38px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[44px]">
                {profile.name}
              </Dialog.Title>

              {profile.specialization && (
                <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#DCE6DC] bg-white p-4">
                  <Scale
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 stroke-[1.5] text-[#315F3B]"
                  />
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526359]">
                      Areas of practice
                    </h3>
                    <p className="mt-2 text-base font-medium leading-relaxed text-[#315F3B]">
                      {profile.specialization}
                    </p>
                  </div>
                </div>
              )}

              {profile.about ? (
                <>
                  <h3 className="mt-7 font-cormorant text-2xl font-semibold text-[#173B2A]">
                    Professional background
                  </h3>
                  <Dialog.Description className="mt-3 text-base leading-7 text-[#526359]">
                    {profile.about}
                  </Dialog.Description>
                </>
              ) : (
                <Dialog.Description className="sr-only">
                  Professional profile of {profile.name}.
                </Dialog.Description>
              )}

              {socialLinks.length > 0 && (
                <section aria-label="Social profiles" className="mt-8 border-t border-[#DCE6DC] pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526359]">
                    Socials
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {socialLinks.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${profile.name} on ${label} (opens in a new tab)`}
                          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#DCE6DC] px-4 py-2 text-sm font-medium text-[#315F3B] hover:bg-[#EAF3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B]"
                        >
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
