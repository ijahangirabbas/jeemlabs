import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/button";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "JEEM LABS is a small, senior engineering team. We hire rarely and carefully — introduce yourself anyway.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section aria-labelledby="careers-heading" className="shell pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / CAREERS
          </p>
          <h1 id="careers-heading" className="t-h1 text-primary text-balance">
            We hire rarely. When we do, it matters.
          </h1>
          <p className="t-lede">
            {site.name} is a deliberately small team. There is no open role
            listed here today — and no fabricated &ldquo;always
            hiring&rdquo; theatre either. But the right introduction is never
            wasted: when a role opens, the people who wrote thoughtfully are
            the first people we call.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-surface">
            <div className="flex h-full flex-col gap-4 p-7 lg:p-9">
              <h2 className="text-lg font-medium text-primary">What we look for</h2>
              <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-secondary">
                <li className="flex gap-3"><span aria-hidden="true" className="text-accent">→</span>Engineering judgement over framework trivia</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-accent">→</span>Writing quality — we communicate in documents</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-accent">→</span>Care for accessibility, performance and detail</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-accent">→</span>Comfort saying &ldquo;I don&rsquo;t know, let me check&rdquo;</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80} className="bg-surface">
            <div className="flex h-full flex-col gap-4 p-7 lg:p-9">
              <h2 className="text-lg font-medium text-primary">How to introduce yourself</h2>
              <p className="text-sm leading-relaxed text-secondary">
                Write to us with something you built and the decisions behind
                it. A project you can walk through beats a polished CV —
                we&rsquo;d rather read your reasoning than your adjectives.
              </p>
              <div className="mt-auto pt-2">
                <ArrowLink href="/contact">INTRODUCE YOURSELF</ArrowLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Here as a potential client instead?"
        body="That's the other front door — and it's open."
      />
    </>
  );
}
