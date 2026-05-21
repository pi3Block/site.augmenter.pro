import type { Metadata } from "next";
import { HomeNarrative } from "../home-narrative";

// TEMP — preview route for the narrative-scroll home (ADR 0002).
// Not indexed, not linked. Will be deleted in PR 6 when / is swapped.

export const metadata: Metadata = {
  title: "Preview — Home narrative scroll",
  robots: { index: false, follow: false },
};

export default function HomePreviewPage() {
  return <HomeNarrative />;
}
