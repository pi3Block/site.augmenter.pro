"use client";

// STUB — implémenté en PR 3.
// Three.js shader (fragment FBM 5 octaves + domain warping + curseur smear).
// Voir docs/ClaudeDesign_handoff/.../narrative.html lignes 1164-1259.

export function BackgroundCanvas() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 bg-[var(--neutral-50)]"
    />
  );
}
