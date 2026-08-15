---
title: Wig Craft & Sell Installation | FWB Studio Docs
description: Install Wig Craft & Sell (Weave & Wear) on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426495" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Wig Craft & Sell — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction & inventory integration |
| `ox_lib` | Yes | Progress bars, text UI, and notifications |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Inventory Items Setup

Add crafting supplies and wig items into your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua

-- Raw Materials & Tools
['fs_ww_wigcap']          = { label = 'Wig Cap',            weight = 50,  stack = true,  close = true },
['fs_ww_wigbundle']       = { label = 'Hair Bundle',        weight = 100, stack = true,  close = true },
['fs_ww_sewingkit']       = { label = 'Sewing Kit',         weight = 100, stack = true,  close = true },
['fs_ww_table']           = { label = 'Wig Craft Table',    weight = 5000, stack = false, close = true },
['fs_ww_phone']           = { label = 'Weave & Wear Phone', weight = 200, stack = false, close = true },

-- Crafted Wigs
['fs_ww_long_curly']       = { label = 'Long Curly Wig',     weight = 300, stack = true,  close = true },
['fs_ww_short_hair_wig']   = { label = 'Short Hair Wig',     weight = 300, stack = true,  close = true },
['fs_ww_short_curled_wig'] = { label = 'Short Curled Wig',   weight = 300, stack = true,  close = true },
['fs_ww_long_blonde_wig']  = { label = 'Long Blonde Wig',    weight = 300, stack = true,  close = true },
['fs_ww_40inchwigs']       = { label = '40 Inch Wigs',       weight = 300, stack = true,  close = true },
['fs_ww_braidwigs']        = { label = 'Braid Wigs',         weight = 300, stack = true,  close = true },
['fs_ww_bodywavewigs']     = { label = 'Body Wave Wigs',     weight = 300, stack = true,  close = true },
['fs_ww_bangwigs']         = { label = 'Bang Wigs',          weight = 300, stack = true,  close = true },
['fs_ww_straightwigs']     = { label = 'Straight Wigs',      weight = 300, stack = true,  close = true },
['fs_ww_naturalwavewigs']  = { label = 'Natural Wave Wigs',  weight = 300, stack = true,  close = true },
['fs_ww_deepwavewigs']     = { label = 'Deep Wave Wigs',     weight = 300, stack = true,  close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add items into your shared/items.lua
['fs_ww_wigcap']          = { ['name'] = 'fs_ww_wigcap',          ['label'] = 'Wig Cap',            ['weight'] = 50,   ['type'] = 'item', ['image'] = 'fs_ww_wigcap.png',          ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Nylon wig cap' },
['fs_ww_wigbundle']       = { ['name'] = 'fs_ww_wigbundle',       ['label'] = 'Hair Bundle',        ['weight'] = 100,  ['type'] = 'item', ['image'] = 'fs_ww_wigbundle.png',       ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Human hair weave bundle' },
['fs_ww_sewingkit']       = { ['name'] = 'fs_ww_sewingkit',       ['label'] = 'Sewing Kit',         ['weight'] = 100,  ['type'] = 'item', ['image'] = 'fs_ww_sewingkit.png',       ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Needles and thread' },
['fs_ww_table']           = { ['name'] = 'fs_ww_table',           ['label'] = 'Wig Craft Table',    ['weight'] = 5000, ['type'] = 'item', ['image'] = 'fs_ww_table.png',           ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Deployable wig table' },
['fs_ww_phone']           = { ['name'] = 'fs_ww_phone',           ['label'] = 'Weave & Wear Phone', ['weight'] = 200,  ['type'] = 'item', ['image'] = 'fs_ww_phone.png',           ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Weave & Wear smartphone' },
```

:::

### Item Images
Copy the PNG icons from `fs_weavewear/INSTALL_ME_FIRST/Images/` into your inventory's web/images directory.

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_weavewear` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_weavewear
```

3. Restart your FiveM server.
