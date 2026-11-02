/**
 * CLAUDIO CASTILLO ORDENES — SCRIPT PRINCIPAL (VERSIÓN 2)
 * Interacciones, navegación responsiva, lite-embed de YouTube y gestión de trayectoria.
 */

document.addEventListener('DOMContentLoaded', () => {
  applyGlobalConfig();
  initMobileMenu();
  initScrollReveal();
  initBackToTop();
  initHeaderScrollState();
  initSmoothScrollLinks();
  initYouTubeLiteEmbed();
  initTrayectoriaMobile();
  initDemosComponent();
  initCurrentYear();
});

/**
 * 1. Aplica la configuración global a todos los enlaces del sitio
 */
function applyGlobalConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Enlaces de LinkedIn
  document.querySelectorAll('[data-linkedin-link]').forEach(el => {
    el.href = SITE_CONFIG.linkedinUrl;
  });

  // Enlaces de WhatsApp
  document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
    el.href = SITE_CONFIG.whatsappUrl;
  });

  // Enlaces de IAProing
  document.querySelectorAll('[data-iaproing-link]').forEach(el => {
    el.href = SITE_CONFIG.iaproingUrl;
  });
}

/**
 * 2. Menú de navegación móvil (hamburguesa compacto con área táctil >= 44x44px)
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

/**
 * 3. Animaciones de revelación progresiva al hacer scroll
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  // Respeto a prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}

/**
 * 4. Botón flotante "Volver Arriba"
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  const scrollThreshold = 360;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > scrollThreshold) {
          backToTopBtn.classList.add('is-visible');
          backToTopBtn.setAttribute('aria-hidden', 'false');
        } else {
          backToTopBtn.classList.remove('is-visible');
          backToTopBtn.setAttribute('aria-hidden', 'true');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: isReduced ? 'auto' : 'smooth'
    });
  });
}

/**
 * 5. Estado dinámico del Header al hacer scroll
 */
function initHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

/**
 * 6. Desplazamiento suave para los enlaces de ancla del menú
 */
function initSmoothScrollLinks() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: isReduced ? 'auto' : 'smooth'
        });
      }
    });
  });
}

/**
 * 7. YouTube Lite Embed (modo liviano con youtube-nocookie.com)
 */
function initYouTubeLiteEmbed() {
  const embedContainers = document.querySelectorAll('.youtube-lite-embed');

  embedContainers.forEach(container => {
    const videoId = container.getAttribute('data-video-id');
    if (!videoId) return;

    const loadIframe = () => {
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`);
      iframe.setAttribute('title', 'Webinar Automatización con IA para pymes y equipos - Cámara Chilena de Inteligencia Artificial');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', 'true');
      iframe.className = 'w-full h-full absolute inset-0 border-0 rounded-2xl';
      
      container.innerHTML = '';
      container.appendChild(iframe);
      container.classList.remove('cursor-pointer');
    };

    container.addEventListener('click', loadIframe, { once: true });
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        loadIframe();
      }
    }, { once: true });
  });
}

/**
 * 8. Trayectoria en móvil (muestra los 3 más recientes y despliega el resto al pulsar el botón)
 */
function initTrayectoriaMobile() {
  const toggleBtn = document.getElementById('toggle-trayectoria-btn');
  const hiddenItems = document.querySelectorAll('.trayectoria-item-hidden');

  if (!toggleBtn || !hiddenItems.length) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

    hiddenItems.forEach(item => {
      if (isExpanded) {
        item.classList.add('hidden', 'lg:block');
      } else {
        item.classList.remove('hidden');
      }
    });

    if (isExpanded) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `
        <span>Ver trayectoria completa</span>
        <svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      `;
    } else {
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = `
        <span>Mostrar menos</span>
        <svg class="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      `;
    }
  });
}

/**
 * 9. Componente de "Herramientas y demostraciones" (preparado para crecer)
 * Si el arreglo está vacío, no se muestra nada en el DOM.
 */
function initDemosComponent() {
  const container = document.getElementById('demos-container');
  if (!container) return;

  // Intenta leer desde data/demos.json o usa arreglo vacío por defecto
  fetch('data/demos.json')
    .then(res => res.json())
    .then(demos => {
      if (!Array.isArray(demos) || demos.length === 0) {
        container.classList.add('hidden');
        return;
      }
      // Si en el futuro se agregan demostraciones, se renderizan aquí
      container.classList.remove('hidden');
      renderDemos(demos, container);
    })
    .catch(() => {
      container.classList.add('hidden');
    });
}

function renderDemos(demos, container) {
  // Función para iteraciones futuras cuando Claudio agregue demostraciones reales
  container.innerHTML = demos.map(demo => `
    <div class="glass-panel p-6 card-hover">
      <div class="text-xs text-[#35C6BC] font-semibold mb-1">${demo.estado || 'En desarrollo'}</div>
      <h3 class="text-lg font-bold text-[#F5F7FB] mb-2">${demo.nombre}</h3>
      <p class="text-sm text-[#94A3B8] mb-3">${demo.descripcion}</p>
      <div class="text-xs text-[#64748B]">Herramientas: ${demo.herramientasUsadas || ''}</div>
    </div>
  `).join('');
}

/**
 * 10. Año actual dinámico en el footer
 */
function initCurrentYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
