import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://augmenter.pro";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/prestations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/approche`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/idees`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/projets`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogArticles: MetadataRoute.Sitemap = [
    "veille-concurrentielle-ia-pme",
    "automatiser-emails-reseaux-sociaux-ia",
    "cout-audit-informatique-yvelines",
    "nis2-pme-yvelines-val-doise",
    "serveur-mcp-guide-pratique-pme",
    "serveur-mcp-integration-crm-erp",
    "machine-de-guerre-commerciale",
    "ia-redefinit-vente-commerciale",
    "claude-code-prompt-architecture",
    "comparatif-llm-vente-commerciale",
    "5-signes-moderniser-informatique-pme",
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogArticles];
}
