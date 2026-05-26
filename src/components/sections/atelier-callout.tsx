import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";

/**
 * Encart CTA mid-article vers la landing Atelier Claude Code dirigeant.
 * À insérer dans le corps des articles du cluster Claude Code / Odoo
 * pour transformer le trafic tech en contact dirigeant (cf. ADR 0003).
 */
export function AtelierCallout() {
  return (
    <aside className="my-8 rounded-xl border border-violet-200 bg-violet-50 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
      <div className="flex items-start gap-4">
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white sm:flex">
          <Terminal className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-semibold not-italic">
            Dirigeant de PME ? On configure Claude Code avec vous en une demi-journée.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Vous repartez avec Claude Code installé sur votre projet, votre
            CLAUDE.md opérationnel et 2-3 workflows qui tournent. 650 € HT,
            présentiel 78/95 ou visio.
          </p>
          <Link
            href="/atelier-claude-code-dirigeant"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:underline dark:text-violet-300"
          >
            Voir l&apos;atelier
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
