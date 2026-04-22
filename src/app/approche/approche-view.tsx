"use client";

import Link from "next/link";
import {
  Monitor,
  Settings,
  GraduationCap,
  Eye,
  Server,
  Wrench,
  BarChart3,
  Users,
  Clock,
  Check,
  ArrowRight,
  Code,
  Building2,
  Rocket,
  Briefcase,
  MapPin,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BentoGrid,
  BentoCard,
  SectionHead,
  Pill,
} from "@/components/bento/bento-grid";
import { PullQuoteCard } from "@/components/bento/pull-quote-card";
import { TrustStatCard } from "@/components/widgets/trust-stat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pillars = [
  {
    icon: Monitor,
    step: "01",
    title: "Technique (Software & Hardware)",
    description:
      "Diagnostic complet : infrastructure, serveurs, réseaux, logiciels métier. On identifie ce qui ralentit, ce qui coûte et ce qui peut devenir un levier.",
    features: [
      "Audit hardware (parc, réseau, périphériques)",
      "Optimisation des logiciels (ERP, CRM, IA sectorielle)",
    ],
    example:
      "Agence immobilière (Versailles, 78) — modernisation hardware, −50 % de temps d'arrêt.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Process (Vente & Opérations)",
    description:
      "Cartographie de vos flux de prospection, production et facturation. On automatise les tâches à faible valeur pour libérer du temps commercial.",
    features: [
      "Analyse des workflows commerciaux & opérationnels",
      "Automatisation ciblée (devis, relances, reporting)",
    ],
    example:
      "Commercial à Cergy (95) — 10 h par semaine récupérées sur la génération de devis.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Humain (Formation & Accompagnement)",
    description:
      "Les outils ne changent rien sans les équipes. Formations courtes, ateliers terrain, conduite du changement — pour une adoption qui dure.",
    features: [
      "Entretiens individuels + ateliers collectifs",
      "Conduite du changement et motivation des équipes",
    ],
    example:
      "Artisans à Pontoise (95) — engagement équipe +30 % après sessions ciblées.",
  },
  {
    icon: Eye,
    step: "04",
    title: "Vision Globale & Stratégique",
    description:
      "La différence augmenter.PRO : ne pas vendre un outil isolé mais une feuille de route. L'audit 360° chiffre les gains et priorise les actions.",
    features: [
      "Plan chiffré et priorisé sur 6 mois",
      "Stratégie alignée avec vos objectifs business",
    ],
    example: null,
  },
];

const methodSteps = [
  {
    num: "01",
    title: "Diagnostic",
    description:
      "Audit complet de vos outils, processus et habitudes. On identifie ce qui fonctionne et ce qui freine.",
  },
  {
    num: "02",
    title: "Solutions sur mesure",
    description:
      "Recommandations adaptées à votre métier, budget et maturité. Pas de solution générique.",
  },
  {
    num: "03",
    title: "Accompagnement",
    description:
      "Développement logiciel et formation humaine alignés avec votre ambition. Vos équipes montent en compétence.",
  },
  {
    num: "04",
    title: "Itération",
    description:
      "Suivi, mesure des résultats et ajustements. Des habitudes solides pour des résultats durables.",
  },
];

const plans = [
  {
    name: "Audit 180°",
    tagline: "Informatique & organisation — faisons connaissance.",
    price: "Offert",
    duration: "60 min · sans engagement",
    features: [
      "Diagnostic de votre infrastructure",
      "Analyse des processus actuels",
      "Identification des quick wins",
      "Recommandations personnalisées",
    ],
    cta: "Réserver mon diagnostic",
    href: "/contact",
    popular: false,
  },
  {
    name: "Audit 360°",
    tagline: "IA Stratégique — votre feuille de route personnalisée.",
    price: "225 €",
    duration: "~3 h + livrable",
    features: [
      "Tout l'Audit 180° inclus",
      "Cartographie cas d'usage IA + ROI",
      "Feuille de route 6 mois",
      "Recommandations outils & fournisseurs",
      "Support email 30 jours",
    ],
    cta: "Démarrer l'Audit IA",
    href: "/contact",
    popular: true,
  },
];

