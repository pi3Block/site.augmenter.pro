import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { modules, getModuleBySlug, getRelatedModules } from "@/data/modules";
import { ModuleDetail } from "./module-detail";

export function generateStaticParams() {
  return modules.map((mod) => ({ slug: mod.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};

  return {
    title: `${mod.title} — Module ${mod.letter}`,
    description: mod.longDescription.slice(0, 160),
    keywords: mod.keywords,
    alternates: {
      canonical: `https://augmenter.pro/plateforme/${mod.slug}`,
    },
    openGraph: {
      title: `${mod.title} | augmenter.PRO`,
      description: mod.description,
      url: `https://augmenter.pro/plateforme/${mod.slug}`,
      type: "website",
    },
  };
}

export default function ModulePage({
  params,
}: {
  params: { slug: string };
}) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  const related = getRelatedModules(mod);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `augmenter.PRO — ${mod.title}`,
    applicationCategory: "BusinessApplication",
    description: mod.longDescription,
    url: `https://augmenter.pro/plateforme/${mod.slug}`,
    isPartOf: {
      "@type": "SoftwareApplication",
      name: "augmenter.PRO",
      url: "https://app.augmenter.pro",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://augmenter.pro",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Plateforme",
          item: "https://augmenter.pro/plateforme",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: mod.title,
          item: `https://augmenter.pro/plateforme/${mod.slug}`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ModuleDetail module={mod} relatedModules={related} />
    </>
  );
}
