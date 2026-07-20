#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Brand page generator - Part 1: helpers + template"""
import json, os

with open('all_products.json', encoding='utf-8') as f:
    ALL_PRODUCTS = json.load(f)

NAV = """    <nav class="navbar"><div class="container"><div class="nav-container">
        <a href="../../index.html" class="nav-brand">Italiaanse Percolator</a>
        <ul class="nav-menu">
            <li><a href="../../index.html" class="nav-link">Home</a></li>
            <li class="nav-item dropdown">
                <a href="../../beste-italiaanse-percolators.html" class="nav-link dropdown-toggle">Gidsen</a>
                <ul class="dropdown-menu">
                    <li><a href="../../beste-italiaanse-percolators.html" class="dropdown-link">Top 10</a></li>
                    <li><a href="../../koopgids/index.html" class="dropdown-link">Koopgids</a></li>
                    <li><a href="../../alle-reviews.html" class="dropdown-link">Reviews</a></li>
                    <li><a href="../../vergelijking/index.html" class="dropdown-link">Vergelijking</a></li>
                </ul>
            </li>
            <li><a href="../../marques/index.html" class="nav-link active">Merken</a></li>
            <li class="nav-item dropdown">
                <a href="../../boutique.html" class="nav-link dropdown-toggle">Shop</a>
                <ul class="dropdown-menu">
                    <li><a href="../../boutique.html" class="dropdown-link">Alle modellen</a></li>
                    <li><a href="../../categories/percolators.html" class="dropdown-link">Percolators</a></li>
                    <li><a href="../../categories/elektrische-percolators.html" class="dropdown-link">Elektrisch</a></li>
                    <li><a href="../../categories/accessoires.html" class="dropdown-link">Accessoires</a></li>
                </ul>
            </li>
        </ul>
    </div></div></nav>
<div class="mobile-menu-overlay"></div>"""

FOOTER = """    <footer class="footer"><div class="container">
        <div style="display:grid;grid-template-columns:2fr repeat(3,1fr);gap:3rem;">
            <div><p style="font-family:var(--font-serif);font-size:1.2rem;color:white;margin-bottom:1rem;">Italiaanse Percolator</p>
            <p style="color:#999;font-size:0.85rem;line-height:1.7;">Onafhankelijke gids voor Italiaanse moka-percolators. Wij testen, vergelijken en selecteren de beste modellen sinds 2017.</p></div>
            <div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Gidsen</h4>
            <ul style="list-style:none;padding:0;">
                <li style="margin-bottom:0.6rem;"><a href="../../beste-italiaanse-percolators.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Top 10 percolators</a></li>
                <li style="margin-bottom:0.6rem;"><a href="../../koopgids/index.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Koopgids</a></li>
            </ul></div>
            <div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Merken</h4>
            <ul style="list-style:none;padding:0;">
                <li style="margin-bottom:0.6rem;"><a href="../../marques/bialetti/" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Bialetti</a></li>
                <li style="margin-bottom:0.6rem;"><a href="../../marques/index.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Alle merken</a></li>
            </ul></div>
            <div><h4 style="color:white;font-size:0.8rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">Info</h4>
            <ul style="list-style:none;padding:0;">
                <li style="margin-bottom:0.6rem;"><a href="../../over-ons.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Over ons</a></li>
                <li style="margin-bottom:0.6rem;"><a href="../../privacy.html" style="color:#aaa;font-size:0.85rem;text-decoration:none;">Privacy</a></li>
            </ul></div>
        </div>
        <div style="border-top:1px solid #333;padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
            <p style="color:#666;font-size:0.8rem;margin:0;">&copy; 2025 Italiaanse Percolator. Alle rechten voorbehouden.</p>
            <p style="color:#666;font-size:0.8rem;margin:0;">Deze site bevat partnerlinks. Bij aankoop ontvangen wij een commissie, zonder extra kosten voor jou.</p>
        </div>
    </div></footer>"""

JS = """<script>
const mmt=document.querySelector('.mobile-menu-toggle'),mmo=document.querySelector('.mobile-menu-overlay'),nm=document.querySelector('.nav-menu');
if(mmt){mmt.addEventListener('click',()=>{mmt.classList.toggle('active');nm.classList.toggle('active');mmo.classList.toggle('active');document.body.style.overflow=nm.classList.contains('active')?'hidden':'';})}
if(mmo){mmo.addEventListener('click',()=>{mmt.classList.remove('active');nm.classList.remove('active');mmo.classList.remove('active');document.body.style.overflow='';})}
document.querySelectorAll('.dropdown-toggle').forEach(t=>t.addEventListener('click',e=>{if(window.innerWidth<=768){e.preventDefault();const d=t.closest('.nav-item.dropdown');d.classList.toggle('active');d.querySelector('.dropdown-menu').classList.toggle('active');}}));
</script>"""

