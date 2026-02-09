import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "augmenter.PRO — Consultant IA & Transformation Digitale PME (78/95)",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
