---
title: Advanced Crafting Tables Common Errors | FWB Studio Docs
description: Advanced Crafting Tables common errors for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Advanced Crafting Tables — Common Errors

| Problem | Check / fix |
| --- | --- |
| No permission to manage crafting | Use the exact permission line shown by the access page for your identifier. Apply it in server.cfg and reopen the menu. |
| Resource-name warning repeats | Rename the folder to `fs_craftingtables`, update server.cfg and restart. |
| Blank admin page / data will not load | Check client F8 and server console errors. Confirm oxmysql, the database and the selected framework are running. Restart after replacing files. |
| Database installation fails | Check the database connection and CREATE/ALTER/INDEX permissions. Back up before making schema changes. |
| Station or recipe is missing | Check enabled state, placement, station access and recipe access. A recipe cannot bypass station restrictions. |
| Crafting level too low | XP is separate for each station. Check the handbook on the station you are using. |
| Missing material or no reward capacity | Check exact inventory item names, required quantities, kept tools and free inventory capacity. |
| Inventory adapter unavailable | Start the selected inventory and select the matching provider. Custom adapters need implementation. |
| Images do not appear | Confirm inventory image paths and item filename casing. |
| Tablet prop is misplaced | Adjust the matching offset in bridge/default/tablets.lua, then restart. |
| Item crafting takes at least 20 seconds | This is the minimum duration for item workbench recipes. |
| Update check unavailable | Check server outbound access and the configured manifest URL. This message does not mean the installed version is current. |

For help, contact [Support Discord](https://discord.gg/sPqkfQHPAa) with your framework, inventory, resource version and relevant console errors.
