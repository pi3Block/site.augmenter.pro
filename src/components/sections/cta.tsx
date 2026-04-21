// src/components/sections/cta.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MeshAurora } from "@/components/widgets/blobs";

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
          {/* Aurora violette en fond du bloc sombre */}
          <div
            className="absolute inset-0"
            style={{ opacity: 0.45 }}
            aria-hidden
          >
            <MeshAurora palette="violet" seed={2.1} />
          </div>

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
              <Zap className="h-7 w-7 text-primary-foreground" />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Quel est votre prochain niveau ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-background/70">
              Commencez par un diagnostic de 60 minutes. Zéro engagement, zéro
              jargon technique — juste des solutions concrètes.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Réserver mon diagnostic
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/20 bg-transparent text-background hover:bg-background/10"
              >
                <a
                  href="https://wa.me/33679119774"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
