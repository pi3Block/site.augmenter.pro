"use client";

import { CHAPTERS } from "./moods";
import { useNarrativeState } from "./store";

export function ProgressBar() {
  const activeChapter = useNarrativeState((s) => s.activeChapter);
  const progress = useNarrativeState((s) => s.scrollProgress);
  const ch = CHAPTERS[activeChapter] ?? CHAPTERS[0];

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Progression dans le récit"
      className="pointer-events-none fixed inset-x-8 bottom-5 z-40 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white"
      style={{ mixBlendMode: "difference" }}
    >
      <span>
        CH.{ch.num} — {ch.title}
      </span>
      <div className="relative h-px flex-1 bg-white/25">
        <div
          className="absolute inset-0 origin-left bg-white transition-transform duration-100 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
        <div className="pointer-events-none absolute -inset-y-[3px] inset-x-0 flex justify-between">
          {CHAPTERS.map((c) => (
            <span key={c.id} className="h-[7px] w-px bg-white/40" />
          ))}
        </div>
      </div>
      <span>
        {ch.num} / {String(CHAPTERS.length).padStart(2, "0")}
      </span>
    </div>
  );
}
