# Comparison CLUSTER_AUDIT — `/comparatifs/`

Date : 13 septembre 2026  
Workflow : `comparison-analysis-workflow` — mode `CLUSTER_AUDIT`  
Référence méthodologique : `MarcW88/bloc-notes-numerique`  
Scope : 6 URLs + hub  
Indexation pendant l'audit : **aucun changement — conserver `noindex,follow`**

> Cet audit remplace le précédent diagnostic de cluster comme référence de travail. Il n'autorise aucune réécriture, aucun merge d'URL et aucune indexation.

## Résumé exécutif

Décisions sur les 6 pages : **KEEP 0 · LIGHT_UPDATE 0 · DEEP_REWRITE 6 · MERGE 0 · NOINDEX 0 comme décision éditoriale définitive**.

Le hub `/comparatifs/` possède un rôle navigationnel valable et peut être conservé structurellement, mais son contenu devra être revu après correction des six pages filles.

La raison principale n'est pas que les intentions sont mauvaises. Les six URLs répondent à des décisions commerciales distinctes et peuvent coexister. Le problème est que la version actuelle ne fournit pas la profondeur de **sélection, preuve et explicabilité** attendue par le workflow Comparatifs de référence.

Les anciens `PUBLISH_REVIEW PASS` du cluster ne doivent plus être considérés comme fiables : l'audit de parité du workflow a montré que Cafetière Italienne possède les deux orchestrateurs et la stack de skills, mais pas toute la chaîne opérationnelle utilisée par Bloc Notes.

---

# 1. Gate préalable — parité du workflow

## Décision : FAIL opérationnel

Le workflow méthodologique est bien adapté depuis Bloc Notes et conserve le principe **>=80 % de méthodologie issue de skills existants / custom limité à l'orchestration et aux règles propres au cluster**.

Cependant, la chaîne d'exécution actuelle de Cafetière Italienne n'est pas encore équivalente :

- `comparison-workflow.config.yaml` manque à la racine ;
- `.content/products/registry.json` manque ;
- le workflow `regenerate-comparisons.yml` référence plusieurs scripts du moteur Bloc Notes absents du repo ;
- `validate_comparisons.py` est plus permissif que la chaîne de validation de référence ;
- `scripts/comparison-content.mjs` concentre directement le contenu rendu et peut court-circuiter les records de preuve.

Conséquence : **aucune page Comparatif ne doit être réécrite avant réalignement de cette chaîne**. Le présent audit est analytique uniquement.

---

# 2. Architecture du cluster — les URLs méritent-elles d'exister ?

## `/comparatifs/meilleure-cafetiere-italienne/`

Rôle distinct à conserver : comparaison générale destinée au lecteur qui sait déjà qu'il veut une moka mais ne sait pas quelle famille/modèle choisir. Cette URL doit arbitrer les contraintes qui changent vraiment la décision : plaque, volume utile, type de construction, simplicité, réparabilité/disponibilité des pièces et niveau de gamme.

## `/comparatifs/cafetiere-italienne-induction/`

Rôle distinct à conserver : sélectionner des modèles réellement adaptés à l'induction **dans la taille concernée**. Le guide induction explique la technologie ; le comparatif sélectionne les produits.

## `/comparatifs/cafetiere-italienne-inox/`

Rôle distinct à conserver : choisir entre des moka dont la construction inox est réellement pertinente pour l'achat. Le guide aluminium/inox explique les matériaux ; le comparatif doit établir quels produits inox méritent d'être retenus et pourquoi.

## `/comparatifs/cafetiere-italienne-electrique/`

Rôle distinct à conserver : choisir une moka autonome avec chauffe électrique, sans plaque de cuisson. L'univers, les critères et les compromis diffèrent suffisamment des moka stovetop.

## `/comparatifs/cafetiere-italienne-design/`

Rôle potentiel distinct à conserver, **à condition de redevenir un vrai comparatif de marché** et non une vitrine de gamme Alessi. Le mot “design” doit être transformé en critères explicables avant la sélection.

## `/comparatifs/petite-cafetiere-italienne/`

Rôle distinct à conserver uniquement si la page répond à **quel petit modèle acheter ?** Les pages Capacités expliquent la taille/volume ; le comparatif sélectionne des produits compacts réels.

**Pas de merge recommandé à ce stade.**

---

# 3. Findings transversaux

## 3.1 Sourcing des candidats — FAIL

Le workflow de référence ne demande pas un univers exhaustif, mais impose de vérifier les candidats capables de changer le verdict et de documenter les exclusions.

Les records actuels sautent trop vite de quelques produits connus à une recommandation : `meilleure` 4 candidats ; `induction` 5 ; `inox` 3 ; `électrique` 3 ; `design` 4, tous Alessi ; `petite` 4.

Aucun registre produit partagé ni exclusion log robuste ne montre que les alternatives pertinentes ont été examinées puis écartées pour une raison liée à l'intention. Le problème n'est donc pas “il faut toujours plus de produits”, mais qu'on ne peut pas démontrer que les produits non retenus n'auraient pas changé la recommandation.

