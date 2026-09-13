# PUBLISH_REVIEW — Comment utiliser une cafetière italienne ?

## Résultat
`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow`. Ce PASS n’autorise pas l’indexation sans validation humaine explicite.

## Audit amont
- Décision : `DEEP_REWRITE`
- Type dominant : `HOW_TO`
- Cause : URL existante réduite à un placeholder, sans procédure exploitable.

## Passes réellement effectuées

### Intention / frontière — PASS
- Tâche : permettre une préparation moka complète et exécutable.
- Le guide ne devient pas un comparatif produit.
- Dosage, mouture, choix du café, première utilisation, amertume et induction sont traités comme handoffs vers leurs pages dédiées.

### Fact-check — PASS
Claims centraux revérifiés après rédaction :
- eau sous la soupape sur Moka Express ;
- café non tassé ;
- fermeture avant chauffe ;
- feu doux à moyen ;
- flamme gaz contenue sous la cafetière ;
- retrait du feu dès que la préparation est terminée ;
- lavage à la main et eau tiède pour la Moka Express.

Sources principales : Bialetti et Alessi, consultées le 13 septembre 2026.

### Evidence / faux hands-on — PASS
- Aucun test personnel revendiqué.
- Aucun jugement sensoriel présenté comme mesure.
- Les effets gustatifs sont attribués ou renvoyés vers une page de diagnostic plutôt que décrits comme expérience propre.

### Affiliate value — PASS
- Page utile sans lien marchand.
- Aucun produit classé ou recommandé.
- Le raisonnement reste procédural et indépendant d’une conversion.

### Internal linking — PASS
Les liens servent les prochaines questions logiques : première utilisation, induction, dosage, mouture, fuite, amertume et nettoyage. Les cibles ont été vérifiées par `npm run check`.

### Humanizer / general writing / anti-AI-slop — PASS
- Architecture différente du guide de choix : progression procédurale plutôt que matrice de décision.
- Pas de FAQ générique ajoutée.
- Pas de nombre artificiel d’étapes imposé pour imiter un template.
- Répétitions limitées aux consignes critiques réellement nécessaires.

### SEO on-page / technique — PASS
- Title, description et H1 présents.
- Canonical : `https://cafetiere-italienne.be/guides/comment-utiliser-cafetiere-italienne/`
- Robots : `noindex,follow`.
- Une seule section de sources avec liens externes.
- Aucun lien interne cassé détecté.

### Validation machine — PASS
Exécuté sur la branche :
- `npm run build` → PASS ; 49 pages générées.
- `npm run check` → PASS ; 49 pages HTML, aucun lien interne cassé.
- `python3 validate_guide_quality.py` → PASS ; 2 Guides rédigés sans blocker machine.

## Risques résiduels
- Les notices spécifiques peuvent différer selon marque ou modèle ; cette limite est explicitement indiquée.
- Les futurs guides dosage/mouture devront éviter de réintroduire ici des valeurs universelles non démontrées.
- Les liens vers des guides encore placeholders sont utiles au parcours mais ces pages doivent rester non indexables tant qu’elles ne sont pas rédigées.

## Blockers
Aucun blocker identifié pour une validation humaine du contenu.
