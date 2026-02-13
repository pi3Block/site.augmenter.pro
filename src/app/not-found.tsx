"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const suggestions = [
  { href: "/prestations", label: "Nos prestations", icon: Search },
  { href: "/blog", label: "Articles & guides", icon: BookOpen },
  { href: "/", label: "Page d'accueil", icon: Home },
];

export default function NotFound() {
  return (
    <section className="hero-gradient relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_80%,oklch(0.894_0.057_293_/_0.15),transparent_50%),radial-gradient(circle_at_70%_20%,oklch(0.828_0.189_84.429_/_0.08),transparent_50%)]" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text text-8xl font-bold tracking-tighter sm:text-9xl">
              404
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cette page n&apos;existe plus
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pas de panique. On a restructuré le site pour mieux vous servir.
            Profitez-en pour découvrir comment l&apos;IA peut transformer votre activité.
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

          <motion.div
            className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {suggestions.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
                <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
