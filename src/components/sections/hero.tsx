"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_80%,oklch(0.894_0.057_293_/_0.15),transparent_50%),radial-gradient(circle_at_70%_20%,oklch(0.828_0.189_84.429_/_0.08),transparent_50%)]" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Conseil IA &amp; Transformation numérique
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Devenez un{" "}
            <span className="gradient-text">professionnel augmenté</span>{" "}
            dès aujourd&apos;hui
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous accompagnons les PME et indépendants à trouver l&apos;équilibre
            parfait entre <strong>performance humaine</strong> et{" "}
            <strong>numérique</strong>. IA, digitalisation, robotique — des
            solutions sur mesure qui tiennent la route.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/contact">
                Audit gratuit — 60 min
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link href="/prestations">Voir nos prestations</Link>
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Yvelines (78) &amp; Val d&apos;Oise (95) — en présentiel ou à distance
          </motion.p>
        </div>
      </div>
    </section>
  );
}
