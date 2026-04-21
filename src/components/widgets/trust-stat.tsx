// src/components/widgets/trust-stat.tsx
"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { CardShell, LiquidBlob } from "./blobs";
import { PALETTES, type Palette } from "./palettes";

export interface TrustStatData {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
  seed: number;
}

interface TrustStatCardProps {
  stat: TrustStatData;
  palette?: Palette;
}

/**
 * TrustStatCard — variante compacte de ServiceCardStat.
 * Format horizontal ~160px de haut, pas de corner arrow, pas de pill.
 * Icône en haut-gauche, valeur en grand, label + description en bas.
 */
export function TrustStatCard({
  stat,
  palette = "violet",
}: TrustStatCardProps) {
  const [hovered, setHovered] = React.useState(false);
  const p = PALETTES[palette];
  const Icon = stat.icon;

  return (
    <div className="h-[180px]">
      <CardShell palette={palette} hovered={hovered} onHover={setHovered}>
        <div
          className="absolute h-[90%] w-[90%]"
          style={{ top: -40, right: -60 }}
        >
          <LiquidBlob palette={palette} hovered={hovered} seed={stat.seed} />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <Icon className="h-4 w-4 text-white" />
          </div>

          <div>
            <div
              className="font-semibold leading-none tracking-[-0.04em]"
              style={{ fontSize: 34, color: p.accent }}
            >
              {stat.value}
            </div>
            <div className="mt-1.5 text-[13px] font-medium leading-tight">
              {stat.label}
            </div>
            <div className="mt-0.5 text-[11px] leading-tight opacity-65">
              {stat.description}
            </div>
          </div>
        </div>
      </CardShell>
    </div>
  );
}
