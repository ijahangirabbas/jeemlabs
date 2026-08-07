import type { ProductTeaser } from "./types";

/**
 * Products — honest ambition, no theatre.
 *
 * JEEM LABS' primary business today is engineering services. Product work
 * is real but early: internal tools being hardened in client engagements
 * before they earn a public launch. Nothing is announced before it exists.
 *
 * When a product ships, it gets a page at /products/[slug], a real status
 * and real evidence. Until then, this section communicates direction only.
 */
export const productTeasers: ProductTeaser[] = [
  {
    id: "internal-tooling",
    name: "Internal tooling",
    description:
      "Systems built for our own delivery work — project telemetry, content pipelines, quality gates — being hardened in daily use.",
    status: "IN DEVELOPMENT",
  },
  {
    id: "first-product",
    name: "First public product",
    description:
      "When one of these tools solves a problem we keep meeting across clients, it will graduate into a product of its own. Announced when it exists, not before.",
    status: "IN DEVELOPMENT",
  },
];
