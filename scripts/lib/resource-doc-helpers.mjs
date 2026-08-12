import fs from 'node:fs'
import path from 'node:path'

export const LEGACY_EXPORT_CANDIDATES = [
  'exports.md',
  'exports-functions.md',
  'exports-optional.md',
  'functions-exports.md',
  'unlocked-file.md'
]

export function stripGitBookFrontmatter(text) {
  return text.replace(/^---[\s\S]*?---\s*/m, '').trim()
}

export function sanitizeGitBookTokens(text) {
  return text
    .replace(/\{%[\s\S]*?%\}/g, '')
    .replace(/\\_/g, '_')
    .replace(/\\-/g, '-')
    .replace(/\\'/g, "'")
    .replace(/\\\[/g, '[')
    .replace(/\\\]/g, ']')
}

export function sanitizeLegacyMarkdown(text) {
  return sanitizeGitBookTokens(text)
    .replace(/^-\s\[[^\]]+\]\([^)]+\)[^\n]*\n?/gm, '')
    .replace(/\[([^\]]+)\]\(\.\/?[^)]+\.md\)/g, '$1')
    .replace(/\[([^\]]+)\]\(\.\.\/[^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\(\.\/[^)]+\)/g, '$1')
    .replace(/<mark[^>]*>([^<]*)<\/mark>/gi, '$1')
    .replace(/<figure[\s\S]*?<\/figure>/gi, '')
    .replace(/&#x20;/g, '')
    .replace(/\\+\s*$/gm, '')
    .replace(/\\\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function splitProblemSolution(section) {
  const patterns = [
    /###\s*Solution\s*:?\s*/i,
    /\*?\s*\*\*Solution\s*:?\*\*\s*/i,
    /\*\*Solution\s*:?\*\*\s*/i
  ]
  for (const re of patterns) {
    const match = section.match(re)
    if (match && match.index !== undefined) {
      return [section.slice(0, match.index), section.slice(match.index + match[0].length)]
    }
  }
  return [section, '']
}

function detailsBlock(title, body) {
  const cleanTitle = title
    .replace(/\s+/g, ' ')
    .replace(/\s*\*?\s*\*\*Solution\s*:?\*\*.*$/i, '')
    .trim()
  const cleanBody = (body || '').replace(/^\*\s*/gm, '').trim()
  if (!cleanTitle || !cleanBody || /^no problem found yet$/i.test(cleanTitle)) return ''
  return `::: details ${cleanTitle}\n${cleanBody}\n:::`
}

export function formatExpandableCommonErrors(content) {
  if (!content) return ''

  content = sanitizeLegacyMarkdown(content.replace(/^#\s[^\n]+\n+/, ''))

  const blocks = []
  const problemSections = content.split(/(?:^|\n)\*?\s*#{1,3}\s*Problem\s*:?\s*/im)
  if (problemSections.length > 1) {
    for (const section of problemSections.slice(1)) {
      const [problem, solution] = splitProblemSolution(section)
      const block = detailsBlock(problem, solution)
      if (block) blocks.push(block)
    }
  }

  if (blocks.length) return blocks.join('\n\n')

  if (content.includes('| Symptom |')) {
    const lines = content.split('\n').filter((l) => l.startsWith('|') && !l.includes('---') && !l.includes('Symptom'))
    for (const line of lines) {
      const cols = line
        .split('|')
        .map((c) => c.trim())
        .filter(Boolean)
      if (cols.length < 3) continue
      const block = detailsBlock(cols[0], `Likely cause: ${cols[1]}\n\nFix: ${cols[2]}`)
      if (block) blocks.push(block)
    }
    if (blocks.length) return blocks.join('\n\n')
  }

  return content
}

export function loadLegacyMarkdown(legacyDocsRoot, slug, folderMap, fileName) {
  const folder = folderMap[slug]
  if (!folder) return null
  const filePath = path.join(legacyDocsRoot, folder, fileName)
  if (!fs.existsSync(filePath)) return null
  return stripGitBookFrontmatter(fs.readFileSync(filePath, 'utf8'))
}

export function loadLegacyExportDoc(legacyDocsRoot, slug, folderMap) {
  for (const fileName of LEGACY_EXPORT_CANDIDATES) {
    const raw = loadLegacyMarkdown(legacyDocsRoot, slug, folderMap, fileName)
    if (raw && raw.length > 80) return sanitizeLegacyMarkdown(raw.replace(/^#\s[^\n]+\n+/, ''))
  }
  return null
}

export function loadLegacyFunctionsDoc(legacyDocsRoot, slug, folderMap) {
  const raw = loadLegacyMarkdown(legacyDocsRoot, slug, folderMap, 'functions.md')
  if (raw && raw.length > 80) return sanitizeLegacyMarkdown(raw.replace(/^#\s[^\n]+\n+/, ''))
  return null
}

export function loadNotifyExportDocs(root) {
  const base = path.join(root, '..', 'docs', 'scripts', 'fs_bridge', 'developer-api', 'notify')
  const read = (name) => {
    const p = path.join(base, name)
    if (!fs.existsSync(p)) return null
    return sanitizeLegacyMarkdown(stripGitBookFrontmatter(fs.readFileSync(p, 'utf8')).replace(/^#\s[^\n]+\n+/, ''))
  }
  return { client: read('client.md'), server: read('server.md') }
}

export function extractExportsFromCode(code, repo) {
  if (!code) return []
  const names = new Set()
  const resource = repo.replace(/[^a-z0-9_]/gi, '')

  for (const m of code.matchAll(/exports\s*\(\s*['"]([^'"]+)['"]/g)) names.add(m[1])
  for (const m of code.matchAll(/exports\s*\[\s*['"]([^'"]+)['"]\s*\]/g)) names.add(m[1])
  for (const m of code.matchAll(new RegExp(`exports\\.${resource}\\:([a-zA-Z_][\\w]*)`, 'g'))) names.add(m[1])
  for (const m of code.matchAll(new RegExp(`exports\\['${resource}'\\]:([a-zA-Z_][\\w]*)`, 'g'))) names.add(m[1])

  return [...names].sort()
}

export function exportDocForSide(fullDoc, side) {
  if (!fullDoc) return null
  if (/Client\/Server/i.test(fullDoc)) return fullDoc

  const sideHeading = side === 'client' ? /###\s*Client Side/i : /###\s*Server Side/i
  const otherHeading = side === 'client' ? /###\s*Server Side/i : /###\s*Client Side/i

  const clientIdx = fullDoc.search(/#{1,4}\s*Client/i)
  const serverIdx = fullDoc.search(/#{1,4}\s*Server/i)

  if (sideHeading.test(fullDoc)) {
    const start = fullDoc.search(sideHeading)
    const endMatch = fullDoc.slice(start + 1).search(otherHeading)
    const end = endMatch >= 0 ? start + 1 + endMatch : fullDoc.length
    return fullDoc.slice(start, end).trim()
  }

  if (clientIdx >= 0 && serverIdx >= 0) {
    return side === 'client'
      ? fullDoc.slice(clientIdx, serverIdx).trim()
      : fullDoc.slice(serverIdx).trim()
  }

  if (side === 'client' && /Client/i.test(fullDoc) && !/Server/i.test(fullDoc)) return fullDoc
  if (side === 'server' && /Server/i.test(fullDoc) && !/Client/i.test(fullDoc)) return fullDoc

  return fullDoc
}

export function parseConfigExtras(configText, resource) {
  const extras = { dispatchJobs: [], whitelistedJobs: [] }

  if (!configText) return extras

  const jobsBlocks = [...configText.matchAll(/jobs\s*=\s*\{([^}]+)\}/g)]
  for (const block of jobsBlocks) {
    for (const m of block[1].matchAll(/['"]([^'"]+)['"]/g)) {
      if (!extras.dispatchJobs.includes(m[1])) extras.dispatchJobs.push(m[1])
    }
  }

  const whitelistBlocks = [...configText.matchAll(/whitelist[^=]*=\s*\{([^}]+)\}/gi)]
  for (const block of whitelistBlocks) {
    for (const m of block[1].matchAll(/['"]([^'"]+)['"]/g)) {
      if (!extras.whitelistedJobs.includes(m[1])) extras.whitelistedJobs.push(m[1])
    }
  }

  return extras
}

export function extraDepsForResource(resource, legacyInstall, manifest) {
  const rows = []
  const add = (name, required, notes) => {
    if (!rows.some((r) => r.name === name)) rows.push({ name, required, notes })
  }

  if (resource.slug === 'bodybag' || legacyInstall?.includes('fs_mlo_lastworld')) {
    add('fs_mlo_lastworld', true, 'Heaven/Hell MLO — included with your Keymaster download')
  }

  if (/@fs_bridge|fs_bridge/.test(manifest ?? '')) {
    add('fs_bridge', true, 'FWB Bridge — framework, inventory, target, dispatch')
  }
  if (/@ox_lib/.test(manifest ?? '')) {
    add('ox_lib', true, 'Shared UI / callbacks')
  }
  if (/oxmysql|@oxmysql/.test(manifest ?? '') || /dependency\s+['"]oxmysql['"]/.test(manifest ?? '')) {
    add('oxmysql', true, 'MySQL database')
  }
  if (/dependency\s+['"]ox_target['"]/.test(manifest ?? '')) {
    add('ox_target', false, 'Target system (when configured)')
  }

  if (resource.category !== 'weapons') {
    add('ESX, QBCore, or Qbox', true, 'One framework per server')
  }

  if (resource.category === 'weapons') {
    add('FiveM server', true, 'Latest artifacts recommended')
  }

  return rows
}

export function classifyInstallFile(name) {
  const n = name.toLowerCase().replace(/\\/g, '/')
  if (n.includes('ox_inventory') || n.includes('ox-inventory') || n.includes('oxinventory')) return 'ox_inventory'
  if (n.includes('qs-inventory') || n.includes('qs_inventory') || n.includes('qsinventory')) return 'qs_inventory'
  if (n.includes('qb-inventory') || n.includes('qb_inventory') || n.includes('qbcore') || n.includes('qb-')) return 'qb'
  if (n.includes('esx')) return 'esx'
  if (n.endsWith('.sql')) return 'sql'
  if (/\.(png|jpg|jpeg|webp|gif)$/i.test(n)) return 'images'
  if (n.includes('prop') || n.includes('weapon') || n.includes('meta')) return 'props'
  return 'other'
}

const INVENTORY_IMAGE_PATHS = {
  ox_inventory: 'ox_inventory/web/images/',
  qb: 'qb-inventory/html/images/items/',
  qs_inventory: 'qs-inventory/html/images/',
  esx: 'es_extended or your inventory images folder'
}

export function buildInventoryInstallSection(installFiles, repo, category) {
  if (!installFiles.length) return ''

  const byKind = {}
  for (const file of installFiles) {
    const kind = classifyInstallFile(file.name)
    if (!byKind[kind]) byKind[kind] = []
    byKind[kind].push(file)
  }

  const labels = {
    ox_inventory: 'ox_inventory',
    qb: 'QBCore / qb-inventory',
    qs_inventory: 'qs-inventory',
    esx: 'ESX',
    sql: 'SQL',
    images: 'Item images',
    props: 'Props / meta / stream',
    other: 'Other'
  }

  const order = category === 'weapons'
    ? ['props', 'ox_inventory', 'qb', 'qs_inventory', 'esx', 'sql', 'images', 'other']
    : ['ox_inventory', 'qb', 'qs_inventory', 'esx', 'sql', 'images', 'props', 'other']

  const tableRows = []
  for (const kind of order) {
    const files = byKind[kind]
    if (!files?.length) continue
    const imagePath = INVENTORY_IMAGE_PATHS[kind]
    tableRows.push(
      `| ${labels[kind]} | \`${files.map((f) => f.name).join('`, `')}\` | ${imagePath ? `\`${imagePath}\`` : 'See file notes'} |`
    )
  }

  let md = `## Items & inventory setup

Open \`${repo}/[INSTALL_ME_FIRST]\` and use the block for **your** inventory system.

| Inventory | Files | Copy images to |
| --- | --- | --- |
${tableRows.join('\n')}

<div class="fwb-inv-tabs">
`

  for (const kind of order) {
    const files = byKind[kind]
    if (!files?.length || kind === 'other') continue

    md += `<details>\n<summary>${labels[kind]}</summary><div class="fwb-inv-tab-body">\n\n`
    if (INVENTORY_IMAGE_PATHS[kind]) {
      md += `Copy item/weapon images into \`${INVENTORY_IMAGE_PATHS[kind]}\`.\n\n`
    }
    for (const file of files) {
      const ext = file.name.split('.').pop()?.toLowerCase()
      const lang = ext === 'sql' ? 'sql' : ext === 'png' || ext === 'jpg' ? 'text' : 'lua'
      if (lang === 'text') {
        md += `**Image:** \`${file.name}\` — place in the path above.\n\n`
      } else if (ext === 'md') {
        md += `See \`[INSTALL_ME_FIRST]/${file.name}\` in your download for full steps.\n\n`
      } else if (file.content?.trim()) {
        md += `**\`${file.name}\`**\n\n\`\`\`${lang}\n${file.content.trim()}\n\`\`\`\n\n`
      } else {
        md += `**\`${file.name}\`** — copy from your download package.\n\n`
      }
    }
    md += `</div></details>\n\n`
  }

  if (byKind.other?.length) {
    md += `<details>\n<summary>Other install files</summary><div class="fwb-inv-tab-body">\n\n`
    for (const file of byKind.other) {
      md += `- \`${file.name}\`\n`
    }
    md += `\n</div></details>\n\n`
  }

  md += `</div>\n`
  return md
}

export function dispatchJobsSection(jobs, title = 'Dispatch / alert jobs') {
  if (!jobs.length) return ''
  return `## ${title}

| Job name | Notes |
| --- | --- |
${jobs.map((j) => `| \`${j}\` | Must match your framework job name exactly |`).join('\n')}
`
}

export function integrationInstallNote(manifest) {
  if (!/@fs_bridge|fs_bridge/.test(manifest ?? '')) return ''
  return `## Supported integrations

| System | Support |
| --- | --- |
| ESX / QBCore / Qbox | Yes (via \`fs_bridge\`) |
| ox_inventory / qb-inventory / qs-inventory | Yes (Bridge inventory override) |
| ox_target / qb-target | When configured in Bridge |
| Dispatch adapters | Configure in Bridge overrides |

Notification and inventory hooks are handled through Bridge. See [Bridge Supported](/bridge/supported).
`
}

export function formatExpandableQuestions(content) {
  if (!content) return ''

  content = sanitizeLegacyMarkdown(content.replace(/^#\s[^\n]+\n+/, ''))

  const blocks = content.split(/\n###\s+/).filter(Boolean)
  if (blocks.length <= 1) return content

  return blocks
    .map((block) => {
      const nl = block.indexOf('\n')
      const q = nl >= 0 ? block.slice(0, nl).trim() : block.trim()
      const a = nl >= 0 ? block.slice(nl).trim() : ''
      return detailsBlock(q, a)
    })
    .filter(Boolean)
    .join('\n\n')
}

export function detectPages(resource, manifest, exportScan, legacyExportDoc, legacyFunctionsDoc, overrides = {}) {
  const pages = {}

  if (resource.category === 'scripts' && /config\//.test(manifest)) {
    pages.configuration = true
  }

  let exportClient = exportScan.client.length > 0
  let exportServer = exportScan.server.length > 0
  const hasExportDoc = legacyExportDoc && legacyExportDoc.length > 80

  if (hasExportDoc) {
    exportClient = /Client/i.test(legacyExportDoc)
    exportServer = /Server/i.test(legacyExportDoc)
    if (/Client\/Server/i.test(legacyExportDoc)) {
      exportClient = true
      exportServer = true
    }
  }

  if (exportClient || exportServer) {
    pages.exports = { client: exportClient, server: exportServer }
  }

  const hasFunctionsDoc =
    legacyFunctionsDoc && legacyFunctionsDoc.length > 80 && legacyFunctionsDoc !== legacyExportDoc

  if (hasFunctionsDoc) {
    const fnClient = /Client/i.test(legacyFunctionsDoc)
    const fnServer = /Server/i.test(legacyFunctionsDoc)
    pages.functions = {
      client: fnClient || (!fnClient && !fnServer),
      server: fnServer || (!fnClient && !fnServer)
    }
    if (pages.functions.client && pages.functions.server && !fnClient && !fnServer) {
      // single functions doc — prefer one combined page via client link only
      pages.functions = { client: true, server: false }
    }
  }

  if (resource.slug === 'notify') {
    pages.exports = { client: true, server: true }
    pages.questions = true
    pages.configuration = true
    pages.commonErrors = false
  } else if (resource.category === 'scripts') {
    pages.commonErrors = true
  }

  if (resource.category === 'weapons') {
    pages.commonErrors = true
    delete pages.configuration
  }

  const override = overrides[resource.slug]
  if (override) {
    Object.assign(pages, { ...pages, ...override })
    if (override.exports) pages.exports = { ...pages.exports, ...override.exports }
    if (override.functions) pages.functions = override.functions
  }

  if (pages.exports && !pages.exports.client && !pages.exports.server) delete pages.exports
  if (pages.functions && !pages.functions.client && !pages.functions.server) delete pages.functions

  return pages
}
