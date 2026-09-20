"use client";

import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const Interactive = lazy(() =>
  import("./service-index-interactive").then((m) => ({
    default: m.ServiceIndexInteractive,
  })),
);

/**
 * Hydrate-on-visibility island. The server-rendered snapshot ships in the
 * initial HTML (crawlable, works without JS); the interactive variant's
 * chunk is only fetched when the section approaches the viewport.
 */
export function ServiceIndexLazy({ fallback }: { fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || ready) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  return (
    <div ref={ref}>
      {ready ? (
        <Suspense fallback={fallback}>
          <Interactive />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
