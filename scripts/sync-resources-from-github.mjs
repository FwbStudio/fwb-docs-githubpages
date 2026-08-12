#!/usr/bin/env node
/**
 * Sync resource docs from Friends-With-Benefits-Studio GitHub repos.
 * Requires: GITHUB_TOKEN env var
 *
 * Usage: node scripts/sync-resources-from-github.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const docsRoot = path.join(root, 'docs', 'resources')
const legacyDocsRoot = path.join(root, '..', 'docs', 'scripts')
const ORG = 'Friends-With-Benefits-Studio'

/** Map catalog slug → old GitBook folder name under docs/scripts */
const LEGACY_DOC_FOLDERS = {
  bodybag: 'bodybag',
  'burger-shop': 'burger-shop',
  carwipe: 'carwipe',
  chopshop: 'chop-shop',
  'duty-system': 'duty-system',
  'fraud-v1': 'fraud-system-v1-old',
  'fraud-v2': 'fraud-system-v2-new',
  'gun-jamming': 'gun-jamming',
  icebox: 'ice-box',
  'lashes-saloon': 'lashes-saloon',
  'loading-screen': 'loading-screen',
  'nails-saloon': 'nails-saloon',
  outfitbag: 'outfit-bags',
  'pizza-shop': 'pizza-shop',
  'items-placeables': 'item-placeables',
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

const token = process.env.GITHUB_TOKEN
if (!token) {
  console.error('GITHUB_TOKEN is required')
  process.exit(2)
}

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'User-Agent': 'fwb-docs-sync'
}

const { RESOURCES_PUBLISHED, DEFAULT_TEBEX_STORE } = await import(
  pathToFileURL(path.join(root, 'docs', '.vitepress', 'resources-catalog.mts')).href
)

/** Manual page overrides when auto-detect is wrong */
const PAGE_OVERRIDES = {
  notify: { configuration: true, questions: true },
  'fraud-v1': { configuration: true, integrations: true, exports: { client: true, server: true }, commonErrors: true },
  'fraud-v2': { configuration: true, integrations: true, exports: { client: true, server: true }, functions: { client: true, server: true }, commonErrors: true },
  'trap-phone-v1': { configuration: true, integrations: true, commonErrors: true },
  'trap-phone-v2': { configuration: true, integrations: true, exports: { client: true, server: true }, commonErrors: true },
  'loading-screen': { configuration: true, commonErrors: true },
  'safezone-creator': { configuration: true, integrations: true, commonErrors: true },
  'duty-system': { configuration: true, commonErrors: true },
  'automatic-pistol-pack': { commonErrors: true },
  'weapon-pack-v1': { commonErrors: true }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function ghFetch(url) {
  const res = await fetch(url, { headers })
  if (res.status === 403) {
    await sleep(2000)
    return ghFetch(url)
  }
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`${url} → ${res.status}`)
  return res.json()
}

async function fetchRepoFile(repo, filePath) {
  const data = await ghFetch(`https://api.github.com/repos/${ORG}/${repo}/contents/${encodeURIComponent(filePath)}`)
  if (!data?.content) return null
  return Buffer.from(data.content, 'base64').toString('utf8')
}

async function listInstallFolder(repo) {
  const data = await ghFetch(`https://api.github.com/repos/${ORG}/${repo}/contents/[INSTALL_ME_FIRST]`)
  if (!Array.isArray(data)) return []
  return data.filter((f) => f.type === 'file').map((f) => f.name)
}

