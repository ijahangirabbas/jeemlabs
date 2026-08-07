import { cn } from "@/lib/utils";

/**
 * Corner crosshair ticks — the "+" primitive from the graphic language.
 * Marks the corners of a surface the way a technical drawing marks a
 * plate. Purely structural; always hidden from assistive technology.
 * Parent must be `relative`.
 */
export function Ticks({ className }: { className?: string }) {
  const tick = "absolute size-2";
  const cross = (
    <>
      <span aria-hidden="true" className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span aria-hidden="true" className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
    </>
  );
  return (
    <span
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 text-muted/60", className)}
    >
      <span className={cn(tick, "-left-1 -top-1")}>{cross}</span>
      <span className={cn(tick, "-right-1 -top-1")}>{cross}</span>
      <span className={cn(tick, "-bottom-1 -left-1")}>{cross}</span>
      <span className={cn(tick, "-bottom-1 -right-1")}>{cross}</span>
    </span>
  );
}
