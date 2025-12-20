// ============================================================
// ARQUIVO: script.js
// DESCRIÇÃO: Script principal - Inicialização @coffeeshop
// STACK: Alpine.js + AOS.js
// ============================================================

// ========================================
// PARTE 1: INICIALIZAÇÃO PRINCIPAL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('☕ Iniciando @coffeeshop...');
  
  setTimeout(() => {
    // 1. Inicializar animações AOS
    initAOS();
    
    // 2. Smooth scroll para âncoras
    setupSmoothScroll();
    
    // 3. Inicializar funcionalidades específicas da cafeteria
    initCoffeeFeatures();
    
    console.log('✓ @coffeeshop totalmente inicializada');
  }, 100);
});

// ========================================
// PARTE 2: INICIALIZAR AOS
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
  } else {
    console.warn('⚠️ AOS não está disponível');
  }
}

// ========================================
// PARTE 3: SMOOTH SCROLL
// ========================================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignora links vazios ou inválidos
      if (href === '#' || href === null || href.length <= 1) return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        // Offset para compensar o header fixo (ajuste conforme necessário)
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        console.log(`✓ Scroll suave para: ${href}`);
      } else {
        console.warn(`⚠️ Target não encontrado: ${href}`);
      }
    });
  });
  
  console.log('✓ Smooth scroll configurado');
}

// ========================================
// PARTE 4: FUNCIONALIDADES DA CAFETERIA
// ========================================

function initCoffeeFeatures() {
  // Adicionar classe ao body indicando que o site está pronto
  document.body.classList.add('coffee-ready');
  
  // Log de horário de funcionamento
  checkOpeningHours();
  
  // Highlight do link ativo no scroll
  initScrollSpy();
}

// ========================================
// PARTE 5: VERIFICAR HORÁRIO
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
// PARTE 6: SCROLL SPY (HIGHLIGHT LINK ATIVO)
// ========================================

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) {
    console.warn('⚠️ ScrollSpy não inicializado: sections ou links não encontrados');
    return;
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          
          // Remove classe ativa de todos os links
          navLinks.forEach((link) => {
            link.classList.remove('active');
          });
          
          // Adiciona classe ativa ao link correspondente
          const activeLink = document.querySelector(`nav a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -60% 0px'
    }
  );
  
  sections.forEach((section) => observer.observe(section));
  
  console.log('✓ ScrollSpy inicializado');
}

// ========================================
// PARTE 7: UTILIDADES GLOBAIS
// ========================================

// Refresh AOS
window.refreshAOS = function() {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
    console.log('✓ AOS atualizado');
  }
};

// Scroll para o topo
window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  console.log('✓ Scroll para o topo');
};

// Verificar se está aberto
window.isOpen = function() {
  return checkOpeningHours();
};

// Log de performance ao carregar
window.addEventListener('load', () => {
  const loadTime = (performance.now() / 1000).toFixed(2);
  console.log(`⚡ @coffeeshop carregada em ${loadTime}s`);
  
  // Analytics ou tracking podem ser adicionados aqui
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_load', {
      'load_time': loadTime
    });
  }
});

// ========================================
// PARTE 8: FEATURE DETECTION
// ========================================

// Detectar suporte a WebP
function supportsWebP() {
  const elem = document.createElement('canvas');
  
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  return false;
}

if (supportsWebP()) {
  document.documentElement.classList.add('webp');
  console.log('✓ Suporte a WebP detectado');
} else {
  document.documentElement.classList.add('no-webp');
  console.log('⚠️ WebP não suportado');
}

// ========================================
// PARTE 9: ERROR HANDLING
// ========================================

// Capturar erros globais
window.addEventListener('error', (event) => {
  console.error('❌ Erro capturado:', event.error);
});

// Capturar promessas rejeitadas
window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rejeitada:', event.reason);
});

// ============================================================
// FIM DO ARQUIVO: script.js
// ============================================================