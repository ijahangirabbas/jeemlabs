import { buildMetadata } from "@/lib/seo";
import { productTeasers } from "@/content/products";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Signal } from "@/components/ui/signal";
import { ButtonLink } from "@/components/ui/button";
import { CTASection } from "@/components/patterns/cta-section";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "JEEM LABS is an engineering services company today, working toward products of its own. Announced when they exist — not before.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section aria-labelledby="products-heading" className="shell pt-16 pb-14 lg:pt-24 lg:pb-20">
        <Reveal className="flex max-w-3xl flex-col gap-6">
          <p className="mono-label text-muted">
            <span className="text-accent">01</span> / PRODUCTS
          </p>
          <h1 id="products-heading" className="t-h1 text-primary text-balance">
            We&rsquo;re not only building for clients.
          </h1>
          <p className="t-lede">
            Services are our business today — deliberately. But every
            engagement teaches us what’s missing from the world, and some of
            those gaps become tools we build for ourselves first. When one
            proves itself in real use, it will launch here as a product.
          </p>
        </Reveal>
      </section>

      <section aria-label="Product direction" className="shell pb-20 lg:pb-28">
        <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
          {productTeasers.map((p, i) => (
            <Reveal key={p.id} delay={i * 60} className="bg-surface">
              <div className="grid gap-4 p-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-8">
                <div className="lg:col-span-2">
                  <span className="mono-meta text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-2 lg:col-span-7">
                  <h2 className="text-lg font-medium text-primary">{p.name}</h2>
                  <p className="max-w-xl text-sm leading-relaxed text-secondary">
                    {p.description}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:justify-self-end">
                  <Signal state={p.status} />
                </div>
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

        <Reveal className="mt-10 max-w-2xl">
          <p className="mono-meta border-l-2 border-accent py-1 pl-4 text-xs leading-relaxed text-muted">
            NO ANNOUNCEMENTS BEFORE EXISTENCE. WHEN A PRODUCT SHIPS, THIS PAGE
            GAINS A REAL NAME, A REAL INTERFACE AND A REAL WAY TO TRY IT.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-8 rounded-lg border border-line bg-surface p-8 lg:grid-cols-12 lg:items-center lg:p-10">
          <div className="flex flex-col gap-3 lg:col-span-8">
            <h2 className="t-h3 text-primary text-balance">
              Meanwhile, the services business is very much open.
            </h2>
            <p className="max-w-xl text-secondary">
              The same engineers who will build our products build client
              platforms today. {site.name} is {site.availability.toLowerCase()} for
              new engagements.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href="/start-project" size="lg" arrow>
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
