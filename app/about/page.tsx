import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Law Firm",
  description:
    "Learn about our law firm's history, professional approach, and areas of practice.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            About Our Firm
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            A brief introduction to our firm, our approach, and the values that
            guide our practice.
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="bg-pale-green px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
            Our Approach
          </h2>
          <p className="text-base leading-relaxed text-text">
            We provide professional legal services grounded in integrity,
            diligence, and a commitment to our clients&apos; interests. Our
            practice is built on thorough research, careful analysis, and clear
            communication.
          </p>
        </div>
      </section>

      {/* Areas of Practice */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
            Areas of Practice
          </h2>
          <p className="text-base leading-relaxed text-text">
            Our lawyers handle matters across a range of legal disciplines,
            including civil, criminal, property, family, corporate, and
            constitutional law.
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-pale-green px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
            Our Office
          </h2>
          <p className="text-base leading-relaxed text-muted-text">
            Office address, contact details, and directions will appear here.
          </p>
        </div>
      </section>
    </main>
  );
}
