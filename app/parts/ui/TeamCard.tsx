"use client";

import { Dialog } from "@base-ui/react/dialog";
import { ArrowUpRight, UserRound, X } from "lucide-react";
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
      unoptimized
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
      <Dialog.Trigger
        aria-label={`View profile of ${profile.name}`}
        className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-lg border border-[#DCE6DC] bg-[#EAF3E9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315F3B]"
      >
        <LawyerPortrait
          key={profile.image}
          src={profile.image}
          name={profile.name}
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
        />
      </Dialog.Trigger>

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
            <div className="relative aspect-[4/3] bg-[#EAF3E9] md:aspect-auto md:min-h-[560px]">
              <LawyerPortrait
                key={profile.image}
                src={profile.image}
                name={profile.name}
                sizes="(min-width: 768px) 380px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10 md:pt-16">
              {profile.position && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#315F3B]">
                  {profile.position}
                </p>
              )}
              <Dialog.Title className="mt-3 font-cormorant text-[38px] font-semibold leading-[1.15] text-[#173B2A] sm:text-[44px]">
                {profile.name}
              </Dialog.Title>

              {profile.specialization && (
                <div className="mt-7 border-y border-[#DCE6DC] py-5">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#526359]">
                    Areas of practice
                  </h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-[#315F3B]">
                    {profile.specialization}
                  </p>
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
