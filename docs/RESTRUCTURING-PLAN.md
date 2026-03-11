# CuanMania LP Generator — AI-First Restructuring Plan

## Context
CuanMania is a client-side React app that generates AI prompts for landing page creation, targeting Indonesian SMBs. The user wants to expand to multiple product types (email, ads generators) with a shared config-driven form engine, add Supabase backend later, and optimize the entire codebase for AI-agent development. No rush — do it right.

## Progress

### Phase 0: Project Restructuring — DONE
- Copied `cuanmania/*` into `lp-generator/` as new root
- Moved docs into `docs/`
- `git init`, `.gitignore`, `.env.example`, `CLAUDE.md`
- Connected to GitHub: https://github.com/tazaulia/lp-generator
- Old `Landing Page Generator/` root NOT deleted — user will do manually after full verification

### Phase 1: TypeScript Migration — DONE
- Installed `typescript`, `@types/react`, `@types/react-dom`
- Added `tsconfig.json` with strict mode, `@/` path alias
- Converted ALL files: 14 data files, 3 utils, 3 hooks, 1 template, 6 UI components, 7 form components, 4 layout components, 2 output components, context, App, main, vite.config
- Consolidated `FormState` type to single source in `useFormState.ts`
- Fixed readonly array compatibility with `as const` data files
- **Zero TS errors, build passes**

### Phase 2: Core Type Definitions — TODO
Create `src/types/index.ts` with these interfaces for the config-driven engine:

```typescript
FieldType = 'grouped-dropdown' | 'text-input' | 'textarea' | 'pill-selector' | 'checkbox' | 'checkbox-grid'
FieldOption = { value: string; label: string }
FieldOptionGroup = { group: string; options: readonly FieldOption[] }
FormField = { id, type, label, placeholder?, required, fallback?, options?, customFieldId?, customTriggerValue?, showWhen? }
FormSection = { id, number, title, subtitle, fields }
ProductConfig = { id, name, description, sections, promptTemplate }
FormState = Record<string, string | boolean | string[]>
ProcessedFormData = Record<string, string>
PromptTemplate = { process(state, fields) → ProcessedFormData; generate(data) → string }
ValidationResult = { isValid, errors: string[] }
```

### Phase 3: Config-Driven Form Engine — TODO

**3a. Landing Page Product Config**
- File: `src/configs/products/landing-page.ts`
- Consolidate all 14 data files + validation rules + fallbacks into one declarative `ProductConfig`
- All 7 sections with their fields, options inlined, required flags, fallback text, custom field mappings

**3b. Landing Page Prompt Template**
- File: `src/templates/landing-page.ts`
- Move existing `processFormData` + `generatePrompt` + derive functions from `src/templates/promptTemplate.ts`
- Implement `PromptTemplate` interface with `process()` and `generate()`

**3c. Generic Form Engine**
- `src/engine/useProductForm.ts` — hook: derives initial state from config, useReducer, validate from config, generate via template
- `src/engine/FormRenderer.tsx` — renders sections from config
- `src/engine/SectionRenderer.tsx` — maps `field.type` → UI component (GroupedDropdown, PillSelector, TextInput, etc.)
- `src/engine/resolveFields.ts` — generic custom-field resolution + fallback application utility

**3d. Product Registry**
- File: `src/configs/registry.ts`
- `Record<string, ProductConfig>` mapping product IDs to configs
- **Adding a new product** = create config + template + register. Zero engine changes.

### Phase 4: Supabase Prep (Stubs Only) — TODO
- `src/lib/supabase.ts` — createClient placeholder
- `src/lib/auth.ts` — useAuth hook type stubs
- `src/lib/saved-prompts.ts` — CRUD type stubs
- `src/types/database.ts` — table type stubs

### Phase 5: Cleanup — TODO
1. Delete `src/data/` (14 files — absorbed into product config)
2. Delete `src/components/form/Section*.tsx` (7 files — replaced by SectionRenderer)
3. Delete `src/hooks/useFormState.ts`, `usePromptGenerator.ts` (replaced by useProductForm)
4. Delete `src/utils/validation.ts`, `fallbacks.ts` (absorbed into config + engine)
5. Delete `src/templates/promptTemplate.ts` (replaced by `src/templates/landing-page.ts`)
6. Keep `src/components/ui/*` (render targets for engine)
7. Update `App.tsx` to use `FormRenderer` with config from registry

## Execution Order (remaining)
```
Phase 2 (types)
  → Phase 3a (config) + 3b (template) — parallel
    → Phase 3c (engine) + 3d (registry)
      → Phase 4 (supabase stubs)
        → Phase 5 (cleanup)
```

## Verification Checklist
- [x] `npm run build` passes with zero TS errors
- [ ] `npm run dev` — form renders identically to current version
- [ ] Fill all 7 sections → Generate → prompt output matches current output exactly
- [ ] Copy button works, CTA opens z.ai
- [ ] Dark mode toggle works
- [ ] Mobile layout unchanged
- [ ] All validation errors display correctly
- [ ] Reset clears everything
- [ ] Typewriter animation works + skip works

## Key Architectural Decisions
- **Options inlined in config** (not separate files) — AI agents find everything about a product in one place
- **FormState as `Record<string, ...>`** (not rigid per-product interface) — engine creates state dynamically from config
- **No shared base template** — each product owns its full prompt template
- **Separate templates per product** — simpler, more flexible, no coupling between products
