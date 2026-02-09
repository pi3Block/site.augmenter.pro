import type { Metadata } from "next";
import { Ideas } from "@/components/sections/ideas";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Idées PRO",
  description:
    "Idées concrètes pour augmenter votre entreprise en 2026 : robots, IA, automatisation et plus encore.",
};

export default function IdeesPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Idées <span className="gradient-text">PRO</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des idées concrètes, chiffrées et honnêtes pour augmenter votre
              entreprise. Avantages ET points d&apos;attention — pour décider en
              connaissance de cause.
            </p>
          </div>
        </div>
      </section>

      <Ideas />

      <CTA />
    </div>
  );
}
