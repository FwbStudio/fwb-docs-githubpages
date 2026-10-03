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

## Platform documentation

- Home (/) selects FiveM or RedM.
- FiveM catalog: /fivem/; existing resource and Bridge URLs remain valid.
- RedM catalog: /redm/; starter pages: docs/redm/resources/notify/.
- RedM sidebar: docs/.vitepress/redm-sidebar.mts. Add new resource groups here and cards to docs/redm/index.md.
- The RedM Notify entry is deliberately a dummy. Replace its placeholder content with verified resource details before treating it as a released product.
