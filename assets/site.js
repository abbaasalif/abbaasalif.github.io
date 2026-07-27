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
  document.body.classList.toggle("menu-open", open);
});

navLinks.addEventListener("click", event => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    menuButton.focus();
  }
});

const showWorkButton = document.querySelector(".show-work");
const projectList = document.querySelector(".project-list");
const flagshipGrid = document.querySelector(".flagship-grid");
const flagshipProjects = [
  { title: "Enterprise LLM Intent Classification", type: "metric", metric: "+12", unit: "pp", caption: "Long-tail intent accuracy" },
  { title: "Revelio", type: "image", src: "/assets/research/revelio.png", alt: "Revelio screen-camera communication pipeline", caption: "Real-world neural screen-camera pipeline" },
  { title: "Video-Language Model Stress Testing", type: "image", src: "/assets/research/reveal.png", alt: "REVEAL video-language model stress-test diagram", caption: "Temporal and visual grounding stress tests" }
];

flagshipProjects.forEach(item => {
  const card = [...projectList.querySelectorAll(".project")].find(project => project.querySelector("h3").textContent === item.title);
  if (!card) return;
  card.classList.add("flagship");
  const visual = document.createElement(item.type === "image" ? "figure" : "div");
  visual.className = `project-visual ${item.type === "metric" ? "metric-visual" : ""}`;
  if (item.type === "image") {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    visual.append(image, caption);
  } else {
    visual.setAttribute("aria-label", `${item.metric} percentage point improvement`);
    const metric = document.createElement("strong");
    metric.textContent = item.metric;
    const unit = document.createElement("small");
    unit.textContent = item.unit;
    metric.append(unit);
    const caption = document.createElement("span");
    caption.textContent = item.caption;
    visual.append(metric, caption);
  }
  card.querySelector(".project-body").before(visual);
  flagshipGrid.append(card);
});

showWorkButton.addEventListener("click", () => {
  const expanded = projectList.classList.toggle("is-collapsed") === false;
  showWorkButton.setAttribute("aria-expanded", String(expanded));
  showWorkButton.firstChild.textContent = expanded ? "Show fewer projects " : "Show 3 more projects ";
});

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    let visibleCount = 0;
    document.querySelectorAll(".pub").forEach(publication => {
      const shouldHide = button.dataset.filter !== "All" && publication.dataset.type !== button.dataset.filter;
      publication.hidden = shouldHide;
      publication.style.display = shouldHide ? "none" : "";
      if (!shouldHide) visibleCount += 1;
    });
    const label = button.dataset.filter === "All" ? "all" : button.dataset.filter.toLowerCase();
    document.querySelector(".filter-status").textContent = `Showing ${visibleCount} ${label} publication${visibleCount === 1 ? "" : "s"}`;
  });
});

const navAnchors = [...document.querySelectorAll('.navlinks a[href^="#"]')];
const observedSections = navAnchors.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach(link => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-35% 0px -60% 0px" });
observedSections.forEach(section => sectionObserver.observe(section));

document.querySelector(".copy-email").addEventListener("click", async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    button.textContent = "Email copied";
  } catch {
    button.textContent = button.dataset.email;
  }
  window.setTimeout(() => { button.textContent = "Copy email"; }, 2200);
});
