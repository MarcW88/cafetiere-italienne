# CLUSTER_AUDIT — Comparatifs — workflow Bloc Notes exact

Date : 13 septembre 2026  
Site : `cafetiere-italienne.be`  
Scope : `/comparatifs/`  
Mode : `comparison-analysis-workflow / CLUSTER_AUDIT`

## Référence méthodologique

Cet audit remplace les audits et `PUBLISH_REVIEW` Comparatifs produits avant le port exact du workflow.

Référence upstream : `MarcW88/bloc-notes-numerique`  
Commit épinglé : `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`

Le workflow actif est désormais le workflow Bloc Notes vendored :

- `comparison-analysis-workflow` ;
- `comparison-content-workflow` ;
- `seo-content-audit` ;
- `seo-keyword` ;
- `jobs-to-be-done` ;
- `evidence-based-reviews` ;
- `fact-check` ;
- `affiliate-value` ;
- `content-brief-authoring` ;
- `content-and-copy` ;
- `humanizer` ;
- `general-writing` ;
- `anti-ai-slop` ;
- `seo-onpage` ;
- `seo-technical` ;
- `editorial-qa`.

La couche Cafetière reste limitée au mapping des URLs et produits, à la recherche métier moka, à l'affiliation, au statut de publication et au gate GEO/AEO complémentaire. Les anciens `PASS — READY_FOR_HUMAN_VALIDATION` Comparatifs sont **SUPERSEDED** et ne constituent plus une validation éditoriale.

Toutes les pages restent `noindex,follow`.

---

# 1. Résumé exécutif

Le cluster a **six intentions potentiellement distinctes**, mais aucune des six pages actuelles n'atteint le niveau éditorial du workflow Bloc Notes.

Le problème n'est pas principalement la factualité. Les pages actuelles contiennent plusieurs bons faits fabricants et quelques angles utiles. Le problème est la **qualité de la décision d'achat** : univers candidat trop vite fermé, faible triangulation de preuves, peu ou pas de tests indépendants dans le rendu, arbitrages trop courts, produits écartés rarement expliqués et structures trop proches d'une page à l'autre.

Le pattern dominant est :

`réponse courte → tableau/sélection → 2 à 4 blocs produits → sources fabricant → sidebar verdict`.

Cette architecture est répétée malgré des intentions très différentes. C'est exactement le type d'industrialisation que `anti-ai-slop` et le contrôle cluster du workflow Bloc Notes doivent détecter.

## Décisions

| URL | Décision | Confiance | Raison principale |
|---|---|---:|---|
| `/comparatifs/meilleure-cafetiere-italienne/` | **DEEP_REWRITE** | 0.95 | Comparatif général trop étroit et trop peu prouvé pour porter la recommandation principale du site. |
| `/comparatifs/cafetiere-italienne-induction/` | **DEEP_REWRITE** | 0.98 | Bon insight sur la détection, mais contenu publié très inférieur à la recherche nécessaire et univers candidat incomplet dans le rendu. |
| `/comparatifs/cafetiere-italienne-inox/` | **DEEP_REWRITE** | 0.97 | Trois produits seulement, deux marques, définition du périmètre inox insuffisante et aucune triangulation d'usage. |
| `/comparatifs/cafetiere-italienne-electrique/` | **DEEP_REWRITE** | 0.99 | Trois modèles face à un marché nettement plus large ; sélection actuelle non démontrée. |
| `/comparatifs/cafetiere-italienne-design/` | **DEEP_REWRITE** | 0.99 | 100 % Alessi : la page fonctionne aujourd'hui comme une extension de page marque, pas comme un vrai comparatif design. |
| `/comparatifs/petite-cafetiere-italienne/` | **DEEP_REWRITE** | 0.80 | Angle volume/détection utile, mais forte frontière à clarifier avec les pages Capacités et SERP plus ambiguë. |

Aucun `KEEP`, aucun `LIGHT_UPDATE`, aucun `MERGE` immédiat. La page `petite-cafetiere-italienne` doit néanmoins repasser un contrôle d'intention/cannibalisation avant rédaction ; si GSC montre qu'elle se confond avec `/capacites/cafetiere-italienne-2-tasses/`, un `MERGE` devra être reconsidéré.

---

# 2. Ce qu'il faut préserver

Même si les six pages partent en `DEEP_REWRITE`, plusieurs éléments actuels sont utiles :

