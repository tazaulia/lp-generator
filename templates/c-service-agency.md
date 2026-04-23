Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Agency / Freelancer name:** [e.g. Kreasi Digital Studio / Dimas Pratama]
- **Service name:** [e.g. Jasa Desain Landing Page Premium]
- **Service type / deliverables:** [e.g. custom landing page design + copywriting + Figma file + 2 rounds of revision]
- **Core outcome promise:** [e.g. a landing page that converts visitors into paying customers]
- **Key differentiators (3):** [e.g. mobile-first, conversion-tested layouts, delivered in 7 days]
- **Typical turnaround:** [e.g. 7 working days]
- **Provider credentials:** [e.g. 4 years experience, 80+ projects delivered, former UI designer at Tokopedia]
- **Client result metric:** [e.g. 80+ projects delivered, average client conversion rate up 3x]
- **Price:** [e.g. Rp 1.500.000]
- **Original / crossed-out price:** [e.g. Rp 3.000.000]
- **Access type:** [e.g. one-time project fee, no monthly retainer]
- **Language:** [e.g. Indonesian (Bahasa Indonesia)]
- **Tone:** [e.g. professional but approachable, honest, no hype]
- **Accent color:** [e.g. #0a84ff]
- **Gradient (3 stops):** [e.g. linear-gradient(135deg, #0a84ff, #5ac8fa, #64d2ff)]
- **Light background:** [e.g. #f5f5f7]
- **Dark background:** [e.g. #000 and #0b0c10]
- **Checkout / order anchor:** [e.g. #pricing]

---

## DESIGN SYSTEM — apply globally, do not deviate

**Font:** System font stack only — `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif`

**Global reset:**
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: [system stack above]; background: [light bg]; color: #0b0b0f; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
a { text-decoration: none; }
img { display: block; max-width: 100%; }
```

**Gradient text utility `.grad`:**
```css
.grad {
  background: [gradient from variables];
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Buttons:** always `border-radius: 999px` (pill shape), `font-weight: 700–800`

**Primary CTA button:**
`background: [accent color]; color: #fff; padding: 14–15px 24–30px; box-shadow: 0 14px 34px rgba([accent color rgb], .28); transition: filter .15s ease, transform .15s ease;`
On hover: `filter: brightness(1.07); transform: translateY(-1px);`

**Cards:** `border-radius: 20–22px`, white background on light sections

**Gradient border technique** — used on featured/bonus cards:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            [gradient from variables] border-box;
```

**Section rhythm:** LIGHT → DARK → LIGHT → DARK → LIGHT → LIGHT → LIGHT → DARK → LIGHT

**Responsive breakpoints — only these three, no others:** `480px`, `640px`, `840px`

---

## SECTIONS

Build in this exact order.

---

### SECTION 1 — HERO (light background)

`id="hero"` · `padding: 36px 18px 44px`

Centered column, `max-width: 580px`, `text-align: center`.

**1a. Pill badge**
`border-radius: 999px; background: rgba(0,0,0,.05); font-size: 13px; font-weight: 600; color: rgba(0,0,0,.65); padding: 10px 16px; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px`

Contains a pulsing accent-color dot (`width: 8px; height: 8px; border-radius: 50%; background: [accent]; box-shadow: 0 0 0 4px rgba([accent rgb], .15)`) followed by text.

Copy: write 3 short trust signals using the key differentiators from variables, separated by ·

**1b. H1 headline**
`font-size: 38px` (48px on ≥640px) · `font-weight: 800` · `letter-spacing: -0.025em` · `line-height: 1.1` · `margin-bottom: 16px`

Write 2 lines:
- Line 1 (plain): a bold, 5–7 word statement of the core outcome for the client
- Line 2 (wrapped in `.grad`): the biggest differentiator — what makes this service different and how fast

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences: who provides this service, their credentials, what they've delivered, and one specific result metric (client count + average outcome improvement).

**1d. Provider credibility strip**
Flex row, centered, `gap: 14px; margin-bottom: 8px`:
- Round provider photo `100×100px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 4px 20px rgba(0,0,0,.12)` — use `https://placehold.co/100x100`
- Portfolio sample image `width: 120px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.1)` — represents a sample of past work (screenshot of a landing page, design mockup, etc.)

Below strip: `font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center`
Write: Provider full name · Specialty or role title

**1e. CTA button** → `href="#proses"`
Write a curiosity-driven question asking how the service process works — conversational (e.g. "How Does the Process Work?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write a soft 8–10 word nudge to see what's included before deciding.

**1f. Auto-scroll portfolio marquee**
Container: `max-width: 900px; margin: 38px auto 34px; overflow: hidden`
On mobile (≤640px): break out to full viewport — `width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw)`

Inner `.track`: `display: flex; gap: 16px; width: max-content; animation: marqueeScroll 32s linear infinite`

```css
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) { .track { animation: none; } }
```

Each photo card `.shot`: `width: 200px` (230px on ≥640px) · `aspect-ratio: 4/5` · `border-radius: 20px` · `box-shadow: 0 20px 50px rgba(0,0,0,.16)` · `background: #e0e0e0 center/cover no-repeat; flex: 0 0 auto`

Add a subtle inner border via `::after`: `inset: 0; border-radius: 20px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.3)`

Use 4–6 placeholder images (`https://placehold.co/200x250`) representing portfolio work samples, then duplicate the exact same set for seamless infinite loop. Apply as `background-image` inline style.

**1g. Benefit card** (dark panel, bottom of hero section)
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto`

Title: `color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px`
Write: what makes this service different from hiring any random freelancer — one line.

4 list items in a CSS grid, `gap: 10px`:
- Each item: `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px`
- Icon circle: `width: 18px; height: 18px; border-radius: 50%; background: rgba([accent rgb], .22); border: 1px solid rgba([accent rgb], .45)` — contains accent-color SVG checkmark

Write 4 short differentiator statements: proven conversion-focused approach, fast and clear process, unlimited support during the project, real results backed by a track record.

---

### SECTION 2 — WHAT IS THIS SERVICE? (dark background #000)

`id="layanan"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** `font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px`
  Write a simple 4–6 word question: "What exactly do you get?"

- **Highlight line:** `font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4`
  Write one sentence: "In short, this is a [service type] designed to [core outcome]." Wrap the service type in `.grad`.

- **Description paragraph:** `font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px`
  List the exact deliverables (number of pages, files, rounds of revision), the turnaround time, what format they receive it in, and what access/follow-up support is included. Use `<br>` and `<strong>` for emphasis on the turnaround time and delivery format.

- **4 feature list items** — same card style as Section 1 benefit card but `border: 1px solid rgba(255,255,255,.12)` · `max-width: 420px; margin: 0 auto 20px`
  Write 4 credibility bullets: (1) number of clients served and average result achieved, (2) what makes the process simple and fast for the client, (3) provider credentials and past company/client experience, (4) the comprehensive nature of the deliverables (not just design — strategy, copy, and assets included).

- **Two CTA buttons** — `display: flex; gap: 14px; justify-content: center; flex-wrap: wrap`
  - Ghost/outline button → `href="#testimoni-awal"` — Write "See Client Testimonials" equivalent
  - Filled accent button → `href="#proses"` — Write "See How the Process Works" equivalent

  Ghost style: `background: transparent; color: [accent]; border: 1px solid rgba([accent rgb], .6)` — hover fills accent solid
  Filled style: `background: [accent]; color: #fff; box-shadow: 0 14px 34px rgba([accent rgb], .32)`

---

### SECTION 3 — CLIENT TESTIMONIALS (light background)

`id="testimoni-awal"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** `font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px`
  Write a 5–7 word headline: "Clients who've gotten real results."

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px`
  Write: "Swipe left–right to read their experience."

**Horizontal swipe card strip:**
`display: flex; gap: 16px; overflow-x: auto; padding: 6px 10px 16px; margin: 0 -10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none`
On ≥840px: `justify-content: center; overflow-x: visible; padding: 0; margin: 0`

Each `.testi-card`: `flex: 0 0 auto; width: 290px` (280px on desktop) · `background: #fff; border-radius: 22px; padding: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.08); text-align: left; scroll-snap-align: center; border: 1px solid rgba(0,0,0,.05)`

4 testimonial cards. Each contains:

**Label** — `font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 8px`
Use one of these colors per card in order: `#34c759` (green), `#0a84ff` (blue), `#af52de` (purple), `#ff9f0a` (orange)

Write a specific measurable outcome label (e.g. CONVERSION UP 3X, LAUNCH IN 5 DAYS, ROI IN 30 DAYS)

**Photo container:** `aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px; border: 1px solid rgba(0,0,0,.06)`
Use `https://placehold.co/290x387` — these represent a screenshot of the delivered work or the client's business results.

**Quote:** `font-size: 13px; line-height: 1.5; color: #111; font-weight: 600; margin-bottom: 6px`
Write 4 authentic first-person quotes. Each must: mention a specific business result, express relief that the process was fast and easy, sound like a real business owner (not marketing copy). Use the brand tone.

**Name:** `font-size: 12px; color: rgba(0,0,0,.52)`
Write: — [Common Indonesian first name], [business type e.g. UMKM pemilik toko online]

---

Below cards: `font-size: 11px; color: rgba(0,0,0,.42); margin: 16px 0 22px`
Write 1 sentence: this service has helped businesses across different industries — name 2–3 types (e.g. online stores, coaches, local food brands).

CTA button → `href="#kenapa-gagal"` — Write a question pointing to why cheap solutions fail.

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="kenapa-gagal"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px`
  Write 2 lines: Line 1 — empathetic reframe ("Tried hiring someone cheap before? You're not alone."), Line 2 with `.grad` — the real cause ("Wrong approach. Wrong result.").

- **Subtext:** `font-size: 15px; color: rgba(255,255,255,.65); max-width: 580px; margin: 0 auto 34px; line-height: 1.6`
  Write 2 sentences: most failed projects aren't the client's fault — they came from choosing based on price alone without understanding what a conversion-focused deliverable requires.

**2-column comparison grid** — 1 col on mobile, 2 col on ≥640px, `gap: 16px; margin-bottom: 28px`

Each card: `background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 18px; text-align: left`

**Left card — THE CHEAP SHORTCUT:**
Badge: `background: rgba(239,68,68,.14); color: #f87171; border-radius: 999px; padding: 5px 12px; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px`
Write: "THE CHEAP SHORTCUT" (or local language equivalent)

5 items with red ✕ icon circle:
Write 5 problems of hiring cheap: vague briefs with no strategy / generic templates that look the same as everyone else / slow revisions and poor communication / no understanding of conversion or copywriting / end up redoing it all from scratch

**Right card — THIS SERVICE:**
Badge: `background: rgba([accent rgb], .18); color: #60a5fa; border-radius: 999px` — same size/style
Write: "THIS SERVICE"

5 items with blue ✓ icon circle:
Write the exact inverse: structured briefing session upfront / custom design built around your brand and audience / fast turnaround with clear communication / conversion-first approach — every decision tied to results / one complete package, delivered properly the first time

- **Provider note:** `font-size: 13px; color: rgba(255,255,255,.45); margin: 28px 0; line-height: 1.6`
  Write 1–2 sentences: provider name + credentials + years of experience + a note that the process is designed to be smooth for the client with minimal back-and-forth.

CTA button → `href="#proses"` — Write "See How the Process Works" equivalent.

---

### SECTION 5 — PROCESS / HOW WE WORK TOGETHER (light background)

`id="proses"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px`
  Write: "How We Work" on line 1, then "Together" on line 2 wrapped in `.grad`.

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px`
  Write: turnaround time — one clear line (e.g. "From brief to delivery in 7 working days.").

**Numbered process step list — vertical stack on mobile, 2×2 grid on ≥640px:**
`display: grid; grid-template-columns: 1fr; gap: 14px`
On ≥640px: `grid-template-columns: 1fr 1fr`

Each `.step-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- Step number: `font-size: 36px; font-weight: 900; line-height: 1; margin-bottom: 10px` — use `.grad` class for gradient number
- Label: `font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 8px; color: rgba(0,0,0,.45)`
- Title: `font-size: 17px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 8px`
- Description: `font-size: 13px; line-height: 1.65; color: rgba(0,0,0,.6)`

Write 5 process steps (steps 1–4 in 2×2 grid; step 5 full-width below):

- **Step 1 — Brief & Discovery:** client fills a structured brief form covering their product, audience, goals, and brand preferences. Takes 15–20 minutes. Provider reviews and follows up with any questions before starting.
- **Step 2 — Strategy & Wireframe:** provider researches the target market and maps out the page structure — section order, messaging hierarchy, CTA placement — based on conversion best practices. Client approves before design begins.
- **Step 3 — Design & Copywriting:** full visual design and conversion-focused copy are created simultaneously. Client receives the full page draft for review within the agreed turnaround window.
- **Step 4 — Revision & Refinement:** client provides feedback. Up to 2 rounds of revision included. Provider implements changes and delivers the final polished version.
- **Step 5 — Delivery & Handoff (full-width):** client receives all agreed deliverables: HTML file, Figma source file, image assets. Provider remains available for 7 days post-delivery for minor adjustments or questions.

**Bonus card** — full-width, below steps (`margin-top: 14px`):

Uses gradient border technique:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, [accent color], #34d399) border-box;
```

Header: flex row with pill badge — write "INCLUDED" (or local equivalent) — and title — write "What's in the Full Package" (or local equivalent).

3 list items with emoji icons, `font-size: 13px; font-weight: 600; color: #0b0b0f; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,.06)` (last item: no border):
Write 3 key deliverables from the variables: the main file type, the source file, and any bonus support item (e.g. image assets, copywriting notes, or a 7-day post-delivery support window).

---

### SECTION 6 — PRICING (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** `font-size: 28px` (32px ≥640px) · `font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px`
  Write a first-person ordering headline — "I want to order and get started immediately" in the page language.

**Single product card** — gradient border, `max-width: 480px; margin: 0 auto`:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, #34d399, #3b82f6) border-box;
border-radius: 22px; padding: 24px 20px;
```

Service name: `font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em; margin: 0 0 6px`
Write the service name from variables.

**Feature list** — `display: grid; gap: 10px; margin: 0 0 18px` — 6 items, each with a green circle SVG checkmark:
`font-size: 13px; line-height: 1.45; color: #111827; display: flex; align-items: flex-start; gap: 10px`

Write 6 deliverable bullets. The last 2 items use highlighted style: `background: #f0fdf4; padding: 10px 12px; border-radius: 12px`

The 6 items should cover: main deliverable(s), number of revision rounds, turnaround time, bonus extras, access/support period, and one key differentiator (what makes this the right choice for the buyer right now).

**Provider credential strip** — inside card, above price:
`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Round provider photo `38×38px; border-radius: 50%` — use `https://placehold.co/38x38`
- Provider name: `font-size: 12px; font-weight: 800; color: #0f172a` — write "Provider Name · Role or Specialty"
- Portfolio link: `font-size: 11px; color: #2563eb; font-weight: 600` — write "See Portfolio ↗" (or local equivalent)

**Price row:** `display: flex; align-items: baseline; gap: 10px; margin: 0 0 16px`
- Current price: `font-size: 22px; font-weight: 900; color: #0f172a` — from variables
- Struck-out price: `font-size: 14px; color: #9ca3af; text-decoration: line-through` — from variables

Note: `font-size: 12px; color: #6b7280; text-align: center; margin: 10px 0 0` — Write: "One-time project fee. No monthly retainer."

**Countdown timer** — below the card, centered:

`max-width: 420px; width: 100%`
Glass card: `background: rgba(255,255,255,.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.72); box-shadow: 0 12px 30px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.85); border-radius: 22px; padding: 16px 18px 20px; text-align: center`

Top row: pulsing red dot + label — write "Promo price expires in" (or local equivalent)

```css
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 4px rgba(239,68,68,.12); }
  50% { box-shadow: 0 0 0 6px rgba(239,68,68,.04); }
}
```

Timer: `font-size: 36px; font-weight: 900; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; color: #0f172a` — id="pricingCountdownTime" — displays `HH:MM:SS`

On ≤480px: `padding: 14px 14px 18px; border-radius: 18px` and timer `font-size: 28px`

**Countdown JavaScript** — IIFE at end of `<body>`:
```js
(function () {
  var STORAGE_KEY = 'svcCountdownEnd_v1';
  var DURATION_MS = 1 * 60 * 60 * 1000; // 1 hour — adjust as needed

  function getEndTime() {
    var stored = localStorage.getItem(STORAGE_KEY);
    var now = Date.now();
    if (!stored || isNaN(Number(stored)) || Number(stored) <= now) {
      var end = now + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, String(end));
      return end;
    }
    return Number(stored);
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function formatRemaining(ms) {
    var s = Math.max(0, Math.floor(ms / 1000));
    return pad(Math.floor(s / 3600)) + ':' + pad(Math.floor((s % 3600) / 60)) + ':' + pad(s % 60);
  }

  var end = getEndTime();
  var el = document.getElementById('pricingCountdownTime');

  function tick() {
    var remaining = end - Date.now();
    el.textContent = remaining <= 0 ? '00:00:00' : formatRemaining(remaining);
    if (remaining > 0) requestAnimationFrame(function () { setTimeout(tick, 250); });
  }
  tick();
})();
```

---

### SECTION 7 — PORTFOLIO & CASE STUDIES (light background)

`id="bukti"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** `font-size: 28px` (32px ≥640px) · `font-weight: 900; letter-spacing: -0.022em; line-height: 1.2; margin-bottom: 10px`
  Write: "Not Promises." in plain text + `.grad` span: "Real Client Results."

**Provider track record block:**
- Provider photo `100×100px; border-radius: 50%; margin: 0 auto 12px` — placeholder or provided URL
- Gradient kicker text (`font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`): write provider's name + "Track Record"
- Gradient heading (`font-size: 17px; font-weight: 900; same gradient technique`): write "Real Project Outcomes from Real Clients"
- Paragraph (`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.58)`): write "Actual results and case data from [service name] projects."

**Horizontal scroll card slider:**
`display: flex; gap: 14px; overflow-x: auto; padding: 6px 2px 10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: thin; scrollbar-color: rgba(0,0,0,.12) rgba(0,0,0,.04)`

Each `.bukti-card`: `scroll-snap-align: start; flex: 0 0 auto; width: 300px` (340px ≥640px) · `background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 16px 50px rgba(0,0,0,.07); overflow: hidden`

Image area: `aspect-ratio: 5/3; background: rgba(0,0,0,.04)` — img `object-fit: cover; width: 100%; height: 100%` — use `https://placehold.co/340x204` — these represent screenshots of delivered work or client business metrics

Caption: `padding: 12px 12px 14px`
- Title: `font-size: 11px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; margin-bottom: 5px; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- Subtitle: `font-size: 12px; line-height: 1.45; color: rgba(0,0,0,.55); font-weight: 600`

Write 6 case study cards with specific, metric-driven content:
1. Provider credentials — title: "Certified & Experienced" / subtitle: "4+ years, 80+ projects delivered"
2. Conversion result — title: e.g. "Conversion Rate Up 3x" / subtitle: "Client went from 1% to 3.2% landing page conversion"
3. Fast delivery — title: e.g. "Delivered in 5 Days" / subtitle: "Full page: design + copy + mobile-optimized"
4. Revenue impact — title: e.g. "Client Made Back 10x in 30 Days" / subtitle: "New page drove direct revenue from paid traffic"
5. Client count — title: e.g. "80+ Projects Delivered" / subtitle: "Across e-commerce, education, and F&B industries"
6. Repeat client — title: e.g. "72% of Clients Return" / subtitle: "Most clients order again for next product or campaign"

Scroll hint: `font-size: 12px; color: rgba(0,0,0,.4); font-weight: 600; text-align: center; margin-top: 8px` — "Swipe left/right to see more."

**Bottom CTA block (centered):**
- Trust line: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.7); font-weight: 800; max-width: 620px; margin: 0 auto 16px`
  Write: real results from real clients of this service, delivered professionally.
- CTA button → `href="#pricing"` — Write "Book the Service Now" (or local equivalent)
- Note: `font-size: 12px; color: rgba(0,0,0,.42); font-weight: 600; margin-top: 10px` — Write: "Click to order."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="impian"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** `font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: [accent]; margin-bottom: 18px; display: inline-block`
  Write: the turnaround from variables (e.g. "7 Days From Now")

- **H2:** `font-size: 32px` (40px ≥640px) · `font-weight: 900; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 14px`
  Write 2 lines: "Imagine a Business" / ".grad span: Running on a Page That Converts."

- **Paragraph:** `font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.65); max-width: 520px; margin: 0 auto 36px`
  Write 3–4 sentences describing the business outcome: traffic that turns into leads, clients who trust before they even contact you, the relief of having a professional foundation. Trace it back to the right service. Warm, not manipulative.

**Inspirational marquee** — same technique as hero marquee but smaller:
Container: `max-width: 900px; margin: 0 auto 40px; overflow: hidden`
On ≤640px: full viewport width.

Inner `.impian-track`: `display: flex; gap: 14px; width: max-content; animation: marqueeScroll 28s linear infinite`

Each image: `width: 180px; aspect-ratio: 4/5; border-radius: 18px; background: #1a1a1a center/cover no-repeat; flex: 0 0 auto; box-shadow: 0 16px 40px rgba(0,0,0,.5)` — use 5 placeholder images (`https://placehold.co/180x225`) representing portfolio/project results, then duplicate for seamless loop.

**Below marquee:**

**Testimonial quote card:**
`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 20px; max-width: 520px; margin: 0 auto 28px`

Quote: `font-size: 16px; font-weight: 700; line-height: 1.55; color: rgba(255,255,255,.9); margin-bottom: 12px`
Write one powerful business transformation testimonial in first person: before-state (struggling to convert), turning point (working with this provider), current state (traffic converting, business growing, feeling confident).

Byline: `font-size: 13px; color: rgba(255,255,255,.45); font-weight: 600`
Write: "— Real client of this service"

**Transition question:** `font-size: 17px; font-weight: 700; color: rgba(255,255,255,.82); margin-bottom: 28px; line-height: 1.5`
Write a single final binary question: keep running traffic to a page that doesn't convert, or invest once in a page built to work?

**CTA button** → `href="#pricing"` — Write "Yes, I Want to Work Together Now"

**Note below CTA:** `font-size: 12px; color: rgba(255,255,255,.35); margin-top: 12px; font-weight: 600`
Write: price from variables · One-time fee · Delivery in [turnaround] working days

---

### SECTION 9 — FAQ (light background #f8f9fb)

`id="faq"` · `padding: 48px 18px`
Inner: `max-width: 700px; margin: 0 auto`

**Title:** `font-size: 28px; font-weight: 900; letter-spacing: -0.022em; color: #0f172a; text-align: center; margin-bottom: 28px`
Write: "Frequently Asked Questions" (or local equivalent)

**FAQ list** — `display: grid; gap: 12px`

Each `.faq-item` uses native `<details>`/`<summary>`:
```css
background: rgba(255,255,255,.88);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid #e6e7eb;
border-radius: 20px;
box-shadow: 0 8px 28px rgba(15,23,42,.05);
overflow: hidden;
```

`<summary>` style: `list-style: none; cursor: pointer; padding: 19px 22px; padding-right: 56px; font-size: 15px; font-weight: 800; color: #0f172a; position: relative; line-height: 1.4`
Remove native marker: `::-webkit-details-marker { display: none; }`

`::after` pseudo — circle "+": `position: absolute; right: 20px; top: 50%; transform: translateY(-50%); width: 28px; height: 28px; border-radius: 999px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; content: "+"`
When open: `content: "–"; background: #2563eb; color: #fff`

Answer `.faq-a`: `padding: 0 22px 18px; font-size: 14px; line-height: 1.7; color: #6b7280`

Write 9 FAQ items covering these topics:
1. **Who is this service for?** — Business owners who run paid traffic but their landing page isn't converting, or those launching a new product and want to start with a professional foundation.
2. **How long does the process take?** — From brief to delivery in [turnaround] working days. What the client needs to provide upfront and why the timeline is realistic.
3. **How many revision rounds are included?** — Up to 2 rounds. What counts as a revision and what falls outside the scope.
4. **What do I need to prepare before we start?** — The client needs: brief filled out, brand assets (logo, colors, reference images), product details and pricing. Provider handles everything else.
5. **What format will I receive the deliverable in?** — HTML file (ready to upload or paste into any platform), Figma source file, and image assets. All compressed and organized.
6. **Can you help with installation or uploading?** — The deliverable is fully ready. Provider can guide on upload, but direct platform integration is not included in this package. Mention upgrade options if applicable.
7. **What if I'm not happy with the result?** — 2 revision rounds are included to ensure the client is satisfied. Provider will not consider the project complete until the client signs off.
8. **Is this a one-time fee or ongoing?** — One-time project fee. No monthly retainers, no hidden charges. State exactly what's included.
9. **Why is this more expensive than other freelancers?** — Explain the difference: strategy-first process, conversion focus, complete deliverables (design + copy + assets), and the result track record. Cheaper options often cost more in the long run.

**CTA button below FAQ:**
`display: inline-flex; padding: 14px 26px; border-radius: 999px; background: #2563eb; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; border: 2px solid #2563eb; transition: background .2s ease, transform .15s ease` → hover: `background: #1d4ed8`
Text: Write "Book Now" (or local equivalent) · `href="#pricing"`

---

### SECTION 10 — SOCIAL PROOF POPUP (fixed overlay)

Position: `fixed; left: 16px; bottom: 16px; z-index: 9999`
Initially hidden: `opacity: 0; transform: translateY(14px); transition: opacity .35s ease, transform .35s ease; pointer-events: none`
Shown via `.show` class: `opacity: 1; transform: translateY(0); pointer-events: auto`

```html
<div class="sales-popup" id="salesPopup">
  <div class="sales-popup-inner">
    <div class="sp-dot"></div>
    <div class="sp-text">
      <span class="sp-name" id="salesPopupName"></span>
      <span id="salesPopupText"></span>
    </div>
  </div>
</div>
```

Popup card: `background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 14px 44px rgba(0,0,0,.12); padding: 12px 16px; display: flex; align-items: center; gap: 12px; max-width: 300px`

Green dot: `width: 10px; height: 10px; border-radius: 999px; background: #22c55e; flex: 0 0 auto; margin-top: 2px`

Text: `font-size: 13px; line-height: 1.45; color: #4b5563; letter-spacing: -0.01em`
Name span: `font-weight: 700; color: #111`

On ≤480px: `left: 10px; right: 10px; bottom: 10px; max-width: none` and card `border-radius: 16px; padding: 11px 13px`

**Social proof JavaScript** — IIFE at end of `<body>`:
```js
(function () {
  var names = [
    // Write 40 common Indonesian first names — mixed male and female
    'Sinta','Dewi','Rina','Nadia','Aulia','Fitri','Putri','Indah','Maya','Laila',
    'Rizal','Dimas','Hendra','Agus','Bayu','Andi','Fajar','Irfan','Johan','Reza',
    'Suci','Tiara','Winda','Ayu','Intan','Nurul','Salsa','Yuni','Zahra','Anisa',
    'Iqbal','Randy','Rian','Galih','Bima','Arya','Gilang','Ilham','Naufal','Ridho'
  ];
  var service = ''; // Short service name from variables
  var popup = document.getElementById('salesPopup');
  var nameEl = document.getElementById('salesPopupName');
  var textEl = document.getElementById('salesPopupText');
  var lastN = '';

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pickName() { var n; do { n = pick(names); } while (n === lastN); lastN = n; return n; }

  function show() {
    nameEl.textContent = pickName();
    textEl.textContent = ' just booked a session with ' + service; // Translate to page language
    popup.classList.add('show');
    setTimeout(function () { popup.classList.remove('show'); }, 4200);
  }

  setTimeout(show, 5000);
  setInterval(show, 12000);
})();
```

---

## OUTPUT REQUIREMENTS

- Single complete `<!DOCTYPE html>` file
- All CSS inside `<style>` in `<head>` — no external stylesheets
- All JavaScript inside `<script>` at end of `<body>` — two IIFEs (countdown + social proof)
- No external dependencies — no CDN, no Google Fonts, no frameworks
- Mobile-first; apply the 3 breakpoints (480px, 640px, 840px) exactly where specified
- All same-page navigation: `href="#section-id"` anchor links with `scroll-behavior: smooth`
- Images without real URLs: use `https://placehold.co/[width]x[height]`
- `loading="lazy"` on all images below the fold
- Section IDs must match exactly: `hero`, `layanan`, `testimoni-awal`, `kenapa-gagal`, `proses`, `pricing`, `bukti`, `impian`, `faq`
- No checkout button in the pricing section — the checkout form is a separate component placed below this page
