"use client";

import { useRef } from "react";
import { Chapter } from "../primitives/chapter";
import { Pill } from "../primitives/pill";
import { Lede } from "../primitives/lede";
import { useWordSplitter } from "../primitives/word-splitter";

const annotations = [
  {
    kicker: "Profil client",
    body: "Gérants de PME (5 à 80 personnes), indépendants, artisans. BTP, immobilier, industrie, services. Non-techniques. Allergiques aux promesses creuses.",
  },
  {
    kicker: "Demande type",
    body: "« Mes équipes passent trop de temps sur des tâches répétitives. » « J'ai entendu parler d'IA — qu'est-ce que je peux en faire, concrètement, dans mon métier ? »",
  },
  {
    kicker: "Promesse",
    body: "Pas de PowerPoint à 80 slides. Un diagnostic, une feuille de route, des outils qui fonctionnent dès la semaine suivante.",
  },
];

const pins = [
  { left: "50%", top: "47%", home: true, label: "Jouy-le-Moutier · base" },
  { left: "26%", top: "62%" },
  { left: "32%", top: "42%" },
  { left: "64%", top: "38%" },
  { left: "70%", top: "60%" },
  { left: "18%", top: "52%" },
];

export function Ch02Terrain() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-02" num="02" title="Le terrain" mood="reality" theme="light">
      <div data-anim="up">
        <Pill>78 · 95 · en présentiel ou à distance</Pill>
      </div>
      <div ref={ledeRef}>
        <Lede>
          Pas la Silicon&nbsp;Valley.
          <br />
          Le <em>Vexin</em>, la vallée de l&apos;Oise,
          <br />
          des artisans qui veulent <u>avancer</u>.
        </Lede>
      </div>
      <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div
          data-anim="up"
          className="relative aspect-4/3 overflow-hidden rounded-2xl border border-(--border-soft) bg-white/60 backdrop-blur-md"
        >
          <svg
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            className="block h-full w-full"
            aria-hidden
          >
            <defs>
              <pattern
                id="map-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.15"
                />
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#map-grid)" color="#666" />
            <path
              d="M 30 230 Q 110 200 180 220 T 320 180 Q 360 165 390 145"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              opacity="0.35"
            />
            <path
              d="M 110 60 Q 150 110 210 130 T 320 180"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              opacity="0.35"
            />
            <path
              d="M 90 100 Q 70 150 80 200 Q 110 240 170 230 Q 210 215 220 175 Q 215 130 180 105 Q 135 80 90 100 Z"
              fill="oklch(0.541 0.281 293 / 7%)"
              stroke="oklch(0.541 0.281 293 / 25%)"
              strokeWidth="1"
            />
            <path
              d="M 200 60 Q 175 95 195 130 Q 230 155 280 145 Q 320 130 325 95 Q 315 60 270 50 Q 225 45 200 60 Z"
              fill="oklch(0.541 0.281 293 / 7%)"
              stroke="oklch(0.541 0.281 293 / 25%)"
              strokeWidth="1"
            />
            <text
              x="135"
              y="170"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="9"
              fill="oklch(0.541 0.281 293)"
              letterSpacing="2"
            >
              YVELINES · 78
            </text>
            <text
              x="225"
              y="100"
              fontFamily="var(--font-geist-mono), monospace"
              fontSize="9"
              fill="oklch(0.541 0.281 293)"
              letterSpacing="2"
            >
              VAL D&apos;OISE · 95
            </text>
          </svg>
          {pins.map((pin, i) => (
            <span
              key={i}
              aria-hidden
              className={`absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${pin.home ? "bg-amber-400 shadow-[0_0_0_6px_oklch(0.828_0.189_84/0.28)]" : "bg-violet-600 shadow-[0_0_0_6px_oklch(0.541_0.281_293/0.18)]"}`}
              style={{ left: pin.left, top: pin.top }}
            />
          ))}
          <span
            aria-hidden
            className="absolute -translate-x-1/2 -translate-y-[calc(100%+8px)] rounded-sm bg-(--fg) px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-(--bg) whitespace-nowrap"
            style={{ left: "50%", top: "47%", color: "var(--bg, white)" }}
          >
            Jouy-le-Moutier · base
          </span>
          <span className="absolute bottom-3.5 left-4 font-mono text-[10px] uppercase tracking-[0.14em] text-(--fg-muted)">
            Couverture · rayon ~45 km · 12 missions / mois
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {annotations.map((a) => (
            <div
              key={a.kicker}
              data-anim="up"
              className="grid grid-cols-[160px_1fr] gap-6 border-t border-(--border-soft) pt-5"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--fg-muted)">
                {a.kicker}
              </div>
              <p className="text-[15px] leading-relaxed text-(--fg)">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