const additionalServices = [
  {
    icon: Code,
    tag: "Dev sur mesure",
    title: "Développement sur mesure",
    description:
      "Applications, automatisations, intégrations IA — de la maquette au déploiement.",
    features: [
      "Applications web & mobile",
      "Intégrations IA (agents, RAG, MCP)",
      "Automatisations de workflows",
      "Intégration CRM & outils existants",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Formation",
    title: "Formation & Accompagnement",
    description:
      "Vos équipes montent en compétence sur l'IA et les outils numériques. Format atelier ou suivi continu.",
    features: [
      "Ateliers IA pour dirigeants",
      "Formation outils collaboratifs",
      "Conduite du changement",
      "Support continu post-formation",
    ],
  },
  {
    icon: Settings,
    tag: "Stratégie",
    title: "Conseil Stratégique",
    description:
      "Vision 360° de votre maturité numérique. Feuille de route, benchmark, arbitrages technologiques.",
    features: [
      "Benchmark concurrentiel",
      "Choix technologiques",
      "Optimisation des coûts IT",
      "Roadmap transformation digitale",
    ],
  },
];

const targets = [
  {
    icon: Building2,
    label: "PME / ETI",
    detail: "BTP, immobilier, industrie, artisanat",
  },
  { icon: Rocket, label: "Startups", detail: "Tech, SaaS, services" },
  { icon: Briefcase, label: "Indépendants", detail: "Consultants, artisans" },
];

const expertise = [
  { icon: Server, label: "Dev Full Stack" },
  { icon: Wrench, label: "Électronicien industriel" },
  { icon: BarChart3, label: "Manager commercial" },
  { icon: Users, label: "Communicant humaniste" },
];

const guarantees = [
  "Sans engagement",
  "Zéro jargon",
  "RGPD compliant",
  "Résultats 48 h",
];

const faq = [
  {
    question: "Quelle différence entre l'Audit 180° et l'Audit 360° ?",
    answer:
      "L'Audit 180° est un échange de 60 minutes, offert, pour identifier les quick wins et poser un premier diagnostic. L'Audit 360° (225 €) est un diagnostic approfondi de ~3 heures qui inclut tout l'Audit 180° + une cartographie des cas d'usage IA, une analyse ROI et une feuille de route 6 mois.",
  },
  {
    question: "Le diagnostic de 60 minutes est-il vraiment offert ?",
    answer:
      "Oui, sans engagement. Objectif : vérifier qu'on est alignés avant toute prestation payante. Si le fit n'est pas là, on vous oriente ailleurs — c'est aussi ça un bon diagnostic.",
  },
  {
    question: "Qu'est-ce que l'expertise technique ?",
    answer:
      "On analyse votre infrastructure (hardware + logiciel) pour garantir une performance fiable à coût raisonnable. Diagnostic parc, réseaux, ERP/CRM, outils IA pertinents pour votre secteur.",
  },
  {
    question: "Comment optimisez-vous les processus ?",
    answer:
      "Cartographie de vos flux de travail (prospection → facturation), identification des tâches automatisables, mise en place d'outils et d'automatisations sans casser les habitudes existantes.",
  },
  {
    question: "L'approche humaine, ça veut dire quoi concrètement ?",
    answer:
      "Formations personnalisées, entretiens individuels, conduite du changement. Parce qu'un outil mal adopté = budget gâché. On travaille avec vos équipes, pas à leur place.",
  },
  {
    question: "Travaillez-vous hors 78/95 ?",
    answer:
      "En présentiel on privilégie Yvelines et Val d'Oise pour la proximité. À distance (visio), on intervient partout en France francophone.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "LocalBusiness",
    name: "augmenter.PRO",
    url: "https://augmenter.pro",
  },
  serviceType: "Conseil en transformation digitale et IA",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Yvelines (78)" },
    { "@type": "AdministrativeArea", name: "Val d'Oise (95)" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations augmenter.PRO",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Audit 180° Informatique & Organisation",
        description:
          "Échange de 60 min pour identifier vos leviers de croissance numériques. Sans engagement.",
        price: "0",
        priceCurrency: "EUR",
        url: "https://augmenter.pro/contact",
      },
      {
        "@type": "Offer",
        name: "Audit 360° IA Stratégique",
        description:
          "Diagnostic complet de 3h couvrant infrastructure, workflows et équipes. Livrable : plan d'action chiffré et priorisé.",
        price: "225",
        priceCurrency: "EUR",
        url: "https://augmenter.pro/contact",
      },
      {
        "@type": "Offer",
        name: "Développement sur mesure",
        description:
          "Applications, automatisations et intégrations IA conçues pour votre métier.",
      },
      {
        "@type": "Offer",
        name: "Formation & Accompagnement",
        description:
          "Ateliers IA pour dirigeants, formation outils collaboratifs, conduite du changement.",
      },
      {
        "@type": "Offer",
        name: "Conseil Stratégique",
        description:
          "Benchmark concurrentiel, choix technologiques, roadmap transformation digitale.",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function ApprocheView() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══════════════════ HERO — bento clair ═══════════════════ */}
      <section className="hero-gradient relative overflow-hidden py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <BentoGrid>
            {/* Titre principal — 8 × 4 */}
            <BentoCard
              span={8}
              rows={4}
              pad="lg"
              mobileMinH="320px"
              className="justify-end"
            >
              <Pill tone="primary" size="md">
                <Target className="h-3 w-3" />
                Approche 360° · Prestations &amp; Tarifs
              </Pill>
              <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.035em]">
                Une méthode, quatre piliers,{" "}
                <span className="gradient-text">des résultats chiffrés.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-[1.55] text-muted-foreground">
                Chez augmenter.PRO, la performance naît de l&apos;équilibre entre{" "}
                <strong className="font-semibold text-foreground">humain</strong>,{" "}
                <strong className="font-semibold text-foreground">outils</strong> et{" "}
                <strong className="font-semibold text-foreground">habitudes</strong>.
                PME, ETI et indépendants des Yvelines (78) et du Val d&apos;Oise (95).
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Diagnostic — 60 min
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#prestations">Voir les tarifs</Link>
                </Button>
              </div>
            </BentoCard>

            {/* Stat widget diagnostic */}
            <BentoCard span={4} rows={2} variant="flush" mobileMinH="180px">
              <TrustStatCard
                stat={{
                  icon: Target,
                  value: "60 min",
                  label: "Diagnostic offert",
                  description: "Audit complet de votre SI",
                  seed: 1.1,
                }}
                palette="violet"
              />
            </BentoCard>

            {/* Stat widget zone */}
            <BentoCard span={4} rows={2} variant="flush" mobileMinH="180px">
              <TrustStatCard
                stat={{
                  icon: MapPin,
                  value: "78 & 95",
                  label: "Zone d'intervention",
                  description: "Yvelines, Val d'Oise & distance",
                  seed: 2.2,
                }}
                palette="cold"
              />
            </BentoCard>

            {/* Expertise — 12 × 1 */}
            <BentoCard span={12} rows={1} pad="md" mobileMinH="120px">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Expertise pluridisciplinaire
                </span>
                {expertise.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1.5 text-xs"
                  >
                    <item.icon className="h-3.5 w-3.5 text-primary" />
                    {item.label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ 4 PILIERS — bento sombre ═══════════════════ */}
      <section
        id="piliers"
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
            eyebrow="/ 01 — les 4 piliers"
            eyebrowTone="dark"
            title={
              <>
                Les 4 piliers qui font
                <br />
                notre <em className="not-italic text-violet-300">différence</em>.
              </>
            }
            controls={
              <>
                <Pill tone="dark" size="md">
                  Technique
                </Pill>
                <Pill tone="dark" size="md">
                  Process
                </Pill>
                <Pill tone="dark" size="md">
                  Humain
                </Pill>
                <Pill tone="solid" size="md" className="bg-white! text-foreground! border-white!">
                  Vision
                </Pill>
              </>
            }
          />

          <BentoGrid>
            {pillars.map((pillar) => (
              <BentoCard
                key={pillar.step}
                variant="dark"
                span={6}
                rows={5}
                mobileMinH="360px"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <pillar.icon className="h-5 w-5 text-violet-300" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                        Pilier {pillar.step}
                      </span>
                      <h3 className="mt-1 text-[1.1rem] font-semibold leading-tight tracking-[-0.015em] text-white">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.85rem] leading-[1.55] text-white/65">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {pillar.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-[0.8rem] text-white/80"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300"
                          strokeWidth={2.5}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {pillar.example && (
                    <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.03] p-3 text-[0.78rem] leading-[1.5] text-white/70">
                      <strong className="font-semibold text-white">
                        Exemple :{" "}
                      </strong>
                      {pillar.example}
                    </div>
                  )}
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ MÉTHODE 4 ÉTAPES — bento clair ═══════════════════ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <SectionHead
            eyebrow="/ 02 — méthode"
            title={
              <>
                Quatre étapes, zéro{" "}
                <em className="not-italic text-primary">surprise</em>.
              </>
            }
            controls={
              <Pill tone="solid" size="md">
                Process cadré
              </Pill>
            }
          />

          <BentoGrid>
            {methodSteps.map((step) => (
              <BentoCard
                key={step.num}
                span={3}
                rows={3}
                mobileMinH="220px"
              >
                <div className="flex h-full flex-col">
                  <div className="gradient-text text-[2.2rem] font-extrabold leading-none tracking-[-0.02em]">
                    {step.num}
                  </div>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-tight tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.8rem] leading-[1.5] text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-primary">
                    Étape {step.num}
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ PRESTATIONS & TARIFS — bento sombre ═══════════════════ */}
      <section
        id="prestations"
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "#0a0811", color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 15% 30%, oklch(0.541 0.281 293 / 0.30), transparent 60%), radial-gradient(ellipse 40% 30% at 85% 70%, oklch(0.828 0.189 84.429 / 0.12), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
          <SectionHead
            eyebrow="/ 03 — prestations & tarifs"
            eyebrowTone="dark"
            title={
              <>
                Deux audits pour commencer,{" "}
                <em className="not-italic text-amber-400">trois leviers</em> pour avancer.
              </>
            }
            controls={
              <>
                <Pill tone="dark" size="md">
                  Audit 180°
                </Pill>
                <Pill tone="solid" size="md" className="bg-white! text-foreground! border-white!">
                  Audit 360°
                </Pill>
              </>
            }
          />

          <BentoGrid>
            {/* Plan 180° — 6 × 5 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={5}
              pad="lg"
              mobileMinH="420px"
            >
              <PlanCard plan={plans[0]} />
            </BentoCard>

            {/* Plan 360° recommandé — 6 × 5 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={5}
              pad="lg"
              mobileMinH="420px"
              className="relative border-violet-400/40! shadow-[0_0_0_1px_oklch(0.702_0.183_293/0.3),0_20px_50px_-20px_oklch(0.541_0.281_293/0.5)]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 80% 100%, oklch(0.541 0.281 293 / 0.45), transparent 60%)",
                }}
              />
              <PlanCard plan={plans[1]} />
            </BentoCard>

            {/* 3 autres prestations — chacune 4 × 4 */}
            {additionalServices.map((svc) => (
              <BentoCard
                key={svc.title}
                variant="dark"
                span={4}
                rows={4}
                mobileMinH="320px"
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                    <svc.icon className="h-5 w-5 text-violet-300" />
                  </div>
                  <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                    {svc.tag}
                  </span>
                  <h3 className="mt-2 text-[1rem] font-semibold leading-tight tracking-[-0.015em] text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-[0.8rem] leading-[1.5] text-white/60">
                    {svc.description}
                  </p>
                  <ul className="mt-3 flex-1 space-y-1.5">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-1.5 text-[0.75rem] leading-[1.45] text-white/75"
                      >
                        <Check
                          className="mt-[3px] h-3 w-3 shrink-0 text-violet-300"
                          strokeWidth={3}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </BentoCard>
            ))}

            {/* Garanties — 6 × 2 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={2}
              pad="md"
              mobileMinH="160px"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                Nos engagements
              </span>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {guarantees.map((g) => (
                  <div
                    key={g}
                    className="flex items-center gap-1.5 text-[0.8rem] text-white/85"
                  >
                    <Check
                      className="h-3.5 w-3.5 text-violet-300"
                      strokeWidth={2.5}
                    />
                    {g}
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Citation client — 6 × 2 */}
            <BentoCard
              variant="dark"
              span={6}
              rows={2}
              pad="none"
              mobileMinH="160px"
            >
              <PullQuoteCard
                quote="Moodboards et 3D livrés en 48 h au lieu d'une semaine — la qualité a monté d'un cran."
                author="Maud J."
                role="Architecte d'intérieur indépendante"
                stars={5}
              />
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ POUR QUI ? ═══════════════════ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <SectionHead
            eyebrow="/ 04 — pour qui"
            title={
              <>
                PME, startups, indépendants —{" "}
                <em className="not-italic text-primary">78 &amp; 95</em>.
              </>
            }
            controls={
              <Pill tone="outline" size="md">
                Présentiel ou distance
              </Pill>
            }
          />

          <BentoGrid>
            {targets.map((target) => (
              <BentoCard
                key={target.label}
                span={4}
                rows={2}
                mobileMinH="160px"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <target.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[1rem] font-semibold tracking-[-0.01em]">
                      {target.label}
                    </div>
                    <div className="mt-1 text-[0.8rem] text-muted-foreground">
                      {target.detail}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              / 05 — questions fréquentes
            </span>
            <h2 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.025em]">
              Les{" "}
              <em className="not-italic text-primary">questions</em> qu&apos;on
              nous pose avant de signer.
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════════════════ CTA FINAL — bento sombre ═══════════════════ */}
      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "#0a0811", color: "#fff" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 15% 30%, oklch(0.541 0.281 293 / 0.30), transparent 60%), radial-gradient(ellipse 40% 30% at 85% 70%, oklch(0.828 0.189 84.429 / 0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
          <BentoGrid>
            <BentoCard
              variant="dark"
              span={8}
              rows={3}
              pad="lg"
              mobileMinH="280px"
              className="justify-center"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                / 06 — on commence quand&nbsp;?
              </span>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
                60 minutes pour savoir
                <br />
                où cliquer en premier.
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-[1.55] text-white/65">
                Diagnostic offert, sans engagement. Si le fit n&apos;est pas là,
                on vous oriente ailleurs — c&apos;est aussi ça un bon audit.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
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
                    WhatsApp direct
                  </a>
                </Button>
              </div>
            </BentoCard>

            <BentoCard
              variant="dark"
              span={4}
              rows={3}
              pad="md"
              mobileMinH="240px"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300">
                    Contact direct
                  </span>
                  <div className="mt-2 text-[1rem] font-semibold tracking-tight text-white">
                    legrand.work@gmail.com
                  </div>
                  <div className="mt-1 text-[0.75rem] text-white/55">
                    +33 6 79 11 97 74
                    <br />
                    Jouy-le-Moutier (95)
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="mailto:legrand.work@gmail.com">Écrire</a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="tel:+33679119774">Appeler</a>
                  </Button>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  duration: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="relative flex h-full flex-col">
      {plan.popular && (
        <span className="absolute right-0 top-0 rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
          Recommandé
        </span>
      )}
      <div>
        <div className="text-[1rem] font-semibold tracking-[-0.01em] text-white">
          {plan.name}
        </div>
        <div className="mt-1 text-[0.8rem] leading-normal text-white/60">
          {plan.tagline}
        </div>
      </div>
      <div className="mt-5">
        <div className="text-[2.25rem] font-bold leading-none tracking-[-0.02em] text-white">
          {plan.price}
        </div>
        <div className="mt-1 inline-flex items-center gap-1.5 text-[0.72rem] text-white/55">
          <Clock className="h-3 w-3" />
          {plan.duration}
        </div>
      </div>
      <ul className="mt-4 flex flex-1 flex-col gap-2">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-1.5 text-[0.8rem] leading-[1.45] text-white/85"
          >
            <Check
              className="mt-[3px] h-3 w-3 shrink-0 text-violet-300"
              strokeWidth={3}
            />
            {f}
          </li>
        ))}
      </ul>
      <Button
        asChild
        className={
          plan.popular
            ? "mt-4 w-full gap-2 bg-primary text-primary-foreground hover:bg-violet-700"
            : "mt-4 w-full gap-2 border border-white/20 bg-transparent text-white hover:bg-white/10"
        }
        variant={plan.popular ? "default" : "outline"}
      >
        <Link href={plan.href}>
          {plan.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
