---
title: Advanced Crafting Tables Installation | FWB Studio Docs
description: Advanced Crafting Tables installation for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Advanced Crafting Tables — Installation

## Dependencies

| Dependency | Required | Notes |
| --- | --- | --- |
| `oxmysql` | Yes | Database connection; start before this resource. |
| ESX, QBCore or Qbox | Yes, one | Start your framework before this resource. |
| Supported inventory | Yes, one | See [Integrations](./integrations). Recipe items must exist in that inventory. |
| `ox_target` / `qb-target` | Optional | Built-in interaction is available. |
| `ox_lib` | Optional | Needed only when selecting its notification or progress integration. |
| `progressbar` | Optional | Needed only for the `qb-progressbar` progress provider. |
| `fs_notify` | Optional | Needed only when selecting this notification provider. |

## Install

1. Put the resource in your server resources directory. Keep the folder name **fs_craftingtables**.
2. Set up your database connection and start your framework and inventory.
3. Add the resource after those dependencies in `server.cfg`:

```cfg
ensure oxmysql
# Start your framework, inventory and chosen optional integrations above this line.
ensure fs_craftingtables
```

4. Start the resource. It creates the required database tables automatically; no manual SQL import is required. The database account needs permission to create and update tables.
5. Open `/fs_craftingtables`. If the access page appears, copy the permission line it gives for your identifier into `server.cfg`, apply it and reopen the menu.
6. Check the selected providers on the Bridge page. Create a station, place it, add recipes and save.
7. Test **Open Table**, complete one craft and check **Open Tablet** for that station's XP.

## Before creating recipes

Use your inventory's exact item names for materials and rewards. Install their images in the inventory's usual image location. Make sure the station's GTA models are available on your server's game build.

The UI is already built. Node.js is only needed if you change and rebuild the web source.

## Updating

Back up your database and customized bridge files. Replace the resource files, restore your compatible customizations, and restart. Existing database data is migrated by the installer. Do not delete the database tables to update the script.
