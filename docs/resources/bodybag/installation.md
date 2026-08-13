---
title: Bodybag Installation | FWB Studio Docs
description: Install Bodybag on FiveM — dependencies and server.cfg. FiveM bodybag script ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_mlo_lastworld` | Yes | Heaven/Hell MLO — included in package with Tebex/Keymaster download |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `ambulance` | Must match your framework job name exactly |


## Items & inventory setup

Open `fs_bodybag/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.



## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place all resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_bodybag`
   - `fs_mlo_lastworld`
3. Download and install `ox_lib` into your `resources/` directory.
4. Complete **Items & inventory setup** by opening `fs_bodybag/[INSTALL_ME_FIRST]` and adding the items to your inventory system.
5. Configure `fs_bodybag/config/` settings before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources (`fs_bridge` must start before `fs_bodybag`):

```cfg
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your server after completing configuration and installation, and check the server console for clean startup prints.
