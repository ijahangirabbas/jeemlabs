import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/reveal";
import { WorkList, WorkNote } from "@/components/patterns/work-list";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies from JEEM LABS — what was built, why, how it was engineered, and what resulted. Real projects only, with real evidence.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section aria-labelledby="work-heading" className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / WORK
          </p>
          <h1 id="work-heading" className="t-h1 text-primary text-balance">
            Work we can stand behind.
          </h1>
          <p className="t-lede">
            Not a screenshot gallery — each case study explains what was
            built, why, the engineering decisions behind it, and what
            resulted. Only real projects appear here, with real evidence.
          </p>
        </Reveal>
      </section>

      <section aria-label="Case studies" className="shell pb-20 lg:pb-28">
        <Reveal>
          <WorkList />
        </Reveal>
        <Reveal className="mt-8 max-w-2xl">
          <WorkNote />
        </Reveal>
      </section>

      <CTASection
        title="Your project could be the next case study."
        body="Build something with us that we're both proud to publish — with real numbers, and your name on it only if you want it there."
      />
    </>
  );
}
