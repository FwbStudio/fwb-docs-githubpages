---
title: FWB Vehicle Keys Hooks & Events | FWB Studio Docs
description: FWB Vehicle Keys hooks for FiveM — stop lockpicking, hotwiring, carjacking, keys and locksmith actions with your own rules (registerHook, like ox_inventory) and react with server events.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB Vehicle Keys — Hooks & Events

Hooks let you add your own rules to the script, or react when something happens, without editing the escrowed code. They work like ox_inventory's `registerHook`.

- **Before hooks** run before something happens. Return `false` to stop it.
- **After events** run once it has happened. Use them for logs, XP, rewards, MDTs or phone apps.

All hooks run on the server.

| Where | For |
| :--- | :--- |
| `bridge/hooks/server.lua` | Server owners. This file is not escrowed and has an empty function for every hook. Fill in the ones you need. |
| `exports.fwb_vehiclekeys:registerHook(...)` and `AddEventHandler('fwb_vehiclekeys:...')` | Other resources |

> [!NOTE]
> **Developer note:** these open functions are for your own rules and integrations. FWB Studio does not support third-party code written inside them.

---

## Stopping Something

### In `bridge/hooks/server.lua`

```lua
function before.lockpick(data)
    if data.plate:sub(1, 4) == 'LSPD' then
        return false, 'This car is too well protected'   -- the player sees this text
    end
    return true
end
```

### From another resource

```lua
local id = exports.fwb_vehiclekeys:registerHook('lockpick', function(data)
    if exports.my_heists:IsLockdown() then return false, 'The city is on lockdown' end
end, {
    plateFilter = { 'LS*', 'GOV*' },   -- only these plates (* = anything)
    modelFilter = { 'police', 'fbi' }, -- only these models (spawn names or hashes)
    print = true,                      -- print each time it runs (for testing)
})

exports.fwb_vehiclekeys:removeHooks(id)   -- that hook
exports.fwb_vehiclekeys:removeHooks()     -- every hook of your resource
```

### How they run

| Rule | |
| :--- | :--- |
| Order | The open file first, then registered hooks in the order they were added. |
| Stopping | The first hook that returns `false` stops it. Its second return value is shown to the player; without one they see "You cannot do that right now". |
| Going on | Returning nothing or `true` lets it go on. |
| Errors | A hook that throws an error lets the action go on, and the error is printed. |
| Money | Hooks run **before** any fee is taken, so stopping an action never costs the player money. |
| Clean-up | When your resource stops, its hooks are removed. |
| Speed | Keep hooks quick: they run inside the action. The console warns when one takes longer than 100 ms. |
| Exports | Exports from other scripts skip the player-action hooks. `giveKey` and `removeKey` always run. |

---

## Before Hooks

Every `data` has `source` (the player's server id). It has `plate`, `entity` (the car) and `netId` when there is a car.

| Hook | When | `data` |
| :--- | :--- | :--- |
| `giveKey` | A key is given, in any way: locksmith, spare, found, carjacked, scripts, admin | `source, plate, kind, seconds, label, by` |
| `removeKey` | A key is taken away | `source, plate, identifier` |
| `canDrive` | Someone with a key sits in the driver seat. `false` = they can't start it. | `source, plate, entity, netId, kind` |
| `toggleLock` | The lock key, or the fob's lock / unlock | `source, plate, entity, netId, locked` (new state), `from` = `'key'` / `'fob'` |
| `remote` | Any other fob or key ring button | `source, plate, entity, netId, action, part` |
| `lockpick` | A lockpick is used on a locked car | `source, plate, entity, netId, item, advanced` |
| `hotwire` | Hotwiring from the driver seat | `source, plate, entity, netId` |
| `searchCar` | Searching a car for its key | `source, plate, entity, netId` |
| `searchBody` | Searching a dead NPC driver | `source, plate, entity, netId, body` |
| `carjack` | An NPC driver was threatened long enough | `source, plate, entity, netId, driver` |
| `giveSpare` | The owner gives a spare to a nearby player | `source, target, plate` |
| `takeBack` | The owner takes spares back | `source, plate, identifier` (`nil` = all) |
| `handover` | The owner hands the car to a nearby player | `source, target, plate, fee` |
| `killSwitch` | The owner's kill switch | `source, plate` |
| `locksmith` | A locksmith service | `source, service` (`newKey` / `spare` / `changeLocks`), `plate, price` |
| `locksmithShop` | Buying a tracker, detector or pliers | `source, what, item, price` |
| `changePlate` | A new number plate at the locksmith | `source, oldPlate, newPlate, price` |
| `plantTracker` | Planting a tracker (`own` = the owner's own) | `source, plate, entity, netId, own` |
| `scanCar` | Scanning a car with the detector | `source, plate, entity, netId` |
| `cutTracker` | Cutting a found tracker off | `source, plate, entity, netId, trackerId` |

`remote` actions: `trunk`, `engine`, `lights`, `panic`, `summon`, `track`, `window`, `windows`, `door`, `doors`, `hazard`, `interior`.

### Examples

```lua
-- only the police job may drive cars with LSPD plates
function before.canDrive(data)
    if data.plate:sub(1, 4) ~= 'LSPD' then return true end
    local job = exports.my_jobs:GetJob(data.source)
    return job == 'police', 'Police cars are for officers'
end

-- no carjacking inside the city's green zone
function before.carjack(data)
    if exports.my_zones:IsSafe(GetEntityCoords(data.entity)) then
        return false, 'Not in a safe zone'
    end
end
```

---

## After Events

```lua
-- in bridge/hooks/server.lua
function after.carjacked(data)
    print(('%s carjacked %s: the driver chose %s'):format(GetPlayerName(data.source), data.plate, data.outcome))
end
```

```lua
-- any other resource (server side)
AddEventHandler('fwb_vehiclekeys:lockpicked', function(data)
    if data.result == 'open' then exports.my_xp:Add(data.source, 'thief', 5) end
end)
```

| Event | `data` |
| :--- | :--- |
| `keyGiven` | `source, plate, kind, seconds, label, by` |
| `keyRemoved` | `source, plate, identifier` |
| `locksChanged` | `plate, version, ownerSource` (every older key stopped working) |
| `lockChanged` | `source` (`nil` when a script did it), `plate, entity, netId, locked` |
| `lockpicked` | `source, plate, entity, netId, result` (`open` / `broke` / `failed`), `advanced` |
| `hotwired` | `source, plate, entity, netId, result` (`hot` / `failed`) |
| `carSearched` | `source, plate, entity, netId, found` |
| `bodySearched` | `source, plate, entity, netId, found` |
| `carjacked` | `source, plate, entity, netId, outcome` (`keys` / `flee` / `drive` / `fight`) |
| `spareGiven` | `source, target, plate` |
| `carHandedOver` | `source, target, plate, fee` |
| `trackerPlanted` | `source, plate, id, own` |
| `trackerRemoved` | `source` (`nil`: admin or script), `plate, id, own` |
| `engineKilled` | `source, plate` |
| `plateChanged` | Fires as `fwb_vehiclekeys:plateChanged` with `(oldPlate, newPlate)`. In the open file: `after.plateChanged({ source, oldPlate, newPlate })`. |

The event name is always `fwb_vehiclekeys:` plus the name in the table. These are server events only, so a player's game can't fake them.