## 3.2 Registre produit et variantes — FAIL

L'absence de `.content/products/registry.json` rend fragile le suivi du modèle exact, de la génération, de la taille, des matériaux, de la compatibilité induction par taille, de l'état de gamme, de la source primaire et des pièces associées. Pour une moka, la taille peut modifier l'éligibilité d'une gamme entière.

## 3.3 Preuve produit × critère — FAIL

Les records actuels possèdent des critères et des liens fabricants, mais pas une matrice de preuve permettant de suivre chaque recommandation jusqu'aux faits qui la soutiennent.

Des formulations telles que “choix le plus simple”, “meilleur choix quotidien”, “voie rationnelle”, “meilleur choix compact” ou “polyvalent” demandent davantage qu'une fiche fabricant. Une source constructeur peut confirmer une matière ou une compatibilité ; elle ne suffit pas à prouver la simplicité d'usage, la durabilité réelle ou la supériorité quotidienne.

## 3.4 Ranking explicable — FAIL

Plusieurs pages rangent les produits de 1 à N alors que le record ne contient ni justification détaillée produit × critère ni trace claire de la façon dont les arbitrages ont été obtenus.

Le workflow de référence n'oblige **ni scoring, ni poids, ni classement numérique**. Mais dès qu'un classement est publié, son verdict doit être reconstructible à partir de l'intention, des candidats éligibles, des critères définis avant le vainqueur, des preuves, des limites et des données manquantes.

## 3.5 Sources — insuffisamment diversifiées pour les jugements

La majorité des preuves sont des fabricants/distributeurs officiels. C'est la bonne source pour les specs, pas pour tous les jugements comparatifs.

Le futur workflow devra appliquer `evidence-based-reviews` proportionnellement au claim : sources primaires pour specs ; preuve indépendante ou observation directe documentée pour comportement réel/ergonomie ; conclusion éditoriale explicitement dérivée des critères.

## 3.6 Couverture marché 2026 — à réouvrir

Une vérification de marché actuelle montre que certaines catégories sont plus larges que les records. L'induction et l'inox présentent des alternatives hors Bialetti/Alessi ; Ariete documente une gamme électrique plus large que les deux références retenues ; la page design est exclusivement Alessi alors que d'autres propositions design existent.

L'objectif n'est pas d'importer automatiquement ces produits. Ils doivent être examinés **uniquement s'ils peuvent changer la décision**.

## 3.7 Industrialisation éditoriale — FAIL / MAJEUR

Les six pages ont des textes différents, mais le renderer actuel les ramène fréquemment au même squelette : verdict immédiat, tableau, 2–4 explications, limites, sources et sidebar “Verdict rapide”.

Des composants visuels communs sont normaux. Le problème est que l'architecture éditoriale paraît encore déterminée **avant** l'analyse propre à la requête.

Les architectures devraient pouvoir diverger fortement : gate d'éligibilité sur induction ; familles/designers sur design ; fonctions d'autonomie sur électrique ; volume + diamètre + encombrement sur petite ; arbre de décision sur meilleure.

## 3.8 Frontières inter-clusters — globalement bonnes, mais à renforcer

Pas de cannibalisation structurelle qui justifie actuellement un merge, mais plusieurs pages doivent expliciter leur rôle pour ne pas refaire les Guides ou Capacités : induction vs guide compatibilité ; inox vs guide aluminium/inox ; petite vs capacités ; meilleure vs guide “comment choisir”.

## 3.9 Faux hands-on — PASS

Aucune page ne revendique actuellement de test physique propriétaire comme s'il avait eu lieu. Cette prudence doit être conservée.

## 3.10 Affiliation — PASS structurel / à revalider en production

Les records déclarent `affiliate_commission_used_in_ranking: false`. Le prochain cycle devra également vérifier que le choix des candidats n'est pas limité aux produits affiliables.

## 3.11 Technique / robots — PASS

Les pages restent `noindex,follow`, avec canonical et structure technique de base. Aucun changement d'indexation n'est autorisé par cet audit.

---

# 4. Décision URL par URL

## 4.1 `/comparatifs/meilleure-cafetiere-italienne/`

**Décision : DEEP_REWRITE — confiance HIGH**

À préserver : verdict conditionnel, distinction Moka Express / Venus / Moka Induction / 9090, priorité plaque + volume, absence de claim gustatif pseudo-scientifique.

Blockers : univers limité à quatre références sans exclusion log ; pas de registre partagé ; classement sans chaîne de preuve produit × critère ; preuves presque exclusivement officielles ; jugements “simple/par défaut” insuffisamment documentés ; architecture trop proche des pages spécialisées.

Direction : réouvrir l'univers de manière contrôlée, déterminer les vraies familles de décision puis construire un **arbre de choix**. Pas de ranking numérique obligatoire.

## 4.2 `/comparatifs/cafetiere-italienne-induction/`

**Décision : DEEP_REWRITE — confiance HIGH**

