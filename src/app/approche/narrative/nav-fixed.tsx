"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export function NavFixed() {
  return (
    <header
      role="banner"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 text-white md:px-8"
      style={{ mixBlendMode: "difference" }}
    >
      <Link
        href="/"
        className="pointer-events-auto inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em]"
      >
        <span
          aria-hidden
          className="grid h-[22px] w-[22px] place-items-center rounded-md bg-[color:var(--violet-600)] text-white"
        >
          <Zap className="h-3 w-3" />
        </span>
        <span>augmenter</span>
        <span className="text-[color:var(--violet-400)]">.PRO</span>
      </Link>
      <div className="pointer-events-auto hidden gap-5 font-mono text-[11px] uppercase tracking-[0.12em] opacity-85 md:inline-flex">
        <span>
          <b className="font-medium opacity-60">Conseil</b>{" "}
          <span>· IA &amp; digitalisation</span>
        </span>
        <span>
          <b className="font-medium opacity-60">Zone</b>{" "}
          <span>· Yvelines · Val d&apos;Oise</span>
        </span>
      </div>
    </header>
  );
}
