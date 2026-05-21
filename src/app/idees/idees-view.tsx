"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Filter,
  Lightbulb,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BentoGrid,
  BentoCard,
  SectionHead,
  Pill,
} from "@/components/bento/bento-grid";
import { PullQuoteCard } from "@/components/bento/pull-quote-card";
import {
  IdeaCardBigNumber,
  type IdeaData,
} from "@/components/widgets/idea-card";
import { TrustStatCard } from "@/components/widgets/trust-stat";
import { ShaderBackdrop } from "@/components/widgets/shader-backdrop";
import type { Palette } from "@/components/widgets/palettes";

const SECTORS = [
  "Tout",
  "Immobilier",
  "Courtage",
  "BTP",
  "Notariat",
  "Commerce",
  "Outils PME",
] as const;
type Sector = (typeof SECTORS)[number];

interface EnrichedIdea extends IdeaData {
  palette: Palette;
  sector: Exclude<Sector, "Tout">;
  /** Slug d'article blog connexe — la card devient cliquable et reçoit un badge. */
  articleSlug?: string;
  hrefLabel?: string;
}

const IDEAS: EnrichedIdea[] = [
  {
    number: "01",
    title: "Voicebot qui décroche tous vos appels",
    description:
      "Un agent vocal IA répond 24/7, qualifie acheteur/vendeur/budget/secteur, pousse la fiche dans le CRM et déclenche la relance. Fini les appels manqués le samedi.",
    pros: [
      "+28 % de conversion, ROI 2-4 mois",
      "Couverture soir + week-end (créneau prospects)",
      "60-70 % du temps négociateur libéré des leads froids",
    ],
    cons: [
      "Acceptabilité variable selon la cible (vendeurs seniors)",
      "Scénario à calibrer au marché local sinon brûle des leads chauds",
    ],
    seed: 1.1,
    palette: "violet",
    sector: "Immobilier",
  },
  {
    number: "02",
    title: "Annonces immo SEO en 30 secondes",
    description:
      "Pipeline qui prend les caractéristiques du bien + 5 photos et sort annonce portails + texte SEO Google + post LinkedIn/Insta calibré sur la cible.",
    pros: [
      "Temps de rédaction divisé par 3 à 4",
      "Cohérence éditoriale sur toute l'équipe",
      "Variantes par persona (primo-accédant, investisseur)",
    ],
    cons: [
      "Révision humaine obligatoire (la « petite phrase qui vend »)",
      "Risque de doublons SEO si tous les agents du secteur utilisent le même outil",
    ],
    seed: 2.3,
    palette: "amber",
    sector: "Immobilier",
  },
  {
    number: "03",
    title: "Pré-scoring dossier emprunteur en 30 s",
    description:
      "L'IA lit bulletins, avis d'imposition et relevés bancaires, calcule capacité et taux d'endettement selon les grilles des 15 banques principales, sort un GO/NO-GO avant de monter le dossier.",
    pros: [
      "Analyse documentaire : 70 % du temps admin récupéré",
      "Détection auto des incohérences (revenus vs flux)",
      "Plus de dossiers non finançables qui dorment",
    ],
    cons: [
      "Dépendance OCR — contrôle humain obligatoire",
      "AI Act (août 2026) : scoring crédit = haut risque, traçabilité renforcée",
    ],
    seed: 3.5,
    palette: "cold",
    sector: "Courtage",
  },
  {
    number: "04",
    title: "Pipeline courtier + relances bancaires auto",
    description:
      "CRM courtier dopé IA : vue pipeline (banque, pièces manquantes), relances mail+SMS conditionnelles, génération de courriers, signature électronique. Délai de réponse de principe en 48-72 h.",
    pros: [
      "Délai moyen de relance client : 3,2 j → 45 min",
      "Aucun dossier qui dort (alerte auto J+5)",
      "Vision pipeline temps réel pour le dirigeant",
    ],
    cons: [
      "150-600 €/mois selon suite, 5-15 k€ pour du sur-mesure IOBSP",
      "Connecteurs banques limités sur les acteurs régionaux",
    ],
    seed: 4.1,
    palette: "duo",
    sector: "Courtage",
  },
  {
    number: "05",
    title: "Devis chantier depuis 5 photos",
    description:
      "L'artisan envoie 3-5 photos + une description vocale, l'IA sort un devis structuré (postes, métrés estimés, MaPrimeRénov éligible, CEE). Le plus rapide rafle le chantier.",
    pros: [
      "Devis : 4 h → 40 min, +28 % de transformation",
      "+31 % de marge nette sur entreprises équipées",
      "Relances incluses jusqu'à la signature",
    ],
    cons: [
      "Métrés depuis photo restent approximatifs : validation terrain",
      "Inutile sans canal d'acquisition propriétaire en amont",
    ],
    seed: 5.2,
    palette: "warm",
    sector: "BTP",
    articleSlug: "machine-de-guerre-commerciale",
    hrefLabel: "Méthode complète",
  },
  {
    number: "06",
    title: "Extraction d'actes notariés + clauses",
    description:
      "IA souveraine type Brain/Septeo intégrée au logiciel notarial : lit avant-contrats, contrats de réservation, offres de prêt, crée le dossier + fiche client, ébauche les clauses standard.",
    pros: [
      "≈ 21 minutes gagnées par dossier",
      "Hébergement France — argument compliance fort",
      "Standardisation des clauses sur tous les actes",
    ],
    cons: [
      "Validation notariale systématique obligatoire",
      "Coût licence éditeur métier (Septeo, Genapi)",
    ],
    seed: 6.4,
    palette: "mono",
    sector: "Notariat",
  },
  {
    number: "07",
    title: "Agent WhatsApp réservation + avis Google",
    description:
      "Bot WhatsApp qui prend les RDV hors heures d'ouverture, confirme, relance la veille. Module séparé qui analyse les avis Google entrants, alerte sur les négatifs, suggère une réponse calibrée.",
    pros: [
      "8-10 h/semaine récupérées pour ~80 €/mois",
      "+32 % CA documenté (e-commerce) avec assistant conversationnel",
      "Réponse < 24 h aux avis = critère Google My Business",
    ],
    cons: [
      "Réponses génériques mal calibrées font fuir une clientèle de proximité",
      "Demande un script clair et une charte de ton",
    ],
    seed: 7.6,
    palette: "amber",
    sector: "Commerce",
  },
  {
    number: "08",
    title: "Reconfigurer Odoo en 4 jours avec Claude",
    description:
      "Plutôt que payer 3 500 € à un intégrateur, on configure Studio + bons packages + paramétrage SaaS/SH directement avec Claude Cowork. L'équipe ressort autonome.",
    pros: [
      "4 jours au lieu de 3 500 € de prestation",
      "Équipe formée = plus de dépendance intégrateur",
      "Skill Claude qui lit la doc Odoo en temps réel",
    ],
    cons: [
      "Demande une vraie disponibilité d'un référent côté client",
      "Modules métier très custom (industrie) restent un chantier dédié",
    ],
    seed: 8.7,
    palette: "violet",
    sector: "Outils PME",
    articleSlug: "configurer-odoo-ia-claude-cowork",
    hrefLabel: "Cas client",
  },
  {
    number: "09",
    title: "Veille concurrentielle automatisée",
    description:
      "Surveillance auto de 5-10 concurrents locaux et 3-5 nationaux : prix, recrutements, posts LinkedIn, nouveautés. Alertes ciblées et synthèse hebdo livrée par mail.",
    pros: [
      "4-6 h/semaine de veille manuelle supprimées",
      "Plus d'angles morts (un concurrent baisse ses prix = alerte J+0)",
      "Détection des opportunités réglementaires (NIS2, CSRD)",
    ],
    cons: [
      "Setup initial ~1 journée pour calibrer les sources",
      "Sans process de décision, les alertes finissent ignorées",
    ],
    seed: 9.3,
    palette: "cold",
    sector: "Outils PME",
    articleSlug: "veille-concurrentielle-ia-pme",
    hrefLabel: "Méthode 5 étapes",
  },
];

