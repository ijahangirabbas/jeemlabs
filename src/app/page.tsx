import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { productTeasers } from "@/content/products";
import { Signal } from "@/components/ui/signal";
import { Ticks } from "@/components/ui/ticks";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink, ButtonLink } from "@/components/ui/button";
import { SectionHeader } from "@/components/patterns/section-header";
import { ServiceIndex } from "@/components/patterns/service-index";
import { WorkList, WorkNote } from "@/components/patterns/work-list";
import { InsightList } from "@/components/patterns/insight-list";
import { ProcessSteps } from "@/components/patterns/process-steps";
import { PrinciplesGrid } from "@/components/patterns/principles-grid";
import { ArchitectureDiagram } from "@/components/patterns/architecture-diagram";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Engineering-led technology company",
  description: site.description,
  path: "/",
});

/* Mirrors the six services exactly — one vocabulary across the site. */
const capabilityStrip = [
  "AI",
  "WEB",
  "MOBILE",
  "SOFTWARE",
  "AUTOMATION",
  "CLOUD",
] as const;

export default function HomePage() {
  return (
    <>
      {/* 01 — HERO ------------------------------------------------------- */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-line"
      >
        {/* Receding engineering grid — structure, not wallpaper */}
        <div
          aria-hidden="true"
          className="grid-field-fade grid-drift absolute inset-0"
        />

        <div className="shell relative pt-16 pb-14 lg:pt-24 lg:pb-16">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-8 lg:col-span-8">
              <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="mono-label text-primary">JEEM LABS</span>
                <Signal state={site.availability} pulse />
                <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong sm:block" />
                <span className="mono-meta hidden text-[11px] text-muted sm:block">
                  EST / 2026 · GLOBAL / REMOTE
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1
                  id="hero-heading"
                  className="t-hero max-w-[15ch] text-primary text-balance"
                >
                  We engineer software around your{" "}
                  <span className="underline decoration-accent decoration-[3px] underline-offset-[0.14em]">
                    ambition.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="t-lede max-w-xl">
                  Custom software, AI systems and digital products designed
                  around real business problems — for founders, startups and
                  established organisations alike.
                </p>
              </Reveal>

              <Reveal
                delay={200}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <ButtonLink href="/start-project" size="lg" arrow>
                  Start a Project
                </ButtonLink>
                <ButtonLink href="/work" size="lg" variant="secondary">
                  Explore our Work
                </ButtonLink>
              </Reveal>
            </div>

            {/* System panel — the company as a legible machine */}
            <Reveal delay={240} className="lg:col-span-4">
              <div className="relative rounded-lg border border-line bg-surface/85">
                <Ticks />
                <div className="flex items-center justify-between border-b border-line px-5 py-3">
                  <span className="mono-label text-muted">SYSTEM</span>
                  <span className="mono-meta text-[10px] text-muted">2026.08</span>
                </div>
                <dl>
                  {[
                    ["FOCUS", "Software & AI systems"],
                    ["SCOPE", "AI · WEB · MOBILE · CLOUD"],
                    ["RESPONSE", "Within 1 hour"],
                    ["ENGAGEMENT", "Scoped or ongoing"],
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-3.5"
                    >
                      <dt className="mono-meta text-[11px] text-muted">{term}</dt>
                      <dd className="mono-meta text-[11px] text-primary">{value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="mono-meta text-[11px] text-muted">STATUS</dt>
                    <dd>
                      <Signal state={site.availability} pulse />
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* One-shot signal sweep: the line draws, the nuqta travels once. */}
          <div aria-hidden="true" className="relative mt-14 h-px bg-line lg:mt-20">
            <span className="draw-once absolute inset-0 bg-accent" />
            <span className="travel-once absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal" />
          </div>

          <Reveal delay={280} className="pt-5">
            <ul
              className="flex flex-wrap items-center gap-x-10 gap-y-3"
              aria-label="Capability areas"
            >
              {capabilityStrip.map((c, i) => (
                <li key={c} className="flex items-baseline gap-2.5">
                  <span aria-hidden="true" className="mono-meta text-[10px] text-accent">
                    0{i + 1}
                  </span>
                  <span className="mono-label text-muted transition-colors duration-200 hover:text-primary">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 02 — CAPABILITY SIGNAL ------------------------------------------ */}
      <section aria-label="What JEEM does" className="border-y border-line bg-canvas-secondary">
        <div className="shell grid gap-8 py-10 lg:grid-cols-12 lg:py-12">
          <p className="mono-label text-muted lg:col-span-3">WHAT WE DO</p>
          <p className="max-w-3xl text-lg leading-relaxed text-primary lg:col-span-9 lg:text-xl">
            JEEM LABS is an engineering-led technology company. We design and
            build the software a business actually runs on — applications,
            intelligent systems, integrations and the infrastructure beneath
            them — with the same commitment for a two-week build as for a
            year-long engagement.
          </p>
        </div>
      </section>

      {/* 03 — SELECTED WORK ---------------------------------------------- */}
      <section aria-labelledby="work-heading" className="shell py-20 lg:py-28">
        <SectionHeader
          index="01"
          label="SELECTED WORK"
          title="Proof before promises."
          lede="One strong case study outweighs ten marketing claims. This is work we can show, explain and stand behind."
        />
        <Reveal className="mt-12">
          <WorkList />
          <div className="mt-8">
            <WorkNote />
          </div>
        </Reveal>
      </section>

      {/* 04 — WHAT WE BUILD ---------------------------------------------- */}
      <section aria-labelledby="services-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeader
            index="02"
            label="CAPABILITIES"
            title="Six disciplines. One engineering standard."
            lede="Most projects combine several of these. The categories are a map — not a fence."
          />
          <Reveal className="mt-12">
            <ServiceIndex />
          </Reveal>
          <Reveal className="mt-10">
            <ArrowLink href="/services">ALL SERVICES</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* 05 — HOW JEEM WORKS --------------------------------------------- */}
      <section aria-labelledby="process-heading" className="shell py-20 lg:py-28">
        <SectionHeader
          index="03"
          label="PROCESS"
          title="The right process for the size of the problem."
          lede="Every engagement follows the same five commitments. The depth behind each step adapts — a website gets a lean pass, a platform gets the full weight."
        />
        <Reveal className="mt-12">
          <ProcessSteps />
        </Reveal>
      </section>

      {/* 06 — WHY JEEM ---------------------------------------------------- */}
      <section aria-labelledby="why-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeader
            index="04"
            label="PRINCIPLES"
            title="Why teams trust JEEM with the real thing."
            lede="Differentiation stated as working principles — things you can hold us to in week one and year three."
          />
          <Reveal className="mt-12">
            <PrinciplesGrid />
          </Reveal>
        </div>
      </section>

      {/* 07 — ENGINEERING VISUAL ------------------------------------------ */}
      <section aria-labelledby="engineering-heading" className="shell py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <p className="mono-label text-muted">
              <span className="text-accent">05</span> / SYSTEMS
            </p>
            <h2 className="t-h2 text-primary text-balance">
              We think in systems, then build them.
            </h2>
            <p className="t-lede">
              Every engagement starts as a diagram like this one: what talks
              to what, where data lives, what happens when something fails.
              You see the architecture before we write the code.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-secondary">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">→</span>
                Architecture reviewed with you in plain language
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">→</span>
                Failure paths designed, not discovered
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">→</span>
                Documentation your next engineer can actually use
              </li>
            </ul>
            <div>
              <ArrowLink href="/services/ai-engineering">
                SEE HOW WE APPROACH AI
              </ArrowLink>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <ArchitectureDiagram
              id="ai"
              caption="A GROUNDED AI ASSISTANT — REQUEST FLOW"
            />
          </Reveal>
        </div>
      </section>

      {/* 08 — TRUST -------------------------------------------------------- */}
      <section aria-labelledby="trust-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeader
            index="06"
            label="EVIDENCE"
            title="How to evaluate us without taking our word for it."
            lede="We don't publish invented testimonials or logo walls. We publish things you can check."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
            {[
              {
                title: "Inspect this platform",
                body: "This website is our current reference build. Audit its speed, accessibility and markup — it is the standard we ship.",
                href: "/work/jeem-labs-platform",
                cta: "READ THE CASE STUDY",
              },
              {
                title: "Read how we reason",
                body: "Our insights show how we make engineering decisions — trade-offs, failure modes and all, not just outcomes.",
                href: "/insights",
                cta: "READ THE INSIGHTS",
              },
              {
                title: "Test the process",
                body: "Start with a scoped, fixed-price discovery. You keep the deliverable either way — it is the cheapest honest way to evaluate us.",
                href: "/start-project",
                cta: "START SMALL",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="bg-surface transition-colors duration-200 hover:bg-surface-elevated"
              >
                <div className="flex h-full flex-col gap-4 p-6 lg:p-8">
                  <span className="mono-meta text-xs text-muted">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-medium text-primary">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{item.body}</p>
                  <div className="mt-auto pt-2">
                    <ArrowLink href={item.href} className="text-sm">
                      {item.cta}
                    </ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* 09 — PRODUCTS ----------------------------------------------------- */}
      <section aria-labelledby="products-heading" className="shell py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <p className="mono-label text-muted">
              <span className="text-accent">07</span> / PRODUCTS
            </p>
            <h2 className="t-h2 text-primary text-balance">
              We&rsquo;re not only building for clients.
            </h2>
            <p className="t-lede">
              We&rsquo;re working toward products of our own — tools hardened
              in real delivery work before they earn a public launch.
              Announced when they exist, not before.
            </p>
            <div>
              <ArrowLink href="/products">FOLLOW THE DIRECTION</ArrowLink>
            </div>
          </Reveal>
          <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line lg:col-span-7">
            {productTeasers.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 60}
                className="bg-surface transition-colors duration-200 hover:bg-surface-elevated"
              >
                <div className="flex flex-col gap-3 p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-7">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium text-primary">{p.name}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-secondary">
                      {p.description}
                    </p>
                  </div>
                  <Signal state={p.status} className="shrink-0" />
                </div>
              </Reveal>
            ))}
            {/* Reserved slot: the empty seat, made intentional */}
            <Reveal delay={140} className="bg-surface">
              <div className="p-3">
                <div className="flex flex-col gap-1.5 rounded border border-dashed border-line-bold px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
                  <p className="mono-meta text-[11px] text-muted">
                    SLOT / RESERVED · NEXT PRODUCT
                  </p>
                  <p className="text-sm text-secondary">
                    Announced when it exists, not before.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 10 — INSIGHTS ------------------------------------------------------ */}
      <section aria-labelledby="insights-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-20 lg:py-28">
          <SectionHeader
            index="08"
            label="INSIGHTS"
            title="What we've learned, written down."
            lede="Technical and business writing from real delivery work — useful whether or not you ever hire us."
          />
          <Reveal className="mt-12">
            <InsightList limit={3} />
          </Reveal>
          <Reveal className="mt-10">
            <ArrowLink href="/insights">ALL INSIGHTS</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* 11 — FINAL CTA ------------------------------------------------------ */}
      <CTASection />
    </>
  );
}

