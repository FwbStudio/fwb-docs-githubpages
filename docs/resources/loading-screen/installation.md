---
title: Loading Screen v1 Installation | FWB Studio Docs
description: Install Loading Screen v1 on FiveM — dependencies and server.cfg. FiveM loading screen FWB Studio.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426475" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Loading Screen v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |






## Supported integrations

| System | Support |
| --- | --- |
| ESX / QBCore / Qbox | Yes (via `fs_bridge`) |
| ox_inventory / qb-inventory / qs-inventory | Yes (Bridge inventory override) |
| ox_target / qb-target | When configured in Bridge |
| Dispatch adapters | Configure in Bridge overrides |

Notification and inventory hooks are handled through Bridge. See [Bridge Supported](/bridge/supported).


## Install steps

1. Place `fs_loadingscreen` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_loadingscreen/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_loadingscreen
```

6. Restart the server and check the console for errors.
