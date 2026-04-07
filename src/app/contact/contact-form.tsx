"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { QuoteWizard } from "./quote-wizard";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vite@augmenter.pro",
    href: "mailto:vite@augmenter.pro",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+33 6 79 11 97 74",
    href: "https://wa.me/33679119774",
  },
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: "Yvelines (78) & Val d'Oise (95)",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Réponse sous 24h",
    href: null,
  },
];

export function ContactForm() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Diagnostic initial — 60 min
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Construisez votre <span className="gradient-text">brief</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Configurez votre besoin en 3 étapes. On génère un brief personnalisé,
              vous l&apos;envoyez en un clic — par email ou WhatsApp.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <QuoteWizard />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 lg:col-span-2">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8 border-t border-border pt-6">
                <p className="mb-3 text-sm font-medium">Retrouvez-nous</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/legrand-pierre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/Pi3r2Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Trust signal */}
              <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
                <p className="text-xs font-medium text-foreground">
                  Premier échange sans engagement
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  On écoute, on diagnostique, on vous dit la vérité.
                  Si ça matche, on avance ensemble. Sinon, vous repartez
                  avec des recommandations concrètes.
                </p>
                <Link
                  href="/approche"
                  className="mt-2 block text-xs text-primary underline-offset-2 hover:underline"
                >
                  Notre approche →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
