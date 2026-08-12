---
title: ChopShop Installation | FWB Studio Docs
description: Install ChopShop on FiveM — dependencies and server.cfg. FiveM chop shop script ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426482" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# ChopShop — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `ox_lib` | Yes | Shared UI / callbacks |
| `oxmysql` | Yes | MySQL database |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |








## Install steps

1. Place `fs_chopshop` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_chopshop/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_chopshop
```

6. Restart the server and check the console for errors.
