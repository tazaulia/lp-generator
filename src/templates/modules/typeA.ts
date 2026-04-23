import type { TemplateModule } from '../index';

const typeA: TemplateModule = {
  label: 'Kursus / Coaching',
  storageKey: 'tnWLCountdownEnd_v1',
  popupVerb: 'just bought',

  s5: `### SECTION 5 — WHAT'S INSIDE THE PROGRAM (light background)

\`id="isi-program"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** \`font-size: 28px\` (34px ≥640px) · \`font-weight: 900; letter-spacing: -0.025em; line-height: 1.2; margin-bottom: 8px\`
Write: "Apa yang Kamu Dapat di" on line 1, then the product name on line 2 wrapped in \`.grad\`.

**Subtitle:** \`font-size: 14px; color: rgba(0,0,0,.58); line-height: 1.6; margin-bottom: 32px\`
Write: module count + format (video/ebook) + bonus count — one line, based on the product format from variables.

**Module grid — 2×2** (\`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px\`):
On mobile (≤640px): \`grid-template-columns: 1fr\`

Each \`.ip-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card contains:
- Module image: full-width, \`border-radius: 12px; margin-bottom: 12px\` — use \`https://placehold.co/400x240\`
- Label: \`font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 10px\` — cycle colors: accent, #34c759, #af52de, #ff9f0a, #5ac8fa
- Title: \`font-size: 16px; font-weight: 800; color: #0b0b0f; letter-spacing: -0.01em; margin-bottom: 6px\`
- Description: \`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)\`

Write 5 curriculum modules derived from the key selling points and program structure:
- Module 1: The foundational science or method — what most people skip and why it matters
- Module 2: Personalized baseline — the calculation or diagnosis step that makes everything work
- Module 3: The core daily practice — the flexible, sustainable approach that replaces willpower
- Module 4: Mindset and psychology — why knowledge alone fails without this shift
- Module 5 (full-width row): The maintenance/anti-rebound module — how to keep results permanently

Modules 1–4 go in the 2×2 grid. Module 5 goes in a full-width row below (\`grid-template-columns: 1fr\`).

**Bonus card** — full-width, below Module 5 (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Pill badge: accent color · write "BONUS EKSKLUSIF" · Title: \`font-size: 16px; font-weight: 800\` · write 3 practical bonus tools matching the product (e.g. tracking dashboard, reference guide, habit system). Each item: emoji icon + name + one-line value description.`,

  s7: `### SECTION 7 — COACH TRACK RECORD (light background)

\`id="bukti"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Bukan Klaim." in plain text + \`.grad\` span: "Bukti Nyata."

**Coach credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Coach photo \`100×100px; border-radius: 50%; margin: 0 auto 12px\` — use \`https://placehold.co/100x100\`
- Gradient kicker: \`font-size: 11px; font-weight: 900; letter-spacing: .08em; text-transform: uppercase\` + gradient text: coach/brand name + "Track Record"
- Gradient heading \`font-size: 17px; font-weight: 900\`: "Hasil Nyata Klien Coaching"
- Paragraph \`font-size: 13px; color: rgba(0,0,0,.58)\`: "Data dashboard dan rekam jejak nyata dari klien {{brandProductName}}."

**Horizontal scroll card slider:**
\`display: flex; gap: 14px; overflow-x: auto; padding: 6px 2px 10px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: thin;\`

Each \`.bukti-card\`: \`scroll-snap-align: start; flex: 0 0 auto; width: 300px\` (340px ≥640px) · \`background: #fff; border: 1px solid rgba(0,0,0,.07); border-radius: 20px; box-shadow: 0 16px 50px rgba(0,0,0,.07); overflow: hidden\`

Image area: \`aspect-ratio: 5/3\` — use \`https://placehold.co/340x204\`
Caption: gradient title (11px, uppercase) + subtitle (12px, \`color: rgba(0,0,0,.55)\`)

Write 6 proof cards with specific result data derived from the key selling points:
1. Creator certification/credential proof card
2. Specific client result (measurable outcome + timeframe)
3. Before/after transformation (physical, financial, or skill-based)
4. Sustained result — still stable months after the program
5. Consistency data — tracked progress throughout the program duration
6. No-rebound proof — the change that made it permanent

Below slider: "Swipe kiri/kanan untuk lihat lebih banyak."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Dapatkan Programnya Sekarang"`,
};

export default typeA;
