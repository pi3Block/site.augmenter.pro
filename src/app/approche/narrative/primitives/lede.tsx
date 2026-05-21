"use client";

import { ReactNode } from "react";

interface LedeProps {
  children: ReactNode;
  size?: "default" | "xl";
}

export function Lede({ children, size = "default" }: LedeProps) {
  const fontSize =
    size === "xl"
      ? "clamp(48px, 9vw, 144px)"
      : "clamp(40px, 7.5vw, 112px)";
  return (
    <h2
      data-anim="words"
      className="text-balance font-bold leading-[0.96] tracking-[-0.035em] text-(--fg) [&_em]:not-italic [&_em]:bg-(--gradient-brand) [&_em]:bg-clip-text [&_em]:text-transparent [&_u]:no-underline [&_u]:bg-[linear-gradient(transparent_60%,oklch(0.828_0.189_84/0.55)_60%)] [&_u]:bg-no-repeat"
      style={{ fontSize }}
    >
      {children}
    </h2>
  );
}
