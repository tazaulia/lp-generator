Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Coach / Business name:** [e.g. Taza / Taza Nutrition]
- **Product name:** [e.g. Blueprint Weight Loss 12 Minggu]
- **Product type:** [e.g. Digital mini course — 5 videos + ebook + 3 bonus tools]
- **Core outcome promise:** [e.g. lose weight permanently, naturally, without drugs]
- **Key differentiators (3):** [e.g. 100% natural, no supplements, no extreme food restrictions]
- **First result timeframe:** [e.g. 30 days]
- **Program duration:** [e.g. 12 weeks]
- **Coach credentials:** [e.g. Certified Nutrition Coach, Precision Nutrition — internationally certified]
- **Social proof metric:** [e.g. 100+ clients, average 6–12 kg lost permanently]
- **Price:** [e.g. Rp 99.000]
- **Original / crossed-out price:** [e.g. Rp 500.000]
- **Access type:** [e.g. one-time payment, lifetime access]
- **Language:** [e.g. Indonesian (Bahasa Indonesia) — use "kamu" not "Anda"]
- **Tone:** [e.g. conversational, warm, science-credible — not aggressive or pushy]
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
- Line 1 (plain): a bold, 5–7 word statement of the core outcome (permanent result, the method)
- Line 2 (wrapped in `.grad`): the 2 biggest differentiators in action form — the "without X" and the timeframe

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences establishing credibility: who the coach is, their certification, the method (natural/science-based), and one specific social proof metric (client count + average result).

**1d. Coach credibility strip**
Flex row, centered, `gap: 14px; margin-bottom: 8px`:
- Round coach photo `100×100px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 4px 20px rgba(0,0,0,.12)` — use `https://placehold.co/100x100` if no URL provided
- Certificate/badge image `width: 120px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.1)` — wrapped in a link to the credential verification URL if provided

Below strip: `font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center`
Write: Coach full name · Certification title

