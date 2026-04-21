// src/components/bento/bento-grid.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Primitives de layout bento inspirées du design Home.html :
 *  - Grille 12 colonnes desktop, 6 sur tablette, 1 sur mobile
 *  - Rangées de 110px desktop, auto sur mobile
 *  - Cards avec variantes (light, dark, flush, accent)
 */

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...rest }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-6 gap-3 md:grid-cols-12 md:auto-rows-[110px]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** colonnes desktop (1-12) */
  span?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  /** rangées desktop (1-6) */
  rows?: 1 | 2 | 3 | 4 | 5 | 6;
  /** variante visuelle */
  variant?: "light" | "dark" | "flush" | "accent";
  /** padding interne (par défaut md) */
  pad?: "none" | "sm" | "md" | "lg";
  /** hauteur mobile minimale (par défaut 140px) */
  mobileMinH?: string;
  children: React.ReactNode;
}

// Mapping explicite : Tailwind JIT ne peut pas scanner les classes dynamiques.
const SPAN_CLASS: Record<number, string> = {
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  12: "md:col-span-12",
};

const ROW_CLASS: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
  4: "md:row-span-4",
  5: "md:row-span-5",
  6: "md:row-span-6",
};

const PAD_CLASS: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-5 sm:p-6",
  lg: "p-6 sm:p-8",
};

export function BentoCard({
  span = 6,
  rows = 2,
  variant = "light",
  pad = "md",
  mobileMinH = "140px",
  className,
  style,
  children,
  ...rest
}: BentoCardProps) {
  const base =
    "group relative col-span-6 overflow-hidden rounded-[22px] border transition-[transform,box-shadow,border-color] duration-300 will-change-transform";

  const variantClass: Record<string, string> = {
    light:
      "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_40px_-14px_oklch(0.541_0.281_293/0.18)]",
    dark: "border-white/[0.07] bg-[linear-gradient(180deg,#13101d,#0f0c1a)] text-white hover:-translate-y-0.5 hover:border-white/15",
    flush: "border-transparent! bg-transparent! hover:translate-y-0",
    accent:
      "border-primary/15 bg-[linear-gradient(135deg,oklch(0.943_0.029_294),oklch(0.894_0.057_293))] text-[oklch(0.38_0.189_293)] hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_14px_40px_-14px_oklch(0.541_0.281_293/0.3)]",
  };

  return (
    <div
      className={cn(
        base,
        variantClass[variant],
        SPAN_CLASS[span],
        ROW_CLASS[rows],
        variant !== "flush" && PAD_CLASS[pad],
        "flex flex-col",
        className
      )}
      style={{
        minHeight: mobileMinH,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

interface SectionHeadProps {
  eyebrow: string;
  eyebrowTone?: "light" | "dark";
  title: React.ReactNode;
  controls?: React.ReactNode;
  className?: string;
}

export function SectionHead({
  eyebrow,
  eyebrowTone = "light",
  title,
  controls,
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "mb-5 flex flex-col items-start justify-between gap-4 md:mb-6 md:flex-row md:items-end",
        className
      )}
    >
      <div className="max-w-2xl">
        <span
          className={cn(
            "mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em]",
            eyebrowTone === "dark"
              ? "text-violet-300"
              : "text-muted-foreground"
          )}
        >
          {eyebrow}
        </span>
        <h2
          className={cn(
            "text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold leading-[1.1] tracking-[-0.025em]",
            eyebrowTone === "dark" ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </div>
      {controls && (
        <div className="flex flex-wrap items-center gap-1.5">{controls}</div>
      )}
    </div>
  );
}

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "outline" | "solid" | "primary" | "dark";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export function Pill({
  tone = "outline",
  size = "sm",
  className,
  children,
  ...rest
}: PillProps) {
  const toneClass: Record<string, string> = {
    outline: "border border-border bg-background text-muted-foreground",
    solid: "border border-foreground bg-foreground text-background",
    primary:
      "border border-primary/25 bg-primary/10 text-[oklch(0.491_0.27_292)]",
    dark: "border border-white/15 bg-white/[0.08] text-white/85",
  };
  const sizeClass: Record<string, string> = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3 py-1.5 text-xs",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        toneClass[tone],
        sizeClass[size],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
