---
title: ChopShop Common Errors | FWB Studio Docs
description: Fix common ChopShop issues on FiveM.
---


# ChopShop — Common Errors

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Resource fails to start | Missing `fs_bridge` or `ox_lib` | Install dependencies and start them before `fs_chopshop` |
| SQL / item errors | `[INSTALL_ME_FIRST]` not applied | Run SQL and add items from install folder |
| UI not opening | Old NUI build or wrong inventory | Match Bridge inventory override to your server |
| Nothing happens in-game | Config job/item names wrong | Compare config with your framework job names |

Check F8 client console and server console for `fs_chopshop` errors after restart.
