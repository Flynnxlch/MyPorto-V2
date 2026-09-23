# CLAUDE.md

Project guidance for Claude Code. Read this fully before writing any code.

---

## 1. Project

Personal portfolio site, v2. Owner: Muhammad Misy'al Gibrani Razzaq — Informatics Engineering student (UIN Syarif Hidayatullah, 7th semester), full-stack web developer with real Android experience.

v1 exists at `Documents/portofolio/port-xnp`. v2 is a rewrite, not a refactor. Do not port v1 code. v1's specific failures, which v2 must not repeat:

- Four separate components each held their own `darkMode` state plus a `MutationObserver` on `<html>`.
- Theme was applied imperatively in `useEffect`, causing a flash of wrong theme on load.
- Background animation was 100 absolutely-positioned DOM nodes, mounted twice.
- Typewriter and mouse-parallax called `setState` on every tick and every mouse move.
- Every component was `'use client'`.
- Half the built components were never rendered on the page.

### Goals

Lightweight, minimalist, clean, modern, fully responsive. Restrained but not boring — interest comes from typography, spacing, and motion, never from decoration.

### Budgets (treat as acceptance criteria)

| Metric | Target |
|---|---|
| Initial JS, gzipped | < 120 KB |
| Lighthouse mobile performance | ≥ 95 |
| LCP | < 2.0s |
| CLS | 0 (including on theme load) |
| Accessibility | ≥ 95, keyboard navigable end to end |

---

## 2. Stack

Locked. Do not substitute or add without asking.