def product_cards(products, max_shown=6):
    if not products:
        return ''
    html = []
    for p in products[:max_shown]:
        price = f'&euro;{p["price"]:.2f}'.replace('.',',') if p.get('price') else ''
        mat = p.get('materiaal','')
        cap = p.get('capaciteit','')
        ind = p.get('inductie','')
        tag = 'Inductie-geschikt' if ind=='Oui' else (mat if mat else '')
        sub = ' &middot; '.join([x for x in [f'{cap} kops' if cap and cap not in (0,'0','') else '', mat] if x])
        aff = p.get('affiliate_url','#')
        img = p.get('image','')
        html.append(f"""<article class="brand-product-card">
  <a href="{aff}" target="_blank" rel="sponsored noopener" style="display:flex;justify-content:center;align-items:center;min-height:160px;background:#fafafa;padding:1.25rem;">
    <img src="{img}" alt="{p['name']}" style="max-height:140px;object-fit:contain;" loading="lazy">
  </a>
  <div class="brand-product-card-body">
    {'<span style="font-size:0.72rem;color:var(--text-dim);border:1px solid var(--border);padding:0.2rem 0.5rem;border-radius:0.3rem;display:inline-block;margin-bottom:0.5rem;">'+tag+'</span>' if tag else ''}
    <h3 class="brand-product-card-title">{p['name']}</h3>
    {'<p style="font-size:0.82rem;color:var(--text-dim);margin-bottom:0.75rem;">'+sub+'</p>' if sub else ''}
    {'<strong style="color:var(--coffee);font-size:1rem;">'+price+'</strong>' if price else ''}
    <a href="{aff}" target="_blank" rel="sponsored noopener" class="btn btn-secondary" style="display:inline-block;margin-top:0.75rem;">Bekijk bij Bol.com</a>
  </div>
</article>""")
    return '\n'.join(html)

