import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getService, services } from "@/content/services";
import {
  buildMetadata,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeader } from "@/components/patterns/section-header";
import { ArchitectureDiagram } from "@/components/patterns/architecture-diagram";
import { Faq } from "@/components/patterns/faq";
import { WorkList } from "@/components/patterns/work-list";
import { RelatedStrip } from "@/components/patterns/related-strip";
import { CTASection } from "@/components/patterns/cta-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.id}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.tagline,
          path: `/services/${service.id}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.id}` },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* HERO */}
      <section aria-labelledby="service-heading" className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            SERVICE / <span className="text-accent">{service.index}</span>
          </p>
          <h1 id="service-heading" className="t-h1 text-primary text-balance">
            {service.name}
          </h1>
          <p className="t-lede">{service.proposition}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Keywords">
            {service.keywords.map((k) => (
              <li key={k}>
                <Tag>{k}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <ButtonLink href="/start-project" size="lg" arrow>
              Tell us what you need
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section aria-labelledby="problems-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell py-16 lg:py-24">
          <SectionHeader
            index="01"
            label="PROBLEMS"
            title="Does any of this sound familiar?"
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 50} className="bg-surface">
                <div className="flex h-full flex-col gap-3 p-6 lg:p-8">
                  <h3 className="text-lg font-medium text-primary">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section aria-labelledby="capabilities-heading" className="shell py-16 lg:py-24">
        <SectionHeader
          index="02"
          label="CAPABILITIES"
          title="What's included."
        />
        <div className="mt-10 border-t border-line">
          {service.capabilities.map((c, i) => (
            <Reveal key={c.title}>
              <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-12 sm:gap-8">
                <p className="mono-meta text-xs text-muted sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-medium text-primary sm:col-span-4">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary sm:col-span-7">
                  {c.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH + SYSTEM VISUAL */}
      <section aria-labelledby="approach-heading" className="border-t border-line bg-canvas-secondary">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <SectionHeader
              index="03"
              label="APPROACH"
              title="How we get there."
            />
            <ol className="mt-10 flex flex-col border-t border-line">
              {service.approach.map((a, i) => (
                <li key={a.step} className="border-b border-line py-5">
                  <div className="flex gap-5">
                    <span className="mono-meta pt-1 text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-medium text-primary">{a.step}</h3>
                      <p className="text-sm leading-relaxed text-secondary">
                        {a.detail}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {service.diagram && (
            <Reveal className="lg:col-span-6" delay={120}>
              <div className="lg:sticky lg:top-24">
                <ArchitectureDiagram
                  id={service.diagram}
                  caption={`${service.name.toUpperCase()} — REFERENCE ARCHITECTURE`}
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* TECHNOLOGY — context, not the headline */}
      <section aria-labelledby="technology-heading" className="shell py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <p className="mono-label text-muted">
              <span className="text-accent">04</span> / TECHNOLOGY
            </p>
            <h2 id="technology-heading" className="t-h3 text-primary text-balance">
              The tools serve the problem, never the reverse.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary">
              We choose proven, boring technology that fits your constraints —
              and we&rsquo;ll tell you when the fashionable option is the wrong
              one. Typical stack for this work:
            </p>
          </div>
          <ul className="flex flex-col border-t border-line lg:col-span-7">
            {service.technologies.map((t) => (
              <li
                key={t}
                className="flex items-center gap-4 border-b border-line py-3.5"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                <span className="mono-meta text-sm text-primary">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED WORK */}
      {service.relatedWork.length > 0 && (
        <section aria-labelledby="related-work-heading" className="border-t border-line bg-canvas-secondary">
          <div className="shell py-16 lg:py-24">
            <SectionHeader
              index="05"
              label="RELATED WORK"
              title="See it applied."
            />
            <div className="mt-10">
              <WorkList slugs={service.relatedWork} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="shell py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              index="06"
              label="QUESTIONS"
              title="Asked before you did."
            />
          </div>
          <div className="lg:col-span-8">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      <RelatedStrip
        serviceIds={services
          .filter((s) => s.id !== service.id)
          .slice(0, 2)
          .map((s) => s.id)}
        insightSlugs={service.relatedInsights}
        workSlugs={service.relatedWork}
      />

      <CTASection
        title={`Have a ${service.name.toLowerCase()} problem?`}
        body="Describe it in plain words. We'll tell you honestly whether we're the right team — and what we'd do first."
      />
    </>
  );
}

