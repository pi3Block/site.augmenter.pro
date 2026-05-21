"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Chapter } from "../primitives/chapter";
import { Pill } from "../primitives/pill";
import { useWordSplitter } from "../primitives/word-splitter";

const contactBlocks = [
  { k: "Pierre Legrand", v: "Consultant indépendant" },
  { k: "Email", v: "vite@augmenter.pro", href: "mailto:vite@augmenter.pro" },
  { k: "Téléphone", v: "+33 6 79 11 97 74", href: "tel:+33679119774" },
];

// Colophon links — mirrors the home's CH.06 footer for consistency.
const colophonLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "Plan du site", href: "/sitemap.xml" },
];

export function Ch08Suite() {
  const ledeRef = useRef<HTMLHeadingElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-08" num="08" title="La suite" mood="ember" theme="dark">
      <div data-anim="up">
        <Pill variant="glass">Prochain chapitre · le vôtre</Pill>
      </div>
      <h2
        ref={ledeRef}
        data-anim="words"
        data-gradient="ember"
        className="max-w-[14ch] font-bold leading-[0.95] tracking-[-0.04em] text-white"
        style={{
          fontSize: "clamp(48px, 9vw, 144px)",
        }}
      >
        Quel est votre
        <br />
        <em>prochain niveau&nbsp;?</em>
      </h2>
      <p
        data-anim="up"
        className="max-w-[52ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-white/75"
      >
        Zéro engagement, zéro jargon technique — juste un échange concret pour
        comprendre où l&apos;IA et le numérique peuvent vous faire gagner du
        temps, de l&apos;argent, ou de la sérénité.
      </p>
      <div data-anim="up" className="flex flex-wrap items-center gap-3">
        <Link
          href="/contact"
          data-hover
          className="inline-flex items-center gap-2.5 rounded-md bg-violet-600 px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-violet-700"
        >
          Réserver l&apos;audit 180° offert
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          data-hover
          className="inline-flex items-center gap-2.5 rounded-md border border-white/30 px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
        >
          Voir les autres pages
        </Link>
      </div>
      <div
        data-anim="up"
        className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:gap-10"
      >
        {contactBlocks.map((c) => {
          const value = c.href ? (
            <Link href={c.href} className="hover:underline" data-hover>
              {c.v}
            </Link>
          ) : (
            <span>{c.v}</span>
          );
          return (
            <div key={c.k} className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                {c.k}
              </span>
              <span className="text-[15px] text-white">{value}</span>
            </div>
          );
        })}
      </div>
      <div
        data-anim="up"
        className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-widest text-white/55">
          {colophonLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-hover
              className="transition-opacity hover:text-white/85"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-6 font-mono text-[10px] uppercase tracking-widest text-white/40">
          <span>augmenter.PRO · 2026</span>
          <span>Récit · 8 chapitres · fin</span>
        </div>
      </div>
    </Chapter>
  );
}
