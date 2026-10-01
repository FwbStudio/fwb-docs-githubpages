---
title: Advanced Crafting Tables Client Exports | FWB Studio Docs
description: Advanced Crafting Tables client exports for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Client Exports

These read the local player's session. No arguments are needed. Call after `fs_craftingtables` has started. These exports only read status; they do not start crafting or give rewards.

::: details IsCrafting()
Returns true while a crafting session is active, otherwise false.

```lua
local busy = exports['fs_craftingtables']:IsCrafting()
```
:::

::: details GetCraftingSession()
Returns a copy of the active context, or nil when idle.

```lua
local craft = exports['fs_craftingtables']:GetCraftingSession()
if craft then
    print(craft.stationId, craft.recipeId, craft.quantity)
end
```

| Field | Meaning |
| --- | --- |
| stationId | Station instance ID |
| recipeId | Recipe ID |
| quantity | Number of crafts requested |
| duration | Duration in seconds |
| output.item | Reward item name |
| output.count | Requested recipe output count; use server data for confirmed totals |

Changing this copy does not change the craft.
:::

Client status ends when finishing or cancellation is requested. Use server hooks for confirmed results.
