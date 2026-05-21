import type { Metadata } from "next";
import { ApprocheNarrative } from "../approche/narrative";

// TEMP — preview route for the narrative-scroll refactor (ADR 0001).
// Not indexed, not linked. Will be deleted in PR 8 when /approche is swapped.

export const metadata: Metadata = {
  title: "Preview — Approche narrative scroll",
  robots: { index: false, follow: false },
};

export default function ApprochePreviewPage() {
  return <ApprocheNarrative />;
}
