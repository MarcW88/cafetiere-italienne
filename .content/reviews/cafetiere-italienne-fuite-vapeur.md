# PUBLISH_REVIEW — cafetiere-italienne-fuite-vapeur

## 1. Statut

- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision actuelle : `DEEP_REWRITE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` à conserver
- Source de vérité finale pour cette URL : `scripts/apply-guide-fuite-vapeur-reviewed.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 2. Intent / rôle cluster

Intent : HOW_TO + diagnostic mécanique + sécurité.

Rôle unique : localiser une fuite ou une sortie de vapeur, distinguer jonction et soupape de sécurité, vérifier les causes documentées à froid et déterminer quand arrêter l’utilisation.

Frontières conservées :
- joint / remplacement → guide changement de joint ;
- dépôts → guide détartrage ;
- mouture → guide mouture ;
- séquence normale → guide utilisation ;
- achat de pièces → Accessoires.

## 3. Architecture / profondeur

La version initiale séparait déjà correctement jonction et soupape, mais restait trop courte pour un sujet sécurité.

Renforcé :
- stop chauffe + refroidissement avant démontage ;
- tableau symptôme → zone → premier geste ;
- fuite latérale : joint + portée + assemblage + restriction possible ;
- soupape active : possible blocage ou défaut de soupape ;
- circuit complet : filtre, entonnoir, colonne, mouture, tassage, niveau d’eau ;
- maintenance de soupape strictement bornée à la notice du modèle ;
- tartre traité comme facteur possible, jamais comme diagnostic automatique ;
- seuil explicite d’arrêt du dépannage maison ;
- raccourcis dangereux explicitement rejetés.

## 4. Evidence / factualité

PASS éditorial avant gates machine.

Claims principaux :
- fuite latérale → ring/joint + surfaces propres + assemblage + possibilité de blocage : Bialetti NZ troubleshooting ;
- soupape qui libère régulièrement vapeur / pression → possible obstruction ou soupape défectueuse : Bialetti NZ troubleshooting ;
- café non tassé, mouture medium-fine, eau sous soupape : Bialetti NZ usage / Moka Express ;
- petit piston : geste documenté uniquement sur les Bialetti concernées, jamais généralisé ;
- soupape encore active après contrôles → cesser immédiatement l’utilisation et faire contrôler : Bialetti NZ ;
- valve Alessi 19660 utilisée uniquement pour montrer la spécificité de pièce / modèle.

Aucune pression, température ou fréquence universelle inventée.

## 5. Existing value / content refresh

Valeur conservée :
- séparation jonction / soupape ;
- joint, résidus et assemblage ;
- non-tassement ;
- niveau d’eau ;
- arrêt si soupape persistante ;
- handoffs vers détartrage et joint.

Valeur ajoutée :
- circuit complet à inspecter ;
- notion de blocage ;
- interdiction claire d’ouverture à chaud ;
- distinction maintenance fabricant / bricolage ;
- seuil de sortie du dépannage domestique ;
- meilleure utilité sans dépendre d’un achat.

## 6. Naturalité / humanizer / general-writing

PASS éditorial.

Progression : arrêter → refroidir → localiser → contrôler le bon sous-système → réessayer seulement si autorisé → arrêter définitivement si la soupape persiste.

Le ton reste pratique et prudent, sans dramatisation ni faux vécu hands-on.

## 7. Anti-AI / comparaison cluster

PASS éditorial.

La page n’est pas une copie du guide joint : elle traite le joint comme une branche de diagnostic, pas comme la solution par défaut.

Elle n’est pas non plus un doublon du détartrage : le tartre reste une hypothèse secondaire et bornée.

Structure propre au risque mécanique : stop, localisation, circuit, soupape, escalade.

## 8. SEO / GEO / maillage

- title et H1 alignés sur fuite / vapeur ;
- meta orientée diagnostic + blocage + seuil d’arrêt ;
- entités : soupape, joint, filtre, entonnoir, colonne, mouture, blocage, pression ;
- maillage vers joint, mouture, détartrage et utilisation ;
- aucun CTA achat précoce ;
- `seo-keyword` limité qualitativement faute de GSC / volumes propres au site.

## 9. Technique

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/cafetiere-italienne-fuite-vapeur/` ;
- robots : `noindex,follow` ;
- build exécute `scripts/apply-guide-fuite-vapeur-reviewed.mjs` ;
- HTML final contient la nouvelle meta et le nouveau diagnostic ;
- aucun nouveau visuel BFL ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité HTML passante ;
- rendu visuel Guides valide.

## 10. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / contrôle | Statut | Note |
|---|---|---|
| `seo-content-audit` | PASS | profondeur sécurité insuffisante identifiée |
| `seo-keyword` | PASS avec limite | qualitatif, pas de GSC/volume propre au site |
| `search-intent` | PASS | diagnostic sécurité / fuite / soupape |
| `content-refresh` | PASS | bons fondamentaux conservés et approfondis |
| `fact-check` pré-rédaction | PASS | Bialetti + Alessi vérifiés le 14/09/2026 |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel |
| `affiliate-value` | PASS | utile avant toute logique d’achat de pièce |
| `content-brief-authoring` | PASS | evidence register + guardrails + seuil d’arrêt |
| `content-and-copy` | PASS | source JS reproductible dédiée |
| `fact-check` post-rédaction | PASS éditorial | claims bornés ; gates à confirmer |
| `internal-linking-audit` | PASS éditorial | joint / mouture / détartrage / utilisation |
| `humanizer` | PASS | ton concret, pas de pseudo-expertise |
| `general-writing` | PASS | ordre de diagnostic clair |
| `anti-ai-slop` | PASS | pas de FAQ artificielle ni remplissage |
| comparaison cluster | PASS | distinct du joint, détartrage et préparation |
| `seo-onpage` | PASS éditorial | title/meta/H1 cohérents ; HTML final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers, reproductibilité |
| `seo-best-practices` | PASS / applicable limité | structure naturelle et maillage contextuel |
| `seo-drift` | N/A | aucune baseline exploitable |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | visuel générique non probatoire sur sujet sécurité |
| `editorial-qa` | PASS éditorial | contenu et frontières validés ; gates à confirmer |

## 11. Blockers / corrections

Corrigés :
- soupape active traitée trop brièvement → diagnostic circuit complet ;
- absence d’interdiction explicite d’ouverture à chaud → stop ajouté ;
- joint trop proche d’une solution automatique → blocage et assemblage ajoutés ;
- manipulation du piston potentiellement généralisable → scoping strict Bialetti ;
- tartre trop direct → facteur possible, pas preuve ;
- seuil d’arrêt insuffisamment opératoire → critères explicites ;
- review précédente trop superficielle → trace skill par skill complète.

Blocker restant avant verdict final : confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu Guides.

## 12. Verdict

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.
