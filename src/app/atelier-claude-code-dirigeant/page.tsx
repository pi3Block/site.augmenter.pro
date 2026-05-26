import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  MapPin,
  Terminal,
  FileCode,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { ShaderBackdrop } from "@/components/widgets/shader-backdrop";

export const metadata: Metadata = {
  title: "Atelier Claude Code Dirigeant PME — ½ Journée, 650 €",
  description:
    "Repartez avec Claude Code installé sur votre projet, un CLAUDE.md opérationnel et vos premiers workflows. Atelier ½ journée — 650 € HT, présentiel 78/95 ou visio.",
  alternates: { canonical: "https://augmenter.pro/atelier-claude-code-dirigeant" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://augmenter.pro/atelier-claude-code-dirigeant#service",
  name: "Atelier Claude Code pour dirigeant de PME",
  serviceType: "Formation / atelier IA",
  description:
    "Atelier d'une demi-journée pour un dirigeant de PME : installation de Claude Code sur son projet, rédaction d'un CLAUDE.md opérationnel et mise en route de 2-3 workflows concrets. Présentiel Yvelines (78) / Val d'Oise (95) ou visio.",
  provider: { "@id": "https://augmenter.pro/#organization" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Yvelines (78)" },
    { "@type": "AdministrativeArea", name: "Val d'Oise (95)" },
    { "@type": "Country", name: "France" },
  ],
  offers: {
    "@type": "Offer",
    price: "650",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://augmenter.pro/atelier-claude-code-dirigeant",
  },
};

const pourQui = [
  "Dirigeant ou cadre dirigeant de PME (10-200 salariés)",
  "Déjà à l'aise avec ChatGPT / Claude, envie de passer au niveau supérieur",
  "Un projet ou un irritant concret en tête (devis, doc, reporting, dev interne)",
  "Veut rendre son équipe autonome, pas dépendre d'un prestataire",
];

const pasPourQui = [
  "Vous cherchez une formation théorique sans toucher à votre contexte réel",
  "Vous n'avez aucun cas d'usage concret en tête",
  "Vous voulez déléguer entièrement sans monter en compétence",
];

const programme = [
  {
    icon: Terminal,
    title: "1 · Installation & prise en main",
    body: "On installe Claude Code sur votre machine et votre projet réel. Vous comprenez la logique agentique : ce que l'outil sait faire, ses garde-fous, quand l'utiliser.",
  },
  {
    icon: FileCode,
    title: "2 · Votre premier CLAUDE.md",
    body: "On rédige ensemble le fichier de contexte qui transforme Claude Code en collaborateur qui connaît votre projet : conventions, garde-fous, décisions. La mémoire qui évite la dérive.",
  },
  {
    icon: Workflow,
    title: "3 · 2-3 workflows lancés",
    body: "On met en production 2-3 cas d'usage tirés de VOTRE quotidien. Vous repartez avec des automatisations qui tournent, pas des slides.",
  },
];

const inclus = [
  "Une demi-journée (≈ 3h30) en tête-à-tête, sur votre projet réel",
  "Votre CLAUDE.md opérationnel + 2-3 workflows en production",
  "Les templates CLAUDE.md prêts à l'emploi (accès au dépôt public)",
  "Un compte-rendu écrit avec les prochaines étapes",
  "30 jours de questions par email après l'atelier",
];

export default function AtelierClaudeCodePage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden py-20">
        <ShaderBackdrop mood="dawn" opacity={0.6} className="-z-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
            <Terminal className="h-4 w-4" />
            Atelier dirigeant · demi-journée
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Configurez Claude Code sur votre projet —{" "}
            <span className="gradient-text">en une demi-journée</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pas une formation théorique. Un atelier en tête-à-tête où l&apos;on
            installe Claude Code sur <strong>votre</strong> projet, où l&apos;on
            écrit <strong>votre</strong> CLAUDE.md, et où vous repartez avec
            2-3 workflows qui tournent. Vous repartez autonome.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Réserver l&apos;atelier — 650 € HT
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> Présentiel 78/95 ou visio
              <Clock className="ml-2 h-4 w-4" /> ½ journée
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-20 px-4 pb-24 sm:px-6">
        {/* ── Pour qui / pas pour qui ── */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-xl font-bold">Pour qui</h2>
            <ul className="mt-4 space-y-3">
              {pourQui.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 p-7">
            <h2 className="text-xl font-bold">Pas pour vous si…</h2>
            <ul className="mt-4 space-y-3">
              {pasPourQui.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Programme ── */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">Le déroulé de la demi-journée</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Tout se fait sur votre contexte réel. Aucune diapositive générique.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {programme.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ce qui est inclus + prix ── */}
        <section className="rounded-2xl border border-violet-200 bg-violet-50/60 p-8 dark:border-violet-900/50 dark:bg-violet-950/20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Ce qui est inclus</h2>
            <div className="text-right">
              <p className="text-3xl font-bold text-violet-700 dark:text-violet-300">650 € HT</p>
              <p className="text-sm text-muted-foreground">demi-journée, tout compris</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {inclus.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Pourquoi 650 € et pas 3 000 € ? Parce que l&apos;objectif n&apos;est
            pas de vous vendre des jours de prestation, mais de vous rendre
            autonome en une session. Si vous voulez aller plus loin ensuite,
            on en reparle — sans engagement.
          </p>
          <div className="mt-7">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Réserver mon atelier
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* ── Crédibilité ── */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight">Pourquoi avec augmenter.PRO</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            On documente publiquement notre méthode Claude Code — vous savez
            exactement à quoi vous attendre :
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              →{" "}
              <Link href="/blog/claude-code-prompt-architecture" className="text-primary hover:underline">
                L&apos;architecture de prompt Claude Code
              </Link>{" "}
              (notre article le plus lu)
            </li>
            <li>
              →{" "}
              <Link href="/blog/configurer-odoo-ia-claude-cowork" className="text-primary hover:underline">
                Configurer Odoo avec l&apos;IA en 4 jours
              </Link>{" "}
              — cas client réel
            </li>
            <li>
              →{" "}
              <a
                href="https://github.com/Pi3r2Dev/claude-md-templates-pme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Nos templates CLAUDE.md en accès ouvert (GitHub)
              </a>
            </li>
          </ul>
        </section>
      </div>

      <CTA variant="default" />
    </div>
  );
}
