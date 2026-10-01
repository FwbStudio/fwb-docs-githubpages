---
title: Advanced Crafting Tables Overview | FWB Studio Docs
description: Advanced Crafting Tables overview for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Advanced Crafting Tables

Three station types share one administration menu. Players use **Open Table** to craft and **Open Tablet** to view their station handbook.

| Package | Details |
| --- | --- |
| Resource folder | `fs_craftingtables` |
| Version | v1.0 |
| Framework adapters | ESX, QBCore, Qbox |
| Storage | MySQL through oxmysql |
| Admin command | `/fs_craftingtables` by default |

## Station types

| Type | Purpose | Work animation |
| --- | --- | --- |
| Lathe | Weapons | Machine crafting sequence |
| Milling machine | Attachments | Machine crafting sequence |
| Workbench | Items | Clipboard stage, followed by mechanic work |

## Features

- Place and manage stations through the admin tablet.
- Configure recipe materials, kept tools, output quantity, duration, level requirements and XP.
- Set weapon starting durability and configure repairs for eligible recipes.
- Keep stations public, or restrict access by players, jobs and grades, or gangs.
- Restrict individual recipes within the station's access rules.
- Track each player's XP and level separately for each station.
- Show recipe unlocks, images, materials and tutorials in the station tablet, with search and pagination.
- Enable sequential or batch multi-crafting in Settings.
- Choose inventory, notification and target adapters. Built-in targeting and progress are available.
- Extend crafting through client/server hooks and read-only session exports.
- Store administration changes and progression in the database.

## Read next

[Installation](./installation) · [Configuration](./configuration) · [Commands](./commands) · [Integrations](./integrations) · [Common Errors](./common-errors)
