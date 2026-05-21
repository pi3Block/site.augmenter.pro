"use client";

import { ReactNode } from "react";

interface AnnotProps {
  kicker: string;
  children: ReactNode;
}

export function Annot({ kicker, children }: AnnotProps) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-6 border-t border-(--border-soft) pt-5">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--fg-muted)">
        {kicker}
      </div>
      <div className="text-[15px] leading-relaxed text-(--fg)">
        {children}
      </div>
    </div>
  );
}
