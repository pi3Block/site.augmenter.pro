import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { Check, ArrowRight, Code, GraduationCap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prestations & Tarifs — Audit IA 360° dès 0 € | PME",
  description:
    "Audit IA gratuit (60 min) + Audit 360° complet. Développement sur mesure, formation IA et conseil stratégique pour PME. Tarifs transparents.",
};

const additionalServices = [
  {
    icon: Code,
    title: "Développement sur mesure",
    description:
      "Applications, automatisations et intégrations conçues pour votre métier. De la maquette au déploiement.",
    features: [
      "Applications web & mobile",
      "Intégrations IA (chatbots, agents, RAG)",
      "Automatisations de workflows",
      "Intégration CRM & outils existants",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    description:
      "Vos équipes montent en compétence sur les outils numériques et l'IA. Format atelier ou suivi continu.",
    features: [
      "Ateliers IA pour dirigeants",
      "Formation outils collaboratifs",
      "Conduite du changement",
      "Support continu post-formation",
    ],
  },
  {
    icon: Settings,
    title: "Conseil Stratégique",
    description:
      "Vision à 360° de votre maturité numérique. Feuille de route, benchmark et recommandations alignées avec vos objectifs business.",
    features: [
      "Benchmark concurrentiel",
      "Choix technologiques",
      "Optimisation des coûts IT",
      "Roadmap transformation digitale",
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "LocalBusiness",
    name: "augmenter.PRO",
    url: "https://augmenter.pro",
  },
  serviceType: "Conseil en transformation digitale et IA",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Yvelines (78)" },
    { "@type": "AdministrativeArea", name: "Val d'Oise (95)" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations augmenter.PRO",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Audit 180° Informatique & Organisation",
        description:
          "Échange de 60 min pour identifier vos leviers de croissance numériques. Sans engagement.",
        price: "0",
        priceCurrency: "EUR",
        url: "https://augmenter.pro/contact",
      },
      {
        "@type": "Offer",
        name: "Audit 360° IA Stratégique",
        description:
          "Diagnostic complet de 3h couvrant infrastructure, workflows et équipes. Livrable : plan d'action chiffré et priorisé.",
        price: "225",
        priceCurrency: "EUR",
        url: "https://augmenter.pro/contact",
      },
      {
        "@type": "Offer",
        name: "Développement sur mesure",
        description:
          "Applications, automatisations et intégrations IA conçues pour votre métier.",
      },
      {
        "@type": "Offer",
        name: "Formation & Accompagnement",
        description:
          "Ateliers IA pour dirigeants, formation outils collaboratifs, conduite du changement.",
      },
      {
        "@type": "Offer",
        name: "Conseil Stratégique",
        description:
          "Benchmark concurrentiel, choix technologiques, roadmap transformation digitale.",
      },
    ],
  },
};

export default function PrestationsPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Prestations &amp; <span className="gradient-text">Tarifs</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des solutions adaptées à votre taille, votre budget et votre
              niveau de maturité numérique.
            </p>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Autres prestations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            Au-delà des audits, nous réalisons sur mesure développement logiciel et formation.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <Card key={service.title} className="h-full border-border/50">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Discutons de votre projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
