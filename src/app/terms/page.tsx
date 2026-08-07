import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export const metadata = buildMetadata({
  title: "Terms",
  description: "The terms of using the JEEM LABS website — short and readable.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section aria-labelledby="terms-heading" className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Reveal className="flex max-w-3xl flex-col gap-6">
        <p className="mono-label text-muted">
          <span className="text-accent">LEGAL</span> / TERMS
        </p>
        <h1 id="terms-heading" className="t-h1 text-primary text-balance">
          Terms of use.
        </h1>
        <p className="mono-meta text-xs text-muted">LAST UPDATED / 2026-08-01</p>
      </Reveal>

      <div className="prose-jeem mt-12">
        <p>
          These terms cover using this website. Work we do for clients is
          governed by individual agreements, not by this page.
        </p>

        <h2>The website</h2>
        <p>
          The content here is provided for general information. It describes
          our services and thinking in good faith, but it isn&rsquo;t a
          proposal, a quote or professional advice for your specific
          situation — those start with a conversation.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The JEEM LABS name, the jeem mark and this site&rsquo;s design and
          content belong to {site.legalName}. You&rsquo;re welcome to link to
          anything here and to quote short excerpts with attribution. Please
          don&rsquo;t reproduce the identity or republish articles in full
          without asking.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Don&rsquo;t attack the site, scrape it abusively, or use the forms
          for spam. The forms exist to start conversations between people.
        </p>

        <h2>Liability</h2>
        <p>
          We work hard to keep information accurate and the site available,
          but the site is provided &ldquo;as is&rdquo;. To the extent
          permitted by law, we&rsquo;re not liable for decisions made based on
          general website content.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
