import { createFileRoute, notFound } from "@tanstack/react-router";
import { BrandPage } from "@/components/BrandPage";
import { BRAND_MAP } from "@/data/brands";

export const Route = createFileRoute("/marques/$brand")({
  loader: ({ params }) => {
    const brand = BRAND_MAP[params.brand];
    if (!brand) throw notFound();
    return { brand };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Merk niet gevonden — Italiaanse Percolator" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const b = loaderData.brand;
    return {
      meta: [
        { title: b.seoTitle },
        { name: "description", content: b.seoDesc },
        { property: "og:title", content: b.seoTitle },
        { property: "og:description", content: b.seoDesc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BrandRoute,
  notFoundComponent: BrandNotFound,
});

function BrandRoute() {
  const { brand } = Route.useLoaderData();
  return <BrandPage brand={brand} />;
}

function BrandNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl font-semibold text-espresso">Merk niet gevonden</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          De merkpagina die je zoekt bestaat niet (meer). Bekijk de beschikbare merken vanuit de homepagina.
        </p>
        <a href="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Terug naar home →
        </a>
      </div>
    </div>
  );
}
