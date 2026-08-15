---
title: Trap Phone v2 Server Exports | FWB Studio Docs
description: Server exports for FiveM Trap Phone v2 script (fs_trapphone_v2).
---

# Server Exports

Each export below is expandable. Open one to view description, arguments, return value, and usage examples.

---

## General & Config

::: details GetConfig

Returns the full runtime player-facing configuration table, or a specific section if a key is provided.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `section` | `string` | No | If provided, returns only that section (e.g. `'apps'`, `'general'`). |

**Returns** `table`

**Example**

```lua
-- Get the full config
local config = exports['fs_trapphone_v2']:GetConfig()

-- Get only the apps section
local apps = exports['fs_trapphone_v2']:GetConfig('apps')
```

:::

::: details GetBridgeSelection

Returns the currently active bridge provider for a given category.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `category` | `string` | Yes | One of: `'framework'`, `'inventory'`, `'target'`, `'dispatch'`, `'lockpick'`. |

**Returns** `string` — the selected bridge key, e.g. `'ox_inventory'`, `'auto'`.

**Example**

```lua
local inv = exports['fs_trapphone_v2']:GetBridgeSelection('inventory')
-- e.g. "ox_inventory"

local fw = exports['fs_trapphone_v2']:GetBridgeSelection('framework')
-- e.g. "esx"
```

:::

---

## Player Progression & XP

::: details GetPlayerXP

Returns the player's total criminal XP and computed level.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ total = number, level = number }`

**Example**

```lua
local xp = exports['fs_trapphone_v2']:GetPlayerXP(source)
print(xp.total, xp.level)
```

:::

::: details GetPlayerAppXP

Returns the XP and level specifically earned inside one app.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `appName` | `string` | Yes | App name: `'Burner'`, `'Signal'`, `'Corner'`, `'Delivery'`, `'traphouse'`, `'Taxi'`. |

**Returns** `table` — `{ total = number, level = number }`

**Example**

```lua
local data = exports['fs_trapphone_v2']:GetPlayerAppXP(source, 'Corner')
print(data.total, data.level)
```

:::

::: details IsAppEnabled

Checks whether a specific app is enabled in the server configuration.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `appName` | `string` | Yes | App name to check (e.g. `'Signal'`, `'Corner'`, `'Delivery'`). |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:IsAppEnabled('Delivery') then
    -- delivery app is on
