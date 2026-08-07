import type { CaseStudy } from "./types";

/**
 * Work — real case studies only.
 *
 * INTEGRITY RULE (see §67 of the brand brief): nothing here is fabricated.
 * Every entry describes work that verifiably exists. The first entry is
 * JEEM LABS' own platform — engineered in-house and documented honestly,
 * including its constraints.
 *
 * To add a client case study: copy the shape below, fill it with real
 * interfaces, real decisions and real numbers (with client permission),
 * and set `verified: true` only when it is genuinely live.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "jeem-labs-platform",
    caseNumber: "001",
    title: "The JEEM LABS Platform",
    client: "JEEM LABS — internal",
    sector: "Company platform & brand system",
    year: "2026",
    status: "LIVE",
    services: ["web-platforms", "cloud-infrastructure", "custom-software"],
    summary:
      "The site you are reading. Designed and engineered in-house as a long-term company platform: a tokenised design system, a typed content layer, and an architecture built to grow from services into products.",
    outcome:
      "A fast, accessible foundation the whole company will build on for years.",
    metrics: [],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    verified: true,
    sections: {
      overview:
        "Every engineering company eventually faces its own platform as a client. JEEM LABS treated this one exactly like client work: a defined brief, a design system before pages, architecture before decoration, and quality gates before shipping. It is both our home on the web and a working demonstration of how we think.",
      problem: {
        heading: "Problem",
        body: [
          "A technology company's website is evidence. Visitors — a CTO and a non-technical founder alike — judge our engineering by what they can inspect: speed, clarity, accessibility, structure. A generic template or an over-decorated 'AI startup' aesthetic would actively contradict the claim that we build considered software.",
          "The platform also had to outlive its first version. The business will evolve from services into hybrid services-and-products, so the architecture needed to absorb case studies, insights, products and future solution pages without a redesign.",
        ],
      },
      context: {
        heading: "Context",
        body: [
          "The constraints were self-imposed and strict: no fabricated testimonials or metrics, no decorative AI imagery, no scroll hijacking, light and dark modes as equals, WCAG 2.2 AA as an engineering requirement, and performance treated as a brand property.",
        ],
      },
      approach: {
        heading: "Approach",
        body: [
          "Foundations first. A tokenised colour system (graphite, off-white, cobalt, and a signal green drawn from the logo's nuqta), a fluid type scale and restrained geometry were defined as semantic tokens before a single page was composed. Pages are assembled from reusable patterns; content lives in typed modules shaped so a CMS can replace them later without touching the visual system.",
        ],
        bullets: [
          "Design tokens before components; components before pages",
          "Content modelled as typed data, not hard-coded markup",
          "Border-first visual language; elevation only where something floats",
          "Motion reserved for state, hierarchy and system behaviour",
        ],
      },
      architecture: {
        heading: "Architecture",
        body: [
          "Static-first rendering on the Next.js App Router. Every page is server-rendered at build time; the only client-side JavaScript is for the theme toggle, mobile navigation and form interaction. Content modules feed pages, the sitemap, metadata and structured data from one source of truth.",
        ],
        bullets: [
          "Server components by default; client islands only where interaction demands them",
          "Typed content layer → pages, metadata, sitemap and JSON-LD",
          "Form APIs with schema validation, honeypot and rate limiting",
          "Security headers (CSP, HSTS, frame and referrer policies) at the edge",
        ],
      },
      engineeringDecisions: {
        heading: "Engineering decisions",
        body: [
          "No client-side animation library: reveals are a small IntersectionObserver, and diagram motion is pure CSS, so the animation budget costs kilobytes rather than megabytes. No CSS-in-JS runtime: utilities compile to static styles. Fonts are self-hosted variable fonts. The contact and inquiry forms validate twice — schema on the client for feedback, schema on the server for truth.",
        ],
      },
      challenges: {
        heading: "Challenges",
        body: [
          "The hardest constraint was honesty. A new company has few public artefacts, and the temptation to fill a 'Work' page with invented logos is strong precisely because everyone notices its absence. The decision: show this platform as case 001, write real technical insights, and let the empty seats stay visibly empty until real work fills them. Trust compounds; decoration doesn't.",
        ],
      },
      results: {
        heading: "Results",
        body: [
          "A complete company platform — services, work, insights, products and conversion flows — running as static output with first-class light and dark themes, full keyboard operability, reduced-motion support and a documented content system the team can extend without design or engineering supervision.",
          "Performance and accessibility are checked on every release against a fixed budget. As real client work ships, this page is joined by verified case studies with real numbers.",
        ],
      },
      whatsNext: {
        heading: "What's next",
        body: [
          "The content layer is CMS-ready, the URL architecture reserves space for solution pages and product pages, and the product section is wired for status changes as internal tools mature. The platform's next milestone is a CMS migration — expected to be a content-source change, not a rebuild.",
        ],
      },
    },
    relatedServices: ["web-platforms", "custom-software", "cloud-infrastructure"],
    relatedInsights: ["performance-is-a-feature"],
  },
];

export const caseStudyMap = new Map(caseStudies.map((c) => [c.slug, c]));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudyMap.get(slug);
}

