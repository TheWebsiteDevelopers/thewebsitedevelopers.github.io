document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (!menuBtn || !mobileNav) return;

  // create overlay
  let overlay = document.getElementById('mobileOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'mobileOverlay';
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);
  }

  // initialize aria
  menuBtn.setAttribute('role', 'button');
  menuBtn.setAttribute('aria-controls', 'mobileNav');
  menuBtn.setAttribute('aria-expanded', 'false');

  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('visible');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    mobileNav.classList.remove('open');
    overlay.classList.remove('visible');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) closeNav(); else openNav();
  });

  // Close when clicking a link inside the mobile nav
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeNav();
    });
  });

  // Close when clicking overlay
  overlay.addEventListener('click', function () { closeNav(); });

  // Close when clicking outside (on desktop the nav is hidden anyway)
  document.addEventListener('click', function (e) {
    if (!mobileNav.contains(e.target) && e.target !== menuBtn && !overlay.contains(e.target)) {
      closeNav();
    }
  });

  // Reset when resizing to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) {
      mobileNav.classList.remove('open');
      overlay.classList.remove('visible');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});