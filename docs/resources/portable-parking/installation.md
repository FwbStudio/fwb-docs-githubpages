---
title: Portable Parking Installation | FWB Studio Docs
description: Install Portable Parking on FiveM — dependencies and server.cfg. FiveM portable parking script.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `ox_lib` | Yes | Shared UI / callbacks |
| `oxmysql` | Yes | MySQL database |
| `ESX, QBCore, or Qbox` | Yes | One framework per server |


## Dispatch / alert jobs

| Job name | Notes |
| --- | --- |
| `police` | Must match your framework job name exactly |
| `sheriff` | Must match your framework job name exactly |


## Items & inventory setup

Open `fs_portableparking/[INSTALL_ME_FIRST]` and use the block for **your** inventory system.

| Inventory | Files | Copy images to |
| --- | --- | --- |
| ESX | `esx_database.sql` | `es_extended or your inventory images folder` |
| SQL | `qb_database.sql` | See file notes |

<div class="fwb-inv-tabs">
<details>
<summary>ESX</summary>

Copy item/weapon images into `es_extended or your inventory images folder`.

**`esx_database.sql`**

```sql
ALTER TABLE owned_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE owned_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```

</details>

<details>
<summary>SQL</summary>

**`qb_database.sql`**

```sql
ALTER TABLE player_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE player_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```

</details>

</div>




## Install steps

1. Place `fs_portableparking` in `resources/[fs]/`.
2. Install dependencies listed below (Bridge, `ox_lib`, etc.).
3. Complete **Items & inventory setup** from `[INSTALL_ME_FIRST]`.
4. Configure `fs_portableparking/config/` before first start.
5. Add to `server.cfg` (**after** `fs_bridge` when Bridge is required):

```cfg
ensure fs_bridge
ensure fs_portableparking
```

6. Restart the server and check the console for errors.
