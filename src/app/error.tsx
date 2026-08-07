"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

/**
 * Unexpected runtime error — human first, technical second.
 * The reset action retries the render; the copy stays calm.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[jeem] unhandled error", error);
  }, [error]);

  return (
    <section className="shell flex flex-col items-start gap-8 pt-24 pb-28 lg:pt-36">
      <p className="mono-label text-muted">ERROR / 500</p>
      <h1 className="t-h1 max-w-xl text-primary text-balance">
        Something didn&rsquo;t go as planned.
      </h1>
      <p className="t-lede max-w-lg">
        That&rsquo;s on us, not you. Trying again usually fixes it — and if
        it keeps happening, we&rsquo;d genuinely like to know.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" arrow onClick={reset}>
          Try again
        </Button>
      </div>
      {error.digest && (
        <p className="mono-meta text-xs text-muted">
          REF / {error.digest}
        </p>
      )}
    </section>
  );
}
