# Workflow decision — section /capacites/

Date : 13 septembre 2026
Site : cafetiere-italienne.be
Scope : `/capacites/`

## Décision

Le moteur principal recommandé pour `/capacites/` est le **Guide workflow de `MarcW88/bloc-notes-numerique`**, pas le Comparison workflow et pas le Usage workflow.

Référence upstream : `MarcW88/bloc-notes-numerique`
Commit de référence : `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`

Fichiers méthodologiques de référence :
- `.agents/skills/guide-analysis-workflow/SKILL.md`
- `.agents/skills/guide-content-workflow/SKILL.md`
- `.github/workflows/regenerate-guides.yml`
- `validate_guide_quality.py`
- moteur de génération / modules Guide appelés par `regenerate-guides.yml`
- product modules et indexation uniquement lorsque le workflow les appelle explicitement.

## Pourquoi Guide et non Usage

Les pages capacité répondent principalement à une **sous-question autonome de choix / mesure / format** :

- que signifie 2, 4, 6, 10 ou 12 tasses ?
- combien de millilitres cela représente-t-il réellement ?
- pourquoi le volume varie-t-il selon la gamme ?
- quel palier voisin devient plus logique ?
- que change une contrainte comme l'induction ?

Ce sont des tâches `CHOICE` / `EXPLAINER` au sens du Guide workflow.

Le Usage workflow de Bloc Notes est réservé à un **job complet avec circonstances, frictions et workflow d'usage**. Il interdit en outre le ranking produit et prévoit un handoff vers Comparatifs dès que la tâche devient « quel produit acheter ? ». Une taille de moka n'est pas, à elle seule, un JTBD complet.

## Frontière avec /comparatifs/

Une page `/capacites/` peut citer plusieurs modèles pour prouver que « 4 tasses » n'est pas un volume universel. Elle ne doit pas classer les modèles ni désigner un gagnant.

Dès qu'une section doit répondre à « quel modèle 4/6/10 tasses acheter ? », elle fait un handoff vers le Comparison workflow.

Exemples :
- compatibilité induction détaillée et choix de modèles → `/comparatifs/cafetiere-italienne-induction/` ;
- matériau / inox → `/comparatifs/cafetiere-italienne-inox/` ;
- meilleur modèle général → `/comparatifs/meilleure-cafetiere-italienne/`.

## Frontière avec /guides/

Les pages capacité peuvent renvoyer vers les guides procéduraux : dosage, utilisation, induction. Elles ne doivent pas réécrire ces procédures.

## Réutilisation 80/20

La production doit conserver le cœur Guide Bloc Notes comme upstream et limiter le custom à une extension capacité :

1. mapping `/capacites/` ;
2. volume réel / unité « tasse » ;
3. tailles voisines et disponibilité de gamme ;
4. diamètre / induction lorsque la taille le rend décisionnel ;
5. frontière avec Comparatifs ;
6. état de publication.

Aucune nouvelle méthode SEO, rédaction, evidence, affiliation ou anti-AI-slop ne doit être réinventée.

Skills attendus depuis le workflow Guide / stack déjà vendored :
- `seo-content-audit` — Rampstack ;
- `seo-keyword` — Rampstack ;
- `search-intent` ;
- `content-refresh` ;
- `fact-check` ;
- `evidence-based-reviews` — Rampstack, conditionnel ;
- `affiliate-value` ;
- `content-brief-authoring` — Rampstack ;
- `content-and-copy` — Rampstack ;
- `internal-linking-audit` ;
- `humanizer` — skill externe vendored ;
- `general-writing` — `msimchowitz/writing-skills` ;
- `anti-ai-slop` — skill externe vendored ;
- `seo-onpage` / `seo-technical` / `seo-best-practices` ;
- `editorial-qa`.

La couche GEO/AEO Cafetière peut être ajoutée après fact-check et avant PUBLISH_REVIEW, comme extension site-specific, sans modifier le cœur upstream.

## Règle de portage avant production

Avant toute réécriture de `/capacites/`, vérifier/corriger la parité du moteur Guide utilisé par le site : skills upstream, scripts réellement appelés, validateur et CI. Les adaptations Cafetière doivent être isolées autour du moteur, pas réécrire les skills upstream.

Ce document choisit le moteur. Il n'autorise aucune réécriture ni indexation.