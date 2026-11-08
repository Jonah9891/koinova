// nav.js - Navigation, Dropdowns, Focus Trapping & Mobile Menu
export function initNav() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  // 1. Sticky Header glass effect on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 2. Desktop Dropdowns (Click, Hover, Keyboard & Escape handling)
  const dropdownContainers = document.querySelectorAll('.nav-has-dropdown');
  dropdownContainers.forEach(container => {
    const btn = container.querySelector('.nav-dropdown-btn');
    const dropdown = container.querySelector('.nav-dropdown');

    if (!btn || !dropdown) return;

    function openDropdown() {
      // Close other open dropdowns
      dropdownContainers.forEach(other => {
        if (other !== container) {
          other.classList.remove('is-active');
          const otherBtn = other.querySelector('.nav-dropdown-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      container.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      container.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = container.classList.contains('is-active');
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    // Close on Escape
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown();
        btn.focus();
      }
    });
  });

  // Close dropdowns on document click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-has-dropdown')) {
      dropdownContainers.forEach(container => {
        container.classList.remove('is-active');
        const btn = container.querySelector('.nav-dropdown-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // 3. Mobile Navigation Drawer & Focus Trap
  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus first interactive element
    const firstFocusable = mobileDrawer.querySelector('button, a');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.focus();
    }
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
  }

  // Close mobile drawer on Escape
  if (mobileDrawer) {
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  // Mobile Accordions
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-trigger');
  mobileAccordions.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', !isExpanded);
      const panel = trigger.nextElementSibling;
      if (panel) {
        panel.classList.toggle('is-open', !isExpanded);
      }
    });
  });

  // 4. Cookie Banner Handling
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieEssential = document.getElementById('cookie-essential');

  if (cookieBanner) {
    const consent = localStorage.getItem('koinova-cookie-consent');
    if (!consent) {
      cookieBanner.removeAttribute('hidden');
    }

    if (cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        localStorage.setItem('koinova-cookie-consent', 'all');
        cookieBanner.setAttribute('hidden', '');
      });
    }

    if (cookieEssential) {
      cookieEssential.addEventListener('click', () => {
        localStorage.setItem('koinova-cookie-consent', 'essential');
        cookieBanner.setAttribute('hidden', '');
      });
    }
  }
}

