# Resource docs format

Use this format whenever a new FWB script is added under `docs/resources/`.

Run `node scripts/sync-resources-from-github.mjs` (requires `GITHUB_TOKEN`) to regenerate pages from GitHub + legacy GitBook content.

## Folder layout

```text
docs/resources/<script-slug>/
  index.md                 # Preview (hero + videos)
  overview.md              # Features and package info
  installation.md          # Dependencies table + install steps
  configuration.md         # When config/ exists (optional)
  exports/
    client.md              # Optional
    server.md              # Optional
  functions/
    client.md              # Optional
    server.md              # Optional
  integrations.md          # Optional — Bridge / inventory support
  common-errors.md         # Optional — symptom → fix tables
  questions.md             # Optional — FAQ (e.g. Notify)
```

Slug rules: lowercase kebab-case (`safezone-creator`, `trap-phone-v2`).

## Sidebar

Top-level groups in `docs/.vitepress/config.mts`:

- **Get Started** — expanded
- **Bridge** — expanded
- **Scripts** — expanded, all script products listed
- **Weapons** — expanded, all weapon packs listed

Per-product sidebar (auto-built from `resource-pages.mts`):

1. Preview
2. Overview
3. Installation
4. Configuration *(if applicable)*
5. Exports → Client / Server *(if applicable)*
6. Functions → Client / Server *(if applicable)*
7. Integrations *(if applicable)*
8. Common Errors **or** Questions *(one or the other, not both)*

Only include links for pages that exist for that product.

## Page checklist

### Preview (`index.md`)

- Hero, Tebex buy button, YouTube embeds
- Links to Overview / Installation

### Overview

- What the script does (port from legacy GitBook README when available)
- Package table: folder name, version, frameworks
- Links to other doc pages

### Installation

- **Dependencies table** with Required vs Optional columns
- `[INSTALL_ME_FIRST]` file list when present
- Numbered install steps + `server.cfg`

### Configuration

- Real config file paths and excerpt from `config/config.lua`

### Exports / Functions

- One page per side (client / server) when exports or unlocked hooks exist
- Use `<details>` per export name

### Common Errors / Questions

- Tables or FAQ sections ported from old docs when possible

## Writing rules

- No “Legacy” labels unless the product is discontinued
- Prefer tables for dependencies and compatibility
- Do not invent features — use repo source + old GitBook docs
- Versioned products (Fraud, Trap Phone) always get separate folders

## Source of truth order

1. GitHub repo (`fxmanifest`, `config`, `[INSTALL_ME_FIRST]`, unlocked files)
2. Old GitBook docs in `../docs/scripts/` (legacy)
3. Tebex store text (marketing only)
