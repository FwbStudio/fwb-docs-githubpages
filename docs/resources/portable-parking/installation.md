---
title: Portable Parking Installation | FWB Studio Docs
description: Install Portable Parking on FiveM — database migration and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_lib` | Yes | Menu rendering, notifications, and points |
| `oxmysql` | Yes | Vehicle database queries |
| `ESX, QBCore, or Qbox` | Yes | Framework core for vehicle ownership |
| `fs_bridge` | **No** | `fs_portableparking` includes its own open `bridge/` folder |

---

## 1. Database Setup

Execute the appropriate SQL query for your framework to add the `vin` tracking column to your vehicle database:

::: code-group

```sql [📦 ESX]
ALTER TABLE owned_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE owned_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```

```sql [📦 QBCore / Qbox]
ALTER TABLE player_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE player_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```

:::

---

## 2. Server Configuration (`server.cfg`)

1. Place `fs_portableparking` in your `resources/[fs]/` directory.
2. If you want staff to access `/vadmin`, add the ACE permission in your `server.cfg`:
   ```lua
   add_ace group.admin "fs_portableparkingadmin" allow
   # Or for specific player license:
   add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "fs_portableparkingadmin" allow
   ```
3. Add the resource to your `server.cfg`:

```lua
ensure oxmysql
ensure ox_lib
ensure fs_portableparking
```

4. Restart your FiveM server.
