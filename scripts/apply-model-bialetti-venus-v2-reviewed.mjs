import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const page=path.join(root,'modeles','bialetti-venus','index.html');
if(!fs.existsSync(page)) throw new Error('Bialetti Venus generated page not found.');

let html=fs.readFileSync(page,'utf8');
const canonical='https://cafetiere-italienne.be/modeles/bialetti-venus/';
if(!html.includes(`<link rel="canonical" href="${canonical}">`)) throw new Error('Unexpected Bialetti Venus canonical before v2 clarification.');

const anchor='<section><h2>Pourquoi le diamètre compte autant que la mention “induction”</h2>';
if(!html.includes(anchor)) throw new Error('Venus v2 decision anchor not found.');
if(html.includes('Un volume documenté est un repère, pas une promesse au millilitre près')) throw new Error('Venus v2 clarification already present before override.');

const clarification=`<section><h2>Un volume documenté est un repère, pas une promesse au millilitre près</h2><p>Les valeurs de 85, 170 ou 235 ml permettent surtout de comparer les tailles entre elles. Elles sont données comme des volumes préparés approximatifs : utilisez-les pour choisir votre format, pas comme la garantie que chaque préparation versera exactement cette quantité dans la tasse.</p><p>La même prudence vaut pour l’induction. Pour l’achat, nous conservons la règle officielle Bialetti : la <strong>Venus 2 tasses n’est pas donnée compatible induction</strong>. Le fait qu’un foyer particulier puisse parfois détecter un petit fond ne remplace pas cette compatibilité documentée. Si l’induction est indispensable, choisissez une taille officiellement compatible et vérifiez aussi le diamètre minimal accepté par votre plaque.</p><p>Si votre question porte plutôt sur la quantité de café, la mouture ou le réglage de la préparation, ce sont des variables d’usage : <a class="text-link" href="/guides/dosage-cafe-cafetiere-italienne/">voir le dosage →</a> · <a class="text-link" href="/guides/mouture-cafetiere-italienne/">voir la mouture →</a></p></section>\n\n`;

html=html.replace(anchor,clarification+anchor);
fs.writeFileSync(page,html);
console.log('PASS: Venus v2 decision clarification applied.');
