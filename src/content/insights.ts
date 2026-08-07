import type { Insight } from "./types";

/**
 * Insights — real, useful technical/business writing.
 *
 * Every article is written to be genuinely helpful to a technical or
 * business reader, and every claim in it is defensible engineering
 * practice. Articles serve the "Build authority" job of the site:
 * they are not marketing pages wearing a blog costume.
 */
export const insights: Insight[] = [
  {
    slug: "what-rag-actually-requires",
    title: "What a RAG system actually requires before it works",
    description:
      "Retrieval-augmented generation is the most requested AI pattern we see — and the most underestimated. Here is what separates a demo from a system people trust.",
    category: "AI",
    date: "2026-07-14",
    readingTime: "8 min",
    blocks: [
      {
        type: "paragraph",
        text: "Almost every organisation we talk to wants the same thing: a way to ask questions and get answers from their own documents. The pattern is called retrieval-augmented generation — RAG — and the demo version of it is genuinely easy. Chunk some PDFs, embed them, wire up a chat interface, and something impressive happens on screen.",
      },
      {
        type: "paragraph",
        text: "The production version is a different discipline. This article is about the gap between the two, because that gap is where most AI projects quietly die.",
      },
      { type: "heading", text: "The demo lies politely" },
      {
        type: "paragraph",
        text: "A demo works because the person running it asks questions the system happens to answer well. Real users ask misspelled, ambiguous, multi-part questions about documents that contradict each other, and they expect the system to know which policy was superseded last March. Nothing about that is exotic — it's just Tuesday in a real company.",
      },
      {
        type: "paragraph",
        text: "The uncomfortable truth is that retrieval quality determines answer quality far more than model choice does. A frontier model answering from the wrong three paragraphs produces fluent, confident nonsense. A modest model answering from the right paragraphs produces something useful.",
      },
      { type: "heading", text: "What the system actually needs" },
      {
        type: "list",
        items: [
          "Document hygiene: deduplication, version control and deletion policies. Retrieval over contradictory versions of the same policy is a governance failure, not a model failure.",
          "Chunking that respects structure: headings, tables and lists carry meaning. Splitting a table mid-row destroys the very information retrieval is meant to find.",
          "Hybrid retrieval: vector search finds conceptually similar text; keyword search finds exact part numbers, names and statute references. Production systems almost always need both, with a re-ranking step on top.",
          "An evaluation set: a fixed list of real questions with known-good answers, agreed with the business. This is the contract the system is accepted against.",
          "A defined refusal behaviour: when confidence is low, the system says so and routes to a human. An assistant that never says 'I don't know' is not trustworthy; it is just fast.",
          "Access control at retrieval time: the system must only retrieve what the asking user is allowed to see. Filtering after generation is too late.",
        ],
      },
      { type: "heading", text: "Measuring what matters" },
      {
        type: "paragraph",
        text: "'It seems to work' is not a measurement. Before launch, agree on three numbers: answer accuracy against the evaluation set, the rate at which the system correctly declines out-of-scope questions, and the latency users actually experience. After launch, sample real conversations weekly and grade them against the same rubric. Accuracy drifts as documents change; the test set is how you notice.",
      },
      {
        type: "code",
        language: "text",
        text: "EVALUATION SET (v1.3)\n---------------------\nQ: What is the refund window for annual plans?\nExpected: 30 days from renewal date (POL-2024-08 §3.2)\n\nQ: Who approves expenses over 5,000?\nExpected: Department head AND finance (POL-2025-01 §7)\nNote: POL-2023-11 §7 is superseded — retrieval must not cite it.",
      },
      { type: "heading", text: "The build order we recommend" },
      {
        type: "paragraph",
        text: "Start with the evaluation set, not the model. Fifty real questions with agreed answers is worth more than any architecture diagram. Then fix the document pipeline until retrieval returns the right sources for those questions. Only then tune generation — prompts, models, citations. Teams that start with the model end up demoing beautifully and shipping never.",
      },
      {
        type: "quote",
        text: "A RAG system is a search engine with a writer attached. Engineer the search first.",
      },
      {
        type: "paragraph",
        text: "None of this is exotic, and that is the point. Reliable AI features are mostly document governance, retrieval engineering and honest measurement — the same disciplines as any other software that people depend on.",
      },
    ],
    relatedServices: ["ai-engineering"],
    relatedWork: [],
  },
  {
    slug: "performance-is-a-feature",
    title: "Performance is a feature your users feel before they see anything else",
    description:
      "Speed is the first impression, the trust signal and the conversion lever — and it is decided by architecture, not by a late optimisation pass.",
    category: "Engineering",
    date: "2026-06-02",
    readingTime: "6 min",
    blocks: [
      {
        type: "paragraph",
        text: "Before a visitor reads a word on your site, they have already judged it. That judgement happens in the first two seconds, and it is made entirely of loading behaviour: whether the page responds, whether content jumps, whether the thing feels solid. Performance is not an engineering vanity metric. It is the texture of your credibility.",
      },
      { type: "heading", text: "The numbers are not abstract" },
      {
        type: "paragraph",
        text: "Google's Core Web Vitals exist because the company with the largest dataset on user behaviour found the same thing everyone finds: slow pages lose people. Largest Contentful Paint beyond 2.5 seconds measurably increases abandonment; layout shifts erode trust in ways users feel but rarely articulate. On a commerce or lead-generation page, those losses are revenue.",
      },
      { type: "heading", text: "Speed is an architecture decision" },
      {
        type: "paragraph",
        text: "Teams often treat performance as a final-phase task: build everything, then 'optimise'. This almost never works, because the biggest costs are structural. A site that renders on the client must download, parse and execute JavaScript before showing anything. A page assembled from six third-party scripts inherits the slowest of them. No late pass fixes a foundation.",
      },
      {
        type: "list",
        items: [
          "Render on the server or at build time by default; hydrate only what is genuinely interactive.",
          "Set a JavaScript budget and enforce it in CI. This site, for example, ships no animation library and no CSS-in-JS runtime — the entire motion system is CSS.",
          "Self-host fonts, subset them, and preload the two files that matter. Web font behaviour is one of the most common causes of invisible text and layout shift.",
          "Serve responsive, modern-format images. A hero image should not cost more than the page that presents it.",
          "Treat third-party scripts as borrowed performance. Each one needs a business justification, an async loading strategy and an owner.",
        ],
      },
      { type: "heading", text: "Budgets beat intentions" },
      {
        type: "code",
        language: "text",
        text: "PERFORMANCE BUDGET (per page, mobile, throttled)\n------------------------------------------------\nLCP              <= 2.5s\nINP              <= 200ms\nCLS              <= 0.1\nJavaScript       <= 170 KB compressed\nFonts            <= 2 files, preloaded\nThird-party      justified individually",
      },
      {
        type: "paragraph",
        text: "A budget turns 'we care about performance' into a check that fails a build. It also changes conversations: when a proposed feature costs 120 KB of JavaScript, the question becomes whether the feature is worth it, which is exactly the right question.",
      },
      {
        type: "quote",
        text: "Nobody praises a fast site. They simply trust it, stay on it, and buy from it.",
      },
      {
        type: "paragraph",
        text: "This is why we treat performance as a brand property of everything we build — starting with the platform you are reading. A company claiming engineering quality cannot ship a slow website. Neither can you.",
      },
    ],
    relatedServices: ["web-platforms", "cloud-infrastructure"],
    relatedWork: ["jeem-labs-platform"],
  },
  {
    slug: "integration-contracts",
    title: "The integration contract: how systems stay friends",
    description:
      "Most integration failures are not technical — they are unspoken assumptions. A written contract between systems prevents the Friday-night incident.",
    category: "Engineering",
    date: "2026-04-21",
    readingTime: "7 min",
    blocks: [
      {
        type: "paragraph",
        text: "When two systems stop talking to each other, the cause is rarely a bug in the traditional sense. It is an assumption: one team believed an order ID would never repeat, the other believed timestamps would always be UTC, and both beliefs were perfectly reasonable — right up until 4:47 PM on a Friday, when they collided.",
      },
      {
        type: "paragraph",
        text: "After building and repairing enough integrations, a pattern becomes obvious: the integrations that survive are the ones where the assumptions were written down. We call that document the integration contract, and it is the cheapest insurance in software.",
      },
      { type: "heading", text: "What a contract actually covers" },
      {
        type: "list",
        items: [
          "Shape: the exact fields, types and formats exchanged — including which fields may be null and what null means.",
          "Semantics: what an identifier refers to, which timezone timestamps live in, whether amounts are in minor units.",
          "Failure behaviour: what happens on timeout, on a 500, on a duplicate delivery. Retried? By whom? How many times?",
          "Idempotency: how the receiver recognises a message it has already processed, because every network retries eventually.",
          "Ordering: whether events can arrive out of sequence, and what the receiver does when they do.",
          "Ownership: who is paged when it breaks, and where the logs live. An integration nobody owns is an incident waiting for a date.",
        ],
      },
      { type: "heading", text: "The two failure modes that matter most" },
      {
        type: "paragraph",
        text: "Duplicate delivery is the first. Webhooks and queues almost universally promise 'at least once' delivery, which is a polite way of saying your handler will sometimes run twice. If processing a payment event twice charges a customer twice, the integration is not finished until it is idempotent.",
      },
      {
        type: "paragraph",
        text: "Silent drift is the second. The upstream system adds a field, renames a status, or starts sending a new enum value, and your integration doesn't crash — it quietly mis-files records for three weeks. Schema validation at the boundary, with an alert on every unexpected payload, converts silent drift into a visible, fixable event.",
      },
      {
        type: "code",
        language: "text",
        text: "ORDER SYNC — CONTRACT v2\n------------------------\nDirection:    store -> erp (one-way)\nTrigger:      webhook, order.paid\nIdempotency:  key = order.id, stored 30 days\nRetries:      5 attempts, exponential backoff, then dead-letter\nOn conflict:  ERP wins; store is notified via order.rejected\nOwner:        ops-engineering (paged on dead-letter)",
      },
      { type: "heading", text: "Why teams skip it" },
      {
        type: "paragraph",
        text: "Because the happy path works in the first hour, and the contract feels like paperwork. But the contract is not bureaucracy — it is the difference between an integration you can reason about and one you can only hope about. Write it before the first request is sent, keep it next to the code, and update it when reality changes.",
      },
      {
        type: "quote",
        text: "Integrations don't fail at the API. They fail at the assumptions.",
      },
    ],
    relatedServices: ["automation-integrations", "custom-software"],
    relatedWork: [],
  },
];

export const insightMap = new Map(insights.map((i) => [i.slug, i]));

export function getInsight(slug: string): Insight | undefined {
  return insightMap.get(slug);
}

/** Extract headings for an article's table of contents. */
export function getInsightToc(insight: Insight): { id: string; text: string }[] {
  return insight.blocks
    .filter((b) => b.type === "heading" && b.text)
    .map((b) => ({
      id: slugifyHeading(b.text as string),
      text: b.text as string,
    }));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

