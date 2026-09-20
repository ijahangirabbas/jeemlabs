"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Arrow } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import type { NavItem } from "@/content/types";

/**
 * Mobile navigation overlay. Loaded as a separate chunk on first open —
 * desktop visitors never download or parse this file.
 */
export function MobileMenu({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line bg-canvas lg:hidden"
    >
      <nav aria-label="Mobile" className="shell flex flex-col py-6">
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.href} className="border-b border-line">
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-14 items-center justify-between py-4 text-lg",
                  isActive(item.href) ? "text-primary" : "text-secondary",
                )}
              >
                <span className="flex items-baseline gap-4">
                  <span className="mono-meta text-xs text-muted">
                    0{i + 1}
                  </span>
                  {item.label}
                </span>
                <Arrow className="size-4" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/start-project"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded bg-primary font-medium text-inverse"
          >
            Start a Project
            <Arrow className="size-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded border border-line-strong font-medium text-primary"
          >
            Contact
          </Link>
          <div className="mt-2 flex items-center justify-between">
            <span className="mono-label text-muted">{site.availability}</span>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
