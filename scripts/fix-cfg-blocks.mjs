import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.join(__dirname, '..', 'docs')

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      processDir(fullPath)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8')
      if (content.includes('```cfg')) {
        content = content.replace(/```cfg/g, '```lua')
        fs.writeFileSync(fullPath, content, 'utf8')
        console.log(`Replaced \`\`\`cfg -> \`\`\`lua in ${fullPath}`)
      }
    }
  }
}

processDir(docsDir)
console.log('Finished updating all ```cfg code blocks!')
