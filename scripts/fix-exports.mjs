import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildExportPageBody,
  formatExpandableExportDoc,
  loadLegacyExportDoc,
  loadNotifyExportDocs
} from './lib/resource-doc-helpers.mjs'
import { RESOURCE_PAGES } from '../docs/.vitepress/resource-pages.mts'
import { RESOURCES } from '../docs/.vitepress/resources-catalog.mts'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const docsRoot = path.join(root, 'docs', 'resources')
const legacyRoot = path.join(root, '..', 'docs', 'scripts')

const LEGACY_FOLDERS = {
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

function loadLegacyExport(slug) {
  const folder = LEGACY_FOLDERS[slug]
  if (!folder) return null
  return loadLegacyExportDoc(legacyRoot, slug, LEGACY_FOLDERS)
}

function writeExportPage(slug, side, body, resourceName) {
  const dir = path.join(docsRoot, slug, 'exports')
  if (!fs.existsSync(dir)) return
  const filePath = path.join(dir, `${side}.md`)
  if (!fs.existsSync(filePath)) return

  const title = `${resourceName} ${side[0].toUpperCase()}${side.slice(1)} Exports | FWB Studio Docs`
  fs.writeFileSync(
    filePath,
    `---
title: ${title}
description: ${side} exports for ${resourceName}.
---


# ${side.charAt(0).toUpperCase()}${side.slice(1)} exports

${body}
`
  )
  console.log('fixed', `${slug}/exports/${side}`)
}

for (const resource of RESOURCES) {
  const pages = RESOURCE_PAGES[resource.slug]
  if (!pages?.exports) continue

  const legacyExportDoc = loadLegacyExport(resource.slug)

  if (resource.slug === 'notify') {
    const notifyDocs = loadNotifyExportDocs(root)
    if (pages.exports.client && notifyDocs.client) {
      const body = formatExpandableExportDoc(notifyDocs.client, { resource: 'fs_notify', side: 'client' })
        .replace(/FWB\.Notify\(/g, "exports['fs_notify']:Notify(")
        .replace(/exports\['fs_bridge'\]/g, "exports['fs_notify']")
      writeExportPage(resource.slug, 'client', body, resource.name)
    }
    if (pages.exports.server && notifyDocs.server) {
      const body = formatExpandableExportDoc(notifyDocs.server, { resource: 'fs_notify', side: 'server' })
        .replace(/FWB\.Notify\(/g, "exports['fs_notify']:Notify(")
        .replace(/exports\['fs_bridge'\]/g, "exports['fs_notify']")
      writeExportPage(resource.slug, 'server', body, resource.name)
    }
    continue
  }

  if (pages.exports.client) {
    const body = buildExportPageBody(resource, 'client', legacyExportDoc, { client: [], server: [] })
    writeExportPage(resource.slug, 'client', body, resource.name)
  }
  if (pages.exports.server) {
    const body = buildExportPageBody(resource, 'server', legacyExportDoc, { client: [], server: [] })
    writeExportPage(resource.slug, 'server', body, resource.name)
  }
}
