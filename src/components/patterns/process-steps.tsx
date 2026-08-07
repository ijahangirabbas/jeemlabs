import { processSteps } from "@/content/company";
import { Reveal } from "@/components/ui/reveal";

/**
 * How JEEM works. Engagement depth adapts to project complexity —
 * the steps are constant, the weight behind them is not.
 */
export function ProcessSteps() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step, i) => (
        <li
          key={step.step}
          className="bg-surface transition-colors duration-200 hover:bg-surface-elevated"
        >
          <Reveal delay={i * 60} className="flex h-full flex-col gap-4 p-6 lg:p-7">
            <span className="mono-meta text-xs text-accent">{step.step}</span>
            <h3 className="text-lg font-medium text-primary">{step.name}</h3>
            <p className="text-sm leading-relaxed text-secondary">{step.summary}</p>
            <p className="mt-auto border-t border-line pt-4 text-xs leading-relaxed text-muted">
              {step.detail}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
