# LP Generator

**Owner:** Taza (Taftazani Aulia) — digital product builder and nutritionist based in Singapore.

**Live app:** https://profitmania.taza.me (GitHub → Vercel auto-deploy)

---

## What this is

A React form app that generates a ~600-line prescriptive HTML prompt — one per business type. User fills the form, copies the prompt, pastes into Z.AI, gets a complete single-file HTML landing page.

**Why it works:** the prompts don't just describe a page ("build a page with these sections") — they encode every CSS value, JS pattern, and layout decision, so Z.AI only decides what copy to write. Output looks designed, not AI-generated. All UI text and generated page copy are in English.

---

## Project structure

```
lp-generator/
├── src/
│   ├── templates/
│   │   ├── base.ts                  ← ~600-line shared prompt with {{placeholders}}
│   │   ├── index.ts                 ← selectModules() + buildTemplate()
│   │   ├── interpolate.ts           ← resolveColors() + interpolate()
│   │   └── modules/
│   │       ├── typeA.ts             ← Course: S5=curriculum, S7=coach record
│   │       ├── typeB.ts             ← Digital product: S5=content breakdown, S7=buyer results
│   │       ├── typeC.ts             ← Agency: S5=process steps, S7=portfolio stats
│   │       ├── typeD.ts             ← Physical product: S5=ingredients, S7=reviews
│   │       ├── typeE.ts             ← SaaS: S5=feature grid, S7=dashboard screenshots
│   │       └── typeF.ts             ← Event: S5=agenda, S7=speaker profiles
│   ├── data/
│   │   ├── colorPaletteOptions.ts   ← 10 preset palettes (accent + gradient + lightBg)
│   │   ├── accessTypeOptions.ts
│   │   ├── programDurationOptions.ts
│   │   ├── toneOptions.ts           ← 8 options
│   │   ├── ctaOptions.ts
│   │   ├── scarcityOptions.ts
│   │   ├── audienceOptions.ts
│   │   └── awarenessOptions.ts
│   ├── hooks/
│   │   └── useFormState.ts          ← 16-field FormState with useReducer
│   ├── utils/
│   │   ├── validation.ts            ← validateForm() + getStepCompletion()
│   │   ├── fallbacks.ts             ← painPoints + objections fallback strings
│   │   └── clipboard.ts
│   └── components/
│       ├── form/
│       │   ├── FormPanel.tsx        ← Orchestrator: wires 7 section components
│       │   ├── FormSection.tsx      ← Numbered section wrapper with completion indicator
│       │   ├── SectionTemplateType.tsx  ← Step 0: 2×3 card grid, gates rest of form
│       │   ├── SectionIdentity.tsx  ← Step 1: brand/product name
│       │   ├── SectionProduct.tsx   ← Step 2: format, selling points, duration (A only)
│       │   ├── SectionOffer.tsx     ← Step 3: price, access type, CTA, scarcity, objections
│       │   ├── SectionAudience.tsx  ← Step 4: awareness, audience, tone, pain points
│       │   ├── SectionColors.tsx    ← Step 5: palette picker with color swatches
│       │   └── SectionDeployment.tsx ← Step 6: checkout anchor
│       ├── ui/                      ← TextInput, TextArea, GroupedDropdown, etc.
│       ├── layout/                  ← Header, HeroSection, TwoPanelLayout, Footer
│       └── output/
│           ├── OutputPanel.tsx      ← Typewriter display (1500ms), copy button, Z.AI CTA
│           └── TypewriterText.tsx
└── templates/                       ← Human-readable markdown source files
    ├── a-digital-course.md
    ├── b-digital-product.md
    ├── c-service-agency.md
    ├── d-physical-product.md
    ├── e-saas-software.md
    └── f-event-webinar.md
```

---

## How it works

```
User fills form (7 steps)
  ↓
validateForm() — checks required + conditional fields
  ↓
selectModules(templateType) → { s5, s7, storageKey, popupVerb }
  ↓
buildTemplate(mod) → replaces {{section5}}, {{section5Id}}, {{section7}}, {{storageKey}}, {{popupVerb}}
  ↓
resolveColors(colorPalette) → { accent, accentRgb, gradient, lightBg }
  ↓
interpolate(template, state, colors) → final ~600-line prompt
  ↓
OutputPanel displays with 1500ms typewriter animation
  ↓
User copies prompt → pastes into Z.AI → gets single-file HTML
```

---

## FormState fields

