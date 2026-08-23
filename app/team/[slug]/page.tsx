import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Mock lawyer data — replace with real data or fetch from database
const lawyers = [
  {
    slug: "john-doe",
    name: "Adv. John Doe",
    designation: "Advocate",
    qualifications: "B.A., LL.B.",
    enrolment: "XXXXX",
    barCouncil: "State Bar Council",
    barAssociation: "District Bar Association",
    areasOfPractice: ["Civil Law", "Property Law", "Family Law"],
    courtsTribunals: ["District Court", "High Court"],
    professionalMemberships: ["Bar Council of India"],
    photo: null,
    bio: "Adv. John Doe is a practising advocate with experience in civil, property, and family law matters. He is enrolled with the State Bar Council and is a member of the District Bar Association.",
  },
  {
    slug: "jane-smith",
    name: "Adv. Jane Smith",
    designation: "Advocate",
    qualifications: "B.Com., LL.B.",
    enrolment: "XXXXX",
    barCouncil: "State Bar Council",
    barAssociation: "District Bar Association",
    areasOfPractice: ["Corporate Law", "Commercial Law", "Contract Law"],
    courtsTribunals: ["High Court", "National Company Law Tribunal"],
    professionalMemberships: ["Bar Council of India"],
    photo: null,
    bio: "Adv. Jane Smith is a practising advocate with experience in corporate and commercial law matters. She is enrolled with the State Bar Council and is a member of the District Bar Association.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lawyer = lawyers.find((l) => l.slug === slug);
  if (!lawyer) return { title: "Lawyer Not Found" };

  return {
    title: `${lawyer.name} | Our Team`,
    description: `Profile of ${lawyer.name} — ${lawyer.designation}. ${lawyer.areasOfPractice.join(", ")}.`,
  };
}

export default async function LawyerProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const lawyer = lawyers.find((l) => l.slug === slug);

  if (!lawyer) notFound();

  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Photo placeholder */}
            <div className="w-full max-w-xs shrink-0">
              <div className="aspect-[3/4] w-full rounded-lg bg-pale-green" />
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
                  {lawyer.name}
                </h1>
                <p className="mt-2 text-base text-muted-text">
                  {lawyer.designation}
                </p>
              </div>

              <div className="space-y-2 text-sm text-text">
                <p>
                  <span className="font-medium text-deep-green">
                    Qualifications:
                  </span>{" "}
                  {lawyer.qualifications}
                </p>
                <p>
                  <span className="font-medium text-deep-green">
                    Enrolment:
                  </span>{" "}
                  {lawyer.enrolment}
                </p>
                <p>
                  <span className="font-medium text-deep-green">
                    Bar Council:
                  </span>{" "}
                  {lawyer.barCouncil}
                </p>
                <p>
                  <span className="font-medium text-deep-green">
                    Bar Association:
                  </span>{" "}
                  {lawyer.barAssociation}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-green">
                  Areas of Practice
                </h2>
                <p className="mt-2 text-sm text-text">
                  {lawyer.areasOfPractice.join(" • ")}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-green">
                  Courts &amp; Tribunals
                </h2>
                <p className="mt-2 text-sm text-text">
                  {lawyer.courtsTribunals.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Professional Biography
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text">
                {lawyer.bio}
              </p>
            </div>

            {lawyer.professionalMemberships.length > 0 && (
              <div>
                <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                  Professional Memberships
                </h2>
                <ul className="mt-4 space-y-1 text-base text-text">
                  {lawyer.professionalMemberships.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
