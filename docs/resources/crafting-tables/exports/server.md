---
title: Advanced Crafting Tables Server Exports | FWB Studio Docs
description: Advanced Crafting Tables server exports for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Server Exports

Pass the player's server source ID as `playerId`. Call after `fs_craftingtables` has started. These exports only read status; they do not start crafting or give rewards.

::: details IsCrafting(playerId)
Returns true while a crafting session is active, otherwise false.

```lua
local busy = exports['fs_craftingtables']:IsCrafting(playerId)
```
:::

::: details GetCraftingSession(playerId)
Returns a copy of the active context, or nil when idle.

```lua
local craft = exports['fs_craftingtables']:GetCraftingSession(playerId)
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
| output.count | Total reward count for the batch |

Changing this copy does not change the craft.
:::

Use server completion hooks to react to confirmed rewards.
