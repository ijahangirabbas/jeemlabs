import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getInsight,
  getInsightToc,
  insights,
  slugifyHeading,
} from "@/content/insights";
import { site } from "@/content/site";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { RelatedStrip } from "@/components/patterns/related-strip";
import { CTASection } from "@/components/patterns/cta-section";
import type { InsightBlock } from "@/content/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return buildMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
    type: "article",
    publishedTime: insight.date,
  });
}

function Block({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 id={block.text ? slugifyHeading(block.text) : undefined}>
          {block.text}
        </h2>
      );
    case "subheading":
      return <h3>{block.text}</h3>;
    case "list":
      return (
        <ul>
          {block.items?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case "code":
      return (
        <pre tabIndex={0} aria-label={`Code example${block.language ? ` (${block.language})` : ""}`}>
          <code>{block.text}</code>
        </pre>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const toc = getInsightToc(insight);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: insight.title,
          description: insight.description,
          path: `/insights/${insight.slug}`,
          date: insight.date,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Insights", path: "/insights" },
          { name: insight.title, path: `/insights/${insight.slug}` },
        ])}
      />

      <article className="shell pt-16 pb-8 lg:pt-24">
        {/* Article header */}
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            {insight.category.toUpperCase()} /{" "}
            <span className="text-accent">{formatDate(insight.date).toUpperCase()}</span>
          </p>
          <h1 className="t-h1 text-primary text-balance">{insight.title}</h1>
          <p className="t-lede">{insight.description}</p>
          <p className="mono-meta flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
            <span>{site.name} — ENGINEERING</span>
            <span aria-hidden="true">·</span>
            <span>{insight.readingTime} READ</span>
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Table of contents — sticky on desktop, plain list on mobile */}
          {toc.length > 0 && (
            <nav aria-label="Table of contents" className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <p className="mono-label mb-4 text-muted">CONTENTS</p>
                <ol className="flex flex-col gap-2.5 border-l border-line">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px block border-l-2 border-transparent py-0.5 pl-4 text-sm text-secondary transition-colors hover:border-accent hover:text-primary"
                      >
                        <span className="mono-meta mr-2 text-[11px] text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>
          )}

          {/* Body */}
          <div className={toc.length ? "lg:col-span-8" : "lg:col-span-12"}>
            <div className="prose-jeem">
              {insight.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      </article>

      <RelatedStrip
        serviceIds={insight.relatedServices}
        workSlugs={insight.relatedWork}
      />

      <CTASection
        title="Facing this problem right now?"
        body="We've probably seen your version of it before. Tell us the situation — the first conversation costs nothing and commits you to nothing."
      />
    </>
  );
}