À préserver : compatibilité de la taille exacte, cas Venus 2 tasses, diamètre minimal de détection, diversité des profils fonctionnels/premium/spécialisés.

Blockers : univers principalement Bialetti/Alessi ; pas d'exclusion log ; ranking non suffisamment justifié ; statut d'éligibilité à définir taille par taille ; manque de preuves indépendantes pour les jugements d'usage.

Direction : commencer par un **gate d'éligibilité induction** (base + taille + diamètre/détection + documentation), puis comparer uniquement les produits qui le passent.

## 4.3 `/comparatifs/cafetiere-italienne-inox/`

**Décision : DEEP_REWRITE — confiance HIGH**

À préserver : refus des claims santé/goût non prouvés ; inox ≠ induction automatique ; séparation avec le guide aluminium/inox.

Blockers : trois candidats et deux marques seulement ; absence de définition d'inclusion assez stricte ; alternatives non documentées comme incluses/exclues ; “meilleur quotidien” non prouvé ; design potentiellement surpondéré pour une requête matériau.

Direction : définir d'abord **ce qui compte comme moka inox**, sourcer l'univers, puis construire les critères réellement utiles.

## 4.4 `/comparatifs/cafetiere-italienne-electrique/`

**Décision : DEEP_REWRITE — PRIORITÉ ÉLEVÉE — confiance HIGH**

À préserver : distinction grand/petit format ; arrêt automatique / maintien au chaud / base ; prudence sur disponibilité De’Longhi.

Blockers : univers trop court par rapport aux gammes officielles ; modèles Ariete supplémentaires non inclus/exclus ; disponibilité géographique/génération à vérifier ; ranking principalement basé sur specs constructeur ; état De’Longhi insuffisamment daté/normalisé.

Direction : construire l'univers depuis les gammes électriques actuelles et normaliser capacité, puissance, automatismes, base, matériau, disponibilité et limites.

## 4.5 `/comparatifs/cafetiere-italienne-design/`

**Décision : DEEP_REWRITE — PRIORITÉ TRÈS ÉLEVÉE — confiance HIGH**

À préserver : refus d'un score pseudo-scientifique ; approche conditionnelle par langage formel ; distinction entre les modèles Alessi existants.

Blockers majeurs : **100 % des candidats actuels sont Alessi** ; aucun protocole de sourcing n'explique l'exclusion des autres marques ; “design” n'est pas assez opérationnalisé avant sélection ; risque de confondre renommée, prix premium et valeur fonctionnelle ; galerie commentée plus que décision comparée.

Direction : définir avant les candidats les dimensions qui rendent le design décisionnel, puis rechercher des candidats multi-marques. Verdict par famille esthétique/usage probablement préférable à un n°1.

## 4.6 `/comparatifs/petite-cafetiere-italienne/`

**Décision : DEEP_REWRITE — confiance HIGH**

À préserver : volume réel ; diamètre sur induction ; refus de généraliser une compatibilité de gamme ; séparation potentielle hors-induction/induction.

Blockers : univers limité à quatre propositions ; chevauchement avec `/capacites/2-tasses/` et `/capacites/4-tasses/` ; ranking peu explicable ; pas de règle claire sur “petite” (volume/dimensions/encombrement/poids) ; manque de preuve d'usage indépendante.

Direction : définir le job **préparer un petit volume avec un appareil réellement compact**, puis utiliser volume utile, dimensions, plaque, simplicité et disponibilité. Renvoyer vers Capacités pour l'explication des tailles.

---

# 5. Priorités de correction

## P0 — avant toute page

Rétablir la parité opérationnelle avec Bloc Notes : config active, registre produit, génération reliée aux records, validation de preuve/ranking et PUBLISH_REVIEW réellement indépendant de la rédaction.

## P1 — risques de décision les plus forts

- `cafetiere-italienne-design` : scope produit biaisé marque ;
- `cafetiere-italienne-electrique` : univers actuel incomplet ;
- `cafetiere-italienne-induction` : éligibilité taille/plaque peut invalider directement un achat ;
- `meilleure-cafetiere-italienne` : future référence de navigation décisionnelle, sans devenir un template pour les autres.

## P2

- `cafetiere-italienne-inox` : élargir/justifier l'univers et définir l'inclusion ;
- `petite-cafetiere-italienne` : renforcer la frontière avec Capacités et le concept de “petite”.

Les priorités ne déclenchent aucune production automatiquement.

---

# 6. Décision finale du CLUSTER_AUDIT

Le cluster `/comparatifs/` **mérite d'exister sous ses six intentions actuelles**, mais **aucune des six pages n'est aujourd'hui au niveau du workflow Comparatifs de référence**.

Diagnostic final : **6 × DEEP_REWRITE · 0 × MERGE · 0 × KEEP**. Toutes les pages restent `noindex,follow`. Aucun ancien PASS ne doit servir à autoriser une indexation.

Le prochain travail sur ce cluster doit être **workflow-first**, puis page par page avec `AUDIT` → recherche/candidats/preuves → `comparison-content-workflow` → `PUBLISH_REVIEW`.
