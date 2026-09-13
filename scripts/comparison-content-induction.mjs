import { comparisonPages } from './comparison-content.mjs';

const table=(heads,rows)=>`<div class="table-wrap"><table class="guide-table"><thead><tr>${heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const sourceList=(items)=>`<section id="sources"><h2>Sources et méthode</h2><p>Cette page repose sur une recherche documentaire, pas sur un test physique réalisé par Cafetière Italienne. Les spécifications dures viennent en priorité des fabricants ; les sources indépendantes sont utilisées seulement pour les aspects d’usage qu’elles ont réellement observés.</p><ul class="source-list">${items.map(([label,url,note])=>`<li><a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>${note?` — ${note}`:''}</li>`).join('')}</ul></section>`;

const sources=[
  ['Bialetti — Venus Induction Copper','https://www.bialetti.co.nz/products/bialetti-venus-induction-copper','2 tasses non compatible induction ; 4 tasses 170 ml / base 9,5 cm ; 6 tasses 235 ml / base 10,5 cm'],
  ['Bialetti — Moka Induction Bi-Layer','https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black','2/4/6 tasses : 100/150/280 ml ; bases 9,5/10/11,5 cm'],
  ['Bialetti — Brikka Induction','https://www.bialetti.co.nz/products/bialetti-brikka-induction','4 tasses, environ 160 ml, base 11,5 cm et soupape Brikka'],
  ['BRA — Magna','https://braisogona.com/producto/cafetera-magna','inox 18/10, Full Induction, bases 9/9,3/11 cm en 4/6/10 tasses, lave-vaisselle'],
  ['Grønenberg — Espressokocher induction','https://groenenberg-coffee.de/products/espressokocher-induktion-4-tassen','4/6 tasses, 200/300 ml, zones induction minimales 9,5/10,5 cm, réducteur inclus'],
  ['Alessi — 9090','https://alessi.com/fr/products/9090-espresso-coffee-maker','1 tasse : 70 ml, diamètre 9,5 cm, plaque devant accepter au moins 90 mm'],
  ['Alessi — Vite','https://alessi.com/fr/products/vite-espresso-coffee-maker','3 tasses, 150 ml, fond acier magnétique, production démarrée en 2026'],
  ['Milu — Espresso Maker induction','https://milu-store.de/en/products/milu-espressokocher-induktion-geeignet-3-6-9-tassen-aluminium-mokkakanne-edelstahl-espressokanne-espresso-maker-set-inkl-loffel-burste-schwarz-6-tassen-300ml','6 tasses 300 ml et induction documentée, mais diamètre de base non publié sur la fiche consultée'],
  ['Selectos — test de 6 cafetières italiennes','https://selectos.eu/meilleures-cafetieres-italiennes/','New Venus 6 tasses jugée simple à préparer et nettoyer ; protocole de chauffe réalisé au gaz, donc non utilisé pour prouver les performances induction'],
  ['Trusted Shops — avis vérifiés Grønenberg','https://www.trustedshops.de/bewertung/info_X76A6BA471F73839D2D4A3C3AA91435B9.html','signal utilisateur sur l’usage et l’induction ; retours non parfaitement homogènes sur le réducteur']
];

const article=`
<section class="guide-answer">
  <span class="eyebrow">Réponse directe</span>
  <h2>Commencez par éliminer les mauvaises tailles, puis comparez les modèles</h2>
  <p><strong>Pour 4 ou 6 tasses, la Bialetti Venus est notre point de départ le plus facile à justifier</strong> : Bialetti documente précisément la compatibilité induction de ces deux tailles, leurs volumes et leurs bases de 9,5 et 10,5 cm. Pour un petit format, la logique change : la <strong>Venus 2 tasses n’est pas compatible induction</strong>, alors que la <strong>Moka Induction 2 tasses</strong> est annoncée compatible avec une base de 9,5 cm.</p>
  <p>Ce n’est toutefois pas un classement universel. Une <strong>BRA Magna</strong> devient plus cohérente si vous voulez de l’inox 18/10 et un modèle annoncé compatible lave-vaisselle ; une <strong>Grønenberg</strong> apporte un réducteur et un seuil de zone induction documenté ; l’<strong>Alessi 9090 1 tasse</strong> répond à un petit volume premium ; la <strong>Brikka Induction</strong> n’a de sens que si sa soupape spécifique fait partie de votre besoin.</p>
  <div class="guide-callout"><strong>Le point qui évite le plus d’erreurs :</strong> « compatible induction » ne suffit pas. Vérifiez la <strong>taille exacte</strong> de la moka et le <strong>diamètre minimal accepté par votre plaque</strong>.</div>