export function IdeesView() {
  const [activeSector, setActiveSector] = useState<Sector>("Tout");

  const filteredIdeas = useMemo(() => {
    if (activeSector === "Tout") return IDEAS;
    return IDEAS.filter((idea) => idea.sector === activeSector);
  }, [activeSector]);

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
              className="relative isolate justify-end overflow-hidden"
            >
              <ShaderBackdrop mood="dawn" opacity={0.6} />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Pill tone="primary" size="md">
                  <Lightbulb className="h-3 w-3" />
                  Inspiration · {IDEAS.length} idées chiffrées
                </Pill>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="relative z-10 mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.035em]"
              >
                Idées <span className="gradient-text">PRO</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="relative z-10 mt-4 max-w-xl text-[0.95rem] leading-normal text-muted-foreground"
              >
                Des idées concrètes, chiffrées et honnêtes pour augmenter votre
                entreprise.{" "}
                <strong className="font-semibold text-foreground">
                  Avantages ET points d&apos;attention
                </strong>{" "}
                — pour décider en connaissance de cause.
              </motion.p>
              <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                {SECTORS.map((sector) => {
                  const isActive = activeSector === sector;
                  return (
                    <button
                      key={sector}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveSector(sector)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? "border border-foreground bg-foreground text-background"
                          : "border border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {sector}
                    </button>
                  );
                })}
              </div>
            </BentoCard>

            {/* Stat ROI */}
            <BentoCard span={4} rows={3} variant="flush" mobileMinH="200px">
              <TrustStatCard
                stat={{
                  icon: Sparkles,
                  value: "30 %",
                  label: "ROI moyen",
                  description: "sur les cas clients implémentés",
                  seed: 4.2,
                }}
                palette="duo"
              />
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ IDÉES — bento dark ═══════════════════ */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "#0a0811", color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 12% 20%, oklch(0.541 0.281 293 / 0.35), transparent 60%), radial-gradient(ellipse 40% 30% at 88% 80%, oklch(0.828 0.189 84.429 / 0.10), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
          <SectionHead
            eyebrow="/ catalogue"
            eyebrowTone="dark"
            title={
              activeSector === "Tout" ? (
                <>
                  {IDEAS.length} idées <em className="not-italic text-violet-300">qui facturent</em>{" "}
                  — du voicebot immo au scoring crédit.
                </>
              ) : (
                <>
                  {filteredIdeas.length} idée{filteredIdeas.length > 1 ? "s" : ""}{" "}
                  <em className="not-italic text-violet-300">
                    {activeSector.toLowerCase()}
                  </em>
                  .
                </>
              )
            }
            controls={
              <Pill tone="dark" size="md">
                <Filter className="h-3 w-3" />
                Secteur : {activeSector}
              </Pill>
            }
          />

          {filteredIdeas.length === 0 && (
            <div className="mb-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-8 text-center">
              <p className="text-sm text-white/65">
                Aucune idée dans le secteur{" "}
                <strong className="font-semibold text-white">{activeSector}</strong>{" "}
                pour le moment.
              </p>
              <button
                type="button"
                onClick={() => setActiveSector("Tout")}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:underline"
              >
                Voir toutes les idées
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <BentoGrid>
            {/* Idées filtrées — chaque 4 cols × 4 rangées */}
            {filteredIdeas.map((idea, i) => (
              <BentoCard
                key={idea.number}
                variant="flush"
                span={4}
                rows={4}
                mobileMinH="360px"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="h-full"
                >
                  <IdeaCardBigNumber
                    idea={idea}
                    palette={idea.palette}
                    href={
                      idea.articleSlug
                        ? `/blog/${idea.articleSlug}`
                        : undefined
                    }
                    hrefLabel={idea.hrefLabel}
                  />
                </motion.div>
              </BentoCard>
            ))}

            {/* Carte "Comment choisir" — 6 × 2 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={2}
              pad="lg"
              mobileMinH="180px"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                Comment décider
              </span>
              <h3 className="mt-2 text-[1.1rem] font-semibold leading-tight">
                3 questions avant d&apos;investir
              </h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-[0.85rem] leading-normal text-white/75">
                <li>
                  1. Quelle tâche répétitive consomme le plus d&apos;heures par
                  semaine ?
                </li>
                <li>2. Le ROI se mesure-t-il en &lt; 12 mois ?</li>
                <li>
                  3. L&apos;équipe est-elle prête au changement d&apos;outil ?
                </li>
              </ul>
            </BentoCard>

            {/* Pull quote — 6 × 2 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={2}
              pad="none"
              mobileMinH="180px"
            >
              <PullQuoteCard
                quote="Devis passés de 2 h à 15 min — mon équipe se concentre sur les chantiers."
                author="Nathalie R."
                role="BTP · 95"
                stars={5}
              />
            </BentoCard>

            {/* CTA propose ton idée — 12 × 2 accent */}
            <BentoCard
              variant="accent"
              span={12}
              rows={2}
              pad="lg"
              mobileMinH="160px"
            >
              <div className="flex h-full flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Une autre idée en tête ?
                  </span>
                  <h3 className="mt-1.5 text-[1.05rem] font-semibold leading-tight">
                    Décrivez votre cas d&apos;usage — on estime le ROI sous 48 h.
                  </h3>
                </div>
                <Button asChild className="shrink-0 gap-2">
                  <Link href="/contact">
                    <MessageSquare className="h-4 w-4" />
                    Proposer une idée
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ CTA final ═══════════════════ */}
      <section className="py-16">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <BentoGrid>
            <BentoCard
              variant="dark"
              span={12}
              rows={3}
              pad="lg"
              mobileMinH="260px"
              className="items-center justify-center text-center"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                / prochaine étape
              </span>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                Laquelle mettez-vous en place cette année ?
              </h2>
              <p className="mt-3 max-w-xl text-[0.95rem] text-white/65">
                Un diagnostic de 60 min suffit pour savoir par où commencer. Sans
                engagement, livrable chiffré en main.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-violet-700"
                >
                  <Link href="/contact">
                    Réserver mon diagnostic
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href="https://wa.me/33679119774"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
