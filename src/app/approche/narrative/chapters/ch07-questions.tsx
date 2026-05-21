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
import { FAQ_ITEMS } from "../data";

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
