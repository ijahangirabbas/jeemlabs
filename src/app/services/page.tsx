import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { Signal } from "@/components/ui/signal";
import { Reveal } from "@/components/ui/reveal";
import { Arrow } from "@/components/ui/button";
import { ProcessSteps } from "@/components/patterns/process-steps";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI engineering, web platforms, mobile applications, custom software, automation and cloud infrastructure — one engineering standard, whatever the project size.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-heading" className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / SERVICES
          </p>
          <h1 id="services-heading" className="t-h1 text-primary text-balance">
            What we can build for you.
          </h1>
          <p className="t-lede">
            Six disciplines, one engineering standard. Most real projects
            combine several of them — tell us the problem and we&rsquo;ll
            assemble the right mix. Every client gets the same commitment;
            every project gets the right process.
          </p>
        </Reveal>
      </section>

      <section aria-label="Service list" className="shell pb-20 lg:pb-28">
        <div className="flex flex-col border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 40}>
              <Link
                href={`/services/${s.id}`}
                className="group grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
              >
                <div className="flex items-baseline gap-4 lg:col-span-1">
                  <span className="mono-meta text-xs text-muted transition-colors group-hover:text-accent">
                    {s.index}
                  </span>
                </div>
                <div className="flex flex-col gap-3 lg:col-span-6">
                  <h2 className="t-h3 text-primary transition-colors group-hover:text-accent">
                    {s.name}
                  </h2>
                  <p className="max-w-xl leading-relaxed text-secondary">
                    {s.tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:col-span-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {s.problems[0]?.title} · {s.problems[1]?.title}
                  </p>
                  <p className="mono-meta text-[11px] uppercase text-muted">
                    {s.keywords.join(" / ")}
                  </p>
                </div>
                <div className="flex items-start lg:col-span-1 lg:justify-end">
                  <Arrow className="size-5 text-muted transition-colors group-hover:text-accent" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex items-center gap-3">
          <Signal state="AVAILABLE" pulse />
          <p className="text-sm text-secondary">
            Not sure which service fits? That&rsquo;s normal — describe the
            problem and we&rsquo;ll map it.
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="services-process" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-20 lg:py-28">
          <div className="flex max-w-3xl flex-col gap-6">
            <p className="mono-label text-muted">
              <span className="text-accent">02</span> / HOW WE WORK
            </p>
            <h2 id="services-process" className="t-h2 text-primary text-balance">
              Small project or platform build — the standard doesn&rsquo;t change.
            </h2>
            <p className="t-lede">
              A two-week website and a year-long platform engagement enter
              through the same front door. The process adapts in weight, never
              in care.
            </p>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
