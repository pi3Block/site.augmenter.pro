# Handoff — augmenter.PRO · Narrative scroll site

> *« Votre PME, augmentée par l'IA. »* — récit en 7 chapitres, fond peinture WebGL réactif au curseur, transitions de palette pilotées au défilement, scènes cinématographiques GSAP, défilement ultra-fluide Lenis.

---

## Overview

A single long-form HTML page that presents augmenter.PRO as a **7-chapter narrative**. Each scroll section is a chapter (Préambule → Le terrain → Trois piliers → La méthode → Les preuves → Les voix → La suite). The WebGL background morphs its color palette between chapters; GSAP ScrollTrigger plays one cinematic entry animation per chapter; Lenis provides premium momentum-based smooth scrolling.

The piece is positioned as an editorial / "manifesto" landing experience — a deliberate contrast to the existing utility-driven marketing site, intended for a campaign / pitch context.

## About the Design Files

The HTML/CSS/JS in this bundle is a **design reference**, not production code. It demonstrates intended look, motion, and behavior in a single self-contained file. Your job is to **recreate this in the augmenter.pro target codebase** (Next.js 16 / React 19 / Tailwind 4 / shadcn/ui — see `github.com/pi3Block/site.augmenter.pro`) using its existing patterns:

- Section components → React Server Components under `src/components/sections/<chapter>.tsx`
- Animations → Framer Motion (already in use) for the entry timelines; keep GSAP + Lenis + Three.js as **client components** mounted at the layout level for the cross-section effects (background + smooth scroll).
- Tokens → consume from `src/app/globals.css` instead of re-declaring (see `colors_and_type.css` for the names used).
- Icons → `lucide-react` (the bespoke SVGs in this prototype map 1:1 to Lucide names — see *Components* below).

If you decide to keep the GSAP/Lenis/Three stack from the prototype rather than re-implement in Framer Motion, that is supported — just be deliberate about the choice and keep the libraries inside dynamic client-only imports.

## Fidelity

**High-fidelity.** All colors, type, spacing, radii, shadows, layout grids, copy, and motion timings in the prototype are final and align with the augmenter.PRO design system. Recreate pixel-perfectly using the codebase's existing tokens.

---

## Page architecture

```
<canvas id="bg"/>          ← Three.js painted background (fixed, z:0)
<custom-cursor/>           ← dot + ring, mix-blend: difference (>=620px only)
<nav class="nav"/>          ← brand mark + meta strip, fixed top, blend: difference
<aside class="rail"/>       ← 7 numbered chapter buttons, fixed right-center
<div class="progress"/>     ← scroll-progress + "CH.XX — Title · NN/07", fixed bottom
<main>
  <section.chapter.ch-01 data-mood="dawn">    Préambule
  <section.chapter.ch-02 data-mood="reality"> Le terrain
  <section.chapter.ch-03 data-mood="violet">  Trois piliers     (dark)
  <section.chapter.ch-04 data-mood="amber">   La méthode
  <section.chapter.ch-05 data-mood="night">   Les preuves       (dark)
  <section.chapter.ch-06 data-mood="light">   Les voix
  <section.chapter.ch-07 data-mood="ember">   La suite + CTA    (dark)
</main>
```

All fixed-chrome elements use `mix-blend-mode: difference` so they remain legible over both light and dark chapter backgrounds. `cursor: none` on `<body>`; native cursor restored under 620px.

---

## Chapter-by-chapter spec

Every chapter shares the same scaffold:

```
<section class="chapter ch-NN" id="ch-NN" data-mood="...">
  <div class="wrap">                       ← max-width 1180, centered, gap 56
    <div class="chapter-head">             ← "CH.NN — Title", mono 12px / 0.14em tracking
      <span class="idx">CH.NN</span>
      <span class="sep"/>                  ← 80px hairline
      <span>Title</span>
    </div>
    <span class="pill">…</span>            ← violet eyebrow pill (radius-full)
    <h2 class="lede">…</h2>                ← 40 → 112px, weight 700, tracking -0.035em, line-height 0.96
    <p class="sub">…</p>                   ← 17 → 22px, muted, 1.5 line-height, max-width 56ch
    <!-- chapter-specific body -->
  </div>
</section>
```

