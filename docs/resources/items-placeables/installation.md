---
title: Items Placeables Installation | FWB Studio Docs
description: Install Items Placeables on FiveM — dependencies and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |

---

## Items & Inventory Setup

If you want to use custom items, open `fs_placeables/INSTALL_ME_FIRST` and add the item definitions and images corresponding to **your** inventory system.

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place the resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_placeables`
3. Download and install `ox_lib` into your `resources/` directory.
4. Configure item model mappings in `fs_placeables/config/config.lua` before starting.
5. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

6. Restart your FiveM server and check the server console for clean startup prints.