- hiérarchiser **plaque de cuisson + volume réel** avant le style sur la page générale ;
- rappeler que **la compatibilité induction dépend de la variante/taille exacte et de la détection de la plaque**, pas seulement du mot « inox » ;
- éviter les promesses non prouvées du type « l'inox fait un meilleur café » ;
- distinguer une moka électrique d'une moka sur plaque par ses fonctions d'autonomie ;
- refuser un pseudo-score esthétique pour la page design ;
- raisonner en **volume réel**, pas en équation rigide « X tasses = X personnes » ;
- conserver une méthodologie desk-research honnête sans faux hands-on.

Ces éléments doivent devenir des briques d'une analyse beaucoup plus profonde, pas constituer à eux seuls le comparatif.

---

# 3. Findings transversaux

## 3.1 Scope produits trop vite fermé

Le workflow Bloc Notes n'impose pas l'exhaustivité, mais exige de considérer les candidats évidents susceptibles de changer le verdict.

Aujourd'hui, plusieurs pages passent directement d'une poignée de produits déjà connus à une recommandation. Il manque une vraie étape « candidats considérés / retenus / écartés » visible dans les artefacts et, lorsque décisionnel, dans la page.

Signaux marché vérifiés le 13/09/2026 :

- les SERP « meilleure cafetière italienne » exposent Bialetti mais aussi Milu, Groenenberg, Pulcina et d'autres alternatives ;
- les comparatifs induction concurrents citent notamment Venus, Moka Induction, BRA et Groenenberg ;
- la catégorie actuelle « cafetière italienne électrique » d'Idealo affiche environ 72 références et remonte Ariete, De'Longhi, Bialetti, Cilio, Rommelsbacher, etc. ;
- les résultats inox font apparaître, au-delà de Venus/Alessi, Ilsa, Barazzoni, Groenenberg et d'autres options ;
- l'univers design Alessi est très riche à lui seul, ce qui rend encore plus problématique une page « design » composée uniquement de quatre Alessi sans expliciter si l'intention est « design Alessi » ou « moka design toutes marques ».

Sources de contrôle marché :

- https://selectos.eu/meilleures-cafetieres-italiennes/
- https://meilleurtest.fr/comparatif-cafetiere-italienne/
- https://graindexpert.fr/blog/cafetiere-italienne-pour-induction
- https://ma-box-cafe.com/cafetiere-italienne-induction/
- https://www.idealo.fr/cat/14573F1925454/cafetieres-italiennes.html
- https://www.coffeeness.de/fr/cafetiere-italienne/
- https://alessi.com/fr/collections/coffee-makers

## 3.2 Evidence trop majoritairement Tier 1

Les fiches fabricants sont adaptées pour matériau, capacité, diamètre, compatibilité ou fonction. Elles ne suffisent pas à démontrer :

- facilité réelle d'utilisation ;
- ergonomie ;
- vitesse observée ;
- qualité de versement ;
- nettoyage réellement simple ;
- fiabilité/durabilité ;
- préférence gustative ;
- supériorité générale.

Le cluster doit utiliser `evidence-based-reviews` comme Bloc Notes : Tier 1 pour les specs, Tier 2/3 pour les jugements d'expérience lorsque ces jugements changent la recommandation. Par exemple, Selectos dispose d'un protocole de test comparatif sur plusieurs moka, dont la Venus, la Pulcina et la Moka Express. Ce type de source ne doit pas être utilisé pour inventer notre propre test, mais peut soutenir un arbitrage d'usage explicitement attribué.

## 3.3 Faible profondeur de décision

Les pages actuelles disent souvent « choisissez X si… », mais expliquent peu :

- pourquoi un candidat majeur n'est pas retenu ;
- quelle limite ferait réellement changer de produit ;
- quels critères sont éliminatoires et lesquels sont secondaires ;
- quelles différences sont seulement de design/positionnement ;
- ce que les sources ne permettent pas de conclure.

Le benchmark Bloc Notes va beaucoup plus loin : choix principal + alternatives + modèles reconsidérés + critères de bascule + limites + méthode + gaps de preuve.

## 3.4 Industrialisation éditoriale

Les six pages partagent une logique de rendu très proche : intro courte, « notre choix », tableau, quelques paragraphes, sources, verdict rapide. Les blocs ont une longueur et une fonction très similaires.

Le problème n'est pas l'existence de composants communs. Le problème est que **la pensée éditoriale semble suivre le même moule**, alors que :

