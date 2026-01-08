// Diese Datei wurde von Aiman Bitar geschrieben
// Zuletzt bearbeitet 16.11.2025

// Mobile Menü
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  menuBtn.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "flex" ? "none" : "flex";
  });
  const insta = document.getElementById("instaLazy");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        insta.innerHTML =
         `<blockquote class="instagram-media"
             data-instgrm-permalink="https://www.instagram.com/mitgemacht_mg_jever/"
             data-instgrm-version="14"></blockquote>`;

        window.instgrm?.Embeds.process();

        observer.disconnect();
      }
    });
  });
  observer.observe(insta);
});
