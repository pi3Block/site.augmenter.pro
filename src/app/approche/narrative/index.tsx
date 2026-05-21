"use client";

// Orchestrateur narrative — assemble background, chrome fixe, et les 8 chapitres.
// Le mood observer (RAF qui pilote le store) est implémenté en PR 3.

import { BackgroundCanvas } from "./background-canvas";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { CustomCursor } from "./custom-cursor";
import { NavFixed } from "./nav-fixed";
import { ChapterRail } from "./chapter-rail";
import { ProgressBar } from "./progress-bar";
import { Ch01Preambule } from "./chapters/ch01-preambule";
import { Ch02Terrain } from "./chapters/ch02-terrain";
import { Ch03Piliers } from "./chapters/ch03-piliers";
import { Ch04Methode } from "./chapters/ch04-methode";
import { Ch05Preuves } from "./chapters/ch05-preuves";
import { Ch06Audits } from "./chapters/ch06-audits";
import { Ch07Questions } from "./chapters/ch07-questions";
import { Ch08Suite } from "./chapters/ch08-suite";

export function ApprocheNarrative() {
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
        <Ch04Methode />
        <Ch05Preuves />
        <Ch06Audits />
        <Ch07Questions />
        <Ch08Suite />
      </main>
    </SmoothScrollProvider>
  );
}
