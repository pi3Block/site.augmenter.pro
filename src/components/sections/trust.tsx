"use client";

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Target,
    value: "60 min",
    label: "Audit gratuit",
    description: "Diagnostic complet de votre SI",
  },
  {
    icon: Users,
    value: "78 & 95",
    label: "Zone d'intervention",
    description: "Yvelines, Val d'Oise & à distance",
  },
  {
    icon: Lightbulb,
    value: "−30%",
    label: "Temps gagné",
    description: "En moyenne sur les tâches automatisées",
  },
  {
    icon: TrendingUp,
    value: "48h",
    label: "Premiers résultats",
    description: "Quick wins déployés sous 48h",
  },
];

export function Trust() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-3 text-2xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
