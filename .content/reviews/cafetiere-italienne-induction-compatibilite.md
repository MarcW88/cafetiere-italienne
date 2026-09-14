# PUBLISH REVIEW — cafetiere-italienne-induction-compatibilite

- URL: `/guides/cafetiere-italienne-induction-compatibilite/`
- Date: 14 septembre 2026
- Mode: `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision d’origine: `DEEP_REWRITE`
- État après correction: `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale: élevée
- Robots: `noindex,follow` conservé
- Source de vérité: `scripts/guide-content-materials-care.mjs`
- Publication: validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant: `EXPLAINER + CHOICE`.

Tâche lecteur: déterminer si une moka précise fonctionnera réellement sur une plaque à induction et comprendre quoi vérifier lorsqu’une cafetière annoncée compatible n’est pas détectée.

Sous-questions confirmées lors de la recherche actuelle:

- compatibilité directe du modèle ;
- rôle du fond ferromagnétique ;
- seuil / limite de détection du foyer ;
- différence selon la taille exacte ;
- diagnostic quand le foyer refuse le récipient ;
- adaptateur pour une moka aluminium existante ;
- direct vs adaptateur.

Aucune donnée GSC ou volume propre au site n’est disponible dans cette passe. L’analyse keyword/intention est donc qualitative et fondée sur la requête, le cluster interne, les sources fabricants et les problèmes concrets documentés. Aucune donnée quantitative n’est inventée.

Frontières:

- matériau aluminium vs inox → `/guides/cafetiere-italienne-aluminium-ou-inox/` ;
- choix / classement de modèles → `/comparatifs/cafetiere-italienne-induction/` ;
- accessoire adaptateur en détail → `/accessoires/adaptateur-induction-cafetiere-italienne/` ;
- choix du volume → `/capacites/`.

## 2. Architecture et profondeur utile

L’ancienne version possédait le bon principe — compatibilité du fond + détection — mais restait trop courte pour diagnostiquer un cas réel.

Architecture finale:

1. réponse courte : deux validations indépendantes ;
2. référence et taille exactes ;
3. explication de la détection côté plaque ;
4. diagnostic si la moka n’est pas reconnue ;
5. rôle et limites d’un adaptateur ;
6. arbitrage modèle direct vs adaptateur ;
7. raccourcis à éviter ;
8. passage vers le comparatif induction ;
9. sources.

La page répond maintenant à la question `est-ce compatible ?` mais aussi à la question plus utile `pourquoi ma plaque ne la détecte-t-elle pas ?`.

## 3. Registre de preuves et factualité

Claims centraux vérifiés:

- la Moka Express classique n’est pas compatible directement avec l’induction ;
- la Moka Induction utilise une base bi-layer acier / aluminium conçue pour l’induction ;
- Bialetti demande malgré tout de vérifier que le diamètre de la base fonctionne avec la plaque utilisée ;
- la Venus 4 et 6 tasses est annoncée compatible induction sur la fiche consultée, la Venus 2 tasses ne l’est pas ;
- Siemens explique que chaque foyer possède une limite inférieure de détection dépendant notamment du diamètre de la partie ferromagnétique et du matériau du fond ;
- Siemens conseille d’utiliser le foyer dont la taille correspond le mieux au fond du récipient ;
- la 9090 1 tasse possède un fond magnétique mais Alessi demande de vérifier que la plaque peut s’activer avec un objet d’au moins 90 mm ;
- l’adaptateur Bialetti 13 cm est prévu pour permettre l’usage de cafetières aluminium sur induction ;
- pour cet adaptateur précis, Bialetti indique une limite jusqu’à 6 tasses, une puissance moyenne et l’interdiction de chauffer l’accessoire à vide.

Claims volontairement exclus:

- `inox = induction` ;
- un diamètre minimal universel ;
- `90 mm = règle générale` ;
- toutes les tailles d’une gamme ont la même compatibilité ;
- un test aimant comme preuve suffisante de compatibilité réelle ;
- adaptateur = compatibilité directe ;
- toute absence de détection = panne de la moka.

## 4. Valeur existante à préserver / content-refresh

Préservé:

- distinction fond compatible / diamètre détecté ;
- Moka Express comme contre-exemple ;
- Moka Induction comme exemple de construction adaptée ;
- Alessi 9090 comme exemple de limite de détection ;
- adaptateur comme alternative et non équivalence ;
- absence de ranking produit.

Ajouts justifiés:

- cas Venus 2 tasses pour démontrer la dépendance à la taille ;
- source plaque indépendante du fabricant de moka ;
- diagnostic pas à pas d’un échec de détection ;
- limites concrètes de l’adaptateur Bialetti ;
- maillage vers aluminium/inox et vers l’accessoire adaptateur ;
- brief enrichi avec registre de preuves claim par claim.

## 5. Naturalité / humanizer / general-writing

Le contenu a été relu comme parcours de diagnostic, pas comme succession de définitions.

Résultat:

