---
title: Gun Jamming Installation | FWB Studio Docs
description: Install Gun Jamming on FiveM — dependencies and server.cfg. FiveM gun jamming script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426484" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Gun Jamming — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `sheriff` | Must match your framework job name exactly |





## Install steps

1. Place `fs_gunjamming` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_gunjamming/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_gunjamming
```

6. Restart the server and check the console for errors.
