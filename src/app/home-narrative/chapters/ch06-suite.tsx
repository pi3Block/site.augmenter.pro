"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, Check, Target } from "lucide-react";
import { CardShell, LiquidBlob } from "@/components/widgets/blobs";
import { Chapter } from "../../approche/narrative/primitives/chapter";
import { Pill } from "../../approche/narrative/primitives/pill";
import { useWordSplitter } from "../../approche/narrative/primitives/word-splitter";

const auditFeatures = [
  "Diagnostic de votre infrastructure",
  "Analyse des processus actuels",
  "Identification des quick wins",
  "Recommandations personnalisées",
];

const contactBlocks = [
  { k: "Pierre Legrand", v: "Consultant indépendant" },
  { k: "Email", v: "vite@augmenter.pro", href: "mailto:vite@augmenter.pro" },
  { k: "Téléphone", v: "+33 6 79 11 97 74", href: "tel:+33679119774" },
];

const colophonLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "Plan du site", href: "/sitemap.xml" },
];

function AuditCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="h-[460px]">
      <CardShell palette="violet" hovered={hovered} onHover={setHovered}>
        <div
          aria-hidden
          className="absolute h-[85%] w-[85%]"
          style={{ top: -60, right: -90 }}
        >
          <LiquidBlob palette="violet" hovered={hovered} seed={51} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm">
              <Target className="h-5 w-5 text-white" />
            </div>
            <span className="rounded-full border border-white/20 bg-white/8 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/85 backdrop-blur-sm">
              Audit 180°
            </span>
          </div>
          <div>
            <div
              className="font-semibold leading-none tracking-[-0.04em] text-white"
              style={{ fontSize: 60 }}
            >
              60 min
            </div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-white/65">
              Offert · sans engagement
            </div>
            <h3 className="mt-5 text-[22px] font-semibold leading-tight text-white">
              Premier diagnostic offert
            </h3>
            <p className="mt-2 max-w-[34ch] text-[13px] leading-snug text-white/75">
              Un échange concret pour identifier vos quick wins et vérifier
              qu&apos;on est alignés. Si le fit n&apos;est pas là, on vous oriente
              ailleurs.
            </p>
            <ul className="mt-4 flex flex-col gap-1.5">
              {auditFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-[13px] leading-snug text-white/85"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contact"
            data-hover
            className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2.5 text-[13px] font-medium text-neutral-900 transition-colors hover:bg-white/90"
          >
            Réserver mon diagnostic
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardShell>
    </div>
  );
}

export function H06Suite() {
  const ledeRef = useRef<HTMLHeadingElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="h-06" num="06" title="La suite" mood="ember" theme="dark">
      <div data-anim="up">
        <Pill variant="glass">Prochain pas · le vôtre</Pill>
      </div>
      <h2
        ref={ledeRef}
        data-anim="words"
        data-gradient="ember"
        className="max-w-[16ch] font-bold leading-[0.95] tracking-[-0.04em] text-white"
        style={{
          fontSize: "clamp(48px, 9vw, 144px)",
        }}
      >
        Le <em>diagnostic</em>
        <br />
        qui change la donne.
      </h2>
      <p
        data-anim="up"
        className="max-w-[52ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-white/75"
      >
        Zéro engagement, zéro jargon technique — 60 minutes pour identifier
        vos leviers concrets et savoir où l&apos;IA et le numérique peuvent
        vraiment vous faire gagner du temps, de l&apos;argent, ou de la
        sérénité.
      </p>
      <div data-anim="stagger" className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] md:items-center">
        <AuditCard />
        <div className="flex flex-col gap-6 md:pl-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              data-hover
              className="inline-flex items-center gap-2.5 rounded-md bg-violet-600 px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-violet-700"
            >
              Réserver l&apos;audit 180°
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/approche"
              data-hover
              className="inline-flex items-center gap-2.5 rounded-md border border-white/30 px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
            >
              Voir la méthode complète
            </Link>
          </div>
          <div className="flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-10">
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
        </div>
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
          <span>Récit · 6 chapitres · fin</span>
        </div>
      </div>
    </Chapter>
  );
}