Padding: `140px 40px 120px`. `min-height: 100vh`. `position: relative; isolation: isolate;`.

### Chapter 01 — Préambule (mood: `dawn`)
Soft violet wash on near-white paper. Functions as a *cover page*.

| Slot | Copy / spec |
|---|---|
| pill | `Un récit en sept chapitres` |
| lede | `Votre PME, <em>augmentée</em> par l'IA.<br/>Sans gourou, sans <u>jargon</u>.` |
| sub | `Pierre Legrand accompagne les PME et indépendants des Yvelines et du Val d'Oise à trouver l'équilibre entre performance humaine et numérique. IA, digitalisation, robotique — des solutions sur mesure qui tiennent la route.` |
| signoff | 38×38 avatar (`linear-gradient(135deg, violet-300, amber-400)`) + mono caption: `Récit de mission · Pierre Legrand · Consultant indépendant` |
| stamp (top-right, abs.) | `Mai 2026` / `Jouy-le-Moutier (95)` / `47°N · 2°E`, mono 11px |

`<em>` = violet→amber gradient text. `<u>` = amber background-image at 65% from top (highlighter bar).

### Chapter 02 — Le terrain (mood: `reality`)
Warm-neutral, cool tone. Establishes the *where* and *who*.

| Slot | Copy / spec |
|---|---|
| pill | `78 · 95 · en présentiel ou à distance` |
| lede | `Pas la Silicon Valley.<br/>Le <em>Vexin</em>, la vallée de l'Oise,<br/>des artisans qui veulent <u>avancer</u>.` |
| body | 2-col grid (1.1fr / 0.9fr, gap 64): **left** = abstract SVG region map; **right** = three annotation blocks (kicker + caption pair, 200/1fr grid, hairline border-top). |
| annotations | Profil client / Demande type / Promesse (full copy in `narrative.html`) |

**Map** (left col):
- Aspect 4:3, border-soft, radius-xl, white-60 with backdrop-blur-8.
- Background: 20px dotted grid + two violet-tinted blob regions for "Yvelines · 78" and "Val d'Oise · 95" labeled in mono 9px.
- 1 amber "home" pin + 5 violet pins (positions are illustrative).
- Legend bottom-left: `Couverture · rayon ~45 km · 12 missions / mois`.

### Chapter 03 — Trois piliers (mood: `violet`)
**Dark chapter.** Deep violet background. Inverts text to white; pill becomes glass; eyebrow accent flips to amber.

| Slot | Copy / spec |
|---|---|
| pill | `Prestations` |
| lede | `L'IA ne sert pas qu'à<br/>générer des images <em>de chats</em>.` |
| sub | `Trois disciplines, une seule logique : régler des problèmes réels. Chaque mission part de votre métier, jamais de la techno.` |
| body | `.pillars` = 3-column grid sharing 1px white-12% hairlines, radius-2xl, 12% white border |

**Pillar card** (3×, `min-height: 320px`):
- 44×44 glass tile (`bg: white/10`, border `white/15`, radius-lg) with amber-400 icon (24×24)
- `<h3>` 22px / 600 / -0.015em
- italic `<p class="quote">` 14px / muted-white
- `<ul>` with amber-400 5px bullets, 13px copy
- Footer `<span class="num">— 0X / 03` mono 11px

