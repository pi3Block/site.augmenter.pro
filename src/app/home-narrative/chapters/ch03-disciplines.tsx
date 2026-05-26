"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Brain, Monitor, Bot, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CardShell, LiquidBlob } from "@/components/widgets/blobs";
import type { Palette } from "@/components/widgets/palettes";
import { Chapter } from "../../approche/narrative/primitives/chapter";
import { Pill } from "../../approche/narrative/primitives/pill";
import { Lede } from "../../approche/narrative/primitives/lede";
import { useWordSplitter } from "../../approche/narrative/primitives/word-splitter";

interface Discipline {
  num: string;
  icon: LucideIcon;
  title: string;
  quote: string;
  features: string[];
  palette: Palette;
  seed: number;
}

const disciplines: Discipline[] = [
  {
    num: "01",
    icon: Brain,
    title: "Intelligence artificielle",
    quote: "« L'IA ne sert pas qu'à générer des images de chats. »",
    features: [
      "Automatisation de tâches répétitives",
      "Claude Code & assistants métier",
      "Intégration MCP & API",
    ],
    palette: "violet",
    seed: 81,
  },
  {
    num: "02",
    icon: Monitor,
    title: "Digitalisation avancée",
    quote: "« Changer d'outil, c'est un projet humain avant d'être technique. »",
    features: [
      "Audit informatique 180°",
      "Paramétrage Odoo & outils métier",
      "Formation des équipes",
    ],
    palette: "duo",
    seed: 87,
  },
  {
    num: "03",
    icon: Bot,
    title: "Robotique & IoT",
    quote: "« Drones, robots, capteurs — les yeux et les bras du numérique. »",
    features: [
      "Capture terrain (drones, caméras)",
      "Capteurs & télémétrie",
      "Pilotage d'équipements",
    ],
    palette: "cold",
    seed: 93,
  },
];

function DisciplineCard({ d }: { d: Discipline }) {
  const [hovered, setHovered] = useState(false);
  const Icon = d.icon;

  return (
    <div className="h-[380px]">
      <CardShell palette={d.palette} hovered={hovered} onHover={setHovered}>
        <div
          aria-hidden
          className="absolute h-[90%] w-[90%]"
          style={{ top: -60, right: -80 }}
        >
          <LiquidBlob palette={d.palette} hovered={hovered} seed={d.seed} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
            <Icon className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.015em] text-white">
              {d.title}
            </h3>
            <p className="mt-3 text-[14px] italic leading-snug text-white/70">
              {d.quote}
            </p>
            <ul className="mt-4 flex flex-col gap-1.5">
              {d.features.map((f) => (
                <li
                  key={f}
                  className="relative pl-4 text-[13px] leading-snug text-white/85 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-400"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <span className="font-mono text-[11px] tracking-widest text-white/55">
            — {d.num} / 03
          </span>
        </div>
      </CardShell>
    </div>
  );
}

export function H03Disciplines() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="h-03" num="03" title="Trois disciplines" mood="violet" theme="dark">
      <div data-anim="up">
        <Pill variant="glass">Prestations · Trois disciplines</Pill>
      </div>
      <div ref={ledeRef} className="text-white">
        <Lede>
          Trois disciplines
          <br />
          dans un seul <em>but</em>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[60ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-white/70"
      >
        Trois disciplines, une seule logique : régler des problèmes réels.
        Chaque mission part de votre métier — jamais de la techno — et
        croise ce qu&apos;il faut des trois.
      </p>
      <div
        data-anim="stagger"
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {disciplines.map((d) => (
          <DisciplineCard key={d.num} d={d} />
        ))}
      </div>
      <div data-anim="up" className="flex items-center gap-2">
        <Link
          href="/approche"
          data-hover
          className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-white/10"
        >
          Voir la méthode complète
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Chapter>
  );
}
