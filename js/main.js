/**
 * CLAUDIO CASTILLO ORDENES — SITIO WEB PERSONAL OFICIAL
 * Interacciones estilo Apple: Scroll reveal, microinteracciones y controles flotantes
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initBackToTop();
  initHeaderScrollState();
  initSmoothScrollLinks();
  initCurrentYear();
});

/**
 * 1. Animaciones de revelación progresiva al hacer scroll (Intersection Observer)
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback para navegadores antiguos sin soporte de IntersectionObserver
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target); // Dejar de observar una vez revelado
      }
    });
  }, observerOptions);

  elements.forEach(el => revealObserver.observe(el));
}

/**
 * 2. Control y comportamiento del botón flotante "Volver Arriba"
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  const scrollThreshold = 360;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      backToTopBtn.classList.add('is-visible');
      backToTopBtn.setAttribute('aria-hidden', 'false');
    } else {
      backToTopBtn.classList.remove('is-visible');
      backToTopBtn.setAttribute('aria-hidden', 'true');
    }
  };

  // Optimización de scroll con requestAnimationFrame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Acción al hacer clic
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 3. Actualización dinámica del Header según el desplazamiento
 */
function initHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

/**
 * 4. Desplazamiento suave para enlaces de ancla (ej. CTA de contacto)
 */
function initSmoothScrollLinks() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 5. Año dinámico en el footer
 */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

