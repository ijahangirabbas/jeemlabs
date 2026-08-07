import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Signal } from "@/components/ui/signal";
import { ArrowLink } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "General questions, partnerships, universities, collaboration, media and careers — every message reaches a person.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-heading" className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="grid gap-14 lg:grid-cols-12">
        <Reveal className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <p className="mono-label text-muted">
              <span className="text-accent">01</span> / CONTACT
            </p>
            <h1 id="contact-heading" className="t-h1 text-primary text-balance">
              Every message reaches a person.
            </h1>
            <p className="t-lede">
              General questions, partnerships, universities, collaboration,
              media, careers — this is the right door for all of them.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-line bg-surface p-6">
            <h2 className="font-medium text-primary">Have a project in mind?</h2>
            <p className="text-sm leading-relaxed text-secondary">
              Project inquiries get a faster, better-structured response
              through the dedicated form — it asks exactly the questions
              we&rsquo;d ask on a first call.
            </p>
            <div>
              <ArrowLink href="/start-project">START A PROJECT</ArrowLink>
            </div>
          </div>

          <dl className="flex flex-col gap-4 border-t border-line pt-6">
            <div className="flex flex-col gap-1">
              <dt className="mono-meta text-[11px] text-muted">EMAIL</dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="mono-meta text-[11px] text-muted">RESPONSE TIME</dt>
              <dd className="text-sm text-secondary">Within one hour</dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="mono-meta text-[11px] text-muted">STATUS</dt>
              <dd>
                <Signal state={site.availability} pulse />
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
