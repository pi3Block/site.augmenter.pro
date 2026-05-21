import { HomeNarrative } from "../home-narrative";

// `metadata` for / lives in the root src/app/layout.tsx — no need to
// re-declare here. Organization / LocalBusiness / WebSite +
// AggregateRating JSON-LDs are also in the root layout and apply to
// every page. We add a CreativeWork JSON-LD below to position this
// page as the editorial "récit en 6 chapitres" — Schema.org signal
// that helps Google understand the narrative nature of the page.

const creativeWorkJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://augmenter.pro/#webpage",
  url: "https://augmenter.pro/",
  inLanguage: "fr-FR",
  isPartOf: { "@id": "https://augmenter.pro/#website" },
  about: { "@id": "https://augmenter.pro/#organization" },
  mainEntity: {
    "@type": "CreativeWork",
    name: "Votre PME augmentée par l'IA — récit en 6 chapitres",
    description:
      "Récit éditorial en 6 chapitres présentant l'approche augmenter.PRO : constat marché PME, trois disciplines (IA, digitalisation, robotique), preuves chiffrées, contenus de référence et audit 180° offert.",
    author: {
      "@type": "Person",
      "@id": "https://augmenter.pro/auteur/pierre-legrand#person",
      name: "Pierre Legrand",
      url: "https://augmenter.pro/auteur/pierre-legrand",
    },
    publisher: { "@id": "https://augmenter.pro/#organization" },
    inLanguage: "fr-FR",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd),
        }}
      />
      <HomeNarrative />
    </>
  );
}
