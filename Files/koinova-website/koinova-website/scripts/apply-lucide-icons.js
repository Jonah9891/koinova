const fs = require('fs');
const path = require('path');
const { renderLucideSvg } = require('./icons.js');

// Helper shortcuts
const icon24 = (name, cls = '') => renderLucideSvg(name, { size: 24, strokeWidth: 2, className: cls });
const icon26 = (name, cls = '') => renderLucideSvg(name, { size: 26, strokeWidth: 2, className: cls });
const icon32 = (name, cls = '') => renderLucideSvg(name, { size: 32, strokeWidth: 2, className: cls });
const icon16 = (name, cls = '') => renderLucideSvg(name, { size: 16, strokeWidth: 2, className: cls });

// 1. Update src/pages/index.html
function updateIndex() {
  const file = path.join(__dirname, '../src/pages/index.html');
  let content = fs.readFileSync(file, 'utf8');

  // Ecosystem cards
  content = content.replace('<div class="card-icon icon-blue">🌐</div>', `<div class="card-icon icon-emerald">${icon26('Globe')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">🎓</div>', `<div class="card-icon icon-emerald">${icon26('GraduationCap')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🔬</div>', `<div class="card-icon icon-emerald">${icon26('FlaskConical')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🚀</div>', `<div class="card-icon icon-emerald">${icon26('Rocket')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🌍</div>', `<div class="card-icon icon-emerald">${icon26('Globe')}</div>`);

  // Strategic 8 Pillars
  content = content.replace('<div class="card-icon icon-blue">💻</div>', `<div class="card-icon icon-emerald">${icon26('Laptop')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">🤖</div>', `<div class="card-icon icon-emerald">${icon26('Bot')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">📈</div>', `<div class="card-icon icon-emerald">${icon26('TrendingUp')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">💡</div>', `<div class="card-icon icon-emerald">${icon26('Lightbulb')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🎯</div>', `<div class="card-icon icon-emerald">${icon26('Target')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">📚</div>', `<div class="card-icon icon-emerald">${icon26('BookOpen')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">👑</div>', `<div class="card-icon icon-emerald">${icon26('Crown')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">🤝</div>', `<div class="card-icon icon-emerald">${icon26('Handshake')}</div>`);

  // Empty state
  content = content.replace('<div class="empty-state-icon">📅</div>', `<div class="empty-state-icon">${icon32('Calendar')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/index.html with Lucide SVG icons');
}

// 2. Update src/pages/about/index.html
function updateAboutIndex() {
  const file = path.join(__dirname, '../src/pages/about/index.html');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace('<div class="card-icon icon-blue">📖</div>', `<div class="card-icon icon-emerald">${icon26('BookOpen')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🎯</div>', `<div class="card-icon icon-emerald">${icon26('Target')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">⚖️</div>', `<div class="card-icon icon-emerald">${icon26('Scale')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">👤</div>', `<div class="card-icon icon-emerald">${icon26('UserCheck')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/about/index.html with Lucide SVG icons');
}

// 3. Update src/pages/about/vision-and-mission.html
function updateVisionMission() {
  const file = path.join(__dirname, '../src/pages/about/vision-and-mission.html');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace('<div class="card-icon icon-blue">🎯</div>', `<div class="card-icon icon-emerald">${icon26('Target')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🌱</div>', `<div class="card-icon icon-emerald">${icon26('Sprout')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/about/vision-and-mission.html with Lucide SVG icons');
}

// 4. Update src/pages/about/values-and-faith.html
function updateValuesFaith() {
  const file = path.join(__dirname, '../src/pages/about/values-and-faith.html');
  let content = fs.readFileSync(file, 'utf8');

  const checkSvg = renderLucideSvg('CheckCircle2', { size: 18, strokeWidth: 2, className: 'faith-check-icon' });
  content = content.replace(/<li>✓\s*/g, `<li style="display: flex; align-items: flex-start; gap: 8px;"><span style="color: var(--brand-emerald); flex-shrink: 0; margin-top: 2px;">${checkSvg}</span><span>`);
  // close matching tags for those list items
  content = content.replace(/<\/li>/g, '</span></li>');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/about/values-and-faith.html with Lucide SVG icons');
}

// 5. Update src/pages/ecosystem/index.html
function updateEcosystemIndex() {
  const file = path.join(__dirname, '../src/pages/ecosystem/index.html');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace('<div class="card-icon icon-blue">🌐</div>', `<div class="card-icon icon-emerald">${icon26('Globe')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">🎓</div>', `<div class="card-icon icon-emerald">${icon26('GraduationCap')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🔬</div>', `<div class="card-icon icon-emerald">${icon26('FlaskConical')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🚀</div>', `<div class="card-icon icon-emerald">${icon26('Rocket')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🌍</div>', `<div class="card-icon icon-emerald">${icon26('Globe')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/ecosystem/index.html with Lucide SVG icons');
}

// 6. Update src/pages/get-involved/index.html
function updateGetInvolvedIndex() {
  const file = path.join(__dirname, '../src/pages/get-involved/index.html');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace('<div class="card-icon icon-emerald">👥</div>', `<div class="card-icon icon-emerald">${icon26('Users')}</div>`);
  content = content.replace('<div class="card-icon icon-blue">🙌</div>', `<div class="card-icon icon-emerald">${icon26('HeartHandshake')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🤝</div>', `<div class="card-icon icon-emerald">${icon26('Handshake')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/get-involved/index.html with Lucide SVG icons');
}

// 7. Update src/pages/programmes/index.html & events.html
function updateProgrammes() {
  const fileIndex = path.join(__dirname, '../src/pages/programmes/index.html');
  let contentIdx = fs.readFileSync(fileIndex, 'utf8');

  contentIdx = contentIdx.replace('<div class="card-icon icon-blue">📚</div>', `<div class="card-icon icon-emerald">${icon26('GraduationCap')}</div>`);
  contentIdx = contentIdx.replace('<div class="card-icon icon-emerald">🤝</div>', `<div class="card-icon icon-emerald">${icon26('Users')}</div>`);
  contentIdx = contentIdx.replace('<div class="card-icon icon-emerald">🚀</div>', `<div class="card-icon icon-emerald">${icon26('Rocket')}</div>`);
  contentIdx = contentIdx.replace('<div class="card-icon icon-emerald">💡</div>', `<div class="card-icon icon-emerald">${icon26('Lightbulb')}</div>`);
  contentIdx = contentIdx.replace('<div class="card-icon icon-blue">👥</div>', `<div class="card-icon icon-emerald">${icon26('Handshake')}</div>`);
  fs.writeFileSync(fileIndex, contentIdx, 'utf8');

  const fileEvents = path.join(__dirname, '../src/pages/programmes/events.html');
  let contentEvents = fs.readFileSync(fileEvents, 'utf8');
  contentEvents = contentEvents.replace('<div class="empty-state-icon">🗓️</div>', `<div class="empty-state-icon">${icon32('Calendar')}</div>`);
  fs.writeFileSync(fileEvents, contentEvents, 'utf8');

  console.log('Updated src/pages/programmes/ with Lucide SVG icons');
}

// 8. Update src/pages/resources/index.html & opportunities.html
function updateResources() {
  const fileIndex = path.join(__dirname, '../src/pages/resources/index.html');
  let contentIdx = fs.readFileSync(fileIndex, 'utf8');

  contentIdx = contentIdx.replace('<div class="card-icon icon-blue">📰</div>', `<div class="card-icon icon-emerald">${icon26('Newspaper')}</div>`);
  contentIdx = contentIdx.replace('<div class="card-icon icon-emerald">🎯</div>', `<div class="card-icon icon-emerald">${icon26('Briefcase')}</div>`);
  fs.writeFileSync(fileIndex, contentIdx, 'utf8');

  const fileOpp = path.join(__dirname, '../src/pages/resources/opportunities.html');
  let contentOpp = fs.readFileSync(fileOpp, 'utf8');
  contentOpp = contentOpp.replace('<div class="empty-state-icon">🎯</div>', `<div class="empty-state-icon">${icon32('Target')}</div>`);
  fs.writeFileSync(fileOpp, contentOpp, 'utf8');

  console.log('Updated src/pages/resources/ with Lucide SVG icons');
}

// 9. Update src/pages/_styleguide.html
function updateStyleguide() {
  const file = path.join(__dirname, '../src/pages/_styleguide.html');
  let content = fs.readFileSync(file, 'utf8');

  content = content.replace('<div class="card-icon icon-blue">🌐</div>', `<div class="card-icon icon-emerald">${icon26('Globe')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🚀</div>', `<div class="card-icon icon-emerald">${icon26('Rocket')}</div>`);
  content = content.replace('<div class="card-icon icon-emerald">🎓</div>', `<div class="card-icon icon-emerald">${icon26('GraduationCap')}</div>`);
  content = content.replace('<div class="empty-state-icon">📅</div>', `<div class="empty-state-icon">${icon32('Calendar')}</div>`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/pages/_styleguide.html with Lucide SVG icons');
}

// 10. Update Partials (Header & Accordions)
function updateHeader() {
  const file = path.join(__dirname, '../src/partials/header.html');
  let content = fs.readFileSync(file, 'utf8');

  const chevronSvg = renderLucideSvg('ChevronDown', { size: 14, strokeWidth: 2.5, className: 'dropdown-chevron-icon' });
  const closeSvg = renderLucideSvg('X', { size: 20, strokeWidth: 2 });
  const sunSvg = renderLucideSvg('Sun', { size: 18, strokeWidth: 2, className: 'theme-icon-sun' });
  const moonSvg = renderLucideSvg('Moon', { size: 18, strokeWidth: 2, className: 'theme-icon-moon' });

  // Replace text chevrons in nav buttons
  content = content.replace(/<span class="dropdown-chevron" aria-hidden="true">▾<\/span>/g, `<span class="dropdown-chevron" aria-hidden="true">${chevronSvg}</span>`);
  content = content.replace(/<span>▾<\/span>/g, `<span class="mobile-chevron" aria-hidden="true">${chevronSvg}</span>`);

  // Replace close button text
  content = content.replace('<button id="mobile-menu-close" class="mobile-menu-close" aria-label="Close navigation menu">✕</button>', `<button id="mobile-menu-close" class="mobile-menu-close" aria-label="Close navigation menu">${closeSvg}</button>`);

  // Replace theme button icon containers with SVG dual state
  content = content.replace('<span class="theme-icon" aria-hidden="true">◐</span>', `<span class="theme-icon-wrap" aria-hidden="true">${sunSvg}${moonSvg}</span>`);
  content = content.replace('<span class="theme-icon">◐</span> Toggle Theme', `<span class="theme-icon-wrap" aria-hidden="true" style="margin-right: 8px;">${sunSvg}${moonSvg}</span> Toggle Theme`);

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated src/partials/header.html with Lucide SVG icons');
}

// Run all updates
updateIndex();
updateAboutIndex();
updateVisionMission();
updateValuesFaith();
updateEcosystemIndex();
updateGetInvolvedIndex();
updateProgrammes();
updateResources();
updateStyleguide();
updateHeader();
console.log('=== All static pages and partials updated with Lucide SVG icons ===');
