# CuanMania Landing Page Generator

## What This Is
A client-side AI prompt generator for Indonesian SMBs (UMKM). Users fill a 7-step form describing their landing page needs, click "Generate Prompt", and get a structured prompt they copy into z.ai to generate an HTML landing page.

## Tech Stack
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4 (via Vite plugin)
- **Language**: TypeScript (migrated from JS)
- **UI Language**: Bahasa Indonesia
- **Deployment**: Vercel
- **Backend (planned)**: Supabase (auth, saved prompts, payments)

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

### Config-Driven Form Engine
The app uses a config-driven architecture where each product type (landing page, email, ads, etc.) is defined by a config file + prompt template. The engine renders forms and generates prompts generically.

```
src/
  types/index.ts              # Core interfaces (FormField, FormSection, ProductConfig, etc.)
  configs/
    registry.ts               # Maps product IDs to configs
    products/
      landing-page.ts         # Landing page config (sections, fields, options, validation)
  templates/
    landing-page.ts           # Prompt template (process + generate)
  engine/
    useProductForm.ts          # Generic hook: state, validation, generation
    FormRenderer.tsx           # Renders any ProductConfig as a form
    SectionRenderer.tsx        # Renders a section's fields by type
    resolveFields.ts           # Custom field resolution + fallback application
  components/
    ui/                        # Reusable primitives (GroupedDropdown, PillSelector, TextInput, etc.)
    layout/                    # Header, HeroSection, TwoPanelLayout, Footer
    output/                    # OutputPanel, TypewriterText
  hooks/
    useTypewriter.ts           # rAF-based typewriter animation
  context/
    ThemeContext.tsx            # Dark/light mode toggle
  lib/                         # Supabase client, auth, saved prompts (stubs)
  App.tsx                      # Root component
  main.tsx                     # Entry point
docs/                          # PRD, prompt configs, reference materials
```

### How to Add a New Product
1. Create `src/configs/products/<product-id>.ts` — define sections, fields, options, validation rules, fallbacks
2. Create `src/templates/<product-id>.ts` — implement `PromptTemplate` with `process()` and `generate()`
3. Register in `src/configs/registry.ts`
4. No engine code changes needed

### Key Patterns
- **FormState**: `Record<string, string | boolean | string[]>` — dynamic, driven by config
- **Custom fields**: Fields with `customTriggerValue` (e.g., "Lainnya (Isi Manual)") reveal a custom text input via `customFieldId`
- **Fallbacks**: Optional fields define `fallback` text used in the prompt when empty
- **Validation**: Only triggers after first generate attempt, clears reactively as fields are filled

## Conventions
- Component files: PascalCase (`.tsx`)
- Hooks: camelCase with `use` prefix (`.ts`)
- Config/data: kebab-case (`.ts`)
- All user-facing text in Bahasa Indonesia
- Tailwind utility classes, no CSS modules
- Brand colors: emerald green palette
