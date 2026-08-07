import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

/**
 * Section header: mono index + label, a plain-language title, and an
 * optional lede. The index ("01 / 06") ties sections into one system.
 */
export function SectionHeader({
  index,
  label,
  title,
  lede,
  align = "left",
  className,
}: {
  /** "01" — section position in the page system. */
  index?: string;
  /** "SERVICES" — the mono metadata label. */
  label: string;
  title: string;
  lede?: string;
  align?: "left" | "split";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "split" && "lg:grid lg:grid-cols-12 lg:gap-8",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", align === "split" && "lg:col-span-5")}>
        <p className="mono-label text-muted">
          {index && <span className="text-accent">{index}</span>}
          {index && <span aria-hidden="true"> / </span>}
          {label}
        </p>
        <h2 className="t-h2 max-w-[16ch] text-primary text-balance">{title}</h2>
      </div>
      {lede && (
        <p
          className={cn(
            "t-lede max-w-xl",
            align === "split" && "lg:col-span-6 lg:col-start-7 lg:self-end",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
