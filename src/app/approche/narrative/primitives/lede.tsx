"use client";

import { ReactNode } from "react";

interface LedeProps {
  children: ReactNode;
  size?: "default" | "xl";
}

// The word-splitter wraps every word inside <em> in <span class="word"><span>...</span></span>.
// Those inner spans become display: inline-block, so background-clip: text on <em> alone
// has no inline text left to clip — and the inherited color: transparent makes the words
// vanish. Fix: re-apply the gradient + clip to the inner word spans as well.
// See handoff README "CRITICAL gotcha — <em> gradient + word splitter".
export function Lede({ children, size = "default" }: LedeProps) {
  const fontSize =
    size === "xl"
      ? "clamp(48px, 9vw, 144px)"
      : "clamp(40px, 7.5vw, 112px)";
  return (
    <h2
      data-anim="words"
      className="text-balance font-bold leading-[0.96] tracking-[-0.035em] text-(--fg) [&_em]:not-italic [&_em]:bg-(--gradient-brand) [&_em]:bg-clip-text [&_em]:text-transparent [&_em_.word>span]:bg-(--gradient-brand) [&_em_.word>span]:bg-clip-text [&_em_.word>span]:text-transparent [&_u]:no-underline [&_u]:bg-[linear-gradient(transparent_60%,oklch(0.828_0.189_84/0.55)_60%)] [&_u]:bg-no-repeat"
      style={{ fontSize }}
    >
      {children}
    </h2>
  );
}
