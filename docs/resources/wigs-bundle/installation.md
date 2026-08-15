---
title: WigsBundle Business Installation | FWB Studio Docs
description: Install WigsBundle Business on FiveM — inventory items, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426494" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# WigsBundle Business — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction, society accounts, and inventory bridge |
| `ox_lib` | Yes | UI components, notifications, and progress bars |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Inventory Items Setup

Add the raw materials and wearable wig items to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua

-- Raw Materials & Tools
['wigcap']          = { label = 'Wig Cap',            weight = 50,  stack = true,  close = true },
['hairbundles']     = { label = 'Hair Bundle',        weight = 100, stack = true,  close = true },
['sewinkit']        = { label = 'Sewing Kit',         weight = 100, stack = true,  close = true },
['wigtable']        = { label = 'Queen Wig Table',    weight = 5000, stack = false, close = true },

-- Wearable Wigs (Female)
['spotlight_wig']   = { label = 'Spotlight Wig',      weight = 200, stack = false, close = true },
['chulita_wig']     = { label = 'Chulita Wig',        weight = 200, stack = false, close = true },
['classy_wig']      = { label = 'Classy Wig',         weight = 200, stack = false, close = true },
['fiesta_wig']      = { label = 'Fiesta Wig',         weight = 200, stack = false, close = true },
['diva_wig']        = { label = 'Diva Wig',           weight = 200, stack = false, close = true },
['sweetheart_wig']  = { label = 'Sweetheart Wig',     weight = 200, stack = false, close = true },

-- Wearable Wigs (Male)
['m_backstage_wig'] = { label = 'Backstage Wig (M)',  weight = 200, stack = false, close = true },
['m_blake_wig']     = { label = 'Blake Wig (M)',      weight = 200, stack = false, close = true },
['m_boss_wig']      = { label = 'Boss Wig (M)',       weight = 200, stack = false, close = true },
```

```lua [📦 qs-inventory / qb-core]
-- Add items into your shared/items.lua
['wigcap']        = { ['name'] = 'wigcap',        ['label'] = 'Wig Cap',         ['weight'] = 50,   ['type'] = 'item', ['image'] = 'wigcap.png',        ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Nylon wig cap' },
['hairbundles']   = { ['name'] = 'hairbundles',   ['label'] = 'Hair Bundle',     ['weight'] = 100,  ['type'] = 'item', ['image'] = 'hairbundles.png',   ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Human hair bundle' },
['sewinkit']      = { ['name'] = 'sewinkit',      ['label'] = 'Sewing Kit',      ['weight'] = 100,  ['type'] = 'item', ['image'] = 'sewinkit.png',      ['unique'] = false, ['useable'] = false, ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Salon sewing kit' },
['spotlight_wig'] = { ['name'] = 'spotlight_wig', ['label'] = 'Spotlight Wig',   ['weight'] = 200,  ['type'] = 'item', ['image'] = 'spotlight_wig.png', ['unique'] = false, ['useable'] = true,  ['shouldClose'] = true, ['combinable'] = nil, ['description'] = 'Wearable designer wig' },
```

:::

### Item Images
Copy the PNG icons from `fs_wigsbundles/INSTALL_ME_FIRST/Images/` into your inventory's web/images folder.

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_wigsbundles` in your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg` **after** `fs_bridge`:

```lua
ensure ox_lib
ensure fs_bridge
ensure fs_wigsbundles
```

3. Restart your FiveM server.
