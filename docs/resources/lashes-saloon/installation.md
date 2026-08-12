---
title: Lashes Saloon Installation | FWB Studio Docs
description: Install Lashes Saloon on ESX, QBCore, or Qbox FiveM servers. Dependencies, server.cfg, and fs_lashessaloon setup. FiveM lashes saloon script.
---

# Lashes Saloon — Installation

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426488" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

## Requirements

- FiveM server (latest artifacts recommended)
- **ESX**, **QBCore**, or **Qbox**
- Dependencies listed in `fs_lashessaloon/fxmanifest.lua` (commonly `ox_lib`, `fs_bridge`, etc.)

## Install steps

1. Place `fs_lashessaloon` in `resources/[fs]/`.
2. Run SQL / add items from `[INSTALL_ME_FIRST]` if included.
3. Configure shared config files before first start.
4. Add to `server.cfg`:

```cfg
ensure fs_bridge
ensure fs_lashessaloon
```

5. Restart the server and check F8 / server console for errors.

## Next

- [Preview](./)
- [Overview](./overview)