end
```

:::

::: details HasAppUnlocked

Checks whether a player has unlocked a specific app based on XP level or permission rules.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `appName` | `string` | Yes | App name to check. |

**Returns** `boolean`

**Example**

```lua
local unlocked = exports['fs_trapphone_v2']:HasAppUnlocked(source, 'Delivery')
```

:::

::: details CanUseApp

Checks both enabled status and unlock state for a player and app in one call.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `appName` | `string` | Yes | App name to check. |

**Returns** `table` — `{ ok = boolean, reason = string, app = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanUseApp(source, 'Signal')
if result.ok then
    -- player can use Signal
end
```

:::

---

## Phone Item & Sessions

::: details HasTrapPhoneItem

Returns `true` if the player currently holds the trap phone item in their inventory.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
local hasPhone = exports['fs_trapphone_v2']:HasTrapPhoneItem(source)
```

:::

::: details GetTrapPhoneItemName

Returns the configured inventory item name for the trap phone.

**Arguments**

None.

**Returns** `string` — e.g. `'fs_trapphone'`

**Example**

```lua
local itemName = exports['fs_trapphone_v2']:GetTrapPhoneItemName()
```

:::

::: details HasActivePhoneSession

Returns `true` if the player is currently in an active mission or deal session.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:HasActivePhoneSession(source) then
    -- player is busy
end
```

:::

::: details GetActivePhoneSession

Returns the full active session state table for the player, or `nil` if no session is active.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table | nil`

**Example**

```lua
local session = exports['fs_trapphone_v2']:GetActivePhoneSession(source)
if session then
    print(session.app, session.appName)
end
```

:::

::: details CancelActivePhoneSession

Forcefully cancels any ongoing criminal mission or deal session for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Reason string for logging. Defaults to `'external_cancel'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:CancelActivePhoneSession(source, 'arrested_by_police')
```

:::

---

## Burner Phone & Contacts

::: details GetBurnerNumber

Returns the player's assigned burner phone number.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `string | nil`

**Example**

```lua
local number = exports['fs_trapphone_v2']:GetBurnerNumber(source)
```

:::

::: details GetBurnerContacts

Returns the list of all contacts currently unlocked by the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — array of contact tables.

**Example**

```lua
local contacts = exports['fs_trapphone_v2']:GetBurnerContacts(source)
for _, c in ipairs(contacts) do print(c.id, c.label) end
```

:::

::: details IsBurnerContactUnlocked

Checks whether a player has a specific contact unlocked.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `numberOrId` | `string` | Yes | Contact ID or phone number to check. |

**Returns** `boolean`

**Example**

```lua
local isUnlocked = exports['fs_trapphone_v2']:IsBurnerContactUnlocked(source, 'dealer_01')
```

:::

::: details UnlockBurnerContact

Unlocks a specific NPC contact for one player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `numberOrId` | `string` | Yes | Contact ID or phone number to unlock. |
| `reason` | `string` | No | Reason for logging. Defaults to `'external_unlock'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:UnlockBurnerContact(source, 'dealer_01', 'quest_reward')
```

:::

::: details ForceUnlockBurnerContact

Unlocks a contact for a player bypassing XP or item cost checks.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `numberOrId` | `string` | Yes | Contact ID or phone number. |
| `reason` | `string` | No | Defaults to `'external_force_unlock'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:ForceUnlockBurnerContact(source, 'vip_dealer', 'admin_grant')
```

:::

::: details UnlockBurnerContactForAll

Unlocks a contact globally for every online player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `numberOrId` | `string` | Yes | Contact ID or phone number. |
| `reason` | `string` | No | Defaults to `'external_unlock_all'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:UnlockBurnerContactForAll('event_dealer', 'server_event')
```

:::

::: details LockBurnerContact

Re-locks a contact for a specific player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `numberOrId` | `string` | Yes | Contact ID or phone number. |
| `reason` | `string` | No | Defaults to `'external_lock'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:LockBurnerContact(source, 'dealer_01', 'banned_from_contact')
```

:::

::: details GetBurnerDealState

Returns the current in-progress Burner deal/meeting state for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, ... deal state fields ... }`

**Example**

```lua
local deal = exports['fs_trapphone_v2']:GetBurnerDealState(source)
```

:::

::: details CancelBurnerDeal

Forcefully cancels an in-progress Burner deal/meeting for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_cancel'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:CancelBurnerDeal(source, 'police_interference')
```

:::

---

## Signal Hotline

::: details CanStartSignal

Checks whether a player is eligible to activate the Signal hotline.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanStartSignal(source)
```

:::

::: details IsSignalActive

Returns `true` if the player's Signal hotline is currently active.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:IsSignalActive(source) then
    -- signal hotline is live
end
```

:::

::: details GetSignalState

Returns the full Signal session state for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, ... session fields ... }`

**Example**

```lua
local state = exports['fs_trapphone_v2']:GetSignalState(source)
```

:::

::: details StartSignal

Activates the Signal buyer hotline for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_start'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StartSignal(source)
```

:::

::: details StopSignal

Stops the Signal buyer hotline for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_stop'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StopSignal(source, 'player_logged_out')
```

:::

::: details ForceSignalCooldown

Forces a cooldown period on the Signal app for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `minutes` | `number` | Yes | Cooldown duration in minutes. |
| `reason` | `string` | No | Defaults to `'external_cooldown'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:ForceSignalCooldown(source, 30, 'admin_penalty')
```

:::

---

## Corner Selling

::: details CanStartCorner

Checks whether a player is eligible to begin corner selling.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanStartCorner(source)
```

:::

::: details IsCornerActive

Returns `true` if the player is currently actively corner selling.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:IsCornerActive(source) then
    -- player is selling on a corner
