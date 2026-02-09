"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Erreur lors de l'envoi.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
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
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                        <Mail className="h-7 w-7" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold">
                        Message envoyé !
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Merci pour votre message. Nous vous répondons sous 24h.
                      </p>
                    </div>
                  ) : (
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
                      {error && (
                        <p className="text-sm text-red-600">{error}</p>
                      )}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={loading}
                      >
                        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                        {!loading && <ArrowRight className="h-4 w-4" />}
                      </Button>
                    </form>
                  )}
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
