import type { ServiceFaq } from "@/content/types";

/**
 * FAQ — native <details> disclosure. Keyboard and screen-reader accessible
 * by default, zero JavaScript, animated with a restrained plus rotation.
 */
export function Faq({ items }: { items: ServiceFaq[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <details key={item.question} className="group border-b border-line">
          <summary
            className="flex min-h-14 cursor-pointer list-none items-baseline gap-5 py-5 text-left
                       transition-colors duration-200 hover:text-accent
                       [&::-webkit-details-marker]:hidden"
          >
            <span className="mono-meta shrink-0 text-xs text-muted">
              Q{String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-base font-medium text-primary sm:text-lg">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="relative size-4 shrink-0 self-center text-muted transition-transform duration-300 group-open:rotate-45"
            >
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
            </span>
          </summary>
          <div className="pb-6 pl-[3.4rem] pr-8 sm:pl-[4.1rem]">
            <p className="max-w-2xl leading-relaxed text-secondary">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
