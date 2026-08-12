---
title: Outfitbag Installation | FWB Studio Docs
description: Install Outfitbag on FiveM — dependencies and server.cfg. FiveM outfit bag wardrobe script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfitbag — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `oxmysql` | Yes | MySQL database |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |




## Items & inventory setup

Open `fs_outfitbag/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

| Inventory | Files | Copy images to |
| --- | --- | --- |
| ox_inventory | `ox_inventory.lua` | `ox_inventory/web/images/` |
| QBCore / qb-inventory | `qb-core_items.lua` | `qb-inventory/html/images/items/` |
| qs-inventory | `qs_inventory.lua` | `qs-inventory/html/images/` |
| SQL | `sql.sql` | See file notes |
| Item images | `fs_large_bag.png`, `fs_medium_bag.png`, `fs_small_bag.png` | See file notes |
| Other | `ak_inventory.lua` | See file notes |

<div class="fwb-inv-tabs">
<details>
<summary>ox_inventory</summary>

Copy item/weapon images into `ox_inventory/web/images/`.

**`ox_inventory.lua`**

```lua
--[[

    -- Ox Invetory Item Template
    -- ox_inventory/web/images

 ]]

 


    ['fs_small_bag'] = {
        label = 'Small Bag',
		weight = 10,
		stack = false,
		close = true,
		description = 'A small bag that can hold a few outfitbag.',
	},
    ['fs_medium_bag'] = {
        label = 'Medium Bag',
		weight = 10,
		stack = false,
		close = true,
		description = 'A medium bag that can hold a few outfitbag.',
	},
    ['fs_large_bag'] = {
        label = 'Large Bag',
		weight = 10,
		stack = false,
		close = true,
		description = 'A large bag that can hold a few outfitbag.',
	},
```

</details>

<details>
<summary>QBCore / qb-inventory</summary>

Copy item/weapon images into `qb-inventory/html/images/items/`.

**`qb-core_items.lua`**

```lua
----- ADD this code into qb-core/shared/items.lua



        fs_small_bag = {
            name = 'fs_small_bag', 
            label = 'Small Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_small_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A small bag that can hold a few outfitbag.' 
        },
        fs_medium_bag = {
            name = 'fs_medium_bag', 
            label = 'Medium Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_medium_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A medium bag that can hold a few outfitbag.' 
        },
        fs_large_bag = {
            name = 'fs_large_bag', 
            label = 'Large Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_large_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A large bag that can hold a few outfitbag.' 
        },
```

</details>

<details>
<summary>qs-inventory</summary>

Copy item/weapon images into `qs-inventory/html/images/`.

**`qs_inventory.lua`**

```lua
----- ADD this code into qs-inventory/shared/items.lua



        fs_small_bag = {
            name = 'fs_small_bag', 
            label = 'Small Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_small_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A small bag that can hold a few outfitbag.' 
        },
        fs_medium_bag = {
            name = 'fs_medium_bag', 
            label = 'Medium Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_medium_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A medium bag that can hold a few outfitbag.' 
        },
        fs_large_bag = {
            name = 'fs_large_bag', 
            label = 'Large Bag', 
            weight = 10, 
            type = 'item', 
            image = 'fs_large_bag.png', 
            unique = false, 
            useable = true, 
            shouldClose = false, 
            description = 'A large bag that can hold a few outfitbag.' 
        },
```

</details>

<details>
<summary>SQL</summary>

**`sql.sql`**

```sql
CREATE TABLE IF NOT EXISTS `fs_outfitbag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(100) NOT NULL DEFAULT '0',
  `bagname` varchar(50) DEFAULT NULL,
  `data` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
```

</details>

<details>
<summary>Item images</summary>

**Image:** `fs_large_bag.png` — place in the path above.

**Image:** `fs_medium_bag.png` — place in the path above.

**Image:** `fs_small_bag.png` — place in the path above.

</details>

<details>
<summary>Other install files</summary>

- `ak_inventory.lua`

</details>

</div>


## Supported integrations

| System | Support |
| --- | --- |
| ESX / QBCore / Qbox | Yes (via `fs_bridge`) |
| ox_inventory / qb-inventory / qs-inventory | Yes (Bridge inventory override) |
| ox_target / qb-target | When configured in Bridge |
| Dispatch adapters | Configure in Bridge overrides |

Notification and inventory hooks are handled through Bridge. See [Bridge Supported](/bridge/supported).


## Install steps

1. Place `fs_outfitbag` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_outfitbag/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_outfitbag
```

6. Restart the server and check the console for errors.
