# CuanMania — Landing Page Prompt Generator

A client-side AI prompt generator for Indonesian SMBs (UMKM). Fill out a 7-step form describing your landing page needs, click "Generate Prompt", and get a structured prompt ready to paste into [z.ai](https://z.ai) to generate an HTML landing page.

**Live:** [cuanmania.vercel.app](https://cuanmania.vercel.app)

---

## What It Does

1. User fills in a 7-section form (product, audience, tone, layout, etc.) in Bahasa Indonesia
2. Click "Generate Prompt"
3. A structured prompt is generated and shown with a typewriter animation
4. User copies the prompt and pastes it into z.ai
5. z.ai generates a complete HTML landing page

## Tech Stack

- **React 19** + **Vite 7**
- **TypeScript**
- **Tailwind CSS 4** (via Vite plugin)
- **Vercel** (deployment + analytics)

## Getting Started

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Project Structure

```
src/
  components/
    form/        # FormPanel + 7 section components
    ui/          # Reusable primitives (dropdowns, pills, inputs)
    layout/      # Header, Hero, Footer, TwoPanelLayout
    output/      # OutputPanel, TypewriterText
  data/          # Option arrays for dropdowns and selectors
  hooks/         # useFormState, usePromptGenerator, useTypewriter
  templates/     # promptTemplate.ts — core prompt generation logic
  utils/         # validation, fallbacks, clipboard
  context/       # ThemeContext (dark/light mode)
```

## Roadmap

- [ ] Supabase integration (auth, saved prompts, payments)
- [ ] User accounts and prompt history
- [ ] Monetization / premium tiers
