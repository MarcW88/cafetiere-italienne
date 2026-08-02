"""
Traduit les 35 pages marques du néerlandais → français.
Remplace : nav, footer, UI strings, contenu (descriptions, FAQ, sections).
"""

import re
from pathlib import Path

ROOT = Path(__file__).parent
MARQUES = ROOT / "marques"

# ── Nav FR (chemins ../../ depuis marques/[marque]/) ─────────────────────────

NAV_BRAND = """\
<nav class="navbar">
<div class="container"><div class="nav-container">
<a href="../../index.html" class="nav-brand">Cafetière Italienne</a>
<button class="mobile-menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
<ul class="nav-menu">
<li><a href="../../index.html" class="nav-link">Accueil</a></li>
<li class="nav-item dropdown">
<a href="../../beste-italiaanse-percolators.html" class="nav-link dropdown-toggle">Guides</a>
<ul class="dropdown-menu">
<li><a href="../../beste-italiaanse-percolators.html" class="dropdown-link">Top 10</a></li>
<li><a href="../../koopgids/index.html" class="dropdown-link">Guide d'achat</a></li>
<li><a href="../../alle-reviews.html" class="dropdown-link">Avis</a></li>
<li><a href="../../vergelijking/index.html" class="dropdown-link">Comparatifs</a></li>
</ul>
</li>
<li><a href="../../marques/index.html" class="nav-link active">Marques</a></li>
<li><a href="../../italiaanse-percolator-kopen.html" class="nav-link">Shop</a></li>
</ul>
</div></div>
</nav>"""

# Nav pour marques/index.html (chemins ../)
NAV_INDEX = """\
<nav class="navbar">
<div class="container"><div class="nav-container">
<a href="../index.html" class="nav-brand">Cafetière Italienne</a>
<button class="mobile-menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
<ul class="nav-menu">
<li><a href="../index.html" class="nav-link">Accueil</a></li>
<li class="nav-item dropdown">
<a href="../beste-italiaanse-percolators.html" class="nav-link dropdown-toggle">Guides</a>
<ul class="dropdown-menu">
<li><a href="../beste-italiaanse-percolators.html" class="dropdown-link">Top 10</a></li>
<li><a href="../koopgids/index.html" class="dropdown-link">Guide d'achat</a></li>
<li><a href="../alle-reviews.html" class="dropdown-link">Avis</a></li>
<li><a href="../vergelijking/index.html" class="dropdown-link">Comparatifs</a></li>
</ul>
</li>
<li><a href="../marques/index.html" class="nav-link active">Marques</a></li>
<li><a href="../italiaanse-percolator-kopen.html" class="nav-link">Shop</a></li>
</ul>
</div></div>
</nav>"""

# ── Footer FR (chemins ../../) ───────────────────────────────────────────────

FOOTER_BRAND = """\
<footer class="footer"><div class="container">
<div style="display:grid;grid-template-columns:2fr repeat(3,1fr);gap:3rem;">
<div><p style="font-family:var(--font-serif);font-size:1.2rem;color:white;margin-bottom:1rem;">Cafetière Italienne</p><p style="color:#999;font-size:0.85rem;line-height:1.7;">Guide indépendant sur les cafetières italiennes. Nous testons, comparons et sélectionnons les meilleures moka pots depuis 2017.</p></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Guides</h4><ul style="list-style:none;padding:0;"><li style="margin-bottom:0.6rem;"><a href="../../beste-italiaanse-percolators.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Top 10 cafetières</a></li><li><a href="../../koopgids/index.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Guide d'achat</a></li></ul></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Marques</h4><ul style="list-style:none;padding:0;"><li style="margin-bottom:0.6rem;"><a href="../../marques/bialetti/" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Bialetti</a></li><li><a href="../../marques/index.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Toutes les marques</a></li></ul></div>
<div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Info</h4><ul style="list-style:none;padding:0;"><li style="margin-bottom:0.6rem;"><a href="../../over-ons.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">À propos</a></li><li><a href="../../privacy.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Privacy</a></li></ul></div>
</div>
<div style="border-top:1px solid #333;padding-top:1.5rem;display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
<p style="color:#666;font-size:0.8rem;margin:0;">&copy; 2026 Cafetière Italienne. Tous droits réservés.</p>
<p style="color:#666;font-size:0.8rem;margin:0;">Ce site contient des liens affiliés. En cas d'achat, nous percevons une petite commission, sans frais supplémentaires pour vous.</p>
</div>
</div></footer>"""

FOOTER_INDEX = FOOTER_BRAND.replace("../../", "../")

# ── JS mobile menu ───────────────────────────────────────────────────────────

