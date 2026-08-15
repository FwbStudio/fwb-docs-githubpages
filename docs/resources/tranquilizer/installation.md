---
title: Tranquilizer Installation | FWB Studio Docs
description: Install Tranquilizer on FiveM — items setup, ACE permissions, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7444827" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Tranquilizer — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | Database persistence for paralysis timers |
| `ESX, QBCore, or Qbox` | Yes | Framework core |
| `fs_bridge` | **No** | `fs_tranquilizer` includes its own internal modular bridge |

---

## 1. Inventory Items Setup

Add the tranquilizer syringe/dart item to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua
['tranquilizer'] = {
    label = 'Tranquilizer Dart',
    weight = 100,
    stack = true,
    close = true,
    description = 'A high-potency medical tranquilizer syringe.',
},
```

```lua [📦 qs-inventory / qb-core]
-- Add to your shared/items.lua
['tranquilizer'] = {
    ['name'] = 'tranquilizer',
    ['label'] = 'Tranquilizer Dart',
    ['weight'] = 100,
    ['type'] = 'item',
    ['image'] = 'tranquilizer.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A high-potency medical tranquilizer syringe.'
},
```

:::

---

## 2. Admin Permissions Setup

Grant access to `/fs_tranquilizer` in your `server.cfg`:

```lua
# Admin group permission
add_ace group.admin "fs_tranquilizer.admin" allow

# Or specific player license
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "fs_tranquilizer.admin" allow
```

---

## 3. Server Configuration (`server.cfg`)

1. Place `fs_tranquilizer` into your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg`:

```lua
ensure oxmysql
ensure fs_tranquilizer
```

3. Restart your FiveM server.
4. Run `/fs_tranquilizer` in-game to configure sedation durations and hospital beds.
