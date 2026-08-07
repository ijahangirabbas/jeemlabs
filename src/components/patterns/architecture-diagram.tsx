import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * JEEM architecture diagrams — drawn like real engineering drawings.
 *
 * Typed nodes (interface / system / datastore / signal), arrowed
 * connections with protocol annotations, ports at the source, and
 * animated data flow. Nothing moves that isn't information.
 *
 * Server-rendered SVG; animation is pure CSS and honours
 * prefers-reduced-motion via the global stylesheet.
 */

export type DiagramId =
  | "ai"
  | "web"
  | "mobile"
  | "software"
  | "automation"
  | "cloud";

type NodeKind = "io" | "box" | "db" | "signal";

interface Node {
  x: number;
  y: number;
  w: number;
  label: string;
  sub?: string;
  kind?: NodeKind;
}

interface Edge {
  d: string;
  label?: string;
  lx?: number;
  ly?: number;
  anchor?: "middle" | "start";
}

interface Diagram {
  height: number;
  nodes: Node[];
  edges: Edge[];
}

const H = 44;

function n(
  x: number,
  y: number,
  w: number,
  label: string,
  sub?: string,
  kind: NodeKind = "box",
): Node {
  return { x, y, w, label, sub, kind };
}

const diagrams: Record<DiagramId, Diagram> = {
  ai: {
    height: 452,
    nodes: [
      n(260, 8, 120, "USER", "HUMAN / CLIENT", "io"),
      n(260, 88, 120, "WEB APP", "NEXT.JS / SSR"),
      n(260, 168, 120, "API", "REST / AUTH"),
      n(120, 248, 140, "DATABASE", "POSTGRES + PGVECTOR", "db"),
      n(380, 248, 140, "AI", "LLM / GUARDRAILS"),
      n(120, 328, 140, "CACHE", "SEMANTIC / REDIS"),
      n(380, 328, 140, "RETRIEVAL", "RAG / RERANK"),
      n(250, 400, 140, "RESPONSE", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V168", label: "HTTPS", lx: 331, ly: 153, anchor: "start" },
      { d: "M320 212 V230 H190 V248", label: "SQL", lx: 255, ly: 226 },
      { d: "M320 212 V230 H450 V248", label: "PROMPT", lx: 385, ly: 226 },
      { d: "M190 292 V328" },
      { d: "M450 292 V328", label: "EMBED", lx: 458, ly: 312, anchor: "start" },
      { d: "M190 372 V390 H320 V400" },
      { d: "M450 372 V390 H320 V400", label: "CITED", lx: 385, ly: 386 },
    ],
  },
  web: {
    height: 452,
    nodes: [
      n(260, 8, 120, "BROWSER", "USER AGENT", "io"),
      n(260, 88, 120, "NEXT.JS", "SSR / RSC"),
      n(260, 168, 120, "API LAYER", "EDGE / AUTH"),
      n(110, 248, 130, "POSTGRES", "SYSTEM OF RECORD", "db"),
      n(400, 248, 130, "THIRD-PARTY", "STRIPE / EMAIL"),
      n(110, 328, 130, "READ MODELS", "CACHE / CDN"),
      n(400, 328, 130, "WEBHOOKS", "SIGNED EVENTS"),
      n(250, 400, 140, "RESPONSE", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V168" },
      { d: "M320 212 V230 H175 V248", label: "SQL", lx: 248, ly: 226 },
      { d: "M320 212 V230 H465 V248", label: "REST", lx: 393, ly: 226 },
      { d: "M175 292 V328" },
      { d: "M465 292 V328", label: "EVENTS", lx: 473, ly: 312, anchor: "start" },
      { d: "M175 372 V390 H320 V400" },
      { d: "M465 372 V390 H320 V400" },
    ],
  },
  mobile: {
    height: 452,
    nodes: [
      n(260, 8, 120, "MOBILE APP", "IOS / ANDROID", "io"),
      n(250, 88, 140, "SYNC ENGINE", "OFFLINE QUEUE"),
      n(260, 168, 120, "API", "REST / WS"),
      n(130, 248, 120, "DATABASE", "POSTGRES", "db"),
      n(390, 248, 120, "PUSH", "NOTIFICATIONS"),
      n(130, 328, 120, "BACKUPS", "SNAPSHOTS"),
      n(385, 328, 130, "APNS / FCM", "DELIVERY"),
      n(250, 400, 140, "DELIVERED", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V168", label: "SYNC", lx: 331, ly: 153, anchor: "start" },
      { d: "M320 212 V230 H190 V248", label: "SQL", lx: 255, ly: 226 },
      { d: "M320 212 V230 H450 V248", label: "PUSH", lx: 388, ly: 226 },
      { d: "M190 292 V328" },
      { d: "M450 292 V328" },
      { d: "M190 372 V390 H320 V400" },
      { d: "M450 372 V390 H320 V400" },
    ],
  },
  software: {
    height: 452,
    nodes: [
      n(260, 8, 120, "STAFF", "INTERNAL USERS", "io"),
      n(260, 88, 120, "WEB APP", "ROLE-BASED UI"),
      n(240, 168, 160, "DOMAIN SERVICES", "BUSINESS RULES"),
      n(130, 248, 120, "POSTGRES", "AUDITED", "db"),
      n(390, 248, 120, "QUEUE", "DURABLE JOBS"),
      n(130, 328, 120, "AUDIT LOG", "IMMUTABLE"),
      n(390, 328, 120, "WORKERS", "BACKGROUND"),
      n(250, 400, 140, "OUTCOME", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V168" },
      { d: "M320 212 V230 H190 V248", label: "WRITE", lx: 252, ly: 226 },
      { d: "M320 212 V230 H450 V248", label: "ENQUEUE", lx: 383, ly: 226 },
      { d: "M190 292 V328" },
      { d: "M450 292 V328", label: "CONSUME", lx: 458, ly: 312, anchor: "start" },
      { d: "M190 372 V390 H320 V400" },
      { d: "M450 372 V390 H320 V400" },
    ],
  },
  automation: {
    height: 452,
    nodes: [
      n(260, 8, 120, "TRIGGER", "WEBHOOK / CRON", "io"),
      n(250, 88, 140, "WORKFLOW", "ORCHESTRATION"),
      n(130, 168, 120, "CRM", "SOURCE A"),
      n(390, 168, 120, "ERP", "SOURCE B"),
      n(130, 248, 120, "VALIDATED", "SCHEMA CHECK"),
      n(385, 248, 130, "CONFIRMED", "IDEMPOTENT"),
      n(250, 328, 140, "DEAD-LETTER", "HUMAN REVIEW"),
      n(250, 400, 140, "SYNCED", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V150 H190 V168", label: "READ", lx: 252, ly: 146 },
      { d: "M320 132 V150 H450 V168", label: "READ", lx: 388, ly: 146 },
      { d: "M190 212 V248" },
      { d: "M450 212 V248" },
      { d: "M190 292 V310 H320 V328" },
      { d: "M450 292 V310 H320 V328" },
      { d: "M320 372 V400", label: "ALERT", lx: 331, ly: 388, anchor: "start" },
    ],
  },
  cloud: {
    height: 452,
    nodes: [
      n(260, 8, 120, "GIT PUSH", "MAIN BRANCH", "io"),
      n(250, 88, 140, "CI PIPELINE", "TEST / BUILD"),
      n(130, 168, 120, "STAGING", "PREVIEW ENV"),
      n(385, 168, 130, "PRODUCTION", "CANARY"),
      n(130, 248, 120, "VERIFIED", "SMOKE TESTS"),
      n(385, 248, 130, "AUTOSCALE", "RIGHT-SIZED"),
      n(250, 328, 140, "MONITORING", "METRICS / TRACES"),
      n(240, 400, 160, "OPERATIONAL", undefined, "signal"),
    ],
    edges: [
      { d: "M320 52 V88" },
      { d: "M320 132 V150 H190 V168", label: "DEPLOY", lx: 246, ly: 146 },
      { d: "M320 132 V150 H450 V168", label: "DEPLOY", lx: 382, ly: 146 },
      { d: "M190 212 V248" },
      { d: "M450 212 V248" },
      { d: "M190 292 V310 H320 V328" },
      { d: "M450 292 V310 H320 V328" },
      { d: "M320 372 V400", label: "SLO", lx: 331, ly: 388, anchor: "start" },
    ],
  },
};


function NodeShape({ node }: { node: Node }) {
  const { x, y, w, label, sub, kind = "box" } = node;

  if (kind === "db") {
    const ry = 7;
    const body = `M${x} ${y + ry} V${y + H - ry} A${w / 2} ${ry} 0 0 0 ${x + w} ${
      y + H - ry
    } V${y + ry}`;
    return (
      <g>
        <path d={`${body} Z`} fill="var(--surface-elevated)" stroke="var(--border-primary)" strokeWidth="1" />
        <ellipse
          cx={x + w / 2}
          cy={y + ry}
          rx={w / 2}
          ry={ry}
          fill="var(--surface-elevated)"
          stroke="var(--border-primary)"
          strokeWidth="1"
        />
        <text x={x + w / 2} y={y + 24} textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontFamily="var(--font-mono)" letterSpacing="1.2">
          {label}
        </text>
        {sub && (
          <text x={x + w / 2} y={y + 36} textAnchor="middle" fill="var(--text-muted)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="1">
            {sub}
          </text>
        )}
      </g>
    );
  }

  if (kind === "signal") {
    return (
      <g>
        <rect x={x} y={y} width={w} height={H} rx="4" fill="var(--surface-elevated)" stroke="var(--signal)" strokeWidth="1" />
        <circle cx={x + 16} cy={y + H / 2} r="4" fill="var(--signal)" className="signal-pulse" />
        <text x={x + 30} y={y + H / 2} dominantBaseline="central" fill="var(--text-primary)" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="1.5">
          {label}
        </text>
      </g>
    );
  }

  return (
    <g>
      <rect x={x} y={y} width={w} height={H} rx="4" fill="var(--surface-elevated)" stroke={kind === "io" ? "var(--border-strong)" : "var(--border-primary)"} strokeWidth="1" />
      {kind === "io" && (
        <rect x={x + 3.5} y={y + 3.5} width={w - 7} height={H - 7} rx="2.5" fill="none" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="2 3" />
      )}
      <text x={x + w / 2} y={sub ? y + 18 : y + H / 2} dominantBaseline={sub ? "auto" : "central"} textAnchor="middle" fill="var(--text-primary)" fontSize="10.5" fontFamily="var(--font-mono)" letterSpacing="1.2">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 32} textAnchor="middle" fill="var(--text-muted)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="1">
          {sub}
        </text>
      )}
    </g>
  );
}

export function ArchitectureDiagram({
  id,
  caption,
  className,
}: {
  id: DiagramId;
  caption?: string;
  className?: string;
}) {
  const d = diagrams[id];
  const markerId = `arrow-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-surface",
        className,
      )}
    >
      <div className="grid-field border-b border-line px-4 py-8 sm:px-8">
        <svg
          viewBox={`0 0 640 ${d.height}`}
          role="img"
          aria-label={`Architecture diagram: ${caption ?? id}`}
          className="mx-auto w-full max-w-[540px]"
        >
          <defs>
            <marker
              id={markerId}
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0.5 0.5 L7.5 4 L0.5 7.5" fill="none" stroke="var(--border-strong)" strokeWidth="1.2" />
            </marker>
          </defs>

          {/* Connections: base line with arrowhead + animated flow + ports */}
          {d.edges.map((e, i) => {
            const start = /^M(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)/.exec(e.d);
            return (
              <g key={e.d}>
                <path d={e.d} fill="none" stroke="var(--border-strong)" strokeWidth="1" markerEnd={`url(#${markerId})`} />
                <path
                  d={e.d}
                  fill="none"
                  stroke="var(--accent-primary)"
                  strokeWidth="1.25"
                  strokeDasharray="4 8"
                  strokeLinecap="round"
                  className="flow-line"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
                {start && (
                  <circle cx={Number(start[1])} cy={Number(start[2])} r="1.8" fill="var(--accent-primary)" />
                )}
                {e.label && (
                  <text
                    x={e.lx}
                    y={e.ly}
                    textAnchor={e.anchor ?? "middle"}
                    fill="var(--text-muted)"
                    fontSize="7.5"
                    fontFamily="var(--font-mono)"
                    letterSpacing="1"
                    stroke="var(--surface)"
                    strokeWidth="3"
                    paintOrder="stroke"
                  >
                    {e.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {d.nodes.map((node, i) => (
            <g key={node.label} className="node-settle" style={{ animationDelay: `${i * 60}ms` }}>
              <NodeShape node={node} />
            </g>
          ))}
        </svg>
      </div>

      {caption && (
        <figcaption className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3.5">
          <span className="mono-label text-muted">{caption}</span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              <span className="mono-meta text-[10px] text-muted">SIGNAL</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg aria-hidden="true" width="18" height="2" viewBox="0 0 18 2">
                <line x1="0" y1="1" x2="18" y2="1" stroke="var(--accent-primary)" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
              <span className="mono-meta text-[10px] text-muted">DATA FLOW</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2 rounded-[2px] border border-line-bold" />
              <span className="mono-meta text-[10px] text-muted">NODE</span>
            </span>
            <span aria-hidden="true" className="mono-meta hidden text-[10px] text-muted sm:inline">
              FIG / {id.toUpperCase()}
            </span>
          </span>
        </figcaption>
      )}
    </figure>
  );
}

