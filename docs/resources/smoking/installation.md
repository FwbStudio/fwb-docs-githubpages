---
title: Smoking Installation | FWB Studio Docs
description: Install Smoking on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426496" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Smoking — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction & inventory integration |
| `ox_lib` | Yes | UI components and progress bars |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Inventory Items Setup

Add rolling papers, lighters, vapes, and rolled joint items to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua

-- Lighters & Wraps
['lighter']             = { label = 'Lighter',                 weight = 50,  stack = true, close = true },
['cheap_lighter']       = { label = 'Cheap Lighter',           weight = 50,  stack = true, close = true },
['backwoods_honey']     = { label = 'Backwoods Honey',         weight = 50,  stack = true, close = true },
['backwoods_grape']     = { label = 'Backwoods Grape',         weight = 50,  stack = true, close = true },
['grabba_leaf']         = { label = 'Grabba Leaf',             weight = 50,  stack = true, close = true },
['raw_cone_king']       = { label = 'Raw Cone King',           weight = 20,  stack = true, close = true },

-- Vapes & Flavours
['vape']                = { label = 'Electronic Vape',         weight = 200, stack = false, close = true },
['blueberry_jam_cookie']= { label = 'Blueberry Jam E-Liquid',  weight = 100, stack = true, close = true },
['strawberry_jam_cookie']= { label = 'Strawberry Jam E-Liquid', weight = 100, stack = true, close = true },

-- Rolled Joints
['cake_mix_joint']      = { label = 'Cake Mix Joint',          weight = 50,  stack = true, close = true },
['cereal_milk_joint']   = { label = 'Cereal Milk Joint',       weight = 50,  stack = true, close = true },
['gelatti_joint']       = { label = 'Gelatti Joint',           weight = 50,  stack = true, close = true },
['runtz_og_joint']      = { label = 'Runtz OG Joint',          weight = 50,  stack = true, close = true },
['sour_diesel_joint']   = { label = 'Sour Diesel Joint',       weight = 50,  stack = true, close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add items to your shared/items.lua
['lighter']           = { ['name'] = 'lighter',           ['label'] = 'Lighter',                 ['weight'] = 50,  ['type'] = 'item', ['image'] = 'lighter.png',           ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Standard lighter' },
['backwoods_honey']   = { ['name'] = 'backwoods_honey',   ['label'] = 'Backwoods Honey',         ['weight'] = 50,  ['type'] = 'item', ['image'] = 'backwoods_honey.png',   ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Honey blunt wrap' },
['cake_mix_joint']    = { ['name'] = 'cake_mix_joint',    ['label'] = 'Cake Mix Joint',          ['weight'] = 50,  ['type'] = 'item', ['image'] = 'cake_mix_joint.png',    ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Handcrafted weed joint' },
```

:::

### Item Images
Copy the PNG icons from `fs_smoking/INSTALL ME FIRST/` into your inventory's web/images directory.

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_smoking` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_smoking
```

3. Restart your FiveM server.
