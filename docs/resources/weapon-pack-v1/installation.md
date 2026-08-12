---
title: Weapon Pack v1 Installation | FWB Studio Docs
description: Install Weapon Pack v1 on your FiveM server — weapon meta files, stream assets, and server.cfg order. FiveM weapon pack v1 install ESX QBCore.
---

# Weapon Pack v1 — Installation

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview &amp; videos</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7005106" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

Weapon packs ship **meta and stream files**. Follow the steps in your Tebex download `[INSTALL_ME_FIRST]` folder.

## Requirements

- FiveM server (latest artifacts recommended)
- Framework: ESX, QBCore, or Qbox (if your pack includes framework-specific items)
- `ox_lib` or inventory setup as noted in the package

## Install steps

1. Extract `fs_weapons_v1` into `resources/[fs]/` (or your scripts folder).
2. Add weapon / item lines from `[INSTALL_ME_FIRST]` (images, `ox_inventory` items, etc.).
3. Ensure **stream** and **meta** folders load before dependent scripts.
4. Add to `server.cfg`:

```cfg
ensure fs_weapons_v1
```

5. Restart the server and verify weapons spawn / shop entries work.

## Notes

- Do not mix files from other weapon packs.
- Keep a backup before overwriting existing weapon metas.

## Next

- [Preview](./)
- [Overview](./overview)

