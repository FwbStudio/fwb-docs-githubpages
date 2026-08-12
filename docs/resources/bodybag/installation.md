---
title: Bodybag Installation | FWB Studio Docs
description: Install Bodybag on FiveM — dependencies and server.cfg. FiveM bodybag script ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `fs_mlo_lastworld` | Yes | Heaven/Hell MLO — included with your Keymaster download |
| `fs_bridge` | Yes | FWB Bridge — framework, inventory, target, dispatch |
| `ox_lib` | Yes | Shared UI / callbacks |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `ambulance` | Must match your framework job name exactly |


## Items & inventory setup

Open `fs_bodybag/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

<div class="fwb-inv-tabs">
<details>
<summary>ox_inventory</summary>

Copy item/weapon images into `ox_inventory/web/images/`.

**`ox_inventory.lua`**

```lua
-- add item into ox_inventory/data/items.lua

    ['fs_shovel'] = {
        label = 'Shovel',
        stack = true,
        weight = 10,
        description = 'A tool used for digging.',
    },

    ['fs_deadopp'] = {
        label = 'Dead Opp Pack',
        stack = true,
        weight = 100,
        description = 'A pack containing the belongings of a deceased person.',
    },

    ['fs_ashesemptybag'] = {
        label = 'Ashes Empty Bag',
        stack = true,
        weight = 50,
        description = 'An empty bag used to hold ashes.',
    },

    ['fs_deadbodybag'] = {
        label = 'Body Bag',
        stack = true,
        weight = 100,
        description = 'A bag used to carry deceased individuals.',
    },

    ['fs_lighter'] = {
        label = 'Lighter',
        stack = true,
        weight = 100,
        description = 'A tool used to start fires.',
    },
```

</details>

<details>
<summary>QBCore / qb-inventory</summary>

Copy item/weapon images into `qb-inventory/html/images/items/`.

**`qb-core-items.lua`**

```lua
----- ADD this code into qb-core/shared/items.lua

    fs_shovel = {
         name = 'fs_shovel', 
         label = 'Shovel', 
         weight = 10, 
         type = 'item', 
         image = 'fs_shovel.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A tool used for digging.' 
    },
    fs_deadopp = { 
         name = 'fs_deadopp', 
         label = 'Dead Opp Pack', 
         weight = 100, 
         type = 'item', 
         image = 'fs_deadopp.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A pack containing the belongings of a deceased person.' 
    },
    fs_ashesemptybag = { 
         name = 'fs_ashesemptybag', 
         label = 'Ashes Empty Bag', 
         weight = 50, 
         type = 'item', 
         image = 'fs_ashesemptybag.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'An empty bag used to hold ashes.' 
    },
    fs_deadbodybag = { 
         name = 'fs_deadbodybag', 
         label = 'Body Bag', 
         weight = 100, 
         type = 'item', 
         image = 'fs_deadbodybag.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A bag used to carry deceased individuals.' 
    },

    fs_lighter = { 
         name = 'fs_lighter', 
         label = 'Lighter', 
         weight = 100, 
         type = 'item', 
         image = 'fs_lighter.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A tool used to start fires.' 
    },
```

</details>

<details>
<summary>qs-inventory</summary>

Copy item/weapon images into `qs-inventory/html/images/`.

**`qs_inventory.lua`**

```lua
----- ADD this code into qs-inventory/shared/items.lua

     fs_shovel = {
         name = 'fs_shovel', 
         label = 'Shovel', 
         weight = 10, 
         type = 'item', 
         image = 'fs_shovel.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A tool used for digging.' 
    },
    fs_deadopp = { 
         name = 'fs_deadopp', 
         label = 'Dead Opp Pack', 
         weight = 100, 
         type = 'item', 
         image = 'fs_deadopp.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A pack containing the belongings of a deceased person.' 
    },
    fs_ashesemptybag = { 
         name = 'fs_ashesemptybag', 
         label = 'Ashes Empty Bag', 
         weight = 50, 
         type = 'item', 
         image = 'fs_ashesemptybag.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'An empty bag used to hold ashes.' 
    },
    fs_deadbodybag = { 
         name = 'fs_deadbodybag', 
         label = 'Body Bag', 
         weight = 100, 
         type = 'item', 
         image = 'fs_deadbodybag.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A bag used to carry deceased individuals.' 
    },

    fs_lighter = { 
         name = 'fs_lighter', 
         label = 'Lighter', 
         weight = 100, 
         type = 'item', 
         image = 'fs_lighter.png', 
         unique = false, 
         useable = true, 
         shouldClose = false, 
         description = 'A tool used to start fires.' 
    },
```

</details>

<details>
<summary>Item images</summary>

**Image:** `fs_ashesemptybag.png` — place in the path above.

**Image:** `fs_deadbodybag.png` — place in the path above.

**Image:** `fs_lighter.png` — place in the path above.

**Image:** `fs_shovel.png` — place in the path above.

</details>

<details>
<summary>Other install files</summary>

- `ak47_inventory.lua`

</details>

</div>



## Install steps

1. Place `fs_bodybag` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_bodybag/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_bodybag
```

6. Restart the server and check the console for errors.