end
```

:::

::: details StartCorner

Activates on-foot street corner selling for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `locationId` | `string` | No | Specific corner location ID to force. Optional. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StartCorner(source)
```

:::

::: details StopCorner

Stops corner selling for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_stop'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StopCorner(source, 'police_nearby')
```

:::

::: details ForceCornerCooldown

Forces a cooldown period on the Corner app for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `minutes` | `number` | Yes | Cooldown duration in minutes. |
| `reason` | `string` | No | Defaults to `'external_cooldown'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:ForceCornerCooldown(source, 15, 'caught_by_police')
```

:::

---

## Delivery Missions

::: details CanStartDelivery

Checks whether a player is eligible to begin a wholesale delivery mission.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanStartDelivery(source)
```

:::

::: details IsDeliveryActive

Returns `true` if the player currently has an active delivery mission.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:IsDeliveryActive(source) then
    -- player is on a delivery
end
```

:::

::: details GetDeliveryState

Returns the full delivery mission state for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ ok = boolean, ... delivery state fields ... }`

**Example**

```lua
local state = exports['fs_trapphone_v2']:GetDeliveryState(source)
```

:::

::: details StartDelivery

Starts a wholesale delivery mission for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `risk` | `string` | No | Risk level: `'low'`, `'medium'`, `'high'`. Defaults to `'low'`. |
| `reason` | `string` | No | Defaults to `'external_start'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StartDelivery(source, 'high')
```

:::

::: details StopDelivery

Cancels the player's active delivery mission.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_stop'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StopDelivery(source, 'mission_failed')
```

:::

::: details ForceDeliveryCooldown

Forces a cooldown period on the Delivery app for a player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `minutes` | `number` | Yes | Cooldown duration in minutes. |
| `reason` | `string` | No | Defaults to `'external_cooldown'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:ForceDeliveryCooldown(source, 60, 'busted_mid_run')
```

:::

---

## Trap House Operations

::: details CanRequestTrapHouseJob

Checks whether a player can request access to a specific trap house location.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `trapHouseId` | `string` | No | Specific location ID to validate. Optional. |

**Returns** `table` — `{ ok = boolean, reason = string, app = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanRequestTrapHouseJob(source, 'grove_trap')
```

:::

::: details CanStartTrapHouse

Checks whether a player can start a trap house raid.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `houseId` | `string` | No | Specific house ID to check. Optional. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
local result = exports['fs_trapphone_v2']:CanStartTrapHouse(source, 'grove_trap')
```

:::

::: details IsTrapHouseActive

Returns `true` if the player is currently inside an active safehouse raid.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `boolean`

**Example**

```lua
if exports['fs_trapphone_v2']:IsTrapHouseActive(source) then
    -- player is raiding
end
```

:::

::: details GetTrapHouseState

Returns active trap house locations, raid sessions, and cooldown timers.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |

**Returns** `table` — `{ app = string, enabled = boolean, locations = table, runtime = table }`

**Example**

```lua
local state = exports['fs_trapphone_v2']:GetTrapHouseState(source)
```

:::

::: details StartTrapHouse

Activates a trap house raid session for the player.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `houseId` | `string` | No | Specific trap house location ID. Optional. |
| `reason` | `string` | No | Defaults to `'external_start'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StartTrapHouse(source, 'grove_trap')
```

:::

::: details StopTrapHouse

Stops the player's active trap house raid.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID of the player. |
| `reason` | `string` | No | Defaults to `'external_stop'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:StopTrapHouse(source, 'raid_interrupted')
```

:::

::: details ForceTrapHouseCooldown

Sets a forced cooldown on a trap house location by ID.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Server source ID (used for context). |
| `minutes` | `number` | Yes | Cooldown duration in minutes. |
| `reason` | `string` | No | Defaults to `'external_cooldown'`. |

**Returns** `table` — `{ ok = boolean, reason = string }`

**Example**

```lua
exports['fs_trapphone_v2']:ForceTrapHouseCooldown(source, 60, 'admin_lockdown')
```

:::
