import Link from "next/link";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { caseStudies } from "@/content/work";
import { Arrow } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { ServiceId } from "@/content/types";

/**
 * Internal linking made structural (§56). Every leaf page ends with
 * deliberate onward paths — no orphaned content.
 */
export function RelatedStrip({
  serviceIds = [],
  insightSlugs = [],
  workSlugs = [],
}: {
  serviceIds?: ServiceId[];
  insightSlugs?: string[];
  workSlugs?: string[];
}) {
  const relatedServices = services.filter((s) => serviceIds.includes(s.id));
  const relatedInsights = insights.filter((i) => insightSlugs.includes(i.slug));
  const relatedWork = caseStudies.filter((c) => workSlugs.includes(c.slug));

  if (!relatedServices.length && !relatedInsights.length && !relatedWork.length) {
    return null;
  }

  return (
    <section aria-labelledby="related-heading" className="shell pb-20 lg:pb-28">
      <div className="border-t border-line pt-10">
        <h2 id="related-heading" className="mono-label text-muted">
          RELATED /
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.id}`}
              className="group flex flex-col gap-2 bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <span className="mono-meta text-[11px] text-muted">
                SERVICE / {s.index}
              </span>
              <span className="flex items-center justify-between gap-3 font-medium text-primary">
                {s.name}
                <Arrow className="size-4 text-muted group-hover:text-accent" />
              </span>
              <span className="text-sm text-secondary">{s.tagline}</span>
            </Link>
          ))}
          {relatedWork.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group flex flex-col gap-2 bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <span className="mono-meta text-[11px] text-muted">
                CASE / {c.caseNumber}
              </span>
              <span className="flex items-center justify-between gap-3 font-medium text-primary">
                {c.title}
                <Arrow className="size-4 text-muted group-hover:text-accent" />
              </span>
              <span className="text-sm text-secondary">{c.outcome}</span>
            </Link>
          ))}
          {relatedInsights.map((i) => (
            <Link
              key={i.slug}
              href={`/insights/${i.slug}`}
              className="group flex flex-col gap-2 bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <span className="mono-meta text-[11px] text-muted">
                {i.category.toUpperCase()} / {formatDate(i.date).toUpperCase()}
              </span>
              <span className="flex items-center justify-between gap-3 font-medium text-primary">
                {i.title}
                <Arrow className="size-4 shrink-0 text-muted group-hover:text-accent" />
              </span>
              <span className="text-sm text-secondary">{i.readingTime} read</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