function parseManifestDeps(manifest, category) {
  const rows = []
  const add = (name, required, notes) => {
    if (!rows.some((r) => r.name === name)) rows.push({ name, required, notes })
  }

  if (category === 'weapons') {
    add('FiveM server', true, 'Latest artifacts recommended')
    add('Inventory items (optional)', false, 'If your pack includes ox_inventory item lines')
    return rows
  }

  if (/@fs_bridge|fs_bridge\/import/.test(manifest)) {
    add('fs_bridge', true, 'FWB Bridge — required for framework integration')
  }
  if (/@ox_lib/.test(manifest)) {
    add('ox_lib', true, 'Shared UI / callbacks')
  }
  if (/oxmysql|@oxmysql/.test(manifest) || /dependency\s+['"]oxmysql['"]/.test(manifest)) {
    add('oxmysql', true, 'MySQL database')
  }
  if (/dependency\s+['"]ox_target['"]/.test(manifest)) {
    add('ox_target', false, 'Target system (if configured)')
  }

  add('ESX, QBCore, or Qbox', true, 'One framework per server')
  return rows
}

function extractExports(code) {
  if (!code) return []
  const names = new Set()
  const patterns = [
    /exports\s*\(\s*['"]([^'"]+)['"]/g,
    /exports\s*\[\s*['"]([^'"]+)['"]\s*\]/g
  ]
  for (const re of patterns) {
    for (const m of code.matchAll(re)) names.add(m[1])
  }
  return [...names].sort()
}

async function scanSideExports(repo, side) {
  const paths = [
    `${side}/unlocked.lua`,
    `${side}/exports.lua`,
    `${side}/main.lua`,
    `bridge/${side}.lua`
  ]
  const found = new Set()
  for (const p of paths) {
    const code = await fetchRepoFile(repo, p)
    extractExports(code).forEach((n) => found.add(n))
    await sleep(120)
  }
  return [...found]
}

function detectPages(resource, manifest, exportScan) {
  const base = {
    configuration: resource.category === 'scripts' && /config\//.test(manifest),
    exports: {
      client: exportScan.client.length > 0,
      server: exportScan.server.length > 0
    },
    functions: {
      client: /client\/unlocked\.lua|client\/function/.test(manifest),
      server: /server\/unlocked\.lua|server\/function/.test(manifest)
    },
    integrations: /@fs_bridge|bridge\//.test(manifest) && resource.category === 'scripts',
    commonErrors: resource.category === 'scripts' && resource.slug !== 'notify',
    questions: resource.slug === 'notify'
  }

  if (!base.exports.client && !base.exports.server) delete base.exports
  if (!base.functions.client && !base.functions.server) delete base.functions
  if (!base.integrations) delete base.integrations
  if (!base.configuration) delete base.configuration

  const override = PAGE_OVERRIDES[resource.slug]
  if (!override) return base

  return {
    ...base,
    ...override,
    exports: override.exports ?? base.exports,
    functions: override.functions ?? base.functions
  }
}

function depsTable(rows) {
  if (!rows.length) return '_Dependencies will be listed here after sync._\n'
  return `| Resource | Required | Notes |
| --- | --- | --- |
${rows.map((r) => `| \`${r.name}\` | ${r.required ? 'Yes' : 'Optional'} | ${r.notes} |`).join('\n')}
`
}

function exportList(exports, side) {
  if (!exports.length) {
    return `_No public ${side} exports detected in unlocked files. Check \`client/unlocked.lua\` or \`server/unlocked.lua\` in your package._\n`
  }
  return exports
    .map(
      (name) => `<details>
<summary><code>${name}</code></summary>

\`\`\`lua
-- ${side} example
exports['${name.replace(/^[^:]+:/, '')}']:FunctionName(args)
\`\`\`

</details>`
    )
    .join('\n\n')
}

function sanitizeLegacyMarkdown(text) {
  return text
    .replace(/^-\s\[[^\]]+\]\([^)]+\)[^\n]*\n?/gm, '')
    .replace(/\[([^\]]+)\]\(\.\/?[^)]+\.md\)/g, '$1')
    .replace(/\[([^\]]+)\]\(\.\.\/[^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\(\.\/[^)]+\)/g, '$1')
    .replace(/\\+\s*$/gm, '')
    .replace(/\\\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function stripGitBookFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\s*/m, '').trim()
}

function isNavOnlyReadme(text) {
  const body = stripGitBookFrontmatter(text)
  const nonEmpty = body
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  const headings = nonEmpty.filter((l) => /^#\s/.test(l))
  const mdLinks = nonEmpty.filter((l) => /^-\s.*\([^)]+\.md\)/.test(l))
  return mdLinks.length > 0 && mdLinks.length >= nonEmpty.length - headings.length
}

function loadLegacyMarkdown(slug, fileName) {
  const folder = LEGACY_DOC_FOLDERS[slug]
  if (!folder) return null
  const filePath = path.join(legacyDocsRoot, folder, fileName)
  if (!fs.existsSync(filePath)) return null
  return stripGitBookFrontmatter(fs.readFileSync(filePath, 'utf8'))
}

function buildOverview(resource, manifest, fallback) {
  const legacyRaw = loadLegacyMarkdown(resource.slug, 'README.md')
  if (legacyRaw && !isNavOnlyReadme(legacyRaw)) {
    return sanitizeLegacyMarkdown(
      legacyRaw
        .replace(/Purchase Here:[^\n]*/gi, '')
        .replace(/Discord\s*:[^\n]*/gi, '')
        .replace(/Preview\s*:[^\n]*/gi, '')
        .replace(/\*\*\*+/g, '')
    )
  }

  const description = manifest.match(/description\s+['"]([^'"]+)['"]/i)?.[1]
  if (description) {
    return `**${resource.name}** (\`${resource.repo}\`) — ${description}\n\nSupports ESX, QBCore, and Qbox via FS Bridge where required. See Installation for dependencies and \`[INSTALL_ME_FIRST]\` steps.`
  }

  return fallback
}

