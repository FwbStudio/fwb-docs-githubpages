---
title: Safezone Creator Server Exports | FWB Studio Docs
description: server exports for Safezone Creator.
---


# Server exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details IsPlayerInsideSafezone(playerId)
Checks whether a specific player is currently inside a safezone.

**Arguments**



* `playerId` - server id of the player

**Returns**



* `true` if the player is inside a safezone
* `false` if the player is not inside a safezone

**Example**

```lua
local inside = exports['fs_safezonecreator']:IsPlayerInsideSafezone(source)

if inside then
    print('This player is inside a safezone')
end
```
:::

::: details GetPlayerSafezone(playerId)
Returns the current safezone data for a specific player.

**Arguments**



* `playerId` - server id of the player

**Returns**



* safezone table when the player is inside a safezone
* `nil` when the player is not inside a safezone

**Example**

```lua
local safezone = exports['fs_safezonecreator']:GetPlayerSafezone(source)

if safezone then
    print(('Player is inside safezone: %s'):format(safezone.name))
end
```
:::
