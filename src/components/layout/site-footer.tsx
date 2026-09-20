import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { copyrightYear } from "@/lib/cached";
import { LogoMark } from "@/components/ui/logo";
import { Signal } from "@/components/ui/signal";


export function SiteFooter() {
  const year = copyrightYear();

  return (
    <footer className="border-t border-line bg-canvas-secondary">
      <div className="shell py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark size={34} />
              <span className="text-[15px] font-semibold">JEEM LABS</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-secondary">
              {site.tagline}
            </p>
            <Signal state={site.availability} pulse />
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-primary"
              >
                {site.email}
              </a>
            </div>
            {/* Social — left, under the mail, quiet bordered squares */}
            <div className="flex items-center gap-2.5">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JEEM LABS on GitHub"
                className="inline-flex size-9 items-center justify-center rounded border border-line-strong text-secondary transition-colors hover:border-line-bold hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JEEM LABS on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded border border-line-strong text-secondary transition-colors hover:border-line-bold hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 24H1.771C.792 24 0 23.208 0 22.229V1.771C0 .792.792 0 1.771 0h20.451C23.208 0 24 .792 24 1.771v20.451C24 23.208 23.208 24 22.225 24z" />
                </svg>
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JEEM LABS on X"
                className="inline-flex size-9 items-center justify-center rounded border border-line-strong text-secondary transition-colors hover:border-line-bold hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
            {/* <p className="mono-meta border-t border-line pt-4 text-[11px] text-muted">
              {site.tagline.toUpperCase()}
            </p> */}
          </div>

          {/* Expanded navigation */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
          >
            {footerNav.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3">
                <h2 className="mono-label text-muted">{group.heading}</h2>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => {
                    const external = item.href.startsWith("http");
                    return (
                      <li key={item.href + item.label}>
                        {external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline hover:decoration-accent"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-sm text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline hover:decoration-accent"
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Narrow legal line — small, quiet, one row */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <p className="mono-meta text-[11px] text-muted">
            © {year} {site.legalName}. ALL RIGHTS RESERVED.
          </p>
          <p className="mono-meta text-[11px] text-muted">
            {site.domain.toUpperCase()} · GLOBAL / REMOTE
          </p>
        </div>
      </div>

      {/* Back-to-top sits ON the wordmark rule; wordmark centered, no dot */}
      <div className="relative border-t border-line">
        <a
          href="#main"
          aria-label="Back to top"
          className="absolute left-1/2 top-0 inline-flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-canvas text-secondary transition-colors duration-200 hover:border-line-bold hover:text-primary"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
            <path
              d="M8 14V2M3.5 6.5 8 2l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </a>
        <p
          aria-hidden="true"
          className="wordmark shell flex items-baseline justify-center whitespace-nowrap pt-10 pb-2 text-center"
        >
          JEEM&nbsp;LABS
        </p>
      </div>
    </footer>
  );
}
