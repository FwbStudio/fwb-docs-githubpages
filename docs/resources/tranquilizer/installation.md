---
title: Tranquilizer Installation | FWB Studio Docs
description: Install Tranquilizer on FiveM — dependencies and server.cfg. FiveM tranquilizer script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7444827" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Tranquilizer — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `oxmysql` | Yes | MySQL database |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |




## Items & inventory setup

Open `fs_tranquilizer/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

| Inventory | Files | Copy images to |
| --- | --- | --- |
| ox_inventory | `ox_inventory.lua` | `ox_inventory/web/images/` |
| QBCore / qb-inventory | `qb-core.lua` | `qb-inventory/html/images/items/` |
| ESX | `esx_items.sql` | `es_extended or your inventory images folder` |
| Item images | `tranquilizer_kit.png` | See file notes |
| Other | `ak47_inventory.lua` | See file notes |

<div class="fwb-inv-tabs">
<details>
<summary>ox_inventory</summary>

Copy item/weapon images into `ox_inventory/web/images/`.

**`ox_inventory.lua`**

```lua
--[[

    -- Add this item in ox_inventory/data/items.lua

]]



    ['tranquilizer_kit'] = {
        label = 'Tranquilizer Kit',
        weight = 250,
        stack = true,
        close = true,
        description = 'Used to move a dead player into a tracked paralysis scene.'
    }
```

</details>

<details>
<summary>QBCore / qb-inventory</summary>

Copy item/weapon images into `qb-inventory/html/images/items/`.

**`qb-core.lua`**

```lua
--[[

    -- Add this item in qb-core/shared/items.lua 

]]



['tranquilizer_kit'] = {
    ['name'] = 'tranquilizer_kit',
    ['label'] = 'Tranquilizer Kit',
    ['weight'] = 250,
    ['type'] = 'item',
    ['image'] = 'fs_tranquilizer_syringe.svg',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['description'] = 'Used to move a dead player into a tracked paralysis scene.'
},
```

</details>

<details>
<summary>ESX</summary>

Copy item/weapon images into `es_extended or your inventory images folder`.

**`esx_items.sql`**

```sql
INSERT INTO `items` (`name`, `label`, `weight`) VALUES
('tranquilizer_kit', 'Tranquilizer Kit', 1);
```

</details>

<details>
<summary>Item images</summary>

**Image:** `tranquilizer_kit.png` — place in the path above.

</details>

<details>
<summary>Other install files</summary>

- `ak47_inventory.lua`

</details>

</div>




## Install steps

1. Place `fs_tranquilizer` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_tranquilizer/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_tranquilizer
```

6. Restart the server and check the console for errors.
