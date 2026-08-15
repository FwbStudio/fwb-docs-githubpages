# Deploy + Custom Domain: docs.fwbstudio.com

## Architecture Overview

- **`www.fwbstudio.com`**: Points to Tebex store.
- **`docs.fwbstudio.com`**: Hosts the GitHub Pages documentation site directly (`base: '/'`).
- **`www.fwbstudio.com/docs`**, `/doc`, `/documentation`: Cloudflare Redirect Rules forward visitors to `https://docs.fwbstudio.com/`.

---

## 1. Local Code Configuration (Done)

- **`docs/.vitepress/config.mts`**:
  ```ts
  base: '/'
  ```
- **`docs/public/CNAME`**:
  ```text
  docs.fwbstudio.com
  ```

---

## 2. Cloudflare DNS Setup for `docs.fwbstudio.com`

In your Cloudflare DNS records:

1. Locate `docs.fwbstudio.com` (currently `192.0.2.1`).
2. Click **Edit**:
   - Change **Type**: `CNAME`
   - Change **Target / Content**: `<your-github-username>.github.io` (e.g. `fwbstudio.github.io`)
   - **Proxy Status**: `Proxied` (Orange Cloud)
3. Click **Save**.

---

## 3. GitHub Repository Settings

1. Push your updated code to GitHub (`git push`).
2. Go to your repository on GitHub → **Settings → Pages**.
3. Under **Custom domain**, enter `docs.fwbstudio.com` and click **Save**.
4. Once DNS verification completes, check **Enforce HTTPS**.

---

## 4. Cloudflare Redirect Rules (Forward `/docs`, `/doc`, `/documentation`)

Since `www.fwbstudio.com` points to Tebex, setup Cloudflare Redirect Rules so anyone typing `www.fwbstudio.com/docs` gets sent to `https://docs.fwbstudio.com`:

1. In Cloudflare Dashboard, go to **Rules → Redirect Rules**.
2. Click **Create Rule**:
   - **Rule Name**: `Redirect Store Docs to GitHub Pages`
   - **When incoming requests match**: Custom filter expression
   - **Field**: `URI Path`
   - **Operator**: `is in`
   - **Values**:
     ```text
     /docs
     /docs/
     /doc
     /doc/
     /documentation
     /documentation/
     ```
   - **Target URL**: `https://docs.fwbstudio.com`
   - **Status Code**: `301 (Moved Permanently)`
3. Click **Deploy**.



