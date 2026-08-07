import { cn } from "@/lib/utils";
import type { SignalState } from "@/content/types";

/**
 * ● JEEM SIGNAL
 *
 * The nuqta of the jeem extended into the interface. It is SEMANTIC:
 * it communicates a live state (LIVE, AVAILABLE, DEPLOYED, BETA…).
 * Never used decoratively — the text label always carries the meaning,
 * so no information depends on colour alone.
 */
export function Signal({
  state,
  pulse = false,
  className,
}: {
  state: SignalState;
  /** Motion communicates an ongoing state. Off for completed states. */
  pulse?: boolean;
  className?: string;
}) {
  // The state is rendered as visible text, so assistive technology reads
  // it naturally; only the decorative dot is hidden.
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-[7px] shrink-0 rounded-full bg-signal",
          pulse && "signal-pulse",
        )}
      />
      <span className="mono-label">{state}</span>
    </span>
  );
}
