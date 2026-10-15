---
title: FWB HUD Client Exports & Events | FWB Studio Docs
description: Client-side exports and events for FWB HUD on FiveM — HUD visibility, menus, statuses, stress, seatbelt and cruise control.
---

# Client Exports & Events

Call these from any client script.

---

## HUD

::: details SetHudVisible
Shows or hides the HUD for the local player.

### Export
```lua
exports.fwb_hud:SetHudVisible(visible)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `visible` | `boolean` | `true` to show, `false` to hide |

### Example
```lua
-- hide the HUD while a cutscene plays
exports.fwb_hud:SetHudVisible(false)
Wait(10000)
exports.fwb_hud:SetHudVisible(true)
```
:::

::: details IsHudVisible
Returns whether the HUD is on screen (`false` while hidden, before the player has loaded, or in cinematic mode).

### Export
```lua
exports.fwb_hud:IsHudVisible()
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsHudVisible() then
    print('HUD is showing')
end
```
:::

::: details OpenSettings
Opens the player's own HUD menu (same as `/hudsettings`).

### Export
```lua
exports.fwb_hud:OpenSettings()
```

### Example
```lua
-- open the HUD menu from your own phone or radial menu
RegisterNetEvent('myphone:openHud', function()
    exports.fwb_hud:OpenSettings()
end)
```
:::

::: details OpenAdmin
Opens the admin panel (same as `/fwb_hud`). The server checks the `fwb_hud.admin` ACE; players without it see the permission screen.

### Export
```lua
exports.fwb_hud:OpenAdmin()
```

### Example
```lua
-- an entry in your admin menu
exports.fwb_hud:OpenAdmin()
```
:::

::: details CloseMenu
Closes the HUD menu or admin panel if one is open.

### Export
```lua
exports.fwb_hud:CloseMenu()
```

### Example
```lua
AddEventHandler('myscript:forceCloseUi', function()
    exports.fwb_hud:CloseMenu()
end)
```
:::

::: details IsOpen
Returns whether the HUD menu or admin panel is open.

### Export
```lua
exports.fwb_hud:IsOpen()
```

### Returns
* `boolean`

### Example
```lua
if not exports.fwb_hud:IsOpen() then
    -- safe to open your own UI
end
```
:::

::: details GetSettings
Returns the local player's HUD settings table.

### Export
```lua
exports.fwb_hud:GetSettings()
```

### Returns
* `table`

### Example
```lua
local settings = exports.fwb_hud:GetSettings()
print(json.encode(settings))
```
:::

---

## Statuses

::: details SetStatus
Sets a status value on the HUD. Works for built-in statuses with `source = 'event'` and for your own custom ones.

### Export
```lua
exports.fwb_hud:SetStatus(id, value)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Status id (`hygiene`, `stress`, or a custom one) |
| `value` | `number` | 0–100 |

### Example
```lua
-- your hygiene script updated the value
exports.fwb_hud:SetStatus('hygiene', 75)
```
:::

::: details GetStatus
Returns one status value.

### Export
```lua
exports.fwb_hud:GetStatus(id)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Status id |

### Returns
* `number` 0–100, or `nil` if unknown

### Example
```lua
local hunger = exports.fwb_hud:GetStatus('hunger')
if hunger and hunger < 20 then
    print('You are hungry')
end
```
:::

::: details GetStatuses
Returns every status value.

### Export
```lua
exports.fwb_hud:GetStatuses()
```

### Returns
* `table` — `{ health = 86, armor = 0, hunger = 54, ... }`

### Example
```lua
local statuses = exports.fwb_hud:GetStatuses()
print(statuses.health, statuses.thirst)
```
:::

::: details SetStatusHidden
Hides or shows one status icon from code. It keeps its place and comes back when shown again. Not saved: a restart shows everything.

### Export
```lua
exports.fwb_hud:SetStatusHidden(id, hidden)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | Status id |
| `hidden` | `boolean` | `true` to hide, `false` to show |

### Example
```lua
-- hide armor while the player is not on duty
exports.fwb_hud:SetStatusHidden('armor', true)
```
:::

::: details IsStatusHidden
Returns whether a script hid this status with `SetStatusHidden`.

### Export
```lua
exports.fwb_hud:IsStatusHidden(id)
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsStatusHidden('armor') then
    exports.fwb_hud:SetStatusHidden('armor', false)
end
```
:::

::: details IsStatusShown
Returns whether a status is on the player's HUD: enabled by the admin, not hidden by the player and not hidden by a script.

### Export
```lua
exports.fwb_hud:IsStatusShown(id)
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsStatusShown('stress') then
    print('Stress is on the HUD')
end
```
:::

---

## Stress

::: details AddStress
Adds stress. Scaled by the player's job % (**/fwb_hud → Features → Stress → Per job**). Does nothing while stress is turned off.

### Export
```lua
exports.fwb_hud:AddStress(amount)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `amount` | `number` | Stress to add |

### Example
```lua
-- a robbery started
exports.fwb_hud:AddStress(10)
```
:::

::: details RemoveStress
Removes stress, scaled by the job %. `RelieveStress` does the same.

### Export
```lua
exports.fwb_hud:RemoveStress(amount)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `amount` | `number` | Stress to remove |

