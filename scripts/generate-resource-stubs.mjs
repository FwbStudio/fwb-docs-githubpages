import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const docsRoot = path.join(root, 'docs', 'resources')

const { RESOURCES_PUBLISHED, DEFAULT_TEBEX_STORE } = await import(
  pathToFileURL(path.join(root, 'docs', '.vitepress', 'resources-catalog.mts')).href
)

function defaultTagline(r) {
  if (r.tagline) return r.tagline
  if (r.category === 'weapons') {
    return `Premium ${r.name} for FiveM — meta files, stream assets, and install guide.`
  }
  return `Premium ${r.name} for FiveM — ESX, QBCore, and Qbox compatible.`
}

function videoSection(r) {
  const videos = r.videos ?? []
  if (videos.length === 0) {
    return `<div class="fwb-video-placeholder">
  <p><strong>Preview video coming soon.</strong></p>
  <p>Check the FWB Studio store page or Discord for the latest showcase.</p>
</div>`
  }

  return `<div class="fwb-video-grid">
${videos
  .map(
    (v) => `  <div class="fwb-video-card">
    <div class="fwb-video-card__frame">
      <iframe
        src="https://www.youtube.com/embed/${v.youtubeId}"
        title="${v.title.replace(/"/g, '&quot;')}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <p class="fwb-video-card__title">${v.title}</p>
  </div>`
  )
  .join('\n')}
</div>`
}

function previewMd(r) {
  const tagline = defaultTagline(r)
  const storeUrl = r.tebexUrl ?? DEFAULT_TEBEX_STORE
  const categoryLabel = r.category === 'weapons' ? 'Weapon Pack' : 'FiveM Script'

  return `---
title: ${r.name} Preview | FWB Studio Docs
description: Watch ${r.name} previews and purchase on Tebex. ${r.seoKeywords}.
---

<div class="fwb-product-hero">
  <p class="fwb-product-hero__eyebrow">${categoryLabel}</p>
  <h1 class="fwb-product-hero__title">${r.name}</h1>
  <p class="fwb-product-hero__tagline">${tagline}</p>
  <div class="fwb-product-hero__actions">
    <a class="fwb-product-hero__buy" href="${storeUrl}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
    <a class="fwb-product-hero__docs" href="./overview">Read documentation</a>
    <a class="fwb-product-hero__docs" href="./installation">Installation guide</a>
  </div>
</div>

## Preview videos

${videoSection(r)}

## Quick info

| | |
| --- | --- |
| **Package** | \`${r.repo}\` |
| **Category** | ${categoryLabel} |
| **Store** | [Buy on Tebex](${storeUrl}) |

## Documentation

- [Overview](./overview) — features, frameworks, dependencies
- [Installation](./installation) — setup steps
${r.extraPages?.includes('configuration') ? '- [Configuration](./configuration)\n' : ''}${r.extraPages?.includes('integrations') ? '- [Integrations](./integrations)\n' : ''}${r.extraPages?.includes('common-issues') ? '- [Common Issues](./common-issues)\n' : ''}
`
}

function overviewMd(r) {
  const frameworks = r.category === 'weapons' ? 'weapon meta / stream files' : 'ESX, QBCore, and Qbox'
  return `---
title: ${r.name} Overview | FWB Studio Docs
description: ${r.name} overview for FiveM servers — features, frameworks, and documentation links. ${r.seoKeywords}.
---

# ${r.name} — Overview

Official FWB Studio documentation for **${r.name}**.

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">← Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="${r.tebexUrl ?? DEFAULT_TEBEX_STORE}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

## Supported

- **Package:** \`${r.repo}\`
- **Frameworks:** ${frameworks}

## Pages

- [Preview](./) — videos and purchase link
- [Installation](./installation)
${r.extraPages?.includes('configuration') ? '- [Configuration](./configuration)\n' : ''}${r.extraPages?.includes('integrations') ? '- [Integrations](./integrations)\n' : ''}${r.extraPages?.includes('common-issues') ? '- [Common Issues](./common-issues)\n' : ''}
## Status

Content is being ported from the org repo and legacy GitBook docs.
`
}

