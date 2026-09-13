# Inventaire des skills — workflow Comparatifs

Date : 13 septembre 2026  
Scope : `/comparatifs/`  
Cible : **>=80 % de méthodologie issue de skills existants**, custom <=20 %.

## Chaîne obligatoire

| Étape | Skill / mécanisme | Provenance | Rôle |
|---|---|---|---|
| Audit existant | `seo-content-audit` | `rampstackco/claude-skills` | valeur existante, cannibalisation, niveau de changement |
| Intent / cluster | `seo-keyword` | `rampstackco/claude-skills` | requête, SERP, rôle unique |
| Contexte d'usage | `jobs-to-be-done` | `wondelai/skills` | contraintes réelles qui changent le choix |
| Produits | registre + `evidence-based-reviews` | registre site + `rampstackco/claude-skills` | identité produit, variantes, candidats, preuves |
| Vérification | `fact-check` | workflow existant | modèle, génération, compatibilité, prix/disponibilité |
| Affiliation | `affiliate-value` | workflow affilié existant | utilité sans lien affilié, limites, indépendance du ranking |
| Brief | `content-brief-authoring` | `rampstackco/claude-skills` | décision, scope, critères, preuves, outline spécifique |
| Rédaction | `content-and-copy` | `rampstackco/claude-skills` | substance, arbitrages, voix |
| GEO/AEO | `geo-aeo-comparison` | adaptation MIT de `onvoyage-ai/gtm-engineer-skills/improve-aeo-geo` | citabilité, entités/variantes, attribution, fraîcheur, structure extractible |
| Humanisation | `humanizer` | skill externe déjà vendored | retirer prose artificielle sans inventer de faits |
| Édition finale | `general-writing` | `msimchowitz/writing-skills` | clarté et précision |
| Anti-AI slop | `anti-ai-slop` | skill externe déjà vendored | blocs clonés, symétrie, phrases creuses, structure interchangeable |
| Maillage | `internal-linking-audit` | skill externe déjà vendored | rôle des liens et frontières de cluster |
| SEO on-page | `seo-onpage` | `rampstackco/claude-skills` | title/meta/H1/contenu/ancres/schema honnête |
| SEO technique | `seo-technical` | skill externe déjà vendored | canonical, robots, crawlabilité, structured data |
| QA finale | `editorial-qa` | workflow existant | intention, factualité, utilité, naturel |

## Produit : source de vérité

`.content/products/registry.json` est obligatoire pour tout produit recommandé ou sérieusement comparé.

Le registre sert à distinguer :

- marque ;
- famille ;
- modèle ;
- taille / variante ;
- état de preuve ;
- source primaire.

La disponibilité d'un lien affilié n'est jamais un critère d'inclusion.

## GEO

Le workflow n'utilise pas une couche GEO maison complète. Il réutilise une adaptation ciblée d'un skill GitHub MIT existant et ne conserve que les contrôles pertinents aux comparatifs : réponse extractible, entités non ambiguës, attribution, fraîcheur, blocs citables et structured data honnête.

Le draft `noindex,follow` reste volontaire et n'est pas considéré comme un échec GEO.

## Custom <=20 %

Custom autorisé uniquement pour :

1. orchestration ;
2. sanity check du scope/candidats ;
3. critères et traçabilité du verdict comparatif ;
4. contrôle de similarité/cannibalisation du cluster ;
5. état de publication propre au site.

Le custom ne doit pas réimplémenter SEO, GEO, evidence review, JTBD, fact-check, affiliation, rédaction, humanisation, anti-slop, maillage ou QA.

## Gate machine

`validate_comparison_workflow.py` vérifie que les briques obligatoires sont présentes dans la config et dans les deux workflows, que les produits référencés existent dans le registre central et qu'une page ne peut passer à `READY_FOR_HUMAN_VALIDATION` sans review explicite :

`PRODUCTS`, `EVIDENCE`, `AFFILIATION`, `GEO`, `ANTI_AI_SLOP`, `SEO`, `INTERNAL_LINKING`, `TECHNICAL`, `EDITORIAL_QA`.
