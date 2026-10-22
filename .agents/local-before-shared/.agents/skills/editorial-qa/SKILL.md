---
name: editorial-qa
description: Gate éditorial final pour les contenus de cafetiere-italienne.be après fact-check, humanisation, anti-AI, SEO et contrôle technique. Ne remplace pas les passes spécialisées.
license: MIT
---

# Editorial QA — cafetiere-italienne.be

Utiliser comme dernière QA générique. Cette passe ne réécrit pas la page sauf correction locale évidente.

## Gate 1 — Intention
PASS si la page a une intention primaire claire, répond assez tôt et ne conserve pas de sections sans fonction.

## Gate 2 — Valeur originale
PASS si le contenu apporte un raisonnement propre au-delà des sources fabricant/marchand, reste utile sans affiliation et n'invente aucune expérience first-hand.

## Gate 3 — Factualité
PASS si les claims importants ont traversé `fact-check`, les inconnues sont qualifiées, les instructions fabricant restent dans leur portée et les comparaisons sont prouvées ou présentées comme jugement éditorial.

## Gate 4 — Français naturel
PASS si le texte se lit naturellement, évite les formules génériques, la symétrie mécanique, les transitions répétitives et les conclusions qui paraphrasent l'introduction.

## Gate 5 — SEO / rôle de page
PASS si title, H1, sujet, maillage et URL restent cohérents, sans cannibalisation nouvelle ni keyword stuffing. Pour les Guides, vérifier la frontière avec Capacités, Café moka, Comparatifs, Marques/Modèles et Accessoires.

## Gate 6 — Utilité lecteur
Question finale : **la page serait-elle encore utile si tous les liens affiliés disparaissaient ?**

Vérifier aussi :
- le lecteur comprend mieux, sait agir ou sait décider ;
- les limites/contre-indications importantes sont visibles ;
- les détails décisifs sont faciles à trouver ;
- une vraie information a été ajoutée, pas seulement une nouvelle formulation.

## Gate 7 — Décision image éditoriale
Exécuter `editorial-image-planner` lorsque le besoin d'image est pertinent.

PASS si une décision explicite existe :
- `NOT_NEEDED` ;
- `PENDING` pour un visuel BFL générique à faible risque ;
- `BLOCKED` lorsqu'une vraie image produit/pièce/marque est nécessaire.

Ne jamais générer une image juste pour remplir la page ni l'utiliser comme preuve technique.

## Gate 8 — Traçabilité Guide
Pour `/guides/`, vérifier que `.content/reviews/<slug>.md` suit le standard complet de `guide-analysis-workflow`: intention, architecture, preuves, conservation, naturalité, anti-AI/similarité, SEO/maillage, technique, blockers et verdict.

Une review réduite à quelques puces ne suffit pas pour déclarer un Guide prêt.

## Output

### PASS
- `PASS`
- améliorations principales constatées ;
- risques résiduels ;
- handoff vers `PUBLISH_REVIEW` si Guide.

### FAIL
- `FAIL`
- gates en échec ;
- blockers concrets ;
- skill/passe vers lequel revenir.

Un FAIL ne déclenche jamais automatiquement une full rewrite.
