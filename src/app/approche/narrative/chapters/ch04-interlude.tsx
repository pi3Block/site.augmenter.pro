"use client";

import { useRef } from "react";
import { Chapter } from "../primitives/chapter";
import { Lede } from "../primitives/lede";
import { useWordSplitter } from "../primitives/word-splitter";

/**
 * Interlude pleine page — phrase signature mise en écrin.
 * Pas de pill, pas de sub, pas de cards. Juste la phrase, centrée,
 * capée à 16ch pour forcer 3-4 lignes même en grand viewport.
 */
export function Ch04Interlude() {
  const ledeRef = useRef<HTMLDivElement>(null);
  useWordSplitter(ledeRef);

  return (
    <Chapter id="ch-04" num="04" title="L'équilibre" mood="dawn" theme="light">
      <div className="flex flex-1 items-center justify-center py-12">
        <div ref={ledeRef} className="text-center">
          <Lede>
            La performance naît
            <br />
            de l&apos;<em>équilibre</em>
            <br />
            entre l&apos;humain,
            <br />
            ses outils et ses habitudes.
          </Lede>
        </div>
      </div>
    </Chapter>
  );
}