**1e. CTA button** → `href="#program"`
Write a curiosity-driven question asking how the program works — conversational, not pushy (e.g. "How Does This Program Work?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write a soft 8–10 word nudge to learn first before deciding.

**1f. Auto-scroll photo marquee**
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

Use 4–6 placeholder images (`https://placehold.co/200x250`), then duplicate the exact same set for seamless infinite loop. Apply as `background-image` inline style.

**1g. Benefit card** (dark panel, bottom of hero section)
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto`

Title: `color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px`
Write: what makes this program different from the conventional approach — one line.

4 list items in a CSS grid, `gap: 10px`:
- Each item: `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px`
- Icon circle: `width: 18px; height: 18px; border-radius: 50%; background: rgba([accent rgb], .22); border: 1px solid rgba([accent rgb], .45)` — contains accent-color SVG checkmark

Write 4 short differentiator statements using the product's key advantages: the method (natural/science-based), the eating approach (flexible, not punishing), the result type (stable/permanent), and the lifestyle fit (works within a busy schedule).

---

### SECTION 2 — WHAT IS THIS PROGRAM? (dark background #000)

`id="program"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** `font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px`
  Write a simple 4–6 word "what is this exactly?" question.

- **Highlight line:** `font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4`
  Write one sentence: "In short, this is a guide to [core method] backed by science that's proven to work." Wrap the core method phrase in `.grad`.

- **Description paragraph:** `font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px`
  List the deliverables (module count, ebook, bonus count), access model (one-time, lifetime), platform (mobile/desktop/tablet), and first-result timeframe. Use `<br>` for line breaks and `<strong>` for emphasis on the key selling points (timeframe, no subscription, no hidden fees).

- **4 feature list items** — same card style as Section 1 benefit card but `border: 1px solid rgba(255,255,255,.12)` · `max-width: 420px; margin: 0 auto 20px`
  Write 4 credibility bullets covering: (1) designed from real coaching experience (mention client count), (2) step-by-step structure that's simple and immediately applicable, (3) coach credentials and base location, (4) the all-natural approach (no drugs, no supplements, no extreme restrictions).

- **Two CTA buttons** — `display: flex; gap: 14px; justify-content: center; flex-wrap: wrap`
  - Ghost/outline button → `href="#testimoni-awal"` — Write "See Testimonials First" equivalent
  - Filled accent button → `href="#isi-program"` — Write "I Want to See What's Inside" equivalent

  Ghost style: `background: transparent; color: [accent]; border: 1px solid rgba([accent rgb], .6)` — hover fills accent solid
  Filled style: `background: [accent]; color: #fff; box-shadow: 0 14px 34px rgba([accent rgb], .32)`

---

### SECTION 3 — EARLY TESTIMONIALS (light background)

`id="testimoni-awal"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** `font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px`
  Write a 5–7 word headline: "They've already proven the results."

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px`
  Write: "Swipe left–right to see real client results."

**Horizontal swipe card strip:**
`display: flex; gap: 16px; overflow-x: auto; padding: 6px 10px 16px; margin: 0 -10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none`
On ≥840px: `justify-content: center; overflow-x: visible; padding: 0; margin: 0`

Each `.testi-card`: `flex: 0 0 auto; width: 290px` (280px on desktop) · `background: #fff; border-radius: 22px; padding: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.08); text-align: left; scroll-snap-align: center; border: 1px solid rgba(0,0,0,.05)`

4 testimonial cards. Each contains:

**Label** — `font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 8px`
Use one of these colors per card in order: `#34c759` (green), `#0a84ff` (blue), `#af52de` (purple), `#ff9f0a` (orange)

Write a specific, measurable result label (e.g. LOST 12 KG, FAT DOWN MUSCLE UP, STABLE FOR 12 WEEKS)

**Photo container:** `aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px; border: 1px solid rgba(0,0,0,.06)`
Use `https://placehold.co/290x387` for each.

**Quote:** `font-size: 13px; line-height: 1.5; color: #111; font-weight: 600; margin-bottom: 6px`
Write 4 authentic first-person quotes. Each quote must: mention a specific result, express surprise that the method wasn't punishing, sound like a real person (not marketing copy). Use the brand tone.

**Name:** `font-size: 12px; color: rgba(0,0,0,.52)`
Write: — [Common Indonesian first name]

---

Below cards: `font-size: 11px; color: rgba(0,0,0,.42); margin: 16px 0 22px`
Write 1 sentence: this method works for people across different life situations — name 2–3 personas (e.g. stay-at-home parent, office worker, student).

CTA button → `href="#kenapa-gagal"` — Write a question pointing to why conventional diets fail (matches next section).

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="kenapa-gagal"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px`
  Write 2 lines: Line 1 — empathetic reframe ("Failed? It's not your fault."), Line 2 with `.grad` — the real cause ("The method was wrong.").

- **Subtext:** `font-size: 15px; color: rgba(255,255,255,.65); max-width: 580px; margin: 0 auto 34px; line-height: 1.6`
  Write 2 sentences: failure isn't about discipline or willpower — it's about being forced to use methods that work against how the body naturally functions.

**2-column comparison grid** — 1 col on mobile, 2 col on ≥640px, `gap: 16px; margin-bottom: 28px`

Each card: `background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 18px; text-align: left`

**Left card — THE OLD WAY:**
Badge: `background: rgba(239,68,68,.14); color: #f87171; border-radius: 999px; padding: 5px 12px; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px`
Write: "THE OLD WAY" (or local language equivalent)

5 items, each with a red ✕ icon circle (`background: rgba(239,68,68,.18); color: #f87171; width: 20px; height: 20px; border-radius: 50%; font-size: 11px; font-weight: 800; flex: 0 0 auto`):

Write 5 conventional diet problems: diet medication with dangerous side effects / forced daily exercise that's exhausting / extreme calorie restriction that makes the body fight back / too many food restrictions no one can sustain / yo-yo cycling (lose weight → regain → repeat forever)

**Right card — THIS PROGRAM:**
Badge: `background: rgba([accent rgb], .18); color: #60a5fa; border-radius: 999px` — same size/style
Write: "THIS PROGRAM"

5 items with blue ✓ icon circle (`background: rgba([accent rgb], .22); color: #60a5fa`):

Write the exact inverse of each old-way problem, in the same order: flexible calories / movement matched to your ability / 100% natural, no drugs or supplements / rules that make sense and can be maintained for life / lose → STABLE (because the mindset changes too)

- **Coach note:** `font-size: 13px; color: rgba(255,255,255,.45); margin: 28px 0; line-height: 1.6`
  Write 1–2 sentences: coach name + internationally recognized certification + institution name + that the method is 100% natural without medication.

CTA button → `href="#isi-program"` — Write "See What's Inside the Program" equivalent.

---

### SECTION 5 — CURRICULUM / WHAT'S INSIDE (light background)

`id="isi-program"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px`
  Write: "What You Get in" on line 1, then the product name on line 2 wrapped in `.grad`.

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px`
  Write: module count + ebook + bonus count — one line.

**Module grid — 2×2** (`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px`):

Each `.ip-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- Module image: full-width, `border-radius: 12px; margin-bottom: 12px` — use `https://placehold.co/400x240`
- Label: `font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 10px` — use a distinct color per module (cycle: accent, #34c759, #af52de, #ff9f0a, #5ac8fa)
- Title: `font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 6px`
- Description: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)`

Write 5 modules following this curriculum arc:
- **Module 1 — Nutrition Foundation:** how the body actually processes food naturally; why supplements and drugs are never a long-term answer; the foundation most people skip
- **Module 2 — Setting Your Calorie Baseline:** calculate a personalized calorie baseline using data (mention AI/dashboard if relevant); real numbers, not guesswork
- **Module 3 — Flexible Eating:** no extreme food restrictions; an approach that still lets you eat enjoyably and can be sustained for life without suffering
- **Module 4 — Mindset & Eating Psychology:** changing your relationship with food from enemy to ally; without this shift, no nutrition technique will stick long-term
- **Module 5 — Anti-Rebound Strategy:** the module most people who succeed still miss; how to keep weight stable permanently, not just temporarily

Modules 1–4 go in the 2×2 grid. Module 5 goes in a full-width row below (`grid-template-columns: 1fr`).

**Bonus card** — full-width, below Module 5 (`grid-template-columns: 1fr; margin-top: 14px`):

Uses gradient border technique:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, [accent color], #34d399) border-box;
```

Header: flex row with pill badge (`color: [accent]; background: rgba([accent rgb], .1); border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; padding: 4px 10px`) — write "FREE BONUS" (or local equivalent) — and title `font-size: 16px; font-weight: 800` — write "3 Exclusive Tools" (or local equivalent).

3 list items with emoji icons, `font-size: 13px; font-weight: 600; color: #0b0b0f; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,.06)` (last item: no border):
Write 3 practical tools relevant to the product — e.g. a personal health tracking dashboard, a local food calorie reference guide, a habit guide for stopping self-sabotage.

---

### SECTION 6 — PRICING (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** `font-size: 28px` (32px ≥640px) · `font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px`
  Write a first-person ordering headline — something like "I Want to Order and Get Access Immediately" in the page language.

**Single product card** — gradient border, `max-width: 480px; margin: 0 auto`:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, #34d399, #3b82f6) border-box;
border-radius: 22px; padding: 24px 20px;
```

Product name: `font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em; margin: 0 0 6px`
Write the product name from variables.

**Feature list** — `display: grid; gap: 10px; margin: 0 0 18px` — 6 items, each with a green circle SVG checkmark (circle `fill: #16a34a`, check path in white):

`font-size: 13px; line-height: 1.45; color: #111827; display: flex; align-items: flex-start; gap: 10px`

Write 6 deliverable bullets summarizing what they get. The last 2 items should use a highlighted style: `background: #f0fdf4; padding: 10px 12px; border-radius: 12px`

The 6 items should cover: module count + format, ebook, anti-rebound strategy, mindset module, the core promise (natural method + result timeframe), bonus tools bundle.

**Coach credential strip** — inside card, above price:
`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Round coach photo `38×38px; border-radius: 50%` — use `https://placehold.co/38x38`
- Coach name: `font-size: 12px; font-weight: 800; color: #0f172a` — write "Coach Name · Certification Title"
- Verification link: `font-size: 11px; color: #2563eb; font-weight: 600` — write "Verify Certificate ↗" (or local equivalent)

**Price row:** `display: flex; align-items: baseline; gap: 10px; margin: 0 0 16px`
- Current price: `font-size: 22px; font-weight: 900; color: #0f172a` — from variables
- Struck-out price: `font-size: 14px; color: #9ca3af; text-decoration: line-through` — from variables

Note: `font-size: 12px; color: #6b7280; text-align: center; margin: 10px 0 0` — Write: "One-time payment. Lifetime access."

**Countdown timer** — below the card, centered:

`max-width: 420px; width: 100%`
Glass card: `background: rgba(255,255,255,.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.72); box-shadow: 0 12px 30px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.85); border-radius: 22px; padding: 16px 18px 20px; text-align: center`

Top row: pulsing red dot (`background: #ef4444; animation: pulseDot 1.8s ease infinite`) + label `font-size: 13px; font-weight: 700; color: #6b7280` — write "Promo price expires in" (or local equivalent)

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
  var STORAGE_KEY = 'tnWLCountdownEnd_v1';
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

### SECTION 7 — EVIDENCE / PROOF (light background)

`id="bukti"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** `font-size: 28px` (32px ≥640px) · `font-weight: 900; letter-spacing: -0.022em; line-height: 1.2; margin-bottom: 10px`
  Write: "Not Claims." in plain text + `.grad` span: "Real Evidence."

**Coach track record block:**
- Coach photo `100×100px; border-radius: 50%; margin: 0 auto 12px` — placeholder or provided URL
- Gradient kicker text (`font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`): write coach's name + "Track Record"
- Gradient heading (`font-size: 17px; font-weight: 900; same gradient technique`): write "Real Client Coaching Results" (or local equivalent)
- Paragraph (`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.58)`): write "Real dashboard data and records from [product name] clients."

**Horizontal scroll card slider:**
`display: flex; gap: 14px; overflow-x: auto; padding: 6px 2px 10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: thin; scrollbar-color: rgba(0,0,0,.12) rgba(0,0,0,.04)`

Each `.bukti-card`: `scroll-snap-align: start; flex: 0 0 auto; width: 300px` (340px ≥640px) · `background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 16px 50px rgba(0,0,0,.07); overflow: hidden`

Image area: `aspect-ratio: 5/3; background: rgba(0,0,0,.04)` — img `object-fit: cover; width: 100%; height: 100%` — use `https://placehold.co/340x204`

