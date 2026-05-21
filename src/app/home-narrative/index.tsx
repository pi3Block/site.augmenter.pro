"use client";

import { BackgroundCanvas } from "../approche/narrative/background-canvas";
import { SmoothScrollProvider } from "../approche/narrative/smooth-scroll-provider";
import { CustomCursor } from "../approche/narrative/custom-cursor";
import { NavFixed } from "../approche/narrative/nav-fixed";
import { ChapterRail } from "../approche/narrative/chapter-rail";
import { ProgressBar } from "../approche/narrative/progress-bar";
import { useMoodObserver } from "../approche/narrative/mood-observer";
import { HOME_CHAPTERS } from "./home-moods";
import { H01Cover } from "./chapters/ch01-cover";
import { H02Disciplines } from "./chapters/ch02-disciplines";
import { H03Preuves } from "./chapters/ch03-preuves";
import { H04Recit } from "./chapters/ch04-recit";
import { H05Suite } from "./chapters/ch05-suite";

export function HomeNarrative() {
  useMoodObserver(HOME_CHAPTERS);
  return (
    <SmoothScrollProvider>
      <BackgroundCanvas />
      <CustomCursor />
      <NavFixed />
      <ChapterRail chapters={HOME_CHAPTERS} />
      <ProgressBar chapters={HOME_CHAPTERS} />
      <main className="relative z-10">
        <H01Cover />
        <H02Disciplines />
        <H03Preuves />
        <H04Recit />
        <H05Suite />
      </main>
    </SmoothScrollProvider>
  );
}
