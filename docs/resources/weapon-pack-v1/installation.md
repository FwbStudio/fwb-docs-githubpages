---
title: Weapon Pack v1 Installation | FWB Studio Docs
description: Install Weapon Pack v1 on FiveM — dependencies and server.cfg. FiveM weapon pack v1 install ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7005106" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Weapon Pack v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `FiveM server` | Yes | Latest artifacts recommended |
| `Inventory items (optional)` | Optional | If your pack includes ox_inventory item lines |


## [INSTALL_ME_FIRST] files

- `AK47-INSTALLATION.md`
- `NEW QS INVENTORY-INSTALLATION.md`
- `NEW-QBCORE-INSTALLATION copy.md`
- `OLD QS INVENTORY-INSTALLATION.md`
- `OLD-QBCORE-INSTALLATION.md`
- `OX-INSTALLATION.md`


## Install steps

1. Extract `fs_weapons_v1` into `resources/[fs]/`.
2. Copy weapon meta / stream files from `[INSTALL_ME_FIRST]` if included.
3. Add inventory / item lines from the install folder.
4. Add to `server.cfg`:

```cfg
ensure fs_weapons_v1
```

5. Restart the server and test in-game.
