"use client";

import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chapter } from "../primitives/chapter";
import { Pill } from "../primitives/pill";
import { Lede } from "../primitives/lede";
import { useWordSplitter } from "../primitives/word-splitter";

export const FAQ_ITEMS = [
  {
    question: "Quelle différence entre l'Audit 180° et l'Audit 360° ?",
    answer:
      "L'Audit 180° est un échange de 60 minutes, offert, pour identifier les quick wins et poser un premier diagnostic. L'Audit 360° (225 €) est un diagnostic approfondi de ~3 heures qui inclut tout l'Audit 180° + une cartographie des cas d'usage IA, une analyse ROI et une feuille de route 6 mois.",
  },
  {
    question: "Le diagnostic de 60 minutes est-il vraiment offert ?",
    answer:
      "Oui, sans engagement. Objectif : vérifier qu'on est alignés avant toute prestation payante. Si le fit n'est pas là, on vous oriente ailleurs — c'est aussi ça un bon diagnostic.",
  },
  {
    question: "Qu'est-ce que l'expertise technique ?",
    answer:
      "On analyse votre infrastructure (hardware + logiciel) pour garantir une performance fiable à coût raisonnable. Diagnostic parc, réseaux, ERP/CRM, outils IA pertinents pour votre secteur.",
  },
  {
    question: "Comment optimisez-vous les processus ?",
    answer:
      "Cartographie de vos flux de travail (prospection → facturation), identification des tâches automatisables, mise en place d'outils et d'automatisations sans casser les habitudes existantes.",
  },
  {
    question: "L'approche humaine, ça veut dire quoi concrètement ?",
    answer:
      "Formations personnalisées, entretiens individuels, conduite du changement. Parce qu'un outil mal adopté = budget gâché. On travaille avec vos équipes, pas à leur place.",
  },
  {
    question: "Travaillez-vous hors 78/95 ?",
    answer:
      "En présentiel on privilégie Yvelines et Val d'Oise pour la proximité. À distance (visio), on intervient partout en France francophone.",
  },
];

export function Ch07Questions() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-07" num="07" title="Les questions" mood="questions" theme="light">
      <div data-anim="up">
        <Pill>Avant de réserver</Pill>
      </div>
      <div ref={ledeRef}>
        <Lede>
          Les six questions qu&apos;on
          <br />
          nous pose <em>vraiment</em>.
        </Lede>
      </div>
      <p
        data-anim="up"
        className="max-w-[58ch] text-[clamp(17px,1.5vw,22px)] leading-relaxed text-(--fg-muted)"
      >
        Pas de FAQ marketing à 30 entrées. Six questions concrètes posées par
        des dirigeants de PME, avec des réponses honnêtes — y compris quand
        elles disqualifient un fit.
      </p>
      <Accordion
        type="single"
        collapsible
        data-anim="stagger"
        className="mx-auto w-full max-w-[820px] rounded-2xl border border-(--border-soft) bg-white/70 px-6 py-2 backdrop-blur-sm"
      >
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border-(--border-soft)"
          >
            <AccordionTrigger
              data-hover
              className="text-left text-[15px] font-medium text-(--fg) hover:no-underline"
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[14px] leading-relaxed text-(--fg-muted)">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Chapter>
  );
}
