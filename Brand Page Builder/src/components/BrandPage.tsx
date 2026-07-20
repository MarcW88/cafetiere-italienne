import { Link } from "@tanstack/react-router";
import type { Brand } from "@/data/brands";
import { OTHER_BRANDS, SHARED_ACCESSORIES } from "@/data/brands";

const SITE = "https://italiaanse-percolator.nl";

export function BrandPage({ brand }: { brand: Brand }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/60 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 py-3 text-xs text-muted-foreground">
          <a href={`${SITE}/index.html`} className="hover:text-foreground">Home</a>
          <span className="mx-2">/</span>
          <a href={`${SITE}/marques/`} className="hover:text-foreground">Merken</a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{brand.name}</span>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brick" /> {brand.heroBadge}
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-espresso md:text-6xl">
              {brand.name} Percolators <span className="text-brick">{brand.heroTitleAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">
              {brand.heroLead}
            </p>
            <p className="mt-4 max-w-xl rounded-lg border-l-2 border-brick bg-cream/60 px-4 py-3 text-sm leading-relaxed text-foreground/85">
              <strong className="font-semibold text-espresso">{brand.heroWhyStrong}</strong>{" "}
              {brand.heroWhyBody}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="#modellen" className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:bg-primary/90">
                Bekijk modellen
              </a>
              <a href="#kiezen" className="rounded-md border border-border bg-card px-4 py-2 font-medium text-foreground transition hover:bg-muted">
                Welk model past bij mij?
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={brand.heroImage}
              alt={`${brand.name} moka-percolator`}
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-20px_oklch(0.28_0.04_45/0.35)]"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-md md:block">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sinds</div>
              <div className="font-display text-2xl font-semibold text-espresso">{brand.since}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Waarom */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Waarom kiezen voor {brand.name}?
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brand.reasons.map((it) => (
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

      {/* Modellen */}
      <section id="modellen" className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                {brand.name} modellen
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Ontdek het volledige {brand.name}-gamma in één oogopslag: materiaal, formaat en compatibiliteit.
              </p>
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Sorteren: Populair</div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brand.models.map((m) => (
              <a
                key={m.name}
                href={m.href}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-espresso/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cream">
                    {m.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold text-espresso group-hover:text-brick">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.spec}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brick">
                    Bekijk details <span className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Technologie */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          {brand.name} technologie & materialen
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {brand.techs.map((t) => (
            <article key={t.title} className="rounded-xl border border-border bg-card p-6">
              <div className="text-[10px] uppercase tracking-widest text-brick">{t.kicker}</div>
              <h3 className="mt-1 font-display text-xl font-semibold text-espresso">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{t.body}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.footer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Welk model */}
      <section id="kiezen" className="border-y border-border/60 bg-espresso text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Welk {brand.name} model kiezen?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-cream/70">
            Kies snel op basis van je situatie — budget, kookplaat of specifieke behoefte.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {brand.choices.map((c) => {
              const Wrapper = c.href ? "a" : "div";
              const wrapperProps = c.href ? { href: c.href } : {};
              return (
                <Wrapper
                  key={c.title}
                  {...wrapperProps}
                  className="group rounded-xl border border-cream/15 bg-cream/[0.04] p-6 transition hover:border-gold/60 hover:bg-cream/[0.07]"
                >
                  <div className="inline-flex rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-gold">
                    {c.badge}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-cream">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{c.body}</p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Voor wie is een {brand.name} geschikt?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {brand.audience.map((it) => (
            <div key={it.t} className="border-l-2 border-brick/60 pl-4">
              <h3 className="font-display text-lg font-semibold text-espresso">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accessoires */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
                Jouw {brand.name} percolator herstellen en upgraden
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Met de juiste accessoires houd je jouw {brand.name} in topconditie. Vervangringen, filters en onderhoudsproducten
                die passen bij de meest voorkomende moka-modellen.
              </p>
            </div>
            <a
              href="https://italiaanse-percolator.nl/shop/accessoires-italiaanse-percolator.html"
              className="text-sm font-medium text-brick hover:underline"
            >
              Alle accessoires →
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHARED_ACCESSORIES.map((a) => (
              <a
                key={a.title}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-espresso group-hover:text-brick">
                    {a.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{a.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-semibold text-espresso">{a.price}</span>
                    <span className="text-sm font-medium text-brick">
                      Bekijk <span className="transition group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gerelateerd */}
      <section className="border-y border-border/60 bg-cream/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
            Gerelateerde categorieën
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brand.related.map((c) => (
              <a
                key={c.t}
                href={c.href}
                className="group flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-4 transition hover:border-brick hover:bg-card"
              >
                <div>
                  <div className="font-display text-base font-semibold text-espresso group-hover:text-brick">
                    {c.t}
                  </div>
                  <div className="mt-0.5 text-sm text-muted-foreground">{c.d}</div>
                </div>
                <span className="text-brick opacity-0 transition group-hover:opacity-100">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">
          Veelgestelde vragen
        </h2>
        <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
          {brand.faqs.map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium text-espresso">
                {f.q}
                <span className="text-brick transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Explorer */}
      <section className="border-t border-border/60 bg-cream/60">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-display text-2xl font-semibold text-espresso">Verder ontdekken</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Andere merken</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {OTHER_BRANDS.filter((b) => b !== brand.name).map((b) => {
                  const slug = b
                    .toLowerCase()
                    .replace(/&/g, "")
                    .replace(/\./g, "")
                    .replace(/\s+/g, "-")
                    .replace(/--+/g, "-")
                    .replace(/ì/g, "i");
                  return (
                    <Link
                      key={b}
                      to="/marques/$brand"
                      params={{ brand: slug }}
                      className="rounded-full border border-border bg-card px-3 py-1 text-foreground transition hover:border-brick hover:text-brick"
                    >
                      {b}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Categorieën</div>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {["Inductie", "Aluminium", "RVS", "1–2 kops", "6+ kops", "Met crema"].map((c) => (
                  <a
                    key={c}
                    href={`${SITE}/categories/`}
                    className="rounded-full border border-border bg-card px-3 py-1 text-foreground transition hover:border-brick hover:text-brick"
                  >
                    {c}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Handige gidsen</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-foreground hover:text-brick" href={`${SITE}/koopgids/hoe-kies-je-de-juiste-percolator.html`}>
                    Hoe kies je de juiste percolator?
                  </a>
                </li>
                <li>
                  <a className="text-foreground hover:text-brick" href={`${SITE}/koopgids/hoe-onderhoud-je-een-percolator.html`}>
                    Onderhoud & reiniging
                  </a>
                </li>
                <li>
                  <a className="text-foreground hover:text-brick" href={`${SITE}/koopgids/percolator-vs-espressoapparaat.html`}>
                    Percolator vs. espressoapparaat
                  </a>
                </li>
                <li>
                  <a className="text-foreground hover:text-brick" href={`${SITE}/shop/accessoires-italiaanse-percolator.html`}>
                    Alle accessoires →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground">
          <span>© Italiaanse Percolator — {brand.name} merkpagina</span>
          <Link to="/" className="hover:text-foreground">Home</Link>
        </div>
      </footer>
    </div>
  );
}
