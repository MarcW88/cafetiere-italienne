import { createFileRoute, Link } from "@tanstack/react-router";
import { BRANDS } from "@/data/brands";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Italiaanse Percolator — Alle merken op één plek" },
      { name: "description", content: "Vergelijk alle grote Italiaanse moka-merken: Bialetti, Alessi, Giannini, Vev Vigano, Pezzetti en meer. Kies op materiaal, kookplaat en budget." },
      { property: "og:title", content: "Italiaanse Percolator — 16 merken vergeleken" },
      { property: "og:description", content: "Alle Italiaanse mokamerken op één plek — van klassieker Bialetti tot design-icoon Alessi." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-espresso md:text-6xl">
            Alle merken <span className="text-brick">op één plek</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80">
            16 Italiaanse moka-merken vergeleken op materiaal, formaat en kookplaat.
            Van de klassieke Bialetti tot design-iconen zoals Alessi en Vev Vigano.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl font-semibold text-espresso md:text-4xl">Merken</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              to="/marques/$brand"
              params={{ brand: b.slug }}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-brick hover:shadow-md"
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest text-brick">Sinds {b.since}</div>
                <div className="mt-1 font-display text-xl font-semibold text-espresso group-hover:text-brick">
                  {b.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{b.origin}</div>
              </div>
              <span className="text-brick opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