Caption: `padding: 12px 12px 14px`
- Title: `font-size: 11px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; margin-bottom: 5px; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- Subtitle: `font-size: 12px; line-height: 1.45; color: rgba(0,0,0,.55); font-weight: 600`

Write 6 proof cards with specific, data-point driven content:
1. Coach certification — title: "Certified Nutrition Coach" / subtitle: "Officially certified — not just a claim"
2. Weight result — title: e.g. "Lost 8 kg in 10 weeks" / subtitle: "Real client weight data"
3. Body measurement — title: e.g. "Waist -12 cm" / subtitle: "100% natural — no drugs, no supplements"
4. Stability — title: e.g. "Stable for 6 months post-program" / subtitle: "Long-lasting results because the system changed"
5. Consistency — title: e.g. "Consistent through 12 weeks" / subtitle: "Tracked data from start to finish"
6. No rebound — title: e.g. "No rebound after program ends" / subtitle: "Weight stayed stable because eating habits changed"

Scroll hint: `font-size: 12px; color: rgba(0,0,0,.4); font-weight: 600; text-align: center; margin-top: 8px` — "Swipe left/right to see more."

**Bottom CTA block (centered):**
- Trust line: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.7); font-weight: 800; max-width: 620px; margin: 0 auto 16px`
  Write: real data from real clients of the product, all done naturally.
