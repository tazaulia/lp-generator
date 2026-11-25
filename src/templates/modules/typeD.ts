import type { TemplateModule } from '../index';

const typeD: TemplateModule = {
  label: 'Physical Product',
  section5Id: 'ingredients',
  storageKey: 'physCountdownEnd_v1',
  popupVerb: 'just ordered',

  s5: `### SECTION 5 — INGREDIENTS & FEATURES (light background)

\`id="ingredients"\` · \`padding: 48px 18px\`
Inner: \`max-width: 820px; margin: 0 auto; text-align: center\`

**H2:** Write: "What's Inside" on line 1, then the product name on line 2 wrapped in \`.grad\`.

**Subtitle:** Write: key ingredient count + certification(s) + primary result claim — one line.

**Ingredient/feature card grid — 2×2** (\`grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px\`):
On mobile (≤640px): \`grid-template-columns: 1fr\`

Each \`.ingredient-card\`: \`background: #fff; border-radius: 20px; padding: 20px 18px; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 10px 30px rgba(0,0,0,.05); text-align: left\`

Each card:
- Ingredient/feature icon: \`width: 44px; height: 44px; border-radius: 12px; background: rgba({{accentRgb}}, .1); display: flex; align-items: center; justify-content: center; margin-bottom: 12px\` — SVG icon in accent color
- Label: cycling accent colors + uppercase text (e.g. "KEY INGREDIENT 1")
- Ingredient/feature name: 16px, 800 weight
- Science claim: 13px, italic — what research or certification backs this ingredient
- User benefit: 13px — what the customer actually feels or gains

Write 4 ingredient/feature cards derived from the key selling points:
- Card 1: Primary active ingredient or key feature — the main reason it works, backed by science
- Card 2: Supporting ingredient or secondary feature — what amplifies or completes the primary
- Card 3: Differentiating ingredient or unique formulation — what competitors don't have
- Card 4: Safety or quality marker — natural origin, allergen-free, or the purity standard

Step 4 goes full-width below (\`grid-template-columns: 1fr\`):
This card is the certification / quality assurance card:
- Badge: "CERTIFIED" (or relevant certification from variables)
- List the certifications (e.g. GMP, ISO, organic, third-party lab tested) with what each means for the customer
- Include a "How to Use" note: dosage, timing, and what to expect in the first 30 days

**Guarantee card** — full-width, below the certification card (\`margin-top: 14px\`):
Uses gradient border technique:
\`border: 2px solid transparent; background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg, {{accent}}, #34d399) border-box; border-radius: 20px; padding: 20px 18px;\`

Pill badge: write "QUALITY GUARANTEE" · Title: "Why It's Safe to Try"
List 3 risk-reversal points: money-back policy (if applicable), certified ingredients, no harmful chemicals.`,

  s7: `### SECTION 7 — PRODUCT PROOF & REVIEWS (light background)

\`id="proof"\` · \`padding: 48px 18px\`
Inner: \`max-width: 900px; margin: 0 auto\`

**H2 (centered):** Write: "Not Ads." + \`.grad\` span: "Proof from Real Buyers."

**Brand credibility block (centered, \`text-align: center; margin-bottom: 28px\`):**
- Brand logo \`100×100px; border-radius: 50%; margin: 0 auto 12px\` — \`https://placehold.co/100x100\`
- Gradient kicker: brand name + "Buyer Proof"
- Gradient heading: "Real Results from {{brandProductName}} Users"
- Paragraph: "Photos, data and reviews from real buyers — not ad models."

**Horizontal scroll card slider** (same CSS as base):

Write 6 product proof/review cards derived from the key selling points:
1. Lab certification card — product shot showing certification label or QR code
2. Before/after transformation — measurable result (e.g. weight, skin condition, energy) in specific timeframe
3. Marketplace rating — star rating + total reviews from Amazon/Shopify/etc.
4. Specific buyer result — first name, result, timeframe, in their own words
5. Ingredient quality proof — raw material sourcing or purity test result card
6. Repeat buyer percentage — "X% of buyers order again within 3 months"

Below slider: "Swipe left or right to see more."
CTA button → \`href="{{checkoutAnchor}}"\` — Write "Order Now"`,
};

export default typeD;
