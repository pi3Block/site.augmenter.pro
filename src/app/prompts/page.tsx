import type { Metadata } from "next";
import { PromptLibrary } from "./prompt-library";
import { prompts, categories } from "@/data/prompts";

export const metadata: Metadata = {
  title: "Prompts IA pour PME — Copiez, Collez, Gagnez du Temps",
  description:
    "13 prompts IA prêts à l\u2019emploi pour PME. Commercial, productivité, marketing, ERP, cybersécurité. Copiez-collez et adaptez à votre entreprise en 2 minutes.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bibliothèque de Prompts IA pour PME",
  description:
    "Prompts IA prêts à l\u2019emploi pour dirigeants de PME. Commercial, productivité, marketing, ERP, stratégie IA et cybersécurité.",
  url: "https://augmenter.pro/prompts",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "augmenter.PRO",
    url: "https://augmenter.pro",
  },
  author: {
    "@type": "Person",
    name: "Pierre Legrand",
    url: "https://pierrelegrand.fr",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: prompts.length,
    itemListElement: prompts.map((prompt, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: prompt.title,
        description: prompt.description,
        genre:
          categories.find((c) => c.id === prompt.category)?.label ??
          prompt.category,
        inLanguage: "fr-FR",
        author: {
          "@type": "Person",
          name: "Pierre Legrand",
        },
      },
    })),
  },
};

export default function PromptsPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PromptLibrary />
    </div>
  );
}
