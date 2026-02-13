"use client";

import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ideas = [
  {
    number: "01",
    title: "Robot nettoyeur pour bureaux",
    description:
      "Et si un robot faisait le ménage de votre bureau ? Les chiffres sont convaincants.",
    pros: [
      "Réduction de -20% sur le budget ménage annuel",
      "Rapports d'entretien via application",
      "Image moderne et tech pour l'entreprise",
    ],
    cons: [
      "Coût initial élevé (location possible)",
      "Limité aux surfaces planes",
    ],
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
  },
  {
    number: "03",
    title: "Optimisation des tournées de livraison",
    description:
      "Des livraisons plus malignes : optimisez vos tournées avec des algorithmes, économisez du carburant et du temps.",
    pros: [
      "Diminution de -30% des coûts carburant (Google OR-Tools)",
      "Livraisons plus rapides, trajets optimisés",
      "Moins de stress pour les livreurs",
    ],
    cons: [
      "Nécessite des données précises (trafic temps réel)",
      "Investissement initial dans un logiciel TMS",
    ],
  },
];

export function Ideas() {
  return (
    <section id="idees" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Idées pour les PME en 2026
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez comment augmenter votre potentiel et votre entreprise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {ideas.map((idea, i) => (
            <motion.div
              key={idea.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <span className="text-sm font-bold text-primary">
                    {idea.number}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{idea.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {idea.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-green-600">
                        <ThumbsUp className="h-4 w-4" />
                        Avantages
                      </div>
                      <ul className="space-y-1.5">
                        {idea.pros.map((pro) => (
                          <li
                            key={pro}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-amber-600">
                        <ThumbsDown className="h-4 w-4" />
                        Points d&apos;attention
                      </div>
                      <ul className="space-y-1.5">
                        {idea.cons.map((con) => (
                          <li
                            key={con}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2">
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
