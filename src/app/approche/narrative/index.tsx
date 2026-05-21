"use client";

import { BackgroundCanvas } from "./background-canvas";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { CustomCursor } from "./custom-cursor";
import { NavFixed } from "./nav-fixed";
import { ChapterRail } from "./chapter-rail";
import { ProgressBar } from "./progress-bar";
import { useMoodObserver } from "./mood-observer";
import { Ch01Preambule } from "./chapters/ch01-preambule";
import { Ch02Terrain } from "./chapters/ch02-terrain";
import { Ch03Piliers } from "./chapters/ch03-piliers";
import { Ch04Interlude } from "./chapters/ch04-interlude";
import { Ch05Methode } from "./chapters/ch05-methode";
import { Ch06Preuves } from "./chapters/ch06-preuves";
import { Ch07Audits } from "./chapters/ch07-audits";
import { Ch08Questions } from "./chapters/ch08-questions";
import { Ch09Suite } from "./chapters/ch09-suite";

export function ApprocheNarrative() {
  useMoodObserver();
  return (
    <SmoothScrollProvider>
      <BackgroundCanvas />
      <CustomCursor />
      <NavFixed />
      <ChapterRail />
      <ProgressBar />
      <main className="relative z-10">
        <Ch01Preambule />
        <Ch02Terrain />
        <Ch03Piliers />
        <Ch04Interlude />
        <Ch05Methode />
        <Ch06Preuves />
        <Ch07Audits />
        <Ch08Questions />
        <Ch09Suite />
      </main>
    </SmoothScrollProvider>
  );
}
