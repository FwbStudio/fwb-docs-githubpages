import fs from 'fs'
import path from 'path'
import { buildDocsSidebar } from '../docs/.vitepress/resources-catalog.mts'

const docsDir = path.resolve('docs')

function collectLinks(items, links = []) {
  for (const item of items) {
    if (item.link) {
      links.push(item.link)
    }
    if (item.items) {
      collectLinks(item.items, links)
    }
  }
  return links
}

const sidebar = buildDocsSidebar()
const links = collectLinks(sidebar)

console.log(`Total links in sidebar: ${links.length}`)

const missing = []

for (const link of links) {
  let cleanLink = link.split('?')[0].split('#')[0]
  let filePath = ''
  
  if (cleanLink.endsWith('/')) {
    filePath = path.join(docsDir, cleanLink, 'index.md')
  } else {
    filePath = path.join(docsDir, cleanLink + '.md')
  }

  if (!fs.existsSync(filePath)) {
    const indexFallback = path.join(docsDir, cleanLink, 'index.md')
    if (!fs.existsSync(indexFallback)) {
      missing.push({ link, expectedPath: filePath })
    }
  }
}

if (missing.length > 0) {
  console.log(`\n❌ MISSING FILES FOR SIDEBAR LINKS (${missing.length}):`)
  missing.forEach(m => console.log(`  Link: "${m.link}" -> File not found: ${m.expectedPath}`))
} else {
  console.log('\n✅ All sidebar links map to existing markdown files!')
}
