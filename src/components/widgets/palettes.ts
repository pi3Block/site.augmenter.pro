// src/components/widgets/palettes.ts
// Palettes OKLCH partagées par tous les widgets animés.
// Alignées sur les tokens de globals.css pour cohérence avec le design system.

export type Palette = "violet" | "amber" | "duo" | "cold" | "warm" | "mono";

export interface PaletteTokens {
  /** fond dégradé de la CardShell */
  bg: string;
  /** couleur primaire (stops principaux des blobs) */
  a: string;
  /** couleur secondaire (deep) */
  b: string;
  /** couleur tertiaire (highlight) */
  c: string;
  /** accent texte/specular (quasi blanc teinté) */
  accent: string;
}

export const PALETTES: Record<Palette, PaletteTokens> = {
  violet: {
    bg: "radial-gradient(120% 80% at 30% 20%, oklch(0.25 0.12 293) 0%, oklch(0.12 0.05 293) 55%, oklch(0.06 0.02 280) 100%)",
    a: "oklch(0.702 0.183 293)",
    b: "oklch(0.541 0.281 293)",
    c: "oklch(0.811 0.111 293)",
    accent: "oklch(0.969 0.016 293)",
  },
  amber: {
    bg: "radial-gradient(120% 80% at 70% 20%, oklch(0.25 0.08 60) 0%, oklch(0.12 0.04 60) 55%, oklch(0.06 0.015 50) 100%)",
    a: "oklch(0.828 0.189 84.429)",
    b: "oklch(0.769 0.188 70.08)",
    c: "oklch(0.879 0.142 92)",
    accent: "oklch(0.96 0.05 90)",
  },
  duo: {
    bg: "radial-gradient(120% 80% at 30% 20%, oklch(0.25 0.12 293) 0%, oklch(0.14 0.05 40) 60%, oklch(0.06 0.02 280) 100%)",
    a: "oklch(0.702 0.183 293)",
    b: "oklch(0.828 0.189 84.429)",
    c: "oklch(0.702 0.2 340)",
    accent: "oklch(0.96 0.05 90)",
  },
  cold: {
    bg: "radial-gradient(120% 80% at 30% 20%, oklch(0.22 0.1 260) 0%, oklch(0.12 0.05 260) 60%, oklch(0.06 0.02 260) 100%)",
    a: "oklch(0.72 0.15 260)",
    b: "oklch(0.6 0.2 265)",
    c: "oklch(0.78 0.12 270)",
    accent: "oklch(0.95 0.03 260)",
  },
  warm: {
    bg: "radial-gradient(120% 80% at 70% 20%, oklch(0.25 0.12 45) 0%, oklch(0.13 0.06 40) 60%, oklch(0.06 0.02 30) 100%)",
    a: "oklch(0.75 0.18 50)",
    b: "oklch(0.65 0.2 40)",
    c: "oklch(0.82 0.16 70)",
    accent: "oklch(0.94 0.06 70)",
  },
  mono: {
    bg: "radial-gradient(120% 80% at 30% 20%, oklch(0.2 0 0) 0%, oklch(0.12 0 0) 60%, oklch(0.05 0 0) 100%)",
    a: "oklch(0.55 0 0)",
    b: "oklch(0.4 0 0)",
    c: "oklch(0.7 0 0)",
    accent: "oklch(0.92 0 0)",
  },
};
