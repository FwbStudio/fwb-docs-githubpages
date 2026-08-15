---
title: Shoes Robbery Installation | FWB Studio Docs
description: Install Shoes Robbery on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426476" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Shoes Robbery — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction, target, and dispatch integration |
| `ox_lib` | Yes | Progress bars, notifications, and context menus |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Inventory Items Setup

Add the stolen sneaker items into your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua
['fs_rob_sky_gliders_plus'] = { label = 'Sky Gliders Plus (R)', weight = 500, stack = true, close = true },
['fs_rob_breeze_bangs']     = { label = 'Breeze Bangs (R)',     weight = 500, stack = true, close = true },
['fs_rob_tiger_mediums']    = { label = 'Tiger Mediums (R)',    weight = 500, stack = true, close = true },
['fs_rob_galaxy_x']         = { label = 'Galaxy X (R)',         weight = 500, stack = true, close = true },
['fs_rob_sky_walkers']      = { label = 'Sky Walkers (R)',      weight = 500, stack = true, close = true },
['fs_rob_sky_pilots']       = { label = 'Sky Pilots (R)',       weight = 500, stack = true, close = true },
['fs_rob_sky_flyers']       = { label = 'Sky Flyers (R)',       weight = 500, stack = true, close = true },
['fs_rob_sky_gliders']      = { label = 'Sky Gliders (R)',      weight = 500, stack = true, close = true },
['fs_rob_fastrunner_2000']  = { label = 'Fastrunner 2000 (R)',  weight = 500, stack = true, close = true },
['fs_rob_speedster_300']    = { label = 'Speedster 300 (R)',    weight = 500, stack = true, close = true },
['fs_rob_runner_prime']     = { label = 'Runner Prime (R)',     weight = 500, stack = true, close = true },
['fs_rob_breeze_95s']       = { label = 'Breeze 95s (R)',       weight = 500, stack = true, close = true },
['fs_rob_breeze_100s']      = { label = 'Breeze 100s (R)',      weight = 500, stack = true, close = true },
['fs_rob_breeze_90s']       = { label = 'Breeze 90s (R)',       weight = 500, stack = true, close = true },
['fs_rob_sky_walkers_red']  = { label = 'Sky Walkers Red (R)',  weight = 500, stack = true, close = true },
['fs_rob_shadow_yellows']   = { label = 'Shadow Yellows (R)',   weight = 500, stack = true, close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add items to your shared/items.lua
['fs_rob_sky_gliders_plus'] = { ['name'] = 'fs_rob_sky_gliders_plus', ['label'] = 'Sky Gliders Plus (R)', ['weight'] = 500, ['type'] = 'item', ['image'] = 'fs_rob_sky_gliders_plus.png', ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Stolen designer sneakers' },
['fs_rob_breeze_bangs']     = { ['name'] = 'fs_rob_breeze_bangs',     ['label'] = 'Breeze Bangs (R)',     ['weight'] = 500, ['type'] = 'item', ['image'] = 'fs_rob_breeze_bangs.png',     ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Stolen designer sneakers' },
['fs_rob_tiger_mediums']    = { ['name'] = 'fs_rob_tiger_mediums',    ['label'] = 'Tiger Mediums (R)',    ['weight'] = 500, ['type'] = 'item', ['image'] = 'fs_rob_tiger_mediums.png',    ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Stolen designer sneakers' },
['fs_rob_galaxy_x']         = { ['name'] = 'fs_rob_galaxy_x',         ['label'] = 'Galaxy X (R)',         ['weight'] = 500, ['type'] = 'item', ['image'] = 'fs_rob_galaxy_x.png',         ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Stolen designer sneakers' },
```

:::

### Item Images
Copy sneaker icons from `fs_shoesrobbery/INSTALL_ME_FIRST/Images/` into your inventory's web/images directory.

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_shoesrobbery` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_shoesrobbery
```

3. Restart your FiveM server.
