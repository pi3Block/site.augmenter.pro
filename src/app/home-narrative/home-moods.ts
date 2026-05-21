import type { ChapterMeta } from "../approche/narrative/moods";

// 6-chapter set for the home — complementary to the 9-chapter /approche which
// dives deep into the method. The constat (Ch02) is back with lava-lamp cards
// per user request 2026-05-21.
// Mood progression: dawn → reality → violet (DARK) → night (DARK) → amber → ember (DARK).
export const HOME_CHAPTERS: ChapterMeta[] = [
  { id: "h-01", num: "01", title: "Cover", mood: "dawn", theme: "light" },
  { id: "h-02", num: "02", title: "Le constat", mood: "reality", theme: "light" },
  { id: "h-03", num: "03", title: "Trois disciplines", mood: "violet", theme: "dark" },
  { id: "h-04", num: "04", title: "Les preuves", mood: "night", theme: "dark" },
  { id: "h-05", num: "05", title: "Le récit continue", mood: "amber", theme: "light" },
  { id: "h-06", num: "06", title: "La suite", mood: "ember", theme: "dark" },
];
