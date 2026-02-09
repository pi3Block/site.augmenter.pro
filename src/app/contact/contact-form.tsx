"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Mail, Phone, MapPin, Linkedin, Twitter, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(
      `Demande de contact — ${company || name}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nNom : ${name}\nEmail : ${email}${company ? `\nEntreprise : ${company}` : ""}\n\n${message}`
    );

    // Événement GTM : soumission du formulaire contact (pour conversions, GA4, etc.)
    sendGTMEvent({
      event: "contact_form_submit",
      form_name: "contact",
      form_destination: "mailto",
    });

    window.location.href = `mailto:vite@augmenter.pro?subject=${subject}&body=${body}`;
  }

  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Audit gratuit — 60 min
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Parlons de votre <span className="gradient-text">projet</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Premier échange sans engagement. On écoute, on comprend, on
              recommande — si ça matche, on avance ensemble.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                          >
                            Nom complet
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                            placeholder="Jean Martin"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                          >
                            Email professionnel
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                            placeholder="jean@entreprise.fr"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-sm font-medium"
                        >
                          Entreprise (optionnel)
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="Mon Entreprise SAS"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium"
                        >
                          Votre besoin en quelques mots
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="Je cherche à automatiser mes processus de facturation avec l'IA..."
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                      >
                        Envoyer ma demande
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        Ce formulaire ouvre votre client email — aucune donnée
                        n&apos;est stockée sur nos serveurs.{" "}
                        <Link
                          href="/politique-confidentialite"
                          className="underline hover:text-foreground"
                        >
                          Politique de confidentialité
                        </Link>
                      </p>
                    </form>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
