import type { Metadata } from "next";
import { BlogView } from "./blog-view";

export const metadata: Metadata = {
  title: "Blog IA & Digital — Guides Pratiques pour PME (2026)",
  description:
    "Articles, tutos et guides pratiques sur l'IA, la vente commerciale et la digitalisation. Conseils concrets pour PME et indépendants, sans jargon.",
};

export default function BlogPage() {
  return <BlogView />;
}
