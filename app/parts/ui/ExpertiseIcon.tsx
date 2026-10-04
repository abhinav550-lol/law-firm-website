import {
  Building2,
  Handshake,
  Landmark,
  Lightbulb,
  Scale,
  ShieldCheck,
  ShoppingBag,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

const practiceIcons: Record<string, LucideIcon> = {
  "dispute-resolution-litigation-and-arbitration": Handshake,
  "intellectual-property-laws": Lightbulb,
  "insolvency-law": Landmark,
  "corporate-criminal-law": ShieldCheck,
  "energy-and-electricity-laws": Zap,
  "employment-and-labour-law": UsersRound,
  "telecom-real-estate-and-infrastructure-laws": Building2,
  "consumer-protection-laws": ShoppingBag,
  "civil-and-commercial-litigation": Scale,
};

export default function ExpertiseIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = practiceIcons[slug] ?? Scale;
  return <Icon aria-hidden="true" className={className} />;
}
