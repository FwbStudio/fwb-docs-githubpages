---
title: Notify Installation | FWB Studio Docs
description: Install Notify on FiveM — dependencies, server.cfg setup, and admin ACE permissions.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7464228" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Notify — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `None` | No | `fs_notify` is 100% standalone — works out of the box on ESX, QBCore, Qbox, and custom servers. Does not require `fs_bridge`. |

---

## Admin Permissions (Optional)

If you configure `AllowPlayerEdit = false` in `config/config.lua` so that only server administrators can modify global notify styles, grant the configured ACE permission in your `server.cfg`:

```lua
# Add admin permission for fs_notify
add_ace group.admin fs_notify.admin allow

# Or grant to a specific player license:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fs_notify.admin allow
```

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory if you haven't already (`resources/[fs]/`).
2. Download and place the `fs_notify` folder into `resources/[fs]/fs_notify`.
3. Open `fs_notify/config/config.lua` and adjust your command name or player editing permissions if desired.
4. Add the resource to your `server.cfg`:

```lua
ensure fs_notify
```

5. Restart your FiveM server.
6. Run `/fs_notify` in-game to open the customization panel and configure your notify styles live.
