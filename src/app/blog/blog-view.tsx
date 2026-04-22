"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BentoGrid,
  BentoCard,
  SectionHead,
  Pill,
} from "@/components/bento/bento-grid";
import {
  ArticleBentoCard,
  type ArticleBentoData,
} from "@/components/bento/article-bento-card";
import { TrustStatCard } from "@/components/widgets/trust-stat";

interface Article extends ArticleBentoData {
  excerpt?: string;
}

const ARTICLES: Article[] = [
  {
    slug: "configurer-odoo-ia-claude-cowork",
    title: "Configurer Odoo avec l'IA : 4 Jours au Lieu de 3 500 €",
    excerpt:
      "Comment nous avons reconfiguré tout Odoo d'un client en 4 jours avec Claude Cowork.",
    tags: ["Intelligence Artificielle", "PME"],
    readTime: "12 min",
    image: "/images/blog/configurer-odoo-ia-claude-cowork.webp",
  },
  {
    slug: "veille-concurrentielle-ia-pme",
    title: "Veille Concurrentielle IA pour PME : Guide Pratique 2026",
    excerpt:
      "Comment automatiser votre veille concurrentielle avec l'IA. Méthode en 5 étapes, outils testés et retour d'expérience terrain.",
    tags: ["Intelligence Artificielle", "PME"],
    readTime: "8 min",
    image: "/images/blog/veille-concurrentielle-ia-pme.webp",
  },
  {
    slug: "automatiser-emails-reseaux-sociaux-ia",
    title: "Automatiser Emails et Réseaux Sociaux avec l'IA en PME",
    excerpt:
      "Gagnez 10h par semaine en automatisant vos emails et publications sociales avec l'IA.",
    tags: ["IA", "Productivité"],
    readTime: "7 min",
    image: "/images/blog/automatiser-emails-reseaux-sociaux-ia.webp",
  },
  {
    slug: "cout-audit-informatique-yvelines",
    title: "Combien coûte un audit informatique en Yvelines (78) ?",
    tags: ["Audit 360°", "PME"],
    readTime: "8 min",
    image: "/images/blog/cout-audit-informatique-yvelines.webp",
  },
  {
    slug: "nis2-pme-yvelines-val-doise",
    title: "NIS2 et PME : Guide Pratique pour les Yvelines et le Val d'Oise",
    tags: ["Cybersécurité", "PME"],
    readTime: "10 min",
    image: "/images/blog/nis2-pme-yvelines-val-doise.webp",
  },
  {
    slug: "serveur-mcp-guide-pratique-pme",
    title: "Serveur MCP : Connecter l'IA à Vos Outils Métier",
    tags: ["IA", "Intégration"],
    readTime: "8 min",
    image: "/images/blog/serveur-mcp-guide-pratique-pme.webp",
  },
  {
    slug: "serveur-mcp-integration-crm-erp",
    title: "Intégrer un Agent IA à Votre CRM/ERP : Pourquoi MCP Change la Donne",
    tags: ["IA", "Commercial"],
    readTime: "7 min",
    image: "/images/blog/serveur-mcp-integration-crm-erp.webp",
  },
  {
    slug: "machine-de-guerre-commerciale",
    title: "Rénovation Énergétique : construisez votre machine de guerre commerciale",
    tags: ["IA", "Commercial"],
    readTime: "3 min",
    image: "/images/blog/augmenter-pro-village-renovation-hero.webp",
  },
  {
    slug: "ia-redefinit-vente-commerciale",
    title: "Comment l'IA redéfinit la Vente Commerciale",
    tags: ["IA", "Commercial"],
    readTime: "3 min",
    image: "/images/blog/ia-redefinit-vente-commerciale.webp",
  },
  {
    slug: "claude-code-prompt-architecture",
    title: "Utiliser Claude Code sans ce prompt est une perte de temps",
    tags: ["Claude Code"],
    readTime: "2 min",
    image: "/images/blog/claude-code-prompt-architecture.webp",
  },
  {
    slug: "comparatif-llm-vente-commerciale",
    title: "Comparatif : Forces et Faiblesses des LLM dans la Vente",
    tags: ["Intelligence Artificielle"],
    readTime: "5 min",
    image: "/images/blog/comparatif-llm-vente-commerciale.webp",
  },
  {
    slug: "5-signes-moderniser-informatique-pme",
    title: "5 signes qu'il est temps de moderniser l'informatique de votre PME",
    tags: ["Audit 360°", "PME"],
    readTime: "3 min",
    image: "/images/blog/5-signes-moderniser-informatique-pme.webp",
  },
];

