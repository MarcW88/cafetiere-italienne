import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const page=path.join(root,'modeles','bialetti-moka-express','index.html');
if(!fs.existsSync(page)) throw new Error('Bialetti Moka Express generated page not found.');

let html=fs.readFileSync(page,'utf8');
const canonical='https://cafetiere-italienne.be/modeles/bialetti-moka-express/';
if(!html.includes(`<link rel="canonical" href="${canonical}">`)) throw new Error('Unexpected Moka Express canonical before v2 adapter correction.');
if(html.includes('jusqu’à 6 tasses selon la fiche de l’adaptateur')) throw new Error('Moka Express v2 adapter correction already present before override.');

const oldIntro='Si vous voulez absolument ce modèle, Bialetti propose un adaptateur induction ; sinon, une Venus ou une Moka Induction évite cet intermédiaire.';
const newIntro='Si vous voulez absolument ce modèle, Bialetti propose un adaptateur induction de 13 cm, mais sa fiche dédiée le donne pour les cafetières <strong>jusqu’à 6 tasses</strong>. Pour une Moka Express 9, 12 ou 18 tasses, cet adaptateur officiel ne doit donc pas être présenté comme une solution validée ; une Venus, une Moka Induction ou une autre cafetière directement compatible devient une piste plus cohérente.';
if(!html.includes(oldIntro)) throw new Error('Moka Express induction intro anchor not found.');
html=html.replace(oldIntro,newIntro);

const oldPick='<div class="pick"><h3>Garder la Moka Express</h3><p>Utiliser un adaptateur si vous tenez à l’aluminium classique et acceptez un accessoire supplémentaire.</p></div>';
const newPick='<div class="pick"><h3>Garder la Moka Express</h3><p>Utiliser l’adaptateur officiel si vous tenez à l’aluminium classique, acceptez un accessoire supplémentaire et choisissez une taille <strong>jusqu’à 6 tasses</strong>. Pour 9, 12 ou 18 tasses, la fiche de l’adaptateur ne documente pas cette compatibilité.</p></div>';
if(!html.includes(oldPick)) throw new Error('Moka Express induction route anchor not found.');
html=html.replace(oldPick,newPick);

const sourceAnchor='<li><a href="https://www.bialetti.co.nz/products/moka-express-black">Bialetti — compatibilité plaques et adaptateur induction</a></li>';
const sourceReplacement=`${sourceAnchor}<li><a href="https://www.bialetti.co.nz/collections/accessories/products/bialetti-induction-plate">Bialetti — Induction Plate 13 cm : compatibilité jusqu’à 6 tasses</a></li>`;
if(!html.includes(sourceAnchor)) throw new Error('Moka Express source anchor not found.');
html=html.replace(sourceAnchor,sourceReplacement);

fs.writeFileSync(page,html);
console.log('PASS: Moka Express v2 adapter size gate applied.');
