# CuanMania Landing Page Generator — PRD / Implementation Plan

## Context

CuanMania is building a clone of SesuaiFormat's "Landing Page Engine" — a web-based AI prompt generator that helps non-technical Indonesian SMBs (UMKM) create professional, high-converting landing page prompts. Users fill a 7-step structured form, click "Generate Prompt", and get a complete AI prompt they can copy or send directly to z.ai to build the actual landing page.

**Business model**: Paid once, free to use forever (no auth for POC).
**Target users**: Non-technical Indonesian SMBs.
**Language**: Bahasa Indonesia throughout.

---

## Tech Stack

- **React + Vite** (same as SesuaiFormat)
- **Tailwind CSS** for styling
- **No backend** — 100% client-side template injection
- **Deploy to Vercel**

---

## UI/UX Summary

- **Light theme** with **green accent** color
- Two-panel layout: form (left 55%) / output (right 45%)
- Mobile: panels stack vertically
- Output panel is **sticky** on desktop
- **Button-click generation** (not real-time) with **typewriter animation** (~8 seconds)
- Copy to clipboard + "Buat Landing Page Sekarang" CTA (copies prompt + opens z.ai in new tab)
- Reset button to clear all fields
- **Validate on generate** — required fields show errors, scroll to first incomplete section
- Sections are **collapsible** (accordion) to reduce scroll fatigue on mobile
- Font: **Plus Jakarta Sans** (designed for Indonesian/Malay contexts)

---

## Project Structure

```
cuanmania/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TwoPanelLayout.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── form/
│   │   │   ├── FormPanel.jsx              # Owns form state, renders all 7 sections
│   │   │   ├── FormSection.jsx            # Reusable numbered section wrapper (collapsible)
│   │   │   ├── SectionFrameworkTone.jsx   # Section 1
│   │   │   ├── SectionProdukTujuan.jsx    # Section 2
│   │   │   ├── SectionTargetMarket.jsx    # Section 3
│   │   │   ├── SectionDetailProduk.jsx    # Section 4
│   │   │   ├── SectionElemenTambahan.jsx  # Section 5
│   │   │   ├── SectionIdentitasVisual.jsx # Section 6
│   │   │   └── SectionPlatformTarget.jsx  # Section 7
│   │   │
│   │   ├── output/
│   │   │   ├── OutputPanel.jsx            # Prompt display + action buttons
│   │   │   └── TypewriterText.jsx         # Typewriter animation component
│   │   │
│   │   └── ui/
│   │       ├── GroupedDropdown.jsx         # <select> with <optgroup>
│   │       ├── PillSelector.jsx           # Multi/single-select pill buttons
│   │       ├── TextInput.jsx
│   │       ├── TextArea.jsx
│   │       ├── Checkbox.jsx               # With conditional child reveal
│   │       └── Button.jsx
│   │
│   ├── data/                              # All dropdown/pill option definitions
│   │   ├── frameworkOptions.js
│   │   ├── toneOptions.js
│   │   ├── productTypeOptions.js
│   │   ├── goalOptions.js
│   │   ├── awarenessOptions.js
│   │   ├── audienceOptions.js
│   │   ├── ctaOptions.js
│   │   ├── scarcityOptions.js
│   │   ├── additionalElements.js
│   │   ├── brandColorOptions.js
│   │   ├── themeOptions.js
│   │   ├── designStyleOptions.js
│   │   ├── heroTypeOptions.js
│   │   └── platformOptions.js
│   │
│   ├── templates/
│   │   └── promptTemplate.js              # Master prompt template function
│   │
│   ├── hooks/
│   │   ├── useFormState.js                # useReducer for all 20+ form fields
│   │   ├── usePromptGenerator.js          # Fallback logic + template injection
│   │   └── useTypewriter.js               # rAF-based typewriter animation
│   │
│   └── utils/
│       ├── fallbacks.js                   # Default text for empty optional fields
│       ├── validation.js                  # Required field checks
│       └── clipboard.js                   # Copy-to-clipboard with fallback
```

---

## Form Sections (7 Steps)

### Section 1: Framework & Tone ★
- **Pilih Framework** (required) — grouped dropdown, 16 options in 4 categories
- **Gaya Bahasa/Tone** (required) — grouped dropdown, 13 options in 4 categories

### Section 2: Produk & Tujuan ★
- **Tipe Produk** (required) — grouped dropdown with "Lainnya (Isi Manual)"
- **Tujuan Utama** (required) — grouped dropdown

### Section 3: Target Market
- **Level Awareness** (required) — dropdown, 5 options
- **Target Audience** (required) — grouped dropdown with "Lainnya (Isi Manual)"
- **3 Pain Points** (optional) — text input

### Section 4: Detail Produk & Copy
- **Nama Produk** (required) — text input
- **Harga Normal** (optional) — text input
- **Harga Promo** (optional) — text input
- **Deskripsi & Benefit Utama** (required) — textarea
- **Keberatan Utama** (optional) — text input
- **Offer Stack/Bonus** (optional) — checkbox → reveals textarea
- **CTA** (required) — dropdown with "Isi Manual"
- **Tipe Scarcity** (required) — dropdown

### Section 5: Elemen Tambahan
- Multi-select pills (all optional): Social Proof, Testimonial, FAQ, Bonus, Guarantee, Scarcity, Comparison, Pricing Table, Timeline, Team

### Section 6: Identitas Visual & Desain
- **Warna Brand Utama** (required) — grouped dropdown with custom hex option
- **Tema Background** (required) — dropdown (Default/Light/Dark)
- **Gaya Desain & Referensi** (required) — grouped dropdown
- **Hero Section Type** (required) — dropdown
- **Sticky Button** (optional) — checkbox

