"use client";

import { ReactNode } from "react";
import { Mood } from "../moods";

interface ChapterProps {
  id: string;
  num: string;
  title: string;
  mood: Mood;
  theme?: "light" | "dark";
  children: ReactNode;
}

export function Chapter({ id, num, title, mood, theme = "light", children }: ChapterProps) {
  return (
    <section
      id={id}
      data-mood={mood}
      data-theme={theme}
      aria-labelledby={`${id}-title`}
      className="relative isolate flex min-h-screen flex-col px-6 py-[120px] md:px-10 md:py-[140px]"
    >
      <div className="m-auto flex w-full max-w-[1180px] flex-1 flex-col justify-center gap-14">
        <div className="flex items-baseline gap-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[color:var(--fg-muted)]">
          <span>CH.{num}</span>
          <span className="h-px w-20 bg-current opacity-30" aria-hidden />
          <span id={`${id}-title`}>{title}</span>
        </div>
        {children}
      </div>
    </section>
  );
}
