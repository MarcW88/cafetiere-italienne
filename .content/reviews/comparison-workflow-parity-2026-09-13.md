# Audit de parité — workflow Comparatifs

Date : 13 septembre 2026  
Référence : `MarcW88/bloc-notes-numerique`  
Cible : `MarcW88/cafetiere-italienne`  
Scope : `comparison-analysis-workflow`, `comparison-content-workflow`, skills amont, configuration et chaîne d'exécution.

## Conclusion

**PARITÉ MÉTHODOLOGIQUE PARTIELLE — PARITÉ OPÉRATIONNELLE ÉCHOUÉE**

Les deux workflows user-facing présents dans `cafetiere-italienne` reprennent bien la méthode de `bloc-notes-numerique` avec adaptation du domaine. La stack de 14 skills spécialisés est également présente sous les mêmes noms et avec la même logique de réutilisation majoritaire.

En revanche, il n'est pas exact de dire que l'implémentation actuelle exécute exactement le même workflow. Des briques obligatoires de la chaîne Bloc Notes manquent ou ne sont pas appelées.

## Référence 80/20 de Bloc Notes

L'inventaire de référence du 9 septembre 2026 fixe une cible de **>= 80 % de méthodologie issue de skills existants**, avec une couche custom limitée à : orchestration ; crédibilité du scope/candidat ; critères avant recommandation ; verdict explicable et conditionnel ; similarité structurelle / industrialisation du cluster.

Le custom ne doit pas recréer les méthodes SEO, JTBD, evidence, fact-check, affiliation, brief, rédaction, humanisation, QA ou SEO technique.

## Stack de skills

Les 14 briques attendues existent dans les deux repos : `seo-content-audit`, `seo-keyword`, `jobs-to-be-done`, `evidence-based-reviews`, `fact-check`, `affiliate-value`, `content-brief-authoring`, `content-and-copy`, `humanizer`, `general-writing`, `anti-ai-slop`, `seo-onpage`, `seo-technical`, `editorial-qa`.

Les skills ne sont pas tous byte-for-byte identiques entre les deux repos. C'est cohérent avec le principe de Bloc Notes, dont l'inventaire marque déjà plusieurs skills comme `vendored + adapté` ou `adapté`.

Fichiers `SKILL.md` exactement identiques par blob Git au moment de l'audit : `anti-ai-slop`, `general-writing`, `humanizer`, `seo-technical`.

Variantes locales/adaptées présentes dans Cafetière Italienne : `seo-content-audit`, `seo-keyword`, `jobs-to-be-done`, `evidence-based-reviews`, `fact-check`, `affiliate-value`, `content-brief-authoring`, `content-and-copy`, `seo-onpage`, `editorial-qa`.

Les fichiers support du workflow Comparatifs suivants sont identiques à Bloc Notes : `comparison-workflow.config.example.yaml`, `comparison-brief-template.md`, `comparison-data-template.yaml`, `comparison-publish-gate-template.md`, `score_comparison.py`, `validate_comparison_data.py`.

## Blockers de parité opérationnelle

### 1. `comparison-workflow.config.yaml` absent à la racine

Bloc Notes possède un fichier de configuration actif qui fixe notamment la source d'orchestration GitHub, `min_existing_skill_share: 0.8`, la liste des skills amont, le scope exact du custom, les chemins `.content/comparisons`, le registre produit, le renderer generator-first, les règles de preuve, le draft `noindex,follow` et la séparation validation humaine / indexation.

Dans Cafetière Italienne, seul l'exemple de config situé dans le skill existe. Le fichier actif à la racine est absent.

**Impact : BLOCKER.** L'orchestration 80/20 n'est pas enforceable de la même manière.

### 2. Registre produit absent

Le workflow de référence pointe vers `.content/products/registry.json` pour les produits réels. Ce registre existe sur Bloc Notes et est absent de Cafetière Italienne.

**Impact : BLOCKER.** Les identités produit, générations, variantes et états de preuve ne disposent pas de source de vérité partagée.

### 3. Workflow GitHub copié mais moteur manquant

`.github/workflows/regenerate-comparisons.yml` appelle notamment `apply_comparison_content.py`, `comparison_content.py`, `comparison_pages.py`, `comparison_products.py`, `generate_comparison_metadata.py`, `apply_comparison_indexation.py`, `apply_product_cards.py` et `validate_product_cards.py`.

Ces briques existent dans Bloc Notes mais ne sont pas présentes dans Cafetière Italienne. Le workflow référence donc une chaîne qui n'est pas réellement portable/exécutable dans le repo actuel.

**Impact : BLOCKER.** Le fait que le YAML soit identique ne garantit pas l'exécution de la méthode.

### 4. Validateur local trop permissif

Le validateur actif `validate_comparisons.py` contrôle surtout la forme des records, robots/canonical, sources et faux hands-on. Il ne reconstruit pas la justification produit × critère attendue lorsque des recommandations structurées sont produites.

**Impact : MAJEUR.** Un PASS machine actuel ne vaut pas le PASS méthodologique du workflow de référence.

### 5. Source de vérité éditoriale différente

Bloc Notes possède une chaîne Python structurée autour de données, renderer bespoke/legacy et génération. Cafetière Italienne concentre actuellement les six pages dans `scripts/comparison-content.mjs`.

Ce choix technique n'est pas interdit en soi, mais il ne doit pas court-circuiter les records de preuve et les gates amont. C'est actuellement le cas.

## Décision

Avant toute réécriture des comparatifs :

1. considérer les anciens `PUBLISH_REVIEW PASS` du cluster comme **invalidés par dérive de workflow** ;
2. conserver toutes les URLs en `noindex,follow` ;
3. utiliser `bloc-notes-numerique` comme référence de méthode ;
4. rétablir la config active + le registre produit + une chaîne de validation réellement reliée aux records ;
5. conserver les adaptations métier cafetière uniquement dans la couche custom <=20 %, sans modifier les méthodes des skills amont pour reproduire localement ce qu'ils savent déjà faire.

Aucune page n'est modifiée par cet audit.
