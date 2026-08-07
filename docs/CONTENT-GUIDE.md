# JEEM LABS — Content Guide

The site is data-driven: pages render from typed modules in
`src/content/`. Layout code is never duplicated per entry. When a CMS is
adopted, these modules become the fetch layer — the shapes in
`src/content/types.ts` are the contract.

## The integrity rule

> **Nothing is fabricated.** No invented clients, logos, testimonials,
> metrics, team members, events or product screenshots. An empty seat
> left visibly empty builds more trust than a fake wall of logos.

This is why `/work` currently shows one case study (our own platform,
honestly documented) with a visible note about what comes next.

## Adding a case study (`src/content/work.ts`)

1. Copy the shape from `src/content/work.example.ts`.
2. Fill every section with real material: what was built, why, the
   engineering decisions, what went wrong, what resulted.
3. `metrics` may only contain numbers the client has approved for
   public use. If there are none yet, leave the array empty — the UI
   simply doesn't render the block.
4. Set `verified: true` only when the work is genuinely live.
5. Cross-link: add the slug to `relatedWork` on the relevant services
   and to `relatedInsights` where a real connection exists.

## Adding an insight (`src/content/insights.ts`)

- Write to be useful to a stranger who never hires us.
- Use the block types: `paragraph`, `heading`, `subheading`, `list`,
  `code`, `quote`. The table of contents generates from `heading`
  blocks automatically.
- Fill `relatedServices` / `relatedWork` — no orphaned content.

## Editing services (`src/content/services.ts`)

Each service carries: tagline, proposition, problems, capabilities,
approach, a diagram id, technologies, FAQs and related content. The
FAQ answers should be the honest version — including "we'll tell you
if a cheaper tool solves it".

## Products (`src/content/products.ts`)

Status vocabulary is semantic and true: `IN DEVELOPMENT`, `BETA`,
`LIVE`. A product gets a name and a page when it exists — not before.

## Signals

The green ● Signal communicates state (`LIVE`, `AVAILABLE`, `DEPLOYED`,
`BETA`, `IN DEVELOPMENT`). Never use it decoratively. If a state isn't
true, the Signal doesn't say it.

## Voice

- Specific over adjectival. "Sub-2.5s LCP on 4G" beats "blazing fast".
- Never: revolutionary, cutting-edge, game-changing, world-class,
  one-stop solution, unlock your potential.
- Every claim should be something we'd defend in a client meeting.