function buildCommonErrors(resource) {
  const legacyRaw = loadLegacyMarkdown(resource.slug, 'common-issues.md')
  if (legacyRaw && legacyRaw.length > 120) {
    return sanitizeLegacyMarkdown(legacyRaw.replace(/^#\s[^\n]+\n+/, ''))
  }

  return `| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Resource fails to start | Missing \`fs_bridge\` or \`ox_lib\` | Install dependencies and start them before \`${resource.repo}\` |
| SQL / item errors | \`[INSTALL_ME_FIRST]\` not applied | Run SQL and add items from install folder |
| UI not opening | Old NUI build or wrong inventory | Match Bridge inventory override to your server |
| Nothing happens in-game | Config job/item names wrong | Compare config with your framework job names |

Check F8 client console and server console for \`${resource.repo}\` errors after restart.`
}

function docNavLinks(pages) {
  const lines = ['- [Installation](./installation) — dependencies and setup']
  if (pages.configuration) lines.push('- [Configuration](./configuration)')
  if (pages.exports?.client || pages.exports?.server) {
    if (pages.exports.client && pages.exports.server) {
      lines.push('- [Exports](./exports/client) / [Server](./exports/server)')
    } else {
      lines.push(`- [Exports](./exports/${pages.exports.client ? 'client' : 'server'})`)
    }
  }
  if (pages.functions?.client || pages.functions?.server) {
    if (pages.functions.client && pages.functions.server) {
      lines.push('- [Functions](./functions/client) / [Server](./functions/server)')
    } else {
      lines.push(`- [Functions](./functions/${pages.functions.client ? 'client' : 'server'})`)
    }
  }
  if (pages.integrations) lines.push('- [Integrations](./integrations)')
  if (pages.commonErrors) lines.push('- [Common Errors](./common-errors)')
  if (pages.questions) lines.push('- [Questions](./questions)')
  return lines.join('\n')
}

function fm(title, description) {
  return `---
title: ${title}
description: ${description}
---

`
}

function writePages(resource, meta) {
  const dir = path.join(docsRoot, resource.slug)
  fs.mkdirSync(dir, { recursive: true })
  const store = resource.tebexUrl ?? DEFAULT_TEBEX_STORE
  const pages = meta.pages
  const base = `/resources/${resource.slug}`

  // Preview — keep existing if present, else minimal; sync only updates overview+ below for speed
  // Regenerate preview from stub generator logic inline
  const categoryLabel = resource.category === 'weapons' ? 'Weapon Pack' : 'FiveM Script'
  const videos = resource.videos ?? []
  const videoBlock =
    videos.length === 0
      ? `<div class="fwb-video-placeholder"><p><strong>Preview video coming soon.</strong></p></div>`
      : `<div class="fwb-video-grid">${videos
          .map(
            (v) => `<div class="fwb-video-card"><div class="fwb-video-card__frame"><iframe src="https://www.youtube.com/embed/${v.youtubeId}" title="${v.title}" loading="lazy" allowfullscreen></iframe></div><p class="fwb-video-card__title">${v.title}</p></div>`
          )
          .join('')}</div>`

  fs.writeFileSync(
    path.join(dir, 'index.md'),
    `${fm(`${resource.name} Preview | FWB Studio Docs`, `${resource.name} preview and Tebex purchase. ${resource.seoKeywords}.`)}
<div class="fwb-product-hero">
  <p class="fwb-product-hero__eyebrow">${categoryLabel}</p>
  <h1 class="fwb-product-hero__title">${resource.name}</h1>
  <p class="fwb-product-hero__tagline">${resource.tagline ?? `Official ${resource.name} for FiveM — ESX, QBCore, and Qbox.`}</p>
  <div class="fwb-product-hero__actions">
    <a class="fwb-product-hero__buy" href="${store}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
    <a class="fwb-product-hero__docs" href="./overview">Overview</a>
    <a class="fwb-product-hero__docs" href="./installation">Installation</a>
  </div>
</div>

## Preview videos

${videoBlock}
`
  )

  fs.writeFileSync(
    path.join(dir, 'overview.md'),
    `${fm(`${resource.name} Overview | FWB Studio Docs`, `${resource.name} features and setup overview for FiveM. ${resource.seoKeywords}.`)}
<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="${store}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# ${resource.name}

${meta.overview.startsWith('#') ? meta.overview.replace(/^#\s[^\n]+\n+/, '') : meta.overview}

## Package

| | |
| --- | --- |
| **Resource folder** | \`${resource.repo}\` |
| **Version** | \`${meta.version ?? 'see fxmanifest'}\` |
| **Frameworks** | ESX, QBCore, Qbox |
| **Category** | ${categoryLabel} |

## Documentation

${docNavLinks(pages)}
`
  )

  const installSteps =
    resource.category === 'weapons'
      ? `1. Extract \`${resource.repo}\` into \`resources/[fs]/\`.
2. Copy weapon meta / stream files from \`[INSTALL_ME_FIRST]\` if included.
3. Add inventory / item lines from the install folder.
4. Add to \`server.cfg\`:

\`\`\`cfg
ensure ${resource.repo}
\`\`\`

5. Restart the server and test in-game.`
      : `1. Place \`${resource.repo}\` in \`resources/[fs]/\`.
2. Import SQL and add items from \`[INSTALL_ME_FIRST]\` when provided.
3. Configure \`config/\` files before first start.
4. Add to \`server.cfg\` (**after** \`fs_bridge\` when Bridge is required):

\`\`\`cfg
ensure fs_bridge
ensure ${resource.repo}
\`\`\`

5. Restart the server and check the console for errors.`

  fs.writeFileSync(
    path.join(dir, 'installation.md'),
    `${fm(`${resource.name} Installation | FWB Studio Docs`, `Install ${resource.name} on FiveM — dependencies and server.cfg. ${resource.seoKeywords}.`)}
<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="${store}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# ${resource.name} — Installation

## Dependencies

${depsTable(meta.deps)}

${
  meta.installFiles.length
    ? `## [INSTALL_ME_FIRST] files

${meta.installFiles.map((f) => `- \`${f}\``).join('\n')}
`
    : ''
}

## Install steps

${installSteps}
`
  )

  if (pages.configuration) {
    fs.writeFileSync(
      path.join(dir, 'configuration.md'),
      `${fm(`${resource.name} Configuration | FWB Studio Docs`, `Configure ${resource.name} — config files and key options.`)}
# ${resource.name} — Configuration

Edit the config files inside \`${resource.repo}/config/\`. Exact keys depend on your package version.

${meta.configSnippet ? `## Config excerpt

\`\`\`lua
${meta.configSnippet.trim()}
\`\`\`
` : '_Open `config/config.lua` in your download for all options._'}
`
    )
  }

  if (pages.exports?.client || pages.exports?.server) {
    fs.mkdirSync(path.join(dir, 'exports'), { recursive: true })
    if (pages.exports.client) {
      fs.writeFileSync(
        path.join(dir, 'exports', 'client.md'),
        `${fm(`${resource.name} Client Exports | FWB Studio Docs`, `Client exports for ${resource.name}.`)}
# Client exports

${exportList(meta.exports.client, 'client')}
`
      )
    }
    if (pages.exports.server) {
      fs.writeFileSync(
        path.join(dir, 'exports', 'server.md'),
        `${fm(`${resource.name} Server Exports | FWB Studio Docs`, `Server exports for ${resource.name}.`)}
# Server exports

${exportList(meta.exports.server, 'server')}
`
      )
    }
  }

  if (pages.functions?.client || pages.functions?.server) {
    fs.mkdirSync(path.join(dir, 'functions'), { recursive: true })
    if (pages.functions.client) {
      fs.writeFileSync(
        path.join(dir, 'functions', 'client.md'),
        `${fm(`${resource.name} Client Functions | FWB Studio Docs`, `Client functions and events for ${resource.name}.`)}
# Client functions

Use these from other resources via exports or events documented in \`${resource.repo}/client/unlocked.lua\`.

${exportList(meta.exports.client, 'client')}
`
      )
    }
    if (pages.functions.server) {
      fs.writeFileSync(
        path.join(dir, 'functions', 'server.md'),
        `${fm(`${resource.name} Server Functions | FWB Studio Docs`, `Server functions for ${resource.name}.`)}
# Server functions

See \`${resource.repo}/server/unlocked.lua\` in your download.

${exportList(meta.exports.server, 'server')}
`
      )
    }
  }

  if (pages.integrations) {
    fs.writeFileSync(
      path.join(dir, 'integrations.md'),
      `${fm(`${resource.name} Integrations | FWB Studio Docs`, `Supported inventories, targets, and Bridge integrations.`)}
# ${resource.name} — Integrations

Works with **FS Bridge** for framework, inventory, target, and dispatch adapters.

| Integration | Supported |
| --- | --- |
| ESX / QBCore / Qbox | Yes (via Bridge) |
| ox_inventory | Yes |
| qb-inventory / qs-inventory | Yes (via Bridge overrides) |
| ox_target / qb-target | When configured in Bridge |

Configure unsupported resources in \`fs_bridge/config/\` overrides. See [Bridge Supported](/bridge/supported).
`
    )
  }

  if (pages.commonErrors) {
    fs.writeFileSync(
      path.join(dir, 'common-errors.md'),
      `${fm(`${resource.name} Common Errors | FWB Studio Docs`, `Fix common ${resource.name} issues on FiveM.`)}
# ${resource.name} — Common Errors

${buildCommonErrors(resource)}
`
    )
  }

  if (pages.questions) {
    fs.writeFileSync(
      path.join(dir, 'questions.md'),
      `${fm(`${resource.name} Questions | FWB Studio Docs`, `FAQ for ${resource.name}.`)}
# ${resource.name} — Questions

### Does this replace my existing notify resource?

Configure \`${resource.repo}\` to hook into your UI flow. See Configuration for editor settings.

### Is Bridge required?

${/@fs_bridge/.test(meta.manifest ?? '') ? 'Yes — `fs_bridge` must be installed and started first.' : 'No — this resource does not require Bridge.'}

### Where do I get support?

[Discord](https://discord.gg/WH6uQ6uFvq) with your Tebex invoice and server console logs.
`
    )
  }

  // Remove stale pages from old structure
  for (const stale of ['common-issues.md']) {
    const p = path.join(dir, stale)
    if (fs.existsSync(p)) fs.unlinkSync(p)
  }

  return { slug: resource.slug, pages, base }
}

