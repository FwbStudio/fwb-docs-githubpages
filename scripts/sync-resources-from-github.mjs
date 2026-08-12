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
import {
  LEGACY_EXPORT_CANDIDATES,
  stripGitBookFrontmatter,
  sanitizeLegacyMarkdown,
  loadLegacyMarkdown,
  loadLegacyExportDoc,
  loadLegacyFunctionsDoc,
  loadNotifyExportDocs,
  extractExportsFromCode,
  exportDocForSide,
  parseConfigExtras,
  extraDepsForResource,
  buildInventoryInstallSection,
  dispatchJobsSection,
  buildExportPageBody,
  formatExpandableExportDoc,
  formatExpandableCommonErrors,
  formatExpandableQuestions,
  detectPages,
  buildOverviewBody,
  writeOverviewPage
} from './lib/resource-doc-helpers.mjs'
import { LEGACY_DOC_FOLDERS } from './lib/legacy-doc-folders.mjs'
import { RESOURCE_OVERVIEWS } from './lib/resource-overviews.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const docsRoot = path.join(root, 'docs', 'resources')
const legacyDocsRoot = path.join(root, '..', 'docs', 'scripts')
const ORG = 'Friends-With-Benefits-Studio'

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
  notify: { configuration: true, questions: true, exports: { client: true, server: true }, commonErrors: false },
  'safezone-creator': { configuration: true, exports: { client: true, server: true }, functions: { client: true, server: true }, commonErrors: true },
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

async function listRepoDir(repo, dirPath) {
  const data = await ghFetch(
    `https://api.github.com/repos/${ORG}/${repo}/contents/${encodeURIComponent(dirPath)}`
  )
  return Array.isArray(data) ? data : []
}

async function listInstallTree(repo, folder = '[INSTALL_ME_FIRST]') {
  const data = await listRepoDir(repo, folder)
  if (!data.length) return []

  const files = []
  for (const entry of data) {
    if (entry.type === 'file') {
      const content = await fetchRepoFile(repo, entry.path)
      files.push({ name: entry.name, path: entry.path, content: content ?? '' })
      await sleep(80)
    } else if (entry.type === 'dir') {
      files.push(...(await listInstallTree(repo, entry.path)))
    }
  }
  return files
}

function parseManifestDeps(manifest, category, resource, legacyInstall) {
  return extraDepsForResource(resource, legacyInstall, manifest)
}

async function scanSideExports(repo, side) {
  const entries = await listRepoDir(repo, side)
  const luaPaths = entries.filter((e) => e.type === 'file' && e.name.endsWith('.lua')).map((e) => e.path)
  const paths = [...new Set([...luaPaths, `${side}/unlocked.lua`, `${side}/exports.lua`, `${side}/main.lua`, `bridge/${side}.lua`])]
  const found = new Set()
  for (const p of paths) {
    const code = await fetchRepoFile(repo, p)
    extractExportsFromCode(code, repo).forEach((n) => found.add(n))
    await sleep(100)
  }
  return [...found]
}

function exportPageBody(resource, side, legacyExportDoc, exportScan) {
  if (resource.slug === 'notify') return null
  return buildExportPageBody(resource, side, legacyExportDoc, exportScan)
}

function depsTable(rows) {
  if (!rows.length) return '_Dependencies will be listed here after sync._\n'
  return `| Resource | Required | Notes |
| --- | --- | --- |
${rows.map((r) => `| \`${r.name}\` | ${r.required ? 'Yes' : 'Optional'} | ${r.notes} |`).join('\n')}
`
}

function legacyMd(slug, fileName) {
  return loadLegacyMarkdown(legacyDocsRoot, slug, LEGACY_DOC_FOLDERS, fileName)
}

function buildCommonErrors(resource) {
  const legacyRaw = legacyMd(resource.slug, 'common-issues.md')
  const fallback = `| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Resource fails to start | Missing \`fs_bridge\` or \`ox_lib\` | Install dependencies and start them before \`${resource.repo}\` |
| SQL / item errors | \`[INSTALL_ME_FIRST]\` not applied | Run SQL and add items from install folder |
| UI not opening | Old NUI build or wrong inventory | Match Bridge inventory override to your server |
| Nothing happens in-game | Config job/item names wrong | Compare config with your framework job names |

Check F8 client console and server console for \`${resource.repo}\` errors after restart.`

  const body =
    legacyRaw && legacyRaw.length > 120
      ? formatExpandableCommonErrors(legacyRaw)
      : formatExpandableCommonErrors(fallback)
  return body
}

