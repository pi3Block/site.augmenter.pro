"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/data/modules";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ia: "IA & LLM",
  voice: "Voice & Audio",
  realtime: "Realtime & Collab",
  auth: "Auth & Security",
};

const highlights = [
  { value: "24+", label: "Projets Open Source" },
  { value: "100%", label: "Privacy-First" },
  { value: "GPU", label: "Accélération CUDA" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function PlatformStack() {
  const categories = Object.entries(techStack) as [
    keyof typeof techStack,
    (typeof techStack)[keyof typeof techStack],
  ][];

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
            <Badge variant="secondary" className="mb-4 text-xs font-semibold uppercase tracking-wider">
              Technologies
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Propulsé par l&apos;
              <span className="gradient-text">Open Source</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des technologies de pointe, libres et open source, pour une
              plateforme professionnelle de qualité.
            </p>
          </motion.div>
        </div>

        {/* Tech categories grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {categories.map(([key, techs]) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="rounded-xl border border-border/50 bg-card p-5"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {categoryLabels[key]}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-base">
                      {tech.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{tech.name}</div>
                      <div className="truncate text-xs text-muted-foreground">
                        {tech.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight counters */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {h.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
