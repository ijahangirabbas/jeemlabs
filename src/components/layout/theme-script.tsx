/**
 * Runs before first paint. Sets the resolved theme on <html> so there is
 * no flash of the wrong mode, and marks the document as JS-enabled so
 * reveal animations only apply when they can be completed.
 *
 * Order: explicit user choice (localStorage) → system preference → light.
 */
const script = `(function(){try{var d=document.documentElement;d.classList.remove("no-js");var t=localStorage.getItem("jeem-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}d.setAttribute("data-theme",t);}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
