# FWB Studio Docs

Public documentation site for FWB Studio FiveM scripts.

- **Docs** is the main page (this site)
- **Store** links out to Tebex: https://fwbstudio.tebex.io/

Hosted on GitHub Pages. Theme matches the FWB Tebex store.

## Local preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push to `main`. GitHub Actions deploys automatically.

Pages source must be **GitHub Actions**.

See [DEPLOY.md](./DEPLOY.md) for custom domain steps later.

## FiveM documentation

- Home (/) opens the FiveM documentation catalog directly.
- Existing resource, installation, Bridge and weapon documentation URLs remain unchanged.
- Sidebar groups come from docs/.vitepress/resources-catalog.mts.
- This repository serves FiveM documentation only.
