// ============================================================
// @coffeeshop - Script Principal
// Vanilla JavaScript (Alpine.js removido por não ser necessário)
// ============================================================

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('☕ Iniciando @coffeeshop...');
  
  // Inicializar componentes
  initAOS();
  setupSmoothScroll();
  setupScrollTop();
  initScrollSpy();
  checkOpeningHours();
  
  console.log('✓ @coffeeshop carregada com sucesso');
});

// ========================================
// AOS - ANIMAÇÕES
// ========================================

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      disable: false
    });
    console.log('✓ Animações AOS inicializadas');
  }
}

// ========================================
// SMOOTH SCROLL
// ========================================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href === '#' || href === null || href.length <= 1) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  console.log('✓ Smooth scroll configurado');
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

function setupScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (!scrollTopBtn) return;
  
  // Mostrar/ocultar botão baseado no scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  // Click para voltar ao topo
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  console.log('✓ Scroll to top configurado');
}

// ========================================
// SCROLL SPY (HIGHLIGHT LINK ATIVO)
// ========================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          
          const activeLink = document.querySelector(`nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-100px 0px -60% 0px'
    }
  );
  
  sections.forEach((section) => observer.observe(section));
  
  console.log('✓ ScrollSpy inicializado');
}

// ========================================
// VERIFICAR HORÁRIO DE FUNCIONAMENTO
// ========================================

function checkOpeningHours() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay(); // 0 = Domingo, 6 = Sábado
  
  let isOpen = false;
  
  // Segunda a Sábado: 07:00 - 19:00
  if (day >= 1 && day <= 6) {
    isOpen = hour >= 7 && hour < 19;
  }
  // Domingo: 09:00 - 17:00
  else if (day === 0) {
    isOpen = hour >= 9 && hour < 17;
  }
  
  if (isOpen) {
    console.log('☕ Estamos ABERTOS!');
  } else {
    console.log('🌙 Estamos FECHADOS. Volte no horário de funcionamento!');
  }
  
  return isOpen;
}

// ========================================
// NAVBAR BACKGROUND ON SCROLL
// ========================================

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 16px rgba(42, 24, 16, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ========================================
// PERFORMANCE LOG
// ========================================

window.addEventListener('load', () => {
  const loadTime = (performance.now() / 1000).toFixed(2);
  console.log(`⚡ @coffeeshop carregada em ${loadTime}s`);
});

// ========================================
// ERROR HANDLING
// ========================================

window.addEventListener('error', (event) => {
  console.error('❌ Erro capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rejeitada:', event.reason);
});

// ============================================================
// FIM DO SCRIPT
// ============================================================