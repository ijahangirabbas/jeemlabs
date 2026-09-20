import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
<<<<<<< HEAD
import localFont from "next/font/local";
=======
import { GeistMono } from "geist/font/mono";
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
import "./globals.css";
import { site } from "@/content/site";
import { organizationSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { ThemeScript } from "@/components/layout/theme-script";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

<<<<<<< HEAD
/*
 * Self-hosted variable fonts.
 * Sans (geist package) carries the LCP text → preloaded by Next.
 * Mono is 11–13px metadata only → NOT preloaded; it swaps in after the
 * first paint so it never competes with the hero font or the HTML.
 */
const geistMono = localFont({
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

=======
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Engineering-led technology company`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={`no-js ${GeistSans.variable} ${geistMono.variable}`}
=======
      className={`no-js ${GeistSans.variable} ${GeistMono.variable}`}
>>>>>>> d58af21b6b29b239a7ff57e76378242c1a1dcd19
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-50 rounded border border-line-strong bg-surface-elevated px-4 py-2 text-sm font-medium text-primary"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
