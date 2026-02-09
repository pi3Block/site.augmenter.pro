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
    default: "augmenter.PRO — Devenez un professionnel augmenté",
    template: "%s | augmenter.PRO",
  },
  description:
    "Nous accompagnons les PME et indépendants à trouver l'équilibre parfait entre performance humaine et numérique. IA, digitalisation, robotique — sur mesure.",
  keywords: [
    "IA pour PME",
    "intelligence artificielle entreprise",
    "digitalisation PME",
    "consultant IA Yvelines",
    "augmenter productivité",
    "audit IA",
    "transformation numérique",
  ],
  authors: [{ name: "Pierre Legrand", url: "https://pierrelegrand.fr" }],
  creator: "augmenter.PRO",
  metadataBase: new URL("https://augmenter.pro"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://augmenter.pro",
    siteName: "augmenter.PRO",
    title: "augmenter.PRO — Devenez un professionnel augmenté",
    description:
      "IA, digitalisation et robotique sur mesure pour PME et indépendants. Audit gratuit 60 min.",
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
