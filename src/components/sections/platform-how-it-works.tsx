"use client";

import { motion } from "framer-motion";
import { UserCheck, LayoutDashboard, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Audit Intelligent",
    description:
      "L'IA analyse votre profil et vos besoins en 15 questions adaptatives. Votre « Digital Persona » est générée automatiquement.",
  },
  {
    number: "02",
    icon: LayoutDashboard,
    title: "Dashboard Personnalisé",
    description:
      "Votre espace de travail se configure automatiquement avec les widgets et modules les plus pertinents pour vous.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Automatisation IA",
    description:
      "10 modules travaillent pour vous 24h/24 : veille, emails, documents, réseaux sociaux — tout est automatisé.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PlatformHowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
              Démarrage
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comment{" "}
              <span className="gradient-text">ça marche</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              De l&apos;inscription à l&apos;automatisation complète en 3 étapes
              simples.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[60px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="relative mx-auto mb-6 flex h-[120px] w-[120px] items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-primary/5" />
                  <div className="relative flex flex-col items-center gap-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                      {step.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Connector arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-[60px] hidden translate-x-1/2 md:block">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
                  </div>
                )}

                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="gap-2 text-base">
            <a
              href="https://app.augmenter.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Essayer augmenter.PRO
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
