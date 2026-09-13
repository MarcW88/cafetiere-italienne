# CLUSTER_AUDIT — /marques/

Date: 2026-09-13

## Décision

Les deux URLs ont un rôle autonome et ne doivent pas être fusionnées.

- `/marques/bialetti/` — `BRAND_HUB`, intention pratique : comprendre les grandes familles Bialetti, la compatibilité plaque/taille et l’écosystème de pièces.
- `/marques/alessi/` — `BRAND_HUB`, intention design/premium : comprendre les modèles, designers, matériaux, variantes induction et écarts de positionnement.

## Audit existant

Les deux pages sont des placeholders. Décision : `DEEP_REWRITE` avec confiance élevée.

## Risque d’industrialisation

Bialetti ne doit pas devenir un catalogue de modèles symétriques. La page doit partir du choix concret : plaque, taille, architecture de moka, pièces.

Alessi ne doit pas copier cette logique. La page doit partir du langage de design et des choix fonctionnels propres aux modèles, en expliquant quand l’induction exige une variante précise.

## Indexation

Conserver `noindex,follow` jusqu’au PASS machine, au `PUBLISH_REVIEW`, à la validation humaine explicite puis à une instruction distincte d’indexation.