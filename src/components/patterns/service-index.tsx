"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { Arrow } from "@/components/ui/button";

/**
 * The six capabilities as an open interactive index — not floating cards.
 *
 * Desktop: hover/focus a row to preview its scope in the side panel.
 * Touch and keyboard: the same interaction via tap/focus. The row itself
 * is always a real link — the panel is progressive enhancement, never
 * the only path to information.
 */
export function ServiceIndex() {
  const [active, setActive] = useState(0);
  // services is a non-empty static array; index is clamped by construction.
  const current = services[Math.min(active, services.length - 1)]!;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <ul className="flex flex-col border-t border-line lg:col-span-7">
        {services.map((service, i) => {
          const isActive = i === active;
          return (
            <li key={service.id} className="border-b border-line">
              <Link
                href={`/services/${service.id}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative flex items-center gap-5 py-5 pl-5 pr-4 sm:gap-8 sm:py-6 sm:pl-7 sm:pr-6",
                  "transition-colors duration-200 hover:bg-surface/70",
                  "before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:origin-top before:bg-accent",
                  "before:transition-transform before:duration-300 before:ease-out-quart before:content-['']",
                  isActive
                    ? "before:scale-y-100"
                    : "before:scale-y-0 group-hover:before:scale-y-100",
                )}
                aria-describedby={`service-panel-${service.id}`}
              >
                <span
                  className={cn(
                    "mono-meta text-xs transition-colors duration-200",
                    isActive ? "text-accent" : "text-muted",
                  )}
                >
                  {service.index}
                </span>
                <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span
                    className={cn(
                      "text-lg font-medium transition-colors duration-200 sm:text-xl",
                      isActive ? "text-primary" : "text-secondary group-hover:text-primary",
                    )}
                  >
                    {service.name}
                  </span>
                  <span className="mono-meta hidden text-[11px] uppercase text-muted md:block">
                    {service.keywords.slice(0, 3).join(" / ")}
                  </span>
                </span>
                <Arrow
                  className={cn(
                    "size-4 transition-all duration-200",
                    isActive
                      ? "translate-x-0 text-accent opacity-100"
                      : "-translate-x-1 text-muted opacity-40 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Detail panel — mirrors the active row */}
      <div className="hidden lg:col-span-5 lg:block">
        <div
          className="sticky top-24 overflow-hidden rounded-lg border border-line bg-surface"
          aria-live="polite"
        >
          {/* Cobalt-tinted header: the panel carries the brand's colour */}
          <div className="grid-field flex items-center justify-between border-b border-accent-border bg-accent-subtle/60 px-6 py-4">
            <p className="mono-label text-accent">
              {current.index} / {current.name.toUpperCase()}
            </p>
            <span aria-hidden="true" className="mono-meta text-[10px] text-accent">
              SYS / {current.diagram ? current.diagram.toUpperCase() : "JEEM"}
            </span>
          </div>
          <div className="flex flex-col gap-4 p-6">
            <p className="border-l-2 border-accent pl-3 text-lg leading-snug text-primary">
              {current.tagline}
            </p>
            <p className="text-sm leading-relaxed text-secondary">
              {current.proposition}
            </p>
            <ul className="flex flex-wrap gap-2">
              {current.keywords.map((k) => (
                <li
                  key={k}
                  className="mono-meta rounded-xs border border-accent-border bg-accent-subtle/70 px-2 py-1 text-[11px] uppercase text-accent"
                >
                  {k}
                </li>
              ))}
            </ul>
            <p
              id={`service-panel-${current.id}`}
              className="flex items-center gap-2 border-t border-line pt-4 text-sm text-muted"
            >
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              {current.problems.length} problems · {current.capabilities.length}{" "}
              capabilities · {current.faqs.length} answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
