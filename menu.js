const menu = document.querySelector(".vertical-menu");
const toggle = menu?.querySelector(".vertical-menu__toggle");
const panel = menu?.querySelector(".vertical-menu__panel");

if (menu && toggle && panel) {
  const setOpen = (open) => {
    menu.classList.toggle("vertical-menu--open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  panel.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("vertical-menu--open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}
