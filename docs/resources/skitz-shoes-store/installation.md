---
title: Skitz Shoes Store Installation | FWB Studio Docs
description: Install Skitz Shoes Store on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426492" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Skitz Shoes Store — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction & inventory integration |
| `ox_lib` | Yes | Progress bars, text UI, and notifications |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Inventory Items Setup

Add crafting materials, tools, and designer sneaker items to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua

-- Raw Materials & Tools
['fs_leather_materials'] = { label = 'Leather Materials', weight = 100, stack = true, close = true },
['fs_shoe_foam']         = { label = 'Shoe Foam',         weight = 100, stack = true, close = true },
['fs_clothe_materials']  = { label = 'Raw Cloth',         weight = 100, stack = true, close = true },
['fs_shoes_table']       = { label = 'Work Table',        weight = 5000, stack = false, close = true },
['fs_shoesphone']        = { label = 'Skitz Phone',       weight = 200, stack = false, close = true },

-- Crafted Sneakers
['fs_sky_gliders_plus']  = { label = 'Sky Gliders Plus',  weight = 500, stack = true, close = true },
['fs_breeze_bangs']      = { label = 'Breeze Bangs',      weight = 500, stack = true, close = true },
['fs_tiger_mediums']     = { label = 'Tiger Mediums',     weight = 500, stack = true, close = true },
['fs_galaxy_x']          = { label = 'Galaxy X',          weight = 500, stack = true, close = true },
['fs_sky_walkers']       = { label = 'Sky Walkers',       weight = 500, stack = true, close = true },
['fs_sky_pilots']        = { label = 'Sky Pilots',        weight = 500, stack = true, close = true },
['fs_sky_flyers']        = { label = 'Sky Flyers',        weight = 500, stack = true, close = true },
['fs_sky_gliders']       = { label = 'Sky Gliders',       weight = 500, stack = true, close = true },
['fs_fastrunner_2000']   = { label = 'Fast Runner 2000',  weight = 500, stack = true, close = true },
['fs_speedster_300']     = { label = 'Speedster 300',     weight = 500, stack = true, close = true },
['fs_runner_prime']      = { label = 'Runner Prime',      weight = 500, stack = true, close = true },
['fs_breeze_95s']        = { label = 'Breeze 95s',        weight = 500, stack = true, close = true },
['fs_breeze_100s']       = { label = 'Breeze 100s',       weight = 500, stack = true, close = true },
['fs_breeze_90s']        = { label = 'Breeze 90s',        weight = 500, stack = true, close = true },
['fs_sky_walkers_red']   = { label = 'Sky Walkers Red',   weight = 500, stack = true, close = true },
['fs_shadow_yellows']    = { label = 'Shadow Yellows',    weight = 500, stack = true, close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add items into your shared/items.lua
['fs_leather_materials'] = { ['name'] = 'fs_leather_materials', ['label'] = 'Leather Materials', ['weight'] = 100, ['type'] = 'item', ['image'] = 'fs_leather_materials.png', ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Leather fabric for sneaker manufacturing' },
['fs_shoe_foam']         = { ['name'] = 'fs_shoe_foam',         ['label'] = 'Shoe Foam',         ['weight'] = 100, ['type'] = 'item', ['image'] = 'fs_shoe_foam.png',         ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'High density shoe foam' },
['fs_clothe_materials']  = { ['name'] = 'fs_clothe_materials',  ['label'] = 'Raw Cloth',         ['weight'] = 100, ['type'] = 'item', ['image'] = 'fs_clothe_materials.png',  ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Raw fabric materials' },
['fs_shoes_table']       = { ['name'] = 'fs_shoes_table',       ['label'] = 'Work Table',        ['weight'] = 5000, ['type'] = 'item', ['image'] = 'fs_shoes_table.png',       ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Deployable sneaker crafting table' },
['fs_shoesphone']        = { ['name'] = 'fs_shoesphone',        ['label'] = 'Skitz Phone',       ['weight'] = 200, ['type'] = 'item', ['image'] = 'fs_shoesphone.png',        ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Skitz sneaker distribution smartphone' },
```

:::

### Item Images
Copy the item PNG files from `fs_skitz/INSTALL_ME_FIRST/Images/` into your inventory's web/images directory.

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_skitz` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_skitz
```

3. Restart your FiveM server.
