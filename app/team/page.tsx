import type { Metadata } from "next";
import TeamCard from "@/app/parts/ui/TeamCard";
import type { Lawyer } from "@/lib/lawyers";

export const metadata: Metadata = {
  title: "Our Team | Advocacy",
  description:
    "Meet the people at Advocacy and explore their professional backgrounds and areas of practice.",
};

// Mock lawyer data — replace with real data or fetch from database
// Add full profile URLs below when available; empty links stay hidden.
const lawyers: Lawyer[] = [
  {
    name: "Arjun Mehra",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP55-50uNoL7aefdx8geIxXrwsz3CFWy4_44j1h_Y1Nw&s=10",
    linkedin: "",
    facebook: "",
    position: "Senior Advocate",
    specialization: "Corporate & Commercial Litigation",
    about:
      "With over two decades of legal experience, Arjun Mehra has represented clients in complex corporate disputes, arbitration matters, and high-value commercial litigation.",
  },
  {
    name: "Riya Khanna",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    linkedin: "http://facebook.com/",
    facebook: "http://facebook.com/",
    position: "Advocate",
    specialization: "Family & Property Law",
    about:
      "Riya focuses on family disputes, inheritance matters, and property litigation, providing practical and compassionate legal guidance to individuals and families.",
	
  },
  {
    name: "Vikram Sethi",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    linkedin: "",
    facebook: "",
    position: "Senior Advocate",
    specialization: "Civil & Constitutional Law",
    about:
      "Vikram Sethi has extensive courtroom experience in civil and constitutional matters, with a strong background in writ petitions, public law, and complex civil disputes.",
  },
  {
    name: "Aarav Malhotra",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    linkedin: "",
    facebook: "",
    position: "Advocate",
    specialization: "Criminal Litigation",
    about:
      "Aarav represents clients in criminal litigation and regulatory matters, with a focus on detailed case preparation, legal research, and effective courtroom advocacy.",
  },
  {
    name: "Neha Kapoor",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    linkedin: "",
    facebook: "",
    position: "Senior Advocate",
    specialization: "Arbitration & Dispute Resolution",
    about:
      "Neha Kapoor advises businesses and individuals on arbitration, contractual disputes, and commercial conflicts, with significant experience in alternative dispute resolution.",
  },
  {
    name: "Kabir Anand",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&w=900&q=80",
    linkedin: "",
    facebook: "",
    position: "Advocate",
    specialization: "Corporate & Contract Law",
    about:
      "Kabir works with startups, companies, and private clients on contracts, corporate advisory, compliance, and commercial transactions, with an emphasis on clear and practical legal solutions.",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#F4F8F2] font-inter text-[#26312B]">
      <section aria-labelledby="team-heading" className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-10 lg:py-12">
        <header className="mb-10 border-b border-[#DCE6DC] pb-8 sm:mb-12 sm:pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#315F3B]">
            The people behind the practice
          </p>
          <h1 id="team-heading" className="mt-4 font-cormorant text-[42px] font-semibold leading-[1.05] text-[#173B2A] sm:text-[56px]">
            Our Team
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#526359]">
           Meet the legal professionals behind our firm, bringing experience, dedication, and trusted counsel to every case.
          </p>
        </header>

        <ul aria-label="Lawyers at the firm" className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {lawyers.map((lawyer, index) => (
            <li
              key={`${lawyer.name ?? "lawyer"}-${index}`}
              className="animate-fade-up animate-300ms"
              style={{ animationDelay: `${Math.min(index * 60, 300)}ms` }}
            >
              <TeamCard lawyer={lawyer} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
