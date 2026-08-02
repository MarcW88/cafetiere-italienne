"""
Génère italiaanse-percolator-kopen.html
à partir de amazon_bialetti.csv — produits Amazon.com.be, interface française.
"""

import csv
import json
from pathlib import Path

BASE = Path(__file__).parent
CSV_FILE = BASE / "amazon_bialetti.csv"
OUT_FILE = BASE / "italiaanse-percolator-kopen.html"

# ── Lecture CSV ──────────────────────────────────────────────────────────────

products = []
with open(CSV_FILE, newline="", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        products.append({
            "asin":       row["asin"],
            "titre":      row["titre"],
            "url":        row["url"],
            "prix":       float(row["prix"]) if row["prix"] else None,
            "prix_barre": float(row["prix_barre"]) if row["prix_barre"] else None,
            "note":       float(row["note"]) if row["note"] else None,
            "nb_avis":    int(row["nb_avis"]) if row["nb_avis"] else None,
            "image":      row["image"],
            "prime":      row["prime"] == "True",
        })

products_json = json.dumps(products, ensure_ascii=False)

# ── HTML ─────────────────────────────────────────────────────────────────────

page = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Acheter une cafetière italienne | 287 modèles sur Amazon | Cafetière Italienne</title>
<meta content="Découvrez 287 cafetières italiennes disponibles sur Amazon.com.be. Comparez les prix, les notes et trouvez votre moka pot idéale." name="description"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Outfit:wght@400;600;700&amp;family=DM+Serif+Display:ital,wght@0,400&amp;display=swap" rel="stylesheet"/>
<link href="style.css" rel="stylesheet"/>
<link href="favicon.svg" rel="icon" type="image/svg+xml"/>
<link href="https://cafetiere-italienne.be/italiaanse-percolator-kopen.html" rel="canonical"/>
<style>
.shop-grid {{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 1.25rem;
}}
.shop-controls {{
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.5rem;
}}
.shop-controls input, .shop-controls select {{
  padding: 0.5rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 0.35rem;
  font-size: 0.85rem;
  outline: none;
  background: white;
}}
.shop-controls input {{ flex: 1; min-width: 200px; }}
.shop-controls input:focus, .shop-controls select:focus {{
  border-color: var(--coffee);
}}
.star {{
  color: #f59e0b;
  font-size: 0.78rem;
}}
.card-product {{
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}}
.card-product:hover {{
  border-color: var(--coffee);
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}}
.card-img {{
  background: #fafafa;
  padding: 0.85rem;
  text-align: center;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}}
.card-img img {{
  height: 150px;
  width: 100%;
  object-fit: contain;
}}
.card-body {{
  padding: 0.85rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}}
.card-title {{
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0.5rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}}
.card-rating {{
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-bottom: 0.5rem;
}}
.card-price {{
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}}
.price-current {{
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--coffee);
}}
.price-old {{
  font-size: 0.78rem;
  color: var(--text-light);
  text-decoration: line-through;
}}
.btn-amazon {{
  display: block;
  text-align: center;
  padding: 0.5rem;
  background: var(--coffee);
  color: white;
  text-decoration: none;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  transition: opacity 0.15s;
}}
.btn-amazon:hover {{ opacity: 0.88; }}
.badge-prime {{
  display: inline-block;
  background: #00A8E0;
  color: white;
  font-size: 0.62rem;
  font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  margin-left: 0.25rem;
  vertical-align: middle;
}}
.pagination {{
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}}
.pagination button {{
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--border);
  background: white;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.82rem;
  min-width: 36px;
  transition: all 0.15s;
}}
.pagination button.active {{
  background: var(--coffee);
  color: white;
  border-color: var(--coffee);
}}
.pagination button:hover:not(.active) {{
  border-color: var(--coffee);
}}
@media (max-width: 600px) {{
  .shop-grid {{ grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }}
}}
</style>
</head>
<body>
<nav class="navbar">
<div class="container">
<div class="nav-container">
<a class="nav-brand" href="index.html">Cafetière Italienne</a>
<button class="mobile-menu-toggle" aria-label="Menu">
<span></span><span></span><span></span>
</button>
<ul class="nav-menu">
<li><a class="nav-link" href="index.html">Accueil</a></li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="beste-italiaanse-percolators.html">Guides</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="beste-italiaanse-percolators.html">Top 10</a></li>
<li><a class="dropdown-link" href="koopgids/index.html">Guide d'achat</a></li>
<li><a class="dropdown-link" href="alle-reviews.html">Avis</a></li>
<li><a class="dropdown-link" href="vergelijking/index.html">Comparatifs</a></li>
</ul>
</li>
<li><a class="nav-link" href="marques/index.html">Marques</a></li>
<li><a class="nav-link active" href="italiaanse-percolator-kopen.html">Shop</a></li>
</ul>
</div>
</div>
</nav>
<div class="mobile-menu-overlay"></div>

