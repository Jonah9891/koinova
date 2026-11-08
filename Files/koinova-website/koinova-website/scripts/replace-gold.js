const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('build-specs')) {
        results = results.concat(walk(fullPath));
      }
    } else {
      if (fullPath.endsWith('.html') || fullPath.endsWith('.css') || fullPath.endsWith('.svg')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const baseDir = path.resolve(__dirname, '..');
const files = walk(baseDir);

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let modified = false;

  if (content.includes('#D6AD60') || content.includes('#B88E3E') || content.includes('#C79A45') || content.includes('#EBCB8B')) {
    content = content.replace(/#D6AD60/gi, '#0D9B72');
    content = content.replace(/#B88E3E/gi, '#0A7A59');
    content = content.replace(/#C79A45/gi, '#0D9B72');
    content = content.replace(/#EBCB8B/gi, '#3DD6A3');
    modified = true;
  }

  if (content.includes('var(--brand-gold)')) {
    content = content.replace(/var\(--brand-gold\)/g, 'var(--brand-emerald)');
    modified = true;
  }

  if (content.includes('gradient-text-gold')) {
    content = content.replace(/gradient-text-gold/g, 'gradient-text-emerald');
    modified = true;
  }

  if (content.includes('card-gold')) {
    content = content.replace(/card-gold/g, 'card-emerald');
    modified = true;
  }

  if (content.includes('icon-gold')) {
    content = content.replace(/icon-gold/g, 'icon-emerald');
    modified = true;
  }

  if (content.includes('goldGrad')) {
    content = content.replace(/goldGrad/g, 'emeraldGrad');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(f, content, 'utf8');
    count++;
    console.log('Updated:', path.relative(baseDir, f));
  }
});

console.log(`Total files updated: ${count}`);

