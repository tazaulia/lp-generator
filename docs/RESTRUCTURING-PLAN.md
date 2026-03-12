# CuanMania LP Generator — Restructuring Plan

## Status: Phases 0–1 Complete, Remainder Deferred

### Phase 0: Project Restructuring — DONE
- Copied `cuanmania/*` into `lp-generator/` as new root
- Moved docs into `docs/`
- `git init`, `.gitignore`, `.env.example`, `CLAUDE.md`
- Connected to GitHub: https://github.com/tazaulia/lp-generator

### Phase 1: TypeScript Migration — DONE
- Installed `typescript`, `@types/react`, `@types/react-dom`
- Added `tsconfig.json` with strict mode
- Converted ALL files (14 data, 3 utils, 3 hooks, 1 template, 6 UI, 7 form, 4 layout, 2 output, context, App, main, vite.config)
- Zero TS errors, build passes

### Phases 2–5: Config-Driven Engine — DEFERRED

**Decision (2026-03-12):** The config-driven engine (core types, product configs, generic FormRenderer, registry, cleanup) was designed to support multiple product types. Deferred because:

1. No plan to add product #2 until the landing page product is validated
2. The current structure is already efficient for AI-agent development (small typed files, clear naming, good CLAUDE.md)
3. An AI agent can scaffold a second product from the existing patterns when needed

Supabase integration (originally Phase 4) is also deferred until ready for market.

### If Revisiting Later
The original plan for Phases 2–5 is preserved in git history (commit `226936a`). It covered:
- Core type definitions (`ProductConfig`, `FormField`, `PromptTemplate`, etc.)
- Consolidating 14 data files + 7 section components into a single product config
- Generic form engine (`FormRenderer`, `SectionRenderer`, `useProductForm`)
- Product registry for zero-engine-change product additions
- Supabase client/auth/saved-prompts stubs
