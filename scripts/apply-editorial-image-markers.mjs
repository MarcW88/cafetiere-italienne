import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');

const placements=[
  {
    page:'index.html',
    afterAnchor:'<div class="hero-visual">',
    marker:'<!-- EDITORIAL_IMAGE:homepage-moka-morning -->',
    stylesheet:'/assets/image-coverage.css',
  },
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
    heading:'<h2>Comment régler un moulin sans tout changer à la fois</h2>',
    marker:'<!-- EDITORIAL_IMAGE:mouture-reglage-moulin -->',
  },
  {
    page:'guides/nettoyer-cafetiere-italienne/index.html',
    heading:'<h2>La Moka Express : lavage à la main</h2>',
    marker:'<!-- EDITORIAL_IMAGE:nettoyage-sechage-pieces -->',
  },
  {
    page:'guides/quel-cafe-pour-cafetiere-italienne/index.html',
    heading:'<h2>2. Café en grains ou déjà moulu ?</h2>',
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
  {
    page:'guides/detartrer-cafetiere-italienne/index.html',
    heading:'<h2>Procédure Moka Express, étape par étape</h2>',
    marker:'<!-- EDITORIAL_IMAGE:detartrer-depots-mineraux -->',
  },
  {
    page:'guides/cafetiere-italienne-cafe-amer-brule/index.html',
    heading:'<h2>2. Une chauffe trop forte accélère mal l’extraction</h2>',
    marker:'<!-- EDITORIAL_IMAGE:cafe-amer-chauffe-maitrisee -->',
  },
];

let changed=0;
for(const placement of placements){
  const file=path.join(root,placement.page);
  if(!fs.existsSync(file))throw new Error(`Page image absente: ${placement.page}`);
  let html=fs.readFileSync(file,'utf8');

  if(placement.stylesheet&&!html.includes(`href="${placement.stylesheet}"`)){
    const link=`<link rel="stylesheet" href="${placement.stylesheet}">`;
    if(!html.includes('</head>'))throw new Error(`Head introuvable dans ${placement.page}`);
    html=html.replace('</head>',`${link}</head>`);
  }

  if(!html.includes(placement.marker)){
    if(placement.afterAnchor){
      const anchorIndex=html.indexOf(placement.afterAnchor);
      if(anchorIndex<0)throw new Error(`Ancre image introuvable dans ${placement.page}: ${placement.afterAnchor}`);
      const insertAt=anchorIndex+placement.afterAnchor.length;
      html=html.slice(0,insertAt)+`\n${placement.marker}\n`+html.slice(insertAt);
    }else{
      const headingIndex=html.indexOf(placement.heading);
      if(headingIndex<0)throw new Error(`Heading image introuvable dans ${placement.page}: ${placement.heading}`);
      const sectionEnd=html.indexOf('</section>',headingIndex);
      if(sectionEnd<0)throw new Error(`Fin de section introuvable dans ${placement.page}`);
      html=html.slice(0,sectionEnd)+`\n${placement.marker}\n`+html.slice(sectionEnd);
    }
    changed+=1;
  }

  fs.writeFileSync(file,html);
}

console.log(`Marqueurs éditoriaux appliqués à ${changed} page(s).`);
