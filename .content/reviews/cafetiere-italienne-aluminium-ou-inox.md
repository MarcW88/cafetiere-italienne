# AUDIT — cafetiere-italienne-aluminium-ou-inox

- URL: `/guides/cafetiere-italienne-aluminium-ou-inox/`
- Date: 14 septembre 2026
- Mode: `AUDIT` + `DEEP_REWRITE`
- Décision: `DEEP_REWRITE`
- Confiance: élevée
- Robots: `noindex,follow` conservé
- Source de vérité: `scripts/guide-content-materials-care.mjs`
- Publication: validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant: `CHOICE`.

Tâche lecteur: comprendre si l’aluminium ou l’inox constitue le meilleur choix pour sa situation, sans transformer le matériau en proxy de qualité, de goût ou de compatibilité.

Frontières conservées:

- choix général de la moka → `/guides/comment-choisir-cafetiere-italienne/`;
- compatibilité induction détaillée → `/guides/cafetiere-italienne-induction-compatibilite/`;
- sélection de modèles → `/comparatifs/`;
- entretien détaillé → `/guides/nettoyer-cafetiere-italienne/`.

L’ancienne version répétait trop le guide général `comment-choisir` et ne créait pas assez de valeur incrémentale pour justifier une URL dédiée.

## 2. Architecture et profondeur utile

L’architecture a été reconstruite autour de la décision réelle:

1. réponse courte: le matériau sert d’abord de filtre de compatibilité;
2. distinction explicite entre ce que le matériau peut expliquer et ce que seul le modèle peut confirmer;
3. cas aluminium avec la Moka Express;
4. cas inox avec la Venus puis la 9090;
5. décision lorsque les deux matériaux conviennent;
6. tableau situation → action;
7. raccourcis à éviter;
8. passage vers les comparatifs;
9. sources.

La page ne cherche plus à remplir symétriquement un bloc « aluminium » et un bloc « inox ». Elle apprend d’abord au lecteur à ne pas attribuer au matériau des propriétés qui appartiennent en réalité à une gamme ou à une variante précise.

## 3. Preuves et factualité

Claims centraux vérifiés:

- Moka Express = aluminium de qualité alimentaire;
- Moka Express classique = pas de compatibilité induction directe;
- Bialetti demande un lavage à la main à l’eau tiède pour la Moka Express;
- Venus = acier inoxydable 18/10;
- selon la fiche Bialetti consultée, Venus 4 et 6 tasses conviennent à l’induction alors que la 2 tasses n’y convient pas;
- Alessi 9090 = inox 18/10, fond magnétique et avertissement de détection minimale de 90 mm sur la version 1 tasse.

Aucune affirmation sanitaire ajoutée. Aucune promesse universelle de meilleur goût, de longévité ou de facilité d’entretien attribuée au seul matériau.

## 4. Valeur existante à préserver / content refresh

Préservé:

- priorité donnée à la plaque;
- avertissement `inox ≠ induction automatique`;
- exemples Moka Express et 9090;
- absence de ranking produit déguisé;
- lien vers le guide induction;
- passage vers les comparatifs uniquement après clarification du besoin.

Revu en profondeur:

- suppression de l’idée implicite que nombre de tailles, pièces ou facilité d’entretien seraient des propriétés du matériau;
- augmentation de la valeur par rapport au guide général `comment-choisir`;
- ajout d’un véritable arbitrage lorsque aluminium et inox sont tous deux compatibles.

## 5. Naturalité / humanizer / general-writing

Le texte adopte une logique de décision plutôt qu’une succession de blocs symétriques. Les transitions servent le raisonnement: plaque → matériau → modèle → arbitrage.

Suppression de la formulation méta « ce guide n’a trouvé aucune base solide » au profit d’une réponse directe au lecteur.

Aucun faux test, aucune première personne d’expérience, aucun superlatif non prouvé.

## 6. Anti-AI-slop / similarité cluster

Le risque principal était la duplication éditoriale avec `comment-choisir-cafetiere-italienne`, qui contenait déjà un bloc aluminium/inox d’un niveau proche.

La nouvelle version spécialise réellement l’URL:

- elle sépare propriétés du matériau et propriétés du modèle;
- elle utilise Venus pour montrer qu’une même famille inox peut changer de compatibilité selon la taille;
- elle garde la 9090 comme cas complémentaire de diamètre de détection;
- elle traite explicitement le cas où les deux matériaux restent possibles.

Les composants visuels partagés sont conservés, mais la logique éditoriale n’est plus un sous-ensemble du guide général.

## 7. SEO / GEO / maillage

- H1 conserve l’intention principale `cafetière italienne aluminium ou inox`;
- meta description réécrite pour promettre la distinction matériau/modèle;
- réponse principale immédiatement disponible;
- entités utiles: Moka Express, Venus, Alessi 9090, aluminium alimentaire, inox 18/10, induction, diamètre de détection;
- maillage limité au guide induction et aux comparatifs;
- aucun CTA affilié ajouté dans le corps décisionnel.

La nouvelle structure produit plusieurs unités de réponse citables: `inox ≠ induction`, `matériau vs modèle`, et `si les deux sont compatibles, comparez la référence précise`.

## 8. Technique

- canonical attendu: `https://cafetiere-italienne.be/guides/cafetiere-italienne-aluminium-ou-inox/`;
- robots attendu: `noindex,follow`;
- source modifiée: `scripts/guide-content-materials-care.mjs`;
- image BFL existante conservée sans nouvel appel;
- la requête image reçoit une légende persistante précisant qu’il s’agit d’une illustration générique et non d’une preuve de compatibilité;
- le heading `Ce que le matériau change vraiment` est conservé pour ne pas casser le placement éditorial existant.

## 9. Blockers et corrections requises

Blockers de l’ancienne version corrigés:

- valeur incrémentale trop faible par rapport au guide général → corrigée;
- confusion entre propriétés du matériau et propriétés du modèle → corrigée;
- arbitrage insuffisant lorsque les deux matériaux sont compatibles → corrigé;
- comparaison trop dépendante de Moka Express vs 9090 → Venus ajoutée comme cas Bialetti inox plus contrôlé;
- formulation méta sur le goût → corrigée;
- image BFL sans qualification visible → légende ajoutée dans la requête persistante.

Aucun blocker éditorial majeur restant identifié dans cette passe.

## 10. Verdict et prochaine étape

`DEEP_REWRITE` appliqué.

Attendu après build, machine review et visual review: `PASS — READY_FOR_HUMAN_VALIDATION`.

Ne pas indexer automatiquement. Attendre validation humaine du niveau éditorial et du rendu.
