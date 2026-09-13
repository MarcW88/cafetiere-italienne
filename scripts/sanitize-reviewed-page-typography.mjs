import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const targets = process.argv.slice(2);

if (!targets.length) throw new Error('Pass at least one generated HTML path to sanitize');

for (const target of targets) {
  const file = path.join(root, target);
  if (!fs.existsSync(file)) throw new Error(`Missing generated page: ${target}`);
  let html = fs.readFileSync(file, 'utf8');
  html = html
    .replaceAll(' — ', ', ')
    .replaceAll('—', ', ')
    .replaceAll(' – ', ' à ')
    .replaceAll('–', ' à ');
  fs.writeFileSync(file, html);
  console.log(`PASS: sanitized reviewed typography in ${target}`);
}
