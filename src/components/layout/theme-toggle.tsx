"use client";

import { cn } from "@/lib/utils";

/**
 * Light / dark toggle. Stateless: the theme lives on <html data-theme>
 * (set before paint by the inline script), and the two icons swap via
 * CSS — no React state, no hydration mismatch, no effect.
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("jeem-theme", next);
    } catch {
      // Storage unavailable (private mode) — theme still applies this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded border border-line-strong",
        "text-secondary transition-colors duration-200",
        "hover:border-line-bold hover:text-primary",
        className,
      )}
    >
      {/* Moon — shown in light mode (offers dark) */}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="size-4 dark:hidden"
        aria-hidden="true"
      >
        <path
          d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
      {/* Sun — shown in dark mode (offers light) */}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="hidden size-4 dark:block"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}

