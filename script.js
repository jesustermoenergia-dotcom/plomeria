const WHATSAPP_NUMBER = "00000000000";
const DEFAULT_MESSAGE = "Hola, vi su página web y quisiera información sobre un trabajo de plomería.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const message = encodeURIComponent(DEFAULT_MESSAGE);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
