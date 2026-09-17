import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const ignored=new Set(['.git','node_modules','.artifacts','test-results','playwright-report']);

const maintenancePaths=new Set([
  '/guides/nettoyer-cafetiere-italienne/',
  '/guides/detartrer-cafetiere-italienne/',
  '/guides/changer-joint-cafetiere-italienne/',
  '/guides/cafetiere-italienne-fuite-vapeur/',
  '/guides/cafetiere-italienne-cafe-amer-brule/',
]);

const chevron='<svg class="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';

function navItem({href,label,active,content}){
  return `<div class="nav-item"><a class="nav-link" href="${href}"${active?' aria-current="page"':''}>${label}${chevron}</a><div class="nav-dropdown">${content}</div></div>`;
}

function headerFor(route){
  const comparison=route==='/comparatifs/'||route.startsWith('/comparatifs/');
  const brand=route==='/marques/'||route.startsWith('/marques/');
  const model=route==='/modeles/'||route.startsWith('/modeles/');
  const capacity=route==='/capacites/'||route.startsWith('/capacites/');
  const guide=route==='/guides/'||route.startsWith('/guides/');
  const accessory=route==='/accessoires/'||route.startsWith('/accessoires/');
  const cafeMoka=route==='/cafe-moka/'||route.startsWith('/cafe-moka/');
  const maintenance=maintenancePaths.has(route);

  const comparisons=navItem({href:'/comparatifs/',label:'Comparatifs',active:comparison,content:`<span class="nav-dropdown-label">Sélections</span><a href="/comparatifs/meilleure-cafetiere-italienne/">Meilleures cafetières italiennes</a><a href="/comparatifs/cafetiere-italienne-induction/">Pour l’induction</a><a href="/comparatifs/cafetiere-italienne-inox/">Modèles inox</a><a href="/comparatifs/cafetiere-italienne-electrique/">Modèles électriques</a><a href="/comparatifs/cafetiere-italienne-design/">Cafetières design</a><a href="/comparatifs/petite-cafetiere-italienne/">Petits formats</a>`});

  const brands=navItem({href:'/marques/',label:'Marques',active:brand||model,content:`<span class="nav-dropdown-label">Marques</span><a href="/marques/bialetti/">Bialetti</a><a href="/marques/alessi/">Alessi</a><a href="/marques/giannini/">Giannini</a><div class="nav-dropdown-separator"></div><span class="nav-dropdown-label">Modèles</span><a href="/modeles/">Tous les modèles</a><a href="/modeles/bialetti-moka-express/">Bialetti Moka Express</a><a href="/modeles/bialetti-venus/">Bialetti Venus</a><a href="/modeles/bialetti-moka-induction/">Bialetti Moka Induction</a><a href="/modeles/bialetti-brikka/">Bialetti Brikka</a><a href="/modeles/bialetti-mini-express/">Bialetti Mini Express</a><a href="/modeles/alessi-9090/">Alessi 9090</a>`});

  const capacities=navItem({href:'/capacites/',label:'Par taille',active:capacity,content:`<span class="nav-dropdown-label">Choisir le bon volume</span><a href="/capacites/">Guide des tailles</a><div class="nav-dropdown-separator"></div><a href="/capacites/cafetiere-italienne-2-tasses/">2 tasses · ≈ 85–100 ml</a><a href="/capacites/cafetiere-italienne-4-tasses/">4 tasses · ≈ 150–185 ml</a><a href="/capacites/cafetiere-italienne-6-tasses/">6 tasses · ≈ 235–300 ml</a><a href="/capacites/cafetiere-italienne-10-tasses/">10 tasses</a><a href="/capacites/cafetiere-italienne-12-tasses/">12 tasses · ≈ 595 ml</a>`});

  const guides=navItem({href:'/guides/',label:'Guides',active:(guide&&!maintenance)||cafeMoka,content:`<span class="nav-dropdown-label">Bien choisir</span><a href="/guides/comment-choisir-cafetiere-italienne/">Comment choisir sa moka</a><a href="/guides/cafetiere-italienne-aluminium-ou-inox/">Aluminium ou inox ?</a><a href="/guides/cafetiere-italienne-induction-compatibilite/">Compatibilité induction</a><div class="nav-dropdown-separator"></div><span class="nav-dropdown-label">Préparer</span><a href="/guides/comment-utiliser-cafetiere-italienne/">Comment utiliser une moka</a><a href="/guides/premiere-utilisation-cafetiere-italienne/">Première utilisation</a><a href="/guides/dosage-cafe-cafetiere-italienne/">Dosage du café</a><a href="/guides/mouture-cafetiere-italienne/">Choisir la mouture</a><a href="/guides/quel-cafe-pour-cafetiere-italienne/">Quel café choisir ?</a><div class="nav-dropdown-separator"></div><span class="nav-dropdown-label">Comprendre</span><a href="/cafe-moka/">Café moka</a><a href="/guides/cafetiere-italienne-vs-espresso/">Moka ou espresso ?</a>`});

  const care=navItem({href:'/accessoires/',label:'Entretien',active:accessory||maintenance,content:`<span class="nav-dropdown-label">Entretenir et dépanner</span><a href="/guides/nettoyer-cafetiere-italienne/">Nettoyer sa moka</a><a href="/guides/detartrer-cafetiere-italienne/">Détartrer</a><a href="/guides/changer-joint-cafetiere-italienne/">Changer le joint</a><a href="/guides/cafetiere-italienne-fuite-vapeur/">Fuite de vapeur</a><a href="/guides/cafetiere-italienne-cafe-amer-brule/">Café amer ou brûlé</a><div class="nav-dropdown-separator"></div><span class="nav-dropdown-label">Pièces et accessoires</span><a href="/accessoires/">Tous les accessoires</a><a href="/accessoires/adaptateur-induction-cafetiere-italienne/">Adaptateur induction</a><a href="/accessoires/joint-cafetiere-italienne/">Joint</a><a href="/accessoires/filtre-cafetiere-italienne/">Filtre</a><a href="/accessoires/pieces-detachees-bialetti/">Pièces détachées Bialetti</a>`});

  return `<header class="site-header"><div class="container header-row"><a class="brand" href="/"><img src="/assets/logo.svg" alt=""><span>Cafetière Italienne</span></a><nav class="site-nav nav" id="site-navigation" aria-label="Navigation principale">${comparisons}${brands}${capacities}${guides}${care}</nav><a class="header-cta" href="/#finder">Trouver ma moka</a><button class="menu-btn burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="site-navigation"><span class="burger-lines" aria-hidden="true"><span></span><span></span><span></span></span></button></div></header>`;
}

