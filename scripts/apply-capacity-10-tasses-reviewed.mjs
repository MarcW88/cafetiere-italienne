import fs from 'node:fs';
import path from 'node:path';
import { capacity10TassesReviewed } from './capacity-10-tasses-reviewed.mjs';

const root = path.resolve(import.meta.dirname, '..');
const page = path.join(root, 'capacites', 'cafetiere-italienne-10-tasses', 'index.html');

if (!fs.existsSync(page)) throw new Error('Missing generated 10-cup capacity page');

let html = fs.readFileSync(page, 'utf8');
const escapeAttr = (value) => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');

html = html.replace(/<title>.*?<\/title>/s, `<title>${capacity10TassesReviewed.title} | Cafetière Italienne</title>`);
html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeAttr(capacity10TassesReviewed.description)}">`);
html = html.replace(/<meta name="robots" content="[^"]*">/, `<meta name="robots" content="${capacity10TassesReviewed.robots}">`);
const canonical = `https://cafetiere-italienne.be${capacity10TassesReviewed.canonical}`;
if (/<link rel="canonical" href="[^"]*">/.test(html)) html = html.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);
else html = html.replace('</head>', `<link rel="canonical" href="${canonical}"></head>`);
if (!/<main>.*<\/main>/s.test(html)) throw new Error('Could not locate <main> in 10-cup capacity page');
html = html.replace(/<main>.*<\/main>/s, `<main>${capacity10TassesReviewed.body}</main>`);
fs.writeFileSync(page, html);
console.log('PASS: applied reviewed bespoke content to /capacites/cafetiere-italienne-10-tasses/');