</section>

<section>
  <h2>Notre filtre en 3 étapes avant de comparer</h2>
  <ol>
    <li><strong>La variante exacte est-elle documentée pour l’induction ?</strong> Une gamme peut mélanger des tailles compatibles et non compatibles. La Venus en est l’exemple le plus clair : 4 et 6 tasses oui, 2 tasses non, selon Bialetti.</li>
    <li><strong>Votre zone de cuisson détectera-t-elle la base ?</strong> Bialetti demande de vérifier le manuel de la plaque. Grønenberg publie même un seuil minimal : 9,5 cm pour sa 4 tasses et 10,5 cm pour sa 6 tasses. Alessi demande, pour la 9090 1 tasse, une plaque capable de s’activer avec un objet d’au moins 90 mm.</li>
    <li><strong>Le volume correspond-il à ce que vous buvez réellement ?</strong> Deux modèles appelés « 6 tasses » peuvent produire des volumes différents : Bialetti annonce environ 235 ml pour Venus 6 et 280 ml pour Moka Induction 6 ; Grønenberg annonce 300 ml pour sa 6 tasses.</li>
  </ol>
  <p>Ce filtre est volontairement plus important que le matériau ou le design. Pour comprendre <em>pourquoi</em> une plaque peut refuser une petite moka, consultez notre <a class="text-link" href="/guides/cafetiere-italienne-induction-compatibilite/">guide de compatibilité induction</a>. Ici, nous nous concentrons sur le choix du produit.</p>
</section>

<section>
  <h2>Les variantes qui passent le filtre</h2>
  ${table(
    ['Modèle précis','Volume / taille','Base ou seuil induction','Construction','Ce qui change la décision'],
    [
      ['Bialetti Venus 4','≈ 170 ml','base ≈ 9,5 cm','inox 18/10','choix général compact, taille explicitement induction'],
      ['Bialetti Venus 6','≈ 235 ml','base ≈ 10,5 cm','inox 18/10','plus de volume ; test indépendant positif sur l’usage, mais réalisé au gaz'],
      ['Bialetti Moka Induction 2','≈ 100 ml','base ≈ 9,5 cm','base inox/aluminium + haut aluminium','petit format natif induction là où Venus 2 est exclue'],
      ['Bialetti Moka Induction 4','≈ 150 ml','base ≈ 10 cm','base inox/aluminium + haut aluminium','alternative hybride au format 4 tasses'],
      ['Bialetti Moka Induction 6','≈ 280 ml','base ≈ 11,5 cm','base inox/aluminium + haut aluminium','volume supérieur à Venus 6 selon les fiches consultées'],
      ['BRA Magna 4 / 6 / 10','4 / 6 / 10 tasses','bases induction 9 / 9,3 / 11 cm','inox 18/10','Full Induction et lave-vaisselle documentés'],
      ['Grønenberg 4 / 6','200 / 300 ml','zone ≥ 9,5 / 10,5 cm','inox 304/430','réducteur fourni et seuil de plaque publié'],
      ['Alessi 9090 1','70 ml','diamètre 9,5 cm ; plaque ≥ 90 mm','inox 18/10, fond magnétique','très petit format premium avec seuil explicite'],
      ['Bialetti Brikka Induction 4','≈ 160 ml','base ≈ 11,5 cm','inox + aluminium','soupape Brikka : choix spécialisé, pas défaut universel']
    ]
  )}
</section>

