Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Brand name:** [e.g. Greenleaf Botanicals]
- **Product name:** [e.g. Nusaherb Slimming Tea]
- **Product category:** [e.g. herbal tea for weight management]
- **Core outcome promise:** [e.g. reduce bloating and support healthy weight loss in 30 days]
- **Key differentiators (3):** [e.g. 100% natural herbs, no laxatives, lab-certified]
- **Key ingredients (3):** [e.g. Daun Salam, Kunyit, Temulawak]
- **Result timeframe:** [e.g. 30 days to first visible result]
- **Certifications:** [e.g. GMP certified, third-party lab tested]
- **Social proof metric:** [e.g. 5,000+ buyers, 4.8/5 rating]
- **Price:** [e.g. $39]
- **Original / crossed-out price:** [e.g. $59]
- **Access type:** [e.g. one-time purchase, free shipping]
- **Language:** [e.g. English]
- **Tone:** [e.g. warm, health-conscious, science-backed without being clinical]
- **Accent color:** [e.g. #30d158]
- **Gradient (3 stops):** [e.g. linear-gradient(135deg, #30d158, #34c759, #32ade6)]
- **Light background:** [e.g. #f2fbf4]
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

Contains a pulsing accent-color dot + text.

Copy: write 3 short trust signals using the key differentiators from variables, separated by ·

**1b. H1 headline**
`font-size: 38px` (48px on ≥640px) · `font-weight: 800` · `letter-spacing: -0.025em` · `line-height: 1.1` · `margin-bottom: 16px`

Write 2 lines:
- Line 1 (plain): a bold, 5–7 word outcome statement (what happens to your body)
- Line 2 (wrapped in `.grad`): the method and timeframe — natural, safe, and within [result timeframe]

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences: what the product is, the key natural ingredients, what certifications it has, and one specific social proof metric (buyer count + average rating).

**1d. Product + certification strip**
Flex row, centered, `gap: 14px; margin-bottom: 8px`:
- Product packshot `width: 100px; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,.14)` — use `https://placehold.co/100x100`
- Certification badge image `width: 120px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.1)` — represents a quality certificate or lab certification image

Below strip: `font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center`
Write: Product name · Certification (e.g. GMP certified)

**1e. CTA button** → `href="#product"`
Write a curiosity-driven question asking what makes this product different — conversational (e.g. "What Makes This Different?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write a soft 8–10 word nudge to learn more before deciding.

**1f. Auto-scroll product/result marquee**
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

Add inner border via `::after`: `inset: 0; border-radius: 20px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.3)`

Use 4–6 placeholder images (`https://placehold.co/200x250`) representing product photos, before/after result shots, or lifestyle imagery. Duplicate the set for seamless loop. Apply as `background-image` inline style.

**1g. Benefit card** (dark panel, bottom of hero section)
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto`

Title: `color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px`
Write: what makes this product different from conventional alternatives — one line.

4 list items in a CSS grid, `gap: 10px`:
- Each item: `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px`
- Icon circle with accent-color SVG checkmark

Write 4 short differentiator statements: 100% natural ingredients (no laxatives or harsh chemicals), certified safe by relevant health authority, backed by buyer results, safe for daily long-term use.

---

### SECTION 2 — WHAT IS THIS PRODUCT? (dark background #000)

`id="product"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** `font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px`
  Write a simple 4–6 word question: "What exactly is this?"

- **Highlight line:** `font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4`
  Write one sentence: "In short, this is a [product category] made from [key natural ingredients] that helps your body [core outcome]." Wrap the product category in `.grad`.

- **Description paragraph:** `font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px`
  List: what the product is (form: tea, capsule, serum, etc.), how to use it, how long one pack lasts, what certifications cover it, and the result timeframe. Use `<br>` and `<strong>` for emphasis on the safety certifications and result window.

- **4 feature list items** — same card style, `border: 1px solid rgba(255,255,255,.12)` · `max-width: 420px; margin: 0 auto 20px`
  Write 4 credibility bullets: (1) buyer count and average rating, (2) what makes the formula natural and safe, (3) certification details, (4) who this product was made for and the specific problem it solves.

- **Two CTA buttons** — `display: flex; gap: 14px; justify-content: center; flex-wrap: wrap`
  - Ghost/outline button → `href="#early-testimonials"` — Write "See Buyer Testimonials" equivalent
  - Filled accent button → `href="#ingredients"` — Write "See What's Inside" equivalent

  Ghost style: `background: transparent; color: [accent]; border: 1px solid rgba([accent rgb], .6)`
  Filled style: `background: [accent]; color: #fff; box-shadow: 0 14px 34px rgba([accent rgb], .32)`

---

### SECTION 3 — BUYER TESTIMONIALS (light background)

`id="early-testimonials"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** `font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px`
  Write a 5–7 word headline: "Real buyers. Real visible results."

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px`
  Write: "Swipe left–right to see their results."

**Horizontal swipe card strip** — same layout as Template A/B.

4 testimonial cards. Each contains:

**Label** — use one of these colors per card: `#34c759`, `#0a84ff`, `#af52de`, `#ff9f0a`
Write a specific measurable result label (e.g. TURUN 4 KG, PERUT LEBIH FLAT, BADAN LEBIH RINGAN)

**Photo container:** `aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px`
Use `https://placehold.co/290x387` — represents before/after photos or product-in-use lifestyle shots.

**Quote:** Write 4 authentic first-person quotes. Each must: mention a specific physical change, express relief that it was natural and gentle (not harsh), sound like a real person. Use the brand tone.

**Name:** `font-size: 12px; color: rgba(0,0,0,.52)`
Write: — [Common first name], [city or context e.g. "mom of 2"]

---

Below cards: Write 1 sentence about the range of people this product has helped (e.g. busy moms, office workers, people who've tried multiple products before).

CTA button → `href="#why-it-fails"` — Write a question pointing to why conventional slimming products fail.

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="why-it-fails"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px`
  Write 2 lines: Line 1 — empathetic reframe ("Tried many products before with no results?"), Line 2 with `.grad` — the real cause ("The formula was wrong.").

- **Subtext:** Write 2 sentences: the failure isn't the user's fault — conventional products use harsh laxatives, stimulants, or cheap filler ingredients that either cause side effects or produce no real change.

**2-column comparison grid:**

**Left card — OTHER PRODUCTS:**
Badge: write "OTHER PRODUCTS" (local equivalent)
5 items with red ✕: laxatives that just empty the intestines temporarily / stimulants that cause heart palpitations / results that disappear once you stop / artificial sweeteners and synthetic fillers / no certification or safety testing

**Right card — THIS PRODUCT:**
Badge: write "THIS PRODUCT"
5 items with blue ✓: natural herbs that support the body's own metabolism / no stimulants — safe for daily long-term use / results that come from genuine metabolic support / clean formula — only natural certified ingredients / certified by [authority] — safety verified

- **Brand note:** Write 1–2 sentences about the brand's commitment to natural ingredients, their certification credentials, and what makes the formula trustworthy.

CTA button → `href="#ingredients"` — Write "See What's Inside the Formula" equivalent.

---

### SECTION 5 — INGREDIENTS / WHAT'S INSIDE (light background)

`id="ingredients"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px`
  Write: "What's Inside" on line 1, then the product name on line 2 wrapped in `.grad`.

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px`
  Write: key ingredient count + one-line formula philosophy (e.g. "3 active natural herbs, zero synthetics.").

**Ingredient/feature card grid — 2×2** (`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px`):

Each `.ingredient-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- Ingredient image: full-width, `border-radius: 12px; margin-bottom: 12px` — use `https://placehold.co/400x240` — represents a photo of the raw ingredient (herb, plant, spice)
- Category label: `font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 10px` — use a distinct color per card (cycle: accent, #34c759, #af52de, #ff9f0a) — write the ingredient role (DETOX, METABOLISM, ANTI-INFLAMMATORY, ANTIOXIDANT)
- Ingredient name: `font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 4px`
- Science claim: `font-size: 12px; font-weight: 600; color: [accent]; margin-bottom: 6px` — write a short science-backed claim (e.g. "Proven to support fat metabolism in 15+ studies")
- User benefit: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)` — write in plain language what this ingredient does for the buyer's body

Write 5 ingredient/feature entries following this structure:

Using the key ingredients from variables + 2 supporting ingredients, write each one as:
- Ingredient 1: primary active ingredient — the one most responsible for the core outcome; explain the mechanism in 2 plain sentences (what it does inside the body → what the user notices)
- Ingredient 2: supporting metabolic ingredient — boosts the primary effect or addresses a secondary benefit (e.g. reduces bloating, improves digestion)
- Ingredient 3: anti-inflammatory or detox ingredient — helps the body clear what it needs to while preventing side effects
- Ingredient 4: the safety/gentleness ingredient — explains why this is safe for daily use unlike harsh alternatives
- Ingredient 5 (full-width, `grid-template-columns: 1fr`): the certification/quality assurance card — not an ingredient, but a card explaining the quality testing process, certifications held (from variables), what they mean for safety, and how to verify them online

**Usage guide card** — full-width, below grid (`margin-top: 14px`):

Uses gradient border technique.

Header: pill badge — write "HOW TO USE" — and title — write "Simple Daily Routine" (or local equivalent).

3 list items with emoji icons, `font-size: 13px; font-weight: 600; color: #0b0b0f; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,.06)`:
Write 3 simple usage steps: when to take it (morning/evening), how much water to use, any simple complementary habits (e.g. drink enough water, avoid skipping meals). Keep it easy — not restrictive.

---

### SECTION 6 — PRICING (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** `font-size: 28px` (32px ≥640px) · `font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px`
  Write a first-person ordering headline — "I want to order and get started" in the page language.

**Single product card** — gradient border, `max-width: 480px; margin: 0 auto`:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, #34d399, #3b82f6) border-box;
border-radius: 22px; padding: 24px 20px;
```

Product name: `font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em; margin: 0 0 6px`

**Feature list** — 6 items with green circle SVG checkmarks. The last 2 use highlighted style.

The 6 items cover: product name and quantity per pack, key ingredients summary, certifications, result timeframe, access type (free shipping / guaranteed safe delivery), and one standout differentiator (natural formula + no side effects).

**Certification strip** — inside card, above price:
`display: flex; align-items: center; gap: 10px; background: #f0fdf4; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Certification badge `38×38px; border-radius: 50%; background: [accent]; display: flex; align-items: center; justify-content: center` — use a shield/check SVG icon or placeholder
- Certification code: `font-size: 12px; font-weight: 800; color: #0f172a` — write the certification name and code from variables
- Verification note: `font-size: 11px; color: #16a34a; font-weight: 600` — write "Certified Safe ↗" (or the relevant certification)

**Price row:** current price + struck-out original price.

Note: Write: "One-time purchase. Free shipping. Safe and certified."

**Countdown timer** — below the card, centered. Same glass card style.

**Countdown JavaScript** — IIFE at end of `<body>`:
```js
(function () {
  var STORAGE_KEY = 'physCountdownEnd_v1';
  var DURATION_MS = 1 * 60 * 60 * 1000;

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

### SECTION 7 — PROOF / PRODUCT RESULTS (light background)

`id="proof"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** Write: "Not Just Claims." in plain text + `.grad` span: "Verified Results."

**Intro block (centered):**
- Gradient kicker text: Write social proof metric from variables (e.g. "5,000+ Buyers · 4.8/5 Rating")
- Gradient heading: Write "Real Buyer Results — No Editing"
- Paragraph: Write "Product photos, review screenshots, and before/after results shared by actual buyers of [product name]."

**Horizontal scroll card slider:**

Each `.proof-card` — same structure as Template A/B.

Image area: `aspect-ratio: 5/3` — represents product packshots, buyer before/after photos, lab certificate screenshots, review screenshots from marketplace.

Write 6 proof cards:
1. Lab test / certification — title: "Lab Tested & Certified" / subtitle: "Every batch tested — certificate can be verified online"
2. Before/after result — title: e.g. "Flatter Stomach in 3 Weeks" / subtitle: "Real buyer — no exercise added, no crash diet"
3. Weight result — title: e.g. "Down 4 kg in 30 Days" / subtitle: "Natural progress without side effects"
4. Buyer review screenshot — title: e.g. "⭐ 4.8/5 Rating" / subtitle: "[buyer count] verified reviews on [marketplace name]"
5. Ingredient quality — title: e.g. "100% Natural — No Laxatives" / subtitle: "Formula verified by independent lab testing"
6. Repeat buyer — title: e.g. "3x Reorder by Same Buyer" / subtitle: "Customers come back because the results are real"

Scroll hint: "Swipe left/right to see more."

**Bottom CTA block:**
- Trust line: Write: real results from real buyers, certified safe, 100% natural.
- CTA button → `href="#pricing"` — Write "Order Now" (or local equivalent)
- Note: Write: "Click to order."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="dream"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** Write: the result timeframe from variables (e.g. "30 Days From Now")

- **H2:** Write 2 lines: "Imagine Feeling" / ".grad span: Light, Confident, and Healthy."

- **Paragraph:** Write 3–4 sentences describing the physical and emotional outcome: fitting into clothes again, feeling lighter and more energetic, the confidence that comes from a body that functions well. Trace it back to the natural formula. Warm, not manipulative.

**Inspirational marquee** — same technique as hero marquee:
Inner `.dream-track`: use 5 placeholder images, duplicate for seamless loop.

**Testimonial quote card:**
Write one powerful before/after testimonial: specific starting point (e.g. had tried multiple products, frustrated by side effects), turning point (tried this product after seeing a friend's result), current state (feeling the difference within weeks, continuing because it feels right, not forced).

Byline: "— Real buyer of this product"

**Transition question:** Write a binary question: keep trying harsh products that don't work, or try one that works with your body, not against it?

**CTA button** → `href="#pricing"` — Write "Yes, I Want to Try It Now"

**Note:** Write: price · One-time purchase · Free shipping

---

### SECTION 9 — FAQ (light background #f8f9fb)

`id="faq"` · `padding: 48px 18px`
Inner: `max-width: 700px; margin: 0 auto`

**Title:** "Frequently Asked Questions" (or local equivalent)

Write 9 FAQ items:
1. **Who is this product for?** — People who want to manage their weight naturally, without laxatives or stimulants. Especially for those who've tried other products with no real results or experienced side effects.
2. **Is this safe for daily use?** — Yes. The natural formula is designed for daily use. Explain the certification (from variables) and what it means for safety.
3. **How long until I see results?** — First visible changes typically within [result timeframe]. Results vary — encourage consistency for 30+ days.
4. **Are there any side effects?** — No harsh side effects when used as directed. It works gently with the body's natural processes, not against them. If the buyer is pregnant, nursing, or has a medical condition, consult a doctor first.
5. **Can I use this alongside other supplements?** — General guidance on combining with common supplements. Advise consulting a doctor for specific medical conditions.
6. **How long does one pack last?** — Based on daily usage as directed. Recommend a starter pack and what to expect in the first cycle.
7. **Is this certified?** — Full certification details from variables. Explain what each certification means and how to verify it online.
8. **Where is this product made?** — Manufacturing origin, quality control standards, and any relevant production certifications.
9. **Is there a money-back guarantee?** — State the policy honestly. If there is no guarantee (common for consumable physical products), explain why and encourage reading the product description carefully before purchasing.

**CTA button below FAQ:** `href="#pricing"` — Write "Order Now" (or local equivalent)

---

### SECTION 10 — SOCIAL PROOF POPUP (fixed overlay)

Same HTML structure and CSS as Template A.

**Social proof JavaScript** — IIFE at end of `<body>`:
```js
(function () {
  var names = [
    'Emma','Olivia','Sophia','Mia','Chloe','Grace','Lily','Hannah','Zoe','Ella',
    'James','Liam','Noah','Ethan','Lucas','Daniel','Ryan','Adam','Leo','Sam',
    'Sarah','Anna','Julia','Laura','Nina','Maya','Lena','Clara','Aria','Nora',
    'David','Alex','Ben','Max','Oscar','Jack','Kai','Owen','Eli','Theo'
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
    textEl.textContent = ' just ordered ' + product;
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
- Section IDs must match exactly: `hero`, `product`, `early-testimonials`, `why-it-fails`, `ingredients`, `pricing`, `proof`, `dream`, `faq`
- No checkout button in the pricing section — the checkout form is a separate component placed below this page
