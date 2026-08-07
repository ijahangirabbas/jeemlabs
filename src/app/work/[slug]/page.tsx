import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/content/work";
import { services } from "@/content/services";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Signal } from "@/components/ui/signal";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button";
import { ArchitectureDiagram } from "@/components/patterns/architecture-diagram";
import { RelatedStrip } from "@/components/patterns/related-strip";
import { CTASection } from "@/components/patterns/cta-section";
import type { CaseStudySection } from "@/content/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: `${cs.title} — Case Study`,
    description: cs.summary,
    path: `/work/${cs.slug}`,
  });
}

function Section({ data, index }: { data: CaseStudySection; index: number }) {
  return (
    <section aria-label={data.heading} className="grid gap-6 border-t border-line py-12 lg:grid-cols-12">
      <p className="mono-label text-muted lg:col-span-3">
        {String(index).padStart(2, "0")} / {data.heading.toUpperCase()}
      </p>
      <div className="flex flex-col gap-5 lg:col-span-8 lg:col-start-5">
        {data.body?.map((p, i) => (
          <p key={i} className="leading-relaxed text-secondary">
            {p}
          </p>
        ))}
        {data.bullets && (
          <ul className="flex flex-col gap-2.5">
            {data.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-secondary">
                <span aria-hidden="true" className="text-accent">→</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const sectionList: CaseStudySection[] = [
    cs.sections.problem,
    cs.sections.context,
    cs.sections.approach,
  ];
  const afterDiagram: CaseStudySection[] = [
    cs.sections.engineeringDecisions,
    cs.sections.challenges,
    cs.sections.results,
    cs.sections.whatsNext,
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Work", path: "/work" },
          { name: cs.title, path: `/work/${cs.slug}` },
        ])}
      />

      {/* CASE HEADER */}
      <section aria-labelledby="case-heading" className="shell pt-16 pb-12 lg:pt-24 lg:pb-16">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="mono-label text-muted">
              CASE / <span className="text-accent">{cs.caseNumber}</span>
            </span>
            <Signal state={cs.status} />
          </div>
          <h1 id="case-heading" className="t-h1 max-w-4xl text-primary text-balance">
            {cs.title}
          </h1>
          <p className="t-lede max-w-3xl">{cs.summary}</p>
        </Reveal>

        {/* Metadata table — structure over decoration */}
        <Reveal className="mt-12 overflow-hidden rounded-lg border border-line">
          <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["CLIENT", cs.client],
              ["SECTOR", cs.sector],
              ["YEAR", cs.year],
              ["SERVICES", cs.services
                .map((id) => services.find((s) => s.id === id)?.name)
                .filter(Boolean)
                .join(", ")],
            ].map(([term, value]) => (
              <div key={term} className="flex flex-col gap-1.5 bg-surface p-5">
                <dt className="mono-meta text-[11px] text-muted">{term}</dt>
                <dd className="text-sm font-medium text-primary">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Metrics render only when real numbers exist */}
        {cs.metrics.length > 0 && (
          <Reveal className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="bg-surface p-5">
                <p className="t-h3 text-primary">{m.value}</p>
                <p className="mono-meta mt-1 text-[11px] text-muted">
                  {m.label.toUpperCase()}
                </p>
              </div>
            ))}
          </Reveal>
        )}
      </section>

      {/* OVERVIEW */}
      <section aria-label="Overview" className="shell pb-4">
        <div className="grid gap-6 border-t border-line pt-12 lg:grid-cols-12">
          <p className="mono-label text-muted lg:col-span-3">OVERVIEW</p>
          <p className="text-lg leading-relaxed text-primary lg:col-span-8 lg:col-start-5">
            {cs.sections.overview}
          </p>
        </div>
      </section>

      {/* BODY SECTIONS */}
      <div className="shell pb-8">
        {sectionList.map((s, i) => (
          <Section key={s.heading} data={s} index={i + 1} />
        ))}
      </div>

      {/* ARCHITECTURE — shown as a real system visual */}
      <section aria-label="Architecture" className="shell pb-4">
        <div className="grid gap-6 border-t border-line py-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="mono-label text-muted">04 / ARCHITECTURE</p>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-8 lg:col-start-5">
            {cs.sections.architecture.body?.map((p, i) => (
              <p key={i} className="leading-relaxed text-secondary">{p}</p>
            ))}
            {cs.sections.architecture.bullets && (
              <ul className="flex flex-col gap-2.5">
                {cs.sections.architecture.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-secondary">
                    <span aria-hidden="true" className="text-accent">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <ArchitectureDiagram
              id="web"
              caption={`${cs.title.toUpperCase()} — SYSTEM VIEW`}
            />
          </div>
        </div>
      </section>

      <div className="shell pb-12">
        {afterDiagram.map((s, i) => (
          <Section key={s.heading} data={s} index={i + 5} />
        ))}

        {/* TECHNOLOGY */}
        <section aria-label="Technology" className="grid gap-6 border-t border-line py-12 lg:grid-cols-12">
          <p className="mono-label text-muted lg:col-span-3">09 / TECHNOLOGY</p>
          <ul className="flex flex-wrap gap-2 lg:col-span-8 lg:col-start-5">
            {cs.technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-line pt-10">
          <ButtonLink href="/start-project" size="lg" arrow>
            Build something similar
          </ButtonLink>
        </div>
      </div>

      <RelatedStrip
        serviceIds={cs.relatedServices}
        insightSlugs={cs.relatedInsights}
      />

      <CTASection />
    </>
  );
}

