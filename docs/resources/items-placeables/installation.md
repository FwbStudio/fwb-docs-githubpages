---
title: Items Placeables Installation | FWB Studio Docs
description: Install Items Placeables on FiveM — dependencies and server.cfg. FiveM placeable items script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ox_lib` | Yes | Shared UI / callbacks |
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

1. Place `fs_placeables` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_placeables/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_placeables
```

6. Restart the server and check the console for errors.