Pillar data:
1. **Intelligence artificielle** — icon: `Brain` — quote: *« L'IA ne sert pas qu'à générer des images de chats. »* — list: Automatisation de tâches répétitives / Assistants métier, agents internes / Intégration MCP & API.
2. **Digitalisation avancée** — icon: `Monitor` — quote: *« Changer d'outil, c'est un projet humain avant d'être technique. »* — list: Audit informatique 180° / Choix & intégration d'outils / Formation des équipes.
3. **Robotique & IoT** — icon: `Bot` — quote: *« Drones, robots, capteurs, caméras — les yeux et les bras du numérique. »* — list: Capture terrain (drones, caméras) / Capteurs & télémétrie / Pilotage d'équipements.

### Chapter 04 — La méthode (mood: `amber`)
Warm amber background, dark text returns. The 4-step process.

| Slot | Copy / spec |
|---|---|
| pill | `Notre approche · 4 étapes` |
| pill style | border `amber-500 / 35%`, bg `amber-400 / 14%`, text `oklch(0.5 0.13 70)` |
| lede | `La performance naît de<br/>l'<em>équilibre</em> entre l'humain,<br/>ses outils, ses <u>habitudes</u>.` |
| body | `.steps` = 4-col grid (gap 28), each card `min-height: 240px`, radius-xl, shadow-sm, bg `white/78` + blur-6 |

**Step card** internal: `marker` row with mono label + 20×20 violet icon, big amber-500 number (38px / 700 / -0.03em), h3 19px, body 14px muted.

Steps (label · number · icon · title · body):
1. `Diagnostic · 01 · Search` · **Écouter le terrain** · *60 minutes pour comprendre votre activité, vos irritants, vos contraintes. Sans démo, sans tablier marketing.*
2. `Outils · 02 · Wrench` · **Choisir juste** · *On ne change pas d'outil par mode. On choisit ce qui répond à un besoin, dans votre budget, intégrable avec l'existant.*
3. `Formation · 03 · GraduationCap` · **Embarquer l'équipe** · *Un outil que personne n'utilise n'a aucune valeur. Sessions courtes, formats pratiques, support après la mise en place.*
4. `Itération · 04 · Repeat` · **Mesurer, ajuster** · *Trois mois plus tard, on regarde ensemble ce qui marche, ce qu'il faut corriger. Pas de promesse à vie, des engagements tenus.*

**Below the steps**, two annotation blocks (same `.annot` pattern as ch-02):
- `Audit 180°` — *Offert · 60 min · sans engagement. Diagnostic informatique de votre structure et premières pistes concrètes.*
- `Audit 360° IA` — *225 € · ~3h · livrable PDF. Cartographie des cas d'usage IA pertinents pour votre métier, hiérarchisés par impact & faisabilité.*

### Chapter 05 — Les preuves (mood: `night`)
**Dark chapter.** Near-black. The numbers section.

| Slot | Copy / spec |
|---|---|
| pill | `Chiffres de terrain · 2025` |
| lede | `Ce qui compte n'est pas<br/>le <em>buzz</em>, mais ce qu'on <u>mesure</u>.` |
| sub | `Quelques chiffres observés sur les missions de l'année écoulée. Pas de moyenne marketing : des cas réels, anonymisés, vérifiables.` |
| body | `.stats` = 4-col grid sharing 1px white-12% column rules + top/bottom white-14% rules |

**Stat cell** (padding 42 28 32, gap 12):
- `.v` = clamp(48px, 5.5vw, 84px) / 700 / -0.04em / lh 0.95, tabular-nums, white
- `.k` = mono 11px / 0.14em tracking / white-55
- `.desc` = 13px / lh 1.5 / white-75

Stat content (count target · suffix · key · desc):
1. `-30 · %` · `Gain de temps moyen` · *Sur les tâches automatisées après mise en place (admin, devis, relances).*
2. `48 · h` · `Délai de premier livrable` · *Du diagnostic au premier outil opérationnel, sur un cas d'usage cadré.*
3. `2h → 15 · min` (literal `2h <small>→</small>` prefix, only the second number counts up) · `Tâche type compressée` · *Cas d'un cabinet immobilier — synthèse de visites par assistant IA dédié.*
4. `0 · ""` · `Engagement long terme` · *Aucun abonnement obligatoire. Vous gardez la main sur vos outils et vos données.*

