---
name: site-design-review
description: Auditer le design et l’implémentation frontend de cafetiere-italienne.be afin de détecter les interfaces génériques ou manifestement assemblées à partir de conventions automatiques, les défauts UX, les problèmes de confiance éditoriale, d’accessibilité et de cohérence. Utiliser pour les audits de pages, composants, captures, previews et pull requests frontend. Ne pas utiliser pour les contenus SEO seuls ou le backend sans interface.
---

# Audit design du site

Effectuer une revue exigeante et contextualisée du frontend. Le but n’est pas de maximiser la décoration, mais de produire un média spécialisé crédible, distinctif et utile.

Ce skill est l’orchestrateur design existant du dépôt. Ne pas créer un nouveau skill ou workflow de design pour accomplir une étape déjà couverte ici ou dans `anti-ai-slop`.

Avant l’audit :

1. lire `DESIGN.md` ;
2. inspecter les composants, styles et tokens réellement présents ;
3. charger les briques existantes d’`anti-ai-slop` utiles au contrôle :
   - `.agents/skills/anti-ai-slop/protocols/output_design_review_gate.md` ;
   - `.agents/skills/anti-ai-slop/checklists/global_ai_smell_checklist.md` ;
   - `.agents/skills/anti-ai-slop/checklists/remediation_patterns.md` ;
4. si le site peut être lancé, analyser les rendus réels plutôt que le code seul.

Ne pas recopier ces méthodologies dans ce fichier. Elles restent les sources transversales du contrôle anti-générique.

## Portée

Déterminer si la demande concerne :

- une page ou un composant ;
- une pull request ou un diff ;
- une revue globale ;
- une capture d’écran ou une preview ;
- une validation avant publication.

Ne pas étendre l’audit à tout le site lorsqu’une modification locale suffit. Pour une revue globale, couvrir les familles réellement présentes dans le dépôt : accueil, comparatifs, guides, marques, modèles, capacités, accessoires, café moka et pages de confiance.

## Vérification visuelle

Une revue frontend complète inclut un rendu réel. Utiliser l’intégration Playwright du dépôt avant de conclure sur le responsive, les débordements, la densité, les états interactifs ou la hiérarchie visuelle.

Pour auditer une famille de pages ou lancer des routes précises, lire [references/playwright-visual-check.md](references/playwright-visual-check.md), exécuter le script indiqué, puis inspecter les captures générées avec un outil de lecture d’image. Le fichier `report.json` sert de diagnostic complémentaire ; ne pas le traiter comme un jugement esthétique.

Pendant la vérification :

1. lancer le site avec les commandes définies par le projet ;
2. examiner au minimum un viewport mobile et un viewport desktop ;
3. parcourir les états interactifs importants, notamment le menu mobile et les outils interactifs présents sur la route ;
4. vérifier le reflow, le focus clavier, les débordements, les contrôles accessibles et les contenus tronqués ;
5. comparer la page aux règles de `DESIGN.md` ;
6. appliquer le gate et la checklist `anti-ai-slop` existants ;
7. conserver les captures dans `.artifacts/design-review/`, qui n’est pas versionné.

Si Chromium ne peut pas être installé ou lancé, ne pas présenter la revue comme une validation visuelle complète. Signaler précisément l’échec et limiter les conclusions au code.

## Axes d’audit

### Identité

- La page évoque-t-elle un guide éditorial consacré à la cafetière italienne et au café moka ?
- Possède-t-elle une direction reconnaissable sans copier une marque de cafetière ou un retailer ?
- La composition est-elle intentionnelle ou ressemble-t-elle à un assemblage de composants standards ?
- Les familles de pages restent-elles apparentées sans être visuellement clonées ?

### Signes de génération automatique

Utiliser la section « Règles anti-design IA » de `DESIGN.md` et les fichiers existants d’`anti-ai-slop`. Ne pas considérer un pattern isolé comme une preuve. Évaluer leur accumulation, leur manque de justification et leur répétition.

Ne jamais affirmer qu’une interface a été créée par IA. Dire plutôt qu’elle présente des conventions génériques fréquemment observées dans des interfaces générées ou assemblées automatiquement.

### Hiérarchie et UX

- L’objectif de la page est-il immédiatement compréhensible ?
- L’action principale est-elle claire sans écraser le contenu ?
- Les comparaisons permettent-elles une décision réelle ?
- Les pages capacité rendent-elles le volume compréhensible ?
- Les guides privilégient-ils la lecture et le geste plutôt qu’une accumulation de boîtes ?
- La navigation, les outils et les liens ont-ils des libellés explicites ?
- La page reste-t-elle utilisable sur petit écran ?

### Confiance éditoriale et affiliation

- Le niveau de preuve est-il visible lorsque nécessaire ?
- Les avantages et limites sont-ils équilibrés ?
- Les liens affiliés sont-ils identifiables ?
- Les prix et dates de vérification sont-ils contextualisés ?
- Le design crée-t-il une urgence ou une autorité artificielle ?
- Le contenu reste-t-il utile sans les liens marchands ?

### Craft et accessibilité

- Cohérence des tokens, espacements, rayons, bordures et typographies.
- Contraste, focus, navigation clavier, textes alternatifs et HTML sémantique.
- Noms accessibles des boutons et contrôles.
- États hover, focus, active, loading, empty et error lorsque pertinents.
- Absence de contenu tronqué, de débordement ou de rupture responsive.
- Performance visuelle raisonnable : images adaptées, mouvements limités et stabilité du layout.

## Priorisation

Classer les constats :

- **Bloquant** : empêche l’usage, trompe le lecteur ou crée un problème sérieux d’accessibilité.
- **Majeur** : affaiblit nettement l’identité, la décision ou la crédibilité.
- **Mineur** : défaut local de cohérence ou de finition.
- **Suggestion** : amélioration facultative, dépendante d’un choix créatif.

Ne pas gonfler artificiellement le nombre de constats. Regrouper les symptômes qui proviennent d’une même cause.

## Format de restitution

Commencer par un verdict en deux ou trois phrases.

Puis fournir :

1. **Ce qui fonctionne** : maximum cinq observations concrètes.
2. **Problèmes prioritaires** : tableau avec sévérité, emplacement, preuve, impact et correction recommandée.
3. **Signaux de design générique** : uniquement ceux réellement constatés.
4. **Mobile et accessibilité** : résultats vérifiés et limites de la vérification.
5. **Ordre de correction** : liste courte, du plus important au plus cosmétique.

Citer les fichiers ou composants concernés. Pour une revue visuelle, associer les constats aux captures ou viewports examinés.

## Limites d’action

Un audit reste en lecture seule. Ne modifier le code que si l’utilisateur demande explicitement de corriger ou d’implémenter les recommandations.

Sources méthodologiques déjà présentes dans le dépôt : `DESIGN.md`, `site-design-review` et `anti-ai-slop`. Ne pas créer un skill supplémentaire pour doubler ces responsabilités.
