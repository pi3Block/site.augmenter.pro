import type { ChapterMeta } from "../approche/narrative/moods";

// 5-chapter set for the home — tight elevator pitch, differentiated from the
// 9-chapter /approche which dives deep into the method. The home now skips
// "Le constat" (the provocative 3-pain block) to stay focused on offer +
// proof + record (cf. 2026-05-21 trim decision).
// Mood progression: dawn → violet (DARK) → night (DARK) → amber → ember (DARK).
export const HOME_CHAPTERS: ChapterMeta[] = [
  { id: "h-01", num: "01", title: "Cover", mood: "dawn", theme: "light" },
  { id: "h-02", num: "02", title: "Trois disciplines", mood: "violet", theme: "dark" },
  { id: "h-03", num: "03", title: "Les preuves", mood: "night", theme: "dark" },
  { id: "h-04", num: "04", title: "Le récit continue", mood: "amber", theme: "light" },
  { id: "h-05", num: "05", title: "La suite", mood: "ember", theme: "dark" },
];
