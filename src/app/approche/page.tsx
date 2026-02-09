import type { Metadata } from "next";
import { Approach } from "@/components/sections/approach";
import { CTA } from "@/components/sections/cta";
import {
  Monitor,
  Settings,
  GraduationCap,
  Eye,
  Wrench,
  Server,
  BarChart3,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Approche 360° — Technique, Process & Humain | PME 78/95",
  description:
    "Notre méthode unique en 4 piliers : expertise technique, optimisation process, formation humaine et vision stratégique. Pour PME du BTP, immobilier et industrie en Yvelines et Val d'Oise.",
};

const pillars = [
  {
    icon: Monitor,
    step: "01",
    title: "Expertise Technique (Software & Hardware)",
    description:
      "Nous analysons votre infrastructure de A à Z, du matériel au logiciel, pour une performance sans faille. Que vous soyez une PME en Yvelines ou un artisan industriel dans le Val d'Oise, nous identifions les faiblesses de votre parc informatique : serveurs obsolètes, logiciels mal intégrés, ou connexions réseau inefficaces.",
    features: [
      "Diagnostic complet du hardware (ordinateurs, réseaux, périphériques)",
      "Optimisation des logiciels (ERP, CRM, outils IA adaptés à votre secteur)",
    ],
    example:
      "Pour une agence immobilière à Versailles (78), nous avons modernisé un système hardware daté, réduisant les temps d'arrêt de 50%.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Expertise Process (Vente & Opérations)",
    description:
      "Fort de notre expérience en management commercial, nous optimisons vos flux de travail pour éliminer les tâches répétitives et améliorer l'efficacité. Nous cartographions vos processus — de la prospection à la facturation — pour automatiser ce qui peut l'être.",
    features: [
      "Analyse des workflows de vente et opérations",
      "Automatisation des tâches manuelles (ex. génération de devis pour artisans du 95)",
    ],
    example:
      "Un professionnel de la vente à Cergy (95) a gagné 10 heures par semaine en optimisant ses processus commerciaux.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Expertise Humaine (Formation & Accompagnement)",
    description:
      "Nous nous assurons que vos équipes adoptent les nouveaux outils et se sentent valorisées. Nous intégrons des formations personnalisées qui vont au-delà du technique : écoute active, gestion du changement, et motivation des équipes.",
    features: [
      "Entretiens individuels et ateliers de formation",
      "Accompagnement au changement pour une adoption durable",
    ],
    example:
      "Une équipe d'artisans à Pontoise (95) a vu son engagement grimper de 30% après nos sessions.",
  },
  {
    icon: Eye,
    step: "04",
    title: "Vision Globale et Stratégique",
    description:
      "Ce qui nous distingue : une vue d'ensemble qui lie les piliers précédents. Nous ne vendons pas un outil isolé, mais une stratégie holistique. Notre audit 360° est le point de départ pour chiffrer les gains et prioriser les actions.",
    features: [
      "Plan chiffré et priorisé",
      "Stratégie alignée sur vos objectifs business",
    ],
    example: null,
  },
];

const faq = [
  {
    question: "Qu'est-ce que l'expertise technique ?",
    answer:
      "Nous analysons votre infrastructure pour garantir une performance optimale de vos systèmes matériels et logiciels à des coûts raisonnables.",
  },
  {
    question: "Comment optimisez-vous les processus ?",
    answer:
      "Nous améliorons vos flux de travail pour réduire les tâches répétitives et augmenter l'efficacité opérationnelle de votre entreprise.",
  },
  {
    question: "Quelle est l'approche humaine ?",
    answer:
      "Nous formons et accompagnons vos équipes pour qu'elles adoptent les nouveaux outils tout en se sentant valorisées et soutenues dans leur travail.",
  },
  {
    question: "Quels sont vos domaines d'expertise ?",
    answer:
      "Nous avons des compétences en technique (software & hardware), processus (vente & opérations), formation humaine et vision stratégique globale.",
  },
];

const expertise = [
  { icon: Server, label: "Développeur Full Stack" },
  { icon: Wrench, label: "Électronicien industriel" },
  { icon: BarChart3, label: "Manager commercial" },
  { icon: Users, label: "Communicant humaniste" },
];

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

export default function ApprochePage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Notre Approche{" "}
              <span className="gradient-text">360°</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Chez augmenter.PRO, nous croyons que la performance d&apos;une
              entreprise naît de l&apos;équilibre entre l&apos;humain, ses outils et
              ses habitudes. Notre approche est conçue pour les PME et ETI des
              Yvelines (78) et du Val d&apos;Oise (95).
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {expertise.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-4 py-2 text-sm"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Les 4 piliers qui font notre différence
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <Card key={pillar.step} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Pilier {pillar.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {pillar.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {pillar.example && (
                    <div className="mt-4 rounded-lg bg-primary/5 p-3 text-sm text-muted-foreground">
                      <strong className="text-foreground">Exemple : </strong>
                      {pillar.example}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Approach />

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Pour qui ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
            Nous travaillons principalement avec des PME, ETI et indépendants des
            Yvelines (78) et du Val d&apos;Oise (95), en présentiel ou à distance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "PME / ETI", detail: "BTP, immobilier, industrie" },
              { label: "Startups", detail: "Tech, SaaS, services" },
              { label: "Indépendants", detail: "Consultants, artisans" },
            ].map((target) => (
              <div
                key={target.label}
                className="rounded-xl border border-border/50 bg-background p-6 text-center"
              >
                <span className="text-lg font-semibold">{target.label}</span>
                <p className="mt-1 text-sm text-muted-foreground">
                  {target.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="mt-8">
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

      <CTA />
    </div>
  );
}
