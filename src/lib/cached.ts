/**
 * The current year, captured at build time (all routes are static).
 * Centralised so the copyright line is computed once per build.
 */
export function copyrightYear(): number {
  return new Date().getFullYear();
}
