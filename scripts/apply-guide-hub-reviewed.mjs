import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const page=path.join(root,'guides','index.html');
let html=fs.readFileSync(page,'utf8');

const title='Guides cafetière italienne : choisir, préparer et entretenir';
const description='Guides pratiques sur la cafetière italienne : choix, compatibilité, dosage, mouture, utilisation, nettoyage, détartrage et diagnostic.';

html=html.replace(/<title>.*?<\/title>/i,`<title>${title} | Cafetière Italienne</title>`);
html=html.replace(/<meta name="description" content="[^"]*">/i,`<meta name="description" content="${description}">`);
html=html.replace(/<meta name="robots" content="[^"]*">/i,'<meta name="robots" content="index,follow">');
if(/<link\b[^>]*rel="canonical"/i.test(html)){
  html=html.replace(/<link\b[^>]*rel="canonical"[^>]*>/i,'<link rel="canonical" href="https://cafetiere-italienne.be/guides/">');
}else{
  html=html.replace(/(<meta name="robots" content="index,follow">)/i,'$1<link rel="canonical" href="https://cafetiere-italienne.be/guides/">');
}

const main=`<main>
<section class="page-hero guide-hero"><div class="container"><div class="breadcrumbs"><a href="/">Accueil</a> · Guides</div><span class="eyebrow">Comprendre avant de choisir</span><h1>Guides cafetière italienne</h1><p>Choisir la bonne moka, comprendre ce qui change réellement le résultat et résoudre les problèmes courants. Les guides sont organisés par décision et par geste, pas comme une suite de sujets interchangeables.</p></div></section>

<section class="section guide-hub-group guide-hub-group--choose"><div class="container"><div class="section-head"><div><span class="eyebrow">01 · Choisir</span><h2>Partir des contraintes qui éliminent les mauvais choix</h2></div><p>Plaque, volume, matériau et café : commencez par les critères qui changent réellement la décision.</p></div><div class="guide-path" aria-label="Ordre conseillé pour choisir"><span>Plaque</span><i aria-hidden="true">→</i><span>Taille</span><i aria-hidden="true">→</i><span>Matériau</span><i aria-hidden="true">→</i><span>Modèle</span></div><div class="directory">
<a href="/guides/comment-choisir-cafetiere-italienne/">Comment choisir une cafetière italienne ? <span>→</span></a>
<a href="/guides/cafetiere-italienne-induction-compatibilite/">Vérifier la compatibilité induction <span>→</span></a>
<a href="/guides/cafetiere-italienne-aluminium-ou-inox/">Aluminium ou inox ? <span>→</span></a>
<a href="/guides/quel-cafe-pour-cafetiere-italienne/">Quel café choisir ? <span>→</span></a>
<a href="/guides/cafetiere-italienne-vs-espresso/">Moka ou espresso : quelle différence ? <span>→</span></a>
</div></div></section>

<section class="section guide-hub-group guide-hub-group--prepare"><div class="container"><div class="section-head"><div><span class="eyebrow">02 · Préparer</span><h2>Maîtriser la méthode avant d’ajuster la recette</h2></div><p>La procédure de base d’abord ; dosage et mouture ensuite, une variable à la fois.</p></div><div class="guide-path" aria-label="Étapes essentielles de préparation"><span>Eau</span><i aria-hidden="true">→</i><span>Café</span><i aria-hidden="true">→</i><span>Chauffe</span><i aria-hidden="true">→</i><span>Service</span></div><div class="directory">
<a href="/guides/comment-utiliser-cafetiere-italienne/">Comment utiliser une cafetière italienne ? <span>→</span></a>
<a href="/guides/premiere-utilisation-cafetiere-italienne/">Première utilisation <span>→</span></a>
<a href="/guides/dosage-cafe-cafetiere-italienne/">Comprendre le dosage <span>→</span></a>
<a href="/guides/mouture-cafetiere-italienne/">Choisir la mouture <span>→</span></a>
<a href="/guides/cafetiere-italienne-cafe-amer-brule/">Corriger un café amer ou brûlé <span>→</span></a>
</div></div></section>

<section class="section guide-hub-group guide-hub-group--care"><div class="container"><div class="section-head"><div><span class="eyebrow">03 · Entretenir & diagnostiquer</span><h2>Faire la différence entre entretien courant, tartre et panne</h2></div><p>Nettoyage, détartrage, joint et fuite ne répondent pas au même problème. Chaque guide isole le bon diagnostic avant l’action.</p></div><div class="guide-path" aria-label="Logique de diagnostic"><span>Symptôme</span><i aria-hidden="true">→</i><span>Contrôle</span><i aria-hidden="true">→</i><span>Action</span></div><div class="directory">
<a href="/guides/nettoyer-cafetiere-italienne/">Nettoyer sa moka <span>→</span></a>
<a href="/guides/detartrer-cafetiere-italienne/">Détartrer une cafetière italienne <span>→</span></a>
<a href="/guides/changer-joint-cafetiere-italienne/">Changer le joint <span>→</span></a>
<a href="/guides/cafetiere-italienne-fuite-vapeur/">Diagnostiquer une fuite de vapeur <span>→</span></a>
</div></div></section>
</main>`;

html=html.replace(/<main>[\s\S]*?<\/main>/i,main);
fs.writeFileSync(page,html);
console.log('PASS: hub Guides éditorial appliqué.');
