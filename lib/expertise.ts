export type ExpertiseArea = {
  slug: string;
  name: string;
  summary: string;
  paragraphs: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "dispute-resolution-litigation-and-arbitration",
    name: "Dispute Resolution: Litigation and Arbitration",
    summary:
      "Representation and advisory in domestic and international arbitration, related litigation, mediation, and conciliation.",
    paragraphs: [
      "Alternate Dispute Resolution mechanisms are now preferred as more time and cost-effective solutions vis-à-vis litigation, to resolve disputes. Strategic actions and decisions, in raising as well as countering such disputes, are vital to protecting one’s rights and it is with this approach that we routinely represent clients and advise them on institutional and ad hoc arbitrations as well as pre and post-arbitration litigation pertaining to International as well as Domestic Arbitration.",
      "We have been involved in several landmark cases decided by the High Courts as well the Hon’ble Supreme Court of India. We have a diversified gamut of clients including, companies, institutions as well as Individuals, across sectors such as constructions, real estate, education and Information Technology.",
      "We also represent clients regularly during mediation and conciliation proceedings before various forums. Our approach is always focused towards expeditious settlement of disputes, which in turn leads to and promotes business development.",
    ],
  },
  {
    slug: "intellectual-property-laws",
    name: "Intellectual Property Laws",
    summary:
      "Protection of intellectual property rights, registration assistance, franchising, licensing, and representation in intellectual property claims.",
    paragraphs: [
      "We protect and defend all innovations, ideas, designs, products and identities. The firm deals with all aspects of intellectual property rights and provides a full range of services to clients, including assistance with the registration of intellectual property rights with the Trademark Registry and Copyright Board.",
      "We also give comprehensive advice on franchising and licensing, and represent clients before the Trademark Registry and Copyright Board for all types of intellectual property claims.",
    ],
  },
  {
    slug: "insolvency-law",
    name: "Insolvency Law",
    summary:
      "Advisory and representation in debt restructuring, insolvency proceedings, project financing, and matters involving creditors and corporate debtors.",
    paragraphs: [
      "In 2016 a new Insolvency and Bankruptcy regime was introduced to provide a uniform and consolidated framework for reorganization and insolvency resolution of corporate persons, partnership firms and individuals. From the onset, we have been advising our clients to effectively restructure debts, project financing, deal managements and negotiations.",
      "We have also represented clients before various Tribunals and Courts to help them move forward with their issues pertaining to Finance and Insolvency Laws. During the short span of operation of the new Insolvency Laws, we have represented various Financial Creditors, Operational Creditors, Resolution Professionals and Corporate Debtors in order to safeguard their financial interests. in matters involving high net-worth companies, including some Fortune 500 Companies (India).",
    ],
  },
  {
    slug: "corporate-criminal-law",
    name: "Corporate Criminal Law",
    summary:
      "Legal advice and representation for corporate entities and individuals in matters concerning corporate crime and its impact on business operations.",
    paragraphs: [
      "With the rapid pace in Globalization and Industrialization all over the world today, we are faced with Crimes of a nature which have become organized, institutionalized and hard to detect. Corporate Crimes is a major challenge to the legal fraternity, the law makers, and the law enforcers.",
      "Corporate crimes in has no borders and can affect the economies of countries on a large scale and can cause huge losses to Corporate houses on a smaller scale by bringing the functioning of their businesses to halt. Keeping in view the disadvantages brought by the changing economy we render our expert advice and represent corporate houses and leading corporate individuals in mitigation of Corporate Crimes.",
    ],
  },
  {
    slug: "energy-and-electricity-laws",
    name: "Energy and Electricity Laws",
    summary:
      "Advisory and representation for energy and renewable energy generators and distributors in regulatory and litigation matters.",
    paragraphs: [
      "India is one of the largest Energy Producers in the world. The Energy Sector in India has seen a host of robust reforms in Policies and Regulations in recent times, making it one of the most preferred Sectors for investment globally.",
      "Having gauged the current challenges involved in this Sector and being adept with the dynamic and evolving framework of Energy Laws, we have advised and represented various Energy and Renewable Energy Generators as well as Distributors in a number of High-Stake Regulatory and Litigation matters.",
    ],
  },
  {
    slug: "employment-and-labour-law",
    name: "Employment and Labour Law",
    summary:
      "Employment litigation and advisory, labour conciliation, disciplinary proceedings, retrenchment, layoffs, and workplace dispute resolution.",
    paragraphs: [
      "Human capital is one of the major forces behind the economic growth of a country. The Employment and Labour Laws have been regulated extensively aiming towards employee welfare in order to boost industry productivity.",
      "We deal with all aspects of employment law including litigation, transactional and advisory matter. We also advise on labour conciliation and settlements, disciplinary proceedings, retrenchment, layoffs and dispute resolution and all others intricacies convoluting in labour law litigation.",
      "We represent employees and employers on regular basis in labour-related disputes before Labour Courts and Tribunals, High Courts and the Supreme Court of India.",
    ],
  },
  {
    slug: "telecom-real-estate-and-infrastructure-laws",
    name: "Telecom, Real Estate and Infrastructure Laws",
    summary:
      "Litigation and regulatory compliance advice for builders, contractors, infrastructure providers, telecommunication service providers, and flat buyers.",
    paragraphs: [
      "Infrastructure is the foundation on which the economic success of a rapidly developing country like India is built. Therefore, Infrastructure Laws such as Telecom and Broadcasting Laws, Real Estate Laws etc. are constantly under reform in order to meet the requirements of holistic development of the country.",
      "With an in-depth knowledge of Property Laws, Real Estate Laws and Telecommunication Laws, we have represented and advised an array of corporate entities including Builders, Contractors, Infrastructure Providers, Telecommunication Service Providers and Flat Buyers, etc. in Litigations and Regulatory Compliance related matters.",
    ],
  },
  {
    slug: "consumer-protection-laws",
    name: "Consumer Protection Laws",
    summary:
      "Litigation and advisory concerning unfair trade practices, deficient services, and consumer grievances before competent forums.",
    paragraphs: [
      "Just like the Consumer Protection Act, 1986, we also aim at “better protection of interests of consumers” from unfair and restrictive trade practices as well as deficient services by Traders as well as Service Providers.",
      "We have an extensive practice under the Act and have been engaged in providing comprehensive Litigation and Advisory services to get our Clients effective and timely redressal for their grievances. Over the years we have successfully represented various Consumers (Individuals as well as Corporate Entities) against Builders, Luxury Automobile Companies and Banking & Financial Institutions etc. before various competent forums.",
    ],
  },
  {
    slug: "civil-and-commercial-litigation",
    name: "Civil and Commercial Litigation",
    summary:
      "Representation in civil and arbitral proceedings, recovery suits, matrimonial matters, guardianship, partition, tenancy, and contractual disputes.",
    paragraphs: [
      "We are actively engaged in representing Companies as well as Individuals in their disputes relating to Civil Litigation. We assist and advice Our Clients in various civil and arbitral proceedings.",
      "The firm’s diverse practice in the field of Civil Litigation includes in handling matters such as Suit for Recovery, Executions, Matrimonial disputes such as Divorce, Maintenance, matters relating to Guardianship, Suit for Partitions, Tenancy disputes, Suits for Specific performance, Summary Suits before District Courts, High Courts and the Hon’ble Supreme Court of India.",
      "Given the wide variety of complex civil litigation issues our Firm deals with, we practice effective legal strategies for a positive outcome.",
    ],
  },
];

export function getExpertiseArea(slug: string): ExpertiseArea | undefined {
  return expertiseAreas.find((area) => area.slug === slug);
}
