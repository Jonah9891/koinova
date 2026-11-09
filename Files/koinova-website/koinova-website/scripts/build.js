/**
 * scripts/build.js
 * Compiles static HTML partials and copies assets into dist/
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PARTIALS_DIR = path.join(SRC_DIR, 'partials');
const PAGES_DIR = path.join(SRC_DIR, 'pages');

// Cache partials
function loadPartials() {
  const partials = {};
  if (!fs.existsSync(PARTIALS_DIR)) return partials;
  const files = fs.readdirSync(PARTIALS_DIR);
  for (const file of files) {
    if (file.endsWith('.html')) {
      const name = path.basename(file, '.html');
      partials[name] = fs.readFileSync(path.join(PARTIALS_DIR, file), 'utf8');
    }
  }
  return partials;
}

// Recursively process HTML with partial includes
function processHtml(content, partials, depth = 0) {
  if (depth > 5) return content; // prevent circular includes
  return content.replace(/<!--\s*@include\s+([\w-]+)\s*-->/g, (match, partialName) => {
    if (partials[partialName]) {
      return processHtml(partials[partialName], partials, depth + 1);
    }
    console.warn(`Warning: Partial "${partialName}" not found.`);
    return '';
  });
}

// Copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Build all pages
function buildPages(partials) {
  if (!fs.existsSync(PAGES_DIR)) return;

  function traverse(dir, relDir = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relDir, entry.name);

      if (entry.isDirectory()) {
        traverse(fullPath, relPath);
      } else if (entry.name.endsWith('.html')) {
        const rawContent = fs.readFileSync(fullPath, 'utf8');
        const compiled = processHtml(rawContent, partials);
        const targetPath = path.join(DIST_DIR, relPath);
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        fs.writeFileSync(targetPath, compiled, 'utf8');
        console.log(`Compiled: ${relPath}`);
      }
    }
  }

  traverse(PAGES_DIR);
}

// Main execution
function build() {
  console.log('--- Starting KOINOVA Build ---');
  const startTime = Date.now();

  // 1. Clean dist
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 2. Load partials
  const partials = loadPartials();

  // 3. Compile pages
  buildPages(partials);

  // 4. Copy CSS, JS, Assets to dist
  copyDirSync(path.join(SRC_DIR, 'css'), path.join(DIST_DIR, 'css'));
  copyDirSync(path.join(SRC_DIR, 'js'), path.join(DIST_DIR, 'js'));
  copyDirSync(path.join(SRC_DIR, 'assets'), path.join(DIST_DIR, 'assets'));

  const duration = Date.now() - startTime;
  console.log(`--- Build complete in ${duration}ms ---`);
}

if (require.main === module) {
  build();
}

module.exports = { build };

