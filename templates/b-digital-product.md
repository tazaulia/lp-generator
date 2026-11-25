Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Brand / Creator name:** [e.g. Taza Studio / Rifqy Hakim]
- **Product name:** [e.g. The Food Business Starter Kit]
- **Product format:** [e.g. 68-page PDF ebook + 4 Google Sheets templates + 1 Notion board]
- **Core outcome promise:** [e.g. launch your food business with a proven system, in 30 days]
- **Key differentiators (3):** [e.g. market-specific, ready-to-use templates, no business degree needed]
- **First result timeframe:** [e.g. 30 days to first result]
- **Creator authority (optional):** [e.g. Built from running my own catering business for 5 years — used by 300+ buyers.]
- **Social proof metric:** [e.g. 300+ buyers, avg 4.9/5 rating]
- **Price:** [e.g. $39]
- **Original / crossed-out price:** [e.g. $89]
- **Access type:** [e.g. one-time payment, instant download, lifetime access]
- **Language:** [e.g. English]
- **Tone:** [e.g. practical, encouraging, no-fluff]
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
- Line 1 (plain): a bold, 5–7 word statement of the core outcome promise
- Line 2 (wrapped in `.grad`): the key differentiator or the "how" — what makes this the right solution

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences: what the product is (format + what's inside in brief), who it's for, and one specific social proof metric (buyer count + rating or result). Reference creator authority from variables if provided.

**1d. Creator trust signal (include only if Creator authority is provided in variables)**
A single centered line, no photo needed unless a creator photo URL is explicitly provided.
`font-size: 12px; color: rgba(0,0,0,.45); font-weight: 600; text-align: center; margin-bottom: 24px`
Write: Brand/Creator name · short authority statement from variables (e.g. "5 years running my own catering business · 300+ buyers")

If no creator authority is provided, skip this element entirely and go straight to 1e.

**1e. CTA button** → `href="#product"`
Write a curiosity-driven question or statement about what's inside — not a hard sell (e.g. "What's actually inside this kit?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write a soft 8–10 word nudge to scroll and learn more first.

**1f. Auto-scroll product preview marquee**
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

Each card `.shot`: `width: 200px` (230px on ≥640px) · `aspect-ratio: 4/5` · `border-radius: 20px` · `box-shadow: 0 20px 50px rgba(0,0,0,.16)` · `background: #e0e0e0 center/cover no-repeat; flex: 0 0 auto`
Add inner border via `::after`: `inset: 0; border-radius: 20px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.3)`

Use 4–6 placeholder images (`https://placehold.co/200x250`), then duplicate the exact same set for seamless infinite loop. These represent product preview screenshots (inside pages of the ebook, template previews, etc.).

**1g. Benefit card** (dark panel, bottom of hero section)
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto`

Title: `color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px`
Write: what makes this product different from doing it the hard way (DIY, guessing, generic templates) — one line.

4 list items in a CSS grid, `gap: 10px`:
- Each item: `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px`
- Icon circle: `width: 18px; height: 18px; border-radius: 50%; background: rgba([accent rgb], .22); border: 1px solid rgba([accent rgb], .45)` — contains accent-color SVG checkmark

Write 4 short differentiator statements: the key differentiators from variables — e.g. ready-to-use (not theory), locally specific (not generic Western advice), actionable format, and the time/result promise.

---

### SECTION 2 — WHAT IS THIS PRODUCT? (dark background #000)

`id="product"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** `font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px`
  Write a simple 4–6 word "what is this exactly?" question.

- **Highlight line:** `font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4`
  Write one sentence: "In short, this is [product format] that [core outcome]. [Key differentiator]." Wrap the core outcome phrase in `.grad`.

- **Description paragraph:** `font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px`
  List what's included (use exact format from variables: PDF pages, number of templates, etc.), access model (one-time, instant download, lifetime), and platforms/devices it works on. Use `<br>` for line breaks and `<strong>` for key selling points (instant access, no subscription, no expiry).

- **4 feature list items** — `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 11px 14px; display: flex; align-items: center; gap: 10px; font-size: 13px; color: #fff` · `max-width: 420px; margin: 0 auto 20px; display: grid; gap: 10px`

  Write 4 credibility bullets covering: (1) built from real experience (mention creator authority or buyer count), (2) immediately usable — no setup or extra tools needed, (3) locally specific / relevant to the exact buyer context, (4) the key differentiator vs the generic alternative.

- **Two CTA buttons** — `display: flex; gap: 14px; justify-content: center; flex-wrap: wrap`
  - Ghost/outline button → `href="#testimonials"` — Write "See What Buyers Say" equivalent
  - Filled accent button → `href="#product-contents"` — Write "Show Me What's Inside" equivalent

  Ghost style: `background: transparent; color: [accent]; border: 1px solid rgba([accent rgb], .6)` — hover fills accent solid
  Filled style: `background: [accent]; color: #fff; box-shadow: 0 14px 34px rgba([accent rgb], .32)`
  Both: `border-radius: 999px; padding: 12px 20px; font-size: 14px; font-weight: 700`

---

### SECTION 3 — BUYER TESTIMONIALS (light background)

`id="testimonials"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** `font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px`
  Write a 5–7 word headline: "Buyers who've already gotten results."

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px`
  Write: "Swipe to see real results from real buyers."

**Horizontal swipe card strip:**
`display: flex; gap: 16px; overflow-x: auto; padding: 6px 10px 16px; margin: 0 -10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none`
On ≥840px: `justify-content: center; overflow-x: visible; padding: 0; margin: 0`

Each `.testi-card`: `flex: 0 0 auto; width: 290px` (280px on desktop) · `background: #fff; border-radius: 22px; padding: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.08); text-align: left; scroll-snap-align: center; border: 1px solid rgba(0,0,0,.05)`

4 testimonial cards. Each contains:

**Label** — `font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 8px`
Use one of these colors per card in order: `#34c759` (green), `#0a84ff` (blue), `#af52de` (purple), `#ff9f0a` (orange)

Write a specific, measurable result label from using the product (e.g. LAUNCHED IN 14 DAYS, SAVED 8 HOURS, MADE FIRST SALE, FINALLY HAD A SYSTEM)

**Photo container:** `aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px; border: 1px solid rgba(0,0,0,.06)`
Use `https://placehold.co/290x387` — these represent a buyer photo or a screenshot of their result.

**Quote:** `font-size: 13px; line-height: 1.5; color: #111; font-weight: 600; margin-bottom: 6px`
Write 4 authentic first-person quotes. Each quote must: mention a specific result they got from the product, call out something they were surprised by (ease, speed, specificity), and sound like a real person — not marketing copy. Use the brand tone.

**Name:** `font-size: 12px; color: rgba(0,0,0,.52)`
Write: — [Common first name, relevant to the target market's demographics]

---

Below cards: `font-size: 11px; color: rgba(0,0,0,.42); margin: 16px 0 22px`
Write 1 sentence: this product works for people across different situations — name 2–3 buyer personas (e.g. first-timers, people pivoting careers, side-hustlers).

CTA button → `href="#why-its-hard"` — Write a question pointing to why doing this without a guide is hard (matches next section).

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="why-its-hard"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px`
  Write 2 lines: Line 1 — empathetic reframe ("Struggling? It's not your fault."), Line 2 with `.grad` — the real cause ("You're missing the right system.").

- **Subtext:** `font-size: 15px; color: rgba(255,255,255,.65); max-width: 580px; margin: 0 auto 34px; line-height: 1.6`
  Write 2 sentences: the problem isn't talent or effort — it's that most people try to figure out a complex thing from scratch, with generic advice that doesn't fit their actual situation.

**2-column comparison grid** — 1 col on mobile, 2 col on ≥640px, `gap: 16px; margin-bottom: 28px`

Each card: `background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 18px; text-align: left`

**Left card — DOING IT ALONE:**
Badge: `background: rgba(239,68,68,.14); color: #f87171; border-radius: 999px; padding: 5px 12px; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px`
Write: "DOING IT ALONE" (or local language equivalent)

5 items, each with a red ✕ icon circle (`background: rgba(239,68,68,.18); color: #f87171; width: 20px; height: 20px; border-radius: 50%; font-size: 11px; font-weight: 800; flex: 0 0 auto`):

Write 5 pain points of doing this without a structured product: hours of scattered research / trial and error that costs money / generic advice that doesn't apply to local context / no clear step-by-step order to follow / end up overwhelmed and give up before results

**Right card — WITH THIS PRODUCT:**
Badge: `background: rgba([accent rgb], .18); color: #60a5fa; border-radius: 999px` — same size/style
Write: "WITH THIS PRODUCT"

5 items with blue ✓ icon circle (`background: rgba([accent rgb], .22); color: #60a5fa`):

Write the exact inverse of each left-card point, same order: everything in one place / proven frameworks that reduce costly mistakes / built specifically for the buyer's context (use the key differentiator) / clear step-by-step process / see your first result in the timeframe from variables

- **Authority note:** `font-size: 13px; color: rgba(255,255,255,.45); margin: 28px 0; line-height: 1.6`
  If creator authority is provided: write 1–2 sentences about the creator's credentials and why this product exists (e.g. built from their own experience, validated by buyer count).
  If not: write 1 sentence about who this product was designed for and what problem it solves.

CTA button → `href="#product-contents"` — Write "Show Me What's Inside" equivalent.

---

### SECTION 5 — WHAT'S INSIDE (light background)

`id="product-contents"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px`
  Write: "Everything Inside" on line 1, then the product name on line 2 wrapped in `.grad`.

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px`
  Write the product format from variables — format count, type, and one-line value summary.

**Content breakdown grid — 2×2** (`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px`):

Each `.content-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- Preview image: full-width, `border-radius: 12px; margin-bottom: 12px` — use `https://placehold.co/400x240` — represents a preview screenshot of this content piece
- Category label: `font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 10px` — use a distinct color per card (cycle: accent, #34c759, #af52de, #ff9f0a, #5ac8fa) — write the component type (CHAPTER, TEMPLATE, GUIDE, TOOL, BONUS)
- Title: `font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 6px`
- Description: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)`

Write 5 content components following a logical progression from foundation → action → tool:

Design the content as if these are the actual pieces inside the product. Each piece should:
- Have a clear, benefit-led title (not just "Chapter 1")
- Have a 2-sentence description: what's in it + what it enables the buyer to do
- Build on each other (foundational piece → core system → execution step → refinement → sustainability)

Use these category labels to reflect what type of content each piece is (ebook = CHAPTER, template kit = TEMPLATE, hybrid = match the format):
- Item 1: the foundational piece — core concepts the buyer needs to understand first
- Item 2: the core system/framework — the main methodology or structure
- Item 3: the execution piece — the practical step-by-step action guide
- Item 4: the tools/templates — ready-to-use resources that save time
- Item 5 (full-width row, `grid-template-columns: 1fr`): the advanced/completion piece — how to sustain, scale, or finalize results

**Bonus card** — full-width, below main content (`grid-template-columns: 1fr; margin-top: 14px`):

Uses gradient border technique:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, [accent color], #34d399) border-box;
```
Same card style as content cards.

Header: flex row with pill badge — write "FREE BONUS" (or local equivalent) — and title — write "Exclusive Extras" (or local equivalent).

2–3 list items with emoji icons, `font-size: 13px; font-weight: 600; color: #0b0b0f; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,.06)` (last item: no border):
Write 2–3 bonus items that complement the main product — e.g. a reference cheatsheet, a community access, a quick-start checklist, a calculator, or a swipe file.

---

### SECTION 6 — PRICING (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** `font-size: 28px` (32px ≥640px) · `font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px`
  Write a first-person headline: "I want to get instant access" — conversational, not salesy.

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

Write 6 deliverable bullets. The last 2 items use highlighted style: `background: #f0fdf4; padding: 10px 12px; border-radius: 12px`

The 6 items should cover: the main content pieces (format + quantity), the tools/templates included, the bonus extras, the access model (instant download, no subscription), the result timeframe, and one standout differentiator (what makes this the right product for the buyer's exact context).

**Creator note (include only if Creator authority is provided in variables):**
`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Creator avatar: use `https://placehold.co/38x38` unless a URL is provided
- Creator name: `font-size: 12px; font-weight: 800; color: #0f172a`
- Short authority line: `font-size: 11px; color: #6b7280; font-weight: 600` — write 1 sentence of creator authority

If no creator authority is provided, skip this strip.

**Price row:** `display: flex; align-items: baseline; gap: 10px; margin: 0 0 16px`
- Current price: `font-size: 22px; font-weight: 900; color: #0f172a` — from variables
- Struck-out price: `font-size: 14px; color: #9ca3af; text-decoration: line-through` — from variables

Note: `font-size: 12px; color: #6b7280; text-align: center; margin: 10px 0 0` — Write: "One-time payment. Instant download. Lifetime access."

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
  var STORAGE_KEY = 'dpCountdownEnd_v1';
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

### SECTION 7 — BUYER PROOF (light background)

`id="proof"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** `font-size: 28px` (32px ≥640px) · `font-weight: 900; letter-spacing: -0.022em; line-height: 1.2; margin-bottom: 10px`
  Write: "Not Claims." in plain text + `.grad` span: "Real Buyer Results."

**Intro block (centered, no creator photo):**
- Gradient kicker text (`font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`): Write social proof metric from variables (e.g. "300+ Buyers · 4.9/5 Rating")
- Gradient heading (`font-size: 17px; font-weight: 900; same gradient technique`): Write "What People Are Getting Results With" (or local equivalent)
- Paragraph (`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.58)`): Write "Screenshots and results shared by real buyers of [product name]."

**Horizontal scroll card slider:**
`display: flex; gap: 14px; overflow-x: auto; padding: 6px 2px 10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: thin; scrollbar-color: rgba(0,0,0,.12) rgba(0,0,0,.04)`

Each `.proof-card`: `scroll-snap-align: start; flex: 0 0 auto; width: 300px` (340px ≥640px) · `background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 16px 50px rgba(0,0,0,.07); overflow: hidden`

Image area: `aspect-ratio: 5/3; background: rgba(0,0,0,.04)` — img `object-fit: cover; width: 100%; height: 100%` — use `https://placehold.co/340x204` — these represent buyer result screenshots (social media posts, before/after, work produced using the product, etc.)

Caption: `padding: 12px 12px 14px`
- Title: `font-size: 11px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; margin-bottom: 5px; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- Subtitle: `font-size: 12px; line-height: 1.45; color: rgba(0,0,0,.55); font-weight: 600`

Write 5–6 proof cards with specific, result-driven content — these are screenshots of buyer success. Examples:
1. First result achieved — title: e.g. "First Sale in 12 Days" / subtitle: "Buyer started with zero experience"
2. Time saved — title: e.g. "Saved 15 Hours of Research" / subtitle: "Had a full business plan ready in a weekend"
3. A tangible output — title: e.g. "Launched Her Menu in Week 1" / subtitle: "Used the template straight out of the pack"
4. Repeatable result — title: e.g. "3rd Month Still Using the System" / subtitle: "Still referencing the templates daily"
5. Star rating / review screenshot — title: "⭐ 4.9/5 Average Rating" / subtitle: "Based on [buyer count] verified buyers"

Scroll hint: `font-size: 12px; color: rgba(0,0,0,.4); font-weight: 600; text-align: center; margin-top: 8px` — "Swipe to see more results."

**Bottom CTA block (centered):**
- Trust line: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.7); font-weight: 800; max-width: 620px; margin: 0 auto 16px`
  Write: real buyers, real results — all from using this one product.
- CTA button → `href="#pricing"` — Write "Get Instant Access Now" (or local equivalent)
- Note: `font-size: 12px; color: rgba(0,0,0,.42); font-weight: 600; margin-top: 10px` — Write: "Instant download after payment."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="dream"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** `font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: [accent]; margin-bottom: 18px; display: inline-block`
  Write: the first result timeframe from variables (e.g. "30 Days From Now")

- **H2:** `font-size: 32px` (40px ≥640px) · `font-weight: 900; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 14px`
  Write 2 lines: Line 1 — a statement of the transformed future state / Line 2 with `.grad` — the specific outcome the buyer will feel proud of.

- **Paragraph:** `font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.65); max-width: 520px; margin: 0 auto 36px`
  Write 3–4 sentences describing the emotional outcome: what the buyer's life/work/business looks like once they've applied this product. Describe the confidence, the clarity, the progress — not just the feature. Keep it grounded and warm, not hype.

**Inspirational marquee:**
Container: `max-width: 900px; margin: 0 auto 40px; overflow: hidden`
On ≤640px: full viewport width.

Inner `.dream-track`: `display: flex; gap: 14px; width: max-content; animation: marqueeScroll 28s linear infinite`

Each image: `width: 180px; aspect-ratio: 4/5; border-radius: 18px; background: #1a1a1a center/cover no-repeat; flex: 0 0 auto; box-shadow: 0 16px 40px rgba(0,0,0,.5)` — use 5 placeholder images (`https://placehold.co/180x225`), then duplicate for seamless loop. These represent aspirational imagery of the outcome (e.g. a thriving business, a confident person at their desk, a product on a shelf).

**Below marquee:**

**Buyer testimonial quote card:**
`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 20px; max-width: 520px; margin: 0 auto 28px`

Quote: `font-size: 16px; font-weight: 700; line-height: 1.55; color: rgba(255,255,255,.9); margin-bottom: 12px`
Write one powerful transformation testimonial: specific before-state (frustrated, stuck, wasting time), the turning point (found this product), current state (has a system, made progress, feels confident).

Byline: `font-size: 13px; color: rgba(255,255,255,.45); font-weight: 600`
Write: "— From a verified buyer"

**Transition question:** `font-size: 17px; font-weight: 700; color: rgba(255,255,255,.82); margin-bottom: 28px; line-height: 1.5`
Write one final decision-point question: keep struggling alone, or get the proven system right now? Keep it warm and friendly — not manipulative.

**CTA button** → `href="#pricing"` — Write a strong first-person "yes" statement (e.g. "Yes, Give Me Instant Access")

**Note below CTA:** `font-size: 12px; color: rgba(255,255,255,.35); margin-top: 12px; font-weight: 600`
Write: price from variables · one-time payment · instant download

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

Write 8–9 FAQ items covering these topics in order:
1. **Who is this for?** — The specific buyer profile, what problem they have, and why this product is the right fit.
2. **What format does it come in?** — Exact format from variables (PDF, Google Sheets, Notion, etc.) and what app/device is needed to open it.
3. **How do I get access after buying?** — Instant download or delivery method, timeframe, what they'll receive.
4. **Do I need prior experience?** — Address the "I'm a beginner" concern. Is it beginner-friendly?
5. **Can I use this on my phone?** — Device compatibility.
6. **Is this a one-time payment or subscription?** — One-time. No hidden fees.
7. **How long do I have access?** — Lifetime, including future updates.
8. **Who made this? Why should I trust it?** — Creator authority from variables (if provided), buyer count, and what real-world experience backs this product.
9. **Is there a refund policy?** — Since this is a digital product with instant access, no refunds. Encourage reading the description carefully before buying.

**CTA button below FAQ:**
`display: inline-flex; padding: 14px 26px; border-radius: 999px; background: #2563eb; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; border: 2px solid #2563eb; transition: background .2s ease, transform .15s ease` → hover: `background: #1d4ed8`
Text: Write "Get Instant Access" (or local equivalent) · `href="#pricing"`

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
    // Write 40 common first names appropriate to the target market's demographics.
    // Example: 'Emma','Olivia','Sophia','Mia','Chloe','Grace','Lily','Hannah','Zoe','Ella',
    // 'James','Liam','Noah','Ethan','Lucas','Daniel','Ryan','Adam','Leo','Sam',
    // 'Sarah','Anna','Julia','Laura','Nina','Maya','Lena','Clara','Aria','Nora',
    // 'David','Alex','Ben','Max','Oscar','Jack','Kai','Owen','Eli','Theo'
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
    textEl.textContent = ' just downloaded ' + product; // Translate to page language; use "downloaded" for ebooks/toolkits, "joined" for memberships
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
- Section IDs must match exactly: `hero`, `product`, `testimonials`, `why-its-hard`, `product-contents`, `pricing`, `proof`, `dream`, `faq`
- No checkout button in the pricing card — the checkout form is a separate component placed below this page