<section style="background:#f5f0ea;padding:3rem 0 2.5rem;">
<div class="container">
<p style="font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem;">
<a href="index.html" style="color:var(--text-light);text-decoration:none;">Accueil</a> / Shop
</p>
<h1 style="font-family:var(--font-serif);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:400;margin-bottom:0.75rem;">Acheter une cafetière italienne</h1>
<p style="color:var(--text-dim);font-size:1rem;max-width:600px;">
{len(products)} produits disponibles sur Amazon.com.be — cafetières moka, accessoires et plus encore.
Prix mis à jour régulièrement.
</p>
</div>
</section>

<main class="container" style="padding:2.5rem 0;">
<div class="shop-controls">
<input type="text" id="search" placeholder="Rechercher un produit, une marque…" oninput="applyFilters()"/>
<select id="sort" onchange="applyFilters()">
<option value="default">Tri : Par défaut</option>
<option value="price_asc">Prix croissant</option>
<option value="price_desc">Prix décroissant</option>
<option value="rating">Meilleures notes</option>
<option value="reviews">Plus d'avis</option>
</select>
</div>
<p id="page-info" style="color:var(--text-dim);margin-bottom:1.25rem;font-size:0.88rem;"></p>
<div class="shop-grid" id="products-grid"></div>
<div class="pagination" id="pagination"></div>
</main>

