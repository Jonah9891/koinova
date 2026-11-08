const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('build-specs') && !fullPath.includes('assets/img') && !fullPath.includes('assets\\img')) {
        results = results.concat(walk(fullPath));
      }
    } else {
      if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const files = walk('./src');
let totalMatches = 0;

files.forEach(f => {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  lines.forEach((line, idx) => {
    if (emojiRegex.test(line)) {
      console.log(`${path.relative('.', f)}:${idx + 1}: ${line.trim()}`);
      totalMatches++;
    }
  });
});

console.log(`Total emoji lines found: ${totalMatches}`);