JS_MENU = """\
<script>
const mmt=document.querySelector('.mobile-menu-toggle'),mmo=document.querySelector('.mobile-menu-overlay'),nm=document.querySelector('.nav-menu');
if(mmt){mmt.addEventListener('click',()=>{mmt.classList.toggle('active');nm.classList.toggle('active');mmo.classList.toggle('active');document.body.style.overflow=nm.classList.contains('active')?'hidden':'';})}
if(mmo){mmo.addEventListener('click',()=>{mmt.classList.remove('active');nm.classList.remove('active');mmo.classList.remove('active');document.body.style.overflow='';})}
document.querySelectorAll('.dropdown-toggle').forEach(t=>t.addEventListener('click',e=>{if(window.innerWidth<=768){e.preventDefault();const d=t.closest('.nav-item.dropdown');d.classList.toggle('active');d.querySelector('.dropdown-menu').classList.toggle('active');}}));
</script>"""

# ── Traductions ordonnées (du plus long au plus court) ───────────────────────

REPLACEMENTS = [
    # ── Attribut HTML ──
    ('lang="nl"', 'lang="fr"'),

    # ── URLs & domaine ──
    ('italiaanse-percolator.nl', 'cafetiere-italienne.be'),
    ('boutique.html', 'italiaanse-percolator-kopen.html'),

    # ── Footer textes longs ──
    ('Onafhankelijke gids voor Italiaanse moka-percolators. Wij testen, vergelijken en selecteren de beste modellen sinds 2017.',
     'Guide indépendant sur les cafetières italiennes. Nous testons, comparons et sélectionnons les meilleures moka pots depuis 2017.'),
    ('© 2025 Italiaanse Percolator. Alle rechten voorbehouden.',
     '© 2026 Cafetière Italienne. Tous droits réservés.'),
    ('© 2026 Italiaanse Percolator. Alle rechten voorbehouden.',
     '© 2026 Cafetière Italienne. Tous droits réservés.'),
    ('Deze site bevat partnerlinks. Bij aankoop ontvangen wij een commissie, zonder extra kosten voor jou.',
     "Ce site contient des liens affiliés. En cas d'achat, nous percevons une petite commission, sans frais supplémentaires pour vous."),

    # ── Meta & schema.org ──
    ('"Alle Modellen"', '"Tous les modèles"'),
    ('"Alle modellen"', '"Tous les modèles"'),
    ('Complete collectie', 'Collection complète'),
    ('percolators - Alle modellen', 'cafetières - Tous les modèles'),
    ('Italiaanse percolators', 'cafetières italiennes'),
    ('Italiaanse percolator', 'cafetière italienne'),
    ('italiaanse percolators', 'cafetières italiennes'),
    ('italiaanse percolator', 'cafetière italienne'),
    ('Alle Modellen', 'Tous les modèles'),

    # ── Schema.org ──
    ('"numberOfItems"', '"numberOfItems"'),

    # ── Breadcrumbs ──
    ('Home</a> / <a', 'Accueil</a> / <a'),
    ('>Home</', '>Accueil</'),
    ('/ Merken</a> /', '/ Marques</a> /'),
    ('/ Merken /\n', '/ Marques /\n'),
    ('/ Merken /', '/ Marques /'),
    ('>Merken<', '>Marques<'),

    # ── Titres de section ──
    ('Een vleugje geschiedenis', 'Un peu d\'histoire'),
    ('Meer weten over Italiaanse percolators?', 'En savoir plus sur les cafetières italiennes\u00a0?'),
    ('Onze praktische gidsen helpen je bij de keuze en het gebruik.',
     'Nos guides pratiques vous aident dans votre choix et votre utilisation.'),
    ('Meer lezen', 'Lire aussi'),
    ('Meer weten', 'En savoir plus'),

    # ── Cards guides (section fixe sur chaque page) ──
    ('Hoe kies je de juiste percolator?', 'Comment choisir la bonne cafetière\u00a0?'),
    ('hoe-kies-je-de-juiste-percolator', 'comment-choisir-la-bonne-cafetiere'),
    ('Formaat, materiaal, kookplaat: alles wat je moet weten.',
     'Format, matériau, plaque de cuisson\u00a0: tout ce que vous devez savoir.'),
    ('Onderhoud van je percolator', 'Entretien de votre cafetière'),
    ('hoe-onderhoud-je-een-percolator', 'entretien-cafetiere'),
    ('Stap voor stap je percolator jarenlang in topconditie houden.',
     'Entretenez votre cafetière étape par étape pour des années de service.'),
    ('Alle merken vergelijken', 'Comparer toutes les marques'),
    ('Italiaanse percolatormerken naast elkaar gezet.',
     'Les marques de cafetières italiennes comparées.'),
    ('Lees meer &rarr;', 'Lire la suite &rarr;'),
    ('Lees meer →', 'Lire la suite →'),
    ('>Bekijk &rarr;<', '>Voir &rarr;<'),
    ('>Bekijk →<', '>Voir →<'),
    ('>Bekijk<', '>Voir<'),

    # ── Section badges/labels ──
    ('>Koopgids<', ">Guide d'achat<"),
    ('">Koopgids<', '">Guide d\'achat<'),
    ('"Koopgids"', '"Guide d\'achat"'),
    ('>Koopgids<', ">Guide d'achat<"),
    ('>Onderhoud<', '>Entretien<'),
    ('"Onderhoud"', '"Entretien"'),

    # ── FAQ section headers ──
    ('Veelgestelde vragen over', 'Questions fréquentes sur'),
    ('Veelgestelde vragen', 'Questions fréquentes'),

    # ── FAQ questions common patterns ──
    ('Zijn ', 'Les cafetières '),  # "Zijn Bialetti percolators..." → handled by percolator replacement
    ('percolators made in Italy?', 'sont-elles fabriquées en Italie\u00a0?'),
    ('percolators geschikt voor inductie?', 'sont-elles compatibles induction\u00a0?'),
    ('Waar koop ik', 'Où acheter des'),
    ('percolators in Nederland?', 'cafetières en Belgique\u00a0?'),
    ('percolators in België?', 'cafetières en Belgique\u00a0?'),
    ('Hoe verschilt', 'En quoi'),
    ('qua design?', 'se distingue-t-il au niveau du design\u00a0?'),
    ('qua kwaliteit?', 'se distingue-t-il en termes de qualité\u00a0?'),
    ('qua prijs?', 'se distingue-t-il au niveau du prix\u00a0?'),
    ('van Bialetti', 'de Bialetti'),
    ('van Alessi', 'd\'Alessi'),

    # ── FAQ answers common patterns ──
    ('Ja.', 'Oui.'),
    ('Nee.', 'Non.'),
    ('Via Bol.com', 'Sur Amazon'),
    ('via Bol.com', 'via Amazon'),
    ('bij Bol.com', 'sur Amazon'),
    ('op Bol.com', 'sur Amazon'),
    ('in Nederland', 'en Belgique'),
    ('in België', 'en Belgique'),
    ('voor Nederlandse kopers', 'pour les acheteurs belges'),
    ('Nederlandse', 'belge'),
    ('nederlandstalige', 'francophone'),
    ('gespecialiseerde kookgereiwinkels', 'magasins spécialisés en cuisine'),
    ('design-woonwinkels', 'boutiques de décoration'),
    ('kookgereiwinkels', 'magasins de cuisine'),

    # ── "Voor wie" section ──
    ('Voor wie is een', 'Pour qui est une cafetière'),
    ('percolator geschikt?', 'adaptée\u00a0?'),
    ('Een eerlijk beeld van wie het meeste baat heeft bij',
     'Un aperçu honnête de qui bénéficie le plus de'),
    ('Minder geschikt als', 'Moins adapté si'),
    ('Minder geschikt voor', 'Moins adapté pour'),
    ('Cadeaukopers', 'Acheteurs de cadeaux'),
    ('Cadeaukoper', 'Acheteur cadeau'),

    # ── Product card buttons ──
    ('>Bekijk Details<', '>Voir les détails<'),
    ('>Bekijk details<', '>Voir les détails<'),
    ('>Koop product<', '>Acheter sur Amazon<'),

    # ── Common content words/phrases ──
    ('Familiebedrijf', 'Entreprise familiale'),
    ('familiebedrijf', 'entreprise familiale'),
    ('Opgericht in', 'Fondée en'),
    ('opgericht in', 'fondée en'),
    ('Made in Italy', 'Made in Italy'),
    ('made in Italy', 'Made in Italy'),

    # Product tags / badges
    ('Beste voor beginners', 'Idéale pour débutants'),
    ('Inductie-geschikt', 'Compatible induction'),
    ('Inductiegeschikt', 'Compatible induction'),
    ('inductiegeschikt', 'compatible induction'),
    ('Inductie', 'Induction'),
    ('inductie', 'induction'),
    ('Crema-klep', 'Soupape crema'),
    ('crema-klep', 'soupape crema'),
    ('Iconisch origineel', 'Original iconique'),
    ('Dagelijks gebruik', 'Usage quotidien'),
    ('dagelijks gebruik', 'usage quotidien'),

    # ── Nav footer labels ──
    ('Top 10 percolators', 'Top 10 cafetières'),
    ('Top 10 beste Italiaanse percolators', 'Top 10 des meilleures cafetières italiennes'),
    ('Alle merken', 'Toutes les marques'),
    ('Over ons', 'À propos'),

    # ── Common Dutch words in body text ──
    ('percolators', 'cafetières'),
    ('percolator', 'cafetière'),
    ('Percolators', 'Cafetières'),
    ('Percolator', 'Cafetière'),
    ('espressomaker', 'machine à espresso'),
    ('espressomakers', 'machines à espresso'),
    ('koffiegerei', 'matériel à café'),
    ('koffieliefhebbers', 'amateurs de café'),
    ('koffieliefhebber', 'amateur de café'),
    ('koffieroutine', 'rituel café'),
    ('koffiecultuur', 'culture du café'),
    ('koffie', 'café'),
    ('Koffie', 'Café'),
    ('espresso', 'espresso'),
    ('moka', 'moka'),
    ('Moka', 'Moka'),
    ('RVS', 'inox'),
    ('rvs', 'inox'),
    ('aluminium', 'aluminium'),
    ('kookplaat', 'plaque de cuisson'),
    ('kookplaten', 'plaques de cuisson'),
    ('inductieplaat', 'plaque à induction'),
    ('gaskookplaat', 'plaque à gaz'),
    ('beginners', 'débutants'),
    ('beginner', 'débutant'),
    ('designmerk', 'marque de design'),
    ('designmerken', 'marques de design'),
    ('achthoekige', 'octogonale'),
    ('achthoekig', 'octogonal'),
    ('roestvrijstaal', 'acier inoxydable'),
    ('aanrecht', 'plan de travail'),
    ('huishoudelijke', 'ménagères'),
    ('keukenaccessoires', 'accessoires de cuisine'),
    ('keuken', 'cuisine'),
    ('Keuken', 'Cuisine'),
    ('kleurrijke', 'colorés'),
    ('kleurig', 'coloré'),
    ('kleur', 'couleur'),
    ('kleuren', 'couleurs'),
    ('decoratief', 'décoratif'),
    ('uitgesproken', 'affirmée'),
    ('iconisch', 'iconique'),
    ('Iconisch', 'Iconique'),
    ('miljoenen', 'millions'),
    ('wereldwijd', 'dans le monde entier'),
    ('jarenlang', 'pendant des années'),
    ('betaalbaar', 'abordable'),
    ('goedkoop', 'bon marché'),
    ('duur', 'cher'),
    ('kwaliteit', 'qualité'),
    ('ontwerp', 'design'),
    ('materiaal', 'matériau'),
    ('materialen', 'matériaux'),
    ('breed gamma', 'large gamme'),
    ('brede gamma', 'large gamme'),
    ('breed assortiment', 'large assortiment'),
    ('gamma', 'gamme'),
    ('assortiment', 'assortiment'),
    ('collectie', 'collection'),
    ('Collectie', 'Collection'),
    ('compacte', 'compact'),
    ('compact', 'compact'),
    ('formaat', 'format'),
    ('grootte', 'taille'),
    ('kops', 'tasses'),
    ('tasse', 'tasse'),
    ('vervangstukken', 'pièces de rechange'),
    ('vervangende onderdelen', 'pièces de rechange'),
    ('afdichtringen', 'joints'),
    ('filters', 'filtres'),
    ('beschikbaarheid', 'disponibilité'),
    ('beschikbaar', 'disponible'),
    ('verkrijgbaar', 'disponible'),
    ('retailers', 'revendeurs'),
    ('webshops', 'boutiques en ligne'),
    ('webshop', 'boutique en ligne'),
    ('cadeau', 'cadeau'),
    ('elegante', 'élégante'),
    ('elegant', 'élégant'),
    ('moderne', 'moderne'),
    ('modern', 'moderne'),
    ('klassiek', 'classique'),
    ('klassieke', 'classique'),
    ('origineel', 'original'),
    ('originele', 'originale'),
    ('gepatenteerde', 'brevetée'),
    ('gepatenteerd', 'breveté'),
    ('crema', 'crema'),
    ('stoom', 'vapeur'),
    ('druk', 'pression'),
    ('smaak', 'goût'),
    ('aromatisch', 'aromatique'),
    ('aromatische', 'aromatiques'),
    ('sterk', 'fort'),
    ('sterke', 'forte'),
    ('zacht', 'doux'),
    ('zachte', 'douce'),
    ('verhouding', 'rapport'),
    ('prijs', 'prix'),
    ('prijs-kwaliteit', 'rapport qualité-prix'),
    ('keuze', 'choix'),
    ('Keuze', 'Choix'),
    ('echt', 'vrai'),
    ('echte', 'véritable'),
    ('Echte', 'Véritable'),
    ('origineel', 'original'),
    ('typisch', 'typique'),
    ('typische', 'typique'),
    ('Italiaans', 'italien'),
    ('Italiaanse', 'italienne'),
    ('Italië', 'Italie'),
    ('Italianen', 'Italiens'),
    ('regio', 'région'),
    ('ambachtelijk', 'artisanal'),
    ('ambachtelijke', 'artisanale'),
    ('productie', 'production'),
    ('produceren', 'produire'),
    ('geproduceerd', 'fabriqué'),
    ('fabricage', 'fabrication'),
    ('fabriek', 'usine'),
    ('merk', 'marque'),
    ('merken', 'marques'),
    ('model', 'modèle'),
    ('modellen', 'modèles'),
    ('Modellen', 'Modèles'),
    ('uitvinder', 'inventeur'),
    ('uitvinding', 'invention'),
    ('icoon', 'icône'),
    ('iconische', 'iconique'),
    ('herkenbaar', 'reconnaissable'),
    ('investering', 'investissement'),
    ('toekomstbestendig', 'pérenne'),
    ('betrouwbaar', 'fiable'),
    ('betrouwbare', 'fiable'),
    ('populair', 'populaire'),
    ('populaire', 'populaire'),
    ('professioneel', 'professionnel'),
    ('professionele', 'professionnelle'),
    ('barista', 'barista'),
    ('thuis', 'chez soi'),
    ('gebruiksgemak', 'facilité d\'utilisation'),
    ('eenvoudig', 'simple'),
    ('eenvoudige', 'simple'),
    ('schoonmaken', 'nettoyer'),
    ('reinigen', 'nettoyer'),
    ('onderhoud', 'entretien'),
    ('Onderhoud', 'Entretien'),
    ('veilig', 'sûr'),
    ('veilige', 'sûre'),
    ('geschikt', 'adapté'),
    ('geschikte', 'adaptée'),
    ('ongeschikt', 'inadapté'),
    ('aanbevolen', 'recommandé'),
    ('aanbeveling', 'recommandation'),
    ('vergelijken', 'comparer'),
    ('vergelijking', 'comparaison'),
    ('Vergelijking', 'Comparatif'),
    ('selectie', 'sélection'),
    ('testen', 'tester'),
    ('getest', 'testé'),
    ('geteste', 'testée'),
    ('review', 'avis'),
    ('reviews', 'avis'),
    ('beoordeling', 'évaluation'),
    ('score', 'score'),
    ('voordelen', 'avantages'),
    ('voordeel', 'avantage'),
    ('nadelen', 'inconvénients'),
    ('nadeel', 'inconvénient'),
    ('conclusie', 'conclusion'),
    ('Conclusie', 'Conclusion'),
    ('samenvatting', 'résumé'),
    ('gids', 'guide'),
    ('gidsen', 'guides'),
    ('Gidsen', 'Guides'),
    ('Koopgids', "Guide d'achat"),
    ('koopgids', "guide d'achat"),
    ('handleiding', 'mode d\'emploi'),
    ('specificaties', 'spécifications'),
    ('technische', 'techniques'),
    ('kenmerken', 'caractéristiques'),
    ('kenmerk', 'caractéristique'),
    ('eigenschappen', 'propriétés'),
    ('eigenschap', 'propriété'),
    ('afmetingen', 'dimensions'),
    ('gewicht', 'poids'),
    ('capaciteit', 'capacité'),
    ('inhoud', 'contenu'),
    ('liter', 'litre'),
    ('milliliter', 'millilitre'),
    ('ml', 'ml'),
    ('watt', 'watt'),
    ('stroom', 'électrique'),
    ('elektrisch', 'électrique'),
    ('Elektrisch', 'Électrique'),
    ('gas', 'gaz'),
    ('Gas', 'Gaz'),
    ('keramisch', 'céramique'),
    ('Keramisch', 'Céramique'),
    ('halogeen', 'halogène'),
    ('alle warmtebronnen', 'toutes sources de chaleur'),
    ('alle kookplaten', 'toutes plaques de cuisson'),
    ('warmtebron', 'source de chaleur'),
    ('warmtebronnen', 'sources de chaleur'),
    ('hoge druk', 'haute pression'),
    ('lage druk', 'basse pression'),
    ('bovenste deel', 'partie supérieure'),
    ('onderste deel', 'partie inférieure'),
    ('filter', 'filtre'),
    ('veiligheidsklep', 'soupape de sécurité'),
    ('handgreep', 'poignée'),
    ('handgrepen', 'poignées'),
    ('deksel', 'couvercle'),
    ('deksels', 'couvercles'),
    ('dopje', 'bouchon'),
    ('steel', 'queue'),
    ('kleur', 'couleur'),
    ('zwart', 'noir'),
    ('Zwart', 'Noir'),
    ('wit', 'blanc'),
    ('Wit', 'Blanc'),
    ('rood', 'rouge'),
    ('Rood', 'Rouge'),
    ('blauw', 'bleu'),
    ('Blauw', 'Bleu'),
    ('groen', 'vert'),
    ('Groen', 'Vert'),
    ('geel', 'jaune'),
    ('zilver', 'argent'),
    ('Zilver', 'Argent'),
    ('goud', 'or'),
    ('glanzend', 'brillant'),
    ('mat', 'mat'),
    ('robuust', 'robuste'),
    ('duurzaam', 'durable'),
    ('duurzame', 'durable'),
    ('stevig', 'solide'),
    ('stevige', 'solide'),
    ('licht', 'léger'),
    ('lichte', 'légère'),
    ('zwaar', 'lourd'),
    ('zware', 'lourde'),
    ('groot', 'grand'),
    ('grote', 'grande'),
    ('klein', 'petit'),
    ('kleine', 'petite'),
    ('middel', 'moyen'),
    ('middelgroot', 'de taille moyenne'),
    ('extra groot', 'extra large'),
    ('dagelijks', 'quotidien'),
    ('wekelijks', 'hebdomadaire'),
    ('regelmatig', 'régulièrement'),
    ('occasioneel', 'occasionnellement'),
    ('soms', 'parfois'),
    ('altijd', 'toujours'),
    ('nooit', 'jamais'),
    ('vaak', 'souvent'),
    ('weinig', 'peu'),
    ('veel', 'beaucoup'),
    ('meer', 'plus'),
    ('minder', 'moins'),
    ('beste', 'meilleure'),
    ('beter', 'meilleure'),
    ('goed', 'bien'),
    ('goede', 'bon'),
    ('slecht', 'mauvais'),
    ('slechte', 'mauvaise'),
    ('ideaal', 'idéal'),
    ('ideale', 'idéale'),
    ('perfect', 'parfait'),
    ('perfecte', 'parfaite'),
    ('uitstekend', 'excellent'),
    ('uitstekende', 'excellente'),
    ('aanrader', 'recommandé'),
    ('aanraders', 'recommandés'),
    ('kopen', 'acheter'),
    ('Kopen', 'Acheter'),
    ('bestellen', 'commander'),
    ('betalen', 'payer'),
    ('prijs', 'prix'),
    ('prijzen', 'prix'),
    ('korting', 'réduction'),
    ('aanbieding', 'promotion'),
    ('aanbiedingen', 'promotions'),
    ('gratis', 'gratuit'),
    ('levering', 'livraison'),
    ('levertijd', 'délai de livraison'),
    ('garantie', 'garantie'),
    ('retour', 'retour'),
    ('klantenservice', 'service client'),
    ('klantenservices', 'services clients'),
    ('jaar', 'an'),
    ('jaren', 'ans'),
    ('maand', 'mois'),
    ('maanden', 'mois'),
    ('week', 'semaine'),
    ('weken', 'semaines'),
    ('dag', 'jour'),
    ('dagen', 'jours'),
    ('ochtend', 'matin'),
    ('avond', 'soir'),
    ('ontbijt', 'petit-déjeuner'),
    ('theetijd', 'pause-thé'),
    ('pasta', 'pâtes'),
    ('eten', 'manger'),
    ('koken', 'cuisiner'),
    ('recept', 'recette'),
    ('recepten', 'recettes'),
    ('kok', 'cuisinier'),
    ('chef', 'chef'),

    # ── Mots néerlandais manquants ──
    ('Ontdek alle accessoires', 'Découvrir tous les accessoires'),
    ('Ontdek alle', 'Découvrir tous les'),
    ('Ontdek', 'Découvrez'),
    ('ontdekken', 'découvrir'),
    ('ontdekt', 'découvert'),
    ('ontdekking', 'découverte'),
    ('ontdekkers', 'découvreurs'),
    ('biedt', 'propose'),
    ('Biedt', 'Propose'),
    ('onderweg', 'en voyage'),
    ('instapper', "entrée de gamme"),
    ('instapmodel', "modèle d'entrée de gamme"),
    ('instapmodellen', "modèles d'entrée de gamme"),
    ('uiteenlopende', 'variés'),
    ('behoeften', 'besoins'),
    ('negen', 'neuf'),
    ('levenslang', 'à vie'),
    ('verbruiksonderdeel', 'pièce consommable'),
    ('verbruiksonderdelen', 'pièces consommables'),
    ('jaarlijks', 'annuellement'),
    ('volgende stap', 'prochaine étape'),
    ('volgende', 'suivant'),
    ('logische', 'logique'),
    ('logisch', 'logique'),
    ('ervaring heeft', 'a de l\'expérience'),
    ('ervaring', 'expérience'),
    ('aantrekkelijke', 'attrayante'),
    ('aantrekkelijk', 'attrayant'),
    ('eenvoud', 'simplicité'),
    ('spoelen', 'rincer'),
    ('afspoelen', 'rincer'),
    ('afwassen', 'laver'),
    ('vaatwasser', 'lave-vaisselle'),
    ('vaatwasserbestendig', 'compatible lave-vaisselle'),
    ('vaatwassermeilleurendig', 'compatible lave-vaisselle'),
    ('buiten', 'en dehors'),
    ('verkrijgbaar', 'disponible'),
    ('verkrijgbare', 'disponibles'),
    ('aanbevelen', 'recommander'),
    ('stap voor stap', 'étape par étape'),
    ('stap', 'étape'),
    ('rubber', 'caoutchouc'),
    ('ringetje', 'petit joint'),
    ('waterniveau', 'niveau d\'eau'),
    ('kwaliteitsproductie', 'production de qualité'),
    ('esthetiek', 'esthétique'),
    ('functioneel', 'fonctionnel'),
    ('functionele', 'fonctionnelle'),
    ('functionaliteit', 'fonctionnalité'),
    ('functie', 'fonction'),
    ('filosofie', 'philosophie'),
    ('merkfilosofie', 'philosophie de marque'),
    ('designfilosofie', 'philosophie de design'),
    ('schalen', 'bols'),
    ('bewaardozen', 'boîtes de rangement'),
    ('bestek', 'couverts'),
    ('huishouding', 'ménage'),
    ('huishouden', 'ménage'),
    ('werkplaats', 'atelier'),
    ('ambachtswerkplaats', 'atelier artisanal'),
    ('kunstoffen', 'matières plastiques'),
    ('kunststoffen', 'matières plastiques'),
    ('glanzende', 'brillants'),
    ('speels', 'ludique'),
    ('verfijnd', 'raffiné'),
    ('verfijnde', 'raffinée'),
    ('designtaal', 'langage de design'),
    ('interieur', 'intérieur'),
    ('woonkamer', 'salon'),
    ('sober', 'sobre'),
    ('sobere', 'sobre'),
    ('onderscheidt', 'se distingue'),
    ('concurrentie', 'concurrence'),
    ('drempel', 'seuil'),
    ('kopers', 'acheteurs'),
    ('koper', 'acheteur'),
    ('aanrecht', 'plan de travail'),
    ('weggestopt', 'caché'),
    ('kast', 'armoire'),
    ('echt', 'vrai'),
    ('ingeburgerd', 'répandu'),
    ('wijd verbreid', 'très répandu'),
    ('herkenbaar', 'reconnaissable'),
    ('uitstraling', 'allure'),
    ('afwerking', 'finition'),
    ('nauwelijks veranderd', 'à peine changé'),
    ('nauwelijks', 'à peine'),
    ('sindsdien', 'depuis lors'),
    ('onvermijdelijk', 'inévitablement'),
    ('meten', 'mesurer'),
    ('verwacht', 'attendu'),
    ('verwachting', 'attente'),
    ('betreft', 'concerne'),
    ('hierboven', 'ci-dessus'),
    ('hieronder', 'ci-dessous'),
    ('oogopslag', 'coup d\'œil'),
    ('detailpagina', 'page de détail'),
    ('doorklikken', 'cliquer'),
    ('aansluit', 'correspond'),
    ('situatie', 'situation'),
    ('routine', 'routine'),
    ('zelfs', 'même'),
    ('terwijl', 'tandis que'),
    ('daarmee', 'ainsi'),
    ('daardoor', 'ainsi'),
    ('daarin', 'dans ce'),
    ('hierin', 'dans ce domaine'),
    ('hiervoor', 'pour cela'),
    ('hierbij', 'à cet égard'),
    ('zoals', 'comme'),
    ('zowel', 'aussi bien'),
    ('zeker', 'certain'),
    ('zeker als', 'surtout si'),
    ('tegelijk', 'en même temps'),
    ('tegelijkertijd', 'simultanément'),
    ('vertrouwd', 'familier'),
    ('uniek', 'unique'),
    ('unieke', 'unique'),
    ('specifiek', 'spécifique'),
    ('specifieke', 'spécifique'),
    ('precies', 'précisément'),
    ('nauwkeurig', 'précis'),
    ('uitgebreid', 'étendu'),
    ('uitgebreide', 'étendue'),
    ('beperkt', 'limité'),
    ('beperkte', 'limitée'),
    ('extra', 'supplémentaire'),
    ('bijzonder', 'particulièrement'),
    ('bijzondere', 'particulière'),
    ('ruim', 'large'),
    ('ruime', 'large'),
    ('eenvoudig te', 'facile à'),
    ('vrij eenvoudig', 'assez simple'),
    ('moeilijk', 'difficile'),
    ('praktisch', 'pratique'),
    ('praktische', 'pratique'),
    ('solide', 'solide'),
    ('kwaliteitsproduct', 'produit de qualité'),
    ('kwaliteitsproducten', 'produits de qualité'),
    ('hoogwaardige', 'haut de gamme'),
    ('hoogwaardig', 'haut de gamme'),
    ('premium', 'premium'),
    ('luxe', 'luxe'),
    ('middenklasse', 'milieu de gamme'),
    ('budgetmodel', 'modèle budget'),
    ('betaalbare', 'abordable'),
    ('gepeperde', 'élevé'),
    ('aanschafprijs', "prix d'achat"),
    ('aankoopprijs', "prix d'achat"),
    ('investering', 'investissement'),
    ('rendement', 'rendement'),
    ('terugverdienen', 'rentabiliser'),

    # ── Nav & UI ──
    ('>Home<', '>Accueil<'),
    ('>Gidsen<', '>Guides<'),
    ('>Merken<', '>Marques<'),
    ('Italiaanse Percolator</a>', 'Cafetière Italienne</a>'),
    ('Italiaanse Percolator"', 'Cafetière Italienne"'),
    ('Italiaanse Percolator\n', 'Cafetière Italienne\n'),
]