<footer>
<div style="background:var(--coffee);padding:2.5rem 0;">
<div class="container">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;">
<div>
<p style="font-family:var(--font-serif);font-size:1.4rem;color:white;margin-bottom:0.5rem;">Une question ?</p>
<p style="color:rgba(255,255,255,0.85);font-size:0.9rem;line-height:1.6;margin:0;">Trouvez rapidement la réponse dans notre <a href="contact.html" style="color:white;text-decoration:underline;">FAQ</a> ou <a href="contact.html" style="color:white;text-decoration:underline;">contactez-nous</a> directement.</p>
</div>
<div>
<p style="font-family:var(--font-serif);font-size:1.4rem;color:white;margin-bottom:0.5rem;">Newsletter</p>
<p style="color:rgba(255,255,255,0.85);font-size:0.9rem;margin-bottom:1rem;">Conseils café, comparatifs et meilleures recommandations dans votre boîte mail.</p>
<form onsubmit="return false;" style="display:flex;gap:0.5rem;flex-wrap:wrap;">
<input type="email" placeholder="Votre adresse e-mail" style="flex:1;min-width:200px;padding:0.6rem 1rem;border:none;border-radius:0.3rem;font-size:0.9rem;outline:none;">
<button type="submit" style="padding:0.6rem 1.4rem;background:#2a1a10;color:white;border:none;border-radius:0.3rem;font-size:0.9rem;font-weight:600;cursor:pointer;white-space:nowrap;">S'inscrire</button>
</form>
</div>
</div>
</div>
</div>
<div style="background:#2a1a10;padding:3rem 0 2rem;">
<div class="container">
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2.5rem;margin-bottom:2.5rem;">
<div>
<h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #3d2a1f;">Service client</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="contact.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Contact</a></li>
<li style="margin-bottom:0.6rem;"><a href="over-ons.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">À propos</a></li>
<li style="margin-bottom:0.6rem;"><a href="privacy.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Confidentialité</a></li>
<li style="margin-bottom:0.6rem;"><a href="disclaimer.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #3d2a1f;">Guides café</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="beste-italiaanse-percolators.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Top 10 cafetières</a></li>
<li style="margin-bottom:0.6rem;"><a href="koopgids/index.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Guide d'achat</a></li>
<li style="margin-bottom:0.6rem;"><a href="alle-reviews.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Tous les avis</a></li>
<li style="margin-bottom:0.6rem;"><a href="vergelijking/index.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Comparatifs</a></li>
<li style="margin-bottom:0.6rem;"><a href="italiaanse-percolator-kopen.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Acheter une cafetière</a></li>
</ul>
</div>
<div>
<h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #3d2a1f;">Marques</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="marques/bialetti/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Bialetti</a></li>
<li style="margin-bottom:0.6rem;"><a href="marques/alessi/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Alessi</a></li>
<li style="margin-bottom:0.6rem;"><a href="marques/giannini/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Giannini</a></li>
<li style="margin-bottom:0.6rem;"><a href="marques/lagostina/" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Lagostina</a></li>
<li style="margin-bottom:0.6rem;"><a href="marques/index.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Toutes les marques →</a></li>
</ul>
</div>
<div>
<h4 style="color:white;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:1.2rem;padding-bottom:0.6rem;border-bottom:1px solid #3d2a1f;">Amazon</h4>
<ul style="list-style:none;padding:0;margin:0;">
<li style="margin-bottom:0.6rem;"><a href="italiaanse-percolator-kopen.html" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Tous les produits</a></li>
<li style="margin-bottom:0.6rem;"><a href="https://www.amazon.com.be/s?k=bialetti" target="_blank" rel="noopener" style="color:#bbb;font-size:0.85rem;text-decoration:none;">Bialetti sur Amazon ↗</a></li>
</ul>
</div>
</div>
<div style="border-top:1px solid #3d2a1f;padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
<div style="display:flex;align-items:center;gap:1rem;">
<span style="font-family:var(--font-serif);font-size:1rem;color:white;">Cafetière Italienne</span>
<span style="color:#555;font-size:0.75rem;">|</span>
<span style="color:#666;font-size:0.78rem;">Guide indépendant depuis 2017</span>
</div>
<div style="display:flex;gap:1.5rem;flex-wrap:wrap;">
<a href="privacy.html" style="color:#666;font-size:0.78rem;text-decoration:none;">Privacy</a>
<a href="disclaimer.html" style="color:#666;font-size:0.78rem;text-decoration:none;">Disclaimer</a>
<span style="color:#666;font-size:0.78rem;">© 2026 Cafetière Italienne</span>
</div>
</div>
<p style="color:#555;font-size:0.75rem;margin:0.75rem 0 0;text-align:center;">Ce site contient des liens affiliés Amazon. En cas d'achat via nos liens, nous percevons une petite commission, sans frais supplémentaires pour vous.</p>
</div>
</div>
</footer>

<script>
const ALL_PRODUCTS = {products_json};
const PER_PAGE = 24;
let currentPage = 1;
let filtered = [...ALL_PRODUCTS];

function stars(note) {{
  if (!note) return '';
  const full = Math.round(note);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}}

function formatAvis(n) {{
  if (!n) return '';
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0','') + 'k';
  return n.toString();
}}

