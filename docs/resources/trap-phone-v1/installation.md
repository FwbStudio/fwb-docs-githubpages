---
title: Trap Phone v1 Installation | FWB Studio Docs
description: Install Trap Phone v1 on FiveM — dependencies and server.cfg. FiveM trap phone v1 drug script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7490289" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Trap Phone v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `ox_lib` | Yes | Shared UI / callbacks |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `sheriff` | Must match your framework job name exactly |
| `statepolice` | Must match your framework job name exactly |


## Items & inventory setup

Open `fs_trapphone_v1/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

<div class="fwb-inv-tabs">
<details>
<summary>ox_inventory</summary>

Copy item/weapon images into `ox_inventory/web/images/`.

**`ox_inventory.lua`**

```lua
['fs_trapphone'] = {
    label = 'Trap Phone',
    weight = 1,
    stack = true,
    close = true,
    description = 'Secure Phone for Drug sell',
},
```

</details>

<details>
<summary>qs-inventory</summary>

Copy item/weapon images into `qs-inventory/html/images/`.

**`qs_inventory.lua`**

```lua
['fs_trapphone'] = {
    ['name'] = 'fs_trapphone',
    ['label'] = 'Trap Phone',
    ['weight'] = 1,
    ['type'] = 'item',
    ['image'] = 'fs_trapphone.png',
    ['unique'] = false,
    ['useable'] = true,
    ['shouldClose'] = true,
    ['combinable'] = nil,
    ['description'] = 'Secure Phone for Drug sell',
},
```

</details>

<details>
<summary>Item images</summary>

**Image:** `fs_trapphone.png` — place in the path above.

</details>

<details>
<summary>Other install files</summary>

- `qb_core_items.lua`

</details>

</div>




## Install steps

1. Place `fs_trapphone_v1` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_trapphone_v1/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_trapphone_v1
```

6. Restart the server and check the console for errors.
