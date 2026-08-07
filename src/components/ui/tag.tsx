import { cn } from "@/lib/utils";

/**
 * Small mono tag for capabilities, technologies and categories.
 * Square geometry, thin border, no pill-blob aesthetic.
 */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-line px-2 py-[3px]",
        "mono-meta text-[11px] uppercase text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
