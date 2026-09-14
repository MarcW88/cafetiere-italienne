# PUBLISH_REVIEW — changer-joint-cafetiere-italienne

## 1. Statut

- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision actuelle : `DEEP_REWRITE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` à conserver
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

PASS éditorial.

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

PASS éditorial.

Le texte reste procédural et concret. Il évite les conseils vagues de bricolage, les affirmations « universelles » et tout faux vécu hands-on.

Progression : localiser → identifier → acheter → remplacer → contrôler → escalader si la fuite persiste.

## 7. Anti-AI / comparaison cluster

PASS éditorial.

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

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/changer-joint-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-troubleshooting.mjs` ;
- aucun nouveau visuel BFL ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité du HTML ;
- rendu visuel Guides valide.

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
| `fact-check` post-rédaction | PASS éditorial | claims bornés ; machine gates à confirmer |
| `internal-linking-audit` | PASS éditorial | fuite + accessoires cohérents |
| `humanizer` | PASS | ton pratique, pas de pseudo-expertise |
| `general-writing` | PASS | ordre de décision clair |
| `anti-ai-slop` | PASS | pas de FAQ artificielle ni de remplissage |
| comparaison cluster | PASS | rôle distinct du guide fuite et de la page accessoire |
| `seo-onpage` | PASS éditorial | title/meta/H1 cohérents ; HTML final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers, reproductibilité |
| `seo-best-practices` | PASS / applicable limité | structure naturelle |
| `seo-drift` | N/A | aucune baseline exploitable |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | visuel générique peu probatoire ; aucun appel BFL |
| `editorial-qa` | PASS éditorial | intention, factualité, naturel et frontières validés ; gates à confirmer |

## 11. Blockers / corrections

Corrigés :
- compatibilité trop générique → marque + modèle + taille + référence ;
- « 6 tasses » potentiellement trompeur → exemples Bialetti + Alessi ;
- fréquence annuelle risquait d’être lue comme universelle → portée Moka Express explicite ;
- fuite = joint trop simpliste → matrice diagnostic ;
- procédure sans étape de contrôle structurée → contrôle au prochain usage normal ;
- frontière soupape insuffisante → stop sécurité explicite.

Blocker restant avant verdict final : confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu Guides.

## 12. Verdict

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.
