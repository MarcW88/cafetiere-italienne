import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');

const placements=[
  {
    page:'guides/comment-utiliser-cafetiere-italienne/index.html',
    heading:'<h2>2. Remplissez le filtre de café sans le tasser</h2>',
    marker:'<!-- EDITORIAL_IMAGE:comment-utiliser-remplissage-filtre -->',
  },
  {
    page:'guides/premiere-utilisation-cafetiere-italienne/index.html',
    heading:'<h2>2. Faites le premier lavage demandé par le fabricant</h2>',
    marker:'<!-- EDITORIAL_IMAGE:premiere-utilisation-rincage -->',
  },
  {
    page:'cafe-moka/comment-preparer-un-cafe-moka/index.html',
    heading:'<h2>3. Chauffez sans chercher la vitesse maximale</h2>',
    marker:'<!-- EDITORIAL_IMAGE:preparer-moka-chauffe -->',
  },
  {
    page:'guides/dosage-cafe-cafetiere-italienne/index.html',
    heading:'<h2>Comment doser votre moka en pratique</h2>',
    marker:'<!-- EDITORIAL_IMAGE:dosage-peser-panier -->',
  },
  {
    page:'guides/mouture-cafetiere-italienne/index.html',
    heading:'<h2>Si vous utilisez un moulin réglable</h2>',
    marker:'<!-- EDITORIAL_IMAGE:mouture-reglage-moulin -->',
  },
  {
    page:'guides/nettoyer-cafetiere-italienne/index.html',
    heading:'<h2>La Moka Express : lavage à la main</h2>',
    marker:'<!-- EDITORIAL_IMAGE:nettoyage-sechage-pieces -->',
  },
  {
    page:'guides/quel-cafe-pour-cafetiere-italienne/index.html',
    heading:'<h2>Grains ou café déjà moulu ?</h2>',
    marker:'<!-- EDITORIAL_IMAGE:quel-cafe-grains-ou-moulu -->',
  },
  {
    page:'guides/cafetiere-italienne-aluminium-ou-inox/index.html',
    heading:'<h2>Ce que le matériau change vraiment</h2>',
    marker:'<!-- EDITORIAL_IMAGE:aluminium-inox-materiaux -->',
  },
  {
    page:'cafe-moka/quest-ce-que-le-cafe-moka/index.html',
    heading:'<h2>Un café moka est ici le café préparé avec une cafetière moka</h2>',
    marker:'<!-- EDITORIAL_IMAGE:cafe-moka-service -->',
  },
];

let changed=0;
for(const placement of placements){
  const file=path.join(root,placement.page);
  if(!fs.existsSync(file))throw new Error(`Page image absente: ${placement.page}`);
  let html=fs.readFileSync(file,'utf8');
  if(html.includes(placement.marker))continue;
  const headingIndex=html.indexOf(placement.heading);
  if(headingIndex<0)throw new Error(`Heading image introuvable dans ${placement.page}: ${placement.heading}`);
  const sectionEnd=html.indexOf('</section>',headingIndex);
  if(sectionEnd<0)throw new Error(`Fin de section introuvable dans ${placement.page}`);
  html=html.slice(0,sectionEnd)+`\n${placement.marker}\n`+html.slice(sectionEnd);
  fs.writeFileSync(file,html);
  changed+=1;
}

console.log(`Marqueurs éditoriaux appliqués à ${changed} page(s).`);