- induction devrait s'organiser autour d'un gate de compatibilité variante × diamètre × plaque ;
- électrique devrait s'organiser autour des fonctions, du contexte sans plaque et de la disponibilité actuelle ;
- design devrait partir des familles/designers/objets et de leur compromis fonctionnel ;
- petite moka devrait partir du volume réellement bu puis du risque de détection ;
- meilleure moka devrait devenir l'arbre de décision central du cluster.

## 3.5 Affiliation encore séparée de la valeur éditoriale

Le moteur produit/affiliate de Bloc Notes est désormais porté, mais aucun module n'est approuvé sur ces pages tant que leur décision éditoriale n'est pas reconstruite.

C'est volontaire. Les liens affiliés et cartes produit doivent être ajoutés **après** la sélection indépendante, jamais servir à définir l'univers candidat. Les modules Bloc Notes sont limités à un module de décision par page, 2 à 3 produits selon le layout et liens `sponsored nofollow`.

## 3.6 GEO/AEO

Le workflow upstream Bloc Notes reste intact. Le site ajoute un gate GEO/AEO complémentaire après fact-check et avant PUBLISH_REVIEW :

- entités et variantes non ambiguës ;
- faits décisionnels extractibles ;
- attribution des faits critiques ;
- passages autonomes pouvant être cités sans perdre les conditions du verdict ;
- données structurées honnêtes ;
- aucun « contenu pour ChatGPT » artificiel.

Le GEO ne compense jamais une preuve faible.

---

# 4. Audit URL par URL

## 4.1 `/comparatifs/meilleure-cafetiere-italienne/`

### Rôle à conserver

Comparatif central / `BEST_OVERALL` : orienter un lecteur qui ne sait pas encore quelle famille de moka lui convient.

### Valeur actuelle à préserver

- plaque et volume placés tôt dans la décision ;
- distinction Moka Express / Venus / Moka Induction / 9090 ;
- prudence sur le goût ;
- lien logique vers les capacités et le guide de choix.

### Blockers

1. Univers de quatre familles trop petit pour justifier la page « meilleure » du site sans étape de candidats reconsidérés.
2. Les sources rendues sont presque uniquement fabricants.
3. « Moka Express = choix classique », « Venus = rationnel induction », « 9090 = premium » restent des jugements éditoriaux peu triangulés.
4. Peu de discussion des produits actuels concurrents hors Bialetti/Alessi.
5. Pas de bloc « modèles reconsidérés / pourquoi ils ne gagnent pas » comparable au benchmark Bloc Notes.
6. Page trop proche des sous-comparatifs : elle résume induction/inox/design au lieu de posséder une logique de décision centrale plus forte.

### Décision

**DEEP_REWRITE — confiance 0.95**

### Handoff production

Repartir de `comparison-content-workflow` avec un scope marché raisonnable, puis faire de cette URL un véritable arbre de décision : plaque → volume → priorité d'usage/entretien/design/fonction spécifique. Les sous-comparatifs doivent absorber les détails, la page générale doit expliquer les bascules.

---

## 4.2 `/comparatifs/cafetiere-italienne-induction/`

### Rôle à conserver

Comparatif `FEATURE_SPECIFIC` : acheter une moka réellement utilisable sur sa plaque induction.

### Valeur actuelle à préserver

- distinction fond magnétique / détection réelle ;
- nuance sur Venus 2 tasses ;
- attention au diamètre minimal ;
- séparation logique avec le guide technique induction.

### Blockers

1. Le rendu actuel reste centré sur cinq choix Bialetti/Alessi alors que le marché et les SERP exposent aussi BRA, Groenenberg et d'autres candidats crédibles.
2. Le contenu ne reflète pas la profondeur de recherche qui avait été commencée dans le JSON de travail : variantes exactes, diamètres et exclusions ne sont pas réellement portés dans la page.
3. Aucune source indépendante n'est visible dans le rendu ; les jugements restent essentiellement des conséquences de specs fabricant.
4. Le verdict Venus 4/6 arrive avant une démonstration suffisamment complète de l'univers candidat.
5. Les exclusions et evidence gaps sont trop peu visibles.

### Décision

**DEEP_REWRITE — confiance 0.98**

### Handoff production

Cette page peut être la première page test du workflow exact, mais elle doit être reconstruite depuis zéro : hard gate variante compatible → diamètre/base → volume → entretien/construction → fonctions spécialisées. L'ancien record de recherche peut servir de piste, pas de validation.

