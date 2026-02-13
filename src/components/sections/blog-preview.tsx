"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    slug: "veille-concurrentielle-ia-pme",
    title:
      "Veille Concurrentielle IA pour PME : Guide Pratique 2026",
    excerpt:
      "Comment automatiser votre veille concurrentielle avec l'IA. Méthode en 5 étapes, outils recommandés et retour d'expérience terrain pour PME.",
    tags: ["Intelligence Artificielle", "PME"],
    readTime: "8 min",
    image: "/images/blog/veille-concurrentielle-ia-pme.webp",
  },
  {
    slug: "automatiser-emails-reseaux-sociaux-ia",
    title:
      "Automatiser Emails et Réseaux Sociaux avec l'IA en PME",
    excerpt:
      "Gagnez 10h par semaine en automatisant vos emails et publications sociales avec l'IA. Guide pratique et outils testés pour dirigeants de PME.",
    tags: ["Intelligence Artificielle", "PME"],
    readTime: "7 min",
    image: "/images/blog/automatiser-emails-reseaux-sociaux-ia.webp",
  },
  {
    slug: "cout-audit-informatique-yvelines",
    title:
      "Combien coûte un audit informatique en Yvelines (78) ? Guide tarifaire 2026",
    excerpt:
      "De 0 € à 20 000 € : grille tarifaire par taille d'entreprise, comparaison diagnostic gratuit vs audit complet, et 3 cas concrets de PME en Yvelines.",
    tags: ["Audit 360°", "PME"],
    readTime: "8 min",
    image: "/images/blog/cout-audit-informatique-yvelines.webp",
  },
  {
    slug: "nis2-pme-yvelines-val-doise",
    title:
      "NIS2 et PME : Guide Pratique pour les Yvelines et le Val d'Oise (78/95)",
    excerpt:
      "La directive NIS2 multiplie par 30 le nombre d'entreprises soumises à des obligations de cybersécurité. Votre PME est-elle concernée ? Auto-diagnostic et plan d'action.",
    tags: ["Cybersécurité", "PME", "Audit 360°"],
    readTime: "10 min",
    image: "/images/blog/nis2-pme-yvelines-val-doise.webp",
  },
  {
    slug: "serveur-mcp-guide-pratique-pme",
    title:
      "Serveur MCP : Guide Pratique pour Connecter l'IA à Vos Outils Métier",
    excerpt:
      "Le protocole MCP permet à vos agents IA d'accéder directement à vos outils métier — CRM, ERP, messagerie. Voici comment ça fonctionne et par où commencer.",
    tags: ["Intelligence Artificielle", "PME"],
    readTime: "8 min",
    image: "/images/blog/serveur-mcp-guide-pratique-pme.webp",
  },
  {
    slug: "serveur-mcp-integration-crm-erp",
    title:
      "Intégrer un Agent IA à Votre CRM/ERP : Pourquoi MCP Change la Donne",
    excerpt:
      "95% des projets IA échouent sur l'intégration. Découvrez comment le protocole MCP connecte vos agents IA à HubSpot, Salesforce ou ERP. ROI concret.",
    tags: ["Intelligence Artificielle", "Commercial"],
    readTime: "7 min",
    image: "/images/blog/serveur-mcp-integration-crm-erp.webp",
  },
  {
    slug: "machine-de-guerre-commerciale",
    title:
      "Rénovation Énergétique : Arrêtez d'acheter des leads, construisez votre propre machine de guerre commerciale",
    excerpt:
      "Découvrez comment internaliser votre acquisition client. De l'optimisation LLM SEO à la pré-qualification par commerciaux indépendants.",
    tags: ["Intelligence Artificielle", "Commercial"],
    readTime: "3 min",
    image: "/images/blog/augmenter-pro-village-renovation-hero.webp",
  },
  {
    slug: "ia-redefinit-vente-commerciale",
    title: "De la Prospection au Closing : Comment l'IA redéfinit la Vente Commerciale",
    excerpt:
      "L'IA s'intègre à chaque maillon du cycle de vente pour automatiser le fastidieux, révéler des insights invisibles et augmenter l'impact humain.",
    tags: ["Intelligence Artificielle", "Commercial"],
    readTime: "3 min",
    image: "/images/blog/ia-redefinit-vente-commerciale.webp",
  },
  {
    slug: "claude-code-prompt-architecture",
    title:
      "Utiliser Claude Code sans envoyer d'abord ce prompt est une perte de temps",
    excerpt:
      "Travailler avec des fichiers .md ! Faites la différence entre un projet amateur et la création de quelque chose de valeur.",
    tags: ["Claude Code"],
    readTime: "2 min",
    image: "/images/blog/claude-code-prompt-architecture.webp",
  },
  {
    slug: "comparatif-llm-vente-commerciale",
    title: "Comparatif : Forces et Faiblesses des LLM dans les Processus de Vente",
    excerpt:
      "Explorer comment l'IA transforme les pratiques de vente commerciale, avec un tableau comparatif détaillé des forces, faiblesses et impact RGPD.",
    tags: ["Intelligence Artificielle"],
    readTime: "5 min",
    image: "/images/blog/comparatif-llm-vente-commerciale.webp",
  },
  {
    slug: "5-signes-moderniser-informatique-pme",
    title: "Les 5 signes qu'il est temps de moderniser l'informatique de votre PME",
    excerpt:
      "Vous êtes dirigeant d'une PME du BTP, immobilier ou industrie dans les Yvelines / Val d'Oise ? Découvrez les 5 signaux d'alerte.",
    tags: ["Audit 360°", "PME"],
    readTime: "3 min",
    image: "/images/blog/5-signes-moderniser-informatique-pme.webp",
  },
];

export function BlogPreview() {
  return (
    <section id="blog" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Articles &amp; Tutos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Conseils pratiques pour les professionnels qui veulent passer au
              niveau supérieur.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden gap-2 md:inline-flex">
            <Link href="/blog">
              Tous les articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`}>
                <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/20 hover:shadow-lg">
                  {article.image && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="mt-3 text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/blog">
              Tous les articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
