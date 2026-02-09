"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Shield, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "10", label: "Modules IA", icon: Brain },
  { value: "100%", label: "Open Source", icon: Server },
  { value: "24h", label: "Privacy-First", icon: Shield },
];

export function PlatformHero() {
  return (
    <section className="hero-gradient relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_80%,oklch(0.894_0.057_293_/_0.15),transparent_50%),radial-gradient(circle_at_70%_20%,oklch(0.828_0.189_84.429_/_0.08),transparent_50%)]" />

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.541 0.281 293) 1px, transparent 1px), linear-gradient(90deg, oklch(0.541 0.281 293) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Brain className="h-3.5 w-3.5" />
              Plateforme IA pour professionnels
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Votre{" "}
            <span className="gradient-text">second cerveau</span>
            <br />
            numérique propulsé par l&apos;IA
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            10 modules intelligents pour automatiser votre veille, vos emails,
            vos documents et vos réseaux sociaux.{" "}
            <strong>100% open source, privacy-first.</strong>
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="gap-2 text-base">
              <a
                href="https://app.augmenter.pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commencer l&apos;audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#modules">Voir les modules</a>
            </Button>
          </motion.div>

          {/* Stats badges */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
