"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const articles = [
  {
    slug: "machine-de-guerre-commerciale",
    title:
      "Rénovation Énergétique : Arrêtez d'acheter des leads, construisez votre propre machine de guerre commerciale",
    excerpt:
      "Découvrez comment internaliser votre acquisition client. De l'optimisation LLM SEO à la pré-qualification par commerciaux indépendants.",
    tags: ["Intelligence Artificielle", "Commercial"],
    readTime: "3 min",
  },
  {
    slug: "ia-redefinit-vente-commerciale",
    title: "De la Prospection au Closing : Comment l'IA redéfinit la Vente Commerciale",
    excerpt:
      "L'IA s'intègre à chaque maillon du cycle de vente pour automatiser le fastidieux, révéler des insights invisibles et augmenter l'impact humain.",
    tags: ["Intelligence Artificielle", "Commercial"],
    readTime: "3 min",
  },
  {
    slug: "claude-code-prompt-architecture",
    title:
      "Utiliser Claude Code sans envoyer d'abord ce prompt est une perte de temps",
    excerpt:
      "Travailler avec des fichiers .md ! Faites la différence entre un projet amateur et la création de quelque chose de valeur.",
    tags: ["Claude Code"],
    readTime: "2 min",
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
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`}>
                <Card className="group h-full border-border/50 transition-all hover:border-primary/20 hover:shadow-lg">
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