---

## 4.3 `/comparatifs/cafetiere-italienne-inox/`

### Rôle à conserver

Comparer les moka dont la construction inox est un critère d'achat majeur.

### Valeur actuelle à préserver

- refus du raccourci « inox = meilleur goût / plus sain » ;
- rappel « inox ≠ automatiquement induction » ;
- première distinction entre quotidien et premium.

### Blockers

1. Trois références seulement : Venus + deux Alessi.
2. Deux marques seulement, alors que les sources marché font apparaître Ilsa, Barazzoni, Groenenberg, Giannini/WMF selon disponibilité et périmètre.
3. Le terme « inox » n'est pas assez défini : corps ? chaudière ? trajet eau/café ? filtre ? fond magnétique ?
4. Aucun vrai arbitrage sur entretien, ouverture/fermeture, pièces, tailles ou fabrication lorsque ces éléments sont documentés.
5. Aucun test indépendant ou synthèse d'expérience ne soutient « quotidien », « pragmatique », « le moins de compromis ».
6. Risque de dériver vers un angle santé : toute affirmation sanitaire doit rester hors scope sans preuve de niveau suffisant.

### Décision

**DEEP_REWRITE — confiance 0.97**

### Handoff production

Définir d'abord l'éligibilité « inox » de la page. Construire ensuite un univers cross-brand et distinguer au minimum : choix rationnel, premium/design, tailles/induction et entretien. Les claims santé ne doivent jamais être un levier d'affiliation.

---

## 4.4 `/comparatifs/cafetiere-italienne-electrique/`

### Rôle à conserver

Comparer les moka avec base chauffante intégrée pour les usages sans plaque ou recherchant certaines automatismes.

### Valeur actuelle à préserver

- bon changement de critères : capacité, arrêt automatique, maintien au chaud, base ;
- distinction bureau/studio/résidence secondaire ;
- prudence sur le goût et l'absence de test propriétaire.

### Blockers

1. Trois modèles seulement, dont deux Ariete, alors que la catégorie marchande actuelle est beaucoup plus large.
2. Idealo remonte actuellement notamment Ariete 1358/1368, De'Longhi Alicia Plus/EMK, plusieurs Bialetti électriques, Cilio et Rommelsbacher : le scope actuel ne peut pas être présenté comme une sélection de marché sans examen.
3. Disponibilité/générations électriques évoluent vite ; le statut 2026 doit être vérifié modèle par modèle.
4. Pas de comparaison sérieuse sur fonctions réellement différenciantes : timer, maintien au chaud, arrêt, capacité ajustable, alimentation/transport, nettoyage, pièces.
5. Pas de preuves indépendantes sur commodité, ergonomie ou constance lorsque ces jugements deviennent décisionnels.

### Décision

**DEEP_REWRITE — confiance 0.99**

### Handoff production

Refaire le market scan avant le brief. Les fonctions doivent servir de critères avant toute recommandation. Les modèles historiques encore vendus mais mal documentés doivent être séparés des gammes réellement actuelles/supportées.

---

## 4.5 `/comparatifs/cafetiere-italienne-design/`

### Rôle potentiel

Comparer des moka où le design industriel, le designer et l'objet de table font réellement partie de la décision.

### Valeur actuelle à préserver

- pas de score esthétique pseudo-scientifique ;
- distinction entre design et qualité du café ;
- association designer/objet lorsque documentée.

### Blockers

1. Les quatre choix actuels sont Alessi : 9090, Vite, Pulcina, La Cupola.
2. Cela cannibalise conceptuellement `/marques/alessi/` et ressemble davantage à une sélection de la gamme Alessi qu'à un comparatif « cafetière italienne design ».
3. Même dans l'univers Alessi, la gamme actuelle est bien plus large : Menhir, La Conica, Moka de David Chipperfield, Ossidiana, etc. Le choix des quatre n'est pas suffisamment justifié.
4. Aucun scan cross-brand ne démontre pourquoi Giannini, Bialetti éditions design ou autres fabricants ne sont pas pertinents.
5. Les jugements « iconique », « contemporain », « sculptural » sont plausibles, mais la page doit relier davantage l'histoire/design documenté aux contraintes fonctionnelles et à la décision d'achat.

### Décision

**DEEP_REWRITE — confiance 0.99**

### Handoff production

