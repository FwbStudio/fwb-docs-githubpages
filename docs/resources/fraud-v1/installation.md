---
title: Fraud System v1 Installation | FWB Studio Docs
description: Install Fraud System v1 on FiveM — dependencies and server.cfg. FiveM fraud script v1 ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426478" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — required for framework integration |
| `ox_lib` | Yes | Shared UI / callbacks |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |




## Install steps

1. Place `fs_fraud_v1` in `resources/[fs]/`.
2. Import SQL and add items from `[INSTALL_ME_FIRST]` when provided.
3. Configure `config/` files before first start.
4. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_fraud_v1
```

5. Restart the server and check the console for errors.
