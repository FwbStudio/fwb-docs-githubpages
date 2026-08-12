# Resource docs format

Use this format whenever a new FWB script is added under `docs/resources/`.

Keep pages short, practical, and matching the Bridge section style.

## Folder layout

```text
docs/resources/<script-slug>/
  index.md                 # Overview (required)
  installation.md          # Install steps (required)
  configuration.md         # Config overview OR split files below
  esx-config.md            # Optional: ESX config reference
  qbcore-config.md         # Optional: QBCore / Qbox config reference
  integrations.md          # Optional: supported resources
  exports.md               # Optional: exports / functions
  common-issues.md         # Optional: FAQ / fixes
```

Slug rules:

- lowercase
- kebab-case
- match product name when possible (`safezone-creator`, `trap-phone`, `white-widow`)

## Sidebar entry

Add under `Resources` in `docs/.vitepress/config.mts`:

```ts
{
  text: 'Script Display Name',
  collapsed: true,
  items: [
    { text: 'Overview', link: '/resources/<script-slug>/' },
    { text: 'Installation', link: '/resources/<script-slug>/installation' },
    { text: 'Configuration', link: '/resources/<script-slug>/configuration' },
    { text: 'Integrations', link: '/resources/<script-slug>/integrations' },
    { text: 'Exports', link: '/resources/<script-slug>/exports' },
    { text: 'Common Issues', link: '/resources/<script-slug>/common-issues' }
  ]
}
```

Only include links for pages that exist.

## Page checklist

### `index.md` (Overview)

- What the script does (2–4 sentences)
- Frameworks: ESX / QBCore / Qbox
- Dependencies (Bridge, ox_lib, MLO, etc.)
- Links to Installation / Config / Issues

### `installation.md`

- Requirements
- Folder placement (`[fs]`)
- `server.cfg` notes
- Items / SQL / images from `[INSTALL_ME_FIRST]`
- Restart notes

### Configuration pages

- Show the real editable config keys users need
- Prefer exact file names from the resource
- Split ESX vs QB only when configs differ a lot

### `integrations.md`

- Table of supported inventories, targets, appearance, dispatch, etc.
- Say what to do if unsupported (override / contact support)

### `exports.md`

- Client / server exports
- Short examples
- Use expandable `<details>` sections for each export when the list is long

### `common-issues.md`

- Symptom → cause → fix
- Keep console errors in fenced code blocks

## Writing rules

- No “Legacy” labels unless the product is actually discontinued
- Prefer tables for compatibility lists
- Prefer expandable sections for long override/export lists
- Do not invent features that are not in the script
- If source docs exist in the old GitBook repo, port and clean them instead of rewriting from memory

## Source of truth order

1. Local script package (`fxmanifest`, `config`, `[INSTALL_ME_FIRST]`)
2. Old GitBook docs in the `docs` repo
3. Store page text (for marketing wording only)

When the user says “add docs for X”, follow this format and create the folder + sidebar entry first.
