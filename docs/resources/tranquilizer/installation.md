---
title: Tranquilizer Installation | FWB Studio Docs
description: Install Tranquilizer on FiveM — items setup, ACE permissions, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7444827" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Tranquilizer — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | MySQL async library for database queries |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |
| `fs_bridge` | **No** | `fs_tranquilizer` includes its own internal modular bridge |

---

## 1. Items & Inventory Setup

Open `fs_tranquilizer/[INSTALL_ME_FIRST]/items/` and use the file corresponding to **your** inventory system to add the tranquilizer dart item and image.

---

## 2. Admin Permissions Setup

Grant access to `/fs_tranquilizer` in your `server.cfg`:

```lua
# Admin group permission
add_ace group.admin "fs_tranquilizer.admin" allow

# Or specific player license
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "fs_tranquilizer.admin" allow
```

---

## 3. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_tranquilizer` into `resources/[fs]/fs_tranquilizer`.
3. Complete **Items & Inventory Setup** from `[INSTALL_ME_FIRST]`.
4. Add the ACE permission to your `server.cfg`.
5. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure oxmysql

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

6. Restart your FiveM server. Database tables will automatically initialize on first startup.
7. Run `/fs_tranquilizer` in-game to configure sedation durations and hospital beds.
