import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { Signal } from "@/components/ui/signal";
import { InquiryForm } from "@/components/forms/inquiry-form";

export const metadata = buildMetadata({
  title: "Start a Project",
  description:
    "Tell us what you're trying to build. Describe the problem in plain words — a real engineer replies within one hour.",
  path: "/start-project",
});

export default function StartProjectPage() {
  return (
    <section aria-labelledby="start-heading" className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="grid gap-14 lg:grid-cols-12">
        {/* Left rail — sets expectations honestly */}
        <Reveal className="flex flex-col gap-8 lg:col-span-5">
          <div className="flex flex-col gap-6">
            <Signal state={site.availability} pulse />
            <h1 id="start-heading" className="t-h1 text-primary text-balance">
              Tell us what you&rsquo;re trying to build.
            </h1>
            <p className="t-lede">
              Plain words are perfect. &ldquo;We need customers to be able
              to…&rdquo; is a better brief than any technical specification at
              this stage.
            </p>
          </div>

          <ol className="flex flex-col border-t border-line">
            {[
              {
                step: "01",
                title: "You describe the problem",
                body: "Two minutes of honest description beats a forty-page brief.",
              },
              {
                step: "02",
                title: "We reply within one hour",
                body: "From an engineer, not a sales process. With questions, an honest read, and a suggested next step.",
              },
              {
                step: "03",
                title: "You decide with full information",
                body: "Scope, approach, timeline and cost — in writing, before you commit to anything.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-5 border-b border-line py-5">
                <span className="mono-meta pt-0.5 text-xs text-accent">{item.step}</span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium text-primary">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-secondary">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-6">
            <h2 className="font-medium text-primary">Prefer talking?</h2>
            <p className="text-sm leading-relaxed text-secondary">
              {site.bookingUrl ? (
                <>
                  Book a 25-minute call directly:{" "}
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    Choose a time →
                  </a>
                </>
              ) : (
                <>
                  Email us at{" "}
                  <a
                    href={`mailto:${site.email}?subject=Call%20request`}
                    className="font-medium text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    {site.email}
                  </a>{" "}
                  with two or three times that suit you, and we&rsquo;ll send
                  an invitation.
                </>
              )}
            </p>
            <p className="mono-meta border-t border-line pt-3 text-[11px] text-muted">
              SMALL PROJECTS WELCOME. NO MINIMUM SIZE, NO SALES PIPELINE.
            </p>
          </div>
        </Reveal>

        {/* The form itself */}
        <Reveal delay={100} className="lg:col-span-7">
          <div className="rounded-lg border border-line bg-surface p-6 sm:p-8 lg:p-10">
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
