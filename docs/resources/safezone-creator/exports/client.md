---
title: Safezone Creator Client Exports | FWB Studio Docs
description: client exports for Safezone Creator.
---


# Client exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details IsInsideSafezone()
Returns whether the local player is currently inside a safezone.

**Returns**



* `true` if inside a safezone
* `false` if not inside a safezone

**Example**

```lua
local inside = exports['fs_safezonecreator']:IsInsideSafezone()

if inside then
    print('Player is inside a safezone')
end
```
:::

::: details GetCurrentSafezone()
Returns the current safezone data for the local player.

**Returns**



* safezone table when the player is inside a safezone
* `nil` when the player is not inside a safezone

Returned safezone data can include:

* `id`
* `name`
* `settings`
* `polyzone`

**Example**

```lua
local safezone = exports['fs_safezonecreator']:GetCurrentSafezone()

if safezone then
    print(('Current safezone: %s'):format(safezone.name))
end
```
:::

::: details GetCurrentSafezoneId()
Returns the current safezone id for the local player.

**Returns**



* safezone id when the player is inside a safezone
* `nil` when the player is not inside a safezone

**Example**

```lua
local safezoneId = exports['fs_safezonecreator']:GetCurrentSafezoneId()

if safezoneId then
    print(('Current safezone id: %s'):format(safezoneId))
end
```
:::
