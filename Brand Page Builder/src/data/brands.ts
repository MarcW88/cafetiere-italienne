// Data-driven content for every brand page under /marques/*
// Content is written in Dutch to match the rest of the site.

export type BrandModel = {
  name: string;
  tag: string;
  spec: string;
  href: string;
  img: string;
};

export type BrandTech = {
  kicker: string;
  title: string;
  body: string;
  footer: string;
};

export type BrandChoice = {
  badge: string;
  title: string;
  body: string;
  href?: string;
};

export type BrandAudience = { t: string; d: string };
export type BrandReason = { t: string; d: string };
export type BrandRelated = { t: string; d: string; href: string };
export type BrandFaq = { q: string; a: string };

export type Brand = {
  slug: string;
  name: string;
  since: string;
  origin: string;
  seoTitle: string;
  seoDesc: string;
  heroBadge: string;
  heroTitleAccent: string; // e.g. "2026"
  heroLead: string;
  heroWhyStrong: string;
  heroWhyBody: string;
  heroImage: string;
  reasons: BrandReason[];
  models: BrandModel[];
  techs: BrandTech[];
  choices: BrandChoice[];
  audience: BrandAudience[];
  related: BrandRelated[];
  faqs: BrandFaq[];
};

const SITE = "https://italiaanse-percolator.nl";
const HERO_FALLBACK = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80";
const seed = (s: string) => `https://picsum.photos/seed/${s}/800/600`;

// Helpers to reduce repetition
const otherBrandsList = [
  "Aeternum", "Alessi", "Bialetti", "E&B Lab", "Forever", "G.A.T.",
  "Giannini", "Ilsa", "Lagostina", "Mokavit", "Pedrini", "Pezzetti",
  "Risolì", "Stella", "Top Moka", "Vev Vigano",
];

export const OTHER_BRANDS = otherBrandsList;

