// Basic interactivity: mobile menu toggle + demo form handling + set copyright year
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn && menuBtn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (mobileMenu.hasAttribute('hidden')) mobileMenu.removeAttribute('hidden');
    else mobileMenu.setAttribute('hidden', '');
  });

  // Signup form demo behavior
  const form = document.querySelector('.signup-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]').value || 'Farmer';
      const farm = form.querySelector('select[name="farm-type"]').value || '';
      alert(`Thanks, ${name}! We received your request (${farm}). This is a demo submission.`);
      form.reset();
    });
  }

  // set year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

