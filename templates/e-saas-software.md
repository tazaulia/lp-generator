Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Company / Brand name:** [e.g. Kasir Pintar / Jurnal.id]
- **Product name:** [e.g. Kasir Pintar Pro]
- **Product type:** [e.g. cloud-based POS and inventory management app for SMEs]
- **Core outcome promise:** [e.g. manage sales, stock, and reports from your phone — in under 5 minutes a day]
- **Key features (3):** [e.g. real-time stock sync, automated reports, multi-outlet support]
- **Key integrations:** [e.g. Stripe, PayPal, Shopify, Amazon]
- **Pricing model:** [e.g. $19/month — cancel anytime]
- **Free trial:** [e.g. 14-day free trial, no credit card required]
- **User metric:** [e.g. 10,000+ active businesses, 4.8/5 App Store rating]
- **Price:** [e.g. $19/month]
- **Original / crossed-out price:** [e.g. $39/month]
- **Access type:** [e.g. monthly subscription, cancel anytime, free trial included]
- **Language:** [e.g. English]
- **Tone:** [e.g. practical, confident, no-jargon — speak like a smart friend, not a tech salesperson]
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

**Gradient border technique** — used on featured/pricing cards:
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
Contains a pulsing accent-color dot + text.
Copy: write 3 short trust signals using the key features from variables, separated by ·

**1b. H1 headline**
`font-size: 38px` (48px on ≥640px) · `font-weight: 800` · `letter-spacing: -0.025em` · `line-height: 1.1` · `margin-bottom: 16px`

Write 2 lines:
- Line 1 (plain): a bold, 5–7 word statement of the core time/effort saving outcome
- Line 2 (wrapped in `.grad`): the biggest differentiator — what makes this the easiest/fastest solution

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences: what the product does, who it's for, the free trial offer, and one key user metric (active user count + rating).

**1d. App store / social proof strip**
Flex row, centered, `gap: 14px; margin-bottom: 8px`:
- App screenshot `width: 100px; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,.14)` — use `https://placehold.co/100x160` — represents the mobile app dashboard
- Star rating badge: `background: #fff; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,.1); padding: 10px 14px; display: flex; flex-direction: column; align-items: center; gap: 4px`
  - Stars row: `color: #f59e0b; font-size: 14px` — 5 filled stars (★★★★★)
  - Rating text: `font-size: 13px; font-weight: 800; color: #0b0b0f` — write "4.8 / 5.0"
  - Count: `font-size: 11px; color: rgba(0,0,0,.45); font-weight: 600` — write "[user count] active businesses"

Below strip: `font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center`
Write: Product name · [user metric]

