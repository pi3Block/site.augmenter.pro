"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modules";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function PlatformModules() {
  return (
    <section id="modules" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
              Découvrir
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              10 Modules{" "}
              <span className="gradient-text">Intelligents</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un écosystème complet — de l&apos;onboarding à la veille
              concurrentielle, chaque module est propulsé par l&apos;IA.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {modules.map((mod) => (
            <motion.div key={mod.id} variants={cardVariants}>
              <Link href={`/plateforme/${mod.slug}`} className="group block h-full">
                <Card className="relative h-full border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <CardContent className="p-6">
                    {/* Letter badge + icon row */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                        {mod.letter}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                        <mod.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-base font-semibold leading-snug">
                      Module {mod.letter}: {mod.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {mod.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mod.techs.slice(0, 2).map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Découvrir
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
