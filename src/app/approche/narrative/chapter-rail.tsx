"use client";

// STUB — implémenté en PR 4 (active state piloté par store + scrollTo Lenis).

import { CHAPTERS } from "./moods";

export function ChapterRail() {
  return (
    <nav
      aria-label="Navigation par chapitre"
      className="pointer-events-none fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3.5 text-white lg:flex"
      style={{ mixBlendMode: "difference" }}
    >
      {CHAPTERS.map((ch) => (
        <button
          key={ch.id}
          type="button"
          className="pointer-events-auto flex items-center gap-3 py-1 text-inherit"
          aria-label={`Aller au chapitre ${ch.num} : ${ch.title}`}
        >
          <span className="w-[18px] font-mono text-[10px] tracking-[0.1em] opacity-50">
            {ch.num}
          </span>
          <span
            aria-hidden
            className="h-px w-4 bg-current opacity-30 transition-all"
          />
          <span className="text-[11px] opacity-0">{ch.title}</span>
        </button>
      ))}
    </nav>
  );
}
