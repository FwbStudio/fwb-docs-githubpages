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
| `fs_bridge` | Yes | Framework and targeting bridge |
| `ox_lib` | Yes | UI components and keybind handlers |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory if you haven't already (`resources/[fs]/`).
2. Download and place the `fs_placeables` folder into `resources/[fs]/fs_placeables`.
3. Open `fs_placeables/config/config.lua` and add any custom items and prop models you want players to place.
4. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_placeables
```

5. Restart your FiveM server.
6. Press `F9` or run `/placeprop` in-game with placeable items in your inventory to test.
