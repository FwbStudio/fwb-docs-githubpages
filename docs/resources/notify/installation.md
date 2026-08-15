---
title: Notify Installation | FWB Studio Docs
description: Install Notify on FiveM — dependencies and server.cfg. FiveM notify system FWB Studio.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7464228" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Notify — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |








## Install steps

1. Place `fs_notify` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_notify/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```lua
ensure fs_bridge
ensure fs_notify
```

6. Restart the server and check the console for errors.
