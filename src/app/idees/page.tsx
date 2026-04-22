import type { Metadata } from "next";
import { IdeesView } from "./idees-view";

export const metadata: Metadata = {
  title: "Idées IA & Automatisation pour PME — Guide 2026",
  description:
    "6 idées concrètes et chiffrées pour booster votre entreprise : robots, IA, drones, automatisation. Avantages ET points d'attention pour décider vite.",
};

export default function IdeesPage() {
  return <IdeesView />;
}