function renderCard(p) {{
  const ratingHtml = p.note
    ? '<div class="card-rating"><span class="star">' + stars(p.note) + '</span> ' + p.note.toFixed(1) + (p.nb_avis ? ' <span style="color:var(--text-light);">(' + formatAvis(p.nb_avis) + ' avis)</span>' : '') + '</div>'
    : '';
  const priceHtml = p.prix !== null
    ? '<div class="card-price"><span class="price-current">€' + p.prix.toFixed(2) + '</span>' +
      (p.prix_barre ? '<span class="price-old">€' + p.prix_barre.toFixed(2) + '</span>' : '') +
      (p.prime ? '<span class="badge-prime">Prime</span>' : '') +
      '</div>'
    : '<div class="card-price"><span style="color:var(--text-light);font-size:0.8rem;">Prix sur Amazon</span></div>';
  return '<div class="card-product">' +
    '<div class="card-img"><img src="' + (p.image||'') + '" alt="' + p.titre.replace(/"/g,'&quot;') + '" loading="lazy" onerror="this.parentElement.style.background=\'#f0f0f0\';this.style.display=\'none\'"></div>' +
    '<div class="card-body">' +
    '<h3 class="card-title">' + p.titre + '</h3>' +
    ratingHtml +
    priceHtml +
    '<a class="btn-amazon" href="' + (p.url||'#') + '" target="_blank" rel="sponsored noopener">Voir sur Amazon</a>' +
    '<p style="text-align:center;font-size:0.72rem;color:var(--text-dim);margin:0.3rem 0 0;">via Amazon.com.be</p>' +
    '</div></div>';
}}

function applyFilters() {{
  const q = document.getElementById('search').value.toLowerCase().trim();
  const sort = document.getElementById('sort').value;
  filtered = ALL_PRODUCTS.filter(p => !q || p.titre.toLowerCase().includes(q));
  if (sort === 'price_asc')  filtered.sort((a,b) => (a.prix||999) - (b.prix||999));
  if (sort === 'price_desc') filtered.sort((a,b) => (b.prix||0) - (a.prix||0));
  if (sort === 'rating')     filtered.sort((a,b) => (b.note||0) - (a.note||0));
  if (sort === 'reviews')    filtered.sort((a,b) => (b.nb_avis||0) - (a.nb_avis||0));
  currentPage = 1;
  render();
}}

function render() {{
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const start = (currentPage - 1) * PER_PAGE;
  const items = filtered.slice(start, start + PER_PAGE);

  document.getElementById('page-info').textContent =
    total + ' produit' + (total > 1 ? 's' : '') + ' · page ' + currentPage + ' sur ' + totalPages;

  document.getElementById('products-grid').innerHTML = items.map(renderCard).join('');

  const pag = document.getElementById('pagination');
  if (totalPages <= 1) {{ pag.innerHTML = ''; return; }}
  let h = '';
  if (currentPage > 1) h += '<button onclick="goPage(' + (currentPage-1) + ')">‹ Précédent</button>';
  const s = Math.max(1, currentPage-2), e = Math.min(totalPages, currentPage+2);
  for (let i = s; i <= e; i++) {{
    h += '<button class="' + (i===currentPage?'active':'') + '" onclick="goPage(' + i + ')">' + i + '</button>';
  }}
  if (currentPage < totalPages) h += '<button onclick="goPage(' + (currentPage+1) + ')">Suivant ›</button>';
  pag.innerHTML = h;
}}

window.goPage = function(n) {{
  currentPage = n;
  render();
  window.scrollTo({{ top: document.getElementById('products-grid').offsetTop - 90, behavior: 'smooth' }});
}};

render();

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const navMenu = document.querySelector('.nav-menu');
if (mobileMenuToggle) {{
  mobileMenuToggle.addEventListener('click', () => {{
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }});
}}
if (mobileMenuOverlay) {{
  mobileMenuOverlay.addEventListener('click', () => {{
    mobileMenuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }});
}}
document.querySelectorAll('.dropdown-toggle').forEach(t => {{
  t.addEventListener('click', e => {{
    if (window.innerWidth <= 768) {{
      e.preventDefault();
      const item = t.closest('.nav-item.dropdown');
      item.classList.toggle('active');
      item.querySelector('.dropdown-menu').classList.toggle('active');
    }}
  }});
}});
</script>
</body>
</html>"""

OUT_FILE.write_text(page, encoding="utf-8")
print(f"✅ {OUT_FILE.name} généré — {len(products)} produits")
