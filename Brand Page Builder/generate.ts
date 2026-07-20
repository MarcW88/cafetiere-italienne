// npx tsx generate.ts  →  génère ../../marques/[slug]/index.html pour les 16 marques
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BRANDS, SHARED_ACCESSORIES } from "./src/data/brands.js";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const MARQUES = path.join(__dir, "..", "marques");

const NAV = `<nav class="navbar"><div class="container"><div class="nav-container">
<a class="nav-brand" href="../../index.html">Italiaanse Percolator</a>
<button class="mobile-menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
<ul class="nav-menu">
<li><a class="nav-link" href="../../index.html">Home</a></li>
<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="../../beste-italiaanse-percolators.html">Gidsen</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="../../beste-italiaanse-percolators.html">Top 10</a></li>
<li><a class="dropdown-link" href="../../koopgids/index.html">Koopgids</a></li>
<li><a class="dropdown-link" href="../../alle-reviews.html">Reviews</a></li>
<li><a class="dropdown-link" href="../../vergelijking/index.html">Vergelijking</a></li>
</ul></li>
<li><a class="nav-link active" href="../index.html">Merken</a></li>
<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="../../shop.html">Shop</a>
<ul class="dropdown-menu">
<li><a class="dropdown-link" href="../../shop.html">Alle modellen</a></li>
<li><a class="dropdown-link" href="../../categories/percolators.html">Percolators</a></li>
<li><a class="dropdown-link" href="../../categories/elektrische-percolators.html">Elektrisch</a></li>
<li><a class="dropdown-link" href="../../categories/accessoires.html">Accessoires</a></li>
</ul></li>
</ul></div></div></nav><div class="mobile-menu-overlay"></div>`;