export function BlogView() {
  const [featured, ...rest] = ARTICLES;

  return (
    <div className="pt-16">
      {/* ═══════════════════ HERO — bento clair ═══════════════════ */}
      <section className="hero-gradient relative overflow-hidden py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <BentoGrid>
            {/* Titre — 8 × 3 */}
            <BentoCard
              span={8}
              rows={3}
              pad="lg"
              mobileMinH="280px"
              className="justify-end"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Pill tone="primary" size="md">
                  <BookOpen className="h-3 w-3" />
                  {ARTICLES.length} articles · mis à jour 2026
                </Pill>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.035em]"
              >
                Articles &amp; <span className="gradient-text">Tutos</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-4 max-w-xl text-[0.95rem] leading-normal text-muted-foreground"
              >
                Conseils pratiques pour les professionnels qui veulent passer au
                niveau supérieur. <strong className="font-semibold text-foreground">IA, commercial, audit, cybersécurité</strong> —
                sans jargon, terrain.
              </motion.p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill tone="solid" size="md">
                  Tout
                </Pill>
                <Pill tone="outline" size="md">
                  IA
                </Pill>
                <Pill tone="outline" size="md">
                  PME
                </Pill>
                <Pill tone="outline" size="md">
                  Commercial
                </Pill>
                <Pill tone="outline" size="md">
                  Cybersécurité
                </Pill>
                <Pill tone="outline" size="md">
                  Audit 360°
                </Pill>
              </div>
            </BentoCard>

            {/* Stat articles */}
            <BentoCard span={4} rows={3} variant="flush" mobileMinH="220px">
              <TrustStatCard
                stat={{
                  icon: Sparkles,
                  value: `${ARTICLES.length}`,
                  label: "Articles publiés",
                  description: "Guides, tutos et études de cas",
                  seed: 2.7,
                }}
                palette="violet"
              />
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ LISTE — bento clair ═══════════════════ */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <SectionHead
            eyebrow="/ tous les articles"
            title="Tous les contenus, du plus récent au plus ancien."
            controls={
              <Pill tone="primary" size="md">
                <Sparkles className="h-3 w-3" />
                Mis à jour aujourd&apos;hui
              </Pill>
            }
          />

          <BentoGrid>
            {/* Article vedette — 6 × 5 */}
            <BentoCard
              span={6}
              rows={5}
              pad="none"
              mobileMinH="440px"
            >
              <ArticleBentoCard article={featured} featured />
            </BentoCard>

            {/* Carte newsletter — 6 × 2 accent */}
            <BentoCard
              variant="accent"
              span={6}
              rows={2}
              pad="lg"
              mobileMinH="180px"
            >
              <div className="flex h-full flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Newsletter
                  </span>
                  <h3 className="mt-1.5 text-[1.05rem] font-semibold leading-tight">
                    1 email, 2 cas client, 0 blabla — mensuel.
                  </h3>
                </div>
                <Button asChild className="shrink-0 gap-2">
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    Je m&apos;abonne
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BentoCard>

            {/* 2 premiers articles — 3 × 3 chacun */}
            {rest.slice(0, 2).map((article) => (
              <BentoCard
                key={article.slug}
                span={3}
                rows={3}
                pad="none"
                mobileMinH="300px"
              >
                <ArticleBentoCard article={article} />
              </BentoCard>
            ))}

            {/* 3 articles suivants — 4 × 3 */}
            {rest.slice(2, 5).map((article) => (
              <BentoCard
                key={article.slug}
                span={4}
                rows={3}
                pad="none"
                mobileMinH="300px"
              >
                <ArticleBentoCard article={article} />
              </BentoCard>
            ))}

            {/* 4 articles suivants — 3 × 3 */}
            {rest.slice(5, 9).map((article) => (
              <BentoCard
                key={article.slug}
                span={3}
                rows={3}
                pad="none"
                mobileMinH="300px"
              >
                <ArticleBentoCard article={article} />
              </BentoCard>
            ))}

            {/* Derniers articles */}
            {rest.slice(9).map((article) => (
              <BentoCard
                key={article.slug}
                span={3}
                rows={3}
                pad="none"
                mobileMinH="300px"
              >
                <ArticleBentoCard article={article} />
              </BentoCard>
            ))}

            {/* CTA final — 3 × 3 accent (comble la dernière colonne) */}
            <BentoCard
              variant="accent"
              span={3}
              rows={3}
              pad="lg"
              mobileMinH="280px"
              className="justify-between"
            >
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Besoin sur mesure ?
                </span>
                <h3 className="mt-3 text-[1.1rem] font-semibold leading-tight">
                  Un audit de 60 min suffit pour savoir par où commencer.
                </h3>
                <p className="mt-2 text-[0.8rem] leading-normal opacity-75">
                  Sans engagement, livrable chiffré.
                </p>
              </div>
              <Button asChild className="w-fit gap-2">
                <Link href="/contact">
                  Réserver
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