- **Next.js (App Router) + TypeScript** — server components by default
- **Tailwind CSS v4 + DaisyUI** — DaisyUI is zero-JS and its `data-theme` system handles light/dark cleanly
- **`motion`** (Framer Motion's current package) via `LazyMotion` + `domAnimation`, using the `m` component
- **`next-themes`** for theme persistence with no flash
- **`lucide-react`** for icons, imported individually

Not used: HeroUI (bundles its own animation layer, too heavy), full shadcn/ui (redundant with DaisyUI here). Exception: if a modal or sheet is needed, install only `@radix-ui/react-dialog` for correct focus trapping — nothing else from Radix.

No CSS-in-JS. No state management library. No animation library besides `motion`. No chart library.

---

## 3. Design guardrails

These exist because AI-generated UI drifts toward a recognisable template. Treat each as a hard rule. If a rule blocks something you think the design needs, stop and ask rather than working around it.

### 3.1 Forbidden outright

- **Gradients.** No `bg-gradient-*`, no gradient text, no gradient borders, no gradient buttons, no gradient blur blobs. Purple-to-pink, blue-to-cyan, and orange-to-red are the specific offenders. Solid colors only. The single allowed exception is a near-invisible one-color vignette on the page background (same hue, ≤ 4% opacity difference) — and only if it reads as flat at a glance.
- **Emoji and decorative symbols** in UI copy, headings, buttons, section labels, or data files. No 🚀 ✨ 💡 ⚡ 🔥. No `→` or `✓` glued to text as decoration; if an arrow is needed, use a `lucide-react` icon sized to the text.
- **Status / "available for work" pills.** No colored dot, no pulsing ring, no "Currently interning at…" badge. v1 had one; it does not carry over. Availability belongs in the About text as a plain sentence, or nowhere.
- **Glassmorphism** — no `backdrop-blur` frosted cards, no translucent panels over busy backgrounds.
- **Neon and glow** — no `shadow-[color]/50`, no text-shadow glow, no colored outer glow on hover.
- **Particle / starfield / floating-orb backgrounds.** Also no animated mesh, no mouse-following spotlight, no parallax on cursor move.
- **Skill percentage bars or proficiency rings.** Unverifiable and instantly reads as filler.
- **Fake metrics.** No made-up "50+ projects", no visitor counters, no "years of experience" inflated past what the CV supports.
- **Marketing voice.** No "Let's build something amazing together", "Crafting digital experiences", "I turn coffee into code", "passionate about pixel-perfect". Write plainly and in first person.
- **Typewriter effects that animate per character.** The role rotator swaps whole words with a crossfade.
- **3D tilt cards, flip cards, magnetic buttons, custom cursors.**

### 3.2 Color

Neutral-first. Build from DaisyUI's base tokens (`base-100/200/300`, `base-content`) plus exactly **one** accent color, used sparingly: links, focus rings, the active nav item, and at most one button. Everything else is neutral, import and use DaisyUI Color theme
### 3.3 Typography and spacing

Two typefaces maximum, loaded via `next/font`. use Jakarta Sans for UI and body; optionally one mono for code, tags, and dates. No display or script fonts.

Typography carries the design: use real weight contrast (400 body against 600/700 headings) and generous line-height (1.6–1.75 on body). Constrain prose to ~65 characters.

Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px. Nothing outside it. Generous vertical rhythm between sections; whitespace is the primary design tool here.

Borders: 1px, `base-300`. Radius: pick one value (8px or 12px) and use it everywhere. Shadows: at most one very soft neutral elevation, or none — prefer borders.

### 3.4 Motion

Motion is subtle and functional. Someone should notice the page feels smooth, not that it is animated.

- Scroll reveals: `whileInView` with `once: true`, `opacity` and `transform` only. Never animate `width`, `height`, `top`, `left`, or `filter`.
- Distance ≤ 16px. Duration 200–400ms. Easing `easeOut` or a gentle custom cubic-bezier. No spring bounce, no overshoot.
- No stagger longer than 400ms total. No section that animates in piece by piece while the reader waits.
- `layout` animations are permitted for exactly one thing: the project filter.
- `useReducedMotion` must be respected everywhere, with a static, fully legible fallback.
- No looping ambient animation anywhere on the page.

---

## 4. Content and copy rules

- All content lives in `src/data/`. Components never hardcode copy.
- Never invent experience, projects, metrics, or dates. Only what the CV supports. If a field is unknown, leave a clearly marked `TODO` placeholder in the data file — do not fabricate plausible-sounding filler.
- First person, past tense for finished work. Concrete over abstract: what was built, with what, and what it solved.
- Headings are plain nouns: "Experience", "Projects", "Tech stack", "Contact". Not "My Journey", not "What I Bring To The Table".

---

## 5. Architecture

```
src/
  app/
    layout.tsx           # fonts, theme provider, metadata
    page.tsx             # composes all sections
    api/github/route.ts  # cached GitHub stats
  components/
    layout/    navbar, footer, section-shell
    sections/  hero, about, experience, stack, projects, github, contact
    ui/        primitives — card, tag, link, icon-link
    motion/    lazy-motion provider, reveal wrapper
  data/
    profile.ts experience.ts projects.ts stack.ts socials.ts
  lib/
    github.ts  types.ts  utils.ts
```

Server components by default. `'use client'` only in: navbar (scroll + active section), theme toggle, hero role rotator, project filter, motion wrappers. Justify any other client component in a comment.

One `IntersectionObserver` for nav active-state, in the navbar. No `MutationObserver` anywhere.

Below-fold sections use `next/dynamic`. Images use `next/image` with explicit dimensions and AVIF/WebP. Icons imported one by one, never the whole set.

---

## 6. Sections

1. **Navbar** — transparent until scrolled, then a solid `base-100` bar with a bottom border. Anchor links with active state, theme toggle, CV download. Drawer on mobile.
2. **Hero** — name, short role line with a crossfading rotator (Web Developer / Android Developer), one sentence of positioning, two buttons (Projects, Contact), social icons. Flat background. No status pill.
3. **About** — two or three short paragraphs plus a plain facts strip (university, semester, GPA, location, focus). No photo frame effects.
4. **Experience** — vertical timeline, alternating on desktop, single column on mobile. Company, role, dates, 2–3 outcome bullets, tech tags. Organization and certifications render as a compact secondary list in the same section.
5. **Tech stack** — grouped by Languages / Frameworks / Databases / Tools. Icon plus label in a plain grid. No proficiency indicators.
6. **Projects** — card grid, filter All / Web / Android. Each card: image, title, one-line description, tags, GitHub and live links. Filter uses `layout` animation.
7. **GitHub** — contribution heatmap plus a stats row (public repos, stars, top languages). Server-side GraphQL call using a PAT from `.env.local`, ISR `revalidate: 21600`. Render your own SVG grid so it inherits theme tokens — do not embed a third-party stats image. Must degrade to hidden or a plain "unavailable" line on failure; never break the page.
8. **Contact** — email, socials, plain footer.

---

## 7. Prototype scope (this first pass)

Build in this order and stop after step 6 for review:

1. Project scaffold, Tailwind + DaisyUI theme tokens, fonts, `next-themes` with no-flash script
2. `src/data/` populated from the CV, with TODOs where information is genuinely missing
3. Section shell, `ui/` primitives, motion provider and reveal wrapper
4. Navbar, hero, about
5. Experience, tech stack, projects (including filter)
6. Contact and footer

GitHub integration and animation polish come after review. Ship it correct and plain first; motion is the last layer, because a page that only feels good once animated isn't designed well underneath.

---

## 8. Self-check before reporting done

- [ ] Zero gradients in the codebase (grep for `gradient`)
- [ ] Zero emoji in components or data files
- [ ] No status pill, no glow, no blur panels, no particles
- [ ] One accent color, everything else neutral
- [ ] Every value on the spacing scale
- [ ] Reduced-motion path verified
- [ ] Tab through the whole page: visible focus, correct order, drawer traps focus
- [ ] 320px, 768px, 1440px all correct; no horizontal scroll
- [ ] No fabricated content
- [ ] `next build` clean, no console errors or warnings
