---
title: Outfit Bag Installation | FWB Studio Docs
description: Install Outfit Bag on FiveM — database table SQL, inventory items setup, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfit Bag — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | Framework abstraction & inventory integration |
| `ox_lib` | Yes | UI components and point interactions |
| `oxmysql` | Yes | Persistent database storage for saved outfits |
| `ESX, QBCore, or Qbox` | Yes | Supported frameworks |

---

## 1. Database Setup

Execute the following SQL query in your database manager (HeidiSQL, phpMyAdmin) to create the required table:

```sql
CREATE TABLE IF NOT EXISTS `fs_outfitbag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(100) NOT NULL DEFAULT '0',
  `bagname` varchar(50) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

---

## 2. Items & Inventory Setup

If you want players to use outfit bags as usable inventory items, add the bag items to your inventory system:

::: code-group

```lua [📦 ox_inventory]
-- Add to ox_inventory/data/items.lua
['fs_small_bag'] = {
    label = 'Small Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A small bag that holds up to 5 saved outfits.',
},
['fs_medium_bag'] = {
    label = 'Medium Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A medium bag that holds up to 10 saved outfits.',
},
['fs_large_bag'] = {
    label = 'Large Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A large bag that holds up to 15 saved outfits.',
},
```

```lua [📦 qs-inventory]
-- Add to qs-inventory/shared/items.lua
['fs_small_bag'] = {
    ['name'] = 'fs_small_bag',
    ['label'] = 'Small Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_small_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A small bag that holds up to 5 saved outfits.'
},
['fs_medium_bag'] = {
    ['name'] = 'fs_medium_bag',
    ['label'] = 'Medium Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_medium_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A medium bag that holds up to 10 saved outfits.'
},
['fs_large_bag'] = {
    ['name'] = 'fs_large_bag',
    ['label'] = 'Large Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_large_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A large bag that holds up to 15 saved outfits.'
},
```

```lua [📦 qb-core items]
-- Add to qb-core/shared/items.lua
['fs_small_bag'] = {
    ['name'] = 'fs_small_bag',
    ['label'] = 'Small Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_small_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A small bag that holds up to 5 saved outfits.'
},
['fs_medium_bag'] = {
    ['name'] = 'fs_medium_bag',
    ['label'] = 'Medium Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_medium_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A medium bag that holds up to 10 saved outfits.'
},
['fs_large_bag'] = {
    ['name'] = 'fs_large_bag',
    ['label'] = 'Large Bag',
    ['weight'] = 10,
    ['type'] = 'item',
    ['image'] = 'fs_large_bag.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'A large bag that holds up to 15 saved outfits.'
},
```

```lua [📦 ak_inventory]
-- Add to ak_inventory config items
['fs_small_bag'] = {
    label = 'Small Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A small bag that holds up to 5 saved outfits.',
},
['fs_medium_bag'] = {
    label = 'Medium Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A medium bag that holds up to 10 saved outfits.',
},
['fs_large_bag'] = {
    label = 'Large Bag',
    weight = 10,
    stack = false,
    close = true,
    description = 'A large bag that holds up to 15 saved outfits.',
},
```

:::

### Item Images
Copy all PNG image files from `fs_outfitbag/[INSTALL_ME_FIRST]/[Images]/` into your inventory's web/images folder:
- **ox_inventory**: `ox_inventory/web/images/`
- **qs-inventory**: `qs-inventory/html/images/`
- **qb-inventory**: `qb-inventory/html/images/`

---

## 3. Server Configuration (`server.cfg`)

Place `fs_outfitbag` inside your `resources/[fs]/` folder and add to your `server.cfg` **after** `fs_bridge`:

```lua
ensure oxmysql
ensure ox_lib
ensure fs_bridge
ensure fs_outfitbag
```

Restart your FiveM server and verify console startup output.