function docNavLinks(pages) {
  const lines = ['- [Installation](./installation) — dependencies, items, and setup']
  if (pages.configuration) lines.push('- [Configuration](./configuration)')
  if (pages.exports?.client || pages.exports?.server) {
    if (pages.exports.client && pages.exports.server) {
      lines.push('- [Exports — Client](./exports/client) / [Server](./exports/server)')
    } else {
      lines.push(`- [Exports](./exports/${pages.exports.client ? 'client' : 'server'})`)
    }
  }
  if (pages.functions?.client || pages.functions?.server) {
    if (pages.functions.client && pages.functions.server) {
      lines.push('- [Functions — Client](./functions/client) / [Server](./functions/server)')
    } else {
      lines.push(`- [Functions](./functions/${pages.functions.client ? 'client' : 'server'})`)
    }
  }
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

  writeOverviewPage({
    resource,
    body: meta.overview,
    pages,
    docsRoot,
    store,
    categoryLabel,
    documentationLinks: docNavLinks(pages)
  })

  const installSteps =
    resource.category === 'weapons'
      ? `1. Extract \`${resource.repo}\` into \`resources/[fs]/\`.
2. Follow the **Items & inventory setup** section below for your inventory (weapon meta, items, images).
3. Run any SQL files if included in \`[INSTALL_ME_FIRST]\`.
4. Add to \`server.cfg\`:

\`\`\`ini
ensure ${resource.repo}
\`\`\`

5. Restart the server and test in-game.`
      : `1. Place \`${resource.repo}\` in \`resources/[fs]/\`.
2. Install dependencies listed below (Bridge, \`ox_lib\`, etc.).
3. Complete **Items & inventory setup** from \`[INSTALL_ME_FIRST]\`.
4. Configure \`${resource.repo}/config/\` before first start.
5. Add to \`server.cfg\` (**after** \`fs_bridge\` when Bridge is required):

\`\`\`ini
ensure fs_bridge
ensure ${resource.repo}
\`\`\`

6. Restart the server and check the console for errors.`

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

${dispatchJobsSection(meta.configExtras.dispatchJobs)}

${buildInventoryInstallSection(meta.installFiles, resource.repo, resource.category)}

## Install steps

${installSteps}
`
  )

  if (pages.configuration) {
    fs.writeFileSync(
      path.join(dir, 'configuration.md'),
      `${fm(`${resource.name} Configuration | FWB Studio Docs`, `Configure ${resource.name} — config files and key options.`)}
# ${resource.name} — Configuration

Edit \`${resource.repo}/config/config.lua\` in your download.

<div class="fwb-config-block">

\`\`\`lua
${meta.configFull?.trim() || '_Open config/config.lua in your package._'}
\`\`\`

</div>
`
    )
  }

  if (pages.exports?.client || pages.exports?.server) {
    fs.mkdirSync(path.join(dir, 'exports'), { recursive: true })
    if (pages.exports.client) {
      let body =
        resource.slug === 'notify' && meta.notifyDocs?.client
          ? formatExpandableExportDoc(meta.notifyDocs.client, { resource: 'fs_notify', side: 'client' })
              .replace(/FWB\.Notify\(/g, "exports['fs_notify']:Notify(")
          : exportPageBody(resource, 'client', meta.legacyExportDoc, meta.exports)
      fs.writeFileSync(
        path.join(dir, 'exports', 'client.md'),
        `${fm(`${resource.name} Client Exports | FWB Studio Docs`, `Client exports for ${resource.name}.`)}
# Client exports

${body}
`
      )
    }
    if (pages.exports.server) {
      let body =
        resource.slug === 'notify' && meta.notifyDocs?.server
          ? formatExpandableExportDoc(meta.notifyDocs.server, { resource: 'fs_notify', side: 'server' })
              .replace(/FWB\.Notify\(/g, "exports['fs_notify']:Notify(")
          : exportPageBody(resource, 'server', meta.legacyExportDoc, meta.exports)
      fs.writeFileSync(
        path.join(dir, 'exports', 'server.md'),
        `${fm(`${resource.name} Server Exports | FWB Studio Docs`, `Server exports for ${resource.name}.`)}
# Server exports

${body}
`
      )
    }
  }

  if (pages.functions?.client || pages.functions?.server) {
    fs.mkdirSync(path.join(dir, 'functions'), { recursive: true })
    const fnBody = meta.legacyFunctionsDoc || ''
    if (pages.functions.client) {
      fs.writeFileSync(
        path.join(dir, 'functions', 'client.md'),
        `${fm(`${resource.name} Client Functions | FWB Studio Docs`, `Client functions for ${resource.name}.`)}
# Client functions

${exportDocForSide(fnBody, 'client') || fnBody || '_No separate client functions doc._'}
`
      )
    }
    if (pages.functions.server) {
      fs.writeFileSync(
        path.join(dir, 'functions', 'server.md'),
        `${fm(`${resource.name} Server Functions | FWB Studio Docs`, `Server functions for ${resource.name}.`)}
# Server functions

${exportDocForSide(fnBody, 'server') || fnBody || '_No separate server functions doc._'}
`
      )
    }
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
    const faq = formatExpandableQuestions(`### Does this replace my existing notify resource?

Configure \`${resource.repo}\` to hook into your UI flow. See Configuration for editor settings.

### Is Bridge required?

${/@fs_bridge/.test(meta.manifest ?? '') ? 'Yes — `fs_bridge` must be installed and started first.' : 'No — this resource does not require Bridge.'}

### Where do I get support?

[Discord](https://discord.gg/WH6uQ6uFvq) with your Tebex invoice and server console logs.`)

    fs.writeFileSync(
      path.join(dir, 'questions.md'),
      `${fm(`${resource.name} Questions | FWB Studio Docs`, `FAQ for ${resource.name}.`)}
# ${resource.name} — Questions

${faq}
`
    )
  }

  cleanupStalePages(dir, pages)

  return { slug: resource.slug, pages, base }
}

function cleanupStalePages(dir, pages) {
  const alwaysRemove = ['common-issues.md', 'integrations.md']
  for (const name of alwaysRemove) {
    const p = path.join(dir, name)
    if (fs.existsSync(p)) fs.unlinkSync(p)
  }

  const maybeRemove = [
    ['exports/client.md', pages.exports?.client],
    ['exports/server.md', pages.exports?.server],
    ['functions/client.md', pages.functions?.client],
    ['functions/server.md', pages.functions?.server],
    ['configuration.md', pages.configuration],
    ['common-errors.md', pages.commonErrors],
    ['questions.md', pages.questions]
  ]

  for (const [rel, keep] of maybeRemove) {
    if (keep) continue
    const p = path.join(dir, rel)
    if (fs.existsSync(p)) fs.unlinkSync(p)
  }
}

async function analyzeResource(resource) {
  const manifest = (await fetchRepoFile(resource.repo, 'fxmanifest.lua')) ?? ''
  await sleep(150)
  const configFull = (await fetchRepoFile(resource.repo, 'config/config.lua')) ?? ''
  await sleep(150)
  const legacyInstall = legacyMd(resource.slug, 'installation.md')
  const installFiles = await listInstallTree(resource.repo)
  await sleep(150)

  const exportScan = {
    client: await scanSideExports(resource.repo, 'client'),
    server: await scanSideExports(resource.repo, 'server')
  }

  const legacyExportDoc = loadLegacyExportDoc(legacyDocsRoot, resource.slug, LEGACY_DOC_FOLDERS)
  const legacyFunctionsDoc = loadLegacyFunctionsDoc(legacyDocsRoot, resource.slug, LEGACY_DOC_FOLDERS)
  const notifyDocs = resource.slug === 'notify' ? loadNotifyExportDocs(root) : null

  const configExtras = parseConfigExtras(configFull, resource)
  const deps = parseManifestDeps(manifest, resource.category, resource, legacyInstall)
  const pages = detectPages(resource, manifest, exportScan, legacyExportDoc, legacyFunctionsDoc, PAGE_OVERRIDES)

  const fallbackOverview =
    resource.category === 'weapons'
      ? `**${resource.name}** is a FWB Studio weapon pack for FiveM. It includes weapon meta and stream assets for ESX, QBCore, and Qbox servers. Follow Installation for \`[INSTALL_ME_FIRST]\` steps and inventory item setup.`
      : `**${resource.name}** is a FWB Studio script for ESX, QBCore, and Qbox. Install dependencies first, then configure \`config/\` before going live.`

  const legacyRaw = legacyMd(resource.slug, 'README.md')
  const overview = buildOverviewBody(resource, {
    legacyRaw,
    catalogOverview: RESOURCE_OVERVIEWS[resource.slug],
    fallback: fallbackOverview
  })

  return {
    manifest,
    deps,
    installFiles,
    configFull,
    configExtras,
    exports: exportScan,
    legacyExportDoc,
    legacyFunctionsDoc,
    notifyDocs,
    pages,
    overview
  }
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