- réponse courte avant les détails ;
- progression modèle → taille → plaque → diagnostic → alternative ;
- tableaux réservés aux décisions où ils améliorent la lecture ;
- absence de première personne artificielle ;
- aucune formule de remplissage du type « tout ce qu’il faut savoir » ;
- aucun superlatif ;
- chaque nuance technique est reliée à une décision pratique.

## 6. Anti-AI-slop / similarité cluster

Comparaison manuelle avec:

- `/guides/cafetiere-italienne-aluminium-ou-inox/` ;
- `/guides/comment-choisir-cafetiere-italienne/` ;
- `/accessoires/adaptateur-induction-cafetiere-italienne/` ;
- `/comparatifs/cafetiere-italienne-induction/`.

Rôle distinct:

- aluminium/inox explique le matériau et ses limites comme critère ;
- comment-choisir séquence tous les critères d’achat ;
- l’accessoire doit détailler le produit / usage adaptateur ;
- le comparatif sélectionne des modèles ;
- cette page fournit la méthode de compatibilité et de diagnostic.

La structure n’est pas un clone de la page aluminium/inox : elle est organisée autour d’un test de compatibilité et d’un problème de détection.

## 7. SEO / GEO / maillage

- H1: `Cafetière italienne et induction : comment vérifier la compatibilité ?` ;
- réponse immédiatement exploitable ;
- entités : Moka Express, Moka Induction, Venus, Alessi 9090, plaque induction, fond ferromagnétique, diamètre de détection, adaptateur ;
- sous-réponses citables : `deux validations`, `inox ≠ induction`, `pas de diamètre universel`, `taille exacte`, `direct vs adaptateur` ;
- maillage vers aluminium/inox au moment de la confusion matériau ;
- maillage vers l’adaptateur quand le lecteur possède déjà une moka non compatible ;
- comparatif induction uniquement après résolution du problème de compatibilité ;
- aucune FAQ ajoutée mécaniquement.

## 8. Technique

Attendus après CI:

- canonical: `https://cafetiere-italienne.be/guides/cafetiere-italienne-induction-compatibilite/` ;
- robots: `noindex,follow` ;
- HTML généré depuis `scripts/guide-content-materials-care.mjs` ;
- liens internes valides ;
- sources externes HTTPS ;
- reproductibilité du HTML ;
- aucun nouvel asset BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | ancienne version correcte mais trop courte pour diagnostiquer un échec réel ; `DEEP_REWRITE` appliqué |
| `seo-keyword` | PASS avec limite | topic et sous-intentions validés qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | compatibilité + taille + détection + diagnostic + adaptateur couverts |
| `content-refresh` | PASS | valeur existante préservée ; manque de diagnostic complété |
| `fact-check` pré-rédaction | PASS | registre de preuves persistant dans le brief |
| `evidence-based-reviews` | N/A | aucune expérience produit ou hands-on revendiquée |
| `affiliate-value` | PASS | la page reste utile sans lien marchand et permet une décision autonome |
| `content-brief-authoring` | PASS | brief enrichi avec tâche, thèse, preuves, scope, risques, frontières et maillage |
| `content-and-copy` | PASS | correction portée dans la source JS |
| `fact-check` post-rédaction | PASS éditorial | nouveaux claims reliés à Bialetti, Alessi et Siemens ; CI à confirmer |
| `internal-linking-audit` | PASS éditorial | liens vers matériau, adaptateur et comparatif placés selon la prochaine question logique |
| `humanizer` | PASS | parcours de diagnostic naturel, sans méta-discours ni remplissage |
| `general-writing` | PASS | formulation concrète, nuances conservées |
| `anti-ai-slop` | PASS | pas de symétrie artificielle, pas de FAQ générique, structure fonctionnelle |
| comparaison cluster | PASS | rôle distinct des guides choix/matériau, accessoire et comparatif |
| `seo-onpage` | PASS éditorial | title/meta/H1/intention cohérents ; rendu à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, HTML et reproductibilité à confirmer |
| `seo-best-practices` | PASS / applicable limité | aucune règle additionnelle justifiant une modification |
| `seo-drift` | N/A | aucune baseline exploitable avant/après |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | aucun visuel supplémentaire requis pour cette intention décisionnelle |
| `editorial-qa` | PASS éditorial | intention, valeur, factualité, naturel et frontières validés ; machine/visuel à confirmer |

## 10. Blockers et corrections requises

Blockers éditoriaux précédents corrigés:

- guide trop court pour diagnostiquer une absence de détection → corrigé ;
- dépendance au diamètre expliquée mais sans source plaque → corrigée avec Siemens ;
- absence d’un exemple montrant une différence de taille dans une même gamme → corrigée avec Venus ;
- adaptateur trop générique → corrigé avec limites documentées du modèle Bialetti ;
- maillage insuffisant vers matériau et accessoire → corrigé ;
- brief trop court pour tracer la preuve → corrigé.

Blocker restant avant verdict final:

- confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu avant d’inscrire un PASS technique.

## 11. Verdict et prochaine étape

État actuel: `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :

- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.
