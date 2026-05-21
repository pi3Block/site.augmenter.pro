export type Mood =
  | "dawn"
  | "reality"
  | "violet"
  | "amber"
  | "night"
  | "audits"
  | "questions"
  | "ember";

export interface MoodPalette {
  c0: [number, number, number];
  c1: [number, number, number];
  c2: [number, number, number];
}

export interface MoodConfig {
  uContrast: number;
  uGrain: number;
  uMouseStrength: number;
}

export const MOOD_PALETTES: Record<Mood, MoodPalette> = {
  dawn: {
    c0: [0.985, 0.985, 0.985],
    c1: [0.94, 0.92, 0.97],
    c2: [0.78, 0.74, 0.94],
  },
  reality: {
    c0: [0.97, 0.97, 0.96],
    c1: [0.86, 0.87, 0.9],
    c2: [0.36, 0.36, 0.42],
  },
  violet: {
    c0: [0.16, 0.1, 0.3],
    c1: [0.32, 0.16, 0.62],
    c2: [0.74, 0.6, 0.96],
  },
  amber: {
    c0: [0.99, 0.96, 0.9],
    c1: [0.97, 0.83, 0.5],
    c2: [0.78, 0.52, 0.13],
  },
  night: {
    c0: [0.06, 0.05, 0.1],
    c1: [0.14, 0.1, 0.24],
    c2: [0.98, 0.78, 0.34],
  },
  audits: {
    c0: [0.08, 0.04, 0.14],
    c1: [0.28, 0.14, 0.48],
    c2: [0.92, 0.58, 0.24],
  },
  questions: {
    c0: [0.98, 0.98, 0.99],
    c1: [0.92, 0.9, 0.97],
    c2: [0.55, 0.45, 0.86],
  },
  ember: {
    c0: [0.05, 0.03, 0.1],
    c1: [0.2, 0.1, 0.36],
    c2: [0.98, 0.65, 0.27],
  },
};

export const MOOD_CONFIGS: Record<Mood, MoodConfig> = {
  dawn: { uContrast: 0.55, uGrain: 0.045, uMouseStrength: 0.7 },
  reality: { uContrast: 0.65, uGrain: 0.05, uMouseStrength: 0.7 },
  violet: { uContrast: 0.95, uGrain: 0.05, uMouseStrength: 1.0 },
  amber: { uContrast: 0.85, uGrain: 0.05, uMouseStrength: 0.9 },
  night: { uContrast: 1.0, uGrain: 0.06, uMouseStrength: 1.1 },
  audits: { uContrast: 1.05, uGrain: 0.06, uMouseStrength: 1.15 },
  questions: { uContrast: 0.6, uGrain: 0.045, uMouseStrength: 0.65 },
  ember: { uContrast: 1.1, uGrain: 0.06, uMouseStrength: 1.2 },
};

export interface ChapterMeta {
  id: string;
  num: string;
  title: string;
  mood: Mood;
  theme: "light" | "dark";
}

export const CHAPTERS: ChapterMeta[] = [
  { id: "ch-01", num: "01", title: "Préambule", mood: "dawn", theme: "light" },
  { id: "ch-02", num: "02", title: "Le terrain", mood: "reality", theme: "light" },
  { id: "ch-03", num: "03", title: "Les 4 piliers", mood: "violet", theme: "dark" },
  { id: "ch-04", num: "04", title: "La méthode", mood: "amber", theme: "light" },
  { id: "ch-05", num: "05", title: "Les preuves", mood: "night", theme: "dark" },
  { id: "ch-06", num: "06", title: "Les audits", mood: "audits", theme: "dark" },
  { id: "ch-07", num: "07", title: "Les questions", mood: "questions", theme: "light" },
  { id: "ch-08", num: "08", title: "La suite", mood: "ember", theme: "dark" },
];
