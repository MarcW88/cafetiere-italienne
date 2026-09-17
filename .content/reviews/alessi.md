# PUBLISH_REVIEW — Alessi

Date: 2026-09-17

Status: `PASS — READY_FOR_HUMAN_VALIDATION`

## Gates substantiels

- Intention : satisfaite ; la page aide à comprendre la gamme par construction, matériau, compatibilité et différences fonctionnelles avant le prestige du designer.
- Valeur affiliée : présente sans liens marchands ; la page reste utile pour distinguer inox, aluminium, induction directe, variantes induction et prochaine étape.
- Preuves : claims importants reliés aux fiches et à la collection officielle Alessi actuelle.
- Hands-on : aucun test propre revendiqué ; aucun lien prix / designer = meilleure qualité en tasse.
- AI-slop / industrialisation : architecture distincte de Bialetti et justifiée par le research brief.
- Maillage : handoffs vers 9090, comparatifs inox/induction/design et `/capacites/` lorsque la taille devient le critère principal.
- SEO/technique : H1, title, meta, canonical et robots cohérents ; liens internes et sources externes présents.
- Machine validation : workflow `Regenerate and quality-check Brand cluster` PASS le 17 septembre 2026 ; build, contrôle des liens, `validate_brands.py` et `validate_brand_quality.py` ont réussi.

## Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Traitement dans le draft |
|---|---|---|
| 9090 : inox + innovations fonctionnelles + induction | `USED` | carte de gamme + section 9090/Menhir |
| Menhir : autre voie inox + induction | `USED` | carte de gamme + section 9090/Menhir |
| Vite : aluminium + induction directe + nouveauté 2026 | `USED` | carte de gamme + section induction |
| Pulcina : variante induction distincte | `USED` | carte de gamme + section induction |
| Moka : variante induction distincte | `USED` | carte de gamme + section dédiée + induction |
| La Cupola : variante induction 2025 | `USED` | carte de gamme + sections induction et Aldo Rossi |
| La Conica : inox + fond cuivre | `USED` | carte de gamme + comparaison avec La Cupola |
| taille / volume comme critère | `USED` + `HANDOFF` | section taille avec lien vers `/capacites/` |

`MISSING` décisionnel : aucun.

## Risques résiduels

- La disponibilité commerciale exacte peut varier selon le marché ; le texte ne la présente pas comme permanente.
- Les tailles et variantes doivent rester vérifiées sur la référence exacte lors de futures mises à jour.
- La page ne doit pas dériver vers un inventaire exhaustif de SKU ou de coloris.

## Publication

Conserver `noindex,follow`.

Le PASS autorise uniquement la validation humaine. L’indexation nécessite ensuite une validation humaine explicite puis une instruction distincte de rendre la page indexable.
