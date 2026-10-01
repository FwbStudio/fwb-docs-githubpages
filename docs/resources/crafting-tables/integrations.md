---
title: Advanced Crafting Tables Integrations | FWB Studio Docs
description: Advanced Crafting Tables integrations for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Advanced Crafting Tables — Integrations

Provider adapters are included inside this resource's `bridge/` folder. Choose them from the admin Bridge page.

| Category | Included adapters |
| --- | --- |
| Framework | ESX, QBCore, Qbox |
| Inventory | ox_inventory, qb-inventory, qs-inventory, ps-inventory, lj-inventory, ak47_inventory, custom |
| Target | builtin, ox_target, qb-target |
| Notifications | framework, fs_notify, ox_lib |
| Progress | builtin, ox_lib, qb-progressbar, custom |
| Logging | discord, fivemanage, custom |
| Database | oxmysql |

Adapters depend on the exports and metadata supported by your installed inventory version. Test material consumption, rewards and repairs on your server before enabling them for players. A custom inventory must implement the adapter functions; selecting Custom alone does not make an unsupported inventory work.

## Developer entry points

- [Client exports](./exports/client) and [server exports](./exports/server) read active crafting sessions.
- [Client hooks](./functions/client) add local behavior.
- [Server hooks](./functions/server) add checks or react to confirmed results.

The resource handles rewards and XP. Do not grant the recipe output again from a completion hook.
