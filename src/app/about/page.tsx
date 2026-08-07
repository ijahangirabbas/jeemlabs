import { buildMetadata } from "@/lib/seo";
import { personality, principles } from "@/content/company";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Signal } from "@/components/ui/signal";
import { ProcessSteps } from "@/components/patterns/process-steps";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Why JEEM LABS exists, how it thinks and how it works — an engineering-led technology company built for the long term.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* WHY JEEM EXISTS */}
      <section aria-labelledby="about-heading" className="shell pt-16 pb-16 lg:pt-24 lg:pb-24">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / ABOUT
          </p>
          <h1 id="about-heading" className="t-h1 text-primary text-balance">
            Technical, but human.
          </h1>
          <p className="t-lede">
            {site.name} exists because two things are needlessly rare in the
            same company: engineering that holds up under real load, and
            communication a non-technical founder can act on. We built the
            company we kept wishing to hire.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
          {[
            {
              k: "Think like an engineer.",
              v: "Requirements written down. Decisions with reasons. Systems that fail loudly in testing so they don't fail quietly in production.",
            },
            {
              k: "Design like a craftsman.",
              v: "Intentional, careful, quality-focused. The detail nobody asked about is usually the one that makes software feel considered.",
            },
            {
              k: "Communicate like a consultant.",
              v: "Plain language, honest trade-offs, no theatre. You should always know what we're doing, why, and what it costs.",
            },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 60} className="bg-surface">
              <div className="flex h-full flex-col gap-3 p-7 lg:p-8">
                <h2 className="text-lg font-medium text-primary">{item.k}</h2>
                <p className="text-sm leading-relaxed text-secondary">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW JEEM THINKS — personality as composition */}
      <section aria-labelledby="think-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <p className="mono-label text-muted">
              <span className="text-accent">02</span> / CHARACTER
            </p>
            <h2 id="think-heading" className="t-h2 text-primary text-balance">
              How JEEM thinks.
            </h2>
            <p className="text-sm leading-relaxed text-secondary">
              Every company is a composition. This one is deliberate — and
              the proportions show up in the work.
            </p>
          </div>
          <ul className="flex flex-col border-t border-line lg:col-span-8">
            {personality.map((p) => (
              <li key={p.trait} className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-6">
                <span className="mono-meta text-xs text-accent sm:col-span-2">
                  {p.share}
                </span>
                <h3 className="font-medium text-primary sm:col-span-3">
                  {p.trait}
                </h3>
                <p className="text-sm leading-relaxed text-secondary sm:col-span-7">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section aria-labelledby="principles-heading" className="shell py-16 lg:py-24">
        <div className="flex max-w-3xl flex-col gap-5">
          <p className="mono-label text-muted">
            <span className="text-accent">03</span> / PRINCIPLES
          </p>
          <h2 id="principles-heading" className="t-h2 text-primary text-balance">
            The rules we work by.
          </h2>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <li key={p.index} className="bg-surface">
              <Reveal delay={i * 50} className="flex h-full flex-col gap-3 p-6 lg:p-7">
                <span className="mono-meta text-xs text-muted">{p.index}</span>
                <h3 className="text-base font-medium text-primary">{p.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* HOW WE WORK */}
      <section aria-labelledby="work-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="mono-label text-muted">
              <span className="text-accent">04</span> / METHOD
            </p>
            <h2 id="work-heading" className="t-h2 text-primary text-balance">
              How JEEM works.
            </h2>
            <p className="t-lede">
              One front door for every project size. The depth adapts to the
              complexity; the commitment doesn&rsquo;t.
            </p>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* TEAM — honest, no fabricated faces */}
      <section aria-labelledby="team-heading" className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <p className="mono-label text-muted">
              <span className="text-accent">05</span> / TEAM
            </p>
            <h2 id="team-heading" className="t-h2 text-primary text-balance">
              Small by design, senior by choice.
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            <p className="leading-relaxed text-secondary">
              JEEM LABS is a compact engineering team. We stay deliberately
              small: every person who touches your project is someone whose
              work we&rsquo;d put our name on, and the person you brief is the
              person accountable for the result.
            </p>
            <p className="leading-relaxed text-secondary">
              You won&rsquo;t find staged office photography here. When we
              have authentic images of real people doing real work,
              they&rsquo;ll earn their place on this page.
            </p>
            <div className="flex items-center gap-3 border-t border-line pt-5">
              <Signal state={site.availability} pulse />
              <p className="text-sm text-secondary">
                Currently accepting new engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE DIRECTION */}
      <section aria-labelledby="future-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-5">
              <p className="mono-label text-muted">
                <span className="text-accent">06</span> / DIRECTION
              </p>
              <h2 id="future-heading" className="t-h2 text-primary text-balance">
                Where this is going.
              </h2>
            </div>
            <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
              <p className="leading-relaxed text-secondary">
                The path is deliberate: <strong className="text-primary">services → stability → hybrid → products.</strong>{" "}
                Client work funds the company and sharpens the craft; the
                patterns we keep rebuilding across clients become the products
                we build for ourselves.
              </p>
              <p className="leading-relaxed text-secondary">
                This platform was architected for that evolution — the URL
                space, the content system and the component library already
                reserve room for product pages, research notes and
                experiments. Growth here won&rsquo;t require a redesign, by
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

