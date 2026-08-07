import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/content/services";
import { caseStudies } from "@/content/work";
import { insights } from "@/content/insights";
import { formatDate } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Sitemap",
  description: "Every page on thejeemlabs.com, in one place.",
  path: "/sitemap",
  index: false,
});

interface SitemapLink {
  href: string;
  label: string;
  meta?: string;
}

const groups: { heading: string; links: SitemapLink[] }[] = [
  {
    heading: "Core",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/products", label: "Products" },
      { href: "/insights", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/start-project", label: "Start a Project" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    heading: "Services",
    links: services.map((s) => ({
      href: `/services/${s.id}`,
      label: s.name,
    })),
  },
  {
    heading: "Work",
    links: caseStudies.map((c) => ({
      href: `/work/${c.slug}`,
      label: c.title,
    })),
  },
  {
    heading: "Insights",
    links: insights.map((i) => ({
      href: `/insights/${i.slug}`,
      label: i.title,
      meta: formatDate(i.date),
    })),
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <section aria-labelledby="sitemap-heading" className="shell pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="flex max-w-3xl flex-col gap-6">
        <p className="mono-label text-muted">
          <span className="text-accent">INDEX</span> / SITEMAP
        </p>
        <h1 id="sitemap-heading" className="t-h1 text-primary">
          Everything, in one place.
        </h1>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <nav key={group.heading} aria-label={`Sitemap: ${group.heading}`}>
            <h2 className="mono-label text-muted">{group.heading}</h2>
            <ul className="mt-4 flex flex-col border-t border-line">
              {group.links.map((link) => (
                <li key={link.href} className="border-b border-line">
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center justify-between gap-4 py-2.5 text-sm text-secondary transition-colors hover:text-primary"
                  >
                    <span>{link.label}</span>
                    {link.meta && (
                      <span className="mono-meta text-[11px] text-muted">
                        {link.meta}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </section>
  );
}
