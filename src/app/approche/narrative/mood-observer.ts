"use client";

import { useEffect } from "react";
import { narrativeStore } from "./store";
import { CHAPTERS as APPROCHE_CHAPTERS, type ChapterMeta } from "./moods";

/**
 * RAF loop that determines the active chapter from scroll position and pushes
 * mood / blendFraction / scrollProgress into the store every frame.
 *
 * Pass `chapters` to drive the observer with a custom chapter set (e.g. the
 * 6-chapter home). Defaults to /approche's 8 chapters for backward compat.
 *
 * Formulas from handoff README, section "Mood / palette observer":
 *  - active = section whose top is at or above vh * 0.5
 *  - frac   = clamp((vh*0.5 - rect.top) / rect.height, 0, 1)
 *  - blend  = clamp((frac - 0.6) / 0.4, 0, 1)  — last 40% of section
 */
export function useMoodObserver(chapters: ChapterMeta[] = APPROCHE_CHAPTERS) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let lastIdx = -1;

    const tick = () => {
      const vh = window.innerHeight;
      const sections = chapters.map((ch) =>
        document.getElementById(ch.id),
      ).filter((el): el is HTMLElement => !!el);

      let activeIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= vh * 0.5) activeIdx = i;
      }

      const active = sections[activeIdx];
      const next = sections[Math.min(activeIdx + 1, sections.length - 1)];
      if (active) {
        const rect = active.getBoundingClientRect();
        const frac = clamp((vh * 0.5 - rect.top) / rect.height, 0, 1);
        const blend = clamp((frac - 0.6) / 0.4, 0, 1);

        const currentMood = chapters[activeIdx].mood;
        const nextMood = chapters[Math.min(activeIdx + 1, chapters.length - 1)].mood;

        if (activeIdx !== lastIdx) {
          narrativeStore.setActiveChapter(activeIdx, currentMood, nextMood);
          if (document.body.dataset.mood !== currentMood) {
            document.body.dataset.mood = currentMood;
          }
          lastIdx = activeIdx;
        } else {
          // Keep next mood fresh in case it changes mid-scroll
          const s = narrativeStore.get();
          if (s.nextMood !== nextMood) {
            narrativeStore.setActiveChapter(activeIdx, currentMood, nextMood);
          }
        }
        narrativeStore.setBlend(blend);
        void next; // reserved for future use (cross-section debug)
      }

      const docHeight = document.documentElement.scrollHeight - vh;
      const progress = docHeight > 0 ? clamp(window.scrollY / docHeight, 0, 1) : 0;
      narrativeStore.setScrollProgress(progress);

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [chapters]);
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}
