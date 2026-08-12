---
title: ChopShop Installation | FWB Studio Docs
description: Install ChopShop on ESX, QBCore, or Qbox FiveM servers. Dependencies, server.cfg, and fs_chopshop setup. FiveM chop shop script ESX QBCore.
---

# ChopShop — Installation

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426482" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

## Requirements

- FiveM server (latest artifacts recommended)
- **ESX**, **QBCore**, or **Qbox**
- Dependencies listed in `fs_chopshop/fxmanifest.lua` (commonly `ox_lib`, `fs_bridge`, etc.)

## Install steps

1. Place `fs_chopshop` in `resources/[fs]/`.
2. Run SQL / add items from `[INSTALL_ME_FIRST]` if included.
3. Configure shared config files before first start.
4. Add to `server.cfg`:

```cfg
ensure fs_bridge
ensure fs_chopshop
```

5. Restart the server and check F8 / server console for errors.

## Next

- [Preview](./)
- [Overview](./overview)

