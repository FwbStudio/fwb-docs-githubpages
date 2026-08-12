import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { formatExpandableCommonErrors, stripGitBookFrontmatter } from './lib/resource-doc-helpers.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const legacyRoot = path.join(root, '..', 'docs', 'scripts')
const docsRoot = path.join(root, 'docs', 'resources')

const LEGACY = {
  bodybag: 'bodybag',
  'burger-shop': 'burger-shop',
  carwipe: 'carwipe',
  chopshop: 'chop-shop',
  'duty-system': 'duty-system',
  'fraud-v1': 'fraud-system-v1-old',
  'fraud-v2': 'fraud-system-v2-new',
  'gun-jamming': 'gun-jamming',
  icebox: 'ice-box',
  'items-placeables': 'item-placeables',
  'lashes-saloon': 'lashes-saloon',
  'loading-screen': 'loading-screen',
  'nails-saloon': 'nails-saloon',
  outfitbag: 'outfit-bags',
  'pizza-shop': 'pizza-shop',
  'safezone-creator': 'safezone-creator',
  'shoes-robbery': 'shoes-robbery',
  'skitz-shoes-store': 'skitz',
  smoking: 'smoking',
  switch: 'gun-switch',
  'trap-phone-v1': 'trap-phone',
  'trap-phone-v2': 'trap-phone',
  'useable-foods': 'useable-foods',
  'weave-wear': 'weave-wear',
  'white-widow': 'white-widow',
  'wigs-bundle': 'wigs-bundle'
}

const fallback = `| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Resource fails to start | Missing \`fs_bridge\` or \`ox_lib\` | Install dependencies and start them before the script |
| SQL / item errors | \`[INSTALL_ME_FIRST]\` not applied | Run SQL and add items from install folder |
| UI not opening | Wrong inventory override | Match Bridge inventory to your server |`

for (const slug of fs.readdirSync(docsRoot)) {
  const cePath = path.join(docsRoot, slug, 'common-errors.md')
  if (!fs.existsSync(cePath)) continue

  const folder = LEGACY[slug]
  let legacy = null
  if (folder) {
    const p = path.join(legacyRoot, folder, 'common-issues.md')
    if (fs.existsSync(p)) legacy = fs.readFileSync(p, 'utf8')
  }

  let body = formatExpandableCommonErrors(legacy ? stripGitBookFrontmatter(legacy) : fallback)
  if (!body.includes('::: details')) {
    body = formatExpandableCommonErrors(fallback)
  }
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  fs.writeFileSync(
    cePath,
    `---
title: ${title} Common Errors | FWB Studio Docs
description: Fix common ${title} issues on FiveM.
---


# ${title} — Common Errors

${body}
`
  )
  console.log('fixed', slug)
}
