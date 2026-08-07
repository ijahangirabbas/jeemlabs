import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "JEEM LABS — Engineering-led technology company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social card. The official mark is embedded from the brand
 * asset itself — never redrawn — beside a typographic statement and the
 * Signal. Graphite field, cobalt rule, one green nuqta.
 */
export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/brand/jeem-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e1013",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Official logo asset, used exactly as supplied */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={104}
            height={104}
            style={{ borderRadius: 8 }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              color: "#f7f7f5",
            }}
          >
            <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -0.5 }}>
              JEEM LABS
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 20,
                color: "#a3a9b1",
                letterSpacing: 3,
              }}
            >
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: "#35d96f",
                }}
              />
              ENGINEERING-LED TECHNOLOGY COMPANY
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ width: 120, height: 2, backgroundColor: "#2f5fe0" }} />
          <span
            style={{
              fontSize: 64,
              fontWeight: 500,
              color: "#f7f7f5",
              letterSpacing: -1.5,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Engineering what matters. Building what&rsquo;s next.
          </span>
          <span style={{ fontSize: 24, color: "#6f767f", letterSpacing: 2 }}>
            THEJEEMLABS.COM
          </span>
        </div>
      </div>
    ),
    size,
  );
}