# ── Regex patterns ───────────────────────────────────────────────────────────

NBSP = '\u00a0'

REGEX_PATTERNS = [
    # FAQ: "Zijn X percolators Y?" patterns
    (r'Zijn (\w+) (?:caf[eti\xe8res]+|percolators) made in Italy\?',
     lambda m: f'Les caf\xe9ti\xe8res {m.group(1)} sont-elles fabriqu\xe9es en Italie\u00a0?'),
    (r'Zijn (\w+) (?:caf[eti\xe8res]+|percolators) geschikt voor inductie\?',
     lambda m: f'Les caf\xe9ti\xe8res {m.group(1)} sont-elles compatibles induction\u00a0?'),
    (r'Waar koop ik (\w+) (?:caf[eti\xe8res]+|percolators)',
     lambda m: f'O\xf9 acheter des caf\xe9ti\xe8res {m.group(1)}'),
    # "X–Y kops" → "X–Y tasses"
    (r'(\d+)[–\-](\d+) kops', lambda m: f'{m.group(1)}\u2013{m.group(2)} tasses'),
    (r'(\d+) kops', lambda m: f'{m.group(1)} tasses'),
    # "X jaar" → "X ans"
    (r'(\d+)\+? jaar\b', lambda m: f'{m.group(1)} ans'),
    (r'(\d+) jaren\b', lambda m: f'{m.group(1)} ans'),
]

