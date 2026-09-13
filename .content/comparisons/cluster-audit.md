# CLUSTER_AUDIT — /comparatifs/

Date de recherche : 2026-09-13

## Décision générale

Les six URLs ont des décisions suffisamment distinctes pour rester séparées. Aucun MERGE recommandé.

| URL | Rôle unique | Décision audit |
|---|---|---|
| `/comparatifs/meilleure-cafetiere-italienne/` | Choisir la meilleure moka selon le profil global : plaque, taille, matériau, simplicité, budget relatif | DEEP_REWRITE |
| `/comparatifs/cafetiere-italienne-induction/` | Choisir une moka réellement détectable par une plaque induction | DEEP_REWRITE |
| `/comparatifs/cafetiere-italienne-inox/` | Choisir une moka dont le corps principal est en inox, avec attention au fond et aux tailles | DEEP_REWRITE |
| `/comparatifs/cafetiere-italienne-electrique/` | Choisir une moka autonome avec base électrique, sans plaque de cuisson | DEEP_REWRITE |
| `/comparatifs/cafetiere-italienne-design/` | Choisir une moka où le design et l'objet de table comptent réellement | DEEP_REWRITE |
| `/comparatifs/petite-cafetiere-italienne/` | Choisir un petit format pour 1 à 2 personnes sans surdimensionner | DEEP_REWRITE |

## Risque de cannibalisation

- `meilleure` ne doit pas absorber les détails techniques de l'induction, de l'inox ou de l'électrique : elle sert d'orientation générale et renvoie vers les comparatifs spécialisés.
- `induction` est défini par la compatibilité réelle avec la plaque, pas par le matériau seul.
- `inox` est défini par le matériau et l'entretien ; il peut inclure des modèles induction, mais son verdict n'est pas fondé uniquement sur la plaque.
- `design` privilégie le dessin, l'objet et les finitions ; il ne doit pas recopier le classement général.
- `petite` se concentre sur le volume réellement préparé et le diamètre de base, particulièrement important sur induction.
- `électrique` forme un univers distinct : pas de plaque, fonctions électriques et disponibilité différente.

## Constat SERP

La requête générale recycle fréquemment Bialetti Moka Express, Venus et Brikka. La page `meilleure` ne doit donc pas se différencier en ajoutant artificiellement plus de produits, mais en expliquant clairement quand chaque solution devient la meilleure. Les pages spécialisées doivent utiliser des critères différents et pouvoir aboutir à des verdicts différents.

## Règles de cluster

1. Pas de score numérique obligatoire.
2. Pas de bloc produit cloné d'une page à l'autre.
3. Pas de « meilleur » universel lorsque la plaque ou le volume change la décision.
4. Les specs officielles soutiennent les faits ; elles ne prouvent pas une sensation d'usage.
5. Aucun faux hands-on.
6. Prix : ne pas figer de prix marchand dans le contenu principal ; mentionner seulement un positionnement relatif lorsqu'il est décisionnel.
7. Toutes les pages restent `noindex,follow` jusqu'à validation humaine explicite.