### Example
```lua
-- player smoked a joint
exports.fwb_hud:RemoveStress(15)
```
:::

::: details SetStress
Sets stress to an exact value (no job %).

### Export
```lua
exports.fwb_hud:SetStress(value)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `value` | `number` | 0–100 |

### Example
```lua
exports.fwb_hud:SetStress(50)
```
:::

::: details ResetStress
Sets stress back to 0.

### Export
```lua
exports.fwb_hud:ResetStress()
```

### Example
```lua
-- after a spa visit
exports.fwb_hud:ResetStress()
```
:::

::: details GetStress
Returns the player's current stress.

### Export
```lua
exports.fwb_hud:GetStress()
```

### Returns
* `number` 0–100

### Example
```lua
if exports.fwb_hud:GetStress() >= 80 then
    print('Very stressed')
end
```
:::

::: details IsStressEnabled
Returns whether stress is turned on in **/fwb_hud → Features**.

### Export
```lua
exports.fwb_hud:IsStressEnabled()
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsStressEnabled() then
    exports.fwb_hud:AddStress(5)
end
```
:::

---

## Vehicle

::: details SetSeatbelt
Sets the seatbelt state shown on the HUD.

### Export
```lua
exports.fwb_hud:SetSeatbelt(on)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | `true` buckled, `false` unbuckled |

### Example
```lua
-- your own seatbelt script buckled up
exports.fwb_hud:SetSeatbelt(true)
```
:::

::: details IsSeatbeltOn
Returns whether the seatbelt is on.

### Export
```lua
exports.fwb_hud:IsSeatbeltOn()
```

### Returns
* `boolean`

### Example
```lua
if not exports.fwb_hud:IsSeatbeltOn() then
    print('Buckle up!')
end
```
:::

::: details HasHarness
Returns whether the player is strapped into a racing harness (**/fwb_hud → Features → Seatbelt → Racing harness**). Always `false` while the harness is off. Drop-in replacement for `exports['qb-smallresources']:HasHarness()` and `exports.qbx_seatbelt:HasHarness()`.

### Export
```lua
exports.fwb_hud:HasHarness()
```

### Returns
* `boolean`

### Example
```lua
-- radial menu: no seat switching while strapped in
if exports.fwb_hud:HasHarness() then return end
```
:::

::: details Progress
Shows FWB HUD's progress bar (the same one used for fitting nitro and the harness) and waits until it ends. The bar follows the player's HUD theme and shows a countdown. The player can cancel with `X`.

![FWB HUD progress bar](/images/fwb-hud/progress-bar.png)

### Export
```lua
exports.fwb_hud:Progress(options)
```

### Options
| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `duration` | number | — | Time in ms |
| `label` | string | `''` | Text on the bar |
| `icon` | string | hourglass | HUD icon name or `fa:<font awesome name>` |
| `canCancel` | boolean | `true` | `X` cancels |
| `disable` | table | `{}` | `move`, `car`, `combat` = `true` blocks those controls while it runs |
| `anim` | table | — | `{ dict, clip, flag }` played while it runs |
| `scenario` | string | — | Ped scenario played instead of `anim` |

### Returns
* `boolean`: `true` when it finished, `false` when cancelled, the player died, or another bar was already running

### Example
```lua
local ok = exports.fwb_hud:Progress({
    duration = 4000,
    label = 'Repairing engine',
    icon = 'fa:wrench',
    disable = { move = true, combat = true },
    anim = { dict = 'mini@repair', clip = 'fixing_a_ped', flag = 49 },
})
if ok then print('repaired') end
```
:::

::: details IsProgressActive
Returns whether an FWB HUD progress bar is running.

### Export
```lua
exports.fwb_hud:IsProgressActive()
```

### Returns
* `boolean`
:::

::: details SetCruise
Sets the cruise control state shown on the HUD.

### Export
```lua
exports.fwb_hud:SetCruise(on)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `on` | `boolean` | `true` on, `false` off |

### Example
```lua
exports.fwb_hud:SetCruise(false)
```
:::

::: details IsCruiseOn
Returns whether cruise control is on.

### Export
```lua
exports.fwb_hud:IsCruiseOn()
```

### Returns
* `boolean`

### Example
```lua
if exports.fwb_hud:IsCruiseOn() then
    print('Cruise control active')
end
```
:::

---

## Client Events

| Event | Arguments | What it does |
| :--- | :--- | :--- |
| `fwb_hud:status:<id>` | `value` | Feed a status 0–100. |
| `fwb_hud:client:addStress` | `amount` | Add stress (can be sent from the server). |
| `fwb_hud:client:relieveStress` | `amount` | Remove stress (can be sent from the server). |

```lua
TriggerEvent('fwb_hud:status:hygiene', 60)
```

Framework HUD events (`hud:client:UpdateStress`, `hud:client:UpdateNeeds`, `seatbelt:client:ToggleSeatbelt`, `hud:client:ShowAccounts`…) keep working — see [Integrations](../integrations).
