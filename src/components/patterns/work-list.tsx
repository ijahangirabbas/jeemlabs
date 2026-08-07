import Link from "next/link";
import { caseStudies } from "@/content/work";
import { services } from "@/content/services";
import { Signal } from "@/components/ui/signal";
import { Tag } from "@/components/ui/tag";
import { Arrow } from "@/components/ui/button";

/**
 * Work presented as case rows — evidence first, no screenshot gallery.
 * Client names and numbers appear only where they are real (§67).
 */
export function WorkList({
  limit,
  slugs,
}: {
  limit?: number;
  /** Restrict to specific case studies (e.g. related work). */
  slugs?: string[];
}) {
  let items = slugs
    ? caseStudies.filter((c) => slugs.includes(c.slug))
    : caseStudies;
  if (limit) items = items.slice(0, limit);
  if (!items.length) return null;

  return (
    <div className="flex flex-col gap-0 border-t border-line">
      {items.map((cs) => (
        <Link
          key={cs.slug}
          href={`/work/${cs.slug}`}
          className="group relative grid gap-4 border-b border-line py-8 pl-4 pr-3 transition-colors duration-200 hover:bg-surface sm:py-10 sm:pl-6 sm:pr-5 lg:grid-cols-12 lg:gap-8
                     before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:origin-top before:scale-y-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart before:content-[''] group-hover:before:scale-y-100"
        >
          <div className="flex flex-col gap-2 lg:col-span-2">
            <span className="mono-meta text-xs text-muted">
              CASE / {cs.caseNumber}
            </span>
            <Signal state={cs.status} />
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            <h3 className="t-h3 text-primary transition-colors group-hover:text-accent">
              {cs.title}
            </h3>
            <p className="max-w-2xl leading-relaxed text-secondary">
              {cs.summary}
            </p>
            <ul className="mt-1 flex flex-wrap gap-2">
              {cs.services.map((id) => {
                const s = services.find((svc) => svc.id === id);
                return s ? <Tag key={id}>{s.name}</Tag> : null;
              })}
            </ul>
          </div>

          <div className="flex items-start justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-end">
            <span className="mono-meta text-xs text-muted">{cs.year}</span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
              View case study
              <Arrow className="size-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Honest note shown where additional case studies will appear.
 * An empty seat left visibly empty builds more trust than a fake logo wall.
 */
export function WorkNote() {
  return (
    <p className="mono-meta border-l-2 border-accent py-1 pl-4 text-xs leading-relaxed text-muted">
      MORE CASE STUDIES ARE PUBLISHED AS CLIENT WORK SHIPS — WITH REAL
      INTERFACES, REAL DECISIONS AND REAL NUMBERS, WITH PERMISSION. NOTHING
      HERE IS EVER INVENTED.
    </p>
  );
}
