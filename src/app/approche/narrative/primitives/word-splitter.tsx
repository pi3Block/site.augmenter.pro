"use client";

import { useEffect, RefObject } from "react";

/**
 * Walks text nodes inside `ref` and wraps each whitespace-separated word
 * in <span class="word"><span>word</span></span>. Recurses into <em>/<u>
 * so the gradient survives the split (see handoff README lines 446-464).
 *
 * Runs once after mount only — never on SSR.
 */
export function useWordSplitter(ref: RefObject<HTMLElement | null>, enabled = true) {
  useEffect(() => {
    if (!enabled || !ref.current) return;
    if (ref.current.dataset.split === "true") return;

    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent ?? "";
        if (!text.trim()) return;
        const frag = document.createDocumentFragment();
        text.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const outer = document.createElement("span");
          outer.className = "word";
          outer.style.display = "inline-block";
          outer.style.overflow = "hidden";
          const inner = document.createElement("span");
          inner.style.display = "inline-block";
          inner.style.willChange = "transform, opacity";
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        node.parentNode?.replaceChild(frag, node);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const tag = (node as Element).tagName;
      if (tag === "BR") return;
      const children = Array.from(node.childNodes);
      children.forEach(walk);
    };

    walk(ref.current);
    ref.current.dataset.split = "true";
  }, [ref, enabled]);
}
