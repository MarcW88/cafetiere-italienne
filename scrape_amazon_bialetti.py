"""
Scraper Amazon.com.be — recherche "bialetti"
Extrait : ASIN, titre, URL, prix, prix barré, note, nb avis, image, Prime, sponsorisé
Exporte en CSV + JSON dans le même dossier.
"""

import csv
import json
import random
import re
import time
from pathlib import Path

import requests
from bs4 import BeautifulSoup

# ── Configuration ────────────────────────────────────────────────────────────

PAGES = [
    "https://www.amazon.com.be/s?k=bialetti&crid=2FZ2FYETYJS0T&sprefix=bialetti%2Caps%2C117&ref=nb_sb_noss_1",
    "https://www.amazon.com.be/s?k=bialetti&page=2&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_2",
    "https://www.amazon.com.be/s?k=bialetti&page=3&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_3",
    "https://www.amazon.com.be/s?k=bialetti&page=4&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_4",
    "https://www.amazon.com.be/s?k=bialetti&page=5&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_5",
    "https://www.amazon.com.be/s?k=bialetti&page=6&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_6",
    "https://www.amazon.com.be/s?k=bialetti&page=7&xpid=YXzPapvx2xY1B&crid=2FZ2FYETYJS0T&qid=1785686392&sprefix=bialetti%2Caps%2C117&ref=sr_pg_7",
]

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/125.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "fr-BE,fr;q=0.9,nl;q=0.8,en;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "text/html,application/xhtml+xml,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Connection": "keep-alive",
    "DNT": "1",
    "Upgrade-Insecure-Requests": "1",
}

BASE_URL = "https://www.amazon.com.be"
DELAY_MIN = 4   # secondes min entre requêtes
DELAY_MAX = 9   # secondes max entre requêtes

OUTPUT_CSV  = Path(__file__).parent / "amazon_bialetti.csv"
OUTPUT_JSON = Path(__file__).parent / "amazon_bialetti.json"

# ── Parsing ──────────────────────────────────────────────────────────────────

def parse_price(text: str) -> str:
    """Nettoie une chaîne de prix → '25.99'."""
    if not text:
        return ""
    cleaned = text.replace("\xa0", "").replace(" ", "").replace("€", "").replace(",", ".").strip()
    # Garde seulement le premier nombre trouvé
    m = re.search(r"[\d]+\.[\d]+|[\d]+", cleaned)
    return m.group() if m else ""


def parse_reviews(text: str) -> str:
    """Ex : '30,2 k' → '30200', '1 234' → '1234'."""
    if not text:
        return ""
    text = text.strip().replace("\xa0", "").replace(" ", "")
    # format "30,2k" ou "30.2k"
    m = re.match(r"([\d]+[.,][\d]+)\s*[kK]", text)
    if m:
        num = float(m.group(1).replace(",", ".")) * 1000
        return str(int(num))
    m = re.match(r"([\d]+)\s*[kK]", text)
    if m:
        return str(int(m.group(1)) * 1000)
    # format normal avec séparateurs
    return re.sub(r"[^\d]", "", text)


def parse_rating(text: str) -> str:
    """'4,6 étoile(s) sur 5' → '4.6'."""
    if not text:
        return ""
    m = re.search(r"([\d][,.][\d])", text)
    return m.group(1).replace(",", ".") if m else ""


