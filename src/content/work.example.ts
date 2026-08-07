import type { CaseStudy } from "./types";

/**
 * TEMPLATE — how to add a real client case study.
 *
 * 1. Copy this object into the `caseStudies` array in `work.ts`.
 * 2. Replace every value with real, client-approved material.
 * 3. Leave `metrics` empty until real, approved numbers exist.
 * 4. Set `verified: true` only when the work is genuinely live.
 *
 * This file is never imported by the site. It is documentation.
 */
export const caseStudyTemplate: CaseStudy = {
  slug: "client-project-name", // /work/client-project-name
  caseNumber: "002",
  title: "The real project name",
  client: "Real client name (with written permission) or 'Confidential client'",
  sector: "Their sector",
  year: "2026",
  status: "LIVE", // must be true — don't say LIVE for staging
  services: ["web-platforms"],
  summary:
    "One paragraph: what it is, who it's for, and the problem it solves.",
  outcome: "One line of verifiable outcome for cards and previews.",
  metrics: [
    // { label: "Checkout conversion", value: "+18%" } — approved numbers only
  ],
  technologies: ["The", "actual", "stack"],
  verified: false, // flip to true only when live
  sections: {
    overview:
      "What a reader needs to understand the whole study in one paragraph.",
    problem: {
      heading: "Problem",
      body: ["The business problem, in the client's terms."],
    },
    context: {
      heading: "Context",
      body: ["Constraints: team, timeline, existing systems, regulations."],
    },
    approach: {
      heading: "Approach",
      body: ["How we framed and sequenced the work."],
      bullets: ["Key decision points"],
    },
    architecture: {
      heading: "Architecture",
      body: ["How the system is structured and why."],
    },
    engineeringDecisions: {
      heading: "Engineering decisions",
      body: ["The non-obvious calls and their trade-offs."],
    },
    challenges: {
      heading: "Challenges",
      body: ["What went wrong or was hard. Real studies include this."],
    },
    results: {
      heading: "Results",
      body: ["What resulted — with evidence, or stated qualitatively and honestly."],
    },
    whatsNext: {
      heading: "What's next",
      body: ["Where the product goes from here."],
    },
  },
  relatedServices: ["web-platforms"],
  relatedInsights: [],
};
