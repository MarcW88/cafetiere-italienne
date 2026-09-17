# CLUSTER_AUDIT — /marques/

Date: 2026-09-17

## Décision

Les trois URLs ont un rôle autonome et ne doivent pas être fusionnées.

- `/marques/bialetti/` — `BRAND_HUB`, intention pratique : comprendre les grandes familles Bialetti, la compatibilité plaque/taille et l’écosystème de pièces.
- `/marques/alessi/` — `BRAND_HUB`, intention design/premium : comprendre les modèles, designers, matériaux, variantes induction et écarts de positionnement.
- `/marques/giannini/` — `BRAND_HUB`, intention architecture/usage : comprendre la fermeture non vissée de Giannina, la différence Tradizione/Restyling/Tua, les tailles réductibles et les limites réelles d’induction.

## Différenciation structurelle

Bialetti ne doit pas devenir un catalogue de modèles symétriques. La page part du choix concret : plaque, taille, architecture de moka, pièces.

Alessi ne doit pas copier cette logique. La page part du langage de design et des choix fonctionnels propres aux modèles, en expliquant quand l’induction exige une variante précise.

Giannini ne doit copier ni Bialetti ni Alessi. La page part du mécanisme de fermeture, de la logique Giannina vs Tua, du filtre réducteur et de la détection induction selon la taille.

## Risque d’industrialisation

Aucune page ne doit reprendre automatiquement le même nombre de sections, de familles, de modèles ou de liens internes. Les différences de structure doivent rester dictées par le research brief et les décisions qui changent réellement l’achat.

## Indexation

Conserver `noindex,follow` jusqu’au PASS machine, au `PUBLISH_REVIEW`, à la validation humaine explicite puis à une instruction distincte d’indexation.