### Chapter 06 — Les voix (mood: `light`)
Back to light. Testimonials.

| Slot | Copy / spec |
|---|---|
| pill | `Ce que disent nos clients` |
| lede | `Trois <em>gérants</em>, trois métiers,<br/>la même remarque : <u>« enfin clair ».</u>` |
| body | `.voices` = 3-col grid (gap 28) |

**Voice card** (radius-xl, bg `white/80` + blur-8, border-soft, shadow-sm, padding 28):
- Top-right `.gain` chip — primary-soft bg, primary-25 border, mono 11px (e.g. `−32 % de temps admin`)
- 5× amber-400 filled stars (14×14 Star)
- `<blockquote>` 15px / italic, French guillemets injected via `::before` / `::after` colored primary
- Footer (mt-auto, border-soft top): 32×32 violet avatar (`linear-gradient(135deg, violet-300, violet-500)`) + `<b>Name</b>` 13px / 600 + mono 10px role/town caption

Testimonials (gain · name · role · quote):
1. `−32 % de temps admin` · **Arnaud L.** · *Gérant boutique jardin · Jouy-le-Moutier (95)* · *"Je pensais qu'il fallait être ingénieur. En fait Pierre a posé trois questions, regardé comment on bossait, et on a sorti un outil qui tient la route en deux semaines."*
2. `2h → 15 min` · **Sophie M.** · *Conseillère immobilier · Cergy (95)* · *"L'audit IA m'a remis les pieds sur terre. Pas besoin d'une révolution — un assistant qui résume mes visites et me prépare les comptes-rendus. Discret, efficace, et je dors mieux."*
3. `48h livrable` · **Karim B.** · *Gérant entreprise de couverture · Conflans (78)* · *"On avait un drone qu'on ne savait pas exploiter. Pierre a fait le pont entre nos relevés terrain et notre logiciel de devis. Aujourd'hui c'est devenu une routine, plus une corvée."*

### Chapter 07 — La suite (mood: `ember`)
**Dark chapter.** Violet→amber ember. CTA.

| Slot | Copy / spec |
|---|---|
| pill | `Prochain chapitre · le vôtre` |
| lede | `Quel est votre<br/><em>prochain niveau&nbsp;?</em>` — clamp(48px, 9vw, 144px), max-width 14ch |
| `<em>` gradient | `linear-gradient(135deg, violet-300, amber-400)` (not the brand gradient) |
| sub | `Zéro engagement, zéro jargon technique — juste un échange concret pour comprendre où l'IA et le numérique peuvent vous faire gagner du temps, de l'argent, ou de la sérénité.` |
| CTAs | **Primary** `Réserver l'audit 180° offert →` (violet-600, hover violet-700) · **Ghost** `Voir les prestations` (1px white-30 border, hover white-8 fill). Both radius-md, padding `14 22`, gap 10, 15px / 500. |
| contact strip | 3 × (mono 10px label / 15px white value), separated by 1px white-14 top rule, gap 38: `Pierre Legrand · Consultant indépendant` · `Email · vite@augmenter.pro` · `Téléphone · +33 6 79 11 97 74` |
| colophon | bottom-abs, mono 10px / white-40, l/r: `augmenter.PRO · 2026` / `Récit · 7 chapitres · fin` |

---

## Fixed chrome — spec

### Nav (top, fixed)
- Padding 22 / 32, flex space-between
- `mix-blend-mode: difference; color: #fff;` — flips legibility per chapter automatically
- Left: brand mark — `22×22 violet-600 tile (radius 6) with white Zap icon` + `augmenter` (regular) + `.PRO` (violet-400)
- Right: nav-meta strip, mono 11px / 0.12em / uppercase: `Conseil · IA & digitalisation` and `Zone · Yvelines · Val d'Oise` (labels in 60% opacity)

