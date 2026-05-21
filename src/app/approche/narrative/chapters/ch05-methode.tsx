"use client";

import { useRef, useState } from "react";
import { Search, Wrench, GraduationCap, Repeat } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CardShell, LiquidBlob } from "@/components/widgets/blobs";
import type { Palette } from "@/components/widgets/palettes";
import { Chapter } from "../primitives/chapter";
import { Pill } from "../primitives/pill";
import { Lede } from "../primitives/lede";
import { useWordSplitter } from "../primitives/word-splitter";

interface Step {
  num: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
  palette: Palette;
  seed: number;
}

const steps: Step[] = [
  {
    num: "01",
    label: "Diagnostic",
    title: "Écouter le terrain",
    body: "60 minutes pour comprendre votre activité, vos irritants, vos contraintes. Sans démo, sans tablier marketing.",
    icon: Search,
    palette: "amber",
    seed: 4,
  },
  {
    num: "02",
    label: "Outils",
    title: "Choisir juste",
    body: "On ne change pas d'outil par mode. On choisit ce qui répond à un besoin, dans votre budget, intégrable avec l'existant.",
    icon: Wrench,
    palette: "warm",
    seed: 9,
  },
  {
    num: "03",
    label: "Formation",
    title: "Embarquer l'équipe",
    body: "Un outil que personne n'utilise n'a aucune valeur. Sessions courtes, formats pratiques, support après la mise en place.",
    icon: GraduationCap,
    palette: "duo",
    seed: 14,
  },
  {
    num: "04",
    label: "Itération",
    title: "Mesurer, ajuster",
    body: "Trois mois plus tard, on regarde ensemble ce qui marche, ce qu'il faut corriger. Pas de promesse à vie, des engagements tenus.",
    icon: Repeat,
    palette: "violet",
    seed: 21,
  },
];

function StepCard({ step }: { step: Step }) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  return (
    <div className="h-[280px]">
      <CardShell palette={step.palette} hovered={hovered} onHover={setHovered}>
        <div
          aria-hidden
          className="absolute h-[90%] w-[90%]"
          style={{ top: -50, right: -70 }}
        >
          <LiquidBlob palette={step.palette} hovered={hovered} seed={step.seed} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/70">
              {step.label}
            </span>
            <Icon className="h-4 w-4 text-white/80" />
          </div>
          <div>
            <div
              className="font-semibold leading-none tracking-[-0.03em] text-amber-300"
              style={{ fontSize: 44 }}
            >
              {step.num}
            </div>
            <h3 className="mt-2 text-[19px] font-semibold leading-tight text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-[13px] leading-snug text-white/75">
              {step.body}
            </p>
          </div>
        </div>
      </CardShell>
    </div>
  );
}

export function Ch05Methode() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-05" num="05" title="La méthode" mood="amber" theme="light">
      <div data-anim="up">
        <Pill variant="amber">Notre approche · 4 étapes</Pill>
      </div>
      <div ref={ledeRef}>
        <Lede>
          On commence par <em>écouter</em>.
          <br />
          Le reste <u>suit</u>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[56ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-(--fg-muted)"
      >
        On part toujours du même endroit : votre métier, ce qui marche, ce qui
        coince. Quatre étapes pour transformer ce diagnostic en outils qui
        servent vraiment.
      </p>
      <div
        data-anim="stagger"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((s) => (
          <StepCard key={s.num} step={s} />
        ))}
      </div>
    </Chapter>
  );
}
