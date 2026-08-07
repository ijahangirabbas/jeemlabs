import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";
import { InsightList } from "@/components/patterns/insight-list";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Engineering and business writing from JEEM LABS — AI systems, web performance, integrations and how software actually gets built well.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <section aria-labelledby="insights-heading" className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / INSIGHTS
          </p>
          <h1 id="insights-heading" className="t-h1 text-primary text-balance">
            Useful, whether or not you hire us.
          </h1>
          <p className="t-lede">
            Writing from real delivery work — for CTOs evaluating approaches
            and for founders trying to understand what they&rsquo;re buying.
            No content marketing voice, no hype.
          </p>
        </Reveal>
      </section>

      <section aria-label="Articles" className="shell pb-20 lg:pb-28">
        <Reveal>
          <InsightList />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