| Field | Type | Required | Notes |
|---|---|---|---|
| `templateType` | `'A'–'F'` | ✓ | Gates rest of form |
| `brandProductName` | string | ✓ | Brand name, product name, or both |
| `productFormat` | string | ✓ | e.g. "5 video modul + ebook + 3 bonus" |
| `keySellingPoints` | string | ✓ | Core promise + 3–5 differentiators |
| `programDuration` | dropdown | A only | 4/6/8/12 Minggu etc. |
| `programDurationCustom` | string | if "Lainnya" | Free text |
| `price` | string | ✓ | e.g. "$49" |
| `originalPrice` | string | — | Crossed-out price |
| `accessType` | dropdown | ✓ | Lifetime / Monthly / etc. |
| `ctaText` | dropdown | ✓ | 7 options + custom |
| `ctaCustom` | string | if "Isi Manual" | Free text |
| `scarcityType` | dropdown | ✓ | None / Timer / Quantity / Price up |
| `objections` | string | — | Feeds FAQ instructions |
| `awarenessLevel` | dropdown | ✓ | Unaware → Most Aware |
| `targetAudience` | dropdown | ✓ | Grouped by category |
| `targetAudienceCustom` | string | if "Lainnya" | Free text |
| `tone` | dropdown | ✓ | 8 simplified options |
| `painPoints` | string | — | Feeds hero + problem reframe |
| `colorPalette` | dropdown | ✓ | 10 presets with swatches |
| `checkoutAnchor` | string | ✓ | Default `#pricing` |

---

## Template design system (what the prompt encodes)

Every template uses the same Apple-inspired design system — Z.AI cannot deviate from it:

| Decision | Value |
|---|---|
| Font | System stack only — no external fonts |
| Buttons | `border-radius: 999px` (pill shape) |
| Cards | `border-radius: 20–22px` |
| Section rhythm | Light → Dark → Light → Dark → Light → Light → Light → Dark → Light |
| Breakpoints | **Only 3:** 480px, 640px, 840px |
| Dark backgrounds | `#000` and `#0b0c10` |
| Colors | Resolved from the selected `colorPalette` |
| Gradient text | `.grad` utility class on headings |
| Gradient border | `padding-box` technique on featured cards |

### Template divergence points

Only Sections 5 and 7 differ between the 6 business types. Everything else is shared:

| Type | Section 5 | Section 7 | Popup verb | localStorage key |
|---|---|---|---|---|
| A — Course | Curriculum module grid | Coach track record slider | "just bought" | `tnWLCountdownEnd_v1` |
| B — Digital Product | Content breakdown grid | Buyer results slider | "just downloaded" | `dpCountdownEnd_v1` |
| C — Agency/Service | Numbered process steps | Portfolio stats slider | "just booked a session with" | `svcCountdownEnd_v1` |
| D — Physical Product | Ingredient/feature cards | Product shots + reviews | "just ordered" | `physCountdownEnd_v1` |
| E — SaaS | Icon feature grid + integrations | Dashboard screenshots + metrics | "just started their trial of" | `saasCountdownEnd_v1` |
| F — Event/Webinar | Agenda / session schedule | Speaker profiles + past event proof | "just registered for" | `evtCountdownEnd_v1` |

---

## What good Z.AI output looks like

**Good signs:**
- Each section has a distinct background (alternating light/dark)
- Buttons are pill-shaped (`border-radius: 999px`)
- Gradient text on key heading words
- Marquee animates on load
- Countdown timer counts down
- Social proof popup appears at 5 seconds
- No external fonts or CSS frameworks in `<head>`

**Bad signs (re-run or tweak the prompt):**
- All sections same color/style
- Square buttons instead of pills
- Google Fonts `<link>` in `<head>`
- Static countdown display
- Generic copy ("Welcome to our platform")

---

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

---

## Key constraints (do not change without understanding consequences)

1. **localStorage keys per template** — changing resets countdown timers for existing visitors
2. **Section IDs in generated HTML** — anchor links throughout the page depend on them. Shared ids live in `base.ts`; each module's `section5Id` must match the `id` its `s5` declares (base links such as "See What's Inside" use `#{{section5Id}}`)
3. **`base.ts` placeholder names** — must match keys in `interpolate.ts` `values` object exactly
4. **3 breakpoints only** (480/640/840px) — all responsive rules are tuned to these
5. **`colorPaletteOptions.ts`** — the `value` field is the key used by `resolveColors()`, don't rename

---

## Templates reference (markdown source)

The `templates/` folder contains human-readable versions of each template for verification and future editing. When modifying Section 5 or Section 7 for a business type, edit the markdown file first, validate in Z.AI, then port to the corresponding `src/templates/modules/typeX.ts`.
