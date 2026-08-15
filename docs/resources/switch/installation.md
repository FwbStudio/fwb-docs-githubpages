---
title: Switch Installation | FWB Studio Docs
description: Install Switch on FiveM — inventory items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426485" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Switch — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_lib` | Yes | Progress bars and notifications |
| `ESX, QBCore, or Qbox` | Yes | Framework support |
| `fs_bridge` | **No** | `fs_switch` includes its own internal multi-framework bridge |

---

## 1. Inventory Items Setup

Add the switch items to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua
['fs_switch'] = {
    label = 'Glock Switch',
    weight = 50,
    stack = true,
    close = true,
    description = 'An auto-switch conversion kit for semi-automatic pistols.',
},
['fs_redswitch'] = {
    label = 'Red Glock Switch',
    weight = 50,
    stack = true,
    close = true,
    description = 'A heavy-duty red auto-switch conversion kit.',
},
['fs_blueswitch'] = {
    label = 'Blue Glock Switch',
    weight = 50,
    stack = true,
    close = true,
    description = 'A precision blue auto-switch conversion kit.',
},
['fs_greenswitch'] = {
    label = 'Green Glock Switch',
    weight = 50,
    stack = true,
    close = true,
    description = 'A lightweight green auto-switch conversion kit.',
},
```

```lua [📦 qs-inventory]
-- Add to qs-inventory/shared/items.lua
['fs_switch'] = {
    ['name'] = 'fs_switch',
    ['label'] = 'Glock Switch',
    ['weight'] = 50,
    ['type'] = 'item',
    ['image'] = 'fs_switch.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'An auto-switch conversion kit for semi-automatic pistols.'
},
```

```lua [📦 qb-inventory]
-- Add to qb-core/shared/items.lua
['fs_switch'] = {
    name = 'fs_switch',
    label = 'Glock Switch',
    weight = 50,
    type = 'item',
    image = 'fs_switch.png',
    unique = false,
    useable = true,
    shouldClose = true,
    combinable = nil,
    description = 'An auto-switch conversion kit for semi-automatic pistols.'
},
```

:::

### Item Images
Copy the PNG icons from `fs_switch/install_me_first/images/` into your inventory's web/images folder:
- **ox_inventory**: `ox_inventory/web/images/`
- **qs-inventory**: `qs-inventory/html/images/`
- **qb-inventory**: `qb-inventory/html/images/`

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_switch` into your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg`:

```lua
ensure ox_lib
ensure fs_switch
```

3. Restart your FiveM server.
