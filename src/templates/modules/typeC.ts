import type { TemplateModule } from '../index';

const typeC: TemplateModule = {
  label: 'Agency / Jasa',
  storageKey: 'svcCountdownEnd_v1',
  popupVerb: 'just booked a session with',

  s5: `### SECTION 5 — OUR PROCESS (light background)

\`id="proses"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** Write: "Bagaimana Kami" on line 1, then "Mengerjakannya" wrapped in \`.grad\`.

**Subtitle:** Write: total steps + average turnaround + what the client delivers vs. what the agency delivers — one line.

**Process step grid — 2×2** (\`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px\`):
On mobile (≤640px): \`grid-template-columns: 1fr\`

Each \`.proses-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card:
- Step number badge: \`display: inline-flex; width: 32px; height: 32px; border-radius: 50%; background: rgba({{accentRgb}}, .1); color: {{accent}}; font-size: 14px; font-weight: 900; align-items: center; justify-content: center; margin-bottom: 12px\`
- Title: 16px, 800 weight
- Description: 13px — what happens in this step, what the client needs to provide, and what the agency delivers

Write 5 numbered process steps derived from the service and key selling points:
- Step 1: Brief & Discovery — initial call, questionnaire, or kickoff meeting to understand goals
- Step 2: Strategy & Planning — research, wireframe, or proposal phase before production begins
- Step 3: Production / Execution — the main delivery work (design, writing, development, etc.)
- Step 4: Revision — feedback rounds, number of revisions included, how to submit feedback
- Step 5 (full-width row): Delivery & Handoff — final file delivery, documentation, and what happens after

Steps 1–4 go in the 2×2 grid. Step 5 goes full-width below (\`grid-template-columns: 1fr\`).

**Scope card** — full-width, below Step 5 (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Pill badge: write "SUDAH TERMASUK" · Title: "Semua yang Kamu Dapat"
List 3 deliverables included in the service package: each with emoji + deliverable name + what it means for the client.`,

  s7: `### SECTION 7 — PORTFOLIO & RESULTS (light background)

\`id="bukti"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Bukan Janji." + \`.grad\` span: "Portofolio Nyata."

**Agency credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Agency logo/avatar \`100×100px; border-radius: 50%; margin: 0 auto 12px\` — \`https://placehold.co/100x100\`
- Gradient kicker: brand name + "Portfolio & Track Record"
- Gradient heading: "Hasil Nyata untuk Klien {{brandProductName}}"
- Paragraph: "Data dan screenshot dari proyek nyata — bukan mockup atau contoh fiktif."

**Horizontal scroll card slider** (same CSS as base):

Write 6 portfolio/result cards derived from the key selling points and service outcomes:
1. Years in business or total client count card
2. Specific conversion result for a past client (e.g. "ROAS 4.2x" or "CTR naik 3x")
3. Speed delivery proof — project completed faster than the industry average
4. Revenue impact for a client — concrete business outcome from the service
5. Total project count or happy client metric
6. Repeat client rate or referral metric — social proof that clients come back

Below slider: "Swipe kiri/kanan untuk lihat lebih banyak."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Book a Session Now"`,
};

export default typeC;
