---
title: Outfit Bag Installation | FWB Studio Docs
description: Install Outfit Bag on FiveM — dependencies, database SQL, items setup, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfit Bag — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `oxmysql` | Yes | MySQL async library for database queries |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |

---

## 1. Database Setup

Open `fs_outfitbag/[INSTALL_ME_FIRST]` and execute `sql.sql` in your database manager (HeidiSQL, phpMyAdmin) to create the required database table.

---

## 2. Items & Inventory Setup

Open `fs_outfitbag/[INSTALL_ME_FIRST]/[Items]` and use the file corresponding to **your** inventory system (`ox_inventory.lua`, `qs_inventory.lua`, `qb-core_items.lua`, `ak_inventory.lua`).

Copy the item images from `[INSTALL_ME_FIRST]/[Images]` into your inventory resource's web/images folder.

---

## 3. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place the resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_outfitbag`
3. Download and install `ox_lib` into your `resources/` directory.
4. Execute `[INSTALL_ME_FIRST]/sql.sql` in your database.
5. Complete **Items & Inventory Setup** from `[INSTALL_ME_FIRST]`.
6. Configure `fs_outfitbag/config/config.lua` before starting.
7. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure oxmysql
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

8. Restart your FiveM server and check the server console for clean startup prints.
