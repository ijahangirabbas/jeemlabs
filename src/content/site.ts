import type { NavItem } from "./types";

export const site = {
  name: "JEEM LABS",
  legalName: "JEEM LABS",
  domain: "thejeemlabs.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://thejeemlabs.com",
  email: "hello@thejeemlabs.com",
  /**
   * One-line positioning. Engineering-led, not agency-framed.
   */
  tagline: `Engineering what matters.
    Building what's next.`,
  positioning:
    "An engineering-led technology company designing and building software and intelligent systems around real business problems.",
  description:
    "JEEM LABS is an engineering-led technology company. We design and build custom software, AI systems, web platforms, mobile applications and cloud infrastructure around real business problems — for founders, startups, and established organisations.",
  /**
   * Live availability state — the only place "● AVAILABLE" is asserted,
   * and it is true: JEEM LABS accepts new engagements.
   */
  availability: "AVAILABLE" as const,
  /** Optional scheduling link; when empty the UI falls back to email. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  social: {
    github: "https://github.com/thejeemlabs",
    linkedin: "https://www.linkedin.com/company/jeemlabs",
    x: "https://x.com/jeemlabs",
  },
} as const;

/** Primary navigation — restrained. The logo carries "Home". */
export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Services",
    items: [
      { label: "AI Engineering", href: "/services/ai-engineering" },
      { label: "Web Platforms", href: "/services/web-platforms" },
      { label: "Mobile Applications", href: "/services/mobile-applications" },
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Automation & Integrations", href: "/services/automation-integrations" },
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Products", href: "/products" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Insights", href: "/insights" },
      { label: "Case Studies", href: "/work" },
      { label: "Start a Project", href: "/start-project" },
      { label: "GitHub", href: "https://github.com/thejeemlabs" },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];
