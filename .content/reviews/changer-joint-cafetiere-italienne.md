# PUBLISH_REVIEW — changer-joint-cafetiere-italienne

## 1. Statut

- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision actuelle : `DEEP_REWRITE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-troubleshooting.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 2. Intent / rôle cluster

Intent : HOW_TO + diagnostic + compatibilité de pièce.

Rôle unique : permettre de savoir si le joint est réellement en cause, choisir la bonne pièce et la remplacer proprement.

Frontières conservées :
- fuite persistante / soupape → guide fuite-vapeur ;
- catalogue / achat de joint → page accessoire ;
- nettoyage courant → guide nettoyage.

## 3. Architecture / profondeur

Avant correction, la page possédait une procédure correcte mais trop courte sur le vrai hard gate : la compatibilité de la pièce.

Renforcé :
- tableau symptôme → hypothèse → action ;
- modèle + taille + référence avant achat ;
- exemple Bialetti avec tableau ring/filter ;
- exemple Alessi 9090 avec références différentes selon 1 / 3 / 6 / 10 tasses ;
- différence joint usé / portée sale / mauvaise pièce / montage / autre fuite ;
- procédure pas à pas sans serrage excessif ;
- contrôle au prochain usage normal ;
- raccourcis à éviter ;
- handoff sécurité vers fuite/vapeur.

## 4. Evidence / factualité

PASS.

Claims bornés :
- fuite latérale → joint + portée propre : Bialetti NZ troubleshooting ;
- tailles / diamètres des jeux ring + filter : Bialetti NZ ;
- remplacement si usé + recommandation annuelle : notice Moka Express 2021 uniquement ;
- références 9090 par taille : pages officielles Alessi ;
- aucune universalisation de la fréquence annuelle ;
- aucune promesse qu’un diamètre seul garantit une pièce tierce ;
- aucune manipulation de soupape présentée comme remplacement de joint.

La source Bialetti de notice n’est pas utilisée pour extrapoler à toutes les moka.

## 5. Existing value / content refresh

Valeur conservée :
- geste à froid ;
- retrait joint + plaque filtrante ;
- nettoyage de la portée ;
- joint à plat ;
- pas de serrage excessif ;
- renvoi fuite/vapeur.

Valeur ajoutée :
- preuve concrète de la segmentation des références ;
- diagnostic avant achat ;
- prévention des faux positifs « fuite = joint » ;
- meilleure frontière sécurité.

## 6. Naturalité / humanizer / general-writing

PASS.

Le texte reste procédural et concret. Il évite les conseils vagues de bricolage, les affirmations « universelles » et tout faux vécu hands-on.

Progression : localiser → identifier → acheter → remplacer → contrôler → escalader si la fuite persiste.

## 7. Anti-AI / comparaison cluster

PASS.

La structure est propre au remplacement de joint. Elle ne duplique ni le guide fuite/vapeur, ni le nettoyage, ni la page accessoire.

Le tableau et les exemples de références ont une fonction opérationnelle et probatoire, pas de remplissage SEO.

## 8. SEO / GEO / maillage

- title et H1 alignés sur l’intention ;
- meta enrichie avec diagnostic + compatibilité + remplacement ;
- entités : joint/ring, plaque filtrante, portée, modèle, taille, référence ;
- maillage vers fuite/vapeur et pages accessoires ;
- pas de cannibalisation avec l’URL transactionnelle joint ;
- `seo-keyword` limité qualitativement faute de GSC / volumes du site.

## 9. Technique

Résultat confirmé :
- canonical : `https://cafetiere-italienne.be/guides/changer-joint-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-troubleshooting.mjs` ;
- aucun nouveau visuel BFL ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé.

Gates exécutés sur la version finale :
- `Regenerate and quality-check Guide cluster` #82 — success ;
- `Validate Guide workflow` #83 — success, reproductibilité HTML comprise ;
- `Visual design review` #200, job `visual-pages (guides)` — success.

Le HTML final conserve la nouvelle meta, `noindex,follow`, le canonical attendu, le hard gate marque + modèle + taille + référence, la matrice de diagnostic et les handoffs de sécurité.

## 10. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / contrôle | Statut | Note |
|---|---|---|
| `seo-content-audit` | PASS | manque principal identifié : compatibilité de pièce trop faible |
| `seo-keyword` | PASS avec limite | validation qualitative, pas de GSC/volume propre au site |
| `search-intent` | PASS | HOW_TO + diagnostic |
| `content-refresh` | PASS | valeur existante conservée et approfondie |
| `fact-check` pré-rédaction | PASS | Bialetti + Alessi vérifiés |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel / hands-on |
| `affiliate-value` | PASS | page utile sans achat ni lien affilié |
| `content-brief-authoring` | PASS | brief avec evidence register, frontières et risques |
| `content-and-copy` | PASS | correction dans la source JS |
| `fact-check` post-rédaction | PASS | claims bornés et rendu final contrôlé |
| `internal-linking-audit` | PASS | fuite + accessoires cohérents ; liens contrôlés par CI |
| `humanizer` | PASS | ton pratique, pas de pseudo-expertise |
| `general-writing` | PASS | ordre de décision clair |
| `anti-ai-slop` | PASS | pas de FAQ artificielle ni de remplissage |
| comparaison cluster | PASS | rôle distinct du guide fuite et de la page accessoire |
| `seo-onpage` | PASS | title/meta/H1 cohérents et HTML final vérifié |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | structure naturelle |
| `seo-drift` | N/A | aucune baseline exploitable |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | visuel générique peu probatoire ; aucun appel BFL |
| `editorial-qa` | PASS | intention, factualité, naturel, frontières, machine gates et rendu visuel validés |

## 11. Blockers / corrections

Corrigés :
- compatibilité trop générique → marque + modèle + taille + référence ;
- « 6 tasses » potentiellement trompeur → exemples Bialetti + Alessi ;
- fréquence annuelle risquait d’être lue comme universelle → portée Moka Express explicite ;
- fuite = joint trop simpliste → matrice diagnostic ;
- procédure sans étape de contrôle structurée → contrôle au prochain usage normal ;
- frontière soupape insuffisante → stop sécurité explicite.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 12. Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides avec une trace skill par skill comparable aux URLs déjà validées.

Deux gates restent volontairement `N/A` :
- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucune baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.
