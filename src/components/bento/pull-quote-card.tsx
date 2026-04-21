// src/components/bento/pull-quote-card.tsx
"use client";

import * as React from "react";

interface PullQuoteCardProps {
  quote: string;
  author: string;
  role: string;
  stars?: number;
}

/**
 * Grande citation pour sections bento sombres.
 * Guillemet décoratif + quote large + auteur/rôle en bas.
 */
export function PullQuoteCard({
  quote,
  author,
  role,
  stars = 5,
}: PullQuoteCardProps) {
  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-7">
      <div
        aria-hidden
        className="select-none font-serif text-[3rem] leading-[0.4] text-violet-300"
        style={{ fontFamily: "Georgia, serif" }}
      >
        &ldquo;
      </div>
      <p className="mt-4 flex-1 text-[1rem] font-medium leading-[1.5] text-white sm:text-[1.05rem]">
        {quote}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[0.72rem] text-white/60">
        <span className="font-semibold text-white">{author}</span>
        <span>·</span>
        <span>{role}</span>
        {stars > 0 && (
          <span className="ml-auto flex gap-0.5 text-[oklch(0.828_0.189_84.429)]">
            {Array.from({ length: stars }).map((_, i) => (
              <svg
                key={i}
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
              </svg>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Mini quote-card blanche pour le hero (avec stars).
 */
export function MiniQuoteCard({
  quote,
  author,
  role,
  stars = 5,
}: PullQuoteCardProps) {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex gap-0.5 text-[oklch(0.828_0.189_84.429)]">
        {Array.from({ length: stars }).map((_, i) => (
          <svg
            key={i}
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
          </svg>
        ))}
      </div>
      <p className="mt-2 flex-1 text-[0.88rem] italic leading-[1.45] text-foreground">
        &laquo;&nbsp;{quote}&nbsp;&raquo;
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
        <span className="font-semibold text-foreground not-italic">
          {author}
        </span>
        <span>·</span>
        <span>{role}</span>
      </div>
    </div>
  );
}
