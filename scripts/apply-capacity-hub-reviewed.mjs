import fs from 'node:fs';
import path from 'node:path';
import { capacityHubReviewed } from './capacity-hub-reviewed.mjs';

const root = path.resolve(import.meta.dirname, '..');
const page = path.join(root, 'capacites', 'index.html');

if (!fs.existsSync(page)) {
  throw new Error('Missing generated /capacites/ page');
}

let html = fs.readFileSync(page, 'utf8');

const escapeAttr = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

html = html.replace(/<title>.*?<\/title>/s, `<title>${capacityHubReviewed.title} | Cafetière Italienne</title>`);
html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttr(capacityHubReviewed.description)}">`);
html = html.replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="${capacityHubReviewed.robots}">`);

const canonical = `https://cafetiere-italienne.be${capacityHubReviewed.canonical}`;
if (/<link rel="canonical" href="[^"]*">/.test(html)) {
  html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);
} else {
  html = html.replace('</head>', `<link rel="canonical" href="${canonical}"></head>`);
}

if (!/<main>.*<\/main>/s.test(html)) {
  throw new Error('Could not locate <main> in /capacites/ page');
}
html = html.replace(/<main>.*<\/main>/s, `<main>${capacityHubReviewed.body}</main>`);

fs.writeFileSync(page, html);
console.log('PASS: applied reviewed bespoke content to /capacites/');
