import type { Service } from "./types";

/**
 * The six core capabilities.
 *
 * Copy rule: describe the business problem first, the technology second.
 * These categories are a map, not a fence — real engagements often combine
 * several of them, and the site says so openly.
 */
export const services: Service[] = [
  {
    id: "ai-engineering",
    index: "01",
    name: "AI Engineering",
    tagline: "AI systems that do real work inside your business.",
    proposition:
      "We design and build AI systems that solve a defined problem — retrieval, automation, assistance — and hold up in production, not just in a demo.",
    keywords: ["RAG", "Agents", "Assistants", "LLM APIs", "Automation"],
    problems: [
      {
        title: "Your team drowns in documents",
        description:
          "Policies, contracts, tickets and reports exist, but finding a reliable answer takes a person and twenty minutes. A retrieval system can answer from your own material, with sources.",
      },
      {
        title: "A manual workflow doesn't scale",
        description:
          "Triaging requests, drafting responses, extracting data from forms — repeated hundreds of times a week. Intelligent automation handles the routine and escalates the exceptions.",
      },
      {
        title: "A demo worked, production didn't",
        description:
          "Many teams have a promising prototype and no path to a reliable system: no evaluation, no guardrails, no cost control, no fallback when the model is wrong.",
      },
      {
        title: "Customers expect instant answers",
        description:
          "Support queues grow while the answers already exist in your help centre. An assistant grounded in your content resolves the common cases around the clock.",
      },
    ],
    capabilities: [
      {
        title: "Retrieval-augmented generation",
        description:
          "Systems that answer from your documents, databases and knowledge bases — with citations, access control and measurable accuracy.",
      },
      {
        title: "AI agents & assistants",
        description:
          "Task-focused agents that use tools, call APIs and complete multi-step work, with human approval where it matters.",
      },
      {
        title: "LLM & model integration",
        description:
          "Integrating commercial and open-weight models into existing products through stable, testable interfaces — so providers can change without rewrites.",
      },
      {
        title: "Intelligent workflow automation",
        description:
          "Classification, extraction, summarisation and routing embedded in the workflows you already run, measured against the manual baseline.",
      },
      {
        title: "Evaluation & reliability",
        description:
          "Test sets, regression checks, guardrails and monitoring. An AI feature you can't measure is a liability, not an asset.",
      },
    ],
    approach: [
      {
        step: "Define the decision",
        detail:
          "We start from the business outcome — what should be faster, cheaper or more accurate — and whether AI is even the right tool for it.",
      },
      {
        step: "Prove it with your data",
        detail:
          "A narrow pilot on real material, evaluated against an agreed test set. No demo on cherry-picked examples.",
      },
      {
        step: "Engineer for production",
        detail:
          "Guardrails, fallbacks, logging, cost ceilings and human-in-the-loop points designed before launch, not after an incident.",
      },
      {
        step: "Measure and iterate",
        detail:
          "Accuracy, latency and cost are monitored after release. The system improves against the same test set it was accepted on.",
      },
    ],
    diagram: "ai",
    technologies: [
      "OpenAI / Anthropic / open-weight models",
      "pgvector / vector indexes",
      "TypeScript / Python",
      "LangGraph-style orchestration",
      "Postgres / Redis",
    ],
    faqs: [
      {
        question: "Do we need our own data to start?",
        answer:
          "Not necessarily. Many useful systems begin with documents and content you already have. If a capability genuinely needs proprietary data, we will tell you what to collect and why before building anything.",
      },
      {
        question: "How do you keep answers accurate?",
        answer:
          "By treating accuracy as an engineering target, not a hope: retrieval grounded in your sources, citations in responses, an agreed evaluation set, and a defined behaviour — including refusing — when confidence is low.",
      },
      {
        question: "What does an AI project typically cost to run?",
        answer:
          "It depends on volume and model choice. We estimate running costs during the pilot, set budget ceilings in the system itself, and prefer smaller or cached models where they meet the accuracy target.",
      },
      {
        question: "Who owns the system and the data?",
        answer:
          "You do. Code, prompts, evaluation sets and data pipelines are delivered to you. Your data is never used to train third-party models.",
      },
    ],
    relatedWork: ["jeem-labs-platform"],
    relatedInsights: ["what-rag-actually-requires"],
  },
  {
    id: "web-platforms",
    index: "02",
    name: "Web Platforms",
    tagline: "Fast, maintainable web software your business runs on.",
    proposition:
      "From a marketing site that must rank and convert, to a platform your customers log into every day — we build web software that stays fast and stays maintainable.",
    keywords: ["Web Apps", "SaaS", "Portals", "E-commerce", "APIs"],
    problems: [
      {
        title: "Your website doesn't represent the business",
        description:
          "Slow, dated, or impossible to update without a developer. The site should explain what you do, rank for it, and convert visitors into conversations.",
      },
      {
        title: "A product idea needs a real platform",
        description:
          "You have users waiting and a spreadsheet holding things together. You need authentication, billing, data and an interface — engineered so version two isn't a rewrite.",
      },
      {
        title: "Customers and staff share one broken process",
        description:
          "Email threads and shared drives where a portal should be. Self-service dashboards and structured workflows remove the bottleneck your team has become.",
      },
      {
        title: "Systems don't talk to each other",
        description:
          "Your store, CRM and accounting all hold slightly different truths. Well-designed APIs and integrations keep one version of reality.",
      },
    ],
    capabilities: [
      {
        title: "Business websites",
        description:
          "Content-driven sites built for speed, search and a team that needs to publish without fear. Like this one.",
      },
      {
        title: "Web applications & SaaS",
        description:
          "Multi-user products with authentication, roles, billing and the unglamorous reliability work that makes software a business.",
      },
      {
        title: "Dashboards & customer portals",
        description:
          "Interfaces where customers and staff see exactly the data and actions relevant to them — nothing more, nothing broken.",
      },
      {
        title: "E-commerce",
        description:
          "Storefronts and checkout flows engineered around conversion and operational reality: stock, fulfilment, returns.",
      },
      {
        title: "APIs & integrations",
        description:
          "Documented, versioned APIs that other systems — yours and third parties' — can build against safely.",
      },
    ],
    approach: [
      {
        step: "Frame the job",
        detail:
          "What must this platform accomplish, for whom, and how will we know it works? The answer shapes the architecture more than any framework choice.",
      },
      {
        step: "Design the system",
        detail:
          "Data model, access rules, integration points and the interface itself — resolved together, because they are one system.",
      },
      {
        step: "Build in vertical slices",
        detail:
          "Working software from the first weeks: real screens on real data, not a long silence followed by a reveal.",
      },
      {
        step: "Harden and hand over",
        detail:
          "Performance budgets, accessibility checks, deployment pipelines and documentation your next engineer will thank us for.",
      },
    ],
    diagram: "web",
    technologies: [
      "Next.js / React",
      "TypeScript",
      "Postgres",
      "Stripe",
      "Vercel / containers",
    ],
    faqs: [
      {
        question: "Should this be a website or a web application?",
        answer:
          "If people mainly read, it's a website. If they log in and do things, it's an application. Many businesses need both — we design them as one coherent system with the right weight behind each part.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We begin with a technical review — architecture, dependencies, tests, deployment — and give you an honest read: continue, repair, or rebuild, with the reasoning for each.",
      },
      {
        question: "How do you handle content management?",
        answer:
          "With the simplest thing that fits the team: structured content in the codebase for small sites, or a headless CMS when editors need autonomy. This site's content layer is built so a CMS can be adopted later without redesign.",
      },
      {
        question: "What about SEO and performance?",
        answer:
          "Both are architecture decisions, not afterthoughts: server rendering, semantic HTML, metadata, sitemaps, image and font optimisation, and a performance budget checked on every release.",
      },
    ],
    relatedWork: ["jeem-labs-platform"],
    relatedInsights: ["performance-is-a-feature"],
  },

  {
    id: "mobile-applications",
    index: "03",
    name: "Mobile Applications",
    tagline: "Apps people keep on their phones.",
    proposition:
      "We design and ship mobile applications that respect the platform, the battery, the network — and the person holding the phone.",
    keywords: ["iOS", "Android", "Cross-platform", "Offline-first", "Push"],
    problems: [
      {
        title: "Your service stops at the browser",
        description:
          "Field staff, drivers, customers on the move — the work happens away from desks, but your system assumes one. A mobile app puts the workflow where the work is.",
      },
      {
        title: "A wrapped website isn't an app",
        description:
          "Users can tell. Slow navigation, no offline support, battery drain and app-store rejections follow when a mobile shell pretends to be a product.",
      },
      {
        title: "Two platforms, one small team",
        description:
          "Maintaining separate iOS and Android codebases doubles cost for most products. Cross-platform done properly is an engineering decision, not a compromise.",
      },
      {
        title: "Connectivity is a luxury",
        description:
          "Warehouses, rural sites, flights, basements. If the app dies without a signal, the work dies with it. Offline-first design keeps it alive.",
      },
    ],
    capabilities: [
      {
        title: "iOS & Android applications",
        description:
          "Platform-respectful apps that pass review the first time and feel right to the people who use them daily.",
      },
      {
        title: "Cross-platform development",
        description:
          "One codebase, both stores, native where it counts. We recommend it when it genuinely serves the product — and say when it doesn't.",
      },
      {
        title: "Offline-first architecture",
        description:
          "Local data, conflict resolution and sync that survives real-world connectivity — designed in from the first data model.",
      },
      {
        title: "Backend integration",
        description:
          "The app is the front edge of a system: authentication, APIs, push notifications and background sync engineered as one whole.",
      },
      {
        title: "Release & lifecycle management",
        description:
          "Signing, store listings, staged rollouts, crash reporting and update strategy — the operational half of shipping an app.",
      },
    ],
    approach: [
      {
        step: "Decide native or cross-platform honestly",
        detail:
          "Performance needs, device APIs, team and budget determine the answer. We lay out the trade-offs before a line of code.",
      },
      {
        step: "Prototype the riskiest flow",
        detail:
          "The core interaction — scanning, capturing, syncing — is proven on a real device in real conditions before full build-out.",
      },
      {
        step: "Build with the backend",
        detail:
          "App and API evolve together in the same engineering rhythm, so integration is continuous rather than a final-week crisis.",
      },
      {
        step: "Ship, observe, iterate",
        detail:
          "Crash analytics, performance traces and store feedback drive each release. An app is a product with a pulse, not a one-off delivery.",
      },
    ],
    diagram: "mobile",
    technologies: [
      "React Native / Expo",
      "Kotlin / Swift where native wins",
      "SQLite / WatermelonDB-style sync",
      "FCM / APNs",
      "Fastlane / EAS",
    ],
    faqs: [
      {
        question: "Native or cross-platform — which do you recommend?",
        answer:
          "For most business products, cross-platform with native modules where needed is the right economics. Heavy graphics, intense background processing or deep OS integration can justify fully native. We recommend based on your requirements, not our preference.",
      },
      {
        question: "Can you publish to both app stores for us?",
        answer:
          "Yes — we handle signing, listings, review responses and staged rollout, or we set your team up to own the pipeline. The accounts and the app always belong to you.",
      },
      {
        question: "What happens to our existing backend?",
        answer:
          "We integrate with it. If parts of it can't support a mobile client well — sync, pagination, auth tokens — we build the thin layer that fixes that without forcing a rebuild.",
      },
      {
        question: "How do updates work after launch?",
        answer:
          "A release cadence we agree together: crash fixes fast, improvements on a rhythm, and store-compliant update mechanisms so critical fixes don't wait on review queues.",
      },
    ],
    relatedWork: [],
    relatedInsights: [],
  },

  {
    id: "custom-software",
    index: "04",
    name: "Custom Software",
    tagline: "Systems shaped to how you actually operate.",
    proposition:
      "When off-the-shelf software forces your business to work its way, we build the system that works yours — and can change as you do.",
    keywords: ["Internal Systems", "Dashboards", "Data Platforms", "Workflows"],
    problems: [
      {
        title: "The spreadsheet became the system",
        description:
          "It started as a tracker and now it runs the department — with version chaos, no permissions and one person who knows how it works. That is a software product waiting to be built properly.",
      },
      {
        title: "SaaS tools almost fit",
        description:
          "You pay for five tools that each do 80% of a job, and people copy data between them. The missing 20% — your actual process — is exactly what custom software is for.",
      },
      {
        title: "Leadership can't see the business",
        description:
          "Numbers live in six systems and arrive as monthly slides. A real operational dashboard answers questions while they still matter.",
      },
      {
        title: "A legacy system holds you hostage",
        description:
          "It works, nobody dares touch it, and every change is a negotiation with the past. Modernising incrementally beats a big-bang rewrite in almost every case.",
      },
    ],
    capabilities: [
      {
        title: "Internal business systems",
        description:
          "Operations, inventory, HR, scheduling — the unglamorous software that companies actually run on, built for the people who use it eight hours a day.",
      },
      {
        title: "Management & reporting dashboards",
        description:
          "Live views of the metrics that matter, drawn from the systems of record, with the drill-down to act on what you see.",
      },
      {
        title: "Workflow & approval systems",
        description:
          "Requests, approvals, escalations and audit trails modelled on how your organisation actually makes decisions.",
      },
      {
        title: "Data platforms",
        description:
          "Pipelines that collect, clean and structure operational data so reporting — and later, AI — has something reliable to stand on.",
      },
      {
        title: "Legacy modernisation",
        description:
          "Strangler-pattern migration: new capability around the old system, traffic moved piece by piece, risk kept small and reversible.",
      },
    ],
    approach: [
      {
        step: "Shadow the real process",
        detail:
          "We learn how work actually flows — including the workarounds — before proposing how software should. The official process and the real one are rarely identical.",
      },
      {
        step: "Model the domain",
        detail:
          "Entities, rules and states are agreed in plain language with the people who own them. The data model is a business decision.",
      },
      {
        step: "Deliver the thinnest useful system first",
        detail:
          "One workflow, fully working, in real use. Value in weeks, and a foundation that grows without being torn up.",
      },
      {
        step: "Document and transfer",
        detail:
          "Architecture notes, runbooks and a codebase your team — or ours — can extend. You are never locked to us.",
      },
    ],
    diagram: "software",
    technologies: [
      "TypeScript / Node",
      "Postgres / event logs",
      "React",
      "Redis / queues",
      "Docker",
    ],
    faqs: [
      {
        question: "How do we know custom is worth it versus SaaS?",
        answer:
          "When the process is a competitive advantage, when you're paying people to bridge tools manually, or when no product models your workflow without distortion. If a €50/month tool solves it, we'll tell you to buy the tool.",
      },
      {
        question: "What if our requirements change mid-project?",
        answer:
          "They will — that's normal. Sliced delivery means change lands in the next slice, not against a fixed plan written months earlier. We re-estimate openly when scope moves.",
      },
      {
        question: "Who maintains the system afterwards?",
        answer:
          "Either side can. We offer ongoing support agreements, and we build and document so your own developers or another partner can take over cleanly.",
      },
      {
        question: "Can you work with our IT team's constraints?",
        answer:
          "Yes — hosting rules, SSO, data-residency and security reviews are inputs to the design, discovered in the first weeks rather than negotiated at launch.",
      },
    ],
    relatedWork: ["jeem-labs-platform"],
    relatedInsights: [],
  },

  {
    id: "automation-integrations",
    index: "05",
    name: "Automation & Integrations",
    tagline: "Systems that move data and work without being asked.",
    proposition:
      "We connect the tools you already pay for and automate the work between them — so people stop being the integration layer.",
    keywords: ["APIs", "Workflows", "Sync", "Webhooks", "AI Automation"],
    problems: [
      {
        title: "People are the integration layer",
        description:
          "Copying orders into the CRM, re-typing invoices, exporting CSVs every Friday. Human data-shuttling is slow, error-prone and quietly expensive.",
      },
      {
        title: "Tools hold conflicting truths",
        description:
          "The store says one stock number, the warehouse another, the spreadsheet a third. Without synchronisation, every report starts with an argument.",
      },
      {
        title: "Approvals stall in inboxes",
        description:
          "Requests wait days because the right person didn't see an email. Routed workflows with reminders and escalation keep work moving.",
      },
      {
        title: "A Zapier web became critical infrastructure",
        description:
          "No-code automations are excellent — until fifteen of them silently run the business and nobody knows what breaks when one fails.",
      },
    ],
    capabilities: [
      {
        title: "API integrations",
        description:
          "Reliable connections between your systems and third-party services, with retries, idempotency and monitoring — not just a webhook and hope.",
      },
      {
        title: "Workflow automation",
        description:
          "Multi-step business processes — onboarding, fulfilment, invoicing — encoded once, run consistently, auditable forever.",
      },
      {
        title: "Data synchronisation",
        description:
          "One-way syncs and careful two-way reconciliations that keep systems in agreement, with conflict rules decided by the business, not by accident.",
      },
      {
        title: "AI-assisted automation",
        description:
          "Where judgment is involved — classifying, extracting, drafting — AI steps into the workflow with confidence thresholds and human review.",
      },
      {
        title: "Automation consolidation",
        description:
          "Auditing scattered no-code automations and rebuilding the critical ones as observable, tested infrastructure.",
      },
    ],
    approach: [
      {
        step: "Map the flow of work",
        detail:
          "We trace what moves between people and systems, how often, and what each failure costs. Volume and pain decide priority.",
      },
      {
        step: "Automate the boring 80%",
        detail:
          "Routine cases run themselves. The exceptions route to a person with full context — automation that knows its limits.",
      },
      {
        step: "Make it observable",
        detail:
          "Every automation logs what it did and alerts when it didn't. Silent failure is the only unacceptable outcome.",
      },
      {
        step: "Hand over the keys",
        detail:
          "Dashboards and documentation so your team can see, pause and adjust each flow without calling us.",
      },
    ],
    diagram: "automation",
    technologies: [
      "REST / GraphQL / webhooks",
      "Queues & schedulers",
      "n8n / Temporal-style orchestration",
      "OAuth 2.0",
      "Postgres",
    ],
    faqs: [
      {
        question: "We already use Zapier/Make — is this still relevant?",
        answer:
          "Often yes. No-code tools are right for low-stakes flows. When an automation becomes critical, complex or costly at volume, rebuilding it as observable infrastructure pays for itself. We can audit what you have and tell you which is which.",
      },
      {
        question: "What if a tool we use has no API?",
        answer:
          "Then we find the honest path: a supported export, a database view, an email parser, or browser automation as a last resort — and we tell you the fragility of each option before you choose it.",
      },
      {
        question: "How do you handle failures in automated flows?",
        answer:
          "Retries with backoff, dead-letter queues for messages that can't process, alerts to a human, and a replay mechanism. Failures are expected and engineered for, not exceptions.",
      },
      {
        question: "Can automation work with our custom software too?",
        answer:
          "That's the ideal case — custom systems expose exactly the hooks automation needs. We often deliver the two together as one coherent system.",
      },
    ],
    relatedWork: [],
    relatedInsights: ["integration-contracts"],
  },

  {
    id: "cloud-infrastructure",
    index: "06",
    name: "Cloud & Infrastructure",
    tagline: "Boring, reliable foundations for ambitious software.",
    proposition:
      "We build the infrastructure underneath your product the way it should be: reproducible, observable, cost-aware — and quiet enough that you forget it exists.",
    keywords: ["Architecture", "DevOps", "CI/CD", "Monitoring", "Scaling"],
    problems: [
      {
        title: "Deployments are a ritual of fear",
        description:
          "Releasing means a late night, a checklist and a prayer. Automated pipelines with rollback make shipping a non-event — which is what it should be.",
      },
      {
        title: "The cloud bill tells a story nobody wrote",
        description:
          "Costs grow faster than users and nobody can say why. Right-sizing, autoscaling and honest tagging turn the bill back into engineering data.",
      },
      {
        title: "You find outages from customers",
        description:
          "If users are your monitoring system, you're flying blind. Instrumented services with meaningful alerts catch problems while they're still small.",
      },
      {
        title: "One server is the whole company",
        description:
          "It works — until it doesn't, and there's no backup tested, no failover, no documented recovery. Resilience is a design property, not luck.",
      },
    ],
    capabilities: [
      {
        title: "Cloud architecture",
        description:
          "Right-sized designs on the provider that fits your constraints — from a single well-run VPS to managed Kubernetes, chosen by requirements rather than fashion.",
      },
      {
        title: "CI/CD pipelines",
        description:
          "Every change built, tested and deployed the same way, with preview environments and one-command rollback. Humans review; machines release.",
      },
      {
        title: "Databases & data infrastructure",
        description:
          "Schema design, replication, backups that are actually restored in drills, and migration paths that don't gamble the company's memory.",
      },
      {
        title: "Observability",
        description:
          "Logs, metrics and traces with alerts tied to user impact — pages that mean something, dashboards that answer questions.",
      },
      {
        title: "Performance & scaling",
        description:
          "Load testing, caching strategy, query optimisation and capacity planning, so growth is a capacity exercise, not an emergency.",
      },
    ],
    approach: [
      {
        step: "Assess what's actually running",
        detail:
          "An honest inventory: workloads, dependencies, risks, costs. You can't design the foundation while guessing about the building.",
      },
      {
        step: "Codify the environment",
        detail:
          "Infrastructure as code, so environments are reproducible, reviewed and recoverable — never a snowflake one person understands.",
      },
      {
        step: "Automate the path to production",
        detail:
          "Pipelines that make the safe thing the easy thing: test, stage, deploy, verify, roll back.",
      },
      {
        step: "Run drills, not just backups",
        detail:
          "Recovery is tested on a schedule. A backup that has never been restored is a hypothesis, not a plan.",
      },
    ],
    diagram: "cloud",
    technologies: [
      "AWS / GCP / Hetzner-class providers",
      "Docker / Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Postgres / Redis / S3-compatible storage",
    ],
    faqs: [
      {
        question: "Do we need Kubernetes?",
        answer:
          "Probably less often than the internet suggests. Many products run better on simpler managed platforms. We recommend the least complex architecture that meets your availability and scaling requirements — and can grow when they do.",
      },
      {
        question: "Can you reduce our cloud bill?",
        answer:
          "Usually, yes — right-sizing instances, storage lifecycle policies, eliminating idle environments and fixing chatty architectures. We'll estimate the saving against the cost of the work before starting.",
      },
      {
        question: "How do you handle security and access?",
        answer:
          "Least-privilege access, secrets in a manager rather than in code, network segmentation, patched base images and audit trails. Security is configured into the pipeline, not reviewed in a panic before launch.",
      },
      {
        question: "Will you manage infrastructure long-term?",
        answer:
          "We offer managed operations with defined response targets, or we build it, document it, train your team and hand over. Both are first-class options — the deciding factor is your team, not our revenue.",
      },
    ],
    relatedWork: ["jeem-labs-platform"],
    relatedInsights: ["performance-is-a-feature"],
  },
];

export const serviceMap = new Map(services.map((s) => [s.id, s]));

export function getService(id: string): Service | undefined {
  return serviceMap.get(id as Service["id"]);
}

