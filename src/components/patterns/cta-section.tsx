import { ButtonLink } from "@/components/ui/button";
import { Signal } from "@/components/ui/signal";
import { Reveal } from "@/components/ui/reveal";
import { Ticks } from "@/components/ui/ticks";
import { site } from "@/content/site";

/**
 * Final conversion band. One invitation, one action, one honest signal.
 * Inverse surface — the single darkest moment on a light page.
 */
export function CTASection({
  title = "Tell us what you're trying to build.",
  body = "Describe the problem in plain words. We'll reply with an honest read on whether — and how — we can help, within one hour.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="shell py-16 lg:py-24">
      <Reveal>
        <div className="band-inverse grid-field-inverse relative overflow-hidden rounded-lg border px-6 py-14 text-center sm:px-12 lg:py-20">
          <Ticks className="text-offwhite-100/20" />
          <span
            aria-hidden="true"
            className="mono-meta absolute left-5 top-4 text-[10px] text-offwhite-100/40"
          >
            START / CONVERSATION
          </span>
          <span
            aria-hidden="true"
            className="mono-meta absolute right-5 top-4 text-[10px] text-offwhite-100/40"
          >
            REF / {new Date().getFullYear()}
          </span>
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Signal state={site.availability} pulse className="text-offwhite-100/70" />
            <h2
              id="cta-heading"
              className="t-h2 text-offwhite-100 text-balance"
            >
              {title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-offwhite-100/70 sm:text-lg">
              {body}
            </p>
            <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
              <ButtonLink href="/start-project" size="lg" arrow variant="onDark">
                Start a Project
              </ButtonLink>
              <ButtonLink
                href="/work"
                size="lg"
                variant="quiet"
                className="text-offwhite-100/70 hover:text-offwhite-100"
              >
                Explore our work
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
