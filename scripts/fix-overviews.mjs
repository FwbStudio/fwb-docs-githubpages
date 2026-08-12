import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildOverviewBody,
  loadLegacyMarkdown,
  writeOverviewPage
} from './lib/resource-doc-helpers.mjs'
import { LEGACY_DOC_FOLDERS } from './lib/legacy-doc-folders.mjs'
import { RESOURCE_OVERVIEWS } from './lib/resource-overviews.mjs'
import { RESOURCE_PAGES } from '../docs/.vitepress/resource-pages.mts'
import { DEFAULT_TEBEX_STORE, RESOURCES_PUBLISHED } from '../docs/.vitepress/resources-catalog.mts'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = path.join(root, 'docs', 'resources')
const legacyRoot = path.join(root, '..', 'docs', 'scripts')

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

const fallbackOverview = (resource) =>
  resource.category === 'weapons'
    ? `**${resource.name}** is a FWB Studio weapon pack for FiveM. It includes weapon meta and stream assets for ESX, QBCore, and Qbox servers. Follow Installation for \`[INSTALL_ME_FIRST]\` steps and inventory item setup.`
    : `**${resource.name}** is a FWB Studio script for ESX, QBCore, and Qbox. Install dependencies first, then configure \`config/\` before going live.`

for (const resource of RESOURCES_PUBLISHED) {
  const pages = RESOURCE_PAGES[resource.slug] ?? {}
  const legacyRaw = loadLegacyMarkdown(legacyRoot, resource.slug, LEGACY_DOC_FOLDERS, 'README.md')
  const body = buildOverviewBody(resource, {
    legacyRaw,
    catalogOverview: RESOURCE_OVERVIEWS[resource.slug],
    fallback: fallbackOverview(resource)
  })

  writeOverviewPage({
    resource,
    body,
    pages,
    docsRoot,
    store: resource.tebexUrl ?? DEFAULT_TEBEX_STORE,
    categoryLabel: resource.category === 'weapons' ? 'Weapon Pack' : 'FiveM Script',
    documentationLinks: docNavLinks(pages)
  })

  console.log('fixed', `${resource.slug}/overview`)
}