<section>
  <h2>Quel modèle choisir selon votre situation ?</h2>

  <h3>Vous préparez surtout 4 ou 6 tasses : Bialetti Venus</h3>
  <p>La Venus 4 ou 6 tasses est notre <strong>choix général</strong>, mais pour une raison plus précise que « c’est une Bialetti en inox ». Bialetti documente l’induction sur ces deux tailles, fournit le volume approximatif et la largeur de la base, et avertit explicitement de vérifier le diamètre accepté par la plaque. Cette transparence réduit le risque d’achat incompatible.</p>
  <p>Le test indépendant de Selectos apporte un élément complémentaire : la New Venus 6 tasses a été jugée particulièrement simple à préparer et à nettoyer. Nous ne transformons pas ce résultat en « preuve de performance induction », puisque leur protocole a utilisé une gazinière. Il sert seulement à consolider le jugement d’usage.</p>
  <p>Pour les détails de la gamme, voir notre <a class="text-link" href="/modeles/bialetti-venus/">fiche Bialetti Venus</a>. Si votre hésitation est surtout 4 contre 6 tasses, les pages <a class="text-link" href="/capacites/cafetiere-italienne-4-tasses/">4 tasses</a> et <a class="text-link" href="/capacites/cafetiere-italienne-6-tasses/">6 tasses</a> traitent spécifiquement le volume.</p>

  <h3>Vous voulez réellement 2 tasses sur induction : Moka Induction 2</h3>
  <p>C’est le cas où regarder uniquement le nom de gamme conduit le plus facilement à une erreur. La Venus 2 tasses est donnée comme non compatible induction par Bialetti. À l’inverse, la <strong>Moka Induction 2 tasses</strong> est annoncée compatible, pour environ 100 ml et une base de 9,5 cm.</p>
  <p>La réserve reste importante : une base compatible peut être trop petite pour certaines zones. Bialetti demande donc de contrôler le manuel de la plaque. Notre recommandation est « meilleure option documentée pour ce besoin », pas « fonctionnera sur absolument toutes les plaques ». Notre <a class="text-link" href="/capacites/cafetiere-italienne-2-tasses/">page 2 tasses</a> aide à vérifier si ce volume correspond vraiment à votre consommation.</p>

  <h3>Vous voulez inox intégral et lave-vaisselle : BRA Magna</h3>
  <p>La BRA Magna mérite d’entrer dans le comparatif parce qu’elle change réellement une décision. BRA annonce un corps en inox 18/10, un fond Full Induction et une compatibilité lave-vaisselle. La marque publie aussi le diamètre de la base induction : 9 cm en 4 tasses, 9,3 cm en 6 tasses et 11 cm en 10 tasses.</p>
  <p>La limite de notre preuve est également claire : la fiche consultée donne les tailles en tasses mais pas le volume en millilitres. Nous ne convertissons donc pas ces tailles en ml à partir d’une règle maison. Si le volume exact est votre critère principal, Venus, Moka Induction ou Grønenberg sont mieux documentées sur ce point.</p>

  <h3>Vous voulez pouvoir réduire occasionnellement la quantité : Grønenberg</h3>
  <p>Grønenberg documente deux variantes : 200 ml en 4 tasses et 300 ml en 6 tasses, avec des zones induction minimales respectives de 9,5 et 10,5 cm. Le fabricant fournit aussi un réducteur et un joint de rechange, et annonce une construction inox 304/430 compatible lave-vaisselle.</p>
  <p>Nous gardons néanmoins une réserve sur le réducteur : les avis vérifiés Trusted Shops sont globalement positifs sur les produits et l’usage, mais au moins un acheteur indique que le réducteur ne lui a pas convenu. C’est un bon exemple de différence entre <strong>fonction fournie</strong> et <strong>bénéfice garanti</strong>. Nous retenons la Grønenberg pour sa documentation induction et sa flexibilité potentielle, pas parce que le réducteur serait infaillible.</p>

  <h3>Vous cherchez un très petit objet premium : Alessi 9090 1 tasse</h3>
  <p>La 9090 1 tasse est un cas rare où le fabricant publie exactement l’information qui nous intéresse : 70 ml, diamètre 9,5 cm et avertissement de vérifier que la plaque s’active avec un objet d’au moins 90 mm. Le corps est en inox 18/10 avec fond magnétique ; le levier de fermeture et le bec anti-goutte font partie de sa conception.</p>
  <p>Nous ne la plaçons pas au-dessus des autres parce qu’elle est plus chère ou plus design. Elle devient pertinente uniquement si vous cherchez ce très petit volume et si l’objet lui-même justifie un positionnement premium.</p>

  <h3>Vous voulez précisément la logique Brikka : Brikka Induction 4</h3>
  <p>La Brikka Induction 4 tasses est documentée autour de 160 ml, avec une base d’environ 11,5 cm. Sa différence est sa soupape spécifique. Bialetti affirme qu’elle produit un café plus concentré que la Moka Express ; nous conservons cette formulation comme <strong>claim fabricant</strong>, pas comme résultat d’un test comparatif indépendant.</p>
  <p>Si la soupape Brikka ne fait pas partie de votre besoin, cette spécialisation n’est pas une raison suffisante pour la classer devant une Venus ou une Moka Induction.</p>
