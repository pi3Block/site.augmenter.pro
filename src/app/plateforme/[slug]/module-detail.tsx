"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Module } from "@/data/modules";

interface ModuleDetailProps {
  module: Module;
  relatedModules: Module[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function ModuleDetail({ module: mod, relatedModules }: ModuleDetailProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_80%,oklch(0.894_0.057_293_/_0.15),transparent_50%),radial-gradient(circle_at_70%_20%,oklch(0.828_0.189_84.429_/_0.08),transparent_50%)]" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/plateforme"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Tous les modules
            </Link>
          </motion.div>

          <div className="flex items-start gap-5">
            <motion.div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <mod.icon className="h-8 w-8 text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <Badge variant="secondary" className="text-xs font-bold">
                  Module {mod.letter}
                </Badge>
                <div className="flex gap-2">
                  {mod.techs.map((tech) => (
                    <span
                      key={tech.name}
                      className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {mod.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                {mod.longDescription}
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="gap-2 text-base">
                  <a
                    href="https://app.augmenter.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Essayer ce module
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Fonctionnalités clés
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {mod.features.map((feature) => (
              <motion.div
                key={feature}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Comment ça marche
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-6 sm:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {mod.howItWorks.map((step, i) => (
              <motion.div key={step} variants={itemVariants} className="relative">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Technologies utilisées
            </h2>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {mod.techs.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="rounded-xl border border-border/50 bg-card px-5 py-4"
              >
                <div className="text-sm font-semibold">{tech.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {tech.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related modules */}
      {relatedModules.length > 0 && (
        <section className="border-t border-border/40 bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Modules connexes
              </h2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {relatedModules.map((rel) => (
                <motion.div key={rel.id} variants={itemVariants}>
                  <Link href={`/plateforme/${rel.slug}`} className="group block">
                    <Card className="h-full border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                            {rel.letter}
                          </div>
                          <rel.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="mt-3 text-base font-semibold">
                          {rel.shortTitle}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {rel.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-foreground px-8 py-16 text-center text-background sm:px-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.541_0.281_293_/_0.3),transparent_60%),radial-gradient(circle_at_70%_50%,oklch(0.828_0.189_84.429_/_0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Prêt à essayer {mod.shortTitle} ?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-background/70">
                Commencez par l&apos;audit intelligent gratuit — votre dashboard
                sera configuré en quelques minutes.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://app.augmenter.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commencer gratuitement
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-background/20 bg-transparent text-background hover:bg-background/10"
                >
                  <Link href="/plateforme">Voir tous les modules</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
