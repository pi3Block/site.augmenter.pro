// src/components/sections/services.tsx
"use client";

import { motion } from "framer-motion";
import { ServiceCardStat, type ServiceData } from "@/components/widgets/service-card";
import type { Palette } from "@/components/widgets/palettes";

const services: Array<ServiceData & { palette: Palette }> = [
  {
    tag: "Intelligence artificielle",
    title: "L'IA au service de votre métier",
    description:
      "Automatisez vos tâches répétitives, analysez vos données et prenez de meilleures décisions — adaptées à votre métier.",
    stat: "10h",
    seed: 1.2,
    palette: "violet",
    href: "/prestations",
  },
  {
    tag: "Digitalisation",
    title: "Digitalisation avancée, humaine",
    description:
      "Changer d'outil est un projet humain avant d'être technique. Nous accompagnons vos équipes pour adopter des solutions qui simplifient vraiment le quotidien.",
    stat: "3×",
    seed: 2.4,
    palette: "duo",
    href: "/prestations",
  },
  {
    tag: "Robotique & IoT",
    title: "Robotique, capteurs & terrain",
    description:
      "Drones, robots, capteurs, caméras — nous explorons les technologies émergentes adaptées à votre secteur et à vos contraintes terrain.",
    stat: "24/7",
    seed: 3.7,
    palette: "amber",
    href: "/prestations",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section
      id="services"
      className="py-24"
      style={{ background: "oklch(0.08 0.02 280)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Élevez votre business
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Augmentez vos équipes et améliorez vos processus pour des résultats
            optimaux.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <ServiceCardStat service={service} palette={service.palette} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
