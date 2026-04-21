# Handoff — Widgets animés pour site.augmenter.pro

10 fichiers à copier dans ton repo Next.js.

## Création

Crée le dossier `src/components/widgets/` et copie-colle :

| De (ce projet) | Vers (ton repo) |
|---|---|
| `handoff/widgets/palettes.ts` | `src/components/widgets/palettes.ts` |
| `handoff/widgets/blobs.tsx` | `src/components/widgets/blobs.tsx` |
| `handoff/widgets/service-card.tsx` | `src/components/widgets/service-card.tsx` |
| `handoff/widgets/idea-card.tsx` | `src/components/widgets/idea-card.tsx` |
| `handoff/widgets/trust-stat.tsx` | `src/components/widgets/trust-stat.tsx` |

## Remplacement (écrase les fichiers existants)

| De (ce projet) | Vers (ton repo) |
|---|---|
| `handoff/sections/hero.tsx` | `src/components/sections/hero.tsx` |
| `handoff/sections/trust.tsx` | `src/components/sections/trust.tsx` |
| `handoff/sections/services.tsx` | `src/components/sections/services.tsx` |
| `handoff/sections/ideas.tsx` | `src/components/sections/ideas.tsx` |
| `handoff/sections/cta.tsx` | `src/components/sections/cta.tsx` |

## Vérification

```bash
npm run dev
# puis ouvrir http://localhost:3000
```

Points à vérifier :
1. ✅ Hero : aurora violet-amber discrète en fond, lisibilité du titre préservée
2. ✅ Trust : 4 cartes sombres compactes (violet, cold, duo, amber) avec icône + stat
3. ✅ Services : 3 cartes sombres avec gros chiffre (10h, 3×, 24/7) et blob liquid
4. ✅ Ideas : 3 cartes sombres avec numéro filigrane 01/02/03 et aurora
5. ✅ CTA : aurora violet discrète sur le bloc sombre existant

## Accessibilité

Le hook `useMorph` dans `blobs.tsx` respecte `prefers-reduced-motion: reduce` — les blobs restent statiques si l'utilisateur a activé ce setting OS. Teste en activant "Réduire les animations" dans macOS System Settings > Accessibility > Display.

## Dépendances

Aucune nouvelle. Utilise uniquement `react`, `framer-motion`, `next/link`, `lucide-react` déjà présents.

## Dark mode

Les cartes sont déjà sombres par design (peu importe le thème du site). Pas d'adaptation nécessaire.

## Notes de perf

- 7 RAF loops au pire (Trust 4 + Services 3). Acceptable sur desktop moderne.
- Si problème mobile, wrap `useMorph` avec un `IntersectionObserver` pour ne tick que les composants visibles. À voir après mesure Lighthouse.

## Rollback

Les 5 fichiers `sections/*.tsx` originaux sont dans `git history`. `git checkout HEAD~1 -- src/components/sections/` suffit à tout annuler.