function page(b: (typeof BRANDS)[0]): string {
  const S = "https://italiaanse-percolator.nl";
  const reasons = b.reasons.map(r => `<div class="card" style="padding:1.5rem">
<div style="font-size:1.25rem;margin-bottom:.5rem;color:var(--coffee)">✦</div>
<h3 style="font-size:1rem;margin-bottom:.35rem">${r.t}</h3>
<p style="font-size:.85rem;color:var(--text-dim);line-height:1.6;margin:0">${r.d}</p></div>`).join("");

  const models = b.models.map(m => `<a href="${m.href}" style="display:block;text-decoration:none;border:1px solid var(--border);border-radius:.5rem;overflow:hidden;background:#fff;transition:border-color .2s" onmouseover="this.style.borderColor='var(--coffee)'" onmouseout="this.style.borderColor='var(--border)'">
<div style="aspect-ratio:4/3;overflow:hidden;position:relative">
<img src="${m.img}" alt="${m.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover">
<span style="position:absolute;top:.6rem;left:.6rem;background:rgba(26,26,26,.85);color:#fff;font-size:.625rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;padding:.2rem .55rem;border-radius:9999px">${m.tag}</span>
</div>
<div style="padding:1.1rem">
<h3 style="font-size:1rem;color:var(--text);margin-bottom:.25rem">${m.name}</h3>
<p style="font-size:.8rem;color:var(--text-dim);margin:0 0 .6rem">${m.spec}</p>
<span style="font-size:.85rem;font-weight:600;color:var(--coffee)">Bekijk details →</span>
</div></a>`).join("");

  const techs = b.techs.map(t => `<article style="border:1px solid var(--border);border-radius:.5rem;padding:1.5rem;background:#fff">
<div style="font-size:.625rem;text-transform:uppercase;letter-spacing:.12em;color:var(--coffee);font-weight:600;margin-bottom:.4rem">${t.kicker}</div>
<h3 style="font-size:1rem;margin-bottom:.4rem">${t.title}</h3>
<p style="font-size:.875rem;line-height:1.65;color:var(--text);margin-bottom:.6rem">${t.body}</p>
<p style="font-size:.75rem;color:var(--text-dim);border-top:1px solid var(--border);padding-top:.5rem;margin:0">${t.footer}</p>
</article>`).join("");

  const choices = b.choices.map(c => `<div style="border:1px solid rgba(255,255,255,.12);border-radius:.75rem;padding:1.5rem;background:rgba(255,255,255,.03)">
<div style="border:1px solid rgba(160,120,88,.5);border-radius:9999px;padding:.15rem .7rem;font-size:.625rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#c49a6c;display:inline-block;margin-bottom:.65rem">${c.badge}</div>
<h3 style="color:#fff;font-size:1.1rem;margin-bottom:.4rem">${c.title}</h3>
<p style="font-size:.875rem;color:rgba(255,255,255,.7);line-height:1.65;margin:0">${c.body}</p>
</div>`).join("");

  const audience = b.audience.map(a => `<div style="border-left:2px solid rgba(123,90,67,.4);padding-left:1rem">
<h3 style="font-size:1rem;margin-bottom:.3rem">${a.t}</h3>
<p style="font-size:.875rem;color:var(--text-dim);line-height:1.6;margin:0">${a.d}</p>
</div>`).join("");

  const accessories = SHARED_ACCESSORIES.slice(0, 3).map(a => `<a href="${a.href}" style="display:block;text-decoration:none;border:1px solid var(--border);border-radius:.5rem;overflow:hidden;background:#fff;transition:border-color .2s" onmouseover="this.style.borderColor='var(--coffee)'" onmouseout="this.style.borderColor='var(--border)'">
<div style="aspect-ratio:4/3;overflow:hidden"><img src="${a.img}" alt="${a.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>
<div style="padding:1.1rem">
<h3 style="font-size:.95rem;color:var(--text);margin-bottom:.25rem">${a.title}</h3>
<p style="font-size:.8rem;color:var(--text-dim);margin:0 0 .6rem;line-height:1.5">${a.desc}</p>
<span style="font-size:.85rem;font-weight:600;color:var(--coffee)">${a.price} — Bekijk →</span>
</div></a>`).join("");

  const related = b.related.map(r => `<a href="${r.href}" style="display:flex;justify-content:space-between;align-items:center;gap:.75rem;padding:1rem 1.25rem;border:1px solid var(--border);border-radius:.5rem;background:#fff;text-decoration:none;transition:border-color .2s" onmouseover="this.style.borderColor='var(--coffee)'" onmouseout="this.style.borderColor='var(--border)'">
<div>
<div style="font-weight:600;color:var(--text);font-size:.9rem">${r.t}</div>
<div style="font-size:.8rem;color:var(--text-dim);margin-top:.1rem">${r.d}</div>
</div><span style="color:var(--coffee);flex-shrink:0">→</span></a>`).join("");

  const faqs = b.faqs.map((f, i) => `<details style="${i < b.faqs.length - 1 ? "border-bottom:1px solid var(--border)" : ""}">
<summary style="padding:1.2rem 1.25rem;cursor:pointer;font-weight:600;color:var(--text);font-size:.95rem;list-style:none;display:flex;justify-content:space-between;gap:1rem">
${f.q}<span style="color:var(--coffee);flex-shrink:0;font-weight:400">＋</span></summary>
<p style="padding:0 1.25rem 1.25rem;font-size:.875rem;line-height:1.7;color:var(--text-dim);margin:0">${f.a}</p>
</details>`).join("");

  const otherBrands = BRANDS.filter(br => br.slug !== b.slug).map(br =>
    `<a href="${S}/marques/${br.slug}/" style="display:inline-block;border:1px solid var(--border);border-radius:9999px;padding:.25rem .75rem;font-size:.8rem;color:var(--text-dim);text-decoration:none;margin:.2rem;transition:border-color .15s" onmouseover="this.style.borderColor='var(--coffee)';this.style.color='var(--coffee)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-dim)'">${br.name}</a>`
  ).join("");

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: b.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  });
  const crumbSchema = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${S}/` },
      { "@type": "ListItem", position: 2, name: "Merken", item: `${S}/marques/` },
      { "@type": "ListItem", position: 3, name: b.name, item: `${S}/marques/${b.slug}/` }
    ]
  });

  const gridN = (n: number) => `display:grid;grid-template-columns:repeat(auto-fit,minmax(${n===4?200:n===3?240:300}px,1fr));gap:1.25rem`;

  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${b.seoTitle}</title>
<meta name="description" content="${b.seoDesc}">
<link rel="stylesheet" href="../../style.css">
<link rel="canonical" href="${S}/marques/${b.slug}/">
<link rel="icon" href="../../favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#7B5A43">
<script type="application/ld+json">${crumbSchema}</script>
<script type="application/ld+json">${faqSchema}</script>
</head>
<body>
${NAV}

<!-- Breadcrumb -->
<div style="border-bottom:1px solid var(--border);background:var(--surface-soft)">
<div class="container" style="padding:.65rem 1rem;font-size:.75rem;color:var(--text-light)">
<a href="../../index.html" style="color:var(--text-light);text-decoration:none">Home</a>
<span style="margin:0 .4rem">/</span>
<a href="../index.html" style="color:var(--text-light);text-decoration:none">Merken</a>
<span style="margin:0 .4rem">/</span>
<span style="color:var(--text)">${b.name}</span>
</div></div>

<!-- Hero -->
<header style="background:#f5f0ea;border-bottom:1px solid var(--border)">
<div class="container" style="padding:3.5rem 1rem 4rem">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;align-items:center">
<div>
<div style="display:inline-flex;align-items:center;gap:.4rem;border:1px solid var(--border);background:rgba(255,255,255,.7);border-radius:9999px;padding:.25rem .75rem;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--text-dim);margin-bottom:1.1rem">
<span style="width:6px;height:6px;border-radius:9999px;background:var(--coffee);flex-shrink:0"></span>${b.heroBadge}</div>
<h1 style="font-family:var(--font-serif);font-size:clamp(1.9rem,3.5vw,2.75rem);font-weight:400;line-height:1.1;color:var(--text);margin-bottom:1.1rem">
${b.name} Percolators <span style="color:var(--coffee)">${b.heroTitleAccent}</span></h1>
<p style="color:var(--text-dim);font-size:.97rem;line-height:1.75;max-width:560px;margin-bottom:1rem">${b.heroLead}</p>
<p style="border-left:3px solid var(--coffee);background:rgba(123,90,67,.06);padding:.75rem 1rem;border-radius:0 .375rem .375rem 0;font-size:.875rem;line-height:1.65;max-width:540px;margin-bottom:1.5rem">
<strong style="color:var(--text)">${b.heroWhyStrong}</strong> ${b.heroWhyBody}</p>
<div style="display:flex;flex-wrap:wrap;gap:.75rem">
<a href="#modellen" style="display:inline-block;padding:.6rem 1.35rem;background:var(--coffee);color:#fff;text-decoration:none;border-radius:.35rem;font-size:.875rem;font-weight:600">Bekijk modellen</a>
<a href="#kiezen" style="display:inline-block;padding:.6rem 1.35rem;border:1px solid var(--coffee);color:var(--coffee);text-decoration:none;border-radius:.35rem;font-size:.875rem;font-weight:600">Welk model past bij mij?</a>
</div></div>
<div style="position:relative">
<img src="${b.heroImage}" alt="${b.name} percolator" loading="eager"
style="width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:1rem;box-shadow:0 25px 50px -15px rgba(26,26,26,.2)">
<div style="position:absolute;bottom:-1rem;left:-1rem;background:#fff;border:1px solid var(--border);border-radius:.75rem;padding:.65rem .9rem;box-shadow:0 4px 16px rgba(0,0,0,.1)">
<div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light)">Sinds</div>
<div style="font-family:var(--font-serif);font-size:1.4rem;color:var(--text)">${b.since}</div>
</div></div></div></div></header>

<!-- Waarom -->
<section style="padding:3.5rem 0;border-bottom:1px solid var(--border)">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:1.75rem">Waarom kiezen voor ${b.name}?</h2>
<div style="${gridN(4)}">${reasons}</div>
</div></section>

<!-- Modellen -->
<section id="modellen" style="padding:3.5rem 0;background:var(--surface-soft);border-bottom:1px solid var(--border)">
<div class="container">
<div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:.75rem;margin-bottom:1.75rem">
<div>
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:.35rem">${b.name} modellen</h2>
<p style="color:var(--text-dim);font-size:.875rem;margin:0">Klik op een model voor volledige specificaties en prijzen.</p>
</div></div>
<div style="${gridN(3)}">${models}</div>
</div></section>

<!-- Technologie -->
<section style="padding:3.5rem 0;border-bottom:1px solid var(--border)">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:1.75rem">${b.name} technologie &amp; materialen</h2>
<div style="${gridN(2)}">${techs}</div>
</div></section>

<!-- Welk model -->
<section id="kiezen" style="padding:3.5rem 0;background:#1a1a1a;border-bottom:1px solid #333">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;color:#fff;margin-bottom:.4rem">Welk ${b.name} model kiezen?</h2>
<p style="color:rgba(255,255,255,.55);font-size:.875rem;margin-bottom:1.75rem">Kies snel op basis van jouw situatie.</p>
<div style="${gridN(2)}">${choices}</div>
</div></section>

<!-- Voor wie -->
<section style="padding:3.5rem 0;border-bottom:1px solid var(--border)">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:1.75rem">Voor wie is ${b.name} geschikt?</h2>
<div style="${gridN(4)}">${audience}</div>
</div></section>

<!-- Accessoires -->
<section style="padding:3.5rem 0;background:var(--surface-soft);border-bottom:1px solid var(--border)">
<div class="container">
<div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:.75rem;margin-bottom:1.75rem">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin:0">Jouw ${b.name} herstellen &amp; upgraden</h2>
<a href="${S}/shop/accessoires-italiaanse-percolator.html" style="font-size:.875rem;font-weight:600;color:var(--coffee);text-decoration:none">Alle accessoires →</a>
</div>
<div style="${gridN(3)}">${accessories}</div>
</div></section>

<!-- Gerelateerd -->
<section style="padding:3.5rem 0;border-bottom:1px solid var(--border)">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:1.75rem">Gerelateerde categorieën &amp; merken</h2>
<div style="${gridN(3)}">${related}</div>
</div></section>

<!-- FAQ -->
<section style="padding:3.5rem 0;border-bottom:1px solid var(--border)">
<div style="max-width:720px;margin:0 auto;padding:0 1rem">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.6rem;margin-bottom:1.75rem">Veelgestelde vragen over ${b.name}</h2>
<div style="border:1px solid var(--border);border-radius:.625rem;background:#fff;overflow:hidden">${faqs}</div>
</div></section>

<!-- Verder ontdekken -->
<section style="padding:3rem 0;background:var(--surface-soft)">
<div class="container">
<h2 style="font-family:var(--font-serif);font-weight:400;font-size:1.3rem;margin-bottom:1.25rem">Andere merken ontdekken</h2>
<div>${otherBrands}</div>
<div style="margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:.75rem">
<a href="${S}/koopgids/hoe-kies-je-de-juiste-percolator.html" style="font-size:.875rem;color:var(--coffee);text-decoration:none;font-weight:500">→ Koopgids</a>
<a href="${S}/categories/aluminium/" style="font-size:.875rem;color:var(--coffee);text-decoration:none;font-weight:500">→ Aluminium percolators</a>
<a href="${S}/categories/inductie/" style="font-size:.875rem;color:var(--coffee);text-decoration:none;font-weight:500">→ Inductie percolators</a>
<a href="${S}/beste-italiaanse-percolators.html" style="font-size:.875rem;color:var(--coffee);text-decoration:none;font-weight:500">→ Top 10 overzicht</a>
</div></div></section>

<!-- Footer -->
<footer style="border-top:1px solid var(--border);background:#fff">
<div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem;padding:1.75rem 1rem;font-size:.75rem;color:var(--text-light)">
<span>© Italiaanse Percolator — ${b.name} merkpagina</span>
<div style="display:flex;gap:1.25rem">
<a href="../../index.html" style="color:var(--text-light);text-decoration:none">Home</a>
<a href="../index.html" style="color:var(--text-light);text-decoration:none">Merken</a>
<a href="${S}/koopgids/hoe-kies-je-de-juiste-percolator.html" style="color:var(--text-light);text-decoration:none">Koopgids</a>
</div></div></footer>
</body></html>`;
}

// Generate all pages
for (const brand of BRANDS) {
  const dir = path.join(MARQUES, brand.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), page(brand), "utf-8");
  console.log(`✓ marques/${brand.slug}/index.html`);
}
console.log(`\nDone — ${BRANDS.length} pages generated.`);
