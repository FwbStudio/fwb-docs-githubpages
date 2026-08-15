---
title: Icebox Installation | FWB Studio Docs
description: Install Icebox on FiveM — dependencies, items setup, and server.cfg configuration.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426486" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Icebox — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |


## Items & inventory setup

1. Open `fs_icebox/[INSTALL_ME_FIRST]`.
2. Copy the item definitions from `items/` into your inventory system (`ox_inventory`, `qb-inventory`, `qs-inventory`). Required material items include: `gold_bar`, `platinum_bar`, `diamond`, `fs_chain`, `earring_material`, `watch_material`, `blue_stone`, `green_stone`, `red_stone`, `white_stone`, and `black_stone`.
3. Copy inventory item images from `images for inventory/` into your inventory's image folder.


## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place all resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_icebox`
3. Download and install `ox_lib` into your `resources/` directory.
4. Complete **Items & inventory setup** by importing item definitions and images from `fs_icebox/[INSTALL_ME_FIRST]`.
5. Configure `fs_icebox/config/Config.lua` settings before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```
