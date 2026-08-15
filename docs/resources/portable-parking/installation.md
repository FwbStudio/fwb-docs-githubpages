---
title: Portable Parking Installation | FWB Studio Docs
description: Install Portable Parking on FiveM — database migration, dependencies, and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `oxmysql` | Yes | MySQL async library for database queries |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |
| `fs_bridge` | **No** | `fs_portableparking` includes its own self-contained bridge folder |

---

## 1. Database Setup

Open `fs_portableparking/[INSTALL_ME_FIRST]` and execute the `.sql` file corresponding to **your** framework (`esx_database.sql` or `qb_database.sql`) in your database manager (HeidiSQL, phpMyAdmin).

---

## 2. Admin Permissions Setup (Optional)

If you want administrators to access `/vadmin`, add the ACE permission in your `server.cfg`:

```lua
add_ace group.admin "fs_portableparkingadmin" allow
```

---

## 3. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_portableparking` into `resources/[fs]/fs_portableparking`.
3. Download and install `ox_lib` into your `resources/` directory.
4. Execute the database migration from `[INSTALL_ME_FIRST]`.
5. Configure `fs_portableparking/config/config.lua` before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure oxmysql
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your FiveM server and check the server console for clean startup prints.
