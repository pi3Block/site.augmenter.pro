"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modules";

const previewModules = modules.filter((m) =>
  ["C", "G", "I", "J", "F"].includes(m.letter)
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function PlatformPreview() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs font-semibold uppercase tracking-wider"
            >
              Nouveau
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Découvrez la plateforme{" "}
              <span className="gradient-text">augmenter.PRO</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              10 modules IA pour devenir un professionnel augmenté — veille,
              emails, documents, réseaux sociaux, le tout automatisé.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {previewModules.map((mod) => (
            <motion.div key={mod.id} variants={cardVariants}>
              <Link
                href={`/plateforme/${mod.slug}`}
                className="group block h-full"
              >
                <Card className="h-full border-border/50 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                        {mod.letter}
                      </div>
                      <mod.icon className="h-5 w-5 text-primary/70" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold">
                      {mod.shortTitle}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {mod.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild variant="outline" size="lg" className="gap-2 text-base">
            <Link href="/plateforme">
              Explorer les 10 modules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
