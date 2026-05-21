"use client";

import Link from "next/link";
import { useRef } from "react";
import { Chapter } from "../../approche/narrative/primitives/chapter";
import { Pill } from "../../approche/narrative/primitives/pill";
import { Lede } from "../../approche/narrative/primitives/lede";
import { useWordSplitter } from "../../approche/narrative/primitives/word-splitter";

export function H01Cover() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="h-01" num="01" title="Cover" mood="dawn" theme="light">
      <div data-anim="up">
        <Pill>Consultant IA &amp; digital · PME française</Pill>
      </div>
      <div ref={ledeRef}>
        <Lede>
          Reprenez le <em>contrôle</em>.
          <br />
          Votre côté PRO avec un cran d&apos;<u>avance</u>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[58ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-(--fg-muted)"
      >
        Nous accompagnons les PME et indépendants à trouver l&apos;équilibre
        parfait entre performance humaine et numérique. IA, digitalisation,
        robotique — des solutions sur mesure qui tiennent la route.
      </p>
      <div
        data-anim="up"
        className="flex flex-wrap items-center gap-3 text-[13px] text-(--fg-muted)"
      >
        <span
          aria-hidden
          className="h-[38px] w-[38px] rounded-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.811 0.111 293), oklch(0.828 0.189 84.429))",
          }}
        />
        <span>
          Récit augmenter.PRO ·{" "}
          <Link
            href="/auteur/pierre-legrand"
            data-hover
            className="font-medium text-(--fg) underline-offset-2 hover:underline"
          >
            Pierre Legrand
          </Link>{" "}
          · Consultant indépendant
        </span>
      </div>
    </Chapter>
  );
}
