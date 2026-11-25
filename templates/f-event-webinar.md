Build a single-file HTML landing page with inline CSS and vanilla JS only.
No Tailwind, no external CSS frameworks, no external fonts.
Output one complete `<!DOCTYPE html>` file.

---

## PRODUCT & BRAND VARIABLES

Fill in the values below. The rest of the prompt uses them to generate the full page.

- **Organizer / Company name:** [e.g. Yudis Venture / Taza Nutrition]
- **Event name:** [e.g. Scale Up Business Summit 2025]
- **Event type:** [e.g. Live Webinar / In-Person Workshop / Hybrid Conference]
- **Event date & time:** [e.g. Saturday, June 14, 2025 · 9:00 AM–5:00 PM]
- **Venue (if in-person or hybrid):** [e.g. Grand Hotel, Ballroom A — or "Online via Zoom" if online-only]
- **Core outcome promise:** [e.g. walk away with a repeatable client acquisition system you can implement the next day]
- **Key differentiators (3):** [e.g. practitioner-led (not theory), live Q&A with speakers, all recordings included]
- **Speaker 1 — Name, Title, Company:** [e.g. Andi Saputra · Co-Founder · GrowthID]
- **Speaker 2 — Name, Title, Company:** [e.g. Mira Handayani · CMO · TokoBesar.co]
- **Speaker 3 — Name, Title, Company:** [e.g. Rizal Firmansyah · Digital Strategist · Meta]
- **Social proof metric:** [e.g. 3,000+ alumni from 18 past events, avg. rating 4.9/5]
- **Ticket price:** [e.g. $79]
- **Original / crossed-out price:** [e.g. $199]
- **Access type:** [e.g. One-time payment — includes live session + replay access for 30 days]
- **Language:** [e.g. English — friendly, second person ("you")]
- **Tone:** [e.g. energetic, credible, urgency-driven — this is a live event with a hard deadline]
- **Accent color:** [e.g. #0a84ff]
- **Gradient (3 stops):** [e.g. linear-gradient(135deg, #0a84ff, #5ac8fa, #64d2ff)]
- **Light background:** [e.g. #f5f5f7]
- **Dark background:** [e.g. #000 and #0b0c10]
- **Registration / checkout anchor:** [e.g. #pricing]

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

Copy: write 3 short event trust signals using the key differentiators from variables, separated by ·  
Example pattern: "Live with Q&A · Practitioner-Led · Replay Included"

**1b. H1 headline**
`font-size: 38px` (48px on ≥640px) · `font-weight: 800` · `letter-spacing: -0.025em` · `line-height: 1.1` · `margin-bottom: 16px`

Write 2 lines:
- Line 1 (plain): a bold, 5–7 word statement of the event's core outcome (the tangible result they'll leave with)
- Line 2 (wrapped in `.grad`): the date and the 2 biggest differentiators — e.g. "One Day. Practitioners. Real Playbook."

**1c. Subtext paragraph**
`font-size: 15px; line-height: 1.6; color: rgba(0,0,0,.62); max-width: 480px; margin: 0 auto 24px`

Write 2–3 sentences establishing the event's credibility: the organizer name, what past editions have achieved (social proof metric), and one specific differentiator that makes this event different from watching free YouTube videos.

**1d. Speaker credibility strip**
Flex row, centered, `gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 8px`:
- 3 speaker pills, each: `display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid rgba(0,0,0,.08); border-radius: 999px; padding: 6px 12px 6px 6px; box-shadow: 0 4px 14px rgba(0,0,0,.06)`
- Round speaker photo `32×32px; border-radius: 50%; background: #e0e0e0; object-fit: cover` — use `https://placehold.co/32x32`
- Name + short title: `font-size: 12px; font-weight: 700; color: #111` (name) and `font-size: 11px; color: rgba(0,0,0,.5)` (title)

Write 3 speaker pills using Speaker 1, 2, and 3 from variables.

Below strip: `font-size: 11px; color: rgba(0,0,0,.42); font-weight: 600; text-align: center; margin-top: 6px`
Write: "[Event date & time] · [Venue]"

**1e. CTA button** → `href="#event"`
Write a curiosity-driven question asking what the event is about — conversational, not pushy (e.g. "What Will You Get from This Event?")

Below button — hint text: `font-size: 12px; color: rgba(0,0,0,.42); margin-top: 10px`
Write a soft 8–10 word nudge: read first, then decide if it's right for you.

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

Use 4–6 placeholder images (`https://placehold.co/200x250`) showing event atmosphere (audience shots, stage, speakers at a mic, workshops in action), then duplicate the exact same set for seamless infinite loop. Apply as `background-image` inline style.

**1g. Benefit card** (dark panel, bottom of hero section)
`background: #0b0c10; border-radius: 22px; padding: 20px 18px 22px; box-shadow: 0 22px 70px rgba(0,0,0,.22); max-width: 560px; margin: 0 auto`

Title: `color: rgba(255,255,255,.85); font-size: 13px; font-weight: 600; text-align: center; margin-bottom: 14px`
Write: what makes this event different from a typical seminar — one line.

4 list items in a CSS grid, `gap: 10px`:
- Each item: `background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; padding: 11px 14px; color: rgba(255,255,255,.9); font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 10px`
- Icon circle: `width: 18px; height: 18px; border-radius: 50%; background: rgba([accent rgb], .22); border: 1px solid rgba([accent rgb], .45)` — contains accent-color SVG checkmark

Write 4 short benefit statements: (1) practitioner speakers — not motivators or theorists, (2) structured live Q&A built into the agenda, (3) all materials + recording included in ticket, (4) actionable frameworks you can apply the next day.

---

### SECTION 2 — WHAT IS THIS EVENT? (dark background #000)

`id="event"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 560px; margin: 0 auto; text-align: center`

- **Title:** `font-size: 28px; font-weight: 800; letter-spacing: -0.025em; margin-bottom: 14px`
  Write a simple 4–6 word question: "What Exactly is This Event?"

- **Highlight line:** `font-size: 20px; font-weight: 700; margin-bottom: 18px; line-height: 1.4`
  Write one sentence: "In short, this is a [event type] where [core outcome promise]." Wrap the core outcome phrase in `.grad`.

- **Description paragraph:** `font-size: 14px; line-height: 1.65; color: rgba(255,255,255,.7); margin-bottom: 20px`
  List the format (live sessions, panel discussions, workshops), the date and time, the platform or venue, and what's included in the ticket (live access + replay + materials). Use `<br>` for line breaks and `<strong>` for emphasis on the key selling points (date, replay access, no hidden fees).

- **4 feature list items** — same card style as Section 1 benefit card but `border: 1px solid rgba(255,255,255,.12)` · `max-width: 420px; margin: 0 auto 20px`
  Write 4 credibility bullets covering: (1) the organizer name + how many past events they've run + total alumni, (2) every speaker is an active practitioner with real case studies — not a motivational speaker, (3) structured for immediate application — each session ends with a clear action step, (4) the event is designed for people who've attended free webinars and gotten nothing actionable.

- **Two CTA buttons** — `display: flex; gap: 14px; justify-content: center; flex-wrap: wrap`
  - Ghost/outline button → `href="#early-testimonials"` — Write "See What Past Attendees Say" equivalent
  - Filled accent button → `href="#agenda"` — Write "See the Full Agenda" equivalent

  Ghost style: `background: transparent; color: [accent]; border: 1px solid rgba([accent rgb], .6)` — hover fills accent solid
  Filled style: `background: [accent]; color: #fff; box-shadow: 0 14px 34px rgba([accent rgb], .32)`

---

### SECTION 3 — EARLY TESTIMONIALS (light background)

`id="early-testimonials"` · `padding: 40px 18px 48px`
Inner: `max-width: 920px; margin: 0 auto; text-align: center`

- **Section title:** `font-size: 24px; font-weight: 800; letter-spacing: -0.022em; margin-bottom: 6px`
  Write a 5–7 word headline: "They Attended. They Applied. They Won."

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); margin-bottom: 24px`
  Write: "Swipe to read what past attendees experienced."

**Horizontal swipe card strip:**
`display: flex; gap: 16px; overflow-x: auto; padding: 6px 10px 16px; margin: 0 -10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none`
On ≥840px: `justify-content: center; overflow-x: visible; padding: 0; margin: 0`

Each `.testi-card`: `flex: 0 0 auto; width: 290px` (280px on desktop) · `background: #fff; border-radius: 22px; padding: 14px; box-shadow: 0 18px 50px rgba(0,0,0,.08); text-align: left; scroll-snap-align: center; border: 1px solid rgba(0,0,0,.05)`

4 testimonial cards. Each contains:

**Label** — `font-size: 11px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 8px`
Use one of these colors per card in order: `#34c759` (green), `#0a84ff` (blue), `#af52de` (purple), `#ff9f0a` (orange)

Write a specific, measurable result label from attending a past edition (e.g. CLOSED 3 CLIENTS IN 2 WEEKS, REVENUE UP 40%, FIRST PAYING CLIENT EVER, STRATEGY FULLY REVAMPED)

**Photo container:** `aspect-ratio: 3/4; border-radius: 16px; overflow: hidden; background: #f0f0f0; margin-bottom: 12px; border: 1px solid rgba(0,0,0,.06)`
Use `https://placehold.co/290x387` for each.

**Quote:** `font-size: 13px; line-height: 1.5; color: #111; font-weight: 600; margin-bottom: 6px`
Write 4 authentic first-person quotes from past attendees. Each quote must: mention a specific result they got after attending, express surprise that it was more practical than expected, sound like a real person (not marketing copy). Use the brand tone.

**Name:** `font-size: 12px; color: rgba(0,0,0,.52)`
Write: — [Common first name, and their business or role]

---

Below cards: `font-size: 11px; color: rgba(0,0,0,.42); margin: 16px 0 22px`
Write 1 sentence: this event has helped people across different business types and stages — name 2–3 attendee personas (e.g. freelancer, small business owner, aspiring entrepreneur).

CTA button → `href="#why-it-fails"` — Write a question pointing to why free content and generic seminars fail (matches next section).

---

### SECTION 4 — PROBLEM REFRAME (dark background #0b0c10)

`id="why-it-fails"` · `padding: 52px 18px` · `color: #fff`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 14px`
  Write 2 lines: Line 1 — empathetic reframe ("Spent money on seminars, got nothing?"), Line 2 with `.grad` — the real cause ("The format was wrong — not you.").

- **Subtext:** `font-size: 15px; color: rgba(255,255,255,.65); max-width: 580px; margin: 0 auto 34px; line-height: 1.6`
  Write 2 sentences: it's not that you don't try hard enough — most events are built around inspiration and storytelling, not implementation. The structure never gives you a system you can actually run the next morning.

**2-column comparison grid** — 1 col on mobile, 2 col on ≥640px, `gap: 16px; margin-bottom: 28px`

Each card: `background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 18px; text-align: left`

**Left card — SEMINAR BIASA:**
Badge: `background: rgba(239,68,68,.14); color: #f87171; border-radius: 999px; padding: 5px 12px; font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 16px`
Write: "TYPICAL SEMINARS"

5 items, each with a red ✕ icon circle (`background: rgba(239,68,68,.18); color: #f87171; width: 20px; height: 20px; border-radius: 50%; font-size: 11px; font-weight: 800; flex: 0 0 auto`):

Write 5 conventional seminar problems: motivational speakers with no real business behind their advice / generic slides that cover basics anyone can find on YouTube / no structured Q&A — only one-way presentation / inspiration fades within 48 hours with nothing to implement / expensive tickets with no replay if you miss a session

**Right card — THIS EVENT:**
Badge: `background: rgba([accent rgb], .18); color: #60a5fa; border-radius: 999px` — same size/style
Write: "THIS EVENT"

5 items with blue ✓ icon circle (`background: rgba([accent rgb], .22); color: #60a5fa`):

Write the exact inverse of each problem, in the same order: every speaker is an active practitioner sharing a proven live framework / curated topics that go deep — not surface-level overviews / dedicated Q&A block built into every session / each session ends with a 1-page action checklist / full recording + materials included so you can rewatch anytime

- **Organizer note:** `font-size: 13px; color: rgba(255,255,255,.45); margin: 28px 0; line-height: 1.6`
  Write 1–2 sentences: the organizer name + how many editions they've run + total attendees + avg. rating from past events. State their selection criteria for speakers: every speaker must have live, active results — not just a theory or a book to sell.

CTA button → `href="#agenda"` — Write "See the Full Session Agenda" equivalent.

---

### SECTION 5 — AGENDA / WHAT'S INSIDE (light background)

`id="agenda"` · `padding: 48px 18px`
Inner: `max-width: 820px; margin: 0 auto; text-align: center`

- **H2:** `font-size: 28px` (34px ≥640px) · `font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px`
  Write: "What's on the Agenda" on line 1, then the event name on line 2 wrapped in `.grad`.

- **Subtitle:** `font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px`
  Write: total session count + total duration + "Live Q&A included in every session" — one line.

**Agenda card grid — 2×2** (`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px`):

On mobile (≤640px): `grid-template-columns: 1fr`

Each `.agenda-card`: `background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left`

Each card contains:
- **Time slot badge:** `display: inline-flex; align-items: center; gap: 6px; background: rgba([accent rgb], .08); color: [accent]; border-radius: 999px; font-size: 11px; font-weight: 700; padding: 4px 10px; margin-bottom: 12px`
  — Contains a small clock SVG icon (14×14px, accent color stroke) + time slot text (e.g. "9:00 – 10:30")
- **Format pill:** float right or flex alongside time badge — `background: rgba(0,0,0,.05); color: rgba(0,0,0,.55); border-radius: 999px; font-size: 10px; font-weight: 700; padding: 3px 8px; letter-spacing: .04em; text-transform: uppercase`
  — Write format: "TALK" / "WORKSHOP" / "PANEL" / "FIRESIDE"
- **Session title:** `font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 6px`
- **Speaker name + company:** `font-size: 12px; font-weight: 600; color: [accent]; margin-bottom: 8px`
- **Session summary:** `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)`
  — 2 sentences: what the session covers and the one actionable output attendees will leave with

Write 4 sessions using this arc for the 2×2 grid:
- **Session 1 — Positioning & Differentiation** (Speaker 1 from variables): How to carve out a market position competitors can't easily copy; output: a 1-sentence positioning statement attendees can use immediately
- **Session 2 — Customer Acquisition Playbook** (Speaker 2 from variables): The exact funnel sequence that consistently converts cold audiences without big ad budgets; output: a step-by-step acquisition map
- **Session 3 — Scaling Without Breaking Operations** (Speaker 3 from variables): How to grow revenue without hiring too fast or creating operational chaos; output: a 90-day scale checklist
- **Session 4 — Panel: Real Questions, Real Answers** (All 3 speakers): Unscripted live Q&A where attendees submit questions in real time; no prepared slides, just honest practitioner answers

Assign time slots and format types appropriate to the event (e.g. Talk for sessions 1–3, Panel for session 4).

**Session 5 (full-width row)** — `grid-template-columns: 1fr; margin-top: 14px`:
`.agenda-card` same style as above.

Write 1 full-width session:
- **Session 5 — Workshop: Build Your 30-Day Action Plan** (Facilitated by the organizer team): A structured working session where attendees apply what they learned to their own business; output: a completed 30-day implementation plan they leave with. Format: WORKSHOP.

**Bonus card** — full-width, below Session 5 (`grid-template-columns: 1fr; margin-top: 14px`):

Uses gradient border technique:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, [accent color], #34d399) border-box;
```

Header: flex row with pill badge (`color: [accent]; background: rgba([accent rgb], .1); border-radius: 999px; font-size: 11px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; padding: 4px 10px`) — write "INCLUDED WITH TICKET" — and title `font-size: 16px; font-weight: 800` — write "Everything That Comes With Your Registration."

3 list items with emoji icons, `font-size: 13px; font-weight: 600; color: #0b0b0f; padding: 6px 0; border-bottom: 1px solid rgba(0,0,0,.06)` (last item: no border):
Write 3 items: (1) full event recording — watch and rewatch for 30 days, (2) all session slide decks + action checklists in PDF, (3) private alumni group access — network with other attendees post-event.

---

### SECTION 6 — PRICING / REGISTRATION (light background #f8f9fb)

`id="pricing"` · `padding: 40px 18px 72px`
Inner: `max-width: 720px; margin: 0 auto`

- **Section title:** `font-size: 28px` (32px ≥640px) · `font-weight: 900; color: #0f172a; letter-spacing: -0.022em; text-align: center; margin: 0 0 30px`
  Write a first-person registration headline — something like "Yes, Reserve My Seat Now" in the page language.

**Single ticket card** — gradient border, `max-width: 480px; margin: 0 auto`:
```css
border: 2px solid transparent;
background: linear-gradient(#fff,#fff) padding-box,
            linear-gradient(135deg, #34d399, #3b82f6) border-box;
border-radius: 22px; padding: 24px 20px;
```

Event name: `font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.015em; margin: 0 0 6px`
Write the event name from variables.

**Date & venue strip** — `display: flex; align-items: center; gap: 8px; margin-bottom: 14px; font-size: 13px; font-weight: 700; color: rgba(0,0,0,.6)`
- Calendar SVG icon (14×14px) + event date & time from variables
- Separator ·
- Location pin SVG icon (14×14px) + venue from variables (abbreviated if long)

**Feature list** — `display: grid; gap: 10px; margin: 0 0 18px` — 6 items, each with a green circle SVG checkmark (circle `fill: #16a34a`, check path in white):

`font-size: 13px; line-height: 1.45; color: #111827; display: flex; align-items: flex-start; gap: 10px`

Write 6 what-you-get bullets. The last 2 items should use a highlighted style: `background: #f0fdf4; padding: 10px 12px; border-radius: 12px`

The 6 items should cover: live session access (session count + total duration), full recording for 30 days, all slide decks + action checklists PDF, private alumni group, direct Q&A with all 3 speakers, the 30-day action plan workshop included.

**Organizer credibility strip** — inside card, above price:
`display: flex; align-items: center; gap: 10px; background: #f0f7ff; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; border: 1px solid rgba([accent rgb], .14)`
- Organizer logo or placeholder `38×38px; border-radius: 50%` — use `https://placehold.co/38x38`
- Organizer name: `font-size: 12px; font-weight: 800; color: #0f172a` — write "[Organizer name] · [social proof metric, abbreviated]"
- Past event link: `font-size: 11px; color: #2563eb; font-weight: 600` — write "See Past Events ↗" (or local equivalent)

**Price row:** `display: flex; align-items: baseline; gap: 10px; margin: 0 0 16px`
- Current price: `font-size: 22px; font-weight: 900; color: #0f172a` — from variables
- Struck-out price: `font-size: 14px; color: #9ca3af; text-decoration: line-through` — from variables

Note: `font-size: 12px; color: #6b7280; text-align: center; margin: 10px 0 0` — Write: "One-time payment. Includes replay + materials."

**Countdown timer** — below the card, centered:

`max-width: 420px; width: 100%`
Glass card: `background: rgba(255,255,255,.78); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border: 1px solid rgba(255,255,255,.72); box-shadow: 0 12px 30px rgba(15,23,42,.08), inset 0 1px 0 rgba(255,255,255,.85); border-radius: 22px; padding: 16px 18px 20px; text-align: center`

Top row: pulsing red dot (`background: #ef4444; animation: pulseDot 1.8s ease infinite`) + label `font-size: 13px; font-weight: 700; color: #6b7280` — write "Early bird price expires in" (or local equivalent)

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
  var STORAGE_KEY = 'evtCountdownEnd_v1';
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

### SECTION 7 — SPEAKERS / EVIDENCE (light background)

`id="proof"` · `padding: 48px 18px`
Inner: `max-width: 900px; margin: 0 auto`

- **H2 (centered):** `font-size: 28px` (32px ≥640px) · `font-weight: 900; letter-spacing: -0.022em; line-height: 1.2; margin-bottom: 10px`
  Write: "Not Theory." in plain text + `.grad` span: "Practitioners with Proof."

**Event credibility block (centered, `text-align: center; margin-bottom: 28px`):**
- Organizer logo `80×80px; border-radius: 50%; margin: 0 auto 12px` — placeholder
- Gradient kicker text (`font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`): write "[Organizer name] · Speaker Lineup"
- Gradient heading (`font-size: 17px; font-weight: 900; same gradient technique`): write "Every Speaker Has a Live Business Behind Their Advice"
- Paragraph (`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.58)`): write "Our selection rule: every speaker at [event name] must have active, live results — not just a book or a course to sell. Their track record is verifiable."

**Horizontal scroll card slider:**
`display: flex; gap: 14px; overflow-x: auto; padding: 6px 2px 10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: thin; scrollbar-color: rgba(0,0,0,.12) rgba(0,0,0,.04)`

Each `.proof-card`: `scroll-snap-align: start; flex: 0 0 auto; width: 300px` (340px ≥640px) · `background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 16px 50px rgba(0,0,0,.07); overflow: hidden`

Image area: `aspect-ratio: 5/3; background: rgba(0,0,0,.04)` — img `object-fit: cover; width: 100%; height: 100%` — use `https://placehold.co/340x204`

Caption: `padding: 14px 14px 16px`
- Title: `font-size: 11px; font-weight: 900; letter-spacing: .07em; text-transform: uppercase; margin-bottom: 5px; background: gradient; -webkit-background-clip: text; -webkit-text-fill-color: transparent`
- Subtitle: `font-size: 12px; line-height: 1.45; color: rgba(0,0,0,.55); font-weight: 600`

For speaker profile cards (cards 1–3), add a speaker identity row below the caption:
`display: flex; align-items: center; gap: 8px; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,.06)`
- Round speaker photo `32×32px; border-radius: 50%; background: #e0e0e0` — use `https://placehold.co/32x32`
- Name: `font-size: 12px; font-weight: 700; color: #111`
- Title + company: `font-size: 11px; color: rgba(0,0,0,.5)`

Write 6 proof cards:
1. **Speaker 1 profile** — title: [Speaker 1 name] (gradient) / subtitle: [Speaker 1 title + company] · [their most impressive single credential or result, 1 sentence] / topic pill: the session topic they're covering
2. **Speaker 2 profile** — same format with Speaker 2 data
3. **Speaker 3 profile** — same format with Speaker 3 data
4. **Past event attendance** — title: "[X]+ Attendees" (gradient) / subtitle: "Across [N] past editions · [avg. rating]/5 average rating — read what they said"
5. **Alumni result** — title: specific business result from a past attendee (e.g. "$20K Revenue in 60 Days") / subtitle: real outcome from attending a previous edition of this event
6. **Repeat attendance** — title: "[X]% Return Attendee Rate" (gradient) / subtitle: "Past attendees who came back for the next edition — the highest proof of value"

Scroll hint: `font-size: 12px; color: rgba(0,0,0,.4); font-weight: 600; text-align: center; margin-top: 8px` — "Swipe to see all speakers and proof."

**Bottom CTA block (centered):**
- Trust line: `font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.7); font-weight: 800; max-width: 620px; margin: 0 auto 16px`
  Write: speakers selected because of active, proven results — not just a speaker fee and a slide deck.
- CTA button → `href="#pricing"` — Write "Reserve My Seat Now" (or local equivalent)
- Note: `font-size: 12px; color: rgba(0,0,0,.42); font-weight: 600; margin-top: 10px` — Write: "Early bird price. Limited seats."

---

### SECTION 8 — EMOTIONAL CLOSE / DREAM STATE (dark background #000)

`id="dream"` · `padding: 52px 18px` · `overflow: hidden` · `color: #fff`
Inner: `max-width: 640px; margin: 0 auto; text-align: center`

- **Kicker:** `font-size: 12px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; color: [accent]; margin-bottom: 18px; display: inline-block`
  Write: the event date from variables (e.g. "June 14, 2025")

- **H2:** `font-size: 32px` (40px ≥640px) · `font-weight: 900; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 14px`
  Write 2 lines: "Picture Yourself in" / ".grad span: The Room That Changes Things."

- **Paragraph:** `font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.65); max-width: 520px; margin: 0 auto 36px`
  Write 3–4 sentences describing the emotional outcome — not just learning but the clarity of having a concrete plan, the energy from being surrounded by serious peers, the confidence to go back and execute instead of wondering what to do next. Keep it warm, not manipulative.

**Inspirational marquee** — same technique as hero marquee but smaller:
Container: `max-width: 900px; margin: 0 auto 40px; overflow: hidden`
On ≤640px: full viewport width.

Inner `.dream-track`: `display: flex; gap: 14px; width: max-content; animation: marqueeScroll 28s linear infinite`

Each image: `width: 180px; aspect-ratio: 4/5; border-radius: 18px; background: #1a1a1a center/cover no-repeat; flex: 0 0 auto; box-shadow: 0 16px 40px rgba(0,0,0,.5)` — use 5 placeholder images (`https://placehold.co/180x225`) showing energized attendees, speaker on stage, group discussions, networking moments. Duplicate for seamless loop.

**Below marquee** (still inside page, re-enter centered inner):

**Testimonial quote card:**
`background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); border-radius: 20px; padding: 22px 20px; max-width: 520px; margin: 0 auto 28px`

Quote: `font-size: 16px; font-weight: 700; line-height: 1.55; color: rgba(255,255,255,.9); margin-bottom: 12px`
Write one powerful transformation testimonial in first person: specific before-state (e.g. "I had a product ready but had no idea how to sell it"), the turning point at the event (a session that clicked, a Q&A answer that unlocked everything), current state (first client signed, clearer positioning, revenue milestone hit).

Byline: `font-size: 13px; color: rgba(255,255,255,.45); font-weight: 600`
Write: "— From an attendee of a past edition"

**Transition question:** `font-size: 17px; font-weight: 700; color: rgba(255,255,255,.82); margin-bottom: 28px; line-height: 1.5`
Write a single final binary question: keep figuring it out alone, or spend one day with practitioners who've already solved it? Make it feel like a natural, friendly decision point — not pressure.

**CTA button** → `href="#pricing"` — Write a strong first-person "yes" — e.g. "Yes, I'm In!"

**Note below CTA:** `font-size: 12px; color: rgba(255,255,255,.35); margin-top: 12px; font-weight: 600`
Write: ticket price from variables · One-time payment · Includes replay + materials

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
1. **Who is this event for?** — Business owners, founders, and practitioners who want to grow their business with proven systems — not general audience. Best suited for those who are already running or actively building a business.
2. **Is it online or in-person?** — State the event type from variables. If hybrid: explain what each format gets. If online-only: mention the platform (e.g. Zoom), how the link is sent, and that connection quality is the attendee's responsibility.
3. **Can I attend if I'm a beginner?** — The content is intermediate to advanced — designed for people already running a business or in the process of launching. Raw beginners may find some sessions move quickly. But the workshop session is structured to be applicable at any stage.
4. **What if I can't attend live?** — The full recording is included with every ticket and available for 30 days post-event. Slide decks and action checklists are sent to all registered attendees regardless of live attendance.
5. **How do I get the recording and materials?** — After registration, you'll receive a confirmation email with access details. Materials are delivered digitally — no physical shipping.
6. **Is this a one-time payment or recurring?** — One-time ticket purchase. No subscriptions, no monthly fees, no hidden charges.
7. **What language are the sessions in?** — All sessions are conducted in English, with slides and materials in English.
8. **Who are the speakers and can I trust their credentials?** — List Speaker 1, 2, and 3 from variables with their title and company. State that every speaker was selected based on active, verifiable results — not a speaker bureau or an agent. Mention the organizer's past event track record (social proof metric from variables).
9. **Is there a refund policy?** — Tickets are non-refundable once purchased due to the digital nature of the access (recording + materials are delivered immediately after registration). Seats can be transferred to another person by emailing the organizer before the event date.

**CTA button below FAQ:**
`display: inline-flex; padding: 14px 26px; border-radius: 999px; background: #2563eb; color: #fff; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; border: 2px solid #2563eb; transition: background .2s ease, transform .15s ease` → hover: `background: #1d4ed8`
Text: Write "Register Now" (or local equivalent) · `href="#pricing"`

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
    // Example: 'Emma','Olivia','Sophia','Mia','Chloe','Grace','Lily','Hannah','Zoe','Ella',
    // 'James','Liam','Noah','Ethan','Lucas','Daniel','Ryan','Adam','Leo','Sam',
    // 'Sarah','Anna','Julia','Laura','Nina','Maya','Lena','Clara','Aria','Nora',
    // 'David','Alex','Ben','Max','Oscar','Jack','Kai','Owen','Eli','Theo'
    // Generate your own 40 names appropriate to the target audience.
  ];
  var product = ''; // Short event name from variables
  var popup = document.getElementById('salesPopup');
  var nameEl = document.getElementById('salesPopupName');
  var textEl = document.getElementById('salesPopupText');
  var lastN = '';

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pickName() { var n; do { n = pick(names); } while (n === lastN); lastN = n; return n; }

  function show() {
    nameEl.textContent = pickName();
    textEl.textContent = ' just registered for ' + product; // Translate to page language
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
- `loading="lazy"` on all images below the fold (all except hero speaker strip photos)
- Section IDs must match exactly: `hero`, `event`, `early-testimonials`, `why-it-fails`, `agenda`, `pricing`, `proof`, `dream`, `faq`
- No checkout button in the pricing section — the checkout form is a separate component placed below this page
