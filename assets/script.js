(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  const currentPage = document.body.dataset.currentPage;
  if (currentPage && nav) {
    const active = nav.querySelector(`[data-page="${currentPage}"]`);
    if (active) active.classList.add('active');
  }
  const form = document.querySelector('#contactForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const message = form.querySelector('.form-message');
    if (message) message.textContent = 'Thank you — this is a demo form. Connect a form service or backend to receive enquiries.';
    form.reset();
  });
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const expanded = lightbox.querySelector('img');
    const close = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); };
    document.querySelectorAll('.gallery-grid img').forEach(image => image.addEventListener('click', () => {
      expanded.src = image.src; expanded.alt = image.alt;
      lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false');
    }));
    lightbox.addEventListener('click', event => { if (event.target === lightbox || event.target.closest('.lightbox-close')) close(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  }
})();