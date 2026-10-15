---
title: Safezone Creator Installation | FWB Studio Docs
description: Install Safezone Creator on FiveM — dependencies, ACE permission, and server.cfg setup for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | Stores zones and menu settings |
| `ESX`, `QBCore`, or `Qbox` | Yes | Detected automatically (`es_extended`, `qb-core`, `qbx_core`) |
| `ox_lib` **or** `PolyZone` | Yes | Zone engine that detects players inside zones. Auto uses the first one running |
| Inventory | Optional | Used for the weapon whitelist and for taking weapons away. Supported: `ox_inventory`, `qb-inventory`, `qs-inventory`, `ps-inventory`, `lj-inventory`, `codem-inventory`, `core_inventory`, `origen_inventory`, `tgiann-inventory`, `ak47_inventory`. Falls back to the framework's item list |
| Notify | Optional | `fs_notify`, `ox_lib`, or your framework's notify. Auto picks the first one running |

---

## 1. Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Place `fwb_safezonecreator` in `resources/[fs]/fwb_safezonecreator`. Keep the folder name exactly `fwb_safezonecreator`.
3. Add the ACE permission (step 2 below) to your `server.cfg`.
4. Ensure the resources at the end of your `server.cfg`, after your framework, `oxmysql` and `ox_lib` / `PolyZone`:

```lua
ensure oxmysql
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

5. Restart your server. The database tables are created automatically on first start:
   - `fwb_safezonecreator` — your zones
   - `fwb_safezonecreator_settings` — menu settings, webhooks, and the last update check (checked at most once every 24 hours, see [How does the update check work?](./common-errors#❓-q-how-does-the-update-check-work))
6. Run `/fwb_safezonecreator` in-game to open the menu and create your first zone.

---

## 2. Menu Access (ACE)

Only players with the ACE permission can open the menu. Add this to `server.cfg`:

```lua
# Give your admin group access:
add_ace group.admin fwb_safezonecreator allow

# Or give one player access by license:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fwb_safezonecreator allow
```

If a player without access runs the command, the menu shows their license and the exact `add_ace` line to copy.

::: tip Changing the command or ACE
The command and ACE name are set in the menu under **General → Menu access**. Changes apply after a resource restart. If you change the ACE name, update the `add_ace` line to match.
:::

---

## Updating from fs_safezonecreator

The resource is now called `fwb_safezonecreator`. To update an existing server:

1. Stop the server.
2. To keep your menu settings and webhooks, copy `server/current_config.json` and `server/log_webhooks.json` from the old `fs_safezonecreator` folder into the new folder's `server/` folder. Then delete the old folder.
3. In `server.cfg`, change `ensure fs_safezonecreator` to `ensure fwb_safezonecreator` (not needed if you ensure the whole `[fs]` folder).
4. Update your ACE line to `fwb_safezonecreator` (see above).
5. Start the server. On the first start it:
   - copies every zone from the old `fs_safezonecreator` table into `fwb_safezonecreator`, keeping the same IDs (the old table is kept as a backup),
   - imports the copied JSON settings into the `fwb_safezonecreator_settings` table. After that the JSON files are no longer used and can be deleted.

Other scripts keep working: `exports['fs_safezonecreator']` still resolves, and the public events fire under both the `fwb_safezonecreator:` and the old `fs_safezonecreator:` prefix.
