import type { TemplateModule } from '../index';

const typeF: TemplateModule = {
  label: 'Event / Webinar',
  section5Id: 'agenda',
  storageKey: 'evtCountdownEnd_v1',
  popupVerb: 'just registered for',

  s5: `### SECTION 5 — AGENDA (light background)

\`id="agenda"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** Write: "What's at" on line 1, then the event name on line 2 wrapped in \`.grad\`.

**Subtitle:** Write: session count + total duration + "Live Q&A in every session" — one line.

**Agenda card grid — 2×2** (\`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px\`):
On mobile (≤640px): \`grid-template-columns: 1fr\`

Each \`.agenda-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card contains:
- Time slot badge: \`display: inline-flex; align-items: center; gap: 6px; background: rgba({{accentRgb}}, .08); color: {{accent}}; border-radius: 999px; font-size: 11px; font-weight: 700; padding: 4px 10px; margin-bottom: 12px\` — clock SVG icon + time (e.g. "9:00–10:30")
- Format pill: \`background: rgba(0,0,0,.05); color: rgba(0,0,0,.55); border-radius: 999px; font-size: 10px; font-weight: 700; padding: 3px 8px; text-transform: uppercase\` — TALK / WORKSHOP / PANEL / FIRESIDE
- Session title: 16px, 800 weight
- Speaker name + company: 12px, accent color
- Session summary: 13px — what the session covers + the one actionable output attendees leave with

Write 4 sessions derived from the key selling points and event format, in the 2×2 grid:
- Session 1 (TALK): Foundational framework — the core concept or system that underpins everything else at this event
- Session 2 (TALK or WORKSHOP): Acquisition or growth playbook — the specific tactic or funnel that consistently works
- Session 3 (TALK): Scale or operations — how to grow without the wheels falling off
- Session 4 (PANEL): Live Q&A panel with all speakers — unscripted, attendee-submitted questions

**Session 5** — full-width row below (\`grid-template-columns: 1fr\`):
- Format: WORKSHOP
- Title: "Workshop: Build Your 30-Day Action Plan"
- Summary: "A structured working session. Apply everything you've learned to your business — and leave with a finished implementation plan."

**Included card** — full-width, below Session 5 (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Pill badge: write "INCLUDED" · Title: "Everything That Comes with Your Ticket"
List 3 inclusions: full recording (30-day access), all slide decks + action checklists PDF, private alumni group access.`,

  s7: `### SECTION 7 — SPEAKERS & EVENT PROOF (light background)

\`id="proof"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Not Theory." + \`.grad\` span: "Practitioners with Proof."

**Event credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Organizer logo \`100×100px; border-radius: 50%; margin: 0 auto 12px\` — \`https://placehold.co/100x100\`
- Gradient kicker: organizer name + "Speaker Lineup"
- Gradient heading: "Every Speaker Has a Real Business Behind Their Talk"
- Paragraph: "Our rule: every speaker at {{brandProductName}} must have active, verifiable results."

**Horizontal scroll card slider** (same CSS as base):

Each speaker card (cards 1–3) gets an additional speaker identity row below the caption:
\`display: flex; align-items: center; gap: 8px; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,.06)\`
- Round speaker photo \`32×32px; border-radius: 50%\` — \`https://placehold.co/32x32\`
- Speaker name: 12px, 700 weight
- Title + company: 11px, muted

Write 6 cards derived from the key selling points and speaker lineup:
1. Speaker 1 profile — gradient title: Speaker 1 name · subtitle: title + company + their strongest single credential
2. Speaker 2 profile — same format
3. Speaker 3 profile — same format (if only 2 speakers, use a "Guest Speaker TBA" card)
4. Past event attendance proof — "X+ Attendees" + "across Y past editions · rated Z/5"
5. Alumni result — specific business outcome from a past attendee (revenue, client, product launched)
6. Return attendee rate — "X% of Attendees Return for the Next Edition" — the ultimate proof of value

Below slider: "Swipe left or right to see all speakers."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Save Your Seat Now"`,
};

export default typeF;