function routeFor(file){
  const relative=path.relative(root,file).split(path.sep).join('/');
  if(relative==='index.html')return '/';
  return `/${relative.replace(/index\.html$/,'')}`;
}

function collect(dir,files=[]){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(ignored.has(entry.name))continue;
    const absolute=path.join(dir,entry.name);
    if(entry.isDirectory())collect(absolute,files);
    else if(entry.isFile()&&entry.name==='index.html')files.push(absolute);
  }
  return files;
}

const oldShell=/<header class="site-header">[\s\S]*?<\/header><div class="quick-nav"><div class="quick-row">[\s\S]*?<\/div><\/div>/;
const currentShell=/<header class="site-header">[\s\S]*?<\/header>/;
let changed=0;

for(const file of collect(root)){
  const html=fs.readFileSync(file,'utf8');
  const replacement=headerFor(routeFor(file));
  let next=html;
  if(oldShell.test(next))next=next.replace(oldShell,replacement);
  else if(currentShell.test(next))next=next.replace(currentShell,replacement).replace(/<div class="quick-nav"><div class="quick-row">[\s\S]*?<\/div><\/div>/,'');
  else continue;
  if(next!==html){
    fs.writeFileSync(file,next);
    changed+=1;
  }
}

console.log(`Navigation statique appliquée à ${changed} page(s).`);