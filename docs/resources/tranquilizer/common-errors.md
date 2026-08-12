---
title: Tranquilizer Common Errors | FWB Studio Docs
description: Fix common Tranquilizer issues on FiveM.
---


# Tranquilizer — Common Errors

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Resource fails to start | Missing `fs_bridge` or `ox_lib` | Install dependencies and start them before `fs_tranquilizer` |
| SQL / item errors | `[INSTALL_ME_FIRST]` not applied | Run SQL and add items from install folder |
| UI not opening | Old NUI build or wrong inventory | Match Bridge inventory override to your server |
| Nothing happens in-game | Config job/item names wrong | Compare config with your framework job names |

Check F8 client console and server console for `fs_tranquilizer` errors after restart.
