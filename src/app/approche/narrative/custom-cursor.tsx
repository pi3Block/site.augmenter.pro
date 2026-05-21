"use client";

import { useEffect, useRef, useState } from "react";
import { narrativeStore } from "./store";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.innerWidth >= 620;
    const reduce = narrativeStore.get().prefersReducedMotion;
    if (!fine || !wide || reduce) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    document.documentElement.style.cursor = "none";
    let rafId = 0;
    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
    };

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const hover = el.closest("a, button, [data-hover]");
      document.body.classList.toggle("cursor-hover", !!hover);
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.style.cursor = "";
      document.body.classList.remove("cursor-hover");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-1000 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white will-change-transform"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-1000 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 transition-[width,height,border-color] duration-200 will-change-transform"
        style={{
          mixBlendMode: "difference",
          width: "var(--cursor-ring-size, 36px)",
          height: "var(--cursor-ring-size, 36px)",
        }}
        data-cursor-ring
      />
      <style>{`
        body.cursor-hover [data-cursor-ring] {
          --cursor-ring-size: 64px;
          border-color: #fff;
        }
      `}</style>
    </>
  );
}
