
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });

  console.log("Rumah Undangan siap!");
});
