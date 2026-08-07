import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo";

/**
 * 404 — human first, technical second. The mono "404" is the only
 * machine detail, because it's genuinely useful when reporting.
 */
export default function NotFound() {
  return (
    <section className="shell flex flex-col items-start gap-8 pt-24 pb-28 lg:pt-36">
      <LogoMark size={44} />
      <p className="mono-label text-muted">ERROR / 404</p>
      <h1 className="t-h1 max-w-xl text-primary text-balance">
        This page doesn&rsquo;t exist — or moved.
      </h1>
      <p className="t-lede max-w-lg">
        The link may be outdated, or the address may have a typo. Everything
        that actually exists is one click away.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <ButtonLink href="/" size="lg" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/sitemap" size="lg" variant="secondary">
          View the sitemap
        </ButtonLink>
      </div>
      <p className="text-sm text-muted">
        Think this is our bug?{" "}
        <Link
          href="/contact"
          className="text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          Tell us what you were looking for
        </Link>
        .
      </p>
    </section>
  );
}
