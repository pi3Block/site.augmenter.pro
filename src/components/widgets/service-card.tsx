// src/components/widgets/service-card.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { CardShell, LiquidBlob, CornerArrow, PillTag } from "./blobs";
import { PALETTES, type Palette } from "./palettes";

export interface ServiceData {
  tag: string;
  title: string;
  description: string;
  stat: string;
  seed: number;
  href: string;
}

interface ServiceCardStatProps {
  service: ServiceData;
  palette?: Palette;
}

/**
 * ServiceCardStat — variante "F" (Stat hero).
 * Gros chiffre + blob latéral + corner arrow.
 * Utilisée sur fond sombre dans la section Services.
 */
export function ServiceCardStat({
  service,
  palette = "violet",
}: ServiceCardStatProps) {
  const [hovered, setHovered] = React.useState(false);
  const p = PALETTES[palette];

  return (
    <Link
      href={service.href}
      aria-label={service.title}
      className="block h-[340px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[28px]"
    >
      <CardShell palette={palette} hovered={hovered} onHover={setHovered}>
        {/* blob en diagonale haut-droite */}
        <div className="absolute h-[80%] w-[80%]" style={{ top: -60, right: -60 }}>
          <LiquidBlob
            palette={palette}
            hovered={hovered}
            seed={service.seed + 10}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-between p-7">
          <PillTag>{service.tag}</PillTag>

          <div>
            <div
              className="font-semibold leading-none tracking-[-0.05em]"
              style={{ fontSize: 72, color: p.accent }}
            >
              {service.stat}
            </div>
            <h3 className="mt-1.5 text-[22px] font-semibold leading-tight tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 max-w-[260px] text-[13px] leading-[1.5] opacity-75">
              {service.description}
            </p>
          </div>
        </div>

        <CornerArrow hovered={hovered} />
      </CardShell>
    </Link>
  );
}