# ── Processing ───────────────────────────────────────────────────────────────

def translate(content: str, is_index: bool = False) -> str:
    # 1. Protect href/src/canonical values so word replacements don't mangle URLs
    protected: dict[str, str] = {}
    counter = [0]

    def _protect(m: re.Match) -> str:
        key = f'__PROT{counter[0]}__'
        protected[key] = m.group(0)
        counter[0] += 1
        return key

    content = re.sub(r'(?:href|src|action)="[^"]*"', _protect, content)

    # 2. String replacements (text only — URLs are protected)
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)

    # 3. Regex patterns
    for pattern, repl in REGEX_PATTERNS:
        content = re.sub(pattern, repl, content)

    # 4. Fix <html lang>
    content = content.replace('<html lang="nl">', '<html lang="fr">')

    # 5. Restore protected URLs
    for key, val in protected.items():
        content = content.replace(key, val)

    # 6. Replace nav AFTER restoring URLs (so fresh nav URLs are not touched)
    nav_new = NAV_INDEX if is_index else NAV_BRAND
    content = re.sub(r'<nav\b[^>]*class=["\']navbar["\'][^>]*>.*?</nav>',
                     nav_new, content, flags=re.DOTALL)

    # 7. Replace footer
    footer_new = FOOTER_INDEX if is_index else FOOTER_BRAND
    content = re.sub(r'<footer\b[^>]*>.*?</footer>',
                     footer_new, content, flags=re.DOTALL)

    # 8. Replace old JS menu scripts
    content = re.sub(
        r'<script>\s*const mmt=.*?</script>',
        JS_MENU, content, flags=re.DOTALL)

    return content


def process_file(path: Path):
    main_index = MARQUES / "index.html"
    is_index = (path.resolve() == main_index.resolve())
    content = path.read_text(encoding="utf-8")
    translated = translate(content, is_index=is_index)
    path.write_text(translated, encoding="utf-8")
    print(f"  ✓ {path.relative_to(ROOT)}")


def process_all():
    files = sorted(MARQUES.glob("*/index.html"))
    files += [MARQUES / "bialetti" / "fiammetta.html"]
    main_index = MARQUES / "index.html"
    for f in files + [main_index]:
        process_file(f)
    print(f"\n✅ {len(files)+1} fichiers traduits.")


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        # Single-file mode: python3 translate_marques_fr.py marques/alessi/index.html
        target = ROOT / sys.argv[1]
        process_file(target)
    else:
        print("=== Traduction NL → FR : pages marques ===\n")
        process_all()