**1e. CTA button** → `href="#features"`
Write a curiosity-driven question asking what features are included — conversational (e.g. "What Can It Do?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write: [free trial offer] — no commitment required.

**1f. Dashboard preview marquee**
Container: `max-width: 900px; margin: 38px auto 34px; overflow: hidden`
On mobile (≤640px): break out to full viewport.

Inner `.track`: `display: flex; gap: 16px; width: max-content; animation: marqueeScroll 32s linear infinite`

```css
@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) { .track { animation: none; } }
```

Each card `.shot`: `width: 200px` (230px on ≥640px) · `aspect-ratio: 4/5` · `border-radius: 20px` · `box-shadow: 0 20px 50px rgba(0,0,0,.16)` · `background: #e8edf5 center/cover no-repeat; flex: 0 0 auto`

Use 4–6 placeholder images (`https://placehold.co/200x250`) representing app screens (dashboard, report view, product list, transaction history). Duplicate set for seamless loop.

**1g. Benefit card** (dark panel):
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; max-width: 560px; margin: 0 auto`

Title: Write: what makes this app different from managing manually or using spreadsheets — one line.

4 list items: real-time sync across devices / automated reports (no manual calculation) / works offline on mobile / integrates with the platforms they already use.

---

### SECTION 2 — WHAT IS THIS? (dark background #000)

`id="product"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** Write a simple 4–6 word question: "What exactly does it do?"

- **Highlight line:** Write one sentence: "In short, this is a [product type] that helps [target user] [core outcome]." Wrap the product type in `.grad`.

- **Description paragraph:** List: what the software does, how it's accessed (web + mobile app / browser only), pricing model, free trial terms, and what data is saved (cloud, automatically). Use `<strong>` for emphasis on the free trial and no-credit-card terms.

- **4 feature list items:** Write 4 credibility bullets: (1) user count and rating, (2) how simple the setup is (be specific — under X minutes), (3) what integrations are supported, (4) what problems it eliminates compared to manual methods.

- **Two CTA buttons:**
  - Ghost → `href="#early-testimonials"` — Write "See User Reviews" equivalent
  - Filled → `href="#features"` — Write "See All Features" equivalent

---

### SECTION 3 — USER TESTIMONIALS (light background)

`id="early-testimonials"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** Write: "Businesses already running smoother."
- **Subtitle:** Write: "Swipe left–right to read their experience."

**Horizontal swipe card strip** — same layout.

4 testimonial cards. Each:
- Label color: `#34c759`, `#0a84ff`, `#af52de`, `#ff9f0a`
- Label text: a specific business outcome (e.g. AUTOMATED REPORTS, ALWAYS-ACCURATE STOCK, SAVES 3 HRS/DAY)
- Photo container: use `https://placehold.co/290x387` — represents a screenshot of the user's app dashboard or a photo of the business owner at work
- Quote: 4 authentic first-person quotes. Each must: mention a specific time saved or business problem solved, express surprise at how simple it was, sound like a real SME owner. Use the brand tone.
- Name: — [Common first name], [business type e.g. restaurant owner, skincare reseller]

---

Below cards: Write 1 sentence about the variety of business types using this software.

CTA button → `href="#why-it-fails"` — Write a question pointing to why spreadsheets and manual methods fail.

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="why-it-fails"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** Write 2 lines: Line 1 — empathetic reframe ("Still managing your business in spreadsheets?"), Line 2 with `.grad` — the real cause ("You're spending hours on the wrong thing.").

- **Subtext:** Write 2 sentences: manual methods aren't just slow — they create errors, hide problems until it's too late, and keep the business owner stuck in operations instead of growing.

**2-column comparison grid:**

**Left card — THE MANUAL WAY:**
Badge: write "THE MANUAL WAY"
5 items with red ✕: hours spent calculating daily reports / stock discrepancies discovered too late / no visibility across multiple outlets or channels / transactions lost in chat history or paper notes / decisions made on gut feel, not data

**Right card — WITH THIS APP:**
Badge: write "WITH THIS APP"
5 items with blue ✓: automated daily reports in one tap / real-time stock sync across all channels / full visibility from any device, anywhere / every transaction recorded automatically / data-driven decisions — see what's selling, what's not, where profit is going

- **Note:** Write 1–2 sentences: product name + user count + what type of businesses are using it.

CTA button → `href="#features"` — Write "See All Features" equivalent.

---

### SECTION 5 — FEATURES (light background)

`id="features"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** Write: "Everything You Need" on line 1, then "In One App" on line 2 wrapped in `.grad`.

- **Subtitle:** Write: key feature count + integration count — one clear line.

**Feature card grid — 2×3 on ≥640px, 1 col on mobile:**
`display: grid; grid-template-columns: 1fr; gap: 14px`
On ≥640px: `grid-template-columns: 1fr 1fr`
On ≥840px: `grid-template-columns: 1fr 1fr 1fr`

Each `.feature-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- Icon container: `width: 44px; height: 44px; border-radius: 14px; background: rgba([accent rgb], .1); display: flex; align-items: center; justify-content: center; margin-bottom: 14px`
  Inside: a relevant SVG icon (Lucide/Heroicons style — use an inline SVG appropriate to the feature: chart-bar for reports, package for inventory, zap for speed, link for integrations, shield for security, smartphone for mobile access). `color: [accent]; width: 22px; height: 22px`
- Feature name: `font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 8px`
- Description: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)`

Write 6 features. Each should: name the feature, explain what it does in 2 sentences — what the user does and what problem it eliminates:

- **Feature 1 — Core feature (from key features):** the primary feature that solves the #1 problem. What happens in the app → what the user no longer has to worry about.
- **Feature 2 — Second key feature:** builds on the first. A related capability that makes the first feature more powerful or complete.
- **Feature 3 — Third key feature:** often the most surprising or differentiating. What competitors don't have or do poorly.
- **Feature 4 — Automation / time-saving:** a specific workflow that runs automatically — reports, alerts, reminders, sync. Quantify the time saved.
- **Feature 5 — Integrations:** which platforms it connects to (from variables). What data flows automatically between systems.
- **Feature 6 — Access and security:** where data lives (cloud), what devices it works on, and why data is safe (backup, encryption, or specific compliance if applicable).

**Integration logos card** — full-width, below feature grid (`margin-top: 14px`):

Uses gradient border technique.

Header: pill badge — write "INTEGRATIONS" — and title — write "Works with what you already use" (or local equivalent).

Integration logo strip: `display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin-top: 12px`
Each logo: `height: 28px; opacity: .75; filter: grayscale(1); transition: opacity .2s, filter .2s` (hover: `opacity: 1; filter: none`)
Use `https://placehold.co/80x28` for each integration logo placeholder. Write the integration name as `alt` text. Include logos for the integrations listed in variables.

---

### SECTION 6 — PRICING (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** Write a first-person headline: "I want to start my free trial now."

**Single product card** — gradient border, `max-width: 480px; margin: 0 auto`

Product name: write the product name from variables.

**Feature list** — 6 items with green SVG checkmarks. Last 2 highlighted.

The 6 items cover: key features summary (3 main ones), integrations included, free trial terms, pricing after trial, data security/cloud backup, and cancellation policy (cancel anytime, no lock-in).

**Free trial badge strip** — inside card, above price:
`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Checkmark circle `38×38px; border-radius: 50%; background: [accent]; display: flex; align-items: center; justify-content: center` — accent checkmark SVG
- Trial text: `font-size: 12px; font-weight: 800; color: #0f172a` — write "[free trial duration] Free Trial"
- No credit card: `font-size: 11px; color: #2563eb; font-weight: 600` — write "No credit card required ↗"