- CTA button → `href="#pricing"` — Write "Get the Program Now" (or local equivalent)
- Note: `font-size: 12px; color: rgba(0,0,0,.42); font-weight: 600; margin-top: 10px` — Write: "Click to order."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="impian"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** `font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: [accent]; margin-bottom: 18px; display: inline-block`
  Write: the program's first-result timeframe (e.g. "30 Days From Now")

- **H2:** `font-size: 32px` (40px ≥640px) · `font-weight: 900; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 14px`
  Write 2 lines: "Imagine the Body" / ".grad span: You're Proud Of."

- **Paragraph:** `font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.65); max-width: 520px; margin: 0 auto 36px`
  Write 3–4 sentences describing the emotional and social outcome — how others perceive you (admiration, pride, respect), then trace it back to the natural method. Keep it warm, not manipulative.

**Inspirational marquee** — same technique as hero marquee but smaller:
Container: `max-width: 900px; margin: 0 auto 40px; overflow: hidden`
On ≤640px: full viewport width.

Inner `.impian-track`: `display: flex; gap: 14px; width: max-content; animation: marqueeScroll 28s linear infinite`

Each image: `width: 180px; aspect-ratio: 4/5; border-radius: 18px; background: #1a1a1a center/cover no-repeat; flex: 0 0 auto; box-shadow: 0 16px 40px rgba(0,0,0,.5)` — use 5 placeholder images (`https://placehold.co/180x225`), then duplicate for seamless loop.

**Below marquee** (still inside page, re-enter centered inner):

