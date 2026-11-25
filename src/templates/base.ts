export const base = `Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete \`<!DOCTYPE html>\` file.
Write all visible page copy in English.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Brand / Product name:** {{brandProductName}}
- **Product format:** {{productFormat}}
- **Key selling points & core promise:** {{keySellingPoints}}
{{programDurationLine}}
- **Price:** {{price}}
- **Original / crossed-out price:** {{originalPrice}}
- **Access type:** {{accessType}}
- **CTA button text:** {{ctaText}}
- **Scarcity type:** {{scarcityType}}
- **Audience pain points:** {{painPoints}}
- **Buyer objections:** {{objections}}
- **Target audience:** {{targetAudience}}
- **Awareness level:** {{awarenessLevel}}
- **Tone:** {{tone}}
- **Accent color:** {{accent}}
- **Gradient (3 stops):** {{gradient}}
- **Light background:** {{lightBg}}
- **Dark background:** #000 and #0b0c10
- **Checkout anchor:** {{checkoutAnchor}}

---

## DESIGN SYSTEM — apply globally, do not deviate

**Font:** System font stack only — \`-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif\`

**Global reset:**
\`\`\`css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: [system stack above]; background: {{lightBg}}; color: #0b0b0f; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
a { text-decoration: none; }
img { display: block; max-width: 100%; }
\`\`\`

**Gradient text utility \`.grad\`:**
\`\`\`css
.grad {
  background: {{gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
\`\`\`

**Buttons:** always \`border-radius: 999px\` (pill shape), \`font-weight: 700–800\`

**Primary CTA button:**
\`background: {{accent}}; color: #fff; padding: 14–15px 24–30px; box-shadow: 0 14px 34px rgba({{accentRgb}}, .28); transition: filter .15s ease, transform .15s ease;\`
On hover: \`filter: brightness(1.07); transform: translateY(-1px);\`

**Cards:** \`border-radius: 20–22px\`, white background on light sections

**Gradient border technique** — used on featured/bonus cards:
\`\`\`css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            {{gradient}} border-box;
\`\`\`

**Section rhythm:** LIGHT → DARK → LIGHT → DARK → LIGHT → LIGHT → LIGHT → DARK → LIGHT

**Responsive breakpoints — only these three, no others:** \`480px\`, \`640px\`, \`840px\`

---

## SECTIONS

Build in this exact order.

---

### SECTION 1 — HERO (light background)

\`id="hero"\` · \`padding: 36px 18px 44px\`

Centered column, \`max-width: 580px\`, \`text-align: center\`.

**1a. Pill badge**
\`border-radius: 999px; background: rgba(0,0,0,.05); font-size: 13px; font-weight: 600; color: rgba(0,0,0,.65); padding: 10px 16px; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px\`

Contains a pulsing accent-color dot (\`width: 8px; height: 8px; border-radius: 50%; background: {{accent}}; box-shadow: 0 0 0 4px rgba({{accentRgb}}, .15)\`) followed by text.

Copy: write 3 short trust signals derived from the key selling points, separated by ·

**1b. H1 headline**
\`font-size: 38px\` (48px on ≥640px) · \`font-weight: 800\` · \`letter-spacing: -0.025em\` · \`line-height: 1.1\` · \`margin-bottom: 16px\`

Write 2 lines:
- Line 1 (plain): a bold, 5–7 word statement of the core outcome from the key selling points
- Line 2 (wrapped in \`.grad\`): the 2 biggest differentiators — the "without X" or "in Y time" angle

**1c. Subtext paragraph**
\`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px\`

Write 2–3 sentences establishing credibility: who {{brandProductName}} is, what makes it different, and the key social proof signal (buyer count, rating, or result metric) from the key selling points.

**1d. Creator / brand credibility strip**
Flex row, centered, \`gap: 14px; margin-bottom: 8px\`:
- Round creator/brand photo \`100×100px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 4px 20px rgba(0,0,0,.12)\` — use \`https://placehold.co/100x100\`
- Optional second image (certificate, product shot, or brand logo) \`width: 120px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.1)\`

Below strip: \`font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center\`
Write: brand name · core credential or social proof metric

**1e. CTA button** → \`href="#product"\`
Write a curiosity-driven "what is this?" question — conversational, not pushy.

Below button — hint text: \`font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px\`
Write a soft 8–10 word nudge: read first, then decide.

**1f. Auto-scroll photo marquee**
Container: \`max-width: 900px; margin: 38px auto 34px; overflow: hidden\`
On mobile (≤640px): break out to full viewport — \`width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw)\`

Inner \`.track\`: \`display: flex; gap: 16px; width: max-content; animation: marqueeScroll 32s linear infinite\`

\`\`\`css
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) { .track { animation: none; } }
\`\`\`

Each photo card \`.shot\`: \`width: 200px\` (230px on ≥640px) · \`aspect-ratio: 4/5\` · \`border-radius: 20px\` · \`box-shadow: 0 20px 50px rgba(0,0,0,.16)\` · \`background: #e0e0e0 center/cover no-repeat; flex: 0 0 auto\`

Add a subtle inner border via \`::after\`: \`inset: 0; border-radius: 20px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.3)\`

Use 4–6 placeholder images (\`https://placehold.co/200x250\`), then duplicate the exact same set for seamless infinite loop. Apply as \`background-image\` inline style.

**1g. Benefit card** (dark panel, bottom of hero section)
\`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto\`

Title: \`color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px\`
Write: what makes {{brandProductName}} different — one line.

4 list items in a CSS grid, \`gap: 10px\`:
- Each item: \`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px\`
- Icon circle: \`width: 18px; height: 18px; border-radius: 50%; background: rgba({{accentRgb}}, .22); border: 1px solid rgba({{accentRgb}}, .45)\` — contains accent-color SVG checkmark

Write 4 differentiator statements derived from the key selling points.

---

### SECTION 2 — WHAT IS THIS? (dark background #000)

\`id="product"\` · \`padding: 52px 18px\` · \`color: #fff\`
Inner: \`max-width: 560px; margin: 0 auto; text-align: center\`

- **Title:** \`font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px\`
  Write a simple "what is this exactly?" question — 4–6 words.

- **Highlight line:** \`font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4\`
  Write one sentence: "In short, this is [product format] that [core promise from key selling points]." Wrap the core promise in \`.grad\`.

- **Description paragraph:** \`font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px\`
  Describe the deliverables (from product format), access model ({{accessType}}), and the key differentiator that makes it work. Use \`<br>\` for line breaks and \`<strong>\` for emphasis.

- **4 feature list items** — same card style as Section 1 benefit card but \`border: 1px solid rgba(255,255,255,.12)\` · \`max-width: 420px; margin: 0 auto 20px\`
  Write 4 credibility bullets: (1) track record / experience behind the product, (2) step-by-step structure that's immediately applicable, (3) built for {{targetAudience}} — not a generic solution, (4) the format advantage (digital/instant/flexible).

- **Two CTA buttons** — \`display: flex; gap: 14px; justify-content: center; flex-wrap: wrap\`
  - Ghost/outline button → \`href="#early-testimonials"\` — Write "See the Testimonials First"
  - Filled accent button → \`href="#{{section5Id}}"\` — Write "See What's Inside"

  Ghost style: \`background: transparent; color: {{accent}}; border: 1px solid rgba({{accentRgb}}, .6)\` — hover fills accent solid
  Filled style: \`background: {{accent}}; color: #fff; box-shadow: 0 14px 34px rgba({{accentRgb}}, .32)\`

---

### SECTION 3 — EARLY TESTIMONIALS (light background)

\`id="early-testimonials"\` · \`padding: 40px 18px 48px\`
Inner: \`max-width: 920px; margin: 0 auto; text-align: center\`

- **Section title:** \`font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px\`
  Write: "They've Already Proven It." (or equivalent in {{tone}} tone)

- **Subtitle:** \`font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px\`
  Write: "Swipe left or right to see their results."

**Horizontal swipe card strip:**
\`display: flex; gap: 16px; overflow-x: auto; padding: 6px 10px 16px; margin: 0 -10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none\`
On ≥840px: \`justify-content: center; overflow-x: visible; padding: 0; margin: 0\`

Each \`.testi-card\`: \`flex: 0 0 auto; width: 290px\` (280px on desktop) · \`background: #fff; border-radius: 22px; padding: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.08); text-align: left; scroll-snap-align: center; border: 1px solid rgba(0,0,0,.05)\`

4 testimonial cards. Each contains:

**Label** — \`font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 8px\`
Use one of these colors per card in order: \`#34c759\` (green), \`#0a84ff\` (blue), \`#af52de\` (purple), \`#ff9f0a\` (orange)
Write a specific, measurable result label relevant to the product outcome.

**Photo container:** \`aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px; border: 1px solid rgba(0,0,0,.06)\`
Use \`https://placehold.co/290x387\` for each.

**Quote:** \`font-size: 13px; line-height: 1.5; color: #111; font-weight: 600; margin-bottom: 6px\`
Write 4 authentic first-person quotes. Each must: mention a specific result, express surprise that it wasn't harder, sound like a real person. Tone: {{tone}}.

**Name:** \`font-size: 12px; color: rgba(0,0,0,.52)\`
Write: — [Common first name, and their role/context]

---

Below cards: \`font-size: 11px; color: rgba(0,0,0,.42); margin: 16px 0 22px\`
Write 1 sentence: this has helped people across different backgrounds — name 2–3 personas matching {{targetAudience}}.

CTA button → \`href="#why-it-fails"\` — Write a question pointing to why the conventional approach fails.

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

\`id="why-it-fails"\` · \`padding: 52px 18px\` · \`color: #fff\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

- **H2:** \`font-size: 28px\` (34px ≥640px) · \`font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px\`
  Write 2 lines: Line 1 — empathetic reframe ("Failed? It's Not Your Fault."), Line 2 with \`.grad\` — the real cause ("The Method Was Wrong.").

- **Subtext:** \`font-size: 15px; color: rgba(255,255,255,.65); max-width: 580px; margin: 0 auto 34px; line-height: 1.6\`
  Write 2 sentences: failure isn't about effort — it's about using methods that work against how things naturally work. The approach was the problem, not the person.

**2-column comparison grid** — 1 col on mobile, 2 col on ≥640px, \`gap: 16px; margin-bottom: 28px\`

Each card: \`background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 18px; text-align: left\`

**Left card — THE OLD WAY:**
Badge: \`background: rgba(239,68,68,.14); color: #f87171; border-radius: 999px; padding: 5px 12px; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px\`
Write: "THE OLD WAY"

5 items, each with a red ✕ icon circle (\`background: rgba(239,68,68,.18); color: #f87171; width: 20px; height: 20px; border-radius: 50%; font-size: 11px; font-weight: 800; flex: 0 0 auto\`):
Write 5 conventional approach problems — the frustrating, ineffective things {{targetAudience}} has already tried.

**Right card — {{brandProductName}}:**
Badge: \`background: rgba({{accentRgb}}, .18); color: #60a5fa; border-radius: 999px\` — same size/style
Write: brand/product name

5 items with blue ✓ icon circle (\`background: rgba({{accentRgb}}, .22); color: #60a5fa\`):
Write the exact inverse of each problem, in the same order — the {{brandProductName}} solution to each.

- **Creator note:** \`font-size: 13px; color: rgba(255,255,255,.45); margin: 28px 0; line-height: 1.6\`
  Write 1–2 sentences: who created this, their relevant credential, and that the method is built specifically for {{targetAudience}}.

CTA button → \`href="#{{section5Id}}"\` — Write "See What's Inside".

---

{{section5}}

---

### SECTION 6 — PRICING (light background #f8f9fb)

\`id="pricing"\` · \`padding: 40px 18px 72px\`
Inner: \`max-width: 720px; margin: 0 auto\`

- **Section title:** \`font-size: 28px\` (32px ≥640px) · \`font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px\`
  Write a first-person purchase/registration headline — e.g. "Yes, I Want to Sign Up Now"

**Single product/ticket card** — gradient border, \`max-width: 480px; margin: 0 auto\`:
\`\`\`css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, #34d399, #3b82f6) border-box;
border-radius: 22px; padding: 24px 20px;
\`\`\`

Product/event name: \`font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em; margin: 0 0 6px\`
Write: {{brandProductName}}

**Feature list** — \`display: grid; gap: 10px; margin: 0 0 18px\` — 6 items, each with a green circle SVG checkmark (circle \`fill: #16a34a\`, check path in white):
\`font-size: 13px; line-height: 1.45; color: #111827; display: flex; align-items: flex-start; gap: 10px\`

Write 6 what-you-get bullets derived from the product format and key selling points. The last 2 items use a highlighted style: \`background: #f0fdf4; padding: 10px 12px; border-radius: 12px\`

**Credibility strip** — inside card, above price:
\`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba({{accentRgb}}, .14)\`
- Creator/brand avatar \`38×38px; border-radius: 50%\` — \`https://placehold.co/38x38\`
- Name + credential: \`font-size: 12px; font-weight: 800; color: #0f172a\`
- Trust link: \`font-size: 11px; color: #2563eb; font-weight: 600\` — "View Profile ↗"

**Price row:** \`display: flex; align-items: baseline; gap: 10px; margin: 0 0 16px\`
- Current price: \`font-size: 22px; font-weight: 900; color: #0f172a\` — {{price}}
- Struck-out price: \`font-size: 14px; color: #9ca3af; text-decoration: line-through\` — {{originalPrice}}

Note: \`font-size: 12px; color: #6b7280; text-align: center; margin: 10px 0 0\` — Write: "{{accessType}}"

**Countdown timer** — below the card, centered:

\`max-width: 420px; width: 100%\`
Glass card: \`background: rgba(255,255,255,.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.72); box-shadow: 0 12px 30px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.85); border-radius: 22px; padding: 16px 18px 20px; text-align: center\`

Top row: pulsing red dot (\`background: #ef4444; animation: pulseDot 1.8s ease infinite\`) + label \`font-size: 13px; font-weight: 700; color: #6b7280\` — write "Promo price ends in"

\`\`\`css
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 0 4px rgba(239,68,68,.12); }
  50% { box-shadow: 0 0 0 6px rgba(239,68,68,.04); }
}
\`\`\`

Timer: \`font-size: 36px; font-weight: 900; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; color: #0f172a\` — id="pricingCountdownTime" — displays \`HH:MM:SS\`

On ≤480px: \`padding: 14px 14px 18px; border-radius: 18px\` and timer \`font-size: 28px\`

**Countdown JavaScript** — IIFE at end of \`<body>\`:
\`\`\`js
(function () {
  var STORAGE_KEY = '{{storageKey}}';
  var DURATION_MS = 1 * 60 * 60 * 1000; // 1 hour

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
\`\`\`

---

{{section7}}

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

\`id="dream"\` · \`padding: 52px 18px\` · \`overflow: hidden\` · \`color: #fff\`
Inner: \`max-width: 640px; margin: 0 auto; text-align: center\`

- **Kicker:** \`font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: {{accent}}; margin-bottom: 18px; display: inline-block\`
  Write: a time-based kicker — e.g. "30 Days From Now" or "After This Event"

- **H2:** \`font-size: 32px\` (40px ≥640px) · \`font-weight: 900; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 14px\`
  Write 2 lines: "Imagine the Version of You" / "\`.grad span: Who Already Made It.\`"

- **Paragraph:** \`font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.65); max-width: 520px; margin: 0 auto 36px\`
  Write 3–4 sentences: the emotional and practical outcome after using {{brandProductName}}. Focus on the feeling of clarity, confidence, and real change. Keep it warm, not manipulative.

**Inspirational marquee:**
Container: \`max-width: 900px; margin: 0 auto 40px; overflow: hidden\`
On ≤640px: full viewport width.

Inner \`.dream-track\`: \`display: flex; gap: 14px; width: max-content; animation: marqueeScroll 28s linear infinite\`

Each image: \`width: 180px; aspect-ratio: 4/5; border-radius: 18px; background: #1a1a1a center/cover no-repeat; flex: 0 0 auto; box-shadow: 0 16px 40px rgba(0,0,0,.5)\` — use 5 placeholder images (\`https://placehold.co/180x225\`), then duplicate for seamless loop.

**Below marquee:**

**Testimonial quote card:**
\`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 20px; max-width: 520px; margin: 0 auto 28px\`

Quote: \`font-size: 16px; font-weight: 700; line-height: 1.55; color: rgba(255,255,255,.9); margin-bottom: 12px\`
Write one powerful transformation testimonial in first person: specific before-state, turning point, current state. Use {{tone}}.

Byline: \`font-size: 13px; color: rgba(255,255,255,.45); font-weight: 600\`
Write: "— A real {{brandProductName}} user"

**Transition question:** \`font-size: 17px; font-weight: 700; color: rgba(255,255,255,.82); margin-bottom: 28px; line-height: 1.5\`
Write a single final binary question: keep doing it the hard way alone, or use the proven approach? Natural decision point, not pressure.

**CTA button** → \`href="{{checkoutAnchor}}"\` — Write a strong first-person "yes" using "{{ctaText}}" as the base.

**Note below CTA:** \`font-size: 12px; color: rgba(255,255,255,.35); margin-top: 12px; font-weight: 600\`
Write: {{price}} · {{accessType}}

---

### SECTION 9 — FAQ (light background #f8f9fb)

\`id="faq"\` · \`padding: 48px 18px\`
Inner: \`max-width: 700px; margin: 0 auto\`

**Title:** \`font-size: 28px; font-weight: 900; letter-spacing: -0.022em; color: #0f172a; text-align: center; margin-bottom: 28px\`
Write: "Frequently Asked Questions"

**FAQ list** — \`display: grid; gap: 12px\`

Each \`.faq-item\` uses native \`<details>\`/\`<summary>\`:
\`\`\`css
background: rgba(255,255,255,.88);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid #e6e7eb;
border-radius: 20px;
box-shadow: 0 8px 28px rgba(15,23,42,.05);
overflow: hidden;
\`\`\`

\`<summary>\` style: \`list-style: none; cursor: pointer; padding: 19px 22px; padding-right: 56px; font-size: 15px; font-weight: 800; color: #0f172a; position: relative; line-height: 1.4\`
Remove native marker: \`::-webkit-details-marker { display: none; }\`

\`::after\` pseudo — circle "+": \`position: absolute; right: 20px; top: 50%; transform: translateY(-50%); width: 28px; height: 28px; border-radius: 999px; background: #eff6ff; color: #2563eb; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 700; content: "+"\`
When open: \`content: "–"; background: #2563eb; color: #fff\`

Answer \`.faq-a\`: \`padding: 0 22px 18px; font-size: 14px; line-height: 1.7; color: #6b7280\`

Write 9 FAQ items covering these topics in order, using context from the product and the buyer objections ({{objections}}):
1. **Who is this for?** — {{targetAudience}} who are frustrated with the conventional approach and want what {{brandProductName}} specifically offers.
2. **Is this for beginners or experienced people?** — Clarify the level. If intermediate: what baseline knowledge is assumed. If beginner-friendly: what support is included.
3. **What do I get after I pay / sign up?** — Immediate access details based on {{productFormat}} and {{accessType}}.
4. **How long does my access last?** — Based on {{accessType}}.
5. **Can I access it on my phone?** — Yes, digital access — mobile, laptop, tablet, anytime.
6. **Is this a one-time payment or a subscription?** — Based on {{accessType}}. If subscription, explain what's included per cycle.
7. **Why does it cost {{price}}? Is it worth it?** — Frame the value: what would it cost to achieve this result another way? Position {{price}} as a fraction of the outcome value.
8. **Who made this? Can I trust it?** — {{brandProductName}} track record, credentials, and how the results in the testimonials were achieved. Source from key selling points.
9. **Is there a refund / money-back guarantee?** — Answer clearly and honestly based on the access type. If no refund, explain why (digital/immediate access) and what buyers should do before purchasing to be sure.

**CTA button below FAQ:**
\`display: inline-flex; padding: 14px 26px; border-radius: 999px; background: #2563eb; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; border: 2px solid #2563eb; transition: background .2s ease, transform .15s ease\` → hover: \`background: #1d4ed8\`
Text: {{ctaText}} · \`href="{{checkoutAnchor}}"\`

---

### SECTION 10 — SOCIAL PROOF POPUP (fixed overlay)

Position: \`fixed; left: 16px; bottom: 16px; z-index: 9999\`
Initially hidden: \`opacity: 0; transform: translateY(14px); transition: opacity .35s ease, transform .35s ease; pointer-events: none\`
Shown via \`.show\` class: \`opacity: 1; transform: translateY(0); pointer-events: auto\`

\`\`\`html
<div class="sales-popup" id="salesPopup">
  <div class="sales-popup-inner">
    <div class="sp-dot"></div>
    <div class="sp-text">
      <span class="sp-name" id="salesPopupName"></span>
      <span id="salesPopupText"></span>
    </div>
  </div>
</div>
\`\`\`

Popup card: \`background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 14px 44px rgba(0,0,0,.12); padding: 12px 16px; display: flex; align-items: center; gap: 12px; max-width: 300px\`

Green dot: \`width: 10px; height: 10px; border-radius: 999px; background: #22c55e; flex: 0 0 auto; margin-top: 2px\`

Text: \`font-size: 13px; line-height: 1.45; color: #4b5563; letter-spacing: -0.01em\`
Name span: \`font-weight: 700; color: #111\`

On ≤480px: \`left: 10px; right: 10px; bottom: 10px; max-width: none\` and card \`border-radius: 16px; padding: 11px 13px\`

**Social proof JavaScript** — IIFE at end of \`<body>\`:
\`\`\`js
(function () {
  var names = [
    'Emma','Olivia','Sophia','Mia','Chloe','Grace','Lily','Hannah','Zoe','Ella',
    'James','Liam','Noah','Ethan','Lucas','Daniel','Ryan','Adam','Leo','Sam',
    'Sarah','Anna','Julia','Laura','Nina','Maya','Lena','Clara','Aria','Nora',
    'David','Alex','Ben','Max','Oscar','Jack','Kai','Owen','Eli','Theo'
  ];
  var product = '{{brandProductName}}';
  var popup = document.getElementById('salesPopup');
  var nameEl = document.getElementById('salesPopupName');
  var textEl = document.getElementById('salesPopupText');
  var lastN = '';

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pickName() { var n; do { n = pick(names); } while (n === lastN); lastN = n; return n; }

  function show() {
    nameEl.textContent = pickName();
    textEl.textContent = ' {{popupVerb}} ' + product;
    popup.classList.add('show');
    setTimeout(function () { popup.classList.remove('show'); }, 4200);
  }

  setTimeout(show, 5000);
  setInterval(show, 12000);
})();
\`\`\`

---

## OUTPUT REQUIREMENTS

- Single complete \`<!DOCTYPE html>\` file
- All CSS inside \`<style>\` in \`<head>\` — no external stylesheets
- All JavaScript inside \`<script>\` at end of \`<body>\` — two IIFEs (countdown + social proof)
- No external dependencies — no CDN, no Google Fonts, no frameworks
- Mobile-first; apply the 3 breakpoints (480px, 640px, 840px) exactly where specified
- All same-page navigation: \`href="#section-id"\` anchor links with \`scroll-behavior: smooth\`
- Images without real URLs: use \`https://placehold.co/[width]x[height]\`
- \`loading="lazy"\` on all images below the fold
- No checkout button in the pricing section — the checkout form is placed below this page separately
`;
