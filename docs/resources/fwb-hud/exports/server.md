---
title: FWB HUD Server Exports & Events | FWB Studio Docs
description: Server-side exports and events for FWB HUD on FiveM — stress, statuses, HUD visibility, presets and admin checks.
---

# Server Exports & Events

Call these from any server script. `src` is the player's server id. Exports do nothing (and return `nil`) when the player is not online.

---

## Stress

Server stress values are exact — the job % is not applied.

::: details GetStress
Returns a player's stress.

### Export
```lua
exports.fwb_hud:GetStress(src)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |

### Returns
* `number` 0–100

### Example
```lua
local stress = exports.fwb_hud:GetStress(source)
print(('Player %s stress: %d'):format(source, stress))
```
:::

::: details SetStress
Sets a player's stress to an exact value.

### Export
```lua
exports.fwb_hud:SetStress(src, value)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `value` | `number` | 0–100 |

### Returns
* `number` — the new stress

### Example
```lua
exports.fwb_hud:SetStress(source, 25)
```
:::

::: details AddStress
Adds stress to a player.

### Export
```lua
exports.fwb_hud:AddStress(src, amount)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `amount` | `number` | Stress to add |

### Returns
* `number` — the new stress

### Example
```lua
-- bank robbery started
AddEventHandler('myrobbery:started', function(src)
    exports.fwb_hud:AddStress(src, 10)
end)
```
:::

::: details RemoveStress
Removes stress from a player. `RelieveStress` does the same.

### Export
```lua
exports.fwb_hud:RemoveStress(src, amount)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `amount` | `number` | Stress to remove |

### Returns
* `number` — the new stress

### Example
```lua
RegisterNetEvent('myspa:relax', function()
    exports.fwb_hud:RemoveStress(source, 25)
end)
```
:::

::: details ResetStress
Sets a player's stress back to 0.

### Export
```lua
exports.fwb_hud:ResetStress(src)
```

### Returns
* `number` — `0`

### Example
```lua
-- after a revive
exports.fwb_hud:ResetStress(source)
```
:::

---

## Statuses

::: details GetStatuses
Status values live on the player's PC, so this asks that player's game once and answers through a callback. The callback gets `nil` if there is no answer within 3 seconds.

### Export
```lua
exports.fwb_hud:GetStatuses(src, cb)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `cb` | `function` | Called with `{ health = 86, hunger = 54, ... }` or `nil` |

### Example
```lua
exports.fwb_hud:GetStatuses(source, function(statuses)
    if statuses then
        print('Health:', statuses.health, 'Thirst:', statuses.thirst)
    end
end)
```
:::

::: details GetStatus
Same as `GetStatuses`, for one status.

### Export
```lua
exports.fwb_hud:GetStatus(src, id, cb)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `id` | `string` | Status id |
| `cb` | `function` | Called with the value (0–100) or `nil` |

### Example
```lua
exports.fwb_hud:GetStatus(source, 'hunger', function(hunger)
    if hunger and hunger < 10 then
        print('Player is starving')
    end
end)
```
:::

::: details SetStatus
Sets a status (0–100) on a player's HUD.

### Export
```lua
exports.fwb_hud:SetStatus(src, id, value)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `id` | `string` | Status id |
| `value` | `number` | 0–100 |

### Example
```lua
AddEventHandler('myhygiene:changed', function(src, level)
    exports.fwb_hud:SetStatus(src, 'hygiene', level)
end)
```
:::

::: details SetStatusHidden
Hides or shows one status icon on a player's HUD.

### Export
```lua
exports.fwb_hud:SetStatusHidden(src, id, hidden)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `id` | `string` | Status id |
| `hidden` | `boolean` | `true` to hide, `false` to show |

### Example
```lua
exports.fwb_hud:SetStatusHidden(source, 'armor', true)
```
:::

---

## HUD

::: details SetHudVisible
Shows or hides a player's HUD.

### Export
```lua
exports.fwb_hud:SetHudVisible(src, visible)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `visible` | `boolean` | `true` to show, `false` to hide |

### Example
```lua
-- hide the HUD during a server cutscene
exports.fwb_hud:SetHudVisible(source, false)
```
:::

::: details OpenSettings
Opens the HUD menu for a player.

### Export
```lua
exports.fwb_hud:OpenSettings(src)
```

### Example
```lua
exports.fwb_hud:OpenSettings(source)
```
:::

::: details ApplyPreset
Applies a theme preset to a player's HUD. Preset ids are in `bridge/defaults/themes.lua`.

### Export
```lua
exports.fwb_hud:ApplyPreset(src, presetId)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` | Player server id |
| `presetId` | `string` | e.g. `'linea_clean'`, `'dash_race'` |

### Example
```lua
-- give racers the motorsport look
exports.fwb_hud:ApplyPreset(source, 'dash_race')
```
:::

::: details ResetHud
Clears a player's own HUD changes so they get the server look again.

### Export
```lua
exports.fwb_hud:ResetHud(src)
```

### Example
```lua
exports.fwb_hud:ResetHud(source)
```
:::

::: details IsAdmin
Returns whether a player has the `fwb_hud.admin` ACE.

### Export
```lua
exports.fwb_hud:IsAdmin(src)
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsAdmin(source) then
    print('Player is a HUD admin')
end
```
:::

---

## Server Events (from client scripts)

| Event | Arguments | What it does |
| :--- | :--- | :--- |
| `fwb_hud:server:addStress` | `amount` | Add stress to the calling player. |
| `fwb_hud:server:relieveStress` | `amount` | Remove stress from the calling player. |

```lua
TriggerServerEvent('fwb_hud:server:addStress', 5)
```

QBCore / Qbox `hud:server:GainStress` and `hud:server:RelieveStress` keep working.
