"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
import { lazy, Suspense, useEffect, useRef, useState } from "react";
=======
import { useEffect, useRef, useState } from "react";
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
import { primaryNav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Arrow } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

<<<<<<< HEAD
/* Mobile menu is a separate chunk: desktop never downloads or parses it. */
const MobileMenu = lazy(() =>
  import("./mobile-menu").then((m) => ({ default: m.MobileMenu })),
);

=======
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
/**
 * Restrained header. The logo carries "Home"; Start a Project is the
 * single persistent conversion action. One level of navigation, no
 * dropdown mazes.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
=======
  const menuRef = useRef<HTMLDivElement>(null);
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu on navigation — state adjusted during render,
  // the pattern React recommends over an effect for prop-derived resets.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (open) setOpen(false);
  }

  // Elevation appears only once the header actually floats over content.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes; focus returns to the trigger.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Status strip — a true statement about availability, not decor.
          Sits above the sticky header and scrolls away with the page. */}
      <div className="band-inverse border-b">
        <div className="shell flex h-9 items-center justify-between gap-6">
          <p className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="signal-pulse size-[6px] rounded-full bg-signal"
            />
            <span className="mono-label text-[10px] text-offwhite-100/80">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </p>
          <p className="hidden items-center gap-6 md:flex">
            <span className="mono-meta text-[10px] text-offwhite-100/60">
              RESPONSE &lt; 1H
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-graphite-600" />
            <a
              href={`mailto:${site.email}`}
              className="mono-meta text-[10px] text-offwhite-100/60 transition-colors hover:text-offwhite-100"
            >
              {site.email.toUpperCase()}
            </a>
          </p>
        </div>
      </div>

      <header
        className={cn(
<<<<<<< HEAD
          "sticky top-0 z-40 border-b border-line bg-canvas",
=======
          "sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm",
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
          "transition-shadow duration-300",
          scrolled && "shadow-float",
        )}
      >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Logo />
        

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative text-sm transition-colors duration-200",
                "after:absolute after:-bottom-[21px] after:left-0 after:h-px after:w-full after:bg-accent",
                isActive(item.href)
                  ? "text-primary after:scale-x-100"
                  : "text-secondary after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out-quart hover:text-primary hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="/start-project"
            className={cn(
              "group relative isolate hidden h-9 items-center gap-2 overflow-hidden rounded bg-primary px-4 text-sm font-medium",
              "text-inverse transition-colors duration-200 hover:text-on-accent sm:inline-flex",
              "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0",
              "before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart hover:before:scale-x-100",
            )}
          >
            Start a Project
            <Arrow className="size-3.5" />
          </Link>

          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded border border-line-strong text-primary lg:hidden"
          >
            <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
              {open ? (
                <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.4" />
              ) : (
                <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.4" />
              )}
            </svg>
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile menu — lazy chunk, loads only when first opened */}
      {open && (
        <Suspense fallback={null}>
          <MobileMenu items={primaryNav} pathname={pathname} />
        </Suspense>
=======
      {/* Mobile menu — full-surface, border-first, keyboard friendly */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-canvas lg:hidden"
        >
          <nav aria-label="Mobile" className="shell flex flex-col py-6">
            <ul className="flex flex-col">
              {primaryNav.map((item, i) => (
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
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
      )}
      </header>
    </>
  );
}