**Price row:** subscription price + crossed-out original price.

Note: Write: "Cancel anytime. No long-term commitment."

**Countdown timer** — below the card. Same glass card style.

**Countdown JavaScript** — IIFE at end of `<body>`:
```js
(function () {
  var STORAGE_KEY = 'saasCountdownEnd_v1';
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

### SECTION 7 — PROOF / SCREENSHOTS & METRICS (light background)

`id="proof"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** Write: "Not Promises." in plain text + `.grad` span: "Real User Results."

**Intro block (centered):**
- Gradient kicker text: Write user metric from variables (e.g. "10,000+ Active Businesses · 4.8/5 Rating")
- Gradient heading: Write "What Businesses Are Achieving with [Product Name]"
- Paragraph: Write "Dashboard screenshots, report previews, and metrics from real users."

**Horizontal scroll card slider:**

Each `.proof-card` — same structure as Template A/B.

Image area represents: dashboard screenshots, report previews, transaction logs, mobile app views.

Write 6 proof cards:
1. Dashboard view — title: "Real-Time Sales Dashboard" / subtitle: "See everything at a glance — no manual tallying"
2. Time saved — title: e.g. "Reports Generated in 10 Seconds" / subtitle: "What used to take 2 hours now takes one tap"
3. Stock accuracy — title: e.g. "Zero Stock Discrepancies Since Month 1" / subtitle: "Real-time sync across all channels"
4. User count — title: e.g. "[user count] Businesses Trust This App" / subtitle: "Across retail, F&B, and service industries"
5. App store rating — title: "⭐ 4.8/5 App Store Rating" / subtitle: "[review count] verified reviews — consistently top-rated"
6. Integration working — title: e.g. "Shopify & Stripe Auto-Sync" / subtitle: "Every online sale recorded automatically"

Scroll hint: "Swipe left/right to see more."

**Bottom CTA block:**
- Trust line: Write: real results from real businesses, verified by [user count] active users.
- CTA button → `href="#pricing"` — Write "Start Free Trial" (or local equivalent)
- Note: Write: "[free trial duration] free — no credit card required."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="dream"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** Write: e.g. "Starting From Today"

- **H2:** Write 2 lines: "Imagine Running Your Business" / ".grad span: With Full Clarity."

- **Paragraph:** Write 3–4 sentences: what it feels like to have real-time visibility — knowing exactly what's selling, what stock to reorder, how much profit came in today — without spending the evening with a calculator. The relief of making confident decisions backed by data. Warm, practical tone.

**Inspirational marquee** — use 5 placeholder images representing happy business owners, clean shop setups, dashboard views. Duplicate for seamless loop.

**Testimonial quote card:**
Write one powerful first-person testimonial: before-state (overwhelmed by manual bookkeeping, afraid to expand because they couldn't see the numbers), turning point (started using the app), current state (opening a second outlet, feeling in control, business growing).

Byline: "— Real user of [product name]"

**Transition question:** Keep running your business blind, or get the visibility you deserve?

**CTA button** → `href="#pricing"` — Write "Yes, I Want to Start My Free Trial"

**Note:** Write: price · Cancel anytime · [free trial duration] free to start

---

### SECTION 9 — FAQ (light background #f8f9fb)

`id="faq"` · `padding: 48px 18px`
Inner: `max-width: 700px; margin: 0 auto`

**Title:** "Frequently Asked Questions" (or local equivalent)

Write 9 FAQ items:
1. **Who is this for?** — SME owners managing sales, stock, and finances manually. Particularly useful for retail, F&B, and service businesses running across one or more outlets.
2. **Is there really a free trial?** — Yes. [Free trial duration] with full access to all features. No credit card required to start. Explain what happens after the trial period.
3. **How long does setup take?** — Be specific: under [X minutes] to create an account, add products, and process the first transaction. No training needed.
4. **Does it work on my phone?** — Yes, fully mobile. Describe the app availability (iOS, Android) and whether the web version is also available.
5. **What happens to my data if I cancel?** — Data is stored securely in the cloud during the subscription. Explain what happens to the data after cancellation (export option, retention period, etc.)
6. **Does it work without internet?** — Describe offline capabilities (if any) and what syncs when connection is restored.
7. **What integrations are included?** — List the integrations from variables and how they work (which data flows between systems, in which direction, how often they sync).
8. **Is my data safe?** — Cloud infrastructure details, backup frequency, security measures. Keep it plain — avoid technical jargon.
9. **Can I cancel anytime?** — Yes. No long-term contracts. Month-to-month. Explain the cancellation process and whether there are any fees.

**CTA button below FAQ:** `href="#pricing"` — Write "Start Free Trial" (or local equivalent)

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
    textEl.textContent = ' just started their trial of ' + product;
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
- Section IDs must match exactly: `hero`, `product`, `early-testimonials`, `why-it-fails`, `features`, `pricing`, `proof`, `dream`, `faq`
- No checkout button in the pricing section — the checkout form is a separate component placed below this page
