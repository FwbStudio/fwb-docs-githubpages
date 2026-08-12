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
2. Import SQL and add items from `[INSTALL_ME_FIRST]` when provided.
3. Configure `config/` files before first start.
4. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_notify
```

5. Restart the server and check the console for errors.
