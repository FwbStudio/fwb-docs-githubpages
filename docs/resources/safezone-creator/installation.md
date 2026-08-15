---
title: Safezone Creator Installation | FWB Studio Docs
description: Install Safezone Creator on FiveM — dependencies, permissions, and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | MySQL async library for database queries |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |
| `fs_bridge` | **No** | `fs_safezonecreator` features its own built-in modular bridge |

---

## 1. Admin Permissions Setup

Grant access to the `/safezonemenu` command to your server administrators in `server.cfg`:

```lua
# Grant permission to your admin group:
add_ace group.admin "safezone.admin" allow

# Or grant directly to a specific player license:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx "safezone.admin" allow
```

---

## 2. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_safezonecreator` into `resources/[fs]/fs_safezonecreator`.
3. Add the ACE permission to your `server.cfg`.
4. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure oxmysql

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

5. Restart your FiveM server. Database tables will automatically initialize on first startup.
6. Run `/safezonemenu` in-game to start creating and managing safezones live.
