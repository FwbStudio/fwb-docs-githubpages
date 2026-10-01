---
title: Advanced Crafting Tables Server Functions | FWB Studio Docs
description: Advanced Crafting Tables server functions for FiveM ESX, QBCore and Qbox servers. Setup and use fs_craftingtables.
---

# Server Hooks

Edit `bridge/events/server.lua`. The functions already exist with commented examples. Add your code inside their bodies. No event registration is needed.

playerId is the player server ID. Put real permission checks here.

`context` contains `stationId`, `recipeId`, `quantity`, `duration` (seconds) and `output` (item and count). It is a copy; editing it does not change crafting. Keep hooks quick and do not use Wait.

::: details CanCraftItem
Return false and a message to stop the craft. Return nothing to allow normal checks. An error in this hook blocks the request.

```lua
function FSBridge.Events.CanCraftItem(playerId, context)
    -- return false, 'You cannot craft this item'
end
```
:::

::: details BeforeCraftingStart
Runs just before the session starts.

```lua
function FSBridge.Events.BeforeCraftingStart(playerId, context)
    -- print('Starting recipe: ' .. context.recipeId)
end
```
:::

::: details CraftingInProcess
Runs at the start and about once per second. elapsed is seconds and progress is 0–100. Reaching 100 does not confirm a reward.

```lua
function FSBridge.Events.CraftingInProcess(playerId, context, elapsed, progress)
    -- print('Crafting: ' .. math.floor(progress) .. '%')
end
```
:::

::: details CraftingEnd
Runs when an accepted session finishes, fails or is cancelled. success is true only for successful completion. reason contains the result message. Do not give items or XP again.

```lua
function FSBridge.Events.CraftingEnd(playerId, context, success, reason)
    -- if success then
    --     print('Craft finished')
    -- else
    --     print(reason or 'Craft cancelled')
    -- end
end
```
:::

Sequential crafting calls hooks for each craft. A batch uses one session. Rejected starts do not call CraftingEnd.
