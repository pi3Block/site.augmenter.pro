"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Arnaud L.",
    role: "Gérant, boutique jardin — Jouy-le-Moutier (95)",
    quote:
      "On gérait 500 références sur des fichiers Excel éparpillés. Pierre a centralisé notre catalogue et automatisé la mise en ligne sur Le Bon Coin. Résultat : 2h de saisie en moins par jour et +35 % de demandes clients en ligne.",
    stars: 5,
  },
  {
    name: "Maud J.",
    role: "Architecte d'intérieur indépendante",
    quote:
      "L'IA pour la déco, j'y croyais pas. Pierre m'a fait découvrir des outils qui accélèrent mes moodboards et mes propositions 3D. Mes clients reçoivent leurs planches en 48h au lieu d'une semaine — et la qualité a monté d'un cran.",
    stars: 5,
  },
  {
    name: "Marc L.",
    role: "Responsable informatique, PME industrielle",
    quote:
      "L'audit 360° a révélé des failles de sécurité que nous ignorions. En 3 mois, notre infrastructure est passée de vulnérable à conforme RGPD, avec un budget IT réduit de 20 %.",
    stars: 5,
  },
  {
    name: "Nathalie R.",
    role: "Gérante, entreprise BTP",
    quote:
      "Nos devis prenaient 2 heures, maintenant 15 minutes. L'automatisation mise en place par augmenter.pro a libéré mon équipe pour se concentrer sur les chantiers.",
    stars: 5,
  },
  {
    name: "Karim B.",
    role: "Consultant indépendant",
    quote:
      "En tant qu'indépendant, je pensais que l'IA n'était pas pour moi. Pierre m'a montré comment gagner 8 heures par semaine avec des outils simples. Mon chiffre d'affaires a augmenté de 30 % en 6 mois.",
    stars: 5,
  },
];

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "augmenter.PRO",
  url: "https://augmenter.pro",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.stars),
      bestRating: "5",
    },
    reviewBody: t.quote,
  })),
};

export function Testimonials() {
  return (
    <section className="py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            PME et indépendants qui ont augmenté leur potentiel avec nous.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border/50">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="mt-4 text-base italic text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
