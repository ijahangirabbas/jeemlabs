/**
 * Renders a JSON-LD structured-data script tag.
 * Input is always built server-side from our own typed content —
 * never from user input — so serialisation here is safe.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
