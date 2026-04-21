// src/components/widgets/idea-card.tsx
"use client";

import * as React from "react";
import {
  CardShell,
  MeshAurora,
  CornerArrow,
  PillTag,
} from "./blobs";
import { PALETTES, type Palette } from "./palettes";

export interface IdeaData {
  number: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  seed: number;
}

interface IdeaCardBigNumberProps {
  idea: IdeaData;
  palette?: Palette;
}

/**
 * IdeaCardBigNumber — variante "A" (Numéro filigrane).
 * Numéro géant en fond + Aurora + premier pro/con.
 */
export function IdeaCardBigNumber({
  idea,
  palette = "amber",
}: IdeaCardBigNumberProps) {
  const [hovered, setHovered] = React.useState(false);
  const p = PALETTES[palette];

  return (
    <div className="h-[380px]">
      <CardShell palette={palette} hovered={hovered} onHover={setHovered}>
        <MeshAurora palette={palette} hovered={hovered} seed={idea.seed} />

        {/* numéro géant filigrane */}
        <div
          aria-hidden
          className="pointer-events-none absolute font-semibold leading-none"
          style={{
            top: -20,
            right: -20,
            fontSize: 260,
            color: p.accent,
            opacity: 0.08,
            letterSpacing: -8,
          }}
        >
          {idea.number}
        </div>

        <div className="absolute inset-0 flex flex-col p-7">
          <PillTag>Idée {idea.number}</PillTag>

          <h3 className="mt-4 max-w-[280px] text-[24px] font-semibold leading-tight tracking-tight">
            {idea.title}
          </h3>
          <p className="mt-2 max-w-[270px] text-[13px] leading-[1.5] opacity-75">
            {idea.description}
          </p>

          <div className="mt-auto flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs opacity-90">
              <span className="h-1.5 w-1.5 rounded-sm bg-[oklch(0.75_0.17_155)]" />
              <strong className="font-medium">{idea.pros[0]}</strong>
            </div>
            <div className="flex items-center gap-2 text-xs opacity-65">
              <span className="h-1.5 w-1.5 rounded-sm bg-[oklch(0.828_0.189_84.429)]" />
              {idea.cons[0]}
            </div>
          </div>
        </div>

        <CornerArrow hovered={hovered} />
      </CardShell>
    </div>
  );
}
