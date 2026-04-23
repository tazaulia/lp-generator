import type { TemplateModule } from '../index';

const typeE: TemplateModule = {
  label: 'SaaS / Software',
  storageKey: 'saasCountdownEnd_v1',
  popupVerb: 'just started their trial of',

  s5: `### SECTION 5 — FEATURES (light background)

\`id="fitur"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** Write: "Semua yang Kamu Butuhkan" on line 1, then "Ada di" + product name wrapped in \`.grad\`.

**Subtitle:** Write: total feature count + primary integration count + pricing model — one line.

**Feature grid — 2×3 on ≥840px, 2 col on ≥640px, 1 col on mobile** (\`gap: 14px; margin-bottom: 14px\`):

Each \`.fitur-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card:
- Icon container: \`width: 44px; height: 44px; border-radius: 14px; background: rgba({{accentRgb}}, .1); display: flex; align-items: center; justify-content: center; margin-bottom: 14px\`
- SVG icon: 22×22px, accent color stroke, Lucide/Heroicons style
- Feature name: \`font-size: 15px; font-weight: 800; color: #0b0b0f; margin-bottom: 6px\`
- Description: \`font-size: 13px; line-height: 1.6; color: rgba(0,0,0,.6)\` — 2 sentences: what it does + the business outcome it enables

Write 6 features derived from the key selling points, one per card:
- Feature 1: Core function — the primary action the software automates or enables
- Feature 2: Data & reporting — what analytics or insights the user gains
- Feature 3: Automation — what repetitive task is eliminated
- Feature 4: Collaboration or multi-user feature — team or client sharing capability
- Feature 5: Integration — key third-party apps it connects with (mention specific names from the key selling points if provided)
- Feature 6: Mobile / accessibility — available anywhere, any device, offline capability if relevant

**Integrations card** — full-width, below the 2×3 grid (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Title: "Terhubung dengan Tools yang Sudah Kamu Pakai"
Display 6–8 integration logo placeholders in a flex row: \`width: 36px; height: 36px; border-radius: 8px; background: #f0f0f0; filter: grayscale(1); transition: filter .2s\` — hover: \`filter: grayscale(0)\`
Subtitle: list the key integrations by name.`,

  s7: `### SECTION 7 — DASHBOARD SCREENSHOTS & METRICS (light background)

\`id="bukti"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Bukan Demo." + \`.grad\` span: "Lihat Langsung."

**Product credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Company logo \`100×100px; border-radius: 50%; margin: 0 auto 12px\` — \`https://placehold.co/100x100\`
- Gradient kicker: brand name + "Live Product"
- Gradient heading: "{{brandProductName}} — Dipakai Setiap Hari oleh Bisnis Nyata"
- Paragraph: "Screenshot dashboard nyata dan data dari pengguna aktif — bukan tampilan demo."

**Horizontal scroll card slider** (same CSS as base):

Write 6 proof cards derived from the key selling points and software outcomes:
1. Dashboard screenshot card — "Tampilan Dasbor Utama" / subtitle: "Semua metrik penting dalam satu layar"
2. Time saved metric — specific hours/week saved by automating the core workflow
3. Accuracy or error-reduction proof — percentage improvement vs. manual process
4. Active user count or company count using the software
5. App store or G2/Capterra rating — star rating + review count
6. Integration working proof — screenshot or proof of a key integration live in action

Below slider: "Swipe kiri/kanan untuk lihat lebih banyak."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Mulai Trial Gratis Sekarang"`,
};

export default typeE;
