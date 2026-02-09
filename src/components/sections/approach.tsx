"use client";

import { motion } from "framer-motion";
import { Search, Wrench, GraduationCap, Repeat } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnostic",
    description:
      "Audit complet de vos outils, processus et habitudes. On identifie ce qui fonctionne et ce qui freine.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Solutions sur mesure",
    description:
      "Recommandations adaptées à votre métier, budget et maturité numérique. Pas de solution générique.",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "Accompagnement",
    description:
      "Développement logiciel et formation humaine alignés avec votre ambition. Vos équipes montent en compétence.",
  },
  {
    icon: Repeat,
    step: "04",
    title: "Itération",
    description:
      "Suivi, mesure des résultats et ajustements. Des habitudes solides pour des résultats durables.",
  },
];

export function Approach() {
  return (
    <section id="approche" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Notre approche
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La performance naît de l&apos;équilibre entre l&apos;humain, ses outils et
            ses habitudes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-primary">
                Étape {item.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