### Rail (right, fixed, vertically centered, ≥980px only)
- Flex column, gap 14
- Per chapter button: `01` mono number (10px / 0.1em) · 16px hairline dash · hidden label
- **Active state**: number opacity → 1, dash grows to 32px and 0.8 opacity, label fades in
- Click → `lenis.scrollTo(section, { duration: 1.4, easing: easeOutCubic })`

### Progress (bottom, fixed)
- Left label: `CH.0X — Title` (live)
- 1px-tall track, white-25, with a white scaling fill anchored left and 7 evenly-spaced tick marks
- Right label: `0X / 07`

---

## WebGL background — `#bg` canvas

Three.js full-screen quad with a custom fragment shader. Domain-warped FBM noise (5 octaves) + cursor-driven flow field gives an oil-paint look that smears in the cursor's direction.

### Uniforms
| Uniform | Type | Purpose |
|---|---|---|
| `uTime` | float | drives ambient drift |
| `uMouse` | vec2 | smoothed [0..1] cursor position |
| `uMouseVel` | vec2 | per-frame mouse velocity (×8) — directional smear |
| `uRes` | vec2 | viewport size |
| `uC0`, `uC1`, `uC2` | vec3 | palette — paper / wash / ink-deep |
| `uContrast` | float | how much `uC2` shows (chapter-tuned) |
| `uGrain` | float | film-grain amplitude |
| `uMouseStrength` | float | how aggressively the cursor pulls paint |

### Per-chapter color palettes
Tween 3 colors per chapter. The tween between A→B happens in the **last 40 %** of each chapter's scroll range.

| Mood | C0 (paper) | C1 (wash) | C2 (ink/highlight) |
|---|---|---|---|
| dawn    | 0.985, 0.985, 0.985 | 0.94, 0.92, 0.97 | 0.78, 0.74, 0.94 |
| reality | 0.97, 0.97, 0.96    | 0.86, 0.87, 0.90 | 0.36, 0.36, 0.42 |
| violet  | 0.16, 0.10, 0.30    | 0.32, 0.16, 0.62 | 0.74, 0.60, 0.96 |
| amber   | 0.99, 0.96, 0.90    | 0.97, 0.83, 0.50 | 0.78, 0.52, 0.13 |
| night   | 0.06, 0.05, 0.10    | 0.14, 0.10, 0.24 | 0.98, 0.78, 0.34 |
| light   | 0.98, 0.98, 0.99    | 0.92, 0.90, 0.97 | 0.55, 0.45, 0.86 |
| ember   | 0.05, 0.03, 0.10    | 0.20, 0.10, 0.36 | 0.98, 0.65, 0.27 |

### Per-chapter shader config (tweened over 1.2s `power2.out`)

| Mood | uContrast | uGrain | uMouseStrength |
|---|---|---|---|
| dawn    | 0.55 | 0.045 | 0.7 |
| reality | 0.65 | 0.05  | 0.7 |
| violet  | 0.95 | 0.05  | 1.0 |
| amber   | 0.85 | 0.05  | 0.9 |
| night   | 1.00 | 0.06  | 1.1 |
| light   | 0.65 | 0.045 | 0.7 |
| ember   | 1.10 | 0.06  | 1.2 |

### Mouse behavior
- Smoothed with `lerp(dt * 6)`.
- After 1.4 s idle, target lerps toward a Lissajous-style ambient drift `(0.5 + cos(t·0.18)·0.18, 0.5 + sin(t·0.22)·0.18)` so the background still breathes when no input.