def parse_card(card):
    """Extrait les données d'un bloc produit Amazon."""
    asin = card.get("data-asin", "").strip()
    if not asin:
        return None

    # ── Titre + URL ──
    h2 = card.find("h2")
    if not h2:
        return None
    title_tag = h2.find("span")
    title = title_tag.get_text(strip=True) if title_tag else ""
    link_tag = h2.find("a", href=True)
    clean_url = f"{BASE_URL}/dp/{asin}"  # URL canonique par défaut via ASIN
    if link_tag:
        href = link_tag["href"]
        if not href.startswith("http"):
            href = BASE_URL + href
        m = re.search(r"(/dp/[A-Z0-9]+)", href)
        if m:
            clean_url = href[: href.index(m.group(1)) + len(m.group(1))]

    # ── Prix courant ──
    price_tag = card.select_one("span.a-price:not([data-a-strike]) span.a-offscreen")
    price = parse_price(price_tag.get_text() if price_tag else "")

    # ── Prix barré (original) ──
    orig_tag = card.select_one("span.a-price[data-a-strike='true'] span.a-offscreen, span.a-text-price span.a-offscreen")
    orig_price = parse_price(orig_tag.get_text() if orig_tag else "")

    # ── Note ──
    rating_tag = card.find("span", class_="a-icon-alt")
    rating = parse_rating(rating_tag.get_text() if rating_tag else "")

    # ── Nombre d'avis ──
    reviews = ""
    # Cherche le span qui contient le compte d'avis (souvent aria-label="X évaluations")
    for span in card.find_all("span", attrs={"aria-label": True}):
        lbl = span["aria-label"]
        if re.search(r"[\d]", lbl) and "étoile" not in lbl.lower():
            reviews = parse_reviews(lbl)
            break
    if not reviews:
        # fallback : lien vers les reviews
        rev_link = card.find("a", href=re.compile(r"#customerReviews"))
        if rev_link:
            span = rev_link.find("span", class_=re.compile(r"a-size"))
            if span:
                reviews = parse_reviews(span.get_text())

    # ── Image ──
    img_tag = card.find("img", class_="s-image")
    image = img_tag["src"] if img_tag else ""

    # ── Prime ──
    prime = bool(card.find("i", class_=re.compile(r"a-icon-prime")))

    # ── Sponsorisé ──
    sponsored = bool(
        card.find("span", class_=re.compile(r"puis-sponsored"))
        or card.find("span", string=re.compile(r"[Ss]ponsor"))
    )

    return {
        "asin":         asin,
        "titre":        title,
        "url":          clean_url,
        "prix":         price,
        "prix_barre":   orig_price,
        "note":         rating,
        "nb_avis":      reviews,
        "image":        image,
        "prime":        prime,
        "sponsorise":   sponsored,
    }


# ── Scraping ─────────────────────────────────────────────────────────────────

def fetch_page(url: str, session: requests.Session):
    try:
        resp = session.get(url, headers=HEADERS, timeout=20)
        resp.raise_for_status()
        if "api-services-support" in resp.url or "Sorry" in resp.text[:500]:
            print("  ⚠️  CAPTCHA / blocage détecté")
            return None
        return BeautifulSoup(resp.text, "html.parser")
    except requests.RequestException as e:
        print(f"  Erreur réseau : {e}")
        return None


def scrape_all() -> list[dict]:
    products = {}
    session = requests.Session()

    for i, url in enumerate(PAGES, 1):
        print(f"Page {i}/{len(PAGES)} — {url[:60]}…")
        soup = fetch_page(url, session)
        if soup is None:
            print("  Page ignorée.")
        else:
            cards = soup.select("div[data-component-type='s-search-result']")
            print(f"  {len(cards)} produits trouvés")
            for card in cards:
                data = parse_card(card)
                if data and data["asin"] not in products:
                    products[data["asin"]] = data

        if i < len(PAGES):
            delay = random.uniform(DELAY_MIN, DELAY_MAX)
            print(f"  Pause {delay:.1f}s…")
            time.sleep(delay)

    return list(products.values())


# ── Export ───────────────────────────────────────────────────────────────────

FIELDS = ["asin", "titre", "url", "prix", "prix_barre", "note", "nb_avis", "image", "prime", "sponsorise"]


def save_csv(products: list[dict]):
    with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS)
        writer.writeheader()
        writer.writerows(products)
    print(f"✅ CSV sauvegardé : {OUTPUT_CSV} ({len(products)} produits)")


def save_json(products: list[dict]):
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=2)
    print(f"✅ JSON sauvegardé : {OUTPUT_JSON} ({len(products)} produits)")


# ── Main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("=== Scraper Amazon.com.be — Bialetti ===\n")
    products = scrape_all()
    print(f"\n{len(products)} produits uniques récupérés.\n")
    save_csv(products)
    save_json(products)
