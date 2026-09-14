# AUDIT — detartrer-cafetiere-italienne

- URL: `/guides/detartrer-cafetiere-italienne/`
- Date: 14 septembre 2026
- Mode: `AUDIT` + correction ciblée
- Décision: `LIGHT_UPDATE`
- Confiance: élevée
- Robots: `noindex,follow` conservé
- Source de vérité: `scripts/guide-content-materials-care.mjs`
- Publication: validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant: `HOW_TO`.

Tâche lecteur: enlever des dépôts minéraux d’une moka sans confondre détartrage, nettoyage courant et panne mécanique.

Frontières conservées:

- nettoyage quotidien → `/guides/nettoyer-cafetiere-italienne/`;
- joint → `/guides/changer-joint-cafetiere-italienne/`;
- fuite / soupape → `/guides/cafetiere-italienne-fuite-vapeur/`;
- aucun classement produit ni recommandation affiliée sur cette page.

Le sujet peut rester générique dans le H1, mais la recette précise doit être explicitement limitée à la Bialetti Moka Express, seul modèle pour lequel le dosage détaillé est documenté ici.

## 2. Architecture et profondeur utile

Architecture conservée car elle répond correctement au HOW_TO. Correction apportée pour éviter une procédure trop linéaire:

1. réponse courte;
2. identification du modèle et du symptôme avant action;
3. rôle de la soupape;
4. procédure Moka Express;
5. moment opportun pour détartrer;
6. critère d’arrêt et passage au diagnostic;
7. distinction avec le nettoyage courant;
8. sources.

Ajout d’un tableau décisionnel avant la procédure afin de distinguer Moka Express, autre moka, problème de soupape et simples résidus de café.

## 3. Preuves et factualité

Claims centraux:

- la Moka Express peut être décalcifiée avec eau + deux cuillères à café d’acide citrique ou de vinaigre, cycle sans café, rejet de la solution et rinçage: documenté dans le manuel Moka Express utilisé comme source;
- la recette n’est pas généralisée aux autres moka;
- Bialetti documente le contrôle du petit piston de soupape et recommande de cesser l’utilisation si la soupape continue à relâcher vapeur/pression après vérification;
- aucune fréquence universelle de détartrage n’est inventée.

Provenance:

- la procédure précise reste sourcée sur une copie identifiable du manuel Moka Express;
- une source Bialetti first-party est désormais ajoutée pour la conduite à tenir concernant la soupape;
- le Zendesk Bialetti reste utilisé pour l’entretien courant.

Unknown conservé: aucune règle universelle de dosage/fréquence pour l’ensemble des moka n’est affirmée.

## 4. Valeur existante à préserver / content refresh

À préserver:

- distinction nettoyage / détartrage;
- absence de fréquence artificielle;
- prudence sur le modèle exact;
- rôle de la soupape;
- liens vers joint et fuite uniquement lorsque le problème devient mécanique;
- absence de faux test propriétaire.

La page n’avait pas besoin d’un `DEEP_REWRITE`.

## 5. Naturalité / humanizer / general-writing

Le texte reste direct et procédural, ce qui convient au sujet. La correction réduit le caractère générique de formulations comme « procédure pas à pas » en rattachant clairement chaque action à la Moka Express et à une décision préalable.

Aucune première personne ni expérience inventée. Pas de superlatifs, pas de remplissage introductif.

## 6. Anti-AI-slop / similarité cluster

Les composants visuels sont partagés avec les autres Guides, mais la logique éditoriale n’est pas un clone du guide Nettoyage:

- Nettoyage = routine après usage et contrôle courant;
- Détartrage = intervention ponctuelle sur dépôts minéraux + décision de sécurité.

Correction ajoutée: l’image BFL reçoit une légende explicite indiquant qu’elle est illustrative et ne constitue ni un test produit ni une procédure fabricant.

Aucune nouvelle FAQ ou section artificielle ajoutée pour atteindre un quota.

## 7. SEO / GEO / maillage

- H1 conserve l’intention générique « comment détartrer une cafetière italienne »;
- la réponse initiale précise immédiatement que la procédure détaillée concerne la Moka Express;
- meta description réécrite pour expliciter ce cadrage;
- entités et concepts: Bialetti, Moka Express, acide citrique, vinaigre, soupape, dépôts minéraux;
- maillage limité aux prochaines questions logiques: nettoyage, joint, fuite;
- aucun lien commercial ajouté.

## 8. Technique

- canonical attendu: `https://cafetiere-italienne.be/guides/detartrer-cafetiere-italienne/`;
- robots attendu: `noindex,follow`;
- source modifiée dans `scripts/guide-content-materials-care.mjs`;
- image request existante conservée en `GENERATED`; seule la légende éditoriale est ajoutée, aucun nouvel appel BFL requis;
- build, liens, validation Guide et rendu doivent être réexécutés après merge.

## 9. Blockers et corrections requises

Blockers identifiés pendant l’audit et corrigés dans cette passe:

- cadrage insuffisant Moka Express vs autres modèles → corrigé;
- dernière étape pouvant laisser croire à un café de rinçage inventé → corrigée;
- absence de critère d’arrêt si problème de soupape persistant → corrigée;
- source first-party insuffisante pour le comportement de sécurité de la soupape → ajoutée;
- image BFL non qualifiée comme illustration → légende ajoutée.

Point technique sitewide hors contenu de cette URL: la navigation « Entretien » utilise un état actif qui mérite une correction sémantique séparée; ce point ne justifie pas de bloquer la correction éditoriale de cette page.

## 10. Verdict et prochaine étape

`LIGHT_UPDATE` appliqué.

Attendu après machine/visual review: `PASS — READY_FOR_HUMAN_VALIDATION`.

Ne pas indexer automatiquement. Attendre validation humaine du rendu et du niveau éditorial.