</section>

<section>
  <h2>Ce que nous avons volontairement écarté du verdict principal</h2>
  <p><strong>La Bialetti Moka Express classique</strong> et la <strong>Brikka classique</strong> ne fonctionnent pas directement sur induction. Si vous en possédez déjà une, un disque peut avoir du sens ; dans ce cas, consultez notre <a class="text-link" href="/accessoires/adaptateur-induction-cafetiere-italienne/">guide de l’adaptateur induction</a>. Pour un achat neuf, nous comparons d’abord les moka conçues pour l’induction.</p>
  <p><strong>La Mini Express Induction</strong> est bien une option Bialetti actuelle, mais son service direct dans deux tasses en fait un format assez différent pour ne pas la mélanger au noyau de cette comparaison.</p>
  <p><strong>L’Alessi Vite 3 tasses</strong>, lancée en 2026, est compatible induction grâce à son fond en acier magnétique et annonce 150 ml. Nous l’avons étudiée, puis laissée hors du verdict pratique : sa différence principale est aujourd’hui son langage de design. Elle sera plus utile dans le comparatif dédié au design.</p>
  <p><strong>La Milu 6 tasses</strong> est annoncée compatible induction et donnée pour 300 ml, mais la source fabricant consultée ne publie pas le diamètre de base. Comme le diamètre est précisément l’un des risques de cette requête, nous préférons ne pas la présenter comme référence tant que ce point n’est pas vérifiable avec le même niveau de précision.</p>
</section>

<section>
  <h2>Comment nous avons établi ces recommandations</h2>
  <p>Nous avons d’abord défini les critères, puis examiné les candidats. Il n’y a <strong>ni score au dixième, ni classement dicté par une commission d’affiliation</strong>. Une variante qui échoue au gate de compatibilité exacte ne peut pas gagner, même si sa marque ou son prix sont attractifs.</p>
  <p>Les fiches fabricants servent à vérifier les matériaux, volumes, diamètres et compatibilités. Elles ne suffisent pas à conclure qu’un produit est « plus agréable », « plus durable » ou « meilleur au quotidien ». Pour ces jugements, nous utilisons une source indépendante lorsque nous en avons une, ou nous nous abstenons.</p>
  <p>Des liens rémunérés pourront être présents sur le site. Ils ne changent ni le périmètre des candidats ni le verdict. Cette page doit rester utile si tous les liens marchands disparaissent.</p>
  <p><strong>Recherche mise à jour le 13 septembre 2026.</strong></p>
</section>

${sourceList(sources)}
`;

const aside=`
<h3>Avant d’acheter</h3>
<p><strong>1.</strong> Vérifiez la taille exacte, pas seulement le nom de gamme.</p>
<p><strong>2.</strong> Comparez le diamètre de base au minimum accepté par votre plaque.</p>
<p><strong>3.</strong> Choisissez au volume réel : « 6 tasses » ne donne pas le même nombre de ml selon les modèles.</p>
<p><a class="text-link" href="/guides/cafetiere-italienne-induction-compatibilite/">Comprendre la compatibilité →</a></p>
`;

const body=`<section class="page-hero"><div class="container"><div class="breadcrumbs"><a href="/">Accueil</a> · <a href="/comparatifs/">Comparatifs</a> · Cafetière italienne induction</div><span class="eyebrow">Comparatif induction · mise à jour 2026</span><h1>Cafetière italienne induction : quels modèles choisir ?</h1><p>Nous comparons les variantes exactes, leur volume et leur base — parce qu’une gamme dite « induction » peut contenir une taille qui ne fonctionnera pas sur votre plaque.</p></div></section><div class="container template-grid comparison-layout"><article class="content-main">${article}</article><aside><div class="sidebar-card"><span class="eyebrow">Contrôle de compatibilité</span>${aside}</div></aside></div>`;

comparisonPages['cafetiere-italienne-induction']={
  title:'Cafetière italienne induction : quels modèles choisir en 2026 ?',
  description:'Venus, Moka Induction, BRA Magna, Grønenberg ou Alessi : comparez les variantes, volumes et diamètres réellement documentés pour l’induction.',
  canonical:'/comparatifs/cafetiere-italienne-induction/',
  body
};
