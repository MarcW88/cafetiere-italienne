import { createFileRoute, Link } from "@tanstack/react-router";
import { BRANDS } from "@/data/brands";

const SITE = "https://italiaanse-percolator.nl";

export const Route = createFileRoute("/marques/")({
  head: () => ({
    meta: [
      { title: "Italiaanse Percolator Merken 2026 — 16 merken vergeleken" },
      { name: "description", content: "Alle Italiaanse moka-merken op één plek: Bialetti, Alessi, Giannini, Vev Vigano, Pezzetti, G.A.T. en meer. Kies op materiaal, kookplaat, budget en design." },
      { property: "og:title", content: "16 Italiaanse mokamerken vergeleken" },
      { property: "og:description", content: "Van de iconische Bialetti tot design-stukken van Alessi en Vev Vigano — het complete merkenoverzicht." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/marques" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/marques" }],
  }),
  component: MerkenPage,
});

type Group = {
  kicker: string;
  title: string;
  intro: string;
  brands: string[]; // slugs
};

const GROUPS: Group[] = [
  {
    kicker: "Iconen",
    title: "De grote namen",
    intro: "De merken die de moka gedefinieerd hebben. Ruime distributie, breed gamma, referentiepunt voor de rest van de sector.",
    brands: ["bialetti", "alessi", "giannini", "lagostina"],
  },
  {
    kicker: "Design & premium",
    title: "Ontwerp-signatuur",
    intro: "Zwaarder RVS, uitgesproken vormen en levensduur van 15+ jaar. Voor wie de moka als object op tafel wil laten staan.",
    brands: ["vev-vigano", "ilsa", "eb-lab"],
  },
  {
    kicker: "Kleur & cadeau",
    title: "Kleurrijk aluminium",
    intro: "Gelakte aluminium moka's in brede kleurenwaaiers. Prijs onder de grote namen, populair als bruiloftsbedankje of housewarming-cadeau.",
    brands: ["aeternum", "forever", "pezzetti", "top-moka"],
  },
  {
    kicker: "Prijs-kwaliteit",
    title: "Betaalbare Italianen",
    intro: "Volle Italiaanse productie zonder premium-toeslag. Zowel aluminium als inductie-geschikte RVS-varianten.",
    brands: ["gat", "pedrini", "mokavit", "stella", "risoli"],
  },
];

const CHOOSE_ROWS: { need: string; pick: string; slug: string; body: string }[] = [
  { need: "Beste allrounder (klassiek gas)", pick: "Bialetti Moka Express", slug: "bialetti", body: "Het iconische ontwerp uit 1933. Aluminium, 1–12 kops, overal onderdelen te vinden." },
  { need: "Inductie zonder poespas", pick: "Giannini Giannina of Bialetti Venus", slug: "giannini", body: "RVS 18/10, sandwich-bodem, inductie standaard — geen adapter nodig." },
  { need: "Inductie budget", pick: "G.A.T. Vulcano of Pezzetti Steelexpress", slug: "gat", body: "Zelfde functionaliteit voor 30–40% minder dan de premium merken." },
  { need: "Design-object", pick: "Alessi 9090 of Vev Vigano Kontessa", slug: "alessi", body: "Museumwaardige silhouetten in premium RVS, inductie-geschikt." },
  { need: "Crema als espresso", pick: "Bialetti Brikka", slug: "bialetti", body: "Gepatenteerde drukklep bouwt extra druk op — de enige klassieke moka die echt crema levert." },
  { need: "Puurste smaak", pick: "E&B Lab (porselein)", slug: "eb-lab", body: "Zonder metaalcontact, dus geen aluminium- of RVS-noot in het kopje." },
  { need: "Kleurcadeau", pick: "Forever Miss Splendy of Top Moka Simpaty", slug: "forever", body: "12+ tinten, cadeauverpakking, Italiaanse productie." },
  { need: "Kleinste budget", pick: "G.A.T. Fashion of Mokavit Classic", slug: "gat", body: "Onder €25 en volledig made in Italy." },
];

