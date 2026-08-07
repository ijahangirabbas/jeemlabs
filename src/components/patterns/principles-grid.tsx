import { principles } from "@/content/company";
import { Reveal } from "@/components/ui/reveal";

/**
 * Why JEEM — differentiation stated as principles we can be held to,
 * not adjectives we can't.
 */
export function PrinciplesGrid() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {principles.map((p, i) => (
        <li
          key={p.index}
          className="bg-surface transition-colors duration-200 hover:bg-surface-elevated"
        >
          <Reveal delay={i * 50} className="flex h-full flex-col gap-3 p-6 lg:p-7">
            <span className="mono-meta text-xs text-muted">{p.index}</span>
            <h3 className="text-base font-medium text-primary">{p.title}</h3>
            <p className="text-sm leading-relaxed text-secondary">{p.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
