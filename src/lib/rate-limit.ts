/**
 * Minimal fixed-window rate limiter for form endpoints.
 *
 * In-memory by design: correct for a single-instance deployment and
 * dependency-free. The interface is intentionally shaped so it can be
 * swapped for a shared store (e.g. Redis) the day the site runs in
 * more than one process — call sites will not change.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

// Periodically evict expired buckets so the map cannot grow unbounded.
const SWEEP_INTERVAL = 60_000;
let lastSweep = Date.now();

function sweep(now: number) {
  if (now - lastSweep < SWEEP_INTERVAL) return;
  lastSweep = now;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  /** Seconds until the caller may retry. */
  retryAfter: number;
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (bucket.count >= limit) {
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return { ok: true, retryAfter: 0 };
}

/** Best-effort client key from request headers. */
export function clientKey(request: Request, scope: string): string {
  const fwd = request.headers.get("x-forwarded-for");
  const ip = fwd?.split(",")[0]?.trim() ?? "unknown";
  return `${scope}:${ip}`;
}
