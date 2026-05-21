"use client";

import { useRef, useState } from "react";
import { Monitor, Settings, GraduationCap, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CardShell, LiquidBlob } from "@/components/widgets/blobs";
import type { Palette } from "@/components/widgets/palettes";
import { Chapter } from "../primitives/chapter";
import { Pill } from "../primitives/pill";
import { Lede } from "../primitives/lede";
import { useWordSplitter } from "../primitives/word-splitter";

interface Pilier {
  icon: LucideIcon;
  step: string;
  title: string;
  quote: string;
  features: string[];
  palette: Palette;
  seed: number;
}

const piliers: Pilier[] = [
  {
    icon: Monitor,
    step: "01",
    title: "Technique",
    quote: "« On modernise le hardware avant de promettre du logiciel. »",
    features: [
      "Audit hardware (parc, réseau, périphériques)",
      "Optimisation des logiciels (ERP, CRM, IA sectorielle)",
    ],
    palette: "violet",
    seed: 3,
  },
  {
    icon: Settings,
    step: "02",
    title: "Process",
    quote: "« On automatise ce qui sert le commercial, pas ce qui le remplace. »",
    features: [
      "Analyse des workflows commerciaux & opérationnels",
      "Automatisation ciblée (devis, relances, reporting)",
    ],
    palette: "amber",
    seed: 7,
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Humain",
    quote: "« Un outil que personne n'utilise n'a aucune valeur. »",
    features: [
      "Entretiens individuels + ateliers collectifs",
      "Conduite du changement et motivation des équipes",
    ],
    palette: "duo",
    seed: 12,
  },
  {
    icon: Eye,
    step: "04",
    title: "Vision",
    quote: "« On ne vend pas un outil isolé, on dessine une feuille de route. »",
    features: ["Plan chiffré et priorisé sur 6 mois", "Stratégie alignée business"],
    palette: "cold",
    seed: 18,
  },
];

function PilierCard({ pilier }: { pilier: Pilier }) {
  const [hovered, setHovered] = useState(false);
  const Icon = pilier.icon;

  return (
    <div className="h-[360px]">
      <CardShell palette={pilier.palette} hovered={hovered} onHover={setHovered}>
        <div
          aria-hidden
          className="absolute h-[90%] w-[90%]"
          style={{ top: -60, right: -80 }}
        >
          <LiquidBlob palette={pilier.palette} hovered={hovered} seed={pilier.seed} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-7">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
            <Icon className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.015em] text-white">
              Pilier {pilier.step} · {pilier.title}
            </h3>
            <p className="mt-3 text-[14px] italic leading-snug text-white/70">
              {pilier.quote}
            </p>
            <ul className="mt-4 flex flex-col gap-1.5">
              {pilier.features.map((f) => (
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
            — {pilier.step} / 04
          </span>
        </div>
      </CardShell>
    </div>
  );
}

export function Ch03Piliers() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-03" num="03" title="Les 4 piliers" mood="violet" theme="dark">
      <div data-anim="up">
        <Pill variant="glass">Notre méthode</Pill>
      </div>
      <div ref={ledeRef} className="text-white">
        <Lede>
          Quatre axes
          <br />
          dans un seul <em>but</em>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[60ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-white/70"
      >
        Quatre axes, une seule logique : régler des problèmes réels. Chaque
        mission part de votre métier — jamais de la techno — et passe par les
        quatre, dans l&apos;ordre qui vous convient.
      </p>
      <div
        data-anim="stagger"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {piliers.map((p) => (
          <PilierCard key={p.step} pilier={p} />
        ))}
      </div>
    </Chapter>
  );
}
