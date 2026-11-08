// theme.js - Theme Switch Controller with Header & Mobile sync
export function initTheme() {
  const toggleBtns = [
    document.getElementById('theme-toggle'),
    document.getElementById('mobile-theme-toggle')
  ].filter(Boolean);

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('koinova-theme', theme);
    updateToggleAria(theme);
  }

  function updateToggleAria(theme) {
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  updateToggleAria(getTheme());

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  });

  // Listen to system preference changes if no manual preference stored
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('koinova-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}
