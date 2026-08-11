# Deploy + custom domain

## A) GitHub Pages (required once)

1. Push `main` with the site files.
2. Repo **Settings → Pages**:
   - Build and deployment source: **GitHub Actions**
3. Open the **Actions** tab and wait for **Deploy VitePress to GitHub Pages** to finish green.

Temporary URL (project pages, only if you use repo base path):

`https://<org-or-user>.github.io/fwb-docs-githubpages/`

This project is set up for a **custom domain** with `base: '/'`, so prefer step B.

## B) Connect `doc.fwbstudio.com` (recommended)

This repo already includes:

`docs/public/CNAME` → `doc.fwbstudio.com`

That file is copied into the built site root on deploy.

### DNS (at your domain provider)

Create records for `doc.fwbstudio.com`:

**Option 1 — apex/ALIAS style for subdomain (common):**

| Type | Name | Value |
|------|------|--------|
| `CNAME` | `doc` | `<org-or-user>.github.io` |

Example value: `fwbstudio.github.io`

**Do not** point the CNAME at the repo name path. Point it at `*.github.io`.

### GitHub Pages custom domain UI

1. Repo **Settings → Pages → Custom domain**
2. Enter: `doc.fwbstudio.com`
3. Save
4. Wait for DNS check
5. Enable **Enforce HTTPS** after the certificate becomes available (can take a few minutes)

### Keep GitBook offline / redirect

While cutting over from the old GitBook site:

1. Point `doc.fwbstudio.com` DNS to GitHub Pages (above)
2. In GitBook, unpublish or remove the old custom domain so it does not fight DNS
3. Optional: keep GitBook on its `*.gitbook.io` URL as a backup until content port is done

If you want old GitBook paths to land on new pages later, add redirects in VitePress or a simple `404.html` mapping after the catalog is ported.

## C) If custom domain is NOT ready yet

Change in `docs/.vitepress/config.mts`:

```ts
base: '/fwb-docs-githubpages/'
```

Remove or empty `docs/public/CNAME`, push, and use the `github.io/fwb-docs-githubpages/` URL.

When the custom domain is ready, set `base` back to `'/'` and restore the CNAME.