def build_page(d):
    slug = d['slug']
    brand = d['brand']
    products = [p for p in ALL_PRODUCTS if p.get('brand','') == d.get('product_key', '')] if d.get('product_key') else []
    cards = product_cards(products)

    prods_section = ''
    if cards:
        prods_section = f"""
    <section style="background:var(--surface-soft);padding:3rem 0;">
        <div class="container">
            <h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.5rem;margin-bottom:1rem;">{brand} percolators &amp; koffiezetters</h2>
            <p style="color:var(--text-dim);font-size:0.95rem;line-height:1.75;margin-bottom:2rem;">Hieronder vind je een selectie {brand} producten beschikbaar via Bol.com.</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem;">
{cards}
            </div>
        </div>
    </section>"""

    fw = ''.join(f'<div class="brand-for-whom-item"><h4>{i[0]}</h4><p>{i[1]}</p></div>' for i in d['for_whom'])
    faq = ''.join(f'<details class="faq-item"><summary>{q}</summary><p class="text-dim">{a}</p></details>' for q,a in d['faq'])
    hl = ''.join(f'<li>{h}</li>' for h in d['highlights'])

    return f"""<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{d['title']}</title>
    <meta name="description" content="{d['meta']}">
    <link rel="stylesheet" href="../../style.css">
    <link rel="canonical" href="https://italiaanse-percolator.nl/marques/{slug}/">
    <link rel="icon" href="../../favicon.svg" type="image/svg+xml">
    <meta name="theme-color" content="var(--coffee)">
</head>
<body>
{NAV}
    <section style="background:#f5f0ea;padding:3rem 0 2.5rem;">
        <div class="container">
            <p style="font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem;">
                <a href="../../index.html" style="color:var(--text-light);text-decoration:none;">Home</a> /
                <a href="../" style="color:var(--text-light);text-decoration:none;">Merken</a> / {brand}
            </p>
            <h1 style="font-family:var(--font-serif);font-size:clamp(1.8rem,3vw,2.4rem);font-weight:400;margin-bottom:0.75rem;">{brand} Percolators</h1>
            <p style="color:var(--text-dim);font-size:1rem;line-height:1.75;">{d['hero']}</p>
        </div>
    </section>

    <section style="padding:3rem 0;">
        <div class="container">
            <h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.5rem;margin-bottom:2rem;">{d['h2']}</h2>
            <div style="display:grid;grid-template-columns:3fr 2fr;gap:3rem;align-items:start;">
                <div style="color:var(--text-dim);line-height:1.75;font-size:0.95rem;">
                    <p style="margin-bottom:1.25rem;">{d['p1']}</p>
                    <p style="margin-bottom:1.25rem;">{d['p2']}</p>
                    <p>{d['p3']}</p>
                </div>
                <div>
                    <div style="margin-bottom:1.5rem;"></div>
                    <div class="brand-highlights"><ul>{hl}</ul></div>
                </div>
            </div>
        </div>
    </section>
{prods_section}
    <section style="padding:3rem 0;">
        <div class="container" style="max-width:720px;">
            <h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.5rem;margin-bottom:0.5rem;">Voor wie is een {brand} percolator geschikt?</h2>
            <div class="brand-for-whom">{fw}</div>
        </div>
    </section>

    <section style="padding:3rem 0;background:var(--surface-soft);">
        <div class="container">
            <h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.5rem;margin-bottom:0.5rem;">Meer weten over Italiaanse percolators?</h2>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:1.5rem;">
                <a href="../../koopgids/hoe-kies-je-de-juiste-percolator.html" style="text-decoration:none;border:1px solid var(--border);border-radius:0.75rem;overflow:hidden;background:white;">
                    <div style="background:#f5f0ea;padding:1.5rem 1.5rem 1rem;"><span style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--coffee);">Koopgids</span>
                    <h3 style="font-family:var(--font-serif);font-size:1.1rem;font-weight:400;margin:0.5rem 0 0;">Hoe kies je de juiste percolator?</h3></div>
                    <div style="padding:1rem 1.5rem 1.5rem;"><p style="color:var(--text-dim);font-size:0.85rem;line-height:1.6;margin-bottom:1rem;">Formaat, materiaal, kookplaat: alles wat je moet wegen.</p>
                    <span style="font-size:0.82rem;color:var(--coffee);font-weight:600;">Lees meer &rarr;</span></div>
                </a>
                <a href="../../koopgids/hoe-onderhoud-je-een-percolator.html" style="text-decoration:none;border:1px solid var(--border);border-radius:0.75rem;overflow:hidden;background:white;">
                    <div style="background:#f5f0ea;padding:1.5rem 1.5rem 1rem;"><span style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--coffee);">Onderhoud</span>
                    <h3 style="font-family:var(--font-serif);font-size:1.1rem;font-weight:400;margin:0.5rem 0 0;">Onderhoud en reiniging van je percolator</h3></div>
                    <div style="padding:1rem 1.5rem 1.5rem;"><p style="color:var(--text-dim);font-size:0.85rem;line-height:1.6;margin-bottom:1rem;">Stap voor stap in topconditie houden.</p>
                    <span style="font-size:0.82rem;color:var(--coffee);font-weight:600;">Lees meer &rarr;</span></div>
                </a>
                <a href="../../koopgids/percolator-vs-espressoapparaat.html" style="text-decoration:none;border:1px solid var(--border);border-radius:0.75rem;overflow:hidden;background:white;">
                    <div style="background:#f5f0ea;padding:1.5rem 1.5rem 1rem;"><span style="font-size:0.72rem;font-weight:600;text-transform:uppercase;color:var(--coffee);">Vergelijking</span>
                    <h3 style="font-family:var(--font-serif);font-size:1.1rem;font-weight:400;margin:0.5rem 0 0;">Percolator vs. espressoapparaat</h3></div>
                    <div style="padding:1rem 1.5rem 1.5rem;"><p style="color:var(--text-dim);font-size:0.85rem;line-height:1.6;margin-bottom:1rem;">Wat is het echte verschil in smaak en prijs?</p>
                    <span style="font-size:0.82rem;color:var(--coffee);font-weight:600;">Lees meer &rarr;</span></div>
                </a>
            </div>
        </div>
    </section>

    <section class="section-sm faq-section" style="padding:3rem 0;">
        <div class="container faq-container" style="max-width:720px;">
            <h2 class="faq-title" style="font-family:var(--font-serif);font-weight:400;font-size:1.8rem;margin-bottom:2rem;">Veelgestelde vragen over {brand}</h2>
            <div class="faq-list">{faq}</div>
        </div>
    </section>

    <section style="padding:2.5rem 0;">
        <div class="container" style="max-width:720px;">
            <h3 style="font-size:1rem;font-weight:600;margin-bottom:0.5rem;">Meer lezen</h3>
            <div class="brand-links">
                <a href="../../koopgids/hoe-kies-je-de-juiste-percolator.html">Hoe kies je de juiste percolator?</a>
                <a href="../../marques/index.html">Alle merken vergelijken</a>
                <a href="../../beste-italiaanse-percolators.html">Top 10 beste Italiaanse percolators</a>
            </div>
        </div>
    </section>
{FOOTER}
{JS}
</body>
</html>"""

def write_page(d):
    folder = os.path.join('marques', d['slug'])
    os.makedirs(folder, exist_ok=True)
    path = os.path.join(folder, 'index.html')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(build_page(d))
    print(f"  Created: {path}")