Commencer par le `seo-keyword`/SERP : confirmer si la requête attend un comparatif cross-brand ou une sélection éditoriale d'objets. Si cross-brand, ouvrir réellement l'univers. Si la demande est dominée par Alessi, repositionner la page pour ne pas dupliquer la page marque.

---

## 4.6 `/comparatifs/petite-cafetiere-italienne/`

### Rôle potentiel

Comparer des petits formats adaptés à un faible volume quotidien, indépendamment de la numérotation commerciale « 1/2/3/4 tasses ».

### Valeur actuelle à préserver

- volume réel avant nombre de personnes ;
- problème spécifique des petits diamètres sur induction ;
- cas utile Venus 2 tasses / Mini Express Induction / 9090 1 tasse.

### Blockers

1. Frontière encore fragile avec `/capacites/cafetiere-italienne-2-tasses/` et `/capacites/cafetiere-italienne-4-tasses/`.
2. La SERP « petite cafetière » est plus large que les seules moka et mélange souvent capsules, filtre, portable et moka ; l'intention exacte de « petite cafetière italienne » doit donc être validée plutôt que supposée.
3. Scope actuel trop réduit et très Bialetti/Alessi.
4. Pas de critère d'encombrement réel/dimensions lorsque le mot « petite » peut désigner l'espace occupé, pas seulement le volume.
5. Peu de preuves indépendantes sur l'usage une-personne/deux-personnes.

### Décision

**DEEP_REWRITE — confiance 0.80**

### Handoff production

Avant le brief, exécuter un `seo-keyword` plus poussé et vérifier GSC si disponible. La page doit être maintenue seulement si elle sert une décision différente des pages Capacités : « petit appareil / faible volume / faible diamètre » plutôt que « fiche d'une contenance donnée ».

---

# 5. Architecture cible du cluster — sans imposer de template

Les six URLs peuvent rester, mais chacune doit avoir une fonction éditoriale propre :

- **meilleure** : arbre de décision central et sélection multi-profils ;
- **induction** : éligibilité technique par variante + choix après hard gate ;
- **inox** : périmètre matériau défini + cross-brand + conséquences pratiques ;
- **électrique** : fonction/autonomie/usage sans plaque + marché actuel ;
- **design** : design documenté + designers/familles + compromis fonctionnels ;
- **petite** : faible volume/encombrement + diamètre induction, sous réserve de différenciation SEO avec Capacités.

Ces rôles ne doivent pas produire six plans identiques. Le workflow doit accepter des structures radicalement différentes.

---

# 6. Priorités de reprise

Ordre recommandé :

1. **cafetière italienne induction** — meilleur stress-test du workflow : variantes exactes, preuves, diamètre, cross-brand et exclusions ;
2. **meilleure cafetière italienne** — à refaire ensuite avec les enseignements de l'univers produit consolidé ;
3. **inox** — nécessite un périmètre matériau propre et un market scan ;
4. **électrique** — nécessite le plus gros travail de fraîcheur/gamme ;
5. **design** — nécessite une vraie redéfinition du scope ;
6. **petite** — à produire seulement après validation de son indépendance vis-à-vis de Capacités.

---

# 7. Gates obligatoires pour chaque future page

Chaque `DEEP_REWRITE` devra produire, comme dans Bloc Notes :

1. AUDIT individuel à partir de ce handoff ;
2. query/intention et éventuel JTBD ;
3. candidate scope raisonnable + exclusions majeures ;
4. evidence brief avec niveaux de preuve ;
5. fact-check des claims décisionnels ;
6. affiliate-value : utilité sans liens commerciaux ;
7. content brief spécifique à l'URL ;
8. contenu bespoke dans le moteur Python, jamais un template de page ;
9. post-draft fact-check ;
10. humanizer + general-writing + anti-ai-slop ;
11. SEO on-page + SEO technique ;
12. GEO/AEO complémentaire ;
13. editorial QA ;
14. `validate_comparisons.py` + validateurs produit/affiliation applicables ;
15. `comparison-analysis-workflow / PUBLISH_REVIEW` au niveau de profondeur du benchmark Bloc Notes ;
16. validation humaine ;
17. indexation uniquement sur instruction explicite.

## Statut cluster

**FAIL — KEEP_NOINDEX** pour la publication actuelle des six pages.  
Les URLs sont conservées pour réécriture ; aucune suppression/redirection n'est décidée à ce stade.
