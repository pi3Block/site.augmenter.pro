import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";

/**
 * Encart CTA mid-article vers la landing Ateliers Claude Cowork & Claude Code.
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
            Dirigeant de PME ? On vous forme à Claude Cowork et Claude Code en une demi-journée.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Du no-code (Claude Cowork) à votre projet en terminal (Claude Code),
            sur vos cas réels. À partir de 450 € HT, présentiel 78/95 ou visio.
          </p>
          <Link
            href="/atelier-claude-code-dirigeant"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 hover:underline dark:text-violet-300"
          >
            Voir les ateliers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
