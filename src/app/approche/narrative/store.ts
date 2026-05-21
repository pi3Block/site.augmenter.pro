"use client";

import { useSyncExternalStore } from "react";
import type { Mood } from "./moods";

interface NarrativeState {
  activeChapter: number;
  currentMood: Mood;
  nextMood: Mood;
  blendFraction: number;
  scrollProgress: number;
  prefersReducedMotion: boolean;
}

const initialState: NarrativeState = {
  activeChapter: 0,
  currentMood: "dawn",
  nextMood: "dawn",
  blendFraction: 0,
  scrollProgress: 0,
  prefersReducedMotion: false,
};

let state: NarrativeState = initialState;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export const narrativeStore = {
  get: () => state,
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  setActiveChapter: (idx: number, currentMood: Mood, nextMood: Mood) => {
    state = { ...state, activeChapter: idx, currentMood, nextMood };
    emit();
  },
  setBlend: (blend: number) => {
    if (state.blendFraction === blend) return;
    state = { ...state, blendFraction: blend };
    emit();
  },
  setScrollProgress: (p: number) => {
    if (state.scrollProgress === p) return;
    state = { ...state, scrollProgress: p };
    emit();
  },
  setReducedMotion: (v: boolean) => {
    state = { ...state, prefersReducedMotion: v };
    emit();
  },
};

const serverSnapshot = () => initialState;

export function useNarrativeState<T>(selector: (s: NarrativeState) => T): T {
  return useSyncExternalStore(
    narrativeStore.subscribe,
    () => selector(narrativeStore.get()),
    () => selector(serverSnapshot()),
  );
}