### Section 7: Platform Target
- Single-select pills (required): Scalev, Lynk.id, WordPress, Shopify

---

## Prompt Generation Logic

### How it works
1. User clicks "Generate Prompt"
2. `validation.js` checks all required fields → if any missing, scroll to first error
3. `usePromptGenerator.js` processes raw form state:
   - Resolves "Isi Manual" / "Lainnya" fields to their custom text values
   - Applies fallback text for empty optional fields (from `fallbacks.js`)
   - Derives computed strings (scarcityLogic, stickyLogic, themeText, etc.)
4. Processed data is injected into `promptTemplate.js` template literal
5. Result string is passed to `OutputPanel` → `TypewriterText` for animated display

### Optional Field Fallbacks
| Field | Fallback when empty |
|-------|-------------------|
| Pain Points | "Tidak dispesifikan, harap riset mandiri." |
| Harga Normal | "Tidak disebutkan" |
| Harga Promo | "Tidak ada promo" |
| Keberatan Utama | "Umum (Harga/Kualitas)." |
| Bonus | "Tidak ada bonus tambahan." |
| Scarcity = "Tidak Ada" | kelangkaan "None" |
| Elemen Tambahan (none) | "Gunakan struktur standar sesuai framework." |
| Sticky unchecked | "Tidak perlu sticky button." |

### Prompt Template
Based on the SesuaiFormat sample output — a structured prompt with sections:
1. **Role assignment** (Senior Conversion Copywriter)
2. **Task description** (write landing page HTML)
3. **13 layout/writing rules** (with variable injections for theme, hero type, sticky, scarcity, awareness, tone)
4. **Product & market profile** (name, category, audience, goal, framework)
5. **Audience psychology** (pain points, objections)
6. **Offer stack** (pricing, bonus, CTA)
7. **Page structure** (platform-specific, framework-driven flow, additional sections)
8. **Output instruction** (HTML + Tailwind + design style + brand color)

Simple name injection for all config values — no per-framework custom templates.

---

## Key Architectural Decisions

1. **`useReducer`** for form state — single flat state object with ~20 fields, `SET_FIELD` and `RESET` actions
2. **No Context API** — state only flows 2 levels deep (FormPanel → Section → UI), direct props suffice
3. **Native `<select>` + `<optgroup>`** — pragmatic choice for POC, works great on mobile
4. **`requestAnimationFrame`** for typewriter — smoother than setInterval, uses ref for character index to avoid re-render thrashing
5. **Validate on generate only** — non-punishing UX for non-technical users
6. **Collapsible sections** — reduce scroll fatigue, especially on mobile
7. **z.ai CTA (POC)**: Copy prompt to clipboard + open `z.ai` in new tab (user pastes manually). SesuaiFormat uses a backend API integration to create chat sessions — we'll add this later. For now: `window.open()` first (sync, avoids popup blocker), then `clipboard.writeText()` (async). Show toast: "Prompt berhasil di-copy! Paste di z.ai untuk mulai."

---

## Implementation Phases

### Phase 1: Scaffolding
- Init Vite + React project
- Install/configure Tailwind with green accent palette
- Set up Plus Jakarta Sans font
- Create App.jsx shell with layout components

### Phase 2: Data Layer
- Create all 14 data files in `src/data/`
- Create `fallbacks.js` and `validation.js`

### Phase 3: UI Primitives
- Build GroupedDropdown, PillSelector, TextInput, TextArea, Checkbox, Button
- Build FormSection wrapper (collapsible, numbered indicator)

### Phase 4: Form State
- Build `useFormState.js` with useReducer
- Wire up FormPanel.jsx

### Phase 5: Section Components
- Build all 7 section components
- Handle "Isi Manual" conditional text inputs
- Handle checkbox-conditional textarea (Bonus)

### Phase 6: Prompt Template Engine
- Build `promptTemplate.js` (master template)
- Build `usePromptGenerator.js` (fallback processing + template injection)

### Phase 7: Output Panel + Typewriter
- Build `useTypewriter.js` hook
- Build TypewriterText + OutputPanel
- Implement Copy and CTA buttons
- Auto-scroll to output on mobile after generation

### Phase 8: Polish & Responsive
- Mobile responsive breakpoints
- Sticky output panel on desktop
- Validation UX (error highlighting, scroll to first error)
- Reset button with confirmation
- Overall styling pass

### Phase 9: Deploy
- Production build verification
- Deploy to Vercel

---

## Verification / Testing

1. **Form interaction**: Fill all 7 sections, verify all dropdowns/pills/inputs work correctly
2. **Validation**: Click Generate with required fields empty → verify error highlighting and scroll-to-first-error
3. **Prompt output**: Compare generated prompt against the SesuaiFormat sample output format — verify all variables are injected correctly
4. **Fallbacks**: Leave optional fields empty → verify fallback text appears in prompt output
5. **"Isi Manual"**: Select "Lainnya" in dropdowns → verify custom text input appears and its value is used in prompt
6. **Typewriter**: Verify animation runs ~8 seconds, auto-scrolls, and can be skipped by clicking
7. **Copy button**: Verify prompt is copied to clipboard (test on HTTPS/Vercel)
8. **CTA button**: Verify prompt is copied AND z.ai opens in new tab
9. **Reset**: Verify all fields clear and output panel resets
10. **Mobile**: Test on mobile viewport — panels stack, sections collapse, sticky button works
11. **Vercel deploy**: Verify production build works on Vercel
