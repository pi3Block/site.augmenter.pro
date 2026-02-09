import type { Metadata } from "next";
import { Approach } from "@/components/sections/approach";
import { CTA } from "@/components/sections/cta";
import { Scale, Heart, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre Approche",
  description:
    "Découvrez notre approche 360° : diagnostic, solutions sur mesure, accompagnement et itération. L'équilibre entre humain et numérique.",
};

const pillars = [
  {
    icon: Heart,
    title: "L'Humain d'abord",
    description:
      "La technologie n'a de sens que si elle sert les personnes qui l'utilisent. Nous partons toujours de vos équipes, leurs habitudes et leurs contraintes réelles.",
  },
  {
    icon: Cpu,
    title: "Outils adaptés",
    description:
      "Pas de solution miracle ou de logiciel à la mode. Nous recommandons uniquement des outils qui s'intègrent naturellement dans votre quotidien et qui sont pérennes.",
  },
  {
    icon: Scale,
    title: "Processus efficaces",
    description:
      "Les bons outils sans les bons processus, c'est comme un GPS sans route. Nous structurons vos workflows pour que chaque action ait un impact mesurable.",
  },
];

export default function ApprochePage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Notre <span className="gradient-text">Approche</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              La performance naît de l&apos;équilibre entre l&apos;humain, ses outils et
              ses habitudes. Nous accompagnons les PME à trouver cet équilibre.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Les trois piliers
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <pillar.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Approach />

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Pour qui ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nous travaillons principalement avec des PME, ETI et indépendants des
            Yvelines (78) et du Val d&apos;Oise (95), en présentiel ou à distance.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["PME / ETI", "Startups", "Indépendants"].map((target) => (
              <div
                key={target}
                className="rounded-xl border border-border/50 bg-background p-6 text-center"
              >
                <span className="text-lg font-semibold">{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
