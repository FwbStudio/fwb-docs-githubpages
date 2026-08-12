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
  return text.replace(/^\uFEFF?---[\s\S]*?---\s*/m, '').trim()
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

export function isNavOnlyReadme(text) {
  const body = stripGitBookFrontmatter(text)
  const nonEmpty = body
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  const headings = nonEmpty.filter((l) => /^#\s/.test(l))
  const mdLinks = nonEmpty.filter((l) => /^-\s.*\([^)]+\.md\)/.test(l))
  return mdLinks.length > 0 && mdLinks.length >= nonEmpty.length - headings.length
}

export function formatOverviewBody(content) {
  if (!content) return ''

  let text = sanitizeLegacyMarkdown(normalizeLineEndings(content).replace(/^#\s[^\n]+\n+/m, ''))
    .replace(/Purchase Here:[^\n]*/gi, '')
    .replace(/Discord\s*:[^\n]*/gi, '')
    .replace(/Preview\s*:[^\n]*/gi, '')
    .replace(/\*\*\*+/g, '')
    .replace(/^-\s\[[^\]]+\]\([^)]+\)[^\n]*\n?/gm, '')
    .replace(/\\+\s*$/gm, '')
    .replace(/>\s*💻\s*\*\*Made with love by[^]*$/im, '')
    .trim()

  text = text.replace(/\n## Tags and SEO[\s\S]*$/i, '')
  text = text.replace(/\n## Details[\s\S]*?(?=\n## |\n#### |$)/i, '')
  text = text.replace(/^[^\n#]*\|[^\n]*FiveM[^\n]*\n+/im, '')
  text = text.replace(/^\\#FiveM[^\n]*\n*/gim, '')
  text = text.replace(/^## Main Features/m, '#### ⚙️ Key Features')
  text = text.replace(/^## Why Use This Script\?/m, '')
  text = text.replace(/\n{3,}/g, '\n\n')

  if (!/#### ⚙️ Key Features/i.test(text) && /\n\* \*\*/.test(text)) {
    text = text.replace(/(\n\* \*\*[^*]+\*\*)/, '\n\n#### ⚙️ Key Features\n$1')
  }

  if (!/Built for immersive FiveM servers/i.test(text)) {
    text += '\n\n💬 **All configs and locales included**.\n📦 Easy to install. Drag, drop, and configure.\n🧠 Built for immersive FiveM servers.'
  }

  return text.trim()
}

export function buildOverviewBody(resource, { legacyRaw, catalogOverview, fallback } = {}) {
  if (catalogOverview?.trim()) return catalogOverview.trim()

  if (legacyRaw && !isNavOnlyReadme(legacyRaw)) {
    const formatted = formatOverviewBody(legacyRaw)
    if (formatted.length > 120) return formatted
  }

  if (catalogOverview?.trim()) return catalogOverview.trim()

  return fallback ?? ''
}

export function overviewPackageTable(resource, categoryLabel) {
  return `| | |
| --- | --- |
| **Resource folder** | \`${resource.repo}\` |
| **Frameworks** | ESX, QBCore, Qbox |
| **Category** | ${categoryLabel} |`
}

export function writeOverviewPage({
  resource,
  body,
  pages,
  docsRoot,
  store,
  categoryLabel,
  documentationLinks
}) {
  const dir = path.join(docsRoot, resource.slug)
  fs.mkdirSync(dir, { recursive: true })

  const fm = `---
title: ${resource.name} Overview | FWB Studio Docs
description: ${resource.name} features and setup overview for FiveM. ${resource.seoKeywords}.
---

`

  const content = `${fm}<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="${store}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# ${resource.name}

${body}

## Package

${overviewPackageTable(resource, categoryLabel)}

## Documentation

${documentationLinks}
`

  fs.writeFileSync(path.join(dir, 'overview.md'), content)
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
    return stripGitBookFrontmatter(fs.readFileSync(p, 'utf8'))
      .replace(/^#\s[^\n]+\n+/m, '')
      .replace(/\r\n/g, '\n')
      .trim()
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

function cleanExportHeading(text) {
  return text
    .replace(/<mark[^>]*>([^<]*)<\/mark>/gi, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[:：]\s*$/, '')
    .trim()
}

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

function normalizeExportDoc(content) {
  return sanitizeLegacyMarkdown(normalizeLineEndings(content).replace(/^#\s[^\n]+\n+/, ''))
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => {
      const decoded = code
        .replace(/<[^>]+>/g, '')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
      return `\`\`\`lua\n${decoded.trim()}\n\`\`\``
    })
    .replace(/^##\s+(Client|Server)\s+Exports?\s*$/gim, '')
}

function extractSideCode(code, side) {
  if (!/Client Side:/i.test(code) && !/Server Side:/i.test(code)) return code.trim()

  const parts = code.split(/(?=Server Side:)/i)
  const chunk = side === 'client' ? parts[0] : parts[1] || ''
  return chunk
    .replace(/^Client Side:\s*/i, '')
    .replace(/^Server Side:\s*/i, '')
    .replace(/-{5,}[\s\S]*?(?=exports|$)/g, '')
    .replace(/={5,}[\s\S]*/g, '')
    .trim()
}

function parseExportComments(code) {
  const args = []
  const returns = []
  const description = []

  for (const line of code.split('\n')) {
    const trimmed = line.trim()
    const param = trimmed.match(/^--@(\w+)\s*[-–—=]\s*(.+)/i)
    if (param) {
      args.push({
        name: param[1],
        type: 'any',
        required: 'Yes',
        notes: param[2].trim()
      })
      continue
    }

    if (/^--\s*argument/i.test(trimmed)) {
      const note = trimmed.replace(/^--\s*argument\s*/i, '')
      if (note) args.push({ name: 'source', type: 'number', required: 'Yes', notes: note })
      continue
    }

    if (/^--\s*return/i.test(trimmed)) {
      const value = trimmed.replace(/^--\s*return\s*/i, '').trim()
      if (value) returns.push(value)
      continue
    }

    if (
      trimmed.startsWith('--') &&
      !/^--@/.test(trimmed) &&
      !/^--\s*example/i.test(trimmed) &&
      !/^-{3,}/.test(trimmed) &&
      !/^={3,}/.test(trimmed)
    ) {
      const note = trimmed.replace(/^--\s*/, '').trim()
      if (/^(true|false|\w+\s+as\s+\w+|\w+\s+when|\w+\s+if|nil|\w+\s+table)/i.test(note)) {
        returns.push(note)
      } else if (note) {
        description.push(note)
      }
    }
  }

  return { args, returns, description: description.join(' ') }
}

function exportCallName(code) {
  const match = code.match(/exports(?:\[['"]([^'"]+)['"]\]|\.([a-z0-9_]+)):([a-zA-Z_][\w]*)\s*\(/)
  return match?.[3] || null
}

function buildExampleCode(code, resource) {
  const cleaned = normalizeLineEndings(code)
    .split('\n')
    .filter((line) => {
      const t = line.trim()
      return t && !/^--/.test(t) && !/^example:?/i.test(t)
    })
    .join('\n')
    .trim()

  if (!resource) return cleaned
  return cleaned
    .replace(/exports\[['"]fs_bridge['"]\]/g, `exports['${resource}']`)
    .replace(/exports\.fs_[a-z0-9_]+/gi, `exports['${resource}']`)
}

function exportDetailsBlock(title, inner) {
  return `::: details ${title}\n${inner.trim()}\n:::`
}

function formatExportEntry(title, body, { resource, side }) {
  const prose = body.replace(/```[\s\S]*?```/g, '').replace(/\*\*/g, '').trim()
  const codeMatch = body.match(/```(?:lua)?\n([\s\S]*?)```/)
  let code = codeMatch?.[1] || ''
  if (!code.trim()) return null

  code = normalizeLineEndings(extractSideCode(code, side))
  if (!code.trim()) return null

  const fnName = exportCallName(code)
  const displayTitle = fnName ? `${fnName}()` : title
  const meta = parseExportComments(code)
  const description = prose.replace(/\s+/g, ' ').trim() || meta.description

  let inner = ''
  if (description) inner += `${description}\n\n`

  if (meta.args.length) {
    inner += `**Arguments**\n\n| Name | Type | Required | Notes |\n| --- | --- | --- | --- |\n`
    inner += meta.args
      .map((arg) => `| \`${arg.name}\` | \`${arg.type}\` | ${arg.required} | ${arg.notes} |`)
      .join('\n')
    inner += '\n\n'
  }

  if (meta.returns.length) {
    inner += `**Returns**\n\n${meta.returns.map((value) => `- ${value}`).join('\n')}\n\n`
  }

  inner += `**Example**\n\n\`\`\`lua\n${buildExampleCode(code, resource)}\n\`\`\``
  return exportDetailsBlock(displayTitle, inner)
}

function convertHtmlDetailsToVitePress(content) {
  return content.replace(
    /<details[^>]*>\s*<summary>(?:<strong>)?([^<]+?)(?:<\/strong>)?<\/summary>\s*([\s\S]*?)<\/details>/gi,
    (_, title, body) => {
      const cleanTitle = title.replace(/<\/?code>/g, '').replace(/^\d+\.\s*/, '').trim()
      const fnTitle = /^notify$/i.test(cleanTitle) ? 'Notify()' : cleanTitle.includes('(') ? cleanTitle : `${cleanTitle}()`
      let cleanBody = body
        .replace(/Short description:\s*/gi, '')
        .replace(/How to write it as function:[\s\S]*?Example as export:\s*/gi, '')
        .replace(/Returns:/g, '**Returns**\n\n')
        .replace(/Arguments:/g, '**Arguments**\n\n')
        .replace(/Example as export:\s*/g, '**Example**\n\n')
        .replace(/Example as function:[\s\S]*/gi, '')
        .replace(/Example:\s*/g, '**Example**\n\n')
        .replace(/\n\n\*\*Example\*\*\n\n+\*\*Example\*\*/g, '\n\n**Example**')
        .trim()
      if (!/\*\*Example\*\*/.test(cleanBody) && /```lua/.test(cleanBody)) {
        cleanBody = cleanBody.replace(/```lua/, '**Example**\n\n```lua')
      }
      return exportDetailsBlock(fnTitle, cleanBody)
    }
  )
}

function collectExportBlocks(normalized, { resource, side }) {
  const intro = []
  const blocks = []

  const pushEntry = (title, body) => {
    const block = formatExportEntry(title, body, { resource, side })
    if (block) blocks.push(block)
  }

  const sections = normalized.split(/\n(?=#{2,4}\s+)/).filter(Boolean)
  for (const section of sections) {
    const headingMatch = section.match(/^#{2,4}\s+(.+?)(?:\n([\s\S]*))?$/)
    if (!headingMatch) continue

    const title = cleanExportHeading(headingMatch[1])
    const body = headingMatch[2] || ''

    if (/^(Client|Server)\s+Exports?$/i.test(title)) continue

    if (/^Exports?$/i.test(title)) {
      const introText = body.split(/\n(?=####\s+)/)[0]?.trim()
      if (introText && !introText.includes('exports.')) intro.push(introText)

      for (const sub of body.split(/\n(?=####\s+)/).slice(1)) {
        const subMatch = sub.match(/^####\s+(.+?)(?:\n([\s\S]*))?$/)
        if (!subMatch) continue
        pushEntry(cleanExportHeading(subMatch[1]), subMatch[2] || '')
      }
      continue
    }

    pushEntry(title, body)
  }

  if (!blocks.length) {
    for (const sub of normalized.split(/\n(?=####\s+)/)) {
      const subMatch = sub.match(/^####\s+(.+?)(?:\n([\s\S]*))?$/)
      if (!subMatch) continue
      pushEntry(cleanExportHeading(subMatch[1]), subMatch[2] || '')
    }
  }

  if (!blocks.length) {
    for (const sub of normalized.split(/\n(?=###\s+(?!Exports?\b))/)) {
      const subMatch = sub.match(/^###\s+(.+?)(?:\n([\s\S]*))?$/)
      if (!subMatch) continue
      const title = cleanExportHeading(subMatch[1])
      if (/^(Client|Server)\s+Exports?$/i.test(title)) continue
      pushEntry(title, subMatch[2] || '')
    }
  }

  return { intro, blocks }
}

export function formatExpandableExportDoc(content, { resource, side } = {}) {
  if (!content) return ''

  if (content.includes('::: details')) return content

  content = normalizeLineEndings(content)

  if (content.includes('<details')) {
    const converted = convertHtmlDetailsToVitePress(content)
    const blocks = [...converted.matchAll(/::: details[\s\S]*?:::/g)].map((match) => match[0])
    if (blocks.length) {
      const lead =
        'Each export below is expandable. Open one to see description, arguments, return value, and example code.\n\n'
      return `${lead}${blocks.join('\n\n')}`.trim()
    }
  }

  let normalized = normalizeExportDoc(content)

  const { intro, blocks } = collectExportBlocks(normalized, { resource, side })

  if (!blocks.length && normalized.includes('exports')) {
    const codeBlocks = [...normalized.matchAll(/```(?:lua)?\n([\s\S]*?)```/g)]
    const names = new Set()
    for (const block of codeBlocks) {
      const sideCode = extractSideCode(block[1], side)
      for (const m of sideCode.matchAll(/exports(?:\[['"][^'"]+['"]\]|\.[a-z0-9_]+):([a-zA-Z_][\w]*)/g)) {
        names.add(m[1])
      }
    }
    if (names.size) {
      for (const name of names) {
        blocks.push(
          exportDetailsBlock(
            `${name}()`,
            `**Example**\n\n\`\`\`lua\nexports['${resource}']:${name}(...)\n\`\`\``
          )
        )
      }
    }
  }

  const header = intro.length ? `${intro.join('\n\n')}\n\n` : ''
  const lead =
    blocks.length > 0
      ? 'Each export below is expandable. Open one to see description, arguments, return value, and example code.\n\n'
      : ''

  return `${header}${lead}${blocks.join('\n\n')}`.trim()
}

export function buildExportPageBody(resource, side, legacyExportDoc, exportScan) {
  const legacySide = exportDocForSide(legacyExportDoc, side)
  if (legacySide) {
    const formatted = formatExpandableExportDoc(legacySide, { resource: resource.repo, side })
    if (formatted.includes('::: details')) return formatted
  }

  const names = exportScan?.[side]
  if (!names?.length) {
    return `_No public ${side} exports documented yet. Check \`${resource.repo}/${side}/unlocked.lua\` in your package._`
  }

  const lead =
    'Each export below is expandable. Open one to see description, arguments, return value, and example code.\n\n'

  return (
    lead +
    names
      .map((name) =>
        exportDetailsBlock(
          `${name}()`,
          `**Example**\n\n\`\`\`lua\nexports['${resource.repo}']:${name}()\n\`\`\``
        )
      )
      .join('\n\n')
  )
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

  let md = `## Items & inventory setup

Open \`${repo}/[INSTALL_ME_FIRST]\` and use the block for **your** inventory system.

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
