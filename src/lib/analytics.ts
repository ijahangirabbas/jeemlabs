/**
 * Analytics — architected, not yet instrumented.
 *
 * `track` is the single call site for meaningful events. Today it emits a
 * CustomEvent on window (useful for tests) and stays silent in production,
 * because no third-party collector is configured. When JEEM adopts a
 * privacy-respecting provider, it plugs in here — components never change.
 *
 * Only meaningful events exist. No page-level surveillance.
 */
export type AnalyticsEvent =
  | "project_cta_click"
  | "project_form_start"
  | "project_form_submit"
  | "project_form_success"
  | "project_form_error"
  | "book_call_click"
  | "contact_form_success"
  | "external_nav";

export function track(
  event: AnalyticsEvent,
  detail?: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("jeem:analytics", { detail: { event, ...detail } }));
}
