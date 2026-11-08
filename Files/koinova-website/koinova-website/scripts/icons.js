const lucide = require('lucide');

/**
 * Render a Lucide icon as inline SVG string
 * @param {string} iconName PascalCase name in Lucide (e.g. 'Globe', 'Compass')
 * @param {object} options Options { size: number, strokeWidth: number, className: string, style: string, ariaHidden: boolean }
 */
function renderLucideSvg(iconName, options = {}) {
  const icon = lucide[iconName];
  if (!icon) {
    console.warn(`[icons] Warning: Icon "${iconName}" not found in Lucide`);
    return '';
  }
  const size = options.size || 24;
  const strokeWidth = options.strokeWidth || 2;
  const className = options.className ? ` class="${options.className}"` : '';
  const style = options.style ? ` style="${options.style}"` : '';
  const aria = options.ariaHidden !== false ? ' aria-hidden="true"' : '';

  const inner = icon.map(([tag, elAttrs]) => {
    const attrEntries = Object.entries(elAttrs).map(([k, v]) => `${k}="${v}"`).join(' ');
    return `<${tag} ${attrEntries} />`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${className}${style}${aria}>${inner}</svg>`;
}

module.exports = { renderLucideSvg };
