---
title: Safezone Creator Server Exports | FWB Studio Docs
description: Server exports for FiveM Safezone Creator (fwb_safezonecreator) — check which players are inside a safezone and read bridge data on ESX, QBCore, and Qbox.
---


# Server exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: tip Old resource name
`exports['fs_safezonecreator']` still works for scripts written before the rename, but use `fwb_safezonecreator` in new code.
:::

## Safezone

::: details IsPlayerInsideSafezone(playerId)
Checks whether a specific player is currently inside a safezone.

**Arguments**

* `playerId` - server ID of the player

**Returns**

* `true` if the player is inside a safezone
* `false` if the player is not inside a safezone

**Example**

```lua
local inside = exports['fwb_safezonecreator']:IsPlayerInsideSafezone(source)

if inside then
    print('This player is inside a safezone')
end
```
:::

::: details GetPlayerSafezone(playerId)
Returns a copy of the safezone a specific player is in.

**Arguments**

* `playerId` - server ID of the player

**Returns**

* safezone table (`id`, `name`, `settings`, `polyzone`) when the player is inside a safezone
* `nil` when the player is not inside a safezone

**Example**

```lua
local safezone = exports['fwb_safezonecreator']:GetPlayerSafezone(source)

if safezone then
    print(('Player is inside safezone: %s'):format(safezone.name))
end
```
:::

## Bridge

These read data through the script's built-in framework and inventory bridge, so they work the same on ESX, QBCore, and Qbox.

::: details GetFrameworkName()
Returns the framework the bridge is using.

**Returns**

* `'esx'`, `'qbcore'` or `'qbox'`

**Example**

```lua
print(exports['fwb_safezonecreator']:GetFrameworkName())
```
:::

::: details GetPlayerData(playerId)
Returns basic data for one player.

**Arguments**

* `playerId` - server ID of the player

**Returns**

* table with `source`, `name`, `identifier`, `group`, `job`, `jobLabel`, `jobGrade`

**Example**

```lua
local data = exports['fwb_safezonecreator']:GetPlayerData(source)
print(data.name, data.job)
```
:::

::: details GetPlayerJob(playerId)
Returns a player's job.

**Arguments**

* `playerId` - server ID of the player

**Returns**

* table with `name`, `label`, `grade`, `gradeLabel`, `duty` (`unemployed` when the player has no job)

**Example**

```lua
local job = exports['fwb_safezonecreator']:GetPlayerJob(source)
if job.name == 'police' then
    print('Police officer, grade', job.grade)
end
```
:::

::: details GetActivePlayerSources()
Returns the server IDs of all loaded players.

**Returns**

* array of server IDs

**Example**

```lua
for _, playerId in ipairs(exports['fwb_safezonecreator']:GetActivePlayerSources()) do
    print(playerId)
end
```
:::

::: details GetAllActivePlayers()
Returns `GetPlayerData` for every loaded player.

**Returns**

* array of player data tables (see `GetPlayerData`)
:::

::: details GetWeaponItems()
Returns the weapons known to the active inventory (or the framework's item list).

**Returns**

* array of `{ name, label, hash }`

**Example**

```lua
for _, weapon in ipairs(exports['fwb_safezonecreator']:GetWeaponItems()) do
    print(weapon.name, weapon.label)
end
```
:::
