---
title: White Widow Installation | FWB Studio Docs
description: Install White Widow on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426496" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# White Widow — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction & society accounts |
| `ox_lib` | Yes | UI components and progress bars |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |
| `fs_smoking` | Optional | For joint rolling and vaping |

---

## 1. Inventory Items Setup

Add cannabis items and dispensary supplies to your inventory:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua
['seed_weed']        = { label = 'Cannabis Seed',        weight = 10,  stack = true, close = true },
['weed_pot']         = { label = 'Plant Pot',            weight = 500, stack = true, close = true },
['weed_fertilizer']  = { label = 'Plant Fertilizer',     weight = 200, stack = true, close = true },
['weed_spray']       = { label = 'Pesticide Spray',      weight = 200, stack = true, close = true },
['weed_leaf']        = { label = 'Fresh Cannabis Leaf',  weight = 50,  stack = true, close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add to your shared/items.lua
['seed_weed']       = { ['name'] = 'seed_weed',       ['label'] = 'Cannabis Seed',       ['weight'] = 10,  ['type'] = 'item', ['image'] = 'seed_weed.png',       ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Cannabis cultivation seed' },
['weed_pot']        = { ['name'] = 'weed_pot',        ['label'] = 'Plant Pot',           ['weight'] = 500, ['type'] = 'item', ['image'] = 'weed_pot.png',        ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Soil pot for growing' },
['weed_fertilizer'] = { ['name'] = 'weed_fertilizer', ['label'] = 'Plant Fertilizer',    ['weight'] = 200, ['type'] = 'item', ['image'] = 'weed_fertilizer.png', ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Plant nutrition formula' },
['weed_spray']      = { ['name'] = 'weed_spray',      ['label'] = 'Pesticide Spray',     ['weight'] = 200, ['type'] = 'item', ['image'] = 'weed_spray.png',      ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Pest control spray' },
['weed_leaf']       = { ['name'] = 'weed_leaf',       ['label'] = 'Fresh Cannabis Leaf', ['weight'] = 50,  ['type'] = 'item', ['image'] = 'weed_leaf.png',       ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Harvested cannabis buds' },
```

:::

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_whitewidow` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_whitewidow
```

3. Restart your FiveM server.
