import type { TemplateModule } from '../index';

const typeB: TemplateModule = {
  label: 'Digital Product',
  section5Id: 'product-contents',
  storageKey: 'dpCountdownEnd_v1',
  popupVerb: 'just downloaded',

  s5: `### SECTION 5 — WHAT'S INSIDE THE PRODUCT (light background)

\`id="product-contents"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** Write: "What's Inside" on line 1, then the product name on line 2 wrapped in \`.grad\`.

**Subtitle:** Write: product format (file types, total pages/modules, resource count) — one line.

**Content breakdown grid — 2×2** (\`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px\`):
On mobile (≤640px): \`grid-template-columns: 1fr\`

Each \`.ip-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card:
- Section image: \`border-radius: 12px; margin-bottom: 12px\` — \`https://placehold.co/400x240\`
- Label: cycling colors (accent, #34c759, #af52de, #ff9f0a) + uppercase text
- Title: 16px, 800 weight
- Description: 13px, describes the core value of that section/chapter

Write 4 content breakdown sections derived from the key selling points:
- Section 1: The foundational framework or core method — what makes this product different from free content
- Section 2: Step-by-step execution guide — the concrete process, templates, or scripts included
- Section 3: Examples, case studies, or swipe files — real-world applications included in the product
- Section 4: The implementation toolkit — checklists, worksheets, or templates the buyer uses immediately

Item 4 goes full-width below the 2×2 grid (\`grid-template-columns: 1fr\`).

**Bonus card** — full-width, below Item 4 (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Pill badge: accent color · write "FREE BONUS" · Title: "Ready to Use Right Away"
List 3 immediate-use bonuses: each with emoji + name + value or practical benefit.`,

  s7: `### SECTION 7 — BUYER RESULTS (light background)

\`id="proof"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Not Promises." + \`.grad\` span: "Real Buyer Results."

**Product credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Product thumbnail \`100×100px; border-radius: 16px; margin: 0 auto 12px\` — \`https://placehold.co/100x100\`
- Gradient kicker: creator/brand name + "Buyer Results"
- Gradient heading: "Real Results After Applying {{brandProductName}}"
- Paragraph: "Screenshots and data from real buyers — not paid testimonials."

**Horizontal scroll card slider** (same CSS as base):

Write 6 proof cards built from the key selling points and product outcomes:
1. Creator credibility — portfolio, background, or track record that proves expertise
2. Buyer result 1 — specific, measurable outcome (revenue, skill, metric) after applying the product
3. Buyer result 2 — a different buyer persona achieving a different specific result
4. Speed of result — testimonial or data showing how quickly value was felt
5. Volume proof — buyer count, download count, or "X people already using this"
6. Repeat purchase / recommendation rate — buyers who bought again or referred others

Below slider: "Swipe left or right to see more."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Download Now"`,
};

export default typeB;