function installationMd(r) {
  const storeUrl = r.tebexUrl ?? DEFAULT_TEBEX_STORE
  if (r.category === 'weapons') {
    return `---
title: ${r.name} Installation | FWB Studio Docs
description: Install ${r.name} on your FiveM server — weapon meta files, stream assets, and server.cfg order. ${r.seoKeywords}.
---

# ${r.name} — Installation

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="${storeUrl}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

Weapon packs ship **meta and stream files**. Follow the steps in your Tebex download \`[INSTALL_ME_FIRST]\` folder.

## Requirements

- FiveM server (latest artifacts recommended)
- Framework: ESX, QBCore, or Qbox (if your pack includes framework-specific items)
- \`ox_lib\` or inventory setup as noted in the package

## Install steps

1. Extract \`${r.repo}\` into \`resources/[fs]/\` (or your scripts folder).
2. Add weapon / item lines from \`[INSTALL_ME_FIRST]\` (images, \`ox_inventory\` items, etc.).
3. Ensure **stream** and **meta** folders load before dependent scripts.
4. Add to \`server.cfg\`:

\`\`\`cfg
ensure ${r.repo}
\`\`\`

5. Restart the server and verify weapons spawn / shop entries work.

## Notes

- Do not mix files from other weapon packs.
- Keep a backup before overwriting existing weapon metas.

## Next

${docLinks(r)}
`
  }

  return `---
title: ${r.name} Installation | FWB Studio Docs
description: Install ${r.name} on ESX, QBCore, or Qbox FiveM servers. Dependencies, server.cfg, and ${r.repo} setup. ${r.seoKeywords}.
---

# ${r.name} — Installation

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="${storeUrl}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

## Requirements

- FiveM server (latest artifacts recommended)
- **ESX**, **QBCore**, or **Qbox**
- Dependencies listed in \`${r.repo}/fxmanifest.lua\` (commonly \`ox_lib\`, \`fs_bridge\`, etc.)

## Install steps

1. Place \`${r.repo}\` in \`resources/[fs]/\`.
2. Run SQL / add items from \`[INSTALL_ME_FIRST]\` if included.
3. Configure shared config files before first start.
4. Add to \`server.cfg\`:

\`\`\`cfg
ensure fs_bridge
ensure ${r.repo}
\`\`\`

5. Restart the server and check F8 / server console for errors.

## Next

${docLinks(r)}
`
}

function stubPage(r, page, title, heading) {
  return `---
title: ${title} | FWB Studio Docs
description: ${r.name} ${page} guide for FiveM. ${r.seoKeywords}.
---

# ${heading}

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="${r.tebexUrl ?? DEFAULT_TEBEX_STORE}" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

Documentation for **${r.name}** is being ported from \`${r.repo}\`.

## Related

- [Overview](./overview)
- [Installation](./installation)
`
}

function docLinks(r) {
  let links = '- [Preview](./)\n- [Overview](./overview)\n'
  if (r.extraPages?.includes('configuration')) {
    links += '- [Configuration](./configuration)\n'
  }
  return links
}

for (const resource of RESOURCES_PUBLISHED) {
  const dir = path.join(docsRoot, resource.slug)
  fs.mkdirSync(dir, { recursive: true })

  fs.writeFileSync(path.join(dir, 'index.md'), previewMd(resource))
  fs.writeFileSync(path.join(dir, 'overview.md'), overviewMd(resource))
  fs.writeFileSync(path.join(dir, 'installation.md'), installationMd(resource))

  if (resource.extraPages?.includes('configuration')) {
    fs.writeFileSync(
      path.join(dir, 'configuration.md'),
      stubPage(resource, 'configuration', `${resource.name} Configuration`, `${resource.name} — Configuration`)
    )
  }
  if (resource.extraPages?.includes('integrations')) {
    fs.writeFileSync(
      path.join(dir, 'integrations.md'),
      stubPage(resource, 'integrations', `${resource.name} Integrations`, `${resource.name} — Integrations`)
    )
  }
  if (resource.extraPages?.includes('common-issues')) {
    fs.writeFileSync(
      path.join(dir, 'common-issues.md'),
      stubPage(resource, 'common-issues', `${resource.name} Common Issues`, `${resource.name} — Common Issues`)
    )
  }
}

console.log(`Generated ${RESOURCES_PUBLISHED.length} resource doc folders (Preview + Overview).`)
