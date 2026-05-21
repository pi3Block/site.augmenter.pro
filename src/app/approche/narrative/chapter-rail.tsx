"use client";

import { CHAPTERS as APPROCHE_CHAPTERS, type ChapterMeta } from "./moods";
import { useNarrativeState } from "./store";

interface ChapterRailProps {
  chapters?: ChapterMeta[];
}

export function ChapterRail({ chapters = APPROCHE_CHAPTERS }: ChapterRailProps = {}) {
  const activeChapter = useNarrativeState((s) => s.activeChapter);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = window.__narrativeLenis;
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Navigation par chapitre"
      className="pointer-events-none fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3.5 text-white lg:flex"
      style={{ mixBlendMode: "difference" }}
    >
      {chapters.map((ch, i) => {
        const active = i === activeChapter;
        return (
          <button
            key={ch.id}
            type="button"
            onClick={() => scrollTo(ch.id)}
            className="pointer-events-auto flex items-center gap-3 py-1 text-inherit"
            aria-label={`Aller au chapitre ${ch.num} : ${ch.title}`}
            aria-current={active ? "true" : undefined}
            data-hover
          >
            <span
              className="w-[18px] font-mono text-[10px] tracking-widest transition-opacity duration-300"
              style={{ opacity: active ? 1 : 0.5 }}
            >
              {ch.num}
            </span>
            <span
              aria-hidden
              className="h-px bg-current transition-all duration-300"
              style={{ width: active ? 32 : 16, opacity: active ? 0.8 : 0.3 }}
            />
            <span
              className="text-[11px] whitespace-nowrap transition-all duration-300"
              style={{
                opacity: active ? 0.9 : 0,
                transform: active ? "translateX(0)" : "translateX(-4px)",
              }}
            >
              {ch.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
