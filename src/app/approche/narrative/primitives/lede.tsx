"use client";

import { ReactNode } from "react";

interface LedeProps {
  children: ReactNode;
  size?: "default" | "xl";
}

// The <em> brand gradient + <u> highlighter styling lives in globals.css
// under h2[data-anim="words"] selectors. That's the only place that
// correctly survives the word-splitter mutation (see handoff README
// section "CRITICAL gotcha — <em> gradient + word splitter").
export function Lede({ children, size = "default" }: LedeProps) {
  const fontSize =
    size === "xl"
      ? "clamp(48px, 9vw, 144px)"
      : "clamp(40px, 7.5vw, 112px)";
  return (
    <h2
      data-anim="words"
      className="text-balance font-bold leading-[0.96] tracking-[-0.035em] text-(--fg)"
      style={{ fontSize }}
    >
      {children}
    </h2>
  );
}
