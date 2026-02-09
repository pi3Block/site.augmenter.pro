import type { Metadata } from "next";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog IA & Digital — Guides Pratiques pour PME (2026)",
  description:
    "Articles, tutos et guides pratiques sur l'IA, la vente commerciale et la digitalisation. Conseils concrets pour PME et indépendants, sans jargon.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Articles &amp; <span className="gradient-text">Tutos</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Conseils pratiques pour les professionnels qui veulent passer au
              niveau supérieur. IA, commercial, outils — sans jargon.
            </p>
          </div>
        </div>
      </section>

      <BlogPreview />

      <CTA />
    </div>
  );
}