### Shader pseudocode (full GLSL in `narrative.html`)
```glsl
p   = aspect-corrected uv
toM = uMouse - p
pull = toM * exp(-|toM| * 3.2) * uMouseStrength * 0.35
     + uMouseVel * exp(-|toM| * 3.2) * 1.2

q = fbm(p*2.0 + [0, t])                ← time-drift layer
r = fbm(p*2.2 + 4q + pull)             ← warp + mouse smear
n = fbm(p*1.8 + 4r + pull*2)           ← final density

wash = smoothstep(0.20, 0.85, n + 0.1*r.y)
ink  = smoothstep(0.55, 0.95, n + 0.15*r.x) * uContrast
col  = mix(uC0, uC1, wash); col = mix(col, uC2, ink)
col *= vignette
col += exp(-|toM| * 4) * 0.18 * (uC2*0.6 + 0.2)   ← cursor halo
col += hash(frag + floor(t*14)) * uGrain          ← grain
```

### Implementation notes
- Pixel ratio capped at `1.6` — anything more melts laptops with no visible win.
- Mount the renderer once at the **app root** as a client-only component. The mood switcher needs to drive `__bgSet(moodFrom, moodTo, p)` and `__bgConfig(mood)` from the scroll observer.

---

## Smooth scroll — Lenis

```js
new Lenis({
  duration: 1.15,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,        // native touch on mobile
  wheelMultiplier: 1.0,
});
```

- Pipe `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add(t => lenis.raf(t * 1000))`.
- Rail / anchor clicks: `lenis.scrollTo(target, { duration: 1.4, easing: t => 1 - Math.pow(1 - t, 3) })`.

---

## Scene animations — GSAP ScrollTrigger

### Word splitter
For every `[data-anim="words"]` headline, walk text nodes and wrap each whitespace-separated word in `<span class="word"><span>word</span></span>`. `.word` is `display: inline-block; overflow: hidden;`. The inner `<span>` is what gets animated. **The walker must recurse into `<em>` and `<u>` element children**, and the `<em>` gradient must be re-applied to the inner word-spans (otherwise `background-clip: text` no longer has visible text to clip — see `colors_and_type` section below).

### Per-section timeline
Every `.chapter` runs the same timeline on `start: 'top 85%'`, `once: true` (play forward, never reverse — critical: reversing on scroll-up makes earlier text vanish).

| Selector | Tween | Offset |
|---|---|---|
| `[data-anim="line"]` | `from { opacity: 0, y: 14 } duration 0.6` | 0 |
| `[data-anim="words"] .word > span` | `from { yPercent: 110, opacity: 0 } duration 0.9 stagger 0.035` | 0.05 |
| `[data-anim="up"]` | `from { opacity: 0, y: 28 } duration 0.7` per element, **stacked** at `0.25 + i*0.06` | 0.25 onwards |
| `[data-anim="stagger"] > *` | `from { opacity: 0, y: 36 } duration 0.75 stagger 0.09` | 0.35 |
| `[data-anim="reveal"] > *` | `from { opacity: 0, y: 36, scale: 0.985 } duration 0.8 stagger 0.12, transformOrigin: 'center bottom'` | 0.30 |

All easings: `power3.out`.

### Counters (ch-05 only)
Each `[data-count]` node is tweened from 0 to its `data-count` over 1.2 s `power2.out`, suffix appended each frame. Negative targets count down with `Math.ceil`.

### Scrubbed parallax (every chapter)
- `.lede` → `yPercent: -12` scrub `true` across the section
- `.chapter-head` → `xPercent: 6` scrub `true` (opposite-direction drift for depth)

### Stat block (ch-05)
Scrub-zoom: `from scale 0.96` over `top 90% → top 30%`, `scrub: 0.6`.

### Init
Call `ScrollTrigger.refresh()` on `window.load` — without it, sections rendered below the fold during boot can be classified as "already past start" before Lenis stabilises page height, and their entry animation never fires.

---

## Mood / palette observer

Run on `requestAnimationFrame`. For each frame:

1. Find which section currently has its top at or above `vh * 0.5` → that's the active chapter.
2. Compute `frac = clamp((vh*0.5 - rect.top) / rect.height, 0, 1)` — how far through the section.
3. Compute `blend = clamp((frac - 0.6) / 0.4, 0, 1)` — palette tween only kicks in over the last 40 %.
4. `__bgSet(currentMood, nextMood, blend)` — interpolates `uC0/1/2`.
5. On `activeIdx` change: tween `__bgConfig(currentMood)` (contrast/grain/strength), update rail active state, update progress label, set `body.dataset.mood`.

The progress fill is `scaleX(scrollY / (scrollHeight - vh))`.

---

## Custom cursor

Two fixed divs:
- `.cursor` — 6px white dot, `mix-blend: difference`, follows pointer 1:1
- `.cursor-ring` — 36×36 white-60 ring, lerp `0.18` toward target
- `[data-hover]` / `a` / `button`: toggle `body.cursor-hover` → ring expands to 64×64 with solid white border
- Disabled (`display: none`) under 620px; native cursor restored.

---

## Design tokens (all sourced from `colors_and_type.css`)

### Colors (OKLCH)
```
--violet-50  oklch(0.969 0.016 293)
--violet-100 oklch(0.943 0.029 294)
--violet-300 oklch(0.811 0.111 293)
--violet-400 oklch(0.702 0.183 293)
--violet-500 oklch(0.606 0.250 292)
--violet-600 oklch(0.541 0.281 293)   ← PRIMARY
--violet-700 oklch(0.491 0.270 292)
--violet-900 oklch(0.380 0.189 293)
--amber-400  oklch(0.828 0.189 84.4)
--amber-500  oklch(0.769 0.188 70.0)
--neutral-0  oklch(1 0 0)
--neutral-50 oklch(0.985 0 0)
--neutral-100 oklch(0.97 0 0)
--neutral-200 oklch(0.922 0 0)
--neutral-600 oklch(0.556 0 0)
--neutral-950 oklch(0.145 0 0)
```

### Semantic
```
--bg            neutral-0
--fg            neutral-950
--fg-muted      neutral-600
--border        neutral-200
--border-soft   oklch(0.922 0 0 / 40%)
--primary       violet-600
--primary-soft  oklch(0.541 0.281 293 / 10%)
--ring          violet-500
--gradient-brand   linear-gradient(135deg, violet-500, amber-400)
```

### Type
- Sans (single family): **Inter** 400/500/600/700/800, loaded from Google Fonts
- Mono: **JetBrains Mono** 400/500 (Geist Mono is referenced in the repo but no font ships — see codebase caveat)
- h1/h2 → `letter-spacing: -0.025em; text-wrap: balance; line-height: 1.1`
- Lede headline: `clamp(40px, 7.5vw, 112px) / 700 / -0.035em / lh 0.96` (ch-07 lede: `clamp(48px, 9vw, 144px)`)

### Radius
`--radius: 0.625rem` → sm 6 / md 8 / lg 10 / xl 14 / 2xl 18 / 3xl 22 / 4xl 26 / full 9999

### Spacing scale (Tailwind-derived)
`--space-1 .25` / `-2 .5` / `-3 .75` / `-4 1` / `-6 1.5` / `-8 2` / `-12 3` / `-16 4` / `-24 6` rem

### Shadow
shadcn defaults — `--shadow-sm: 0 1px 2px rgb(0 0 0 / .05), 0 1px 3px rgb(0 0 0 / .08)`. Cards: `shadow-sm` at rest, `hover:shadow-lg`. **No colored shadows, no inset shadows.**

### Border styling rule
Every card uses `border border-border/50`. Section dividers `border-y border-border/40`. Inside dark chapters: white-12% to white-14%.

---

## Icons

Replace inline SVGs in the prototype with `lucide-react` imports. Mapping:

| Prototype use | Lucide name |
|---|---|
| Brand mark (lightning bolt) | `Zap` |
| ch-03 pillar 1 (IA) | `Brain` |
| ch-03 pillar 2 (Digitalisation) | `Monitor` |
| ch-03 pillar 3 (Robotique) | `Bot` |
| ch-04 step 1 (Diagnostic) | `Search` |
| ch-04 step 2 (Outils) | `Wrench` |
| ch-04 step 3 (Formation) | `GraduationCap` |
| ch-04 step 4 (Itération) | `Repeat` |
| ch-06 testimonial stars | `Star` (`fill-amber-400 text-amber-400`) |
| ch-07 CTA arrow | `ArrowRight` |

Stroke width: Lucide default `2`. Size: `h-4 w-4` in buttons, `h-6 w-6` in section icon tiles (24px).

---

## CRITICAL gotcha — `<em>` gradient + word splitter

When splitting `<em>some word</em>` into `<span class="word"><span>some word</span></span>`, the inner spans become `display: inline-block`. The `background-clip: text` declared on the `<em>` then has no inline text of its own to clip — `color: transparent` cascades down to the inner spans which have **no background** to clip, so they render invisible.

**Fix (already in `narrative.html` CSS):**
```css
.chapter h2.lede em,
.chapter h2.lede em .word > span {
  background: var(--gradient-brand);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.ch-07 h2.lede em,
.ch-07 h2.lede em .word > span {
  background: linear-gradient(135deg, var(--violet-300), var(--amber-400));
  ...
}
```

Apply the gradient to whichever element actually renders the glyphs after splitting.

---

## Responsive

| Breakpoint | Adaptations |
|---|---|
| ≤ 980px | `.rail` hidden · nav padding 16/20 · progress padding 20 · ch-02 grid → 1 col · pillars → 1 col · steps → 2 cols · stats → 2 cols (right border off, bottom border on) · voices → 1 col · ch-01 stamp inlines |
| ≤ 620px | Steps → 1 col · stats → 1 col · ch-07 contact → 1 col · cursor native (no `cursor: none`) · `.cursor` / `.cursor-ring` hidden |

Padding rule: chapters drop to `120px 24px 100px` at ≤ 980.

---

## Dependencies (pinned versions used in prototype)

| Lib | Version | Purpose |
|---|---|---|
| `three` | 0.160.0 | WebGL backdrop |
| `gsap` | 3.12.5 | timelines + scrub parallax |
| `gsap/ScrollTrigger` | 3.12.5 | scroll-bound animation triggers |
| `lenis` | 1.1.13 | smooth scroll |

When you port this to the Next.js app, all four belong inside `'use client'` boundaries. The renderer should be mounted once in `app/layout.tsx` (or a root `<EditorialBackground />` client component), not per-section.

---

## State / data

The piece is fully static — no fetching, no server state, no form submissions. All copy is hardcoded. The only "state" is scroll position, which Lenis owns. The mood observer is read-only over the DOM and emits to:
- the WebGL uniforms (color tween + chapter config)
- the rail (active-button class)
- the progress bar (fill scale + label text)
- `body.dataset.mood` (currently unused downstream, available for selectors)

Recommended React shape:
```tsx
<EditorialPage>
  <BackgroundCanvas />                ← Three.js, refs into mood store
  <CustomCursor />                    ← optional
  <Nav /> <Rail /> <ProgressBar />    ← read from mood store
  <ChapterDawn /> <ChapterReality /> … <ChapterEmber />
</EditorialPage>
```
Use a tiny Zustand / signals store for `{ currentMood, blendFraction, scrollProgress }`. Background, rail, progress all subscribe.

---

## Files in this bundle

| File | Purpose |
|---|---|
| `narrative.html` | The full prototype — open it directly to see motion, palettes, scroll, cursor behavior. Source of truth for any spec ambiguity below. |
| `colors_and_type.css` | Design system tokens — keep this 1:1 with the prod codebase's `globals.css`. |
| `assets/icon.svg` | Favicon / brand mark — violet rounded tile with white Zap. |
| `README.md` | You are here. |

## Author

Designs by augmenter.PRO design-system reference. Original site: <https://augmenter.pro>. Contact: <vite@augmenter.pro>.
