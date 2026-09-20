import Link from "next/link";
import { services } from "@/content/services";
import { Arrow } from "@/components/ui/button";
import { ServiceIndexLazy } from "./service-index-lazy";

/**
 * The six capabilities as an open index — server-rendered snapshot first,
 * interactive island hydrates only when the section nears the viewport.
 *
 * The static snapshot is fully readable, crawlable and functional without
 * JavaScript: every row is a real link. The hover/focus panel is
 * progressive enhancement, identical in markup to the island's initial
 * state, so the swap causes no layout shift.
 */
export function ServiceIndex() {
  return <ServiceIndexLazy fallback={<StaticSnapshot />} />;
}

function StaticSnapshot() {
  const first = services[0]!;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <ul className="flex flex-col border-t border-line lg:col-span-7">
        {services.map((service) => (
          <li key={service.id} className="border-b border-line">
            <Link
              href={`/services/${service.id}`}
              className="group relative flex items-center gap-5 py-5 pl-5 pr-4 transition-colors duration-200 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:origin-top before:scale-y-0 before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart before:content-[''] hover:bg-surface/70 hover:before:scale-y-100 sm:gap-8 sm:py-6 sm:pl-7 sm:pr-6"
            >
              <span className="mono-meta text-xs text-muted transition-colors duration-200 group-hover:text-accent">
                {service.index}
              </span>
              <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-lg font-medium text-secondary transition-colors duration-200 group-hover:text-primary sm:text-xl">
                  {service.name}
                </span>
                <span className="mono-meta hidden text-[11px] uppercase text-muted md:block">
                  {service.keywords.slice(0, 3).join(" / ")}
                </span>
              </span>
              <Arrow className="size-4 -translate-x-1 text-muted opacity-40 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-24 overflow-hidden rounded-lg border border-line bg-surface">
          <div className="grid-field flex items-center justify-between border-b border-accent-border bg-accent-subtle/60 px-6 py-4">
            <p className="mono-label text-accent">
              {first.index} / {first.name.toUpperCase()}
            </p>
            <span aria-hidden="true" className="mono-meta text-[10px] text-accent">
              SYS / {first.diagram ? first.diagram.toUpperCase() : "JEEM"}
            </span>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <p className="border-l-2 border-accent pl-3 text-lg leading-snug text-primary">
              {first.tagline}
            </p>
            <p className="text-sm leading-relaxed text-secondary">
              {first.proposition}
            </p>
            <ul className="flex flex-wrap gap-2">
              {first.keywords.map((k) => (
                <li
                  key={k}
                  className="mono-meta rounded-xs border border-accent-border bg-accent-subtle/70 px-2 py-1 text-[11px] uppercase text-accent"
                >
                  {k}
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 border-t border-line pt-4 text-sm text-muted">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              {first.problems.length} problems · {first.capabilities.length}{" "}
              capabilities · {first.faqs.length} answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
