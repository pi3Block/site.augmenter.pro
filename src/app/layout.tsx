import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/** ID du conteneur Google Tag Manager (ex. GTM-XXXXXXX). Défini via NEXT_PUBLIC_GTM_ID. */
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "augmenter.PRO — Consultant IA & Digital PME | 78/95",
    template: "%s | augmenter.PRO",
  },
  description:
    "Boostez votre PME avec l'IA : audit gratuit 60 min, digitalisation et automatisation sur mesure. Consultant expert en Yvelines (78) et Val d'Oise (95).",
  keywords: [
    "consultant IA PME",
    "audit informatique PME",
    "transformation digitale PME",
    "IA pour PME",
    "consultant IA Yvelines",
    "audit informatique 78",
    "digitalisation PME Val d'Oise",
    "automatisation entreprise",
    "IA booster PME",
    "audit IA gratuit",
  ],
  authors: [{ name: "Pierre Legrand", url: "https://pierrelegrand.fr" }],
  creator: "augmenter.PRO",
  metadataBase: new URL("https://augmenter.pro"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://augmenter.pro",
    siteName: "augmenter.PRO",
    title: "augmenter.PRO — Consultant IA & Transformation Digitale PME",
    description:
      "Boostez votre PME avec l'IA. Audit gratuit 60 min, digitalisation et automatisation sur mesure en Yvelines (78) et Val d'Oise (95).",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Pi3r2Dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://augmenter.pro/#organization",
      name: "augmenter.PRO",
      url: "https://augmenter.pro",
      description:
        "Consultant IA et transformation digitale pour PME en Yvelines (78) et Val d'Oise (95).",
      founder: {
        "@type": "Person",
        name: "Pierre Legrand",
        url: "https://pierrelegrand.fr",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "vite@augmenter.pro",
        telephone: "+33679119774",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [
        "https://www.linkedin.com/in/legrand-pierre/",
        "https://x.com/Pi3r2Dev",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://augmenter.pro/#localbusiness",
      name: "augmenter.PRO",
      url: "https://augmenter.pro",
      description:
        "Consultant IA, audit informatique et transformation digitale pour PME du BTP, immobilier et industrie en Yvelines (78) et Val d'Oise (95).",
      telephone: "+33679119774",
      email: "vite@augmenter.pro",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Yvelines (78)",
        },
        {
          "@type": "AdministrativeArea",
          name: "Val d'Oise (95)",
        },
        {
          "@type": "AdministrativeArea",
          name: "Île-de-France",
        },
      ],
      priceRange: "€-€€",
      knowsAbout: [
        "Intelligence Artificielle",
        "Transformation Digitale",
        "Audit Informatique",
        "Automatisation",
        "Robotique",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://augmenter.pro/#website",
      url: "https://augmenter.pro",
      name: "augmenter.PRO",
      publisher: { "@id": "https://augmenter.pro/#organization" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
