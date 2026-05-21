"use client";

// STUB — implémenté en PR 4 (fill scaleX live + label dynamique).

import { CHAPTERS } from "./moods";

export function ProgressBar() {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      aria-label="Progression dans le récit"
      className="pointer-events-none fixed inset-x-8 bottom-5 z-40 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white"
      style={{ mixBlendMode: "difference" }}
    >
      <span data-progress-label="left">CH.01 — Préambule</span>
      <div className="relative h-px flex-1 bg-white/25">
        <div
          data-progress-fill
          className="absolute inset-0 origin-left scale-x-0 bg-white"
        />
        <div className="pointer-events-none absolute -inset-y-[3px] inset-x-0 flex justify-between">
          {CHAPTERS.map((ch) => (
            <span key={ch.id} className="h-[7px] w-px bg-white/40" />
          ))}
        </div>
      </div>
      <span data-progress-label="right">01 / 08</span>
    </div>
  );
}
