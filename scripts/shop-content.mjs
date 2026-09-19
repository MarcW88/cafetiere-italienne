import fs from 'node:fs';
import path from 'node:path';

const esc=value=>String(value??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const TYPE_BY_ID={
  'bialetti-moka-express':'classique',
  'bialetti-venus':'induction',
  'bialetti-moka-induction':'induction',
  'bialetti-brikka':'specifique',
  'bialetti-mini-express':'specifique',
  'alessi-9090':'design',
  'alessi-pulcina':'design',
  'alessi-la-cupola':'design',
  'ariete-1358a':'electrique',
  'ariete-1368':'electrique',
  'delonghi-alicia':'electrique'
};

const INDUCTION_BY_ID={
  'bialetti-moka-express':'non',
  'bialetti-venus':'oui',
  'bialetti-moka-induction':'oui',
  'bialetti-brikka':'selon-version',
  'bialetti-mini-express':'selon-version',
  'alessi-9090':'oui',
  'alessi-pulcina':'selon-version',
  'alessi-la-cupola':'selon-version',
  'ariete-1358a':'electrique',
  'ariete-1368':'electrique',
  'delonghi-alicia':'electrique'
};

const TYPE_LABEL={
  classique:'Classique',
  induction:'Induction',
  specifique:'Préparation spécifique',
  design:'Design',
  electrique:'Électrique'
};

export function renderShopContent(root){
  const registry=JSON.parse(fs.readFileSync(path.join(root,'.content/products/registry.json'),'utf8')).products;
  const affiliate=JSON.parse(fs.readFileSync(path.join(root,'.content/products/affiliate.json'),'utf8')).amazon_fr;
  const entries=Object.entries(registry);
  const brandOptions=[...new Set(entries.map(([,p])=>p.brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'fr'));

  const cards=entries.map(([id,p])=>{
    const type=TYPE_BY_ID[id]||'autre';
    const induction=INDUCTION_BY_ID[id]||'selon-version';
    const specs=(p.specs||[]).slice(0,3).map(item=>`<div class="shop-product__spec"><dt>${esc(item.label)}</dt><dd>${esc(item.value)}</dd></div>`).join('');
    const asin=(p.amazon?.asin||'').trim();
    const affiliateUrl=asin?`${affiliate.base_url.replace(/\/$/,'')}/dp/${asin}/ref=nosim?tag=${affiliate.tracking_id}`:'';
    const commerce=affiliateUrl
      ? `<a class="shop-product__buy" href="${esc(affiliateUrl)}" target="_blank" rel="sponsored nofollow noopener noreferrer" data-affiliate-link="amazon" data-product-key="${esc(id)}" data-placement="shop:catalogue">Voir le prix sur Amazon <span aria-hidden="true">↗</span></a><span class="shop-product__disclosure">Lien affilié — prix et disponibilité chez Amazon</span>`
      : '<span class="shop-product__unavailable">Aucun lien marchand vérifié actuellement</span>';
    const search=[p.name,p.brand,p.best_for,...(p.specs||[]).flatMap(s=>[s.label,s.value])].join(' ').toLowerCase();

    return `<article class="shop-product" data-shop-product data-brand="${esc((p.brand||'').toLowerCase())}" data-type="${esc(type)}" data-induction="${esc(induction)}" data-search="${esc(search)}">
      <div class="shop-product__visual" aria-hidden="true"><span class="shop-product__shape shop-product__shape--${esc(type)}"></span><span class="shop-product__brand">${esc(p.brand||'')}</span></div>
      <div class="shop-product__content">
        <p class="shop-product__meta">${esc(p.brand||'')} · ${esc(TYPE_LABEL[type]||'Modèle')}</p>
        <h2>${esc(p.name)}</h2>
        <p class="shop-product__best"><strong>Adapté à :</strong> ${esc(p.best_for)}</p>
        <dl class="shop-product__specs">${specs}</dl>
        <div class="shop-product__links">
          <a class="shop-product__review" href="${esc(p.internal_url)}">Lire notre analyse <span aria-hidden="true">→</span></a>
          <div class="shop-product__commerce">${commerce}</div>
        </div>
      </div>
    </article>`;
  }).join('\n');

  return `<section class="shop-hero">
    <div class="container shop-hero__inner">
      <div>
        <p class="shop-eyebrow">Boutique d’affiliation</p>
        <h1>Les cafetières italiennes déjà analysées sur le site</h1>
        <p class="lead">Retrouvez les modèles cités dans nos fiches et comparatifs. Filtrez-les selon votre plaque et votre besoin, consultez notre analyse, puis vérifiez le prix quand un lien marchand a été vérifié.</p>
      </div>
      <aside class="shop-hero__notice" aria-label="Fonctionnement de la boutique">
        <strong>La sélection reste éditoriale</strong>
        <p>Un produit apparaît ici parce qu’il est réellement traité sur le site, pas parce qu’un lien affilié est disponible.</p>
        <a href="/affiliation/">Comment fonctionne l’affiliation →</a>
      </aside>
    </div>
  </section>

  <section class="shop-catalogue" aria-labelledby="catalogue-title">
    <div class="container">
      <div class="shop-catalogue__heading">
        <div><p class="shop-eyebrow">Catalogue</p><h2 id="catalogue-title">Comparer les modèles</h2></div>
        <p><strong data-result-count>${entries.length}</strong> modèles affichés</p>
      </div>

      <form class="shop-filters" data-shop-filters aria-label="Filtrer les produits">
        <label class="shop-search"><span>Rechercher</span><input type="search" name="query" placeholder="Ex. Bialetti, inox, 6 tasses…" autocomplete="off"></label>
        <label><span>Marque</span><select name="brand"><option value="">Toutes les marques</option>${brandOptions.map(b=>`<option value="${esc(b.toLowerCase())}">${esc(b)}</option>`).join('')}</select></label>
        <label><span>Type</span><select name="type"><option value="">Tous les types</option><option value="classique">Classique</option><option value="induction">Induction</option><option value="specifique">Préparation spécifique</option><option value="design">Design</option><option value="electrique">Électrique</option></select></label>
        <label><span>Induction</span><select name="induction"><option value="">Tous</option><option value="oui">Compatible</option><option value="non">Non compatible</option><option value="selon-version">Selon version</option><option value="electrique">Électrique</option></select></label>
        <button type="reset">Réinitialiser</button>
      </form>

      <p class="shop-empty" data-shop-empty hidden>Aucun modèle ne correspond à ces filtres. Essayez d’élargir votre recherche.</p>
      <div class="shop-grid" data-shop-grid>${cards}</div>
    </div>
  </section>

  <section class="shop-help">
    <div class="container shop-help__inner">
      <div>
        <p class="shop-eyebrow">Avant d’acheter</p>
        <h2>La plaque et le volume comptent plus que la marque</h2>
        <p>Commencez par vérifier la compatibilité avec votre plaque et le volume réellement préparé. Le matériau, le design et les fonctions viennent ensuite.</p>
      </div>
      <a class="shop-help__link" href="/guides/comment-choisir-cafetiere-italienne/">Consulter le guide de choix <span aria-hidden="true">→</span></a>
    </div>
  </section>`;
}
