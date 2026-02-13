"use client";

import { motion } from "framer-motion";
import { Brain, Monitor, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "Intelligence artificielle",
    description:
      "L'IA ne sert pas qu'à générer des images de chats. Automatisez vos tâches répétitives, analysez vos données et prenez de meilleures décisions — adaptées à votre métier.",
    features: ["Assistants IA personnalisés", "Automatisation des processus", "Analyse prédictive"],
    href: "/prestations",
  },
  {
    icon: Monitor,
    title: "Digitalisation avancée",
    description:
      "Changer d'outil, c'est un projet humain avant d'être technique. Nous accompagnons vos équipes pour adopter des solutions numériques qui simplifient vraiment le quotidien.",
    features: ["Audit des outils existants", "Migration & intégration", "Formation des équipes"],
    href: "/prestations",
  },
  {
    icon: Bot,
    title: "Robotique & IoT",
    description:
      "Drones, robots, capteurs, caméras — nous explorons les technologies émergentes adaptées à votre secteur et à vos contraintes terrain.",
    features: ["Robots autonomes (nettoyage, logistique)", "Capteurs & monitoring", "Intégration IoT"],
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
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Élevez votre business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Augmentez vos équipes et améliorez vos processus pour des résultats
            optimaux.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full border-border/50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    En savoir plus
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
