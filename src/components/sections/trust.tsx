// src/components/sections/trust.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { TrustStatCard, type TrustStatData } from "@/components/widgets/trust-stat";
import type { Palette } from "@/components/widgets/palettes";

const stats: Array<TrustStatData & { palette: Palette }> = [
  {
    icon: Target,
    value: "60 min",
    label: "Diagnostic offert",
    description: "Diagnostic complet de votre SI",
    seed: 1.1,
    palette: "violet",
  },
  {
    icon: Users,
    value: "78 & 95",
    label: "Zone d'intervention",
    description: "Yvelines, Val d'Oise & à distance",
    seed: 2.2,
    palette: "cold",
  },
  {
    icon: Lightbulb,
    value: "−30 %",
    label: "Temps gagné",
    description: "En moyenne sur les tâches automatisées",
    seed: 3.3,
    palette: "duo",
  },
  {
    icon: TrendingUp,
    value: "48h",
    label: "Premiers résultats",
    description: "Quick wins déployés sous 48h",
    seed: 4.4,
    palette: "amber",
  },
];

export function Trust() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <TrustStatCard stat={stat} palette={stat.palette} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
