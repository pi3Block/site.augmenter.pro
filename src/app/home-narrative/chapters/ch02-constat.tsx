"use client";

import { useRef } from "react";
import { Chapter } from "../../approche/narrative/primitives/chapter";
import { Pill } from "../../approche/narrative/primitives/pill";
import { Lede } from "../../approche/narrative/primitives/lede";
import { useWordSplitter } from "../../approche/narrative/primitives/word-splitter";

interface Douleur {
  num: string;
  quote: string;
  answer: string;
}

const douleurs: Douleur[] = [
  {
    num: "01",
    quote:
      "« Vous avez essayé un truc IA pour voir. Vous attendez encore le ROI. »",
    answer: "On commence par mesurer, pas par installer.",
  },
  {
    num: "02",
    quote:
      "« Votre prestataire parle un dialecte. Vous signez. Vous comprenez pas. »",
    answer: "On vous explique. En français. Sans slides.",
  },
  {
    num: "03",
    quote:
      "« Vos équipes ont peur de l'outil. L'outil n'est jamais utilisé. »",
    answer: "On forme avant la mise en route, pas trois mois après.",
  },
];

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
        className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-(--border-soft) bg-(--border-soft) md:grid-cols-3"
      >
        {douleurs.map((d) => (
          <div
            key={d.num}
            className="flex flex-col gap-4 bg-white/80 p-7 backdrop-blur-sm"
          >
            <span className="font-mono text-[11px] tracking-widest text-(--fg-muted)">
              — {d.num} / 03
            </span>
            <p className="text-[17px] leading-snug text-(--fg) italic">
              {d.quote}
            </p>
            <div className="mt-auto flex items-center gap-2 text-[13px] text-primary">
              <span aria-hidden>→</span>
              <span className="not-italic">{d.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </Chapter>
  );
}
