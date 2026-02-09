"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24">
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
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Zap className="h-7 w-7 text-primary-foreground" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Quel est votre prochain niveau ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-background/70">
              Commencez par un audit gratuit de 60 minutes. Zéro engagement, zéro
              jargon technique — juste des solutions concrètes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Réserver mon audit gratuit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 bg-transparent text-background hover:bg-background/10"
              >
                <a href="https://wa.me/33679119774" target="_blank" rel="noopener noreferrer">
                  Discuter sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
