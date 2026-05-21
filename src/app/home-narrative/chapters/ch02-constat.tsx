"use client";

import { useRef, useState } from "react";
import { CardShell, LiquidBlob } from "@/components/widgets/blobs";
import type { Palette } from "@/components/widgets/palettes";
import { Chapter } from "../../approche/narrative/primitives/chapter";
import { Pill } from "../../approche/narrative/primitives/pill";
import { Lede } from "../../approche/narrative/primitives/lede";
import { useWordSplitter } from "../../approche/narrative/primitives/word-splitter";

interface Douleur {
  num: string;
  quote: string;
  answer: string;
  palette: Palette;
  seed: number;
}

const douleurs: Douleur[] = [
  {
    num: "01",
    quote:
      "« Vous avez essayé un truc IA pour voir. Vous attendez encore le ROI. »",
    answer: "On commence par mesurer, pas par installer.",
    palette: "violet",
    seed: 141,
  },
  {
    num: "02",
    quote:
      "« Votre prestataire parle un dialecte. Vous signez. Vous comprenez pas. »",
    answer: "On vous explique. En français. Sans slides.",
    palette: "duo",
    seed: 147,
  },
  {
    num: "03",
    quote:
      "« Vos équipes ont peur de l'outil. L'outil n'est jamais utilisé. »",
    answer: "On forme avant la mise en route, pas trois mois après.",
    palette: "cold",
    seed: 153,
  },
];

function DouleurCard({ d }: { d: Douleur }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-[320px]">
      <CardShell palette={d.palette} hovered={hovered} onHover={setHovered}>
        <div
          aria-hidden
          className="absolute h-[85%] w-[85%]"
          style={{ top: -60, right: -90 }}
        >
          <LiquidBlob palette={d.palette} hovered={hovered} seed={d.seed} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-7">
          <span className="font-mono text-[11px] tracking-widest text-white/55">
            — {d.num} / 03
          </span>
          <p className="text-[17px] italic leading-snug text-white">
            {d.quote}
          </p>
          <div className="flex items-start gap-2 text-[13px] leading-snug text-amber-300">
            <span aria-hidden>→</span>
            <span className="not-italic">{d.answer}</span>
          </div>
        </div>
      </CardShell>
    </div>
  );
}

export function H02Constat() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="h-02" num="02" title="Le constat" mood="reality" theme="light">
      <div data-anim="up">
        <Pill>Le constat</Pill>
      </div>
      <div ref={ledeRef}>
        <Lede>
          Pendant qu&apos;on vous <em>vend</em> des slides,
          <br />
          vos concurrents <u>livrent</u>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[60ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-(--fg-muted)"
      >
        Trois écueils qu&apos;on entend dans presque tous les premiers
        échanges. Ils ne sont pas une fatalité — ils sont une étape.
      </p>
      <div
        data-anim="stagger"
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {douleurs.map((d) => (
          <DouleurCard key={d.num} d={d} />
        ))}
      </div>
    </Chapter>
  );
}
