---
title: Safezone Creator Client Exports | FWB Studio Docs
description: Client exports for FiveM Safezone Creator (fwb_safezonecreator) — check if the local player is inside a safezone on ESX, QBCore, and Qbox.
---


# Client exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: tip Old resource name
`exports['fs_safezonecreator']` still works for scripts written before the rename, but use `fwb_safezonecreator` in new code.
:::

::: details IsInsideSafezone()
Returns whether the local player is currently inside a safezone.

**Returns**

* `true` if inside a safezone
* `false` if not inside a safezone

**Example**

```lua
local inside = exports['fwb_safezonecreator']:IsInsideSafezone()

if inside then
    print('Player is inside a safezone')
end
```
:::

::: details GetCurrentSafezone()
Returns a copy of the safezone the local player is in. You can change the returned table without affecting the script.

**Returns**

* safezone table when the player is inside a safezone
* `nil` when the player is not inside a safezone

Returned safezone data:

* `id` — zone ID
* `name` — zone name
* `settings` — the zone's rules (for example `playerinvincibility`, `disarmweapons`, `enablevehiclespeedlimit`, `vehiclespeedlimit`, `disablecollision`, `bypassadmin`, `weaponWhitelistRules`, `blip`, `radius`)
* `polyzone` — `points` and `thickness` of the zone shape

**Example**

```lua
local safezone = exports['fwb_safezonecreator']:GetCurrentSafezone()

if safezone then
    print(('Current safezone: %s'):format(safezone.name))
end
```
:::

::: details GetCurrentSafezoneId()
Returns the current safezone ID for the local player.

**Returns**

* safezone ID when the player is inside a safezone
* `nil` when the player is not inside a safezone

**Example**

```lua
local safezoneId = exports['fwb_safezonecreator']:GetCurrentSafezoneId()

if safezoneId then
    print(('Current safezone id: %s'):format(safezoneId))
end
```
:::
