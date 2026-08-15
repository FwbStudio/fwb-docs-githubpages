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
| `oxmysql` | Yes | Database persistence for created zones |
| `ESX, QBCore, or Qbox` | Yes | Framework support |
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

## 2. Server Configuration (`server.cfg`)

1. Place `fs_safezonecreator` into your `resources/[fs]/` directory.
2. Add the resource to your `server.cfg`:

```lua
ensure oxmysql
ensure fs_safezonecreator
```

3. Restart your FiveM server. Database tables will auto-initialize on first start.
4. Run `/safezonemenu` in-game to start creating and managing safezones.
