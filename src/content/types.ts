/**
 * JEEM LABS — content schemas.
 *
 * Every repeatable content type on the site is defined here as a typed
 * structure. Content lives in plain TypeScript modules today and can be
 * migrated to a CMS later without touching the visual system — the shape
 * is the contract.
 */

/** Semantic states the JEEM Signal may communicate. Never decorative. */
export type SignalState =
  | "LIVE"
  | "AVAILABLE"
  | "ACTIVE"
  | "OPERATIONAL"
  | "DEPLOYED"
  | "BETA"
  | "IN DEVELOPMENT";

export type ServiceId =
  | "ai-engineering"
  | "web-platforms"
  | "mobile-applications"
  | "custom-software"
  | "automation-integrations"
  | "cloud-infrastructure";

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: ServiceId;
  index: string; // "01"
  name: string;
  /** One-line outcome used in lists and metadata. */
  tagline: string;
  /** Outcome-focused hero proposition. */
  proposition: string;
  /** Short capability list shown in the interactive index. */
  keywords: string[];
  /** Business problems this service resolves. */
  problems: { title: string; description: string }[];
  capabilities: ServiceCapability[];
  /** How JEEM approaches this class of problem. */
  approach: { step: string; detail: string }[];
  /** Which architecture diagram variant to render, if any. */
  diagram: "ai" | "web" | "mobile" | "software" | "automation" | "cloud" | null;
  /** Supporting technology — context, never the headline. */
  technologies: string[];
  faqs: ServiceFaq[];
  /** Related work slugs. */
  relatedWork: string[];
  /** Related insight slugs. */
  relatedInsights: string[];
}

export interface CaseStudySection {
  heading: string;
  /** Paragraphs of plain copy. */
  body?: string[];
  /** Optional bullet list rendered after the body. */
  bullets?: string[];
}

export interface CaseStudy {
  slug: string;
  caseNumber: string; // "001"
  title: string;
  client: string;
  sector: string;
  year: string;
  status: SignalState;
  services: ServiceId[];
  summary: string;
  /** One-line outcome for cards. */
  outcome: string;
  /** Verifiable metrics only. Empty array until real numbers exist. */
  metrics: { label: string; value: string }[];
  technologies: string[];
  /** True only for work that verifiably exists. Controls rendering claims. */
  verified: boolean;
  sections: {
    overview: string;
    problem: CaseStudySection;
    context: CaseStudySection;
    approach: CaseStudySection;
    architecture: CaseStudySection;
    engineeringDecisions: CaseStudySection;
    challenges: CaseStudySection;
    results: CaseStudySection;
    whatsNext: CaseStudySection;
  };
  relatedServices: ServiceId[];
  relatedInsights: string[];
}

export interface InsightBlock {
  type: "paragraph" | "heading" | "subheading" | "list" | "code" | "quote";
  text?: string;
  items?: string[];
  language?: string;
}

export interface Insight {
  slug: string;
  title: string;
  description: string;
  category: "AI" | "Engineering" | "Product" | "Business" | "JEEM";
  date: string; // ISO
  readingTime: string;
  blocks: InsightBlock[];
  relatedServices: ServiceId[];
  relatedWork: string[];
}

export interface ProductTeaser {
  id: string;
  name: string;
  description: string;
  status: SignalState;
}

export interface NavItem {
  label: string;
  href: string;
}
