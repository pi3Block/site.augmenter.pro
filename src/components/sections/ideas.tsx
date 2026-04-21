// src/components/sections/ideas.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IdeaCardBigNumber, type IdeaData } from "@/components/widgets/idea-card";
import type { Palette } from "@/components/widgets/palettes";

const ideas: Array<IdeaData & { palette: Palette }> = [
  {
    number: "01",
    title: "Robot nettoyeur pour bureaux",
    description:
      "Et si un robot faisait le ménage de votre bureau ? Les chiffres sont convaincants.",
    pros: [
      "-20 % sur le budget ménage annuel",
      "Rapports d'entretien via application",
      "Image moderne et tech pour l'entreprise",
    ],
    cons: [
      "Coût initial élevé (location possible)",
      "Limité aux surfaces planes",
    ],
    seed: 1.1,
    palette: "amber",
  },
  {
    number: "02",
    title: "Secrétaire personnelle IA",
    description:
      "Une assistante infatigable : grâce à l'IA, gagnez des heures précieuses chaque semaine.",
    pros: [
      "Disponibilité 24/7 (réunions, appels, tâches)",
      "Automatisation qui libère du temps stratégique",
      "Transcription et planification automatiques",
    ],
    cons: [
      "Manque de jugement humain sur les cas complexes",
      "Coût des licences premium",
    ],
    seed: 2.3,
    palette: "violet",
  },
  {
    number: "03",
    title: "Optimisation des tournées",
    description:
      "Des livraisons plus malignes : optimisez vos tournées avec des algorithmes, économisez carburant et temps.",
    pros: [
      "-30 % sur les coûts carburant (Google OR-Tools)",
      "Livraisons plus rapides, trajets optimisés",
      "Moins de stress pour les livreurs",
    ],
    cons: [
      "Nécessite des données précises (trafic temps réel)",
      "Investissement initial dans un logiciel TMS",
    ],
    seed: 3.5,
    palette: "duo",
  },
];

export function Ideas() {
  return (
    <section
      id="idees"
      className="py-24"
      style={{ background: "oklch(0.08 0.02 280)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Idées pour les PME en 2026
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Découvrez comment augmenter votre potentiel et votre entreprise.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <IdeaCardBigNumber idea={idea} palette={idea.palette} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="gap-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/idees">
              Voir toutes les idées
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
