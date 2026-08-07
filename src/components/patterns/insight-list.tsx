import Link from "next/link";
import { insights } from "@/content/insights";
import { formatDate } from "@/lib/utils";
import { Arrow } from "@/components/ui/button";

/** Insight rows — editorial index with category, date and reading time. */
export function InsightList({ limit }: { limit?: number }) {
  const items = [...insights]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit ?? insights.length);

  return (
    <div className="flex flex-col border-t border-line">
      {items.map((insight) => (
        <Link
          key={insight.slug}
          href={`/insights/${insight.slug}`}
          className="group relative grid gap-3 border-b border-line py-6 transition-colors duration-200 hover:bg-surface sm:py-7 lg:grid-cols-12 lg:items-baseline lg:gap-8
                     before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:origin-top before:scale-y-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart before:content-[''] group-hover:before:scale-y-100"
        >
          <div className="flex items-center gap-4 lg:col-span-3">
            <span className="mono-meta text-xs text-accent">
              {insight.category.toUpperCase()}
            </span>
            <span className="mono-meta text-xs text-muted">
              {formatDate(insight.date)}
            </span>
          </div>
          <div className="flex flex-col gap-2 lg:col-span-7">
            <h3 className="text-lg font-medium leading-snug text-primary transition-colors group-hover:text-accent sm:text-xl">
              {insight.title}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-secondary">
              {insight.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 lg:col-span-2 lg:justify-end">
            <span className="mono-meta text-xs text-muted">
              {insight.readingTime}
            </span>
            <Arrow className="size-4 text-muted transition-colors group-hover:text-accent" />
          </div>
        </Link>
      ))}
    </div>
  );
}