async function analyzeResource(resource) {
  const manifest = (await fetchRepoFile(resource.repo, 'fxmanifest.lua')) ?? ''
  await sleep(150)
  const configSnippet = ((await fetchRepoFile(resource.repo, 'config/config.lua')) ?? '').split('\n').slice(0, 35).join('\n')
  await sleep(150)
  const installFiles = await listInstallFolder(resource.repo)
  await sleep(150)

  const exportScan = {
    client: await scanSideExports(resource.repo, 'client'),
    server: await scanSideExports(resource.repo, 'server')
  }

  const version =
    manifest.match(/^\s*version\s+['"]([^'"]+)['"]/im)?.[1] ??
    manifest.match(/^\s*version\s+(\S+)/im)?.[1]
  const deps = parseManifestDeps(manifest, resource.category)
  const pages = detectPages(resource, manifest, exportScan)

  const fallbackOverview =
    resource.category === 'weapons'
      ? `**${resource.name}** is a FWB Studio weapon pack for FiveM. It includes weapon meta and stream assets for ESX, QBCore, and Qbox servers. Follow Installation for \`[INSTALL_ME_FIRST]\` steps and inventory item setup.`
      : `**${resource.name}** (\`${resource.repo}\`) is a FWB Studio script for ESX, QBCore, and Qbox. It uses FS Bridge for framework and inventory compatibility where noted in the manifest. Install dependencies first, then configure \`config/\` before going live.`

  const overview = buildOverview(resource, manifest, fallbackOverview)

  return { manifest, version, deps, installFiles, configSnippet, exports: exportScan, pages, overview }
}

const pageRecords = {}
const results = []

for (const resource of RESOURCES_PUBLISHED) {
  process.stdout.write(`Sync ${resource.repo}… `)
  try {
    const meta = await analyzeResource(resource)
    writePages(resource, meta)
    pageRecords[resource.slug] = meta.pages
    results.push(resource.slug)
    console.log('ok')
  } catch (e) {
    console.log('fail', e.message)
  }
  await sleep(300)
}

// Write resource-pages.mts
const pagesFile = `/** Auto-generated by scripts/sync-resources-from-github.mjs */
import type { ResourcePages } from './resources-catalog.mts'

export const RESOURCE_PAGES: Record<string, ResourcePages> = ${JSON.stringify(pageRecords, null, 2)}
`

fs.writeFileSync(path.join(root, 'docs', '.vitepress', 'resource-pages.mts'), pagesFile)
console.log(`\nSynced ${results.length}/${RESOURCES_PUBLISHED.length} resources.`)
