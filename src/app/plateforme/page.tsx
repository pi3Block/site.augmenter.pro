import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/platform-hero";
import { PlatformModules } from "@/components/sections/platform-modules";
import { PlatformStack } from "@/components/sections/platform-stack";
import { PlatformHowItWorks } from "@/components/sections/platform-how-it-works";

export const metadata: Metadata = {
  title: "Plateforme IA pour Professionnels",
  description:
    "10 modules IA pour automatiser votre veille, emails, documents et réseaux sociaux. 100% open source, privacy-first. Essai gratuit.",
  keywords: [
    "plateforme IA professionnels",
    "second cerveau numérique",
    "outil IA PME",
    "automatisation IA entreprise",
    "SaaS IA open source",
    "dashboard intelligent",
    "veille automatique IA",
    "curation contenu IA",
  ],
  alternates: {
    canonical: "https://augmenter.pro/plateforme",
  },
  openGraph: {
    title: "Plateforme IA pour Professionnels | augmenter.PRO",
    description:
      "10 modules IA pour automatiser votre veille, emails, documents et réseaux sociaux. 100% open source.",
    url: "https://augmenter.pro/plateforme",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "augmenter.PRO",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plateforme IA pour professionnels — 10 modules intelligents pour automatiser votre veille, emails, documents et réseaux sociaux.",
  url: "https://app.augmenter.pro",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Audit intelligent gratuit",
  },
  creator: {
    "@type": "Organization",
    name: "augmenter.PRO",
    url: "https://augmenter.pro",
  },
  featureList: [
    "Onboarding & Digital Persona",
    "Dashboard & Widgets Intelligents",
    "Curation IA & Veille Automatique",
    "Network & Gamification",
    "Email Intelligent",
    "Publication Sociale Multi-Canal",
    "Transcription Vocale & Résumés IA",
    "Bot Telegram IA",
    "Analyse de Documents IA",
    "Veille Concurrentielle & Market Intelligence",
  ],
};

export default function PlateformePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlatformHero />
      <PlatformModules />
      <PlatformHowItWorks />
      <PlatformStack />
    </>
  );
}
