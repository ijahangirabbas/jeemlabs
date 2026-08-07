/**
 * Company-level content: process, principles, about, careers, contact topics.
 * Written to be defensible — every statement here is something JEEM LABS
 * is prepared to be held to in a client conversation.
 */

export const processSteps = [
  {
    step: "01",
    name: "Discover",
    summary:
      "We learn the problem before proposing anything: the business, the users, the constraints, and what success is measured against.",
    detail:
      "For a small project this is a single focused conversation and a written quote. For a complex one it becomes structured discovery — requirements, technical review and a proposal with architecture and milestones.",
  },
  {
    step: "02",
    name: "Design",
    summary:
      "Flows, interfaces and the system underneath them, resolved together. Design is how the thing works, then how it looks.",
    detail:
      "We design in the medium that will ship: real components and real data shapes, not pictures of software. Feedback happens on working prototypes early.",
  },
  {
    step: "03",
    name: "Engineer",
    summary:
      "Vertical slices of working software from the first weeks — reviewed, tested and visible, never a long silence followed by a reveal.",
    detail:
      "Quality is enforced by the pipeline: types, tests, review and performance budgets on every change, so the last week isn't a repair shop.",
  },
  {
    step: "04",
    name: "Ship",
    summary:
      "Deployment is automated and unremarkable. Launch day should feel like any other Tuesday.",
    detail:
      "Staging, rollback, monitoring and documentation are part of 'done', not a follow-up project.",
  },
  {
    step: "05",
    name: "Support & scale",
    summary:
      "Software has a pulse after launch. We stay available — or hand over cleanly to your team, with runbooks and training.",
    detail:
      "Support is a defined agreement with response targets, not goodwill. Handover is a first-class outcome, never a hostage situation.",
  },
  {
    step: "06",
    name: "The JEEM standard",
    summary:
      "Every engagement, any size: typed code, tested changes, accessibility AA, a performance budget and documentation.",
    detail:
      "Not add-ons — the definition of done. The same standard applies to a two-week build and a year-long platform.",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Clarity over decoration",
    body: "Every element earns its place by making something understandable. If removing it changes nothing, it's gone.",
  },
  {
    index: "02",
    title: "Confidence over hype",
    body: "We don't say revolutionary, cutting-edge or world-class. We say what it does, how it's built, and what it costs.",
  },
  {
    index: "03",
    title: "Systems over pages",
    body: "One-off solutions decay. We build systems — design systems, content systems, software systems — that absorb change.",
  },
  {
    index: "04",
    title: "Premium through restraint",
    body: "Quality shows in what's aligned, what's omitted and what stays fast under load — not in how much was added.",
  },
  {
    index: "05",
    title: "Every element has a job",
    body: "A diagram explains an architecture. A signal shows a state. A rule separates ideas. Nothing performs.",
  },
  {
    index: "06",
    title: "Longevity over trends",
    body: "We choose boring, proven technology and durable design, because software should outlive the mood it was built in.",
  },
] as const;

export const personality = [
  {
    share: "40%",
    trait: "Engineer",
    body: "Precise, logical, systematic. Requirements are written down. Decisions have reasons. 'It depends' gets resolved, not waved through.",
  },
  {
    share: "30%",
    trait: "Craftsman",
    body: "Intentional and quality-focused. The detail nobody asked about is usually the one that makes software feel considered.",
  },
  {
    share: "20%",
    trait: "Trusted partner",
    body: "Transparent about cost, risk and trade-offs — including the ones that favour doing less, or not working with us.",
  },
  {
    share: "10%",
    trait: "Innovator",
    body: "Forward-looking without chasing hype. New technology is adopted when it solves a problem better, not when it's loud.",
  },
] as const;

export const contactTopics = [
  "General question",
  "Partnership",
  "University / research",
  "Collaboration",
  "Media",
  "Careers",
  "Other",
] as const;
