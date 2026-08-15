---
title: Trap Phone v2 Installation | FWB Studio Docs
description: Install Trap Phone v2 on FiveM — dependencies and server.cfg. FiveM trap phone v2 drug script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426493" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Trap Phone v2 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `oxmysql` | Yes | MySQL database |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |








## Install steps

1. Place `fs_trapphone_v2` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_trapphone_v2/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```lua
ensure fs_bridge
ensure fs_trapphone_v2
```

6. Restart the server and check the console for errors.
