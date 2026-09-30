---
title: Bodybag Installation | FWB Studio Docs
description: Bodybag v2.0 installation for FiveM, ESX, QBCore and Qbox servers.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Installation

## Dependencies

| Resource / feature | Required | Notes |
| --- | --- | --- |
| OneSync | Yes | Networked players, props and routing buckets |
| `oxmysql` and a working SQL connection | Yes | Settings, cooldowns, stays, backups and recovery |
| ESX, QBCore or Qbox | Yes | Start your chosen framework first |
| Inventory and ambulance resources | Your server setup | Start them before Bodybag |
| `fs_mlo_lastworld` | For the supplied Last World locations and custom burned-body model | Install the assets before using those locations/models |
| `ox_target` or `qb-target` | Optional | Nearby E/3D-text interactions are available as fallback |
| `fs_notify` | Optional | Preferred by automatic notification selection, then ox_lib, then framework |
| `ox_lib` | Optional | Notification/progress integration; built-in progress is available |
| `fmsdk` | Only for FiveManage logging | Configure its server API key before use |

## Items and images

Use the definitions supplied in `[install_me_first]/[items]/`:

| Inventory / framework | Definition file |
| --- | --- |
| ox_inventory, including Qbox | `ox_inventory.lua` |
| QB-Core / qb-inventory | `qbcore.lua` |
| qs-inventory | `qs_inventory.lua` |

Install the supplied images in your inventory's image directory. The default items are `fs_deadbodybag`, `fs_shovel`, `fs_lighter`, `fs_ashesemptybag` and `fs_deadopp`. Select your inventory's petrol-can weapon in the admin settings. The empty ashes bag is used by the configured ashes collection flow.

Keep the ox_inventory item's supplied export and `consume = 0`; Bodybag handles configured consumption. Other supported inventories use the registered usable-item integration. Do not add a second consumption handler.

## Install steps

1. Create `resources/[fs]/` and place `fs_bodybag` and `fs_mlo_lastworld` inside it. Keep both resource folder names unchanged.
2. Install item definitions and images for your inventory.
3. Start the database, framework, inventory, ambulance and optional target resources first.
4. Add the category folder to `server.cfg` after your database, framework, inventory, ambulance and target resources:

```cfg
ensure [fs]
```

5. Open **/fs_bodybag**. If access is denied, copy the permission line shown on its access page, follow those instructions, then reopen the menu. Verify the configured tool and reward items.
6. Configure burial/cremation locations, shops, and Hell, Heaven and Return destinations. Visit the destinations and confirm **Locations and required maps verified** before using non-deletion disposal.
7. Review every item's **Permanently delete character** toggle before testing. Test with two clients and check the resulting inventory, character outcome and recovery state.

::: warning Character deletion
The shipped item defaults can enable permanent deletion. Review the item and character-table selections before using a bodybag on a live character.
:::

## Automatic database setup

Server-side Lua creates the resource's six tables automatically. No SQL file or manual import is required. Initial settings are inserted on first start; subsequent starts retain saved settings.

The resource creates `fs_bodybag_state`, `fs_bodybag_backups`, `fs_bodybag_backup_rows`, `fs_bodybag_backup_audit`, `fs_bodybag_deletion_jobs` and `fs_bodybag_completed_jobs`. It does not alter your framework's table definitions or disable foreign-key checks.

## Updating

Back up your SQL database, replace the resource files and restart. Keep the database to retain saved configuration. Do not copy old v1 config files over v2.0. The version checker reports available updates; the admin footer displays the installed version or an update notice.

