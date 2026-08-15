---
title: Trap Phone v2 Installation | FWB Studio Docs
description: Install Trap Phone v2 on FiveM — dependencies, database migration, ACE permissions, and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426493" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Trap Phone v2 — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | MySQL async library for database operations |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |
| `fs_bridge` | **No** | `fs_trapphone_v2` includes its own internal modular bridge and does not come with or require `fs_bridge` |

---

## 1. Items & Inventory Setup

`fs_trapphone_v2` provides pre-configured item definitions and high-resolution icons for all major inventories:

| Inventory | Status | Setup Folder |
| :--- | :--- | :--- |
| `ox_inventory` | Officially Supported | `install_me_first/ox_inventory/` |
| `qb-inventory` | Officially Supported | `install_me_first/qb-core/` |
| `qs-inventory` (Quasar) | Officially Supported | `install_me_first/qs_inventory/` |
| `ps-inventory` | Officially Supported | `install_me_first/qb-core/` |
| `lj-inventory` | Officially Supported | `install_me_first/qb-core/` |
| `ak47_inventory` | Officially Supported | `install_me_first/` |
| `codem-inventory` (m-Inventory) | Officially Supported | `install_me_first/` |
| `pappu-inventorynp` (NoPixel) | Officially Supported | `install_me_first/` |
| `esx_default` | Officially Supported | `install_me_first/esx_default/` |
| `Custom Inventory` | Supported | `bridge/inventory/custom/` |

Open `fs_trapphone_v2/install_me_first/` and add the trap phone item definitions and images corresponding to **your** inventory system.

---

## 2. Admin Permissions Setup

Grant access to the live in-game NUI config editor (`/fs_trapphone`) in your `server.cfg`:

```lua
# Grant permission to your admin group:
add_ace group.admin "fs_trapphone_v2.admin" allow

# Or grant directly to a specific player license:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "fs_trapphone_v2.admin" allow
```

---

## 3. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_trapphone_v2` into `resources/[fs]/fs_trapphone_v2`.
3. Complete **Items & Inventory Setup** from `install_me_first`.
4. Add the ACE permission to your `server.cfg`.
5. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure oxmysql

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

6. Restart your FiveM server. Database tables will automatically initialize on first startup.
7. Run `/fs_trapphone` in-game with admin permissions to configure apps, items, and drop tables in the live NUI editor.
