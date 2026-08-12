---
title: Fraud System v2 Installation | FWB Studio Docs
description: Install Fraud System v2 on FiveM — dependencies and server.cfg. FiveM fraud script v2 ESX QBCore Qbox.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426477" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v2 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ox_lib` | Yes | Shared UI / callbacks |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `sheriff` | Must match your framework job name exactly |




## Supported integrations

| System | Support |
| --- | --- |
| ESX / QBCore / Qbox | Yes (via `fs_bridge`) |
| ox_inventory / qb-inventory / qs-inventory | Yes (Bridge inventory override) |
| ox_target / qb-target | When configured in Bridge |
| Dispatch adapters | Configure in Bridge overrides |

Notification and inventory hooks are handled through Bridge. See [Bridge Supported](/bridge/supported).


## Install steps

1. Place `fs_fraud_v2` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_fraud_v2/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_fraud_v2
```

6. Restart the server and check the console for errors.
