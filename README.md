# FWB Studio — Docs + Product Site

VitePress site for:

- Marketing home (script highlights / store CTAs)
- Public docs (Bridge + scripts)
- Free hosting on **GitHub Pages**
- Optional custom domain (`doc.fwbstudio.com`)

## Local preview

```bash
npm install
npm run dev
```

Open the local URL VitePress prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Go live (GitHub Pages)

1. Push this repo to `main`
2. GitHub → **Settings** → **Pages**
3. Source: **GitHub Actions**
4. After the workflow succeeds, the site is live at:
   - `https://fwbstudio.github.io/fwb-docs-githubpages/`  
     (only if you change `base` in `docs/.vitepress/config.mts` to `/fwb-docs-githubpages/`)
   - or your custom domain once DNS is set (recommended; `base: '/'` already)

See [DEPLOY.md](./DEPLOY.md) for custom domain / redirect steps.