export const BRANDS: Brand[] = [
  // ── AETERNUM ─────────────────────────────────────────────────────────────
  {
    slug: "aeternum",
    name: "Aeternum",
    since: "1950",
    origin: "Italië",
    seoTitle: "Aeternum Percolators 2026 — Aluminium moka met kleur en karakter",
    seoDesc: "Aeternum: sinds 1950 kleurrijke aluminium moka-percolators uit Italië. Ontdek het complete gamma, materialen en kookplaten in één overzicht.",
    heroBadge: "Merk · sinds 1950",
    heroTitleAccent: "2026",
    heroLead: "Aeternum maakt sinds 1950 kleurrijke, betaalbare aluminium percolators in Italië. Praktisch, herkenbaar en al generaties lang op het fornuis van Italiaanse gezinnen.",
    heroWhyStrong: "Waarom Aeternum?",
    heroWhyBody: "Aluminium moka's met een antiaanbaklaag aan de binnenkant, felle kleuraccenten en scherpe prijzen. Een goede tweede percolator voor wie graag een vrolijk exemplaar naast de klassieke chroom heeft staan.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Italiaans erfgoed", d: "Sinds 1950 gemaakt volgens de klassieke moka-formule, met een moderne draai in kleur en afwerking." },
      { t: "Antiaanbaklaag", d: "Interne coating houdt smaak neutraal en maakt schoonmaken eenvoudiger dan bij ruw aluminium." },
      { t: "Betaalbaar startpunt", d: "Prijzen tussen €20 en €35 — ideaal als eerste moka of als extra exemplaar voor het weekendhuis." },
      { t: "Herkenbaar design", d: "Achthoekige basis met opvallende kleuren: pastel, koraal, mat zwart of klassiek zilver." },
    ],
    models: [
      { name: "Aeternum Allegra", tag: "Klassiek instapmodel", spec: "3–6 kops aluminium · Gas & elektrisch", href: `${SITE}/marques/aeternum/allegra.html`, img: seed("aeternum-allegra") },
      { name: "Aeternum Bijoux", tag: "Kleurrijk", spec: "3 kops · Pastel gelakt aluminium", href: `${SITE}/marques/aeternum/bijoux.html`, img: seed("aeternum-bijoux") },
      { name: "Aeternum Divina", tag: "Grotere gezinnen", spec: "9 kops aluminium · Feestdagen & gasten", href: `${SITE}/marques/aeternum/divina.html`, img: seed("aeternum-divina") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Gelakt aluminium", body: "Aluminium blijft licht en warmt snel op. De externe lak beschermt tegen krassen en houdt kleuren jarenlang levendig.", footer: "Ideaal voor: dagelijks gebruik op gas of elektrisch." },
      { kicker: "Coating", title: "Interne antiaanbaklaag", body: "Voorkomt aluminiumsmaak in de koffie en maakt de bodem makkelijker te reinigen met een zachte spons.", footer: "Nooit in de vaatwasser plaatsen." },
      { kicker: "Design", title: "Achthoekige basis", body: "Aeternum houdt de klassieke moka-vorm aan, maar speelt met matte en glanzende afwerkingen om het silhouet fris te houden.", footer: "Beschikbaar in 5+ kleuren per model." },
      { kicker: "Prijs", title: "Toegankelijk segment", body: "Positionering tussen €20 en €35 maakt Aeternum een populaire tweede percolator naast bekendere merken.", footer: "Zelfde reserveringen (ringen, filters) als standaard moka." },
    ],
    choices: [
      { badge: "Eerste moka (€20–25)", title: "→ Aeternum Allegra", body: "3-kops klassieker, snel schoon te maken en makkelijk te vervangen. Perfect om te leren zonder groot budget." },
      { badge: "Kleur op tafel", title: "→ Aeternum Bijoux", body: "Pastelkleuren die de moka op je aanrecht een decorstuk maken. 3 kops, ideaal solo of duo." },
      { badge: "Gasten & feestdagen", title: "→ Aeternum Divina 9-kops", body: "Groot volume voor familiebrunch. Aluminium blijft licht ondanks het formaat." },
      { badge: "Tweede exemplaar", title: "→ Naast een RVS-model", body: "Combineer met een Bialetti Venus voor inductie: Aeternum blijft dan het weekend- of vakantieapparaat." },
    ],
    audience: [
      { t: "Beginners", d: "Betaalbaar, vergevingsgezind en makkelijk te vervangen als het na jaren afgeschreven is." },
      { t: "Kleurliefhebbers", d: "Wie een moka op het fornuis wil laten staan als accent, niet in de kast verstoppen." },
      { t: "Vakantiehuis", d: "Goedkoop, licht en robuust genoeg om in een tweede woning te laten staan." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of een levenslange investering zoekt — kijk dan naar Bialetti Venus of Vev Vigano." },
    ],
    related: [
      { t: "Pezzetti", d: "Vergelijkbaar kleurrijk aluminium", href: `${SITE}/marques/pezzetti/` },
      { t: "Top Moka", d: "Alternatief in hetzelfde prijssegment", href: `${SITE}/marques/top-moka/` },
      { t: "Bialetti", d: "De referentie in klassiek aluminium", href: `${SITE}/marques/bialetti/` },
      { t: "Aluminium percolators", d: "Alle modellen in aluminium", href: `${SITE}/categories/aluminium/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
      { t: "Onderhoud", d: "Reiniging en levensduur", href: `${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html` },
    ],
    faqs: [
      { q: "Werkt een Aeternum op inductie?", a: "Nee. Het volledige Aeternum-gamma is van aluminium en werkt op gas, elektrisch of halogeen — niet op inductie." },
      { q: "Is de antiaanbaklaag veilig?", a: "Ja, de coating is PFOA-vrij en voedselveilig. Belangrijk is dat je geen metalen schuurspons gebruikt bij de reiniging." },
      { q: "Hoe lang gaat een Aeternum mee?", a: "Bij normaal gebruik 5 tot 10 jaar. Het rubberen afdichtingsringetje vervang je jaarlijks (€2–3)." },
      { q: "Verschil met Bialetti?", a: "Aeternum is goedkoper en kleurrijker; Bialetti heeft meer varianten (inductie, crema) en breder verkrijgbare onderdelen." },
    ],
  },

  // ── ALESSI ───────────────────────────────────────────────────────────────
  {
    slug: "alessi",
    name: "Alessi",
    since: "1921",
    origin: "Crusinallo, Italië",
    seoTitle: "Alessi Percolators 2026 — Design-iconen van 9090 tot Pulcina",
    seoDesc: "Alessi: designpercolators van Sapper, Mendini en De Lucchi. Ontdek 9090, Pulcina, Ossidiana en La Cupola in één overzichtelijke merkgids.",
    heroBadge: "Merk · sinds 1921",
    heroTitleAccent: "2026",
    heroLead: "Alessi maakt sinds 1921 in Crusinallo huishoudobjecten die net zo goed in een museum staan als op je kookplaat. Percolators zijn er signature stukken van Sapper, Mendini, De Lucchi en Rossi.",
    heroWhyStrong: "Waarom Alessi?",
    heroWhyBody: "Elke Alessi-percolator is een designstuk met een naam en een ontwerper. Je koopt niet zomaar een moka, je koopt een silhouet met verhaal — vaak in premium 18/10 RVS en soms inductie-geschikt.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Designiconen", d: "9090 van Richard Sapper (1979) staat in het MoMA. Pulcina, La Cupola en Ossidiana zijn evengoed collectorsitems." },
      { t: "Premium materialen", d: "Voornamelijk 18/10 RVS, met roestvrije bodems die op elke kookplaat werken, inductie inbegrepen." },
      { t: "Onderscheidend silhouet", d: "Waar Bialetti achthoekig is, kiest Alessi voor ronde koepels, bolle bekers en scherpe design-ingrepen." },
      { t: "Cadeauwaardig", d: "Verpakt als een boek, met signature van de ontwerper — een van de meest gegeven design-cadeaus in de categorie." },
    ],
    models: [
      { name: "Alessi 9090", tag: "Icoon · Sapper 1979", spec: "3–10 kops RVS · Inductiegeschikt", href: `${SITE}/marques/alessi/9090.html`, img: seed("alessi-9090") },
      { name: "Alessi Pulcina", tag: "De Lucchi 2015", spec: "3–6 kops aluminium · Illy-samenwerking", href: `${SITE}/marques/alessi/pulcina.html`, img: seed("alessi-pulcina") },
      { name: "Alessi La Cupola", tag: "Aldo Rossi 1988", spec: "1–10 kops · Blauw/rood/zwart handvat", href: `${SITE}/marques/alessi/la-cupola.html`, img: seed("alessi-cupola") },
      { name: "Alessi Ossidiana", tag: "Mari 2014", spec: "3 & 6 kops aluminium · Sculpturaal", href: `${SITE}/marques/alessi/ossidiana.html`, img: seed("alessi-ossidiana") },
      { name: "Alessi Moka", tag: "Mendini heruitgave", spec: "3–6 kops aluminium · Pastel", href: `${SITE}/marques/alessi/moka.html`, img: seed("alessi-mendini") },
    ],
    techs: [
      { kicker: "Design", title: "Ontwerpers-signatuur", body: "Elke lijn draagt de naam van de ontwerper. Sapper, Rossi, Mari, De Lucchi en Mendini tekenden allemaal voor een eigen percolator.", footer: "Uniek in de categorie." },
      { kicker: "Materiaal", title: "18/10 RVS-koepels", body: "De 9090 en modernere lijnen zijn volledig in roestvrij staal. Robuust, dishwasher-safe in de basisonderdelen en inductie-geschikt.", footer: "10+ jaar levensduur." },
      { kicker: "Pulcina", title: "Anti-branding stijgbuis", body: "De Pulcina heeft een gepatenteerde snavelvormige stijgbuis die stoot- en branduitloop stopt zodra de koffie klaar is.", footer: "Ontwikkeld met Illy." },
      { kicker: "Prijs", title: "Design-segment", body: "Alessi ligt duidelijk boven Bialetti: reken op €70–200 afhankelijk van model en formaat.", footer: "Vaak in premium verpakking geleverd." },
    ],
    choices: [
      { badge: "Design-icoon", title: "→ Alessi 9090", body: "Museumstuk van Sapper, inductiegeschikt, RVS. De veiligste keuze als je één Alessi wil bezitten." },
      { badge: "Beste koffie (€60–90)", title: "→ Alessi Pulcina", body: "Samenwerking met Illy: geoptimaliseerde stijgbuis voor evenwichtiger extractie zonder oververhitting." },
      { badge: "Kleur en karakter", title: "→ Alessi La Cupola", body: "Bolvormige koepel met een gekleurd handvat — een van de meest herkenbare mokas op elke keukenplank." },
      { badge: "Sculpturaal", title: "→ Alessi Ossidiana", body: "Enzo Mari's driehoekige, sculpturale interpretatie van de moka. Voor wie iets echt bijzonders wil." },
    ],
    audience: [
      { t: "Designliefhebbers", d: "Verzamelaars van iconische Italiaanse producten voor wie de vorm even zwaar weegt als de koffie." },
      { t: "Cadeau-zoekers", d: "Doosverpakkingen als boek, ontwerperssignatuur — een van de sterkste cadeaus in de categorie." },
      { t: "Inductie premium", d: "9090 en enkele RVS-lijnen werken op inductie zonder converter." },
      { t: "Minder geschikt als…", d: "…je een goedkope, functionele dagelijkse moka zoekt. Kies dan Bialetti, Aeternum of G.A.T." },
    ],
    related: [
      { t: "Bialetti", d: "Klassiek gamma en breedte", href: `${SITE}/marques/bialetti/` },
      { t: "Vev Vigano", d: "Premium RVS alternatief", href: `${SITE}/marques/vev-vigano/` },
      { t: "Giannini", d: "Klassieke RVS-vormgeving", href: `${SITE}/marques/giannini/` },
      { t: "Bialetti vs Alessi", d: "De grote vergelijking", href: `${SITE}/vergelijkingen/bialetti-vs-alessi.html` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werken alle Alessi's op inductie?", a: "Nee. Enkel de RVS-modellen met inductie-bodem (o.a. 9090) werken op inductie. Aluminium lijnen zoals Pulcina en Ossidiana niet." },
      { q: "Waarom is Alessi duurder dan Bialetti?", a: "Je betaalt voor ontwerp-royalty's, premium RVS, kleinere series en verpakking. Reken op 2 tot 4× de prijs van een vergelijkbare Bialetti." },
      { q: "Kan een Alessi in de vaatwasser?", a: "De basisonderdelen van 9090 wel, maar Alessi zelf raadt handwas aan om afwerkingen en pakkingen te sparen." },
      { q: "Zijn de reserveringen breed verkrijgbaar?", a: "Ja, standaard moka-ringen en filterplaatjes passen bij de meeste Alessi's. Voor Pulcina zijn er specifieke Illy-ringen." },
    ],
  },

  // ── BIALETTI ─────────────────────────────────────────────────────────────
  {
    slug: "bialetti",
    name: "Bialetti",
    since: "1933",
    origin: "Crusinallo, Italië",
    seoTitle: "Bialetti Percolators 2026 — Het complete gamma vergeleken",
    seoDesc: "De uitvinder van de moka sinds 1933. Ontdek Moka Express, Venus, Musa, Brikka en Fiammetta. Kies op formaat, materiaal en kookplaat.",
    heroBadge: "Merk · sinds 1933",
    heroTitleAccent: "2026",
    heroLead: "De uitvinder van de moka-percolator: sinds 1933 brengt dit Italiaanse merk de iconische achthoekige koffiemaker in miljoenen keukens wereldwijd. Ons team vergeleek het volledige gamma zodat jij snel het juiste model kiest.",
    heroWhyStrong: "Waarom Bialetti?",
    heroWhyBody: "Het originele referentiepunt van de moka. Breedste gamma (9 modellen, 1–12 kops, aluminium én RVS), inductie-opties met Venus en Musa, en overal verkrijgbare vervangonderdelen voor jarenlang gebruik.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Uitvinder van de moka", d: "Alfonso Bialetti ontwierp in 1933 de achthoekige Moka Express — het originele referentiepunt." },
      { t: "Breedste gamma", d: "9 modellen in aluminium en RVS, van 1-kops tot 12-kops, met inductie-opties." },
      { t: "Beschikbare onderdelen", d: "Ringen, filters en accessoires overal verkrijgbaar. Jouw percolator gaat jaren mee." },
      { t: "Betrouwbaar startpunt", d: "Vergevingsgezind voor beginners, precies genoeg voor liefhebbers." },
    ],
    models: [
      { name: "Bialetti Fiammetta", tag: "Beste voor beginners", spec: "3-kops aluminium · Dagelijks gebruik", href: `${SITE}/marques/bialetti/fiammetta.html`, img: seed("bialetti-fiammetta") },
      { name: "Bialetti Venus", tag: "Inductie-geschikt", spec: "4–6 kops RVS · Inductiegeschikt", href: `${SITE}/marques/bialetti/venus.html`, img: seed("bialetti-venus") },
      { name: "Bialetti Moka Express", tag: "Iconisch origineel", spec: "1–12 kops aluminium · Design 1933", href: `${SITE}/marques/bialetti/moka-express.html`, img: seed("bialetti-moka-express") },
      { name: "Bialetti Brikka", tag: "Crema-klep", spec: "2–4 kops · Gepatenteerde crema-klep", href: `${SITE}/marques/bialetti/brikka.html`, img: seed("bialetti-brikka") },
      { name: "Bialetti Mini Express", tag: "Compact", spec: "1–2 kops · Ideaal voor onderweg", href: `${SITE}/marques/bialetti/mini-express.html`, img: seed("bialetti-mini-express") },
      { name: "Bialetti Musa", tag: "Premium RVS", spec: "4–10 kops RVS · Inductiegeschikt", href: `${SITE}/marques/bialetti/musa.html`, img: seed("bialetti-musa") },
    ],
    techs: [
      { kicker: "Design", title: "Het achthoekige silhouet", body: "Sinds 1933 nauwelijks veranderd. De acht facetten verdelen de warmte gelijkmatig over de onderkamer en geven de moka zijn wereldwijd herkenbare vorm.", footer: "Modellen: Moka Express, Fiammetta, Mini Express." },
      { kicker: "Crema-klep", title: "Gepatenteerde Brikka-klep", body: "Een drukklep bovenop het stijgbuisje bouwt extra druk op voordat de koffie doorstroomt. Resultaat: een fijne crema-laag zoals bij espresso.", footer: "Modellen: Brikka 2-kops, Brikka 4-kops." },
      { kicker: "Inductie", title: "RVS-lijnen Venus & Musa", body: "Volledig roestvrijstalen bodem, geschikt voor elke kookplaat inclusief inductie. Zwaarder en robuuster dan aluminium.", footer: "Modellen: Venus 4/6 kops, Musa 4/6/10 kops." },
      { kicker: "Onderhoud", title: "Onderdelen levenslang beschikbaar", body: "Afdichtringen, filterplaatjes en ventieltjes zijn ruim voorradig. Jaarlijks ringetje vervangen en je Bialetti gaat 10 tot 20 jaar mee.", footer: "Lage onderhoudskosten, geen elektronica." },
    ],
    choices: [
      { badge: "Icoon (€35–50)", title: "→ Bialetti Moka Express", body: "Het originele ontwerp uit 1933. Aluminium, van 1 tot 12 kops." },
      { badge: "Beste prijs-kwaliteit", title: "→ Bialetti Fiammetta", body: "3-kops aluminium instapper rond €35. Ideaal voor wie voor het eerst moka-koffie zet." },
      { badge: "Inductie (€45–80)", title: "→ Bialetti Venus", body: "RVS 4 of 6 kops, werkt op elke kookplaat inclusief inductie." },
      { badge: "Crema-liefhebber", title: "→ Bialetti Brikka", body: "Gepatenteerde drukklep voor een crema-laag die klassieke moka's niet leveren." },
    ],
    audience: [
      { t: "Beginners", d: "De Fiammetta (3-kops) is een solide, betaalbare instap." },
      { t: "Inductie-keuken", d: "De Venus en Musa zijn RVS-modellen die werken op inductie." },
      { t: "Specifieke behoefte", d: "Brikka voor crema, Mini Express voor onderweg, Moka Express als klassiek origineel." },
      { t: "Minder geschikt als…", d: "…je design prioriteert (kijk naar Alessi) of moderne ergonomie zoekt (Grosche/Vev Vigano)." },
    ],
    related: [
      { t: "Alessi", d: "Design-icoon percolators", href: `${SITE}/marques/alessi/` },
      { t: "G.A.T.", d: "Betaalbaar Italiaans alternatief", href: `${SITE}/marques/gat/` },
      { t: "Vev Vigano", d: "Premium RVS klassiekers", href: `${SITE}/marques/vev-vigano/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen voor inductie", href: `${SITE}/categories/inductie/` },
      { t: "Bialetti vs Alessi", d: "Icoon vs designstuk", href: `${SITE}/vergelijkingen/bialetti-vs-alessi.html` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Welk Bialetti model is het beste voor beginners?", a: "De Fiammetta (3-kops) is een solide instapper: betaalbaar (circa €35), eenvoudig in gebruik en goed gedocumenteerd." },
      { q: "Wat is het verschil tussen aluminium en RVS modellen?", a: "Aluminium (Moka Express, Fiammetta): lichter, goedkoper, alleen gas en elektrisch. RVS (Venus, Musa): zwaarder, inductie-geschikt, makkelijker schoon te houden." },
      { q: "Hoe lang gaat een Bialetti mee?", a: "Met normaal onderhoud 10 tot 20 jaar. Het enige verbruiksonderdeel is het rubber afdichtingsringetje (jaarlijks €2–5)." },
      { q: "Welke Bialetti modellen werken op inductie?", a: "Alleen de RVS modellen Venus en Musa. Aluminium modellen (Moka Express, Fiammetta, Brikka) werken niet op inductie." },
    ],
  },

  // ── E&B LAB ──────────────────────────────────────────────────────────────
  {
    slug: "eb-lab",
    name: "E&B Lab",
    since: "2019",
    origin: "Milaan, Italië",
    seoTitle: "E&B Lab Percolators 2026 — Porselein-moka uit Milaan",
    seoDesc: "E&B Lab: keramische en porseleinen moka's uit Milaan. Neutrale smaak, modern design en duurzame materialen. Ontdek het volledige gamma.",
    heroBadge: "Merk · sinds 2019",
    heroTitleAccent: "2026",
    heroLead: "E&B Lab is de Milanese uitdager: de eerste die de moka in porselein maakt in plaats van in metaal. Andere warmteoverdracht, andere smaak, andere esthetiek.",
    heroWhyStrong: "Waarom E&B Lab?",
    heroWhyBody: "Porselein geeft geen smaak af aan de koffie: geen aluminiumnoot, geen metaalzuur. De behuizing is bovendien recyclebaar en dishwasher-safe — een moderne herinterpretatie van een negentigjarig object.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Porselein i.p.v. metaal", d: "Chemisch inert materiaal — extractie zonder metaalafgifte, wat het smaakprofiel opvallend zuiverder maakt." },
      { t: "Vaatwasserbestendig", d: "Uniek in de moka-wereld: onderdelen mogen wél in de vaatwasser, tot 90°C." },
      { t: "Modern design", d: "Cilindervormen in gedempte kleuren (wit, salie, terracotta) — een breuk met het klassieke achthoekige silhouet." },
      { t: "Duurzaam productieproces", d: "Klei uit Europa, productie in Italië, geen coating of chemische afwerking." },
    ],
    models: [
      { name: "E&B Lab Barbara", tag: "Signature porselein", spec: "3–6 kops porselein · Elke kookplaat behalve inductie", href: `${SITE}/marques/eb-lab/barbara.html`, img: seed("ebl-barbara") },
      { name: "E&B Lab Elettra", tag: "Elektrische versie", spec: "3 kops · Elektrisch snoerloos", href: `${SITE}/marques/eb-lab/elettra.html`, img: seed("ebl-elettra") },
      { name: "E&B Lab Chiara", tag: "Kleurenlijn", spec: "3 kops · Salie, terracotta, wit", href: `${SITE}/marques/eb-lab/chiara.html`, img: seed("ebl-chiara") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Technisch porselein", body: "Gebrand op 1250°C, harder dan gewoon aardewerk en beter bestand tegen thermische schokken. Neutraal, poriën-vrij en niet-reactief.", footer: "Alle voedingscontact-onderdelen zijn keramisch." },
      { kicker: "Smaak", title: "Neutrale extractie", body: "Zonder metaal geen aluminium- of RVS-noot. Fruitige en bloemige koffies komen scherper naar voren.", footer: "Populair bij specialty-drinkers." },
      { kicker: "Vaatwasser", title: "Volledig afwasmachinebestendig", body: "Als enige moka mag E&B Lab in de vaatwasser. Handig, maar de ring apart bewaren om levensduur te verlengen.", footer: "Tot 90°C toegestaan." },
      { kicker: "Beperking", title: "Niet voor inductie", body: "Porselein is niet-magnetisch — een inductieplaat detecteert de moka niet. Voor inductie kies je Bialetti Venus of Vev Vigano.", footer: "Wel: gas, elektrisch, halogeen, keramisch." },
    ],
    choices: [
      { badge: "Puurste smaak", title: "→ E&B Lab Barbara", body: "Het referentiemodel. Volledig porselein, 3 of 6 kops, geschikt voor elke kookplaat behalve inductie." },
      { badge: "Zonder fornuis", title: "→ E&B Lab Elettra", body: "Elektrische versie met eigen basis — ideaal op kantoor of in kleine studio zonder gasaansluiting." },
      { badge: "Kleuraccent", title: "→ E&B Lab Chiara", body: "Zelfde behuizing als Barbara, maar in salie, terracotta of gebroken wit." },
      { badge: "Cadeau specialty-drinker", title: "→ Gift set porselein", body: "Voor filterkoffie- of specialty-liefhebbers die klassiek metaal te dominant vinden qua smaak." },
    ],
    audience: [
      { t: "Specialty-drinkers", d: "Wie fruitige, lichte branders drinkt en metaalnotities weg wil houden uit het kopje." },
      { t: "Moderne keukens", d: "Neutrale kleuren en cilindervormen sluiten aan bij minimalistische inrichtingen." },
      { t: "Cadeau", d: "Onderscheidend genoeg om als speciaal gebaar te geven, minder gangbaar dan Bialetti of Alessi." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of een quasi-onbreekbare moka wil — porselein is breekbaar bij val." },
    ],
    related: [
      { t: "Bialetti", d: "Klassieke metalen referentie", href: `${SITE}/marques/bialetti/` },
      { t: "Alessi", d: "Design-alternatief in metaal", href: `${SITE}/marques/alessi/` },
      { t: "Vev Vigano", d: "Premium RVS voor inductie", href: `${SITE}/marques/vev-vigano/` },
      { t: "Keramische percolators", d: "Alle niet-metalen modellen", href: `${SITE}/categories/keramisch/` },
      { t: "Percolator vs espressoapparaat", d: "Verschillen in smaak", href: `${SITE}/koopgids/percolator-vs-espressoapparaat.html` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Kan een E&B Lab breken?", a: "Ja, porselein is breekbaarder dan aluminium of RVS. Bij normaal gebruik gaat een E&B Lab probleemloos jaren mee; laat hem echter niet vallen." },
      { q: "Werkt E&B Lab op inductie?", a: "Nee — porselein is niet-magnetisch. Gebruik gas, elektrisch, halogeen of keramisch." },
      { q: "Waarom zou porselein beter smaken?", a: "Metaal geeft in kleine hoeveelheden ionen af die de smaak beïnvloeden. Porselein is chemisch inert, dus de koffie krijgt geen extra noten mee." },
      { q: "Is E&B Lab prijzig?", a: "Reken op €55–90 — vergelijkbaar met een Bialetti Venus, duurder dan een aluminium Moka Express, goedkoper dan een Alessi 9090." },
    ],
  },

  // ── FOREVER ──────────────────────────────────────────────────────────────
  {
    slug: "forever",
    name: "Forever",
    since: "1962",
    origin: "Omegna, Italië",
    seoTitle: "Forever Percolators 2026 — Kleurrijk aluminium uit Omegna",
    seoDesc: "Forever Miss Splendy: kleurrijke gelakte aluminium percolators uit Italië. Ontdek gamma, formaten en accessoires in één overzicht.",
    heroBadge: "Merk · sinds 1962",
    heroTitleAccent: "2026",
    heroLead: "Forever, gebaseerd in Omegna (het hart van de Italiaanse metallurgie), maakt vrolijk gelakte aluminium moka's onder de bekende Miss Splendy-lijn.",
    heroWhyStrong: "Waarom Forever?",
    heroWhyBody: "Betaalbaar aluminium (€25–40), een van de breedste kleurenwaaiers op de markt en gemaakt in Italië. Populair als cadeau of om samen te stellen met een matchende Moka-lijn.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Made in Omegna", d: "Gemaakt in dezelfde regio als Bialetti en Alessi — het historische hart van de Italiaanse metaalverwerking." },
      { t: "Kleurenspectrum", d: "Meer dan 15 kleuren, van pastel tot metallic, wat Forever bijna uniek maakt in het aluminium segment." },
      { t: "Prijs-kwaliteit", d: "Vergelijkbare afwerking als grote merken, maar consequent €5–10 lager geprijsd." },
      { t: "Cadeau-verpakking", d: "Miss Splendy komt in een cadeauwaardige doos — populair als bruiloftsbedankje of housewarming-gift." },
    ],
    models: [
      { name: "Forever Miss Splendy", tag: "Signature kleurenlijn", spec: "1–6 kops aluminium · 15+ kleuren", href: `${SITE}/marques/forever/miss-splendy.html`, img: seed("forever-splendy") },
      { name: "Forever Prestige", tag: "Metallic afwerking", spec: "3–6 kops aluminium · Chroom, brons, koper", href: `${SITE}/marques/forever/prestige.html`, img: seed("forever-prestige") },
      { name: "Forever Miss Moka", tag: "Compact", spec: "1–3 kops · Ideaal solo", href: `${SITE}/marques/forever/miss-moka.html`, img: seed("forever-miss-moka") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Gelakt aluminium", body: "Klassiek aluminium met een dubbele laklaag buitenop, waardoor kleuren jaren mooi blijven zonder verkleuring.", footer: "Alleen extern gelakt — binnen ruw aluminium." },
      { kicker: "Kleuren", title: "15+ tinten", body: "Van pastelroze en mint tot mat zwart en koperkleur. Vaak matchend met een Forever theepot of ontbijtset.", footer: "Beperkte edities per seizoen." },
      { kicker: "Formaten", title: "1 tot 6 kops", body: "Volledige range, met 1-kops als moeilijk te vinden formaat elders (echte espresso-solo dosis).", footer: "Geen inductie-versies." },
      { kicker: "Prijs", title: "Betaalbaar segment", body: "Positionering tussen €25 en €40, iets onder Bialetti-vergelijkbare formaten.", footer: "Ideaal als vervolg- of tweede exemplaar." },
    ],
    choices: [
      { badge: "Cadeau (€25–35)", title: "→ Forever Miss Splendy", body: "Kies de kleur van de ontvanger. Populair als bruiloft- of housewarminggift." },
      { badge: "Solo drinker", title: "→ Forever Miss Moka 1-kops", body: "Een van de weinige echte 1-kops modellen. Perfect als je alleen woont of één klein kopje wil." },
      { badge: "Metallic keuken", title: "→ Forever Prestige", body: "Kopertint of chroom voor keukens met gepolijst rvs en messing accenten." },
      { badge: "Set", title: "→ Miss Splendy + kopjes", body: "Forever verkoopt matchende espressokopjes: een compleet ontbijtritueel in één kleur." },
    ],
    audience: [
      { t: "Cadeaugevers", d: "Onmiddellijk herkenbare cadeaubox met kleuroptie." },
      { t: "Solo huishoudens", d: "1-kops model is zeldzaam en beter dan een 3-kops half gevuld." },
      { t: "Kleurmatching", d: "Voor keukens waar witgoed, textiel en accessoires bewust gecoördineerd zijn." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of maximale duurzaamheid zoekt — kies dan een RVS Bialetti of Vev Vigano." },
    ],
    related: [
      { t: "Aeternum", d: "Vergelijkbaar kleurrijk aluminium", href: `${SITE}/marques/aeternum/` },
      { t: "Pezzetti", d: "Alternatief made in Italy", href: `${SITE}/marques/pezzetti/` },
      { t: "Bialetti", d: "Klassieke referentie", href: `${SITE}/marques/bialetti/` },
      { t: "Aluminium percolators", d: "Volledig categorieoverzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Onderhoud", d: "Reiniging aluminium moka", href: `${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html` },
      { t: "Accessoires", d: "Ringen, filters, kopjes", href: `${SITE}/shop/accessoires-italiaanse-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Forever op inductie?", a: "Nee. Forever maakt uitsluitend aluminium moka's, dus geen inductie-compatibiliteit." },
      { q: "Blijft de lak intact?", a: "Ja, mits handmatig afgewassen. Vaatwasser en agressieve schoonmaakmiddelen tasten de kleur aan." },
      { q: "Is Forever echt Italiaans?", a: "Ja, productie in Omegna, Piemonte — dezelfde regio als Bialetti en Alessi." },
      { q: "Hoe verhoudt Forever zich tot Bialetti?", a: "Vergelijkbare kwaliteit aluminium, iets lager geprijsd, met een veel breder kleurenpalet. Bialetti heeft dan weer meer varianten (inductie, crema)." },
    ],
  },

  // ── G.A.T. ───────────────────────────────────────────────────────────────
  {
    slug: "gat",
    name: "G.A.T.",
    since: "1970",
    origin: "Alessandria, Italië",
    seoTitle: "G.A.T. Percolators 2026 — Betaalbare Italiaanse moka's",
    seoDesc: "G.A.T. (Grandi Attrezzi Termodomestici): Italiaanse aluminium en RVS-percolators tegen scherpe prijzen. Vergelijk het complete gamma.",
    heroBadge: "Merk · sinds 1970",
    heroTitleAccent: "2026",
    heroLead: "G.A.T. (Grandi Attrezzi Termodomestici) is de generalist onder de Italiaanse merken. Volledig gamma in aluminium en RVS, met de nadruk op prijs en beschikbaarheid.",
    heroWhyStrong: "Waarom G.A.T.?",
    heroWhyBody: "De op prijs-kwaliteit best gepositioneerde Italiaanse fabrikant: authentiek Italiaans, breed gamma inclusief inductie, en consequent €5–15 goedkoper dan Bialetti-equivalenten.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Prijs-kwaliteit", d: "Consequent onder Bialetti geprijsd zonder in te leveren op materiaal of afwerking." },
      { t: "Breed gamma", d: "Aluminium én RVS, inductie-geschikte modellen, verschillende formaten (1–18 kops)." },
      { t: "Made in Italy", d: "Alle productie in Alessandria (Piemonte) — een van de grootste onafhankelijke Italiaanse fabrikanten." },
      { t: "Grote formaten", d: "G.A.T. maakt tot 18-kops modellen — nuttig voor horeca of grote gezinnen." },
    ],
    models: [
      { name: "G.A.T. Fashion", tag: "Best verkochte", spec: "1–18 kops aluminium · Klassieke lijn", href: `${SITE}/marques/gat/fashion.html`, img: seed("gat-fashion") },
      { name: "G.A.T. Vulcano", tag: "Inductie-geschikt", spec: "3–6 kops RVS · Alle kookplaten", href: `${SITE}/marques/gat/vulcano.html`, img: seed("gat-vulcano") },
      { name: "G.A.T. Nina", tag: "Kleurrijke lijn", spec: "3–6 kops aluminium · Pastel", href: `${SITE}/marques/gat/nina.html`, img: seed("gat-nina") },
      { name: "G.A.T. 106", tag: "Groot volume", spec: "12–18 kops · Voor horeca & feest", href: `${SITE}/marques/gat/106.html`, img: seed("gat-106") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Aluminium & RVS", body: "G.A.T. maakt zowel klassiek gepolijst aluminium (Fashion) als volledig RVS (Vulcano) — hetzelfde pakket dat Bialetti aanbiedt.", footer: "Vulcano-lijn is inductie-geschikt." },
      { kicker: "Prijs", title: "Onder Bialetti", body: "Voor een vergelijkbaar formaat en materiaal reken je op 15–25% korting t.o.v. Bialetti — zonder duidelijk kwaliteitsverlies.", footer: "Ideaal budgetkeuze." },
      { kicker: "Formaten", title: "Tot 18 kops", body: "Weinig merken maken zulke grote moka's. Handig voor familie-brunch of horeca die filterkoffie én moka wil aanbieden.", footer: "1, 2, 3, 4, 6, 9, 12, 18 kops." },
      { kicker: "Onderdelen", title: "Standaard maten", body: "G.A.T. gebruikt standaard ringmaten die vaak passen op Bialetti-modellen en omgekeerd — makkelijk te onderhouden.", footer: "Onderdelen breed verkrijgbaar." },
    ],
    choices: [
      { badge: "Beste budget (€15–25)", title: "→ G.A.T. Fashion 3-kops", body: "De goedkoopste echt-Italiaanse moka die je zonder aarzelen kan aanraden." },
      { badge: "Inductie budget", title: "→ G.A.T. Vulcano", body: "RVS, inductie-geschikt, rond €35 — bijna de helft van een Bialetti Venus." },
      { badge: "Groot huishouden", title: "→ G.A.T. Fashion 12/18-kops", body: "Weinig merken maken zulke grote formaten voor deze prijs." },
      { badge: "Kleurkeuze", title: "→ G.A.T. Nina", body: "Pastelkleuren voor wie kleur wil zonder Aeternum- of Forever-toeslag." },
    ],
    audience: [
      { t: "Budgetbewuste kopers", d: "Italiaanse kwaliteit zonder Bialetti-markup." },
      { t: "Grote gezinnen & horeca", d: "12- en 18-kops maten zijn G.A.T.'s troefkaart." },
      { t: "Inductie zonder premium", d: "Vulcano biedt inductie tegen bijna halve prijs t.o.v. bekendste merk." },
      { t: "Minder geschikt als…", d: "…je een design-object zoekt of een merknaam op tafel wil hebben. G.A.T. is functioneel, geen icoon." },
    ],
    related: [
      { t: "Bialetti", d: "Duurdere referentie", href: `${SITE}/marques/bialetti/` },
      { t: "Pedrini", d: "Vergelijkbaar budgetsegment", href: `${SITE}/marques/pedrini/` },
      { t: "Mokavit", d: "Alternatief aluminium", href: `${SITE}/marques/mokavit/` },
      { t: "Grote percolators", d: "6+ kops modellen", href: `${SITE}/categories/6-plus-kops/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Is G.A.T. echt Italiaans?", a: "Ja, alle productie in Alessandria (Piemonte). Het is een van de grootste onafhankelijke Italiaanse fabrikanten." },
      { q: "Waarom is G.A.T. goedkoper dan Bialetti?", a: "Kleinere marketingbudgetten en minder retail-marge. Materiaal en productieproces zijn vergelijkbaar." },
      { q: "Passen Bialetti-ringen op G.A.T.?", a: "In veel formaten (3-kops, 6-kops) ja — de standaardmaten zijn compatibel. Controleer altijd de diameter." },
      { q: "Welke G.A.T. voor inductie?", a: "De Vulcano-lijn (RVS) is inductie-geschikt. De Fashion-lijn is aluminium en werkt alleen op gas/elektrisch." },
    ],
  },

  // ── GIANNINI ─────────────────────────────────────────────────────────────
  {
    slug: "giannini",
    name: "Giannini",
    since: "1946",
    origin: "Omegna, Italië",
    seoTitle: "Giannini Percolators 2026 — De klassieke RVS-moka",
    seoDesc: "Giannini: sinds 1946 iconische RVS-percolators uit Italië. Ontdek Giannina, Tuareg en de klassieke lijn. Inductie-geschikt.",
    heroBadge: "Merk · sinds 1946",
    heroTitleAccent: "2026",
    heroLead: "Giannini bracht in 1958 als eerste merk een moka in roestvrij staal op de markt. De Giannina, met haar herkenbare hoge, ronde vorm, staat sinds decennia op Italiaanse tafels.",
    heroWhyStrong: "Waarom Giannini?",
    heroWhyBody: "De uitvinder van de RVS-moka. Robuust 18/10 staal, elegante hoogte i.p.v. gehoekt silhouet, en volledig inductie-geschikt sinds de basisversie. Een klassieker naast Bialetti.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Uitvinder van RVS-moka", d: "In 1958 als eerste met roestvrijstalen versie — jaren voor concurrenten." },
      { t: "Herkenbare vorm", d: "Hoge, ronde behuizing i.p.v. de achthoekige Bialetti-vorm. Elegant op tafel." },
      { t: "18/10 kwaliteit", d: "Voedingsstaal van premium kwaliteit, volledig inductie-geschikt." },
      { t: "Made in Omegna", d: "Historisch verankerd in dezelfde regio als Bialetti en Alessi." },
    ],
    models: [
      { name: "Giannini Giannina", tag: "Iconisch model", spec: "1–9 kops RVS · Inductiegeschikt", href: `${SITE}/marques/giannini/giannina.html`, img: seed("giannini-giannina") },
      { name: "Giannini Tuareg", tag: "Modern RVS", spec: "3–6 kops RVS · Zwart handvat", href: `${SITE}/marques/giannini/tuareg.html`, img: seed("giannini-tuareg") },
      { name: "Giannini New Diva", tag: "Ergonomische lijn", spec: "3–6 kops · Nieuw handvat 2020", href: `${SITE}/marques/giannini/new-diva.html`, img: seed("giannini-diva") },
    ],
    techs: [
      { kicker: "Materiaal", title: "18/10 RVS-body", body: "Premium voedingsstaal (18% chroom, 10% nikkel). Roestvrij, corrosiebestendig en dishwasher-safe in de behuizing.", footer: "Levensduur 15+ jaar." },
      { kicker: "Inductie", title: "Standaard bodem", body: "Elke Giannini heeft een sandwich-bodem met ferromagnetische laag — werkt uit de doos op inductie.", footer: "Geen adapterschijf nodig." },
      { kicker: "Design", title: "Ronde hoge silhouet", body: "Giannini koos voor een hoge, taps toelopende vorm i.p.v. de achthoek — subtiele Italiaanse elegantie op tafel.", footer: "Verkrijgbaar in gepolijst en satinato." },
      { kicker: "Formaten", title: "Tot 9 kops", body: "Het volledige gamma dekt solo (1-kops) tot familie (9-kops). De 3-kops is verreweg de populairste.", footer: "Alle maten inductie-geschikt." },
    ],
    choices: [
      { badge: "Beste allrounder", title: "→ Giannini Giannina 3-kops", body: "Referentiemodel: RVS, inductie-geschikt, ~€65. Directe concurrent van Bialetti Venus." },
      { badge: "Familie", title: "→ Giannina 6 of 9-kops", body: "Zelfde kwaliteit in groter formaat. Handig voor 4+ personen." },
      { badge: "Modern", title: "→ Giannini Tuareg", body: "Mat zwart handvat en modernere lijn voor keukens met donkere accenten." },
      { badge: "Ergonomie", title: "→ Giannini New Diva", body: "Herwerkte greep uit 2020 — comfortabeler bij groter volume koffie." },
    ],
    audience: [
      { t: "Inductie-gebruikers", d: "Elk Giannini-model werkt op inductie zonder toebehoren." },
      { t: "Klassiek-elegant", d: "Voor wie de achthoekige Bialetti-vorm iets te aanwezig vindt." },
      { t: "Lange levensduur", d: "18/10 RVS gaat decennia mee bij normaal gebruik." },
      { t: "Minder geschikt als…", d: "…je een aluminium klassieker of felle kleur zoekt. Kijk dan naar Bialetti Moka Express of Forever." },
    ],
    related: [
      { t: "Bialetti", d: "Grotere aluminium naam", href: `${SITE}/marques/bialetti/` },
      { t: "Vev Vigano", d: "Premium RVS alternatief", href: `${SITE}/marques/vev-vigano/` },
      { t: "Ilsa", d: "Andere RVS-Milanese school", href: `${SITE}/marques/ilsa/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "RVS percolators", d: "Alle roestvrijstalen modellen", href: `${SITE}/categories/rvs/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Giannini op inductie?", a: "Ja, elke Giannini heeft een inductiegeschikte bodem — een van hun kernvoordelen sinds 1958." },
      { q: "Verschil Giannini vs Bialetti Venus?", a: "Giannini is de originele RVS-moka met hoger silhouet; Bialetti Venus behield de achthoekige vorm. Prijs en materiaal zijn vergelijkbaar." },
      { q: "Mag Giannini in de vaatwasser?", a: "De behuizing wel, maar rubber ring en filterplaat handmatig afwassen om levensduur te verlengen." },
      { q: "Wat kost een Giannini?", a: "Reken op €45–90 afhankelijk van formaat en lijn. De klassieke Giannina 3-kops zit rond €65." },
    ],
  },

  // ── ILSA ─────────────────────────────────────────────────────────────────
  {
    slug: "ilsa",
    name: "Ilsa",
    since: "1935",
    origin: "Fondazione a Milaan, Italië",
    seoTitle: "Ilsa Percolators 2026 — Milanese RVS voor horeca en thuis",
    seoDesc: "Ilsa: Milanees RVS-vakmanschap sinds 1935. Percolators voor thuis én horeca, in klassieke, moderne en professionele uitvoeringen.",
    heroBadge: "Merk · sinds 1935",
    heroTitleAccent: "2026",
    heroLead: "Ilsa uit Milaan is bij Italiaanse baristas even bekend als bij thuisgebruikers: hetzelfde huis maakt professionele barmateriaal én RVS-moka's voor in de keuken.",
    heroWhyStrong: "Waarom Ilsa?",
    heroWhyBody: "Ilsa-percolators zijn zwaar, RVS 18/10 en gebouwd op horeca-niveau. Ideaal als je een moka wil die decennia meegaat en zonder problemen dagelijks belast wordt.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Horeca-DNA", d: "Ilsa levert al 90 jaar barmateriaal — dezelfde bouwkwaliteit zit in hun consumentenmoka's." },
      { t: "Zwaar 18/10 RVS", d: "Dikke wanden, robuuste bodems. Zwaarder dan Giannini en Vev Vigano in vergelijkbare formaten." },
      { t: "Inductie standaard", d: "Alle modellen werken op inductie zonder adapter." },
      { t: "Milanees design", d: "Sober, functioneel silhouet — minder speels dan Alessi, minder rond dan Giannini." },
    ],
    models: [
      { name: "Ilsa Classic", tag: "Referentiemodel", spec: "3–6 kops RVS · Inductiegeschikt", href: `${SITE}/marques/ilsa/classic.html`, img: seed("ilsa-classic") },
      { name: "Ilsa Slim", tag: "Moderne lijn", spec: "3 kops · Slank profiel", href: `${SITE}/marques/ilsa/slim.html`, img: seed("ilsa-slim") },
      { name: "Ilsa Espresso Napoletana", tag: "Napolitaanse omkeerkan", spec: "1–9 kops · Traditioneel", href: `${SITE}/marques/ilsa/napoletana.html`, img: seed("ilsa-napoletana") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Zwaar 18/10", body: "Dikker RVS dan de gemiddelde consumentenmoka. Merkbaar in gewicht en warmteretentie — zorgt voor stabielere extractie.", footer: "Horeca-standaard." },
      { kicker: "Napoletana", title: "Omkeerkan-traditie", body: "Ilsa is een van de weinige merken die nog echte cuccumella (Napolitaanse omkeerkan) produceert — een filterkoffie-precursor.", footer: "Gebruikt op laag vuur, zonder druk." },
      { kicker: "Inductie", title: "Sandwich-bodem", body: "Ferromagnetische bodemplaat is standaard geïntegreerd — géén losse schijf nodig.", footer: "Werkt op elke plaat." },
      { kicker: "Prijs", title: "Premium segment", body: "Reken op €70–150 voor moka's, cuccumella tot €120. Positioneert boven Bialetti/Giannini, onder Alessi.", footer: "Levensduur compenseert prijs." },
    ],
    choices: [
      { badge: "Beste allrounder", title: "→ Ilsa Classic 3-kops", body: "De sterkste bouwkwaliteit in het middensegment. Voelt aan als een professional-tool." },
      { badge: "Traditioneel Napolitaans", title: "→ Ilsa Napoletana", body: "Voor wie de klassieke cuccumella wil proberen — zachtere, filter-achtige koffie zonder druk." },
      { badge: "Moderne keuken", title: "→ Ilsa Slim", body: "Slanker profiel voor rustigere aanrechten." },
      { badge: "Cadeau barista", title: "→ Ilsa Classic 6-kops + accessoires", body: "Herkend en gewaardeerd in het vak — een cadeau voor koffie-professionals." },
    ],
    audience: [
      { t: "Heavy users", d: "Dagelijks meerdere zettingen — Ilsa is gebouwd voor dat regime." },
      { t: "Horeca-affiniteit", d: "Wie waardeert dat een merk óók professioneel materiaal maakt." },
      { t: "Traditionalisten", d: "De Napoletana blijft een unieke aankoop in dit gamma." },
      { t: "Minder geschikt als…", d: "…je een lichte, kleurige moka wil. Ilsa is bewust industrieel en zwaar." },
    ],
    related: [
      { t: "Giannini", d: "Andere RVS-klassieker", href: `${SITE}/marques/giannini/` },
      { t: "Vev Vigano", d: "Premium RVS design", href: `${SITE}/marques/vev-vigano/` },
      { t: "Lagostina", d: "Ander horeca-erfgoed", href: `${SITE}/marques/lagostina/` },
      { t: "Napoletana modellen", d: "Alle omkeerkannen", href: `${SITE}/categories/napoletana/` },
      { t: "Inductie percolators", d: "Volledig overzicht", href: `${SITE}/categories/inductie/` },
      { t: "Percolator vs espressoapparaat", d: "Wat past bij jou?", href: `${SITE}/koopgids/percolator-vs-espressoapparaat.html` },
    ],
    faqs: [
      { q: "Werkt Ilsa op inductie?", a: "Ja, standaard op elk RVS-model. De Napoletana echter is qua bodem controleerbaar per uitvoering — nakijken bij aankoop." },
      { q: "Wat is een Napoletana of cuccumella?", a: "Een omkeerkan zonder druk: water in onderkamer, koffie in filter, boven de kan draaien wanneer stoom ontsnapt. Zachte, filter-achtige extractie." },
      { q: "Is Ilsa duurder dan Bialetti?", a: "Ja — reken op 50 tot 100% meer voor vergelijkbaar formaat, in ruil voor zwaarder RVS en horeca-afwerking." },
      { q: "Mag Ilsa in de vaatwasser?", a: "Behuizing wel, ring en filter niet. Standaard advies voor alle RVS-moka's." },
    ],
  },

  // ── LAGOSTINA ────────────────────────────────────────────────────────────
  {
    slug: "lagostina",
    name: "Lagostina",
    since: "1901",
    origin: "Omegna, Italië",
    seoTitle: "Lagostina Percolators 2026 — RVS-erfgoed sinds 1901",
    seoDesc: "Lagostina: 120+ jaar Italiaans RVS-vakmanschap. Ontdek de percolators van dit historische merk dat bekend werd met snelkookpannen.",
    heroBadge: "Merk · sinds 1901",
    heroTitleAccent: "2026",
    heroLead: "Lagostina groeide in de 20e eeuw uit tot dé Italiaanse referentie in RVS-kookgerei. Sinds decennia maken ze ook moka-percolators — RVS, inductie-geschikt en beoordeeld op dezelfde standaarden als hun snelkookpannen.",
    heroWhyStrong: "Waarom Lagostina?",
    heroWhyBody: "Meer dan een eeuw ervaring in Italiaans RVS. Sandwich-bodems die je normaal alleen op professionele kookpannen ziet, en een historisch familiegevoel dat je op weinig andere moka's ervaart.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "120+ jaar erfgoed", d: "Een van de oudste Italiaanse kookgerei-merken, gestart in 1901 in Omegna." },
      { t: "Multi-layer bodem", d: "Dezelfde thermodiffusie-technologie als in Lagostina snelkookpannen." },
      { t: "Inductie standaard", d: "Elk RVS-model is uit de doos inductie-geschikt." },
      { t: "Made in Italy", d: "Volledige productie in Italië, ondanks internationale groepsstructuur (SEB)." },
    ],
    models: [
      { name: "Lagostina Domus", tag: "Bestseller", spec: "3–6 kops RVS · Inductiegeschikt", href: `${SITE}/marques/lagostina/domus.html`, img: seed("lagostina-domus") },
      { name: "Lagostina Purity", tag: "Gepolijst design", spec: "3 kops · Mirror-finish", href: `${SITE}/marques/lagostina/purity.html`, img: seed("lagostina-purity") },
      { name: "Lagostina Casino", tag: "Groot volume", spec: "9 kops · Familie- en gastformaat", href: `${SITE}/marques/lagostina/casino.html`, img: seed("lagostina-casino") },
    ],
    techs: [
      { kicker: "Bodem", title: "Thermodiffusie multi-layer", body: "Aluminium- en RVS-lagen samengeperst voor gelijkmatige warmteverdeling — techniek overgenomen van Lagostina-snelkookpannen.", footer: "Geen hot spots op de bodem." },
      { kicker: "Materiaal", title: "18/10 voedingsstaal", body: "Premium roestvrij staal met karakteristieke gepolijste afwerking. Enkele modellen in satinato voor mattere look.", footer: "Vaatwasserbestendig in behuizing." },
      { kicker: "Handvat", title: "Ergonomisch handgreepdesign", body: "Nauwe consultatie met horeca-testpanels: handvat blijft koel en biedt vaste grip zelfs met natte handen.", footer: "Warmte-isolerend materiaal." },
      { kicker: "Inductie", title: "Direct compatibel", body: "Sandwich-bodem is ferromagnetisch — geen adapter, geen speciale versie nodig.", footer: "Werkt op alle Europese kookplaten." },
    ],
    choices: [
      { badge: "Beste RVS (€60–90)", title: "→ Lagostina Domus 3-kops", body: "Dé Lagostina-referentie: alle voordelen van het merk zonder premium-toeslag." },
      { badge: "Design op tafel", title: "→ Lagostina Purity", body: "Mirror-finish afwerking voor visueel opvallende presentatie." },
      { badge: "Familie", title: "→ Lagostina Casino 9-kops", body: "Grote maat, dezelfde bouwkwaliteit als kleinere modellen." },
      { badge: "Cadeau", title: "→ Lagostina + eigen kopjes", body: "Het historische verhaal (sinds 1901) maakt Lagostina een sterk cadeau bij verhuis of huwelijk." },
    ],
    audience: [
      { t: "Kwaliteitszoekers", d: "Wie zelfde bodemtechnologie wil als in premium kookpannen." },
      { t: "Inductie-eigenaars", d: "Direct compatibel, zonder extra aankopen." },
      { t: "Traditie-liefhebbers", d: "Een van de oudste Italiaanse kookgerei-merken." },
      { t: "Minder geschikt als…", d: "…je een kleurrijke of iconische aluminium moka zoekt — kijk dan naar Bialetti Moka Express of Forever." },
    ],
    related: [
      { t: "Giannini", d: "Andere RVS-klassieker", href: `${SITE}/marques/giannini/` },
      { t: "Ilsa", d: "Milanese RVS-school", href: `${SITE}/marques/ilsa/` },
      { t: "Vev Vigano", d: "Premium design in RVS", href: `${SITE}/marques/vev-vigano/` },
      { t: "Inductie percolators", d: "Volledig overzicht", href: `${SITE}/categories/inductie/` },
      { t: "RVS percolators", d: "Alle roestvrijstalen modellen", href: `${SITE}/categories/rvs/` },
      { t: "Onderhoud", d: "Reiniging & levensduur", href: `${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Lagostina op inductie?", a: "Ja, alle Lagostina-percolators zijn standaard inductie-geschikt via hun multi-layer bodem." },
      { q: "Wat is thermodiffusie?", a: "Techniek waarbij aluminium tussen twee lagen RVS wordt geplaatst. Aluminium geleidt warmte snel en gelijk, RVS is roestvrij — je krijgt het beste van beide." },
      { q: "Wat kost een Lagostina moka?", a: "Doorgaans €60–100 afhankelijk van formaat. Positionering vergelijkbaar met Bialetti Musa." },
      { q: "Verschil Lagostina vs Bialetti Musa?", a: "Vergelijkbare RVS-kwaliteit, maar Lagostina komt uit een kookgerei-traditie i.p.v. moka-traditie — merkbaar in bodem en gewicht." },
    ],
  },

  // ── MOKAVIT ──────────────────────────────────────────────────────────────
  {
    slug: "mokavit",
    name: "Mokavit",
    since: "1965",
    origin: "Italië",
    seoTitle: "Mokavit Percolators 2026 — Klassiek Italiaans aluminium",
    seoDesc: "Mokavit: klassieke aluminium moka-percolators uit Italië. Betaalbaar, functioneel en trouw aan het originele achthoekige silhouet.",
    heroBadge: "Merk · sinds 1965",
    heroTitleAccent: "2026",
    heroLead: "Mokavit is een van die stille Italiaanse merken die decennialang stabiel aluminium moka's leveren zonder de marketingdrukte van Bialetti. Klassiek en trouw aan de originele vorm.",
    heroWhyStrong: "Waarom Mokavit?",
    heroWhyBody: "Doet één ding goed: klassieke aluminium moka's tegen scherpe prijzen. Achthoekig silhouet, standaard reserveonderdelen en beschikbaar in alle populaire formaten.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Klassiek silhouet", d: "Trouw aan de achthoekige moka-vorm — geen designexperimenten." },
      { t: "Standaard onderdelen", d: "Ringmaten en filters compatibel met Bialetti-formaten." },
      { t: "Betaalbaar", d: "Positionering rond €18–30, onder Bialetti-vergelijkbare formaten." },
      { t: "Italiaanse productie", d: "Made in Italy, ondanks lagere naamsbekendheid." },
    ],
    models: [
      { name: "Mokavit Classic", tag: "Basismodel", spec: "1–12 kops aluminium · Achthoekig", href: `${SITE}/marques/mokavit/classic.html`, img: seed("mokavit-classic") },
      { name: "Mokavit Elegance", tag: "Gepolijst", spec: "3–6 kops · Spiegelafwerking", href: `${SITE}/marques/mokavit/elegance.html`, img: seed("mokavit-elegance") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Standaard aluminium", body: "Klassiek gegoten aluminium, gepolijst en licht in het handvat. Werkt op gas, elektrisch en halogeen.", footer: "Geen coating." },
      { kicker: "Compatibiliteit", title: "Universele ringen", body: "3-kops en 6-kops maten zijn compatibel met de meeste Bialetti- en G.A.T.-ringen. Onderdelen vindt je overal.", footer: "Belangrijk voor lange levensduur." },
      { kicker: "Prijs", title: "Instapsegment", body: "€18–30 afhankelijk van formaat. Ideaal als tweede moka of vervanging.", footer: "Zonder in te leveren op materiaal." },
      { kicker: "Beperking", title: "Geen inductie", body: "Zuiver aluminium — werkt niet op inductie. Voor inductie kies Bialetti Venus, Giannini of G.A.T. Vulcano.", footer: "Wel gas/elektrisch." },
    ],
    choices: [
      { badge: "Goedkoop origineel", title: "→ Mokavit Classic 3-kops", body: "Onder €25 heb je een authentiek Italiaans aluminium exemplaar." },
      { badge: "Elegant", title: "→ Mokavit Elegance", body: "Gepolijste versie voor iets meer visuele aanwezigheid op tafel." },
      { badge: "Groot huishouden", title: "→ Mokavit Classic 9/12-kops", body: "Grote maten aan een fractie van de Bialetti-prijs." },
      { badge: "Tweede moka", title: "→ Klassiek naast RVS-model", body: "Combineer met een Venus of Giannina voor inductie — Mokavit blijft je gas-alternatief." },
    ],
    audience: [
      { t: "Budgetkopers", d: "Wie Italiaanse authenticiteit wil zonder Bialetti-toeslag." },
      { t: "Tweede exemplaar", d: "Voor het weekendhuis of de camper." },
      { t: "Traditionalisten", d: "Geen kleurexperimenten of designfratsen." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of design zoekt — kijk dan naar Giannini, Alessi of Vev Vigano." },
    ],
    related: [
      { t: "G.A.T.", d: "Vergelijkbaar budgetsegment", href: `${SITE}/marques/gat/` },
      { t: "Bialetti", d: "Bekende referentie", href: `${SITE}/marques/bialetti/` },
      { t: "Pedrini", d: "Alternatief in aluminium", href: `${SITE}/marques/pedrini/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Accessoires", d: "Ringen en filters", href: `${SITE}/shop/accessoires-italiaanse-percolator.html` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Mokavit op inductie?", a: "Nee. Mokavit maakt alleen aluminium modellen — voor inductie kies je een RVS-merk." },
      { q: "Zijn Bialetti-ringen compatibel?", a: "In veel formaten (3-kops, 6-kops) ja. Controleer altijd de exacte diameter om zeker te zijn." },
      { q: "Hoe lang gaat een Mokavit mee?", a: "Bij normaal gebruik en jaarlijkse ringvervanging: 8–15 jaar. Vergelijkbaar met Bialetti Moka Express." },
      { q: "Waar koop ik Mokavit?", a: "Online en in gespecialiseerde Italiaanse retailers. Minder aanwezig in reguliere supermarkten dan Bialetti of G.A.T." },
    ],
  },

  // ── PEDRINI ──────────────────────────────────────────────────────────────
  {
    slug: "pedrini",
    name: "Pedrini",
    since: "1955",
    origin: "Lumezzane, Italië",
    seoTitle: "Pedrini Percolators 2026 — Italiaans keukenerfgoed",
    seoDesc: "Pedrini: sinds 1955 keukengerei uit Lumezzane. Ontdek de aluminium en RVS-percolators van dit populaire Italiaanse familiemerk.",
    heroBadge: "Merk · sinds 1955",
    heroTitleAccent: "2026",
    heroLead: "Pedrini uit Lumezzane (Brescia) is bekend bij Italiaanse gezinnen als een merk voor solide, betaalbaar keukengerei. Hun percolator-gamma volgt dezelfde logica: functioneel, breed en toegankelijk.",
    heroWhyStrong: "Waarom Pedrini?",
    heroWhyBody: "Familiemerk sinds 1955 met een breed gamma keukengerei — een van de weinige merken die tegelijk aluminium en RVS-moka's aanbiedt, allemaal tegen scherpe prijzen.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Familiebedrijf", d: "Zeventig jaar Italiaans keukengerei uit Lumezzane, historisch centrum voor metaalbewerking." },
      { t: "Breed gamma", d: "Aluminium én RVS-modellen, verschillende formaten en inductie-opties." },
      { t: "Prijs-kwaliteit", d: "Constant onder Bialetti geprijsd, meestal €5–10 goedkoper." },
      { t: "Beschikbaar", d: "Ruim verkrijgbaar in Italiaanse supermarkten en online — jouw reserveringen (ringen, filters) makkelijk te vervangen." },
    ],
    models: [
      { name: "Pedrini Kaffa", tag: "Populaire aluminium", spec: "1–9 kops aluminium · Gas & elektrisch", href: `${SITE}/marques/pedrini/kaffa.html`, img: seed("pedrini-kaffa") },
      { name: "Pedrini Polo", tag: "Inductie RVS", spec: "3–6 kops RVS · Alle kookplaten", href: `${SITE}/marques/pedrini/polo.html`, img: seed("pedrini-polo") },
      { name: "Pedrini Alba", tag: "Kleurenlijn", spec: "3 kops aluminium · Pastel", href: `${SITE}/marques/pedrini/alba.html`, img: seed("pedrini-alba") },
    ],
    techs: [
      { kicker: "Aluminium", title: "Kaffa-lijn", body: "Klassieke aluminium moka in klassieke achthoekige vorm. Gepolijst, licht en betaalbaar.", footer: "1 tot 9 kops beschikbaar." },
      { kicker: "RVS", title: "Polo-lijn", body: "Volledig 18/10 RVS met inductie-bodem. De Pedrini-tegenhanger van Bialetti Venus.", footer: "3 en 6 kops." },
      { kicker: "Kleur", title: "Alba pastelserie", body: "Alba-lijn brengt gedempte pasteltinten in de aluminium behuizing — moderne interpretatie van de klassieker.", footer: "Populair als cadeau." },
      { kicker: "Prijs", title: "Middensegment", body: "Kaffa vanaf €18, Polo vanaf €40. Ideaal voor wie budget en kwaliteit wil combineren.", footer: "Zonder premium markup." },
    ],
    choices: [
      { badge: "Beste budget aluminium", title: "→ Pedrini Kaffa 3-kops", body: "Onder €25 en volledig Italiaans." },
      { badge: "Inductie zonder Bialetti-prijs", title: "→ Pedrini Polo", body: "RVS, inductie-geschikt, rond €40. Directe alternatief voor Bialetti Venus." },
      { badge: "Kleur", title: "→ Pedrini Alba", body: "Pasteltinten voor lichter gestemde keukens." },
      { badge: "Familie", title: "→ Pedrini Kaffa 9-kops", body: "Groot volume aan lage prijs." },
    ],
    audience: [
      { t: "Prijsbewuste kopers", d: "Betaalbaar én Italiaans — een sterke combinatie." },
      { t: "Wie zowel gas als inductie heeft", d: "Kaffa voor gas, Polo voor inductie: één merk, alle situaties." },
      { t: "Praktische huishoudens", d: "Geen designstukken, wel functioneel gereedschap." },
      { t: "Minder geschikt als…", d: "…je een designstuk of premium RVS wil. Kijk naar Alessi, Ilsa of Vev Vigano." },
    ],
    related: [
      { t: "G.A.T.", d: "Zelfde budgetsegment", href: `${SITE}/marques/gat/` },
      { t: "Bialetti", d: "Premium tegenhanger", href: `${SITE}/marques/bialetti/` },
      { t: "Mokavit", d: "Vergelijkbaar aluminium", href: `${SITE}/marques/mokavit/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Pedrini op inductie?", a: "Alleen de Polo-lijn (RVS) is inductie-geschikt. De aluminium Kaffa en Alba niet." },
      { q: "Hoe verhoudt Pedrini zich tot Bialetti?", a: "Kwaliteit is vergelijkbaar in aluminium; Bialetti heeft echter meer varianten (crema-klep, brede formaten) en is bekender." },
      { q: "Wat kost een Pedrini?", a: "Kaffa vanaf €18, Polo vanaf €40 — merkbaar onder Bialetti-tarief bij vergelijkbaar formaat." },
      { q: "Is Pedrini echt Italiaans?", a: "Ja, productie in Lumezzane, provincie Brescia. Familiebedrijf sinds 1955." },
    ],
  },

  // ── PEZZETTI ─────────────────────────────────────────────────────────────
  {
    slug: "pezzetti",
    name: "Pezzetti",
    since: "1947",
    origin: "Piemonte, Italië",
    seoTitle: "Pezzetti Percolators 2026 — Italexpress en kleurrijke moka",
    seoDesc: "Pezzetti: kleurrijke Italiaanse moka's sinds 1947. Ontdek Italexpress en Steelexpress in alle formaten en tinten.",
    heroBadge: "Merk · sinds 1947",
    heroTitleAccent: "2026",
    heroLead: "Pezzetti maakt sinds 1947 kleurrijke moka's in Piemonte. De Italexpress is bijna even herkenbaar op Italiaanse aanrechten als de klassieke Bialetti.",
    heroWhyStrong: "Waarom Pezzetti?",
    heroWhyBody: "Sterke kleurenwaaier in klassiek aluminium, plus een groeiende RVS-lijn (Steelexpress) voor inductie. Een van de weinige merken die zowel breedte in kleuren als in materialen aanbiedt.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Kleurenexpert", d: "Italexpress in 10+ kleuren, van klassiek zilver tot koraal, salie en zwart." },
      { t: "Beide materialen", d: "Aluminium (Italexpress) én RVS (Steelexpress) onder dezelfde vlag." },
      { t: "Made in Italy", d: "Productie in Piemonte, dezelfde regio als Bialetti en Alessi." },
      { t: "Betaalbaar", d: "Positionering onder Bialetti bij vergelijkbaar formaat en afwerking." },
    ],
    models: [
      { name: "Pezzetti Italexpress", tag: "Bestseller aluminium", spec: "1–14 kops aluminium · 10+ kleuren", href: `${SITE}/marques/pezzetti/italexpress.html`, img: seed("pezzetti-italexpress") },
      { name: "Pezzetti Steelexpress", tag: "Inductie RVS", spec: "2–10 kops RVS · Alle kookplaten", href: `${SITE}/marques/pezzetti/steelexpress.html`, img: seed("pezzetti-steelexpress") },
      { name: "Pezzetti Bellexpress", tag: "Design gebogen", spec: "3–6 kops aluminium · Ronde vormen", href: `${SITE}/marques/pezzetti/bellexpress.html`, img: seed("pezzetti-bellexpress") },
    ],
    techs: [
      { kicker: "Italexpress", title: "Kleurrijke aluminium klassieker", body: "De backbone van het gamma: klassieke achthoekige moka in aluminium, extern gelakt in fabriekskleuren.", footer: "1 tot 14 kops beschikbaar." },
      { kicker: "Steelexpress", title: "RVS voor inductie", body: "Volledig 18/10 RVS-lijn met inductie-bodem, gelanceerd om moderne kookplaten te bedienen.", footer: "Vergelijkbaar met Bialetti Venus." },
      { kicker: "Bellexpress", title: "Bolvormige variant", body: "Ronde silhouet-interpretatie voor wie de achthoek te scherp vindt.", footer: "Alleen in aluminium." },
      { kicker: "Prijs", title: "Middensegment", body: "Italexpress €18–35, Steelexpress €40–65. Consequent onder Bialetti-tarief bij vergelijkbaar formaat.", footer: "Kleuren zonder meerkost." },
    ],
    choices: [
      { badge: "Kleurencadeau", title: "→ Pezzetti Italexpress", body: "Kies de kleur van de ontvanger. Klassieke vorm, felle uitvoering." },
      { badge: "Inductie budget", title: "→ Pezzetti Steelexpress", body: "RVS, inductie-geschikt, meestal €10–15 onder Bialetti Venus." },
      { badge: "Extra groot", title: "→ Italexpress 14-kops", body: "Weinig merken maken zulke grote maten in aluminium." },
      { badge: "Rond design", title: "→ Pezzetti Bellexpress", body: "Alternatief silhouet voor wie een zachtere vorm zoekt." },
    ],
    audience: [
      { t: "Kleurliefhebbers", d: "Ruime keuze in tinten zonder Aeternum-toeslag." },
      { t: "Inductie zonder Bialetti-premium", d: "Steelexpress is een kwalitatief alternatief." },
      { t: "Grote gezinnen", d: "Italexpress tot 14 kops — zeldzaam formaat." },
      { t: "Minder geschikt als…", d: "…je een designstuk zoekt of een breed accessoiregamma verwacht — Bialetti en Alessi bieden dat sterker." },
    ],
    related: [
      { t: "Aeternum", d: "Ander kleurrijk aluminium", href: `${SITE}/marques/aeternum/` },
      { t: "Forever", d: "Kleurmatig alternatief", href: `${SITE}/marques/forever/` },
      { t: "Bialetti", d: "Premium referentie", href: `${SITE}/marques/bialetti/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Pezzetti op inductie?", a: "Alleen de Steelexpress-lijn (RVS) is inductie-geschikt. Italexpress en Bellexpress zijn aluminium en werken niet op inductie." },
      { q: "Hoe verhoudt Pezzetti zich tot Bialetti?", a: "Zelfde regio, vergelijkbare kwaliteit, iets goedkoper en meer kleurkeuze. Bialetti heeft breder gamma en meer varianten (crema)." },
      { q: "Wat kost een Pezzetti?", a: "Italexpress €18–35, Steelexpress €40–65 afhankelijk van formaat en uitvoering." },
      { q: "Zijn de kleuren duurzaam?", a: "Ja, handmatig afwassen is het advies. Vaatwasser tast de lak op termijn aan." },
    ],
  },

  // ── RISOLI ───────────────────────────────────────────────────────────────
  {
    slug: "risoli",
    name: "Risolì",
    since: "1959",
    origin: "Salerno, Italië",
    seoTitle: "Risolì Percolators 2026 — Antiaanbak-specialist uit Salerno",
    seoDesc: "Risolì: sinds 1959 Italiaans keukengerei met signature antiaanbaklaag. Ontdek de moka-percolators van deze coating-specialist.",
    heroBadge: "Merk · sinds 1959",
    heroTitleAccent: "2026",
    heroLead: "Risolì uit Salerno is dé Italiaanse expert in antiaanbaklagen — bekend bij thuisgebruikers voor koekenpannen en steeds meer voor moka-percolators met dezelfde coatingtechnologie.",
    heroWhyStrong: "Waarom Risolì?",
    heroWhyBody: "Interne antiaanbaklaag op mokaklep en filter maakt reiniging opvallend eenvoudiger dan bij ruw aluminium. Ideaal voor wie moka-koffie wil zonder onderhoudsritueel.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Coating-specialist", d: "60+ jaar ervaring in antiaanbaklagen voor Italiaanse keukens." },
      { t: "Makkelijke reiniging", d: "Interne coating voorkomt aangebakken koffieresten en verkort schoonmaak." },
      { t: "Smaakneutraler", d: "Coating isoleert koffie van aluminium — minder metaalsmaak in het kopje." },
      { t: "Made in Italy", d: "Productie in Salerno, buiten het klassieke Piemonte-cluster." },
    ],
    models: [
      { name: "Risolì Espresso", tag: "Signature coating", spec: "3–6 kops aluminium · Antiaanbaklaag", href: `${SITE}/marques/risoli/espresso.html`, img: seed("risoli-espresso") },
      { name: "Risolì Extra", tag: "Robuuster", spec: "3 kops · Verdikte coating", href: `${SITE}/marques/risoli/extra.html`, img: seed("risoli-extra") },
    ],
    techs: [
      { kicker: "Coating", title: "Interne antiaanbaklaag", body: "Voedselveilig coatingsysteem in de onderkamer, boilerkamer én filter. Voorkomt aangebakken residu na jaren gebruik.", footer: "PFOA-vrij, veilig tot 220°C." },
      { kicker: "Reiniging", title: "Minder onderhoud", body: "Waar klassieke aluminium moka's regelmatig ontkalking en scrub vragen, houdt de Risolì-coating de binnenkant glad en makkelijk afspoelbaar.", footer: "Nooit vaatwasser, wel snelle handafwas." },
      { kicker: "Smaak", title: "Neutrale extractie", body: "Coating isoleert de koffie fysiek van het aluminium — de befaamde metaalzuurtjes uit oude moka's blijven weg.", footer: "Vergelijkbaar effect als E&B Lab in porselein." },
      { kicker: "Beperking", title: "Niet voor inductie", body: "Aluminium blijft aluminium — Risolì werkt niet op inductie. Voor inductie kies je een RVS-merk.", footer: "Wel gas, elektrisch, halogeen." },
    ],
    choices: [
      { badge: "Beste onderhoud", title: "→ Risolì Espresso", body: "Wie klaar is met scrubben en ontkalken. Coating verlengt de gebruiksperiode zonder ritueel." },
      { badge: "Voor gevoelige tongen", title: "→ Risolì Extra", body: "Verdikte coating voor wie extra ver wil gaan in smaakisolatie." },
      { badge: "Weekendhuis", title: "→ Risolì Espresso 6-kops", body: "Bij onregelmatig gebruik voorkomt de coating aangeslagen residu tussen twee bezoeken." },
      { badge: "Vervanger oude moka", title: "→ Upgrade van klassiek aluminium", body: "Als je vorige moka een metaalsmaak begon af te geven, is Risolì een logische opvolger." },
    ],
    audience: [
      { t: "Smaakgevoeligen", d: "Wie metaalnotities in koffie stoort — coating isoleert de extractie." },
      { t: "Praktische kopers", d: "Minder scrub, minder ontkalking, meer koffie." },
      { t: "Onregelmatige gebruikers", d: "Vakantiehuis, kantoor, tweede keuken — coating helpt bij lange pauzes." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of een puur klassieke Italiaanse moka wil zonder coating." },
    ],
    related: [
      { t: "E&B Lab", d: "Ander alternatief zonder metaalcontact", href: `${SITE}/marques/eb-lab/` },
      { t: "Bialetti", d: "Klassiek referentiepunt", href: `${SITE}/marques/bialetti/` },
      { t: "Aeternum", d: "Ook antiaanbak-aluminium", href: `${SITE}/marques/aeternum/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Onderhoud", d: "Reiniging & coating", href: `${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Is de Risolì-coating veilig?", a: "Ja, PFOA-vrij en gecertificeerd voor voedselcontact. Enige aandachtspunt: geen metalen schuurspons gebruiken." },
      { q: "Werkt Risolì op inductie?", a: "Nee. Het is aluminium — niet-magnetisch en dus niet inductie-geschikt." },
      { q: "Hoe lang blijft de coating intact?", a: "Bij handafwas en normale spons: 5–10 jaar. Vaatwasser en schuurmiddelen verkorten dit drastisch." },
      { q: "Verschil met Aeternum?", a: "Beide merken bieden gecoate aluminium moka's. Risolì is meer coating-gefocust; Aeternum zet in op kleur en design." },
    ],
  },

  // ── STELLA ───────────────────────────────────────────────────────────────
  {
    slug: "stella",
    name: "Stella",
    since: "1946",
    origin: "Italië",
    seoTitle: "Stella Percolators 2026 — Klassieke Italiaanse moka",
    seoDesc: "Stella: historisch Italiaans moka-merk sinds 1946. Ontdek de klassieke aluminium en RVS-percolators van deze bescheiden fabrikant.",
    heroBadge: "Merk · sinds 1946",
    heroTitleAccent: "2026",
    heroLead: "Stella is een bescheiden maar historisch Italiaans mokamerk. Actief sinds 1946, met een gamma dat trouw blijft aan de klassieke moka-vormtaal.",
    heroWhyStrong: "Waarom Stella?",
    heroWhyBody: "Een van die minder luide Italiaanse merken die decennialang stabiele moka's leveren. Zowel aluminium als RVS beschikbaar, met een prijs die bewust onder de grote namen blijft.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Historisch merk", d: "Actief sinds 1946 — bijna even oud als Giannini en Bialetti's belangrijkste periode." },
      { t: "Klassieke vormtaal", d: "Trouw aan het originele achthoekige moka-silhouet, zonder designexperimenten." },
      { t: "Twee materialen", d: "Zowel aluminium als RVS-modellen — inductie-optie voor moderne kookplaten." },
      { t: "Discreet geprijsd", d: "Positionering onder Bialetti en Giannini bij vergelijkbaar formaat." },
    ],
    models: [
      { name: "Stella Classica", tag: "Aluminium referentie", spec: "1–9 kops aluminium · Klassiek achthoekig", href: `${SITE}/marques/stella/classica.html`, img: seed("stella-classica") },
      { name: "Stella Inox", tag: "Inductie RVS", spec: "3–6 kops RVS · Alle kookplaten", href: `${SITE}/marques/stella/inox.html`, img: seed("stella-inox") },
    ],
    techs: [
      { kicker: "Aluminium", title: "Classica-lijn", body: "Klassieke gepolijste aluminium moka, achthoekig silhouet, van 1 tot 9 kops. Werkt op gas, elektrisch en halogeen.", footer: "Zonder coating." },
      { kicker: "RVS", title: "Inox-lijn", body: "18/10 roestvrijstalen versie met inductie-bodem. Directe concurrent van Bialetti Venus en Pedrini Polo.", footer: "Vaatwasserbestendig." },
      { kicker: "Onderdelen", title: "Standaard maten", body: "Ringen en filters volgen de gangbare Italiaanse maten — makkelijk te vervangen bij elke gespecialiseerde retailer.", footer: "Levensduurbevorderend." },
      { kicker: "Prijs", title: "Onder de grote namen", body: "Classica vanaf €22, Inox vanaf €38. Iets onder Pedrini, duidelijk onder Bialetti.", footer: "Geen premium-toeslag." },
    ],
    choices: [
      { badge: "Beste budget klassieker", title: "→ Stella Classica 3-kops", body: "Onder €25 heb je een authentiek Italiaans aluminium exemplaar in klassieke vorm." },
      { badge: "Inductie budget", title: "→ Stella Inox 3-kops", body: "Rond €40 — een van de goedkoopste RVS-moka's die je 'made in Italy' kan noemen." },
      { badge: "Familie", title: "→ Stella Classica 6/9-kops", body: "Grote maten aan bescheiden prijs voor wie meerdere kopjes tegelijk zet." },
      { badge: "Alternatief voor Bialetti", title: "→ Stella als tweede exemplaar", body: "Naast een designstuk of premium RVS als dagelijkse budget-uitvoering." },
    ],
    audience: [
      { t: "Budgetkopers", d: "Italiaanse authenticiteit zonder premium markup." },
      { t: "Traditionalisten", d: "Geen kleuren, geen coatings, geen designfratsen." },
      { t: "Beide kookplaten", d: "Classica voor gas, Inox voor inductie: één merk voor twee situaties." },
      { t: "Minder geschikt als…", d: "…je een kleurrijke of designgerichte moka wil. Kijk naar Aeternum, Pezzetti of Alessi." },
    ],
    related: [
      { t: "Mokavit", d: "Vergelijkbaar bescheiden merk", href: `${SITE}/marques/mokavit/` },
      { t: "G.A.T.", d: "Zelfde budgetsegment", href: `${SITE}/marques/gat/` },
      { t: "Bialetti", d: "Premium tegenhanger", href: `${SITE}/marques/bialetti/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Stella op inductie?", a: "Alleen de Inox-lijn (RVS). De Classica-lijn is aluminium en werkt niet op inductie." },
      { q: "Hoe verhoudt Stella zich tot Bialetti?", a: "Vergelijkbare kwaliteit in aluminium, iets goedkoper, minder naamsbekendheid. Bialetti heeft breder gamma en meer varianten." },
      { q: "Wat kost een Stella?", a: "Classica vanaf €22, Inox vanaf €38. Onder Pedrini, duidelijk onder Bialetti." },
      { q: "Zijn de onderdelen beschikbaar?", a: "Ja, standaard maten — Bialetti- en G.A.T.-ringen passen doorgaans op vergelijkbare Stella-formaten." },
    ],
  },

  // ── TOP MOKA ─────────────────────────────────────────────────────────────
  {
    slug: "top-moka",
    name: "Top Moka",
    since: "1978",
    origin: "Italië",
    seoTitle: "Top Moka Percolators 2026 — Kleurrijk aluminium sinds 1978",
    seoDesc: "Top Moka: kleurrijke Italiaanse moka's met gelakte aluminium body. Ontdek Simpaty, Aida en Mini in alle formaten en tinten.",
    heroBadge: "Merk · sinds 1978",
    heroTitleAccent: "2026",
    heroLead: "Top Moka is de Italiaanse specialist in vrolijk gelakte aluminium moka's. Een groeiend merk dat vooral op design en kleuraccenten inzet.",
    heroWhyStrong: "Waarom Top Moka?",
    heroWhyBody: "Ruime kleurenwaaier, klassieke vorm, betaalbare positionering. Populair als cadeau en als kleuraccent op moderne aanrechten.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "Kleurenexpert", d: "Meer dan 12 kleuren beschikbaar, waaronder mat zwart, koraal, mint en poederblauw." },
      { t: "Gelakte afwerking", d: "Externe laklaag houdt kleuren jarenlang levendig — mits handafwas." },
      { t: "Made in Italy", d: "Volledig gemaakt in Italië, ondanks lagere naamsbekendheid dan Bialetti of Alessi." },
      { t: "Cadeauwaardig", d: "Populair als bruiloftsbedankje of housewarming door de kleurkeuze." },
    ],
    models: [
      { name: "Top Moka Simpaty", tag: "Signature kleurenlijn", spec: "1–10 kops aluminium · 12+ kleuren", href: `${SITE}/marques/top-moka/simpaty.html`, img: seed("topmoka-simpaty") },
      { name: "Top Moka Aida", tag: "Metallic", spec: "3–6 kops · Chroom, brons, koper", href: `${SITE}/marques/top-moka/aida.html`, img: seed("topmoka-aida") },
      { name: "Top Moka Mini", tag: "Solo", spec: "1 kops · Compact", href: `${SITE}/marques/top-moka/mini.html`, img: seed("topmoka-mini") },
    ],
    techs: [
      { kicker: "Materiaal", title: "Gelakt aluminium", body: "Traditioneel aluminium gietwerk met dubbele externe laklaag. Kleuren blijven scherp bij correcte reiniging.", footer: "Geen coating binnenin." },
      { kicker: "Kleurenwaaier", title: "12+ tinten", body: "Van pastelroze tot mat zwart, poederblauw en koraal — een van de breedste kleurgamma's in de aluminium categorie.", footer: "Seizoenskleuren gelimiteerd." },
      { kicker: "Formaten", title: "1 tot 10 kops", body: "Zeldzame breedte voor een kleurmerk: van 1-kops solo tot 10-kops familie in dezelfde lijn.", footer: "Alle formaten in Simpaty." },
      { kicker: "Prijs", title: "Toegankelijk", body: "Simpaty vanaf €25, Aida vanaf €30. Consequent onder Bialetti bij vergelijkbaar formaat.", footer: "Kleur zonder toeslag." },
    ],
    choices: [
      { badge: "Cadeau", title: "→ Top Moka Simpaty", body: "Kies een kleur die matcht met de keuken van de ontvanger. Populair huwelijks- of housewarming-cadeau." },
      { badge: "Solo espresso", title: "→ Top Moka Mini 1-kops", body: "Voor wie alleen woont of exact één kopje wil, zonder de bijsmaak van een half gevulde moka." },
      { badge: "Warmere keuken", title: "→ Top Moka Aida koper", body: "Metallic koperafwerking voor keukens met messing, brons of gepolijst rvs." },
      { badge: "Familie", title: "→ Top Moka Simpaty 10-kops", body: "Groot volume in kleur — zeldzaam elders." },
    ],
    audience: [
      { t: "Kleurliefhebbers", d: "Wie moka als aanrechtdecor beschouwt, niet enkel als koffiemachine." },
      { t: "Solo huishoudens", d: "1-kops uitvoering — moeilijk te vinden bij andere merken." },
      { t: "Cadeaugevers", d: "Kleurkeuze maakt personalisatie mogelijk." },
      { t: "Minder geschikt als…", d: "…je op inductie kookt of een RVS-model zoekt — Top Moka is uitsluitend aluminium." },
    ],
    related: [
      { t: "Aeternum", d: "Ander kleurrijk aluminium", href: `${SITE}/marques/aeternum/` },
      { t: "Forever", d: "Vergelijkbare kleurenlijn", href: `${SITE}/marques/forever/` },
      { t: "Pezzetti", d: "Kleur + RVS-optie", href: `${SITE}/marques/pezzetti/` },
      { t: "Aluminium percolators", d: "Volledig overzicht", href: `${SITE}/categories/aluminium/` },
      { t: "1–2 kops percolators", d: "Solo-formaten", href: `${SITE}/categories/1-2-kops/` },
      { t: "Hoe kies je een percolator?", d: "Complete koopgids", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
    ],
    faqs: [
      { q: "Werkt Top Moka op inductie?", a: "Nee. Top Moka maakt uitsluitend aluminium modellen — voor inductie kies je een RVS-merk." },
      { q: "Blijven de kleuren mooi?", a: "Bij handafwas: 5–10 jaar zonder zichtbaar verlies. Vaatwasser en agressieve middelen tasten de lak sneller aan." },
      { q: "Hoe verhoudt Top Moka zich tot Forever of Aeternum?", a: "Vergelijkbare positionering. Top Moka heeft iets bredere formaatrange (tot 10 kops); Forever heeft sterkere merkbekendheid; Aeternum voegt interne coating toe." },
      { q: "Wat kost een Top Moka?", a: "Simpaty vanaf €25, Aida (metallic) vanaf €30. Mini 1-kops rond €22." },
    ],
  },

  // ── VEV VIGANO ───────────────────────────────────────────────────────────
  {
    slug: "vev-vigano",
    name: "Vev Vigano",
    since: "1939",
    origin: "Milaan, Italië",
    seoTitle: "Vev Vigano Percolators 2026 — Milanees RVS-design",
    seoDesc: "Vev Vigano: sinds 1939 Milanese ontwerp-percolators in premium RVS. Ontdek Kontessa, Vespress en Carioca. Inductie standaard.",
    heroBadge: "Merk · sinds 1939",
    heroTitleAccent: "2026",
    heroLead: "Vev Vigano uit Milaan combineert 85 jaar ervaring in RVS met een uitgesproken designsignatuur. Hun Kontessa is een van de meest herkenbare premium moka's op de markt.",
    heroWhyStrong: "Waarom Vev Vigano?",
    heroWhyBody: "Premium RVS 18/10, uitgesproken designs (Kontessa, Vespress), inductie standaard en volledig Italiaanse productie. Positioneert direct naast Alessi qua design, maar met een pragmatischer bouwstijl.",
    heroImage: HERO_FALLBACK,
    reasons: [
      { t: "85 jaar ervaring", d: "Sinds 1939 gespecialiseerd in RVS-percolators — een van de langste onafgebroken tradities in de sector." },
      { t: "Design-signatuur", d: "Kontessa met gefacetteerd silhouet is even herkenbaar als een Alessi 9090, aan een pragmatischer prijspunt." },
      { t: "Premium 18/10", d: "Zwaar voedingsstaal, sandwich-bodem, inductie standaard bij het volledige gamma." },
      { t: "Milanees vakmanschap", d: "Productie in de Milanese metaalregio, met eigen ontwerp en assemblage." },
    ],
    models: [
      { name: "Vev Vigano Kontessa", tag: "Iconisch design", spec: "1–10 kops RVS · Gefacetteerde body", href: `${SITE}/marques/vev-vigano/kontessa.html`, img: seed("vev-kontessa") },
      { name: "Vev Vigano Vespress", tag: "Klassiek RVS", spec: "3–6 kops · Ronde vormen", href: `${SITE}/marques/vev-vigano/vespress.html`, img: seed("vev-vespress") },
      { name: "Vev Vigano Carioca", tag: "Compact", spec: "3 kops · Slank profiel", href: `${SITE}/marques/vev-vigano/carioca.html`, img: seed("vev-carioca") },
    ],
    techs: [
      { kicker: "Kontessa", title: "Gefacetteerde signatuur", body: "De Kontessa heeft een geribbeld silhouet dat de moka een sculpturaal karakter geeft — een van de meest recognizable premium designs.", footer: "1 tot 10 kops beschikbaar." },
      { kicker: "Materiaal", title: "18/10 met sandwich-bodem", body: "Premium RVS-behuizing met multi-layer bodem voor gelijkmatige warmte. Vergelijkbare bodemtechnologie als Lagostina.", footer: "Standaard inductie-geschikt." },
      { kicker: "Design", title: "Milanese school", body: "Vormtaal ligt tussen strak-functioneel (Ilsa) en overtuigd design (Alessi). Vev Vigano vindt daar zijn eigen midden.", footer: "Voor liefhebbers van vormgeving met terughoudendheid." },
      { kicker: "Prijs", title: "Premium segment", body: "Kontessa 3-kops vanaf €80, grotere maten tot €150. Vergelijkbaar met Alessi Pulcina.", footer: "Levensduur 15–20 jaar." },
    ],
    choices: [
      { badge: "Design-icoon (€80–120)", title: "→ Vev Vigano Kontessa 3-kops", body: "De handtekening van het merk. Zichtbaar sculpturaal op tafel, functioneel voor dagelijkse zetting." },
      { badge: "Klassiek RVS", title: "→ Vev Vigano Vespress", body: "Voor wie een premium RVS wil zonder gefacetteerd silhouet." },
      { badge: "Solo/duo", title: "→ Vev Vigano Carioca 3-kops", body: "Slank profiel dat in kleinere keukens beter past." },
      { badge: "Familie", title: "→ Kontessa 6 of 10-kops", body: "Zelfde design in groter volume — het silhouet werkt op alle formaten." },
    ],
    audience: [
      { t: "Designliefhebbers", d: "Wie Alessi te bekend vindt en een alternatief met eigen signatuur zoekt." },
      { t: "Inductie premium", d: "Elke Vev Vigano is standaard inductie-geschikt via sandwich-bodem." },
      { t: "Levenslang bezit", d: "Premium RVS + degelijke bodem = 15–20 jaar zonder degradatie." },
      { t: "Minder geschikt als…", d: "…je een goedkope dagelijkse moka wil. Kies dan G.A.T., Pedrini of Bialetti." },
    ],
    related: [
      { t: "Alessi", d: "Design-referentie", href: `${SITE}/marques/alessi/` },
      { t: "Giannini", d: "Klassiek RVS-alternatief", href: `${SITE}/marques/giannini/` },
      { t: "Ilsa", d: "Milanese school, industrieel", href: `${SITE}/marques/ilsa/` },
      { t: "Inductie percolators", d: "Alle RVS-modellen", href: `${SITE}/categories/inductie/` },
      { t: "RVS percolators", d: "Volledig overzicht", href: `${SITE}/categories/rvs/` },
      { t: "Bialetti vs Alessi", d: "Design-vergelijking", href: `${SITE}/vergelijkingen/bialetti-vs-alessi.html` },
    ],
    faqs: [
      { q: "Werkt Vev Vigano op inductie?", a: "Ja, elk model heeft standaard een sandwich-bodem met ferromagnetische laag. Geen adapter nodig." },
      { q: "Verschil Kontessa vs Alessi 9090?", a: "Beide iconen. 9090 (Sapper) is glad en cilindrisch; Kontessa is gefacetteerd en sculpturaler. Kontessa is meestal 20–30% goedkoper." },
      { q: "Wat kost een Vev Vigano?", a: "Kontessa 3-kops vanaf €80, tot €150 voor 10-kops. Positioneert boven Giannini, onder Alessi." },
      { q: "Mag Vev Vigano in de vaatwasser?", a: "Behuizing wel; ring en filter handmatig afwassen. Standaard advies voor RVS-moka's." },
    ],
  },
];

export const BRAND_MAP: Record<string, Brand> = Object.fromEntries(
  BRANDS.map((b) => [b.slug, b]),
);

export type Accessory = {
  title: string;
  desc: string;
  price: string;
  img: string;
  href: string;
};

// Generieke moka-accessoires — bruikbaar bij vrijwel elk merk.
export const SHARED_ACCESSORIES: Accessory[] = [
  {
    title: "Filterplaatje + Siliconen Ring",
    desc: "Onderhoudsset met filterplaatje en siliconen afdichtring. Universele maten voor de meest voorkomende moka-percolators.",
    price: "€11,95",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
  {
    title: "Luchtdichte koffiebus (250 g)",
    desc: "Bewaarbus voor gemalen koffie met lepelhouder. Houdt aroma optimaal en past bij elke keuken.",
    price: "€20,63",
    img: "https://images.unsplash.com/photo-1559525839-d9acfd0e3f3d?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
  {
    title: "RVS koffiefilter",
    desc: "Vervangfilter in roestvrij staal — duurzaam en compatibel met de meeste moka-modellen.",
    price: "€16,90",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
  {
    title: "Siliconen pakkingen (8 stuks)",
    desc: "Voordelige set vervangringen. Handig om jaarlijks de afdichting fris te houden.",
    price: "€19,25",
    img: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
  {
    title: "Koffielepels RVS (4 stuks)",
    desc: "Set doseerlepels in roestvrij staal. Perfect voor consistente extractie.",
    price: "€14,87",
    img: "https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
  {
    title: "Ontkalker voor moka",
    desc: "Milde ontkalker speciaal voor aluminium en RVS percolators. Verlengt de levensduur.",
    price: "€9,50",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    href: "https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html",
  },
];
