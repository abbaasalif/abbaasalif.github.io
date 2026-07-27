const root = document.documentElement;
const themeButton = document.querySelector(".theme");
const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".navlinks");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.dataset.theme = savedTheme;
themeButton.textContent = root.dataset.theme === "dark" ? "Light mode" : "Dark mode";

themeButton.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  themeButton.textContent = root.dataset.theme === "dark" ? "Light mode" : "Dark mode";
});

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", event => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".pub").forEach(publication => {
      const shouldHide = button.dataset.filter !== "All" && publication.dataset.type !== button.dataset.filter;
      publication.hidden = shouldHide;
      publication.style.display = shouldHide ? "none" : "";
    });
  });
});
