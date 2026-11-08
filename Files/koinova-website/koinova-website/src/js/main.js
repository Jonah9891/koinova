// main.js - Application Entry Point
import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initForms } from './forms.js';

function initBioReadMore() {
  const readMoreBtn = document.getElementById('bio-read-more-btn');
  const bioContent = document.getElementById('founder-bio');

  if (readMoreBtn && bioContent) {
    readMoreBtn.addEventListener('click', () => {
      const isExpanded = bioContent.classList.toggle('is-expanded');
      readMoreBtn.setAttribute('aria-expanded', isExpanded);
      readMoreBtn.innerHTML = isExpanded ? 'Read Less ▴' : 'Read More ▾';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initForms();
  initBioReadMore();
  console.log('KOINOVA Ecosystem initialized.');
});
