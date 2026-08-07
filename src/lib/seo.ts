import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageSeoInput {
  title: string;
  description: string;
  /** Path beginning with "/". Used for canonical + Open Graph URL. */
  path: string;
  /** Set false for utility pages that should not be indexed. */
  index?: boolean;
  /** OG type — "website" for pages, "article" for insights. */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * One place where every page's metadata is built. Guarantees unique titles,
 * canonical URLs and complete Open Graph/Twitter metadata on every route.
 */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageSeoInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle =
    path === "/" ? `${site.name} — ${title}` : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: `${site.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Breadcrumb JSON-LD for nested routes. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

/** Organization + WebSite schema for the root layout. */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.png`,
        description: site.positioning,
        email: site.email,
        sameAs: [site.social.github, site.social.linkedin, site.social.x],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  date: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.date,
    dateModified: input.date,
    mainEntityOfPage: `${site.url}${input.path}`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

/** FAQPage schema — emitted only when the page genuinely shows the Q&As. */
export function faqSchema(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
