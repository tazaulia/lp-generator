# LP Generator — Claude Context

## What this project is

A **React form app** (Vite + TypeScript + Tailwind CSS 4) that generates a ~600-line prescriptive HTML prompt — one per business type. User fills the 7-step form, copies the prompt, pastes into Z.AI, and gets a complete single-file HTML landing page.

**Owner:** Taza (Taftazani Aulia)  
**Live:** https://profitmania.taza.me (Vercel, GitHub → auto-deploy)  
**Language:** All UI text and generated page copy are English, with no country-specific references.  
**Status:** All 6 templates complete (A–F). All form components built. App is functional.

---

## File map

```
lp-generator/
├── readme.md                    ← Full context, design decisions, usage guide
├── templates/                   ← Human-readable markdown source (all 6 complete)
│   ├── a-digital-course.md
│   ├── b-digital-product.md
│   ├── c-service-agency.md
│   ├── d-physical-product.md
│   ├── e-saas-software.md
│   └── f-event-webinar.md
└── src/
    ├── templates/
    │   ├── base.ts              ← ~600-line shared prompt with {{placeholders}}
    │   ├── index.ts             ← selectModules() + buildTemplate()
    │   ├── interpolate.ts       ← resolveColors() + interpolate()
    │   └── modules/
    │       ├── typeA.ts         ← Course: S5=curriculum, S7=coach record
    │       ├── typeB.ts         ← Digital product: S5=content breakdown, S7=buyer results
    │       ├── typeC.ts         ← Agency: S5=process steps, S7=portfolio stats
    │       ├── typeD.ts         ← Physical product: S5=ingredients, S7=reviews
    │       ├── typeE.ts         ← SaaS: S5=feature grid, S7=dashboard screenshots
    │       └── typeF.ts         ← Event: S5=agenda, S7=speaker profiles
    ├── data/
    │   ├── customOption.ts          ← CUSTOM_OPTION: the "Other (type your own)" dropdown value
    │   ├── colorPaletteOptions.ts   ← 10 preset palettes
    │   ├── accessTypeOptions.ts
    │   ├── programDurationOptions.ts
    │   ├── toneOptions.ts
    │   ├── ctaOptions.ts
    │   ├── scarcityOptions.ts
    │   ├── audienceOptions.ts
    │   └── awarenessOptions.ts
    ├── hooks/
    │   └── useFormState.ts      ← 20-field FormState with useReducer
    ├── utils/
    │   ├── validation.ts        ← validateForm() + getStepCompletion()
    │   ├── fallbacks.ts         ← painPoints + objections fallback strings
    │   └── clipboard.ts
    └── components/
        ├── form/
        │   ├── FormPanel.tsx           ← Orchestrator: wires 7 section components
        │   ├── FormSection.tsx         ← Numbered section wrapper with completion indicator
        │   ├── SectionTemplateType.tsx ← Step 0: 2×3 card grid, gates rest of form
        │   ├── SectionIdentity.tsx     ← Step 1: brand/product name
        │   ├── SectionProduct.tsx      ← Step 2: format, selling points, duration (A only)
        │   ├── SectionOffer.tsx        ← Step 3: price, access, CTA, scarcity, objections
        │   ├── SectionAudience.tsx     ← Step 4: awareness, audience, tone, pain points
        │   ├── SectionColors.tsx       ← Step 5: palette picker with color swatches
        │   └── SectionDeployment.tsx   ← Step 6: checkout anchor
        ├── ui/
        ├── layout/
        └── output/
            ├── OutputPanel.tsx         ← Typewriter display (1500ms), copy, Z.AI CTA
            └── TypewriterText.tsx
```

---

## How the prompt pipeline works

```
FormState (20 fields)
  ↓ validateForm()
  ↓ selectModules(templateType) → { s5, s7, storageKey, popupVerb }
  ↓ buildTemplate(mod)          → base.ts with {{section5}}, {{section5Id}}, {{section7}} filled
  ↓ resolveColors(colorPalette) → { accent, accentRgb, gradient, lightBg }
  ↓ interpolate(template, state, colors) → final ~600-line prompt
  ↓ OutputPanel displays with 1500ms typewriter
  ↓ User copies → pastes into Z.AI → single-file HTML
```

**Template architecture:** Only Sections 5 and 7 differ across business types. Everything else is in the shared `base.ts`. Assembly: `selectModules` → `buildTemplate` injects S5/S7 → `interpolate` resolves all remaining `{{placeholders}}`.

---

## Template divergence (S5 + S7 per type)

| Type | Section 5 | Section 7 | Popup verb | localStorage key |
|---|---|---|---|---|
| A — Course | Curriculum grid | Coach record slider | "just bought" | `tnWLCountdownEnd_v1` |
| B — Digital Product | Content breakdown | Buyer results slider | "just downloaded" | `dpCountdownEnd_v1` |
| C — Agency | Process steps | Portfolio stats slider | "just booked a session with" | `svcCountdownEnd_v1` |
| D — Physical Product | Ingredient cards | Reviews + shots | "just ordered" | `physCountdownEnd_v1` |
| E — SaaS | Feature grid | Dashboard screenshots | "just started their trial of" | `saasCountdownEnd_v1` |
| F — Event | Agenda schedule | Speaker profiles | "just registered for" | `evtCountdownEnd_v1` |

---

## Hard constraints (do not change without understanding consequences)

1. **localStorage keys per template** — changing resets countdown timers for existing visitors
2. **Section `id` attributes in generated HTML** — anchor links throughout page depend on them; each module's `section5Id` must match the `id` in its `s5`
3. **`base.ts` placeholder names** — must match keys in `interpolate.ts` `values` object exactly
4. **3 breakpoints only:** 480px, 640px, 840px — all responsive rules tuned to these
5. **`colorPaletteOptions.ts` `value` field** — used as key by `resolveColors()`, don't rename
6. **No external fonts/CSS frameworks** — generated HTML is single-file, system fonts only

---

## What good Z.AI output looks like

**Good:** alternating light/dark sections · pill buttons (999px radius) · gradient text on headings · marquee animates · countdown counts · popup appears at 5s · no external imports in `<head>`

**Bad:** all sections same background · square buttons · Google Fonts link · static countdown · regular borders on featured cards · generic copy ("Welcome to our platform")

---

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

---

## When modifying templates

- To change Section 5 or 7 for a business type: edit the markdown file in `templates/` first, validate in Z.AI, then port to `src/templates/modules/typeX.ts`
- Never change `base.ts` placeholder names without also updating `interpolate.ts` `values` object
- The markdown files in `templates/` are the human-readable source of truth for what the TypeScript modules encode
