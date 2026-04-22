import type { Metadata } from "next";
import { ApprocheView } from "./approche-view";

export const metadata: Metadata = {
  title: "Approche, Prestations & Tarifs — Audit IA dès 225 € | PME 78/95",
  description:
    "Méthode 360° en 4 piliers (technique, process, humain, vision) + audits 180° offert et 360° à 225 €. Pas de jargon, plan d'action concret. PME Yvelines & Val d'Oise.",
};

export default function ApprochePage() {
  return <ApprocheView />;
}
