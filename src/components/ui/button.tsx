import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Precision arrow. Moves 2px on hover — the entire hover theatre. */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={cn(
        "size-[0.9em] shrink-0 transition-transform duration-200 ease-out-quart",
        "group-hover:translate-x-[3px] group-focus-visible:translate-x-[3px]",
        className,
      )}
    >
      <path
        d="M1.5 8h12M9.5 3.5 14 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

type Variant = "primary" | "secondary" | "quiet" | "onDark";
type Size = "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2.5 rounded font-medium " +
  "isolate overflow-hidden whitespace-nowrap transition-colors duration-200 ease-out-quart " +
  "active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-50";

/* Directional fills: the colour arrives from the left, never a glow.
   Content sits above the sweep via relative spans. */
const sweep =
  "before:pointer-events-none before:absolute before:inset-0 before:-z-10 " +
  "before:origin-left before:scale-x-0 before:transition-transform " +
  "before:duration-300 before:ease-out-quart hover:before:scale-x-100";

const variants: Record<Variant, string> = {
  // High-contrast inverse fill. Calm, confident, no glow.
  primary: cn(
    "bg-primary text-inverse border border-transparent hover:text-on-accent",
    sweep,
    "before:bg-accent",
  ),
  // Border-first. The fill arrives on hover.
  secondary:
    "border border-line-strong bg-transparent text-primary hover:border-accent hover:text-accent hover:bg-accent-subtle/50",
  quiet: "text-secondary hover:text-primary",
  // For always-dark bands (CTA, status strip): light fill, dark text.
  onDark: cn(
    "border border-transparent bg-[var(--color-offwhite-100)] text-[var(--color-graphite-900)]",
    "hover:text-[#06130a]",
    sweep,
    "before:bg-[var(--signal)]",
  ),
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {arrow && <Arrow />}
    </Link>
  );
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {arrow && <Arrow />}
    </button>
  );
}

/** Text link with the same arrow discipline, for in-content navigation. */
export function ArrowLink({
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-2 font-medium text-accent",
        "transition-colors duration-200 hover:text-accent-hover",
        className,
      )}
      {...props}
    >
      <span className="underline decoration-accent/40 underline-offset-4 transition-colors group-hover:decoration-accent">
        {children}
      </span>
      <Arrow />
    </Link>
  );
}
