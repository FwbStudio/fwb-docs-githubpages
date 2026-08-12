---
title: Automatic Pistol Pack Installation | FWB Studio Docs
description: Install Automatic Pistol Pack on FiveM — dependencies and server.cfg. FiveM automatic pistol weapon pack install.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/6835149" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Automatic Pistol Pack — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `FiveM server` | Yes | Latest artifacts recommended |








## Install steps

1. Extract `fs_weapons_gangautopistol_v1` into `resources/[fs]/`.
2. Follow the **Items & inventory setup** section below for your inventory (weapon meta, items, images).
3. Run any SQL files if included in `[INSTALL_ME_FIRST]`.
4. Add to `server.cfg`:

```cfg
ensure fs_weapons_gangautopistol_v1
```

5. Restart the server and test in-game.
