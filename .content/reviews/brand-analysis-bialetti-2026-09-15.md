# PUBLISH_REVIEW — `/marques/bialetti/`

## 1. Statut

- Date : 15 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Page type : `BRAND_HUB`
- Décision AUDIT : `DEEP_REWRITE`
- État : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance : élevée
- Robots : `noindex,follow` à conserver
- Source de vérité : `scripts/brand-content.mjs`
- Evidence brief : `.content/brands/bialetti.md`

## 2. Search intent / rôle

Intent : commercial investigation / orientation dans une gamme de marque.

Le lecteur ne cherche pas encore une fiche technique précise ; il veut comprendre **quelle logique Bialetti regarder** selon sa plaque, sa quantité habituelle et le type de moka souhaité.

Frontières :
- caractéristiques détaillées Moka Express / Venus / Moka Induction → `/modeles/` ;
- meilleure cafetière entre marques → `/comparatifs/` ;
- quantité → `/capacites/` ;
- induction détaillée → Guide + comparatif induction ;
- pièces compatibles → Accessoires.

## 3. Content audit / refresh

### Valeur conservée

- plaque et taille avant le nom du modèle ;
- exception Venus 2 tasses ;
- distinction Moka Express / Venus / Moka Induction / Brikka ;
- pièces détachées et générations ;
- absence de promesse gustative par matériau.

### Problèmes identifiés

- `Thin value` partiel : gamme ramenée à quatre familles malgré des branches fonctionnelles supplémentaires en 2026 ;
- `Weak structure` : liste de familles plus qu’un arbre de décision de marque ;
- `Outdated / incomplete range context` : Mini Express et Moka Exclusive Induction absentes du modèle mental ;
- `Generic prose` limité : quelques descriptions pourraient être interchangeables avec un comparatif de modèles ;
- `Trust gap` faible : sources présentes mais evidence ledger initial trop court.

Décision : révision majeure / `DEEP_REWRITE`, pas suppression.

## 4. Fact-check / evidence

Evidence brief détaillé créé avant rédaction.

Hiérarchie utilisée :
1. Bialetti officiel / distributeur officiel Bialetti NZ ;
2. source commerciale belge uniquement pour signaler une présence locale, jamais pour les specs ;
3. pas de tests indépendants nécessaires tant qu’aucun jugement expérientiel n’est publié.

Claims principaux à conserver bornés :
- Moka Express / Brikka classiques : pas induction directe ;
- Venus : inox 18/10, exception 2 tasses sur induction sur la fiche consultée ;
- Moka Induction : base bi-layer + haut aluminium ;
- Moka Exclusive classique vs Moka Exclusive Induction ;
- Mini Express classique vs Mini Express Induction ;
- Brikka classique vs Brikka Induction ;
- taille exprimée en petites tasses, volumes exacts variables selon famille ;
- diamètre du fond à vérifier sur induction ;
- pièces séparées par famille et parfois génération.

## 5. Evidence-based reviews

`N/A` dans le draft prévu.

Aucun verdict de qualité en tasse, de fiabilité, d’ergonomie ou de durabilité fondé sur un test tiers ou un faux hands-on.

Si le draft final introduit un jugement expérientiel, ce gate doit être réouvert.

## 6. Affiliate value

PASS éditorial avant draft final.

La valeur originale recherchée existe sans lien affilié :
- réduire le catalogue à des choix fonctionnels ;
- distinguer variante esthétique vs variante fonctionnelle ;
- éviter les erreurs d’induction et de taille ;
- expliquer la compatibilité des pièces et générations ;
- router vers la bonne page suivante seulement après le cadrage de marque.

## 7. Architecture spécifique à Bialetti

Le plan n’est pas repris d’Alessi.

Architecture retenue :
1. quatre décisions avant le modèle ;
2. gamme par logique d’usage ;
3. induction comme bifurcation principale ;
4. Brikka comme architecture distincte ;
5. Mini Express comme service direct ;
6. Exclusive / éditions comme distinction fonction vs design ;
7. taille réelle ;
8. pièces / générations ;
9. handoff vers fiches et comparatifs.

Chaque section est justifiée par un claim ou une décision du ledger.

## 8. Cluster similarity

PASS éditorial provisoire.

Bialetti doit rester une page de réduction de gamme par plaque / architecture / taille / pièces.

Alessi conserve une logique différente : collection de designers, matériaux, variantes et conséquences fonctionnelles du design. Le PUBLISH_REVIEW final doit comparer les deux architectures après rendu.

## 9. Naturalité / anti-AI

À contrôler après draft :
- éviter le rythme répétitif « modèle = pour qui » ;
- pas de tableau catalogue exhaustif ;
- pas de blocs symétriques avantages/inconvénients ;
- pas de conclusion générique ;
- pas d’histoire de marque décorative sans utilité ;
- pas de métadiscours SEO ou éditorial dans la prose.

## 10. Internal linking

Handoffs attendus uniquement lorsqu’ils répondent à la prochaine question :
- `/modeles/bialetti-moka-express/` ;
- `/modeles/bialetti-venus/` ;
- `/modeles/bialetti-moka-induction/` ;
- `/comparatifs/cafetiere-italienne-induction/` ;
- `/capacites/` ;
- `/accessoires/pieces-detachees-bialetti/` ;
- éventuellement `/comparatifs/meilleure-cafetiere-italienne/` si l’utilisateur hésite encore entre marques.

Aucun quota.

## 11. SEO / technique

À confirmer après CI :
- title / meta / H1 alignés ;
- canonical : `https://cafetiere-italienne.be/marques/bialetti/` ;
- robots : `noindex,follow` ;
- aucun placeholder ;
- liens internes valides ;
- sources externes présentes ;
- HTML reproductible depuis `scripts/brand-content.mjs` ;
- rendu visuel Brands valide.

## 12. Trace skill par skill

| Skill / contrôle | Statut actuel | Note |
|---|---|---|
| `content-audit` | PASS | fonction autonome confirmée ; récupération de la valeur existante |
| `search-intent` | PASS | BRAND_HUB / commercial investigation |
| `content-refresh` | PASS | deep rewrite justifié par gamme et architecture incomplètes |
| `fact-check` pré-draft | PASS | ledger détaillé créé |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel prévu |
| `affiliate-value` | PASS | valeur sans affiliation définie |
| architecture spécifique | PASS | plan fondé sur décisions + preuves |
| `content-and-copy` | PENDING | draft à produire |
| `fact-check` post-draft | PENDING | à exécuter après rédaction |
| `humanizer` | PENDING | après draft |
| `general-writing` | PENDING | après draft |
| `anti-ai-slop` | PENDING | après draft |
| cluster similarity | PASS provisoire | recontrôle après rendu |
| `internal-linking-audit` | PENDING | après draft |
| `seo-technical` | PENDING CI | canonical / robots / liens / reproductibilité |
| `seo-best-practices` | PENDING | règles HTML statique uniquement |
| `seo-drift` | N/A | aucune baseline exploitable |
| `editorial-qa` | PENDING | gate final |

## 13. Verdict

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Le verdict final ne pourra devenir `PASS — READY_FOR_HUMAN_VALIDATION` qu’après :
- draft final ;
- fact-check post-draft ;
- QA éditoriale complète ;
- validator Brand ;
- liens ;
- reproductibilité ;
- rendu visuel Brands.

Ne pas indexer automatiquement.