**Testimonial quote card:**
`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 20px; max-width: 520px; margin: 0 auto 28px`

Quote: `font-size: 16px; font-weight: 700; line-height: 1.55; color: rgba(255,255,255,.9); margin-bottom: 12px`
Write one powerful transformation testimonial in first person: specific before-state (e.g. "3 months ago I'd already given up on yo-yo dieting"), turning point, current state (eating normally again, starting light movement, feeling genuinely healthier).

Byline: `font-size: 13px; color: rgba(255,255,255,.45); font-weight: 600`
Write: "— From a real client of this program"

**Transition question:** `font-size: 17px; font-weight: 700; color: rgba(255,255,255,.82); margin-bottom: 28px; line-height: 1.5`
Write a single final binary question: keep trying alone, or use the proven natural method? Make it feel like a natural, friendly decision point — not pressure.

**CTA button** → `href="#pricing"` — Write a strong first-person "yes" — e.g. "Yes, I Want to Try It Now"

**Note below CTA:** `font-size: 12px; color: rgba(255,255,255,.35); margin-top: 12px; font-weight: 600`
Write: price from variables · One-time payment · Lifetime access

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

Write 9 FAQ items covering these topics in order:
1. **Who is this for?** — People who've tried dieting repeatedly and failed, give up midway, or lose weight only to regain it. Especially for those tired of supplements and medications who want a natural approach.
2. **Is heavy exercise required?** — No. Light movement (e.g. walking) is sufficient. The main focus is correct eating patterns, not maximum calorie burning.
3. **Do I need to buy supplements?** — Not at all. 100% natural — based on eating habits and nutrition education. No supplements, no diet pills.
4. **What do I get after paying?** — Immediate access to all modules, ebook, and all bonus tools. Describe the specific deliverables from the product variables.
5. **Can I access it on my phone?** — Yes, all materials are digital and accessible on phone, laptop, or tablet, anytime, anywhere.
6. **Is this a one-time payment or subscription?** — One-time payment. No monthly fees or hidden charges.
7. **How long does access last?** — Lifetime. Return to the materials whenever you need, including future updates.
8. **Who made this and can they be trusted?** — The coach's full name, their internationally recognized certification, the certifying institution, and their track record (client count from variables). Mention that the certification can be verified online.
9. **Is there a refund policy?** — Since this is a digital product with immediate access upon payment, refunds are not available. Encourage them to read the program description carefully before purchasing.

**CTA button below FAQ:**
`display: inline-flex; padding: 14px 26px; border-radius: 999px; background: #2563eb; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; border: 2px solid #2563eb; transition: background .2s ease, transform .15s ease` → hover: `background: #1d4ed8`
Text: Write "Order Now" (or local equivalent) · `href="#pricing"`

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
    // Write 40 common local first names — mixed male and female
    // Example for Indonesian: 'Sinta','Dewi','Rina','Nadia','Aulia','Fitri','Putri','Indah','Maya','Laila',
    // 'Rizal','Dimas','Hendra','Agus','Bayu','Andi','Fajar','Irfan','Johan','Reza',
    // 'Suci','Tiara','Winda','Ayu','Intan','Nurul','Salsa','Yuni','Zahra','Anisa',
    // 'Iqbal','Randy','Rian','Galih','Bima','Arya','Gilang','Ilham','Naufal','Ridho'
    // Generate your own 40 names appropriate to the target audience.
  ];
  var product = ''; // Short product name from variables
  var popup = document.getElementById('salesPopup');
  var nameEl = document.getElementById('salesPopupName');
  var textEl = document.getElementById('salesPopupText');
  var lastN = '';

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pickName() { var n; do { n = pick(names); } while (n === lastN); lastN = n; return n; }

  function show() {
    nameEl.textContent = pickName();
    textEl.textContent = ' just bought ' + product; // Translate to page language
    popup.classList.add('show');
    setTimeout(function () { popup.classList.remove('show'); }, 4200);
  }

  setTimeout(show, 5000);       // First popup: 5 seconds after page load
  setInterval(show, 12000);     // Recurring: every 12 seconds
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
- `loading="lazy"` on all images below the fold (all except hero coach photo)
- Section IDs must match exactly: `hero`, `program`, `testimoni-awal`, `kenapa-gagal`, `isi-program`, `pricing`, `bukti`, `impian`, `faq`
- No checkout button in the pricing section — the checkout form is a separate component placed below this page
