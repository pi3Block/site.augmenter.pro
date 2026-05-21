"use client";

import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  variant?: "default" | "amber" | "glass";
}

export function Pill({ children, variant = "default" }: PillProps) {
  const classes = {
    default:
      "border border-[color:oklch(0.541_0.281_293/0.25)] bg-(--primary-soft) text-(--primary)",
    amber:
      "border border-[color:oklch(0.769_0.188_70/0.35)] bg-[color:oklch(0.828_0.189_84/0.14)] text-[color:oklch(0.5_0.13_70)]",
    glass:
      "border border-white/15 bg-white/10 text-white/85 backdrop-blur",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${classes[variant]}`}
    >
      {children}
    </span>
  );
}
