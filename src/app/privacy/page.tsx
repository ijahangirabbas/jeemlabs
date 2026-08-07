import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export const metadata = buildMetadata({
  title: "Privacy",
  description:
    "How JEEM LABS handles your information — short, plain and honest.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section aria-labelledby="privacy-heading" className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
      <Reveal className="flex max-w-3xl flex-col gap-6">
        <p className="mono-label text-muted">
          <span className="text-accent">LEGAL</span> / PRIVACY
        </p>
        <h1 id="privacy-heading" className="t-h1 text-primary text-balance">
          Privacy, in plain language.
        </h1>
        <p className="mono-meta text-xs text-muted">LAST UPDATED / 2026-08-01</p>
      </Reveal>

      <div className="prose-jeem mt-12">
        <p>
          This site is built to collect as little as possible. Here is the
          complete picture — if something is missing, the answer is that we
          don&rsquo;t do it.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>What you type into forms.</strong> When you use Start a
            Project or Contact, we receive the fields you filled in. We use
            them only to reply to you.
          </li>
          <li>
            <strong>Technical logs.</strong> Like virtually every website,
            our hosting keeps short-lived server logs (IP address, browser,
            pages requested) for security and debugging.
          </li>
        </ul>

        <h2>What we don&rsquo;t do</h2>
        <ul>
          <li>No advertising trackers, no third-party analytics beacons.</li>
          <li>No selling, renting or sharing of your information.</li>
          <li>No cookies for tracking. Your theme preference is stored in
            your own browser (localStorage) and never reaches our servers.</li>
          <li>Your data is never used to train AI models.</li>
        </ul>

        <h2>How long we keep things</h2>
        <p>
          Inquiry emails are kept while a conversation is active and for a
          reasonable period afterwards, then deleted. If we end up working
          together, what we keep is governed by our agreement with you.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us at any time what we hold about you, ask us to
          correct it, or ask us to delete it. Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and a person will
          handle it.
        </p>

        <h2>Changes</h2>
        <p>
          If this policy changes materially, the date at the top changes and
          the difference is described here. We won&rsquo;t quietly weaken it.
        </p>
      </div>
    </section>
  );
}
