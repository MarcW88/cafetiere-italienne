import fs from 'node:fs';
import path from 'node:path';
import { capacitySizePagesReviewed } from './capacity-size-pages-reviewed.mjs';

const root = path.resolve(import.meta.dirname, '..');
const escapeAttr = (value) => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');

for (const [slug, reviewed] of Object.entries(capacitySizePagesReviewed)) {
  const page = path.join(root, 'capacites', slug, 'index.html');
  if (!fs.existsSync(page)) throw new Error(`Missing generated capacity page: ${slug}`);

  let html = fs.readFileSync(page, 'utf8');
  html = html.replace(/<title>.*?<\/title>/s, `<title>${reviewed.title} | Cafetière Italienne</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttr(reviewed.description)}">`);
  html = html.replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="${reviewed.robots}">`);
  const canonical = `https://cafetiere-italienne.be${reviewed.canonical}`;
  if (/<link rel="canonical" href="[^"]*">/.test(html)) html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);
  else html = html.replace('</head>', `<link rel="canonical" href="${canonical}"></head>`);
  if (!/<main>.*<\/main>/s.test(html)) throw new Error(`Could not locate <main> in ${slug}`);
  html = html.replace(/<main>.*<\/main>/s, `<main>${reviewed.body}</main>`);
  fs.writeFileSync(page, html);
  console.log(`PASS: applied reviewed bespoke content to /capacites/${slug}/`);
}
