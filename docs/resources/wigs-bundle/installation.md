---
title: WigsBundle Business Installation | FWB Studio Docs
description: Install WigsBundle Business on FiveM — dependencies and server.cfg. FiveM wigs bundle business script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426494" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# WigsBundle Business — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ox_lib` | Yes | Shared UI / callbacks |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |







## Install steps

1. Place `fs_wigsbundles` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_wigsbundles/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_wigsbundles
```

6. Restart the server and check the console for errors.
