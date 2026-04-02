# CuanMania Landing Page Generator

## What This Is
A client-side AI prompt generator for Indonesian SMBs (UMKM). Users fill a 7-step form describing their landing page needs, click "Generate Prompt", and get a structured prompt they copy into z.ai to generate an HTML landing page.

**Live URL:** https://cuanmania.vercel.app

## Tech Stack
- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4 (via Vite plugin)
- **Language**: TypeScript (migrated from JS)
- **UI Language**: Bahasa Indonesia
- **Deployment**: Vercel
- **Backend (deferred)**: Supabase (auth, saved prompts, payments — when ready for market)

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

### Structure
```
src/
  components/
    form/
      FormPanel.tsx            # Orchestrates all 7 sections, generate/reset buttons
      FormSection.tsx          # Reusable section wrapper (number, title, subtitle)
      Section*.tsx             # 7 section components, one per form step
    ui/                        # Reusable primitives (GroupedDropdown, PillSelector, TextInput, etc.)
    layout/                    # Header, HeroSection, TwoPanelLayout, Footer
    output/                    # OutputPanel, TypewriterText
  data/                        # 14 option files (frameworkOptions, toneOptions, etc.)
  hooks/
    useFormState.ts            # FormState interface + useReducer (SET_FIELD, TOGGLE_ELEMENT, RESET)
    usePromptGenerator.ts      # Validates → processes → generates prompt string
    useTypewriter.ts           # rAF-based typewriter animation
  templates/
    promptTemplate.ts          # processFormData() resolves custom fields/fallbacks, generatePrompt() builds the prompt
  utils/
    validation.ts              # validateForm() — checks required fields, returns error field IDs
    fallbacks.ts               # Default text for optional fields when left empty
    clipboard.ts               # Copy-to-clipboard utility
  context/
    ThemeContext.tsx            # Dark/light mode toggle
  App.tsx                      # Root component
  main.tsx                     # Entry point
docs/                          # PRD, prompt configs, reference materials
```

### Key Patterns
- **FormState**: Typed interface in `useFormState.ts` with explicit fields per section
- **Custom fields**: Some dropdowns have a "Lainnya (Isi Manual)" option that reveals a custom text input (e.g., `productType` → `productTypeCustom`)
- **Fallbacks**: Optional fields use default text in the prompt when left empty (defined in `utils/fallbacks.ts`)
- **Validation**: Only triggers after first generate attempt, clears reactively as fields are filled
- **Prompt generation**: `processFormData()` resolves custom fields + applies fallbacks → `generatePrompt()` interpolates into the final prompt string

## Conventions
- Component files: PascalCase (`.tsx`)
- Hooks: camelCase with `use` prefix (`.ts`)
- Config/data: kebab-case (`.ts`)
- All user-facing text in Bahasa Indonesia
- Tailwind utility classes, no CSS modules
- Brand colors: emerald green palette
