# FWB Studio Docs — agent notes

When adding or updating script documentation in this repo, follow:

- [`docs/resources/_FORMAT.md`](docs/resources/_FORMAT.md)
- Template starter: [`docs/resources/_TEMPLATE/`](docs/resources/_TEMPLATE/)

## Current structure

- Get Started: general FiveM + FWB install (sidebar expanded)
- Bridge: Overview, Supported, Script Overrides, Configuration (sidebar expanded)
- Scripts: per-script docs — Preview, Overview, Installation, then optional Configuration / Exports / Functions / Integrations / Common Errors or Questions
- Weapons: weapon pack docs (same page model)

Sidebar: **Scripts** and **Weapons** are top-level groups (like Bridge), expanded by default. No “All Scripts” index page.

Regenerate resource pages: `node scripts/sync-resources-from-github.mjs` (needs `GITHUB_TOKEN`). Page flags: `docs/.vitepress/resource-pages.mts`.

## Rules

- Keep the Tebex dark teal theme
- Force dark mode (no appearance toggle)
- Nav actions are Store + Discord only (right of search)
- Prefer nested sidebar groups over flat long tab lists
- Port from local script files / old GitBook docs before inventing content

## Released vs private GitHub

Private GitHub may contain unreleased scripts. **Never add docs for a repo just because it exists.**

Before writing resource docs:

1. Confirm it is sold / released on [Tebex](https://fwbstudio.tebex.io/) when possible
2. If unsure, **ask the user**
3. Always skip unless confirmed released: Garage, Food Business Creator, Saucy Wings

Versioned products (separate docs, never mix):

- Fraud v1 / Fraud v2
- Trap Phone v1 / Trap Phone v2

Resource catalog (names, repos, sidebar): [`docs/.vitepress/resources-catalog.mts`](docs/.vitepress/resources-catalog.mts)

Bridge sidebar: one **Bridge** group → Overview, Supported, **Script Overrides** (collapsed), **Configuration** (collapsed).

Resources sidebar is auto-built from `resources-catalog.mts` + `resource-pages.mts`. Versioned products use `family` + `familyLabel` (Fraud v1/v2, Trap Phone v1/v2). Preview = `index.md` with Tebex + YouTube.

SEO: every page needs `title` + `description` frontmatter with product name and "FiveM / ESX / QBCore" keywords.

Bridge sidebar: **Bridge** (Overview, Supported) → **Configuration** → **Script Overrides** as separate collapsed groups (not nested) so only the active section expands.

Temp GitHub read access: user sets `$env:GITHUB_TOKEN` in their PowerShell (never paste token into chat).

Org for private released scripts: **Friends-With-Benefits-Studio** (fine-grained PAT, Contents read-only).

## Skip — never document

**Unreleased / discontinued / not renewed (user confirmed):**

`fs_airdrop`, `fs_garages`, `fs_illegalactivities`, `fs_multimenu`, `fs_npcrob`, `fs_playershop`, `fs_simpleshop_ui`, `fs_towjob_V1`, `fs_trainrobbery`, `fs_trapphone_v3`, `fs_zonecreation`, `fs_butterflybakkery_V1`, `fs_druglabs_V1`, `fs_femalebags_V1`, `fs_malebags_V1`

**Old per-framework repos** (scripts now ship combined ESX/QBCore/Qbox in one repo):

`fs_fraud_QBcore`, `fs_smoking_ESX`, `fs_smoking_QBcore`, `fs_whitewidow_QBcore`, plus archived framework splits (`fs_*_ESX`, `fs_*_QBcore`, etc.)

**MLO / map repos** — no customer docs:

All `fs_mlo_*`

**Internal / template / store / tools:**

`capy_zonemodule`, `default_polyzonecreator`, `Freecam-Module`, `fs_foodtemplate`, `fs_link`, `fs_template`, `fs_ui`, `fs_icebox_V1_old-old-version-before-update-`, `fwbstore`, `redesign_ox_inventory` (confirm if unsure)

**Public GitHub repos** — skip; use org private repos for source.

**Always skip unless user confirms released:** Garage, Food Business Creator, Saucy Wings (`fs_saucywings`).

**Released but no resource docs:** `redesign_ox_inventory` (ox_inventory build files only).

**Released — add to resource docs:** `fs_notify`.
