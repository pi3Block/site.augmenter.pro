"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const plans = [
  {
    name: "Audit 180° Informatique & Organisation",
    description: "Faisons connaissance et identifions vos leviers de croissance numériques.",
    price: "Gratuit",
    duration: "60 min",
    popular: false,
    features: [
      "Diagnostic de votre infrastructure",
      "Analyse de vos processus actuels",
      "Identification des quick wins",
      "Recommandations personnalisées",
      "Aucun engagement",
    ],
    cta: "Réserver mon audit gratuit",
    href: "/contact",
  },
  {
    name: "Audit 360° IA Stratégique",
    description: "De la stratégie à l'action : votre feuille de route IA personnalisée.",
    price: "225 €",
    duration: "~3h + livrable",
    popular: true,
    features: [
      "Tout l'Audit 180° inclus",
      "Cartographie des cas d'usage IA",
      "Analyse ROI détaillée",
      "Feuille de route sur 6 mois",
      "Recommandations outils & fournisseurs",
      "Support email 30 jours",
    ],
    cta: "Démarrer l'Audit IA",
    href: "/contact",
  },
];

export function Pricing() {
  return (
    <section id="prestations" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Prestations &amp; Tarifs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Commencez par un audit gratuit. Pas de surprises, pas d&apos;engagement.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card
                className={`relative h-full transition-shadow hover:shadow-lg ${
                  plan.popular ? "border-primary shadow-md" : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-6">Recommandé</Badge>
                )}
                <CardContent className="flex h-full flex-col p-6">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {plan.duration}
                    </div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="mt-8 gap-2"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
