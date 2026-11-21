const root = document.documentElement;
const theme = document.querySelector(".theme");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".navlinks");
const updateThemeLabel = () => { theme.textContent = root.dataset.theme === "dark" ? "Light mode" : "Dark mode"; };
try {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.dataset.theme = saved;
} catch { /* Theme remains usable when storage is unavailable. */ }
updateThemeLabel();
theme.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch { /* No stored preference. */ }
  updateThemeLabel();
});
function setMenu(open, restoreFocus = false) {
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  if (restoreFocus) menu.focus();
}
menu.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link || !nav.classList.contains("open")) return;
  const section = document.querySelector(link.hash);
  setMenu(false);
  if (section) {
    section.setAttribute("tabindex", "-1");
    section.focus({preventScroll: true});
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav.classList.contains("open")) setMenu(false, true);
});
const mobile = matchMedia("(max-width: 760px)");
mobile.addEventListener("change", () => setMenu(false));