const FAQS = [
  {
    q: "Welk merk maakt de originele moka?",
    a: "Bialetti, in 1933. Alfonso Bialetti ontwierp de achthoekige Moka Express in Crusinallo. Alle andere merken volgden dit model — sommige met eigen aanpassingen (Giannini in RVS vanaf 1958, Brikka met crema-klep, Alessi met design-signaturen).",
  },
  {
    q: "Bialetti of Alessi — welk merk kiezen?",
    a: "Bialetti als je een dagelijkse, betaalbare en overal ondersteunde moka wil. Alessi als je een designstuk met ontwerpershandtekening zoekt en 2–4× de prijs geen probleem is.",
  },
  {
    q: "Welke merken werken op inductie?",
    a: "Alle merken met een volledig RVS-lijn: Bialetti (Venus, Musa), Giannini, Ilsa, Lagostina, Vev Vigano, Alessi (9090), G.A.T. (Vulcano), Pedrini (Polo), Pezzetti (Steelexpress) en Stella (Inox). Zuiver aluminium modellen — hoe herkenbaar ook — werken niet op inductie.",
  },
  {
    q: "Zijn goedkopere merken echt Italiaans?",
    a: "Ja. G.A.T., Pedrini, Mokavit, Stella en Pezzetti produceren allen in Italië, meestal in Piemonte of Lombardije. Het prijsverschil komt van marketingbudgetten en distributie, niet van materiaal.",
  },
  {
    q: "Passen onderdelen tussen merken?",
    a: "Vaak wel voor standaard aluminium 3- en 6-kops modellen (ringen en filterplaatjes zijn genormaliseerd). Voor RVS-lijnen en design-modellen (Brikka, Pulcina, Kontessa) heb je merkspecifieke ringen nodig.",
  },
  {
    q: "Welk merk gaat het langst mee?",
    a: "Premium RVS-modellen: Giannini, Vev Vigano, Ilsa en Lagostina halen bij normaal gebruik 15–20 jaar. Aluminium Bialetti's gaan 10–15 jaar mee. Enige verbruiksstuk overal: het rubberen afdichtingsringetje (jaarlijks, €2–5).",
  },
];

function MerkenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xs text-muted-foreground">
          <a href={`${SITE}/index.html`} className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">Merken</span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr] md:items-center md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brick" /> 16 merken · sinds 1901
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-espresso md:text-6xl">
              Italiaanse moka <span className="text-brick">merken</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
              Zestien Italiaanse merken maken vandaag de moka-percolator zoals we die kennen — van de
              iconische Bialetti uit 1933 tot de porseleinen herinterpretatie van E&B Lab. Elk merk
              heeft een eigen erfgoed, materiaalvoorkeur en prijssegment.
            </p>
            <p className="mt-4 max-w-xl rounded-lg border-l-2 border-brick bg-cream/60 px-4 py-3 text-sm leading-relaxed text-foreground/85">
              <strong className="font-semibold text-espresso">Waarom deze gids?</strong> Onze redactie
              vergeleek de volledige gamma's op materiaal, kookplaatcompatibiliteit, prijs, levensduur
              en onderdelenbeschikbaarheid — zodat jij in 3 minuten weet welk merk bij jou past.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="#alle-merken" className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:bg-primary/90">
                Bekijk alle 16 merken
              </a>
              <a href="#kiezen" className="rounded-md border border-border bg-card px-4 py-2 font-medium text-foreground transition hover:bg-muted">
                Welk merk past bij mij?
              </a>
            </div>
          </div>

          {/* Stats block replacing hero image */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { n: "16", l: "merken" },
              { n: "1901", l: "oudste merk" },
              { n: "€18–200", l: "prijsrange" },
              { n: "10", l: "inductie-lijnen" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="font-display text-4xl font-semibold text-espresso">{s.n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Waarom Italiaanse merken */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Waarom een Italiaans merk kiezen?
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Vakmanschap uit één regio", d: "Piemonte (Omegna, Crusinallo, Alessandria) is al een eeuw hét metaalcentrum van Italië — waar Bialetti, Alessi, Lagostina, Forever en G.A.T. hun productie hebben." },
            { t: "Onderdelen levenslang", d: "Standaard Italiaanse ringmaten passen tussen merken. Jouw moka blijft repareerbaar, ook decennia na aankoop." },
            { t: "Alle materialen", d: "Aluminium (klassiek, licht), 18/10 RVS (inductie, robuust), porselein (E&B Lab) — één cultuur, drie technische scholen." },
            { t: "Alle prijssegmenten", d: "Van €18 (Mokavit, G.A.T.) tot €200 (Alessi 9090). Italië bedient elk budget zonder in te leveren op oorsprong." },
          ].map((it) => (
            <div key={it.t} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brick/10 font-display text-sm font-semibold text-brick">
                ✦
              </div>
              <h3 className="font-display text-lg font-semibold text-espresso">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alle merken - grouped */}
      <section id="alle-merken" className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                Alle merken, per school
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                We groeperen de 16 merken naar hun DNA: iconen, design & premium, kleur & cadeau, en prijs-kwaliteit.
              </p>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">4 scholen · 16 merken</div>
          </div>

          <div className="mt-10 space-y-12">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/60 pb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-brick">{g.kicker}</div>
                    <h3 className="font-display text-2xl font-semibold text-espresso">{g.title}</h3>
                  </div>
                  <p className="max-w-md text-sm text-muted-foreground">{g.intro}</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {g.brands.map((slug) => {
                    const b = BRANDS.find((x) => x.slug === slug)!;
                    return (
                      <Link
                        key={slug}
                        to="/marques/$brand"
                        params={{ brand: slug }}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-brick hover:shadow-md"
                      >
                        <div className="text-[10px] uppercase tracking-widest text-brick">Sinds {b.since}</div>
                        <div className="mt-1 font-display text-xl font-semibold text-espresso group-hover:text-brick">
                          {b.name}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">{b.origin}</div>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/75">
                          {b.heroWhyBody}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brick">
                          Ontdek merk <span className="transition group-hover:translate-x-0.5">→</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-brick">Erfgoed</div>
            <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
              125 jaar Italiaanse moka in één tijdlijn
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Van de eerste Lagostina-fabriek in Piemonte tot de porseleinen herinterpretatie van E&B Lab — een eeuw ontwerp, materiaal en industrie.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { y: "1901", t: "Lagostina", d: "Opgericht in Omegna (Piemonte). Legt de basis voor Italiaanse metaalverwerking van kookgerei." },
            { y: "1933", t: "Bialetti Moka Express", d: "Alfonso Bialetti introduceert de achthoekige moka. Wereldwijd hét silhouet van Italiaanse koffie." },
            { y: "1958", t: "Giannini in RVS", d: "Giannini brengt als eerste een volledig RVS-moka uit — voorloper van elke inductie-percolator." },
            { y: "1979", t: "Alessi 9090", d: "Richard Sapper ontwerpt de 9090 voor Alessi. Opgenomen in de vaste collectie van MoMA New York." },
            { y: "1990", t: "Vev Vigano Kontessa", d: "Vev Vigano lanceert de Kontessa: zwaar RVS met gelaagde bodem, gemaakt voor decennia." },
            { y: "2003", t: "Bialetti Brikka", d: "Gepatenteerde drukklep bouwt extra bar op — de eerste moka die echt crema levert." },
            { y: "2015", t: "Kleurenrevolutie", d: "Forever, Pezzetti en Top Moka herontdekken gelakt aluminium. Moka als vrolijk cadeau-object." },
            { y: "2020+", t: "E&B Lab porselein", d: "Volledig keramische moka — geen metaalcontact, puurste smaakprofiel. Nieuwe technische school." },
          ].map((it) => (
            <li key={it.y} className="relative rounded-xl border border-border bg-card p-5">
              <div className="font-display text-3xl font-semibold text-brick">{it.y}</div>
              <div className="mt-2 font-display text-base font-semibold text-espresso">{it.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Materialen */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
            Drie materialen, drie smaakscholen
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Materiaal bepaalt meer dan design: het beïnvloedt extractie, temperatuurcurve en of je moka op inductie werkt.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                mat: "Aluminium",
                brands: "Bialetti · Aeternum · Forever · G.A.T. · Mokavit · Pezzetti · Stella · Top Moka",
                pros: "Licht, warmt snel op, rondere smaak. Klassieker uit 1933.",
                cons: "Niet inductie-geschikt. Reageert op zuur (regelmatig ontkalken).",
                price: "€18 – €55",
              },
              {
                mat: "RVS 18/10",
                brands: "Bialetti Venus/Musa · Giannini · Ilsa · Lagostina · Vev Vigano · Alessi 9090",
                pros: "Inductie-geschikt, robuust, neutrale smaak. Levensduur 15–20 jaar.",
                cons: "Zwaarder, langere opwarmtijd, hogere aanschafprijs.",
                price: "€45 – €200",
              },
              {
                mat: "Porselein",
                brands: "E&B Lab (Ancàp)",
                pros: "Geen metaalcontact, puurste smaakprofiel, thermisch stabiel.",
                cons: "Breekbaar, alleen gas of speciale kookplaten, beperkt aanbod.",
                price: "€75 – €130",
              },
            ].map((m) => (
              <article key={m.mat} className="rounded-xl border border-border bg-card p-6">
                <div className="text-[10px] uppercase tracking-widest text-brick">Materiaal</div>
                <h3 className="mt-1 font-display text-2xl font-semibold text-espresso">{m.mat}</h3>
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Merken</p>
                <p className="mt-1 text-sm text-foreground/80">{m.brands}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Sterk</p>
                <p className="mt-1 text-sm text-foreground/80">{m.pros}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Zwak</p>
                <p className="mt-1 text-sm text-foreground/80">{m.cons}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs font-medium text-espresso">
                  {m.price}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prijssegmenten */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Prijssegmenten in één oogopslag
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Italiaanse merken bedienen elk budget. Zo verhouden ze zich tot elkaar — van instapmoka tot museumobject.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <div className="hidden grid-cols-[0.8fr_1fr_2fr] gap-4 border-b border-border bg-cream/60 px-5 py-3 text-[10px] uppercase tracking-widest text-muted-foreground md:grid">
            <div>Segment</div>
            <div>Merken</div>
            <div>Wanneer kiezen</div>
          </div>
          {[
            { seg: "€18 – €30", tag: "Instap", brands: "Mokavit · G.A.T. · Stella · Pedrini", when: "Eerste moka, tweede exemplaar voor op reis, of vervanging na een verloren ring." },
            { seg: "€30 – €55", tag: "Klassiek", brands: "Bialetti · Aeternum · Pezzetti · Top Moka · Forever", when: "Dagelijks gebruik, huishouden van 2–4 personen, moka als koffieroutine." },
            { seg: "€55 – €100", tag: "Kwaliteit", brands: "Giannini · Ilsa · Lagostina · Bialetti Musa · G.A.T. Vulcano", when: "Inductie-kookplaat, langere levensduur, RVS als eindkeuze." },
            { seg: "€100 – €200", tag: "Design", brands: "Alessi · Vev Vigano · E&B Lab", when: "Moka als collectiestuk, designbewuste keuken, cadeau met signatuur." },
          ].map((r) => (
            <div key={r.seg} className="grid gap-1 border-b border-border bg-card px-5 py-5 last:border-b-0 md:grid-cols-[0.8fr_1fr_2fr] md:items-center md:gap-4">
              <div>
                <div className="font-display text-lg font-semibold text-espresso">{r.seg}</div>
                <div className="text-xs uppercase tracking-widest text-brick">{r.tag}</div>
              </div>
              <div className="text-sm font-medium text-foreground">{r.brands}</div>
              <div className="text-sm text-muted-foreground">{r.when}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Regio's — Made in Italy */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brick">Made in Italy</div>
              <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                Waar worden Italiaanse moka's gemaakt?
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Bijna alle merken produceren in een handvol noordelijke regio's — vooral Piemonte, Lombardije en Veneto.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { r: "Piemonte", city: "Omegna · Crusinallo · Alessandria", brands: "Bialetti · Alessi · Lagostina · Forever · G.A.T.", note: "Het historische hart van Italiaans metaal­kookgerei. Vijf van de grote namen hebben hier hun fabriek." },
              { r: "Lombardije", city: "Milaan-regio", brands: "Giannini · Vev Vigano · Mokavit", note: "Sterk in RVS-verwerking en inductie-lijnen. Fabrieken vaak familiebedrijven in de derde generatie." },
              { r: "Veneto & Toscane", city: "Vicenza · Florence", brands: "Ilsa · Pezzetti · E&B Lab · Top Moka", note: "Design-affiniteit en kleurenlijnen. Kleinere producenten met sterke esthetische identiteit." },
            ].map((z) => (
              <article key={z.r} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-semibold text-espresso">{z.r}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{z.city}</p>
                <p className="mt-4 text-sm text-foreground/85">{z.brands}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{z.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Welk merk kiezen — tabel */}
      <section id="kiezen" className="border-y border-border/60 bg-espresso text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Welk merk past bij jouw situatie?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-cream/70">
            Snelle beslissingsgids op basis van je belangrijkste behoefte.
          </p>

          <div className="mt-8 overflow-hidden rounded-xl border border-cream/15">
            <div className="hidden grid-cols-[1.1fr_1.2fr_2fr] gap-4 border-b border-cream/15 bg-cream/[0.04] px-5 py-3 text-[10px] uppercase tracking-widest text-cream/60 md:grid">
              <div>Behoefte</div>
              <div>Aanbevolen merk</div>
              <div>Waarom</div>
            </div>
            <div className="divide-y divide-cream/10">
              {CHOOSE_ROWS.map((r) => (
                <Link
                  key={r.need}
                  to="/marques/$brand"
                  params={{ brand: r.slug }}
                  className="grid gap-2 px-5 py-5 transition hover:bg-cream/[0.05] md:grid-cols-[1.1fr_1.2fr_2fr] md:items-center md:gap-4"
                >
                  <div className="text-xs uppercase tracking-widest text-gold">{r.need}</div>
                  <div className="font-display text-base font-semibold text-cream">
                    → {r.pick}
                  </div>
                  <div className="text-sm leading-relaxed text-cream/75">{r.body}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volledige alfabetische lijst */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Alfabetisch overzicht
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          De 16 merken op één plek — klik door voor het volledige gamma, prijzen en modeladvies.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[...BRANDS].sort((a, b) => a.name.localeCompare(b.name)).map((b) => (
            <Link
              key={b.slug}
              to="/marques/$brand"
              params={{ brand: b.slug }}
              className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-brick hover:bg-card"
            >
              <div>
                <div className="font-display text-base font-semibold text-espresso group-hover:text-brick">
                  {b.name}
                </div>
                <div className="text-xs text-muted-foreground">Sinds {b.since} · {b.origin}</div>
              </div>
              <span className="text-brick opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
            Veelgestelde vragen over de merken
          </h2>
          <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
            {FAQS.map((f, i) => (
              <details key={i} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-espresso">
                  {f.q}
                  <span className="text-brick transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Handige gidsen */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-espresso">Verder ontdekken</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Hoe kies je een percolator?", d: "Compleet stappenplan: formaat, materiaal, kookplaat.", href: `${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html` },
            { t: "Onderhoud & reiniging", d: "Ringen vervangen, ontkalken, coating sparen.", href: `${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html` },
            { t: "Percolator vs espressoapparaat", d: "Verschillen in extractie en smaak.", href: `${SITE}/koopgids/percolator-vs-espressoapparaat.html` },
            { t: "Bialetti vs Alessi", d: "Icoon vs designstuk, de directe vergelijking.", href: `${SITE}/vergelijkingen/bialetti-vs-alessi.html` },
            { t: "Inductie percolators", d: "Alle RVS-modellen voor inductiekookplaten.", href: `${SITE}/categories/inductie/` },
            { t: "Accessoires", d: "Ringen, filterplaatjes, kopjes en meer.", href: `${SITE}/shop/accessoires-italiaanse-percolator.html` },
          ].map((g) => (
            <a
              key={g.t}
              href={g.href}
              className="group flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-4 transition hover:border-brick"
            >
              <div>
                <div className="font-display text-base font-semibold text-espresso group-hover:text-brick">{g.t}</div>
                <div className="mt-0.5 text-sm text-muted-foreground">{g.d}</div>
              </div>
              <span className="text-brick opacity-0 transition group-hover:opacity-100">→</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground">
          <span>© Italiaanse Percolator — Merkenoverzicht</span>
          <Link to="/" className="hover:text-foreground">Home</Link>
        </div>
      </footer>
    </div>
  );
}
