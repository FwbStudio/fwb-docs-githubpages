import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'resources')

function cleanInstallation(content) {
  content = content.replace(/\r\n/g, '\n')

  content = content.replace(/\n## Supported integrations\n[\s\S]*?(?=\n## )/g, '\n')

  content = content.replace(
    /(## Items & inventory setup\n\nOpen[^\n]+\n\n)\| Inventory \| Files \| Copy images to \|[\s\S]*?\n\n(?=<div class="fwb-inv-tabs">)/,
    '$1'
  )

  return content
}

for (const slug of fs.readdirSync(docsRoot)) {
  const filePath = path.join(docsRoot, slug, 'installation.md')
  if (!fs.existsSync(filePath)) continue
  const next = cleanInstallation(fs.readFileSync(filePath, 'utf8'))
  fs.writeFileSync(filePath, next)
  console.log('fixed', slug)
}
