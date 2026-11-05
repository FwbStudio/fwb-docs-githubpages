---
title: FWB Vehicle Keys Server Exports | FWB Studio Docs
description: Server-side exports for FWB Vehicle Keys on FiveM — give, remove and check keys, owners, plates, GeneratePlate, locks, windows, hazards, trackers, kill engine and feature switches.
---

# Server Exports

Call these from any server script.

| Name in this page | What to pass |
| :--- | :--- |
| `src` | A player's server id |
| `vehicle` | A vehicle entity or its network id |
| `plateOrVehicle` | A plate (`'AB 123'`), a vehicle entity or a network id |

There are two layers:

- **Simple:** the names other key scripts use. Pass a player and a plate or a car, and nothing else.
- **Detailed:** options, more information, trackers, and turning features off.

Exports called by other scripts skip the player-action hooks, but `giveKey` and `removeKey` always run. See [Hooks & Events](../editable-files/server).

---

## Keys — Simple

::: details GiveKeys
Gives a session key: it lasts until the player leaves or the server restarts.

Keys are by **plate**, so you can call it **before** the car exists: the key works as soon as a car with that plate spawns. Case and GTA's padding spaces don't matter (`"abc 123"` = `"ABC 123 "`). A car whose plate an online player holds a key to is never locked by the NPC car roll.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeys(src, plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a garage spawns a car for a player
local veh = CreateVehicle(model, x, y, z, h, true, true)
SetVehicleNumberPlateText(veh, plate)
exports.fwb_vehiclekeys:GiveKeys(src, veh)
```
:::

::: details RemoveKeys
Takes a player's key to a car away.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeys(src, plateOrVehicle)
```

### Returns
* `boolean`
:::

::: details HasKeys
Any key counts: their own car, a spare, a temporary key, a job key or a key item.

### Export
```lua
exports.fwb_vehiclekeys:HasKeys(src, plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
if not exports.fwb_vehiclekeys:HasKeys(source, plate) then
    return print('No key to this car')
end
```
:::

::: details GiveKeysByVehicle / GiveKeysByPlate
The same as `GiveKeys`, but you say what you pass. A plate made only of digits (`"12345"`) could be mistaken for a network id; these never guess.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeysByVehicle(src, vehicle)
exports.fwb_vehiclekeys:GiveKeysByPlate(src, plate)
```

### Returns
* `boolean`
:::

::: details RemoveKeysByVehicle / RemoveKeysByPlate
The same as `RemoveKeys`, without guessing.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeysByVehicle(src, vehicle)
exports.fwb_vehiclekeys:RemoveKeysByPlate(src, plate)
```

### Returns
* `boolean`
:::

::: details HasKeysByVehicle / HasKeysByPlate
The same as `HasKeys`, without guessing.

### Export
```lua
exports.fwb_vehiclekeys:HasKeysByVehicle(src, vehicle)
exports.fwb_vehiclekeys:HasKeysByPlate(src, plate)
```

### Returns
* `boolean`
:::

---

## Keys — Detailed

::: details GiveKey
Gives a key of a chosen kind.

### Export
```lua
exports.fwb_vehiclekeys:GiveKey(src, plateOrVehicle, options)
```

| Option | Type | Description |
| :--- | :--- | :--- |
| `kind` | `string` | `'session'` (default, until they leave), `'temp'` (ends after `seconds`, survives a relog), `'spare'` or `'owner'` (a key item in items mode) |
| `seconds` | `number` | For `temp`. Default: **Settings → General → Temporary keys last** |
| `label` | `string` | The car's name, shown on the key |

`options` can also be just the kind as text: `GiveKey(src, plate, 'spare')`.

### Returns
* `true`, or `false, reason` (`'plate'`, `'player'`, `'inventory'`, `'hook'`)

### Example
```lua
-- a rental for 2 hours, with the car's name on the key
exports.fwb_vehiclekeys:GiveKey(src, 'RENT 42', { kind = 'temp', seconds = 7200, label = 'Blista' })
```
:::

::: details GiveTempKey
A key that ends by itself (rentals, test drives).

### Export
```lua
exports.fwb_vehiclekeys:GiveTempKey(src, plateOrVehicle, seconds)
```

### Returns
* `boolean`

### Example
```lua
-- a 10-minute test drive
exports.fwb_vehiclekeys:GiveTempKey(src, veh, 600)
```
:::

::: details RemoveKey / HasKey
The same as `RemoveKeys` and `HasKeys`.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKey(src, plateOrVehicle)
exports.fwb_vehiclekeys:HasKey(src, plateOrVehicle)
```
:::

::: details RemoveKeyById
Removes a saved key from a player who may be offline.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeyById(identifier, plate)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `identifier` | `string` | The framework's character id |
| `plate` | `string` | The plate |

### Returns
* `boolean`
:::

::: details GetKey
Which key a player has to a car.

### Export
```lua
exports.fwb_vehiclekeys:GetKey(src, plateOrVehicle)
```

### Returns
* `{ has = boolean, kind = string|nil, expires = number|nil }`

`kind`: `owner`, `spare`, `temp`, `session`, `job` or `item`. `expires` is an `os.time()` value.

### Example
```lua
local key = exports.fwb_vehiclekeys:GetKey(src, veh)
if key.kind == 'temp' then print('Ends at', os.date('%H:%M', key.expires)) end
```
:::

::: details GetKeyKind
Only the kind, or `nil` when the player has no key.

### Export
```lua
exports.fwb_vehiclekeys:GetKeyKind(src, plateOrVehicle)
```

### Returns
* `'owner'` | `'spare'` | `'temp'` | `'session'` | `'job'` | `'item'` | `nil`
:::

::: details GetKeyExpiry
When a temporary key ends.

### Export
```lua
exports.fwb_vehiclekeys:GetKeyExpiry(src, plateOrVehicle)
```

### Returns
* `number` (`os.time()`) or `nil`
:::

::: details GetKeys
Every key a player holds (what their key ring shows).

### Export
```lua
exports.fwb_vehiclekeys:GetKeys(src)
```

### Returns
* `{ { plate, kind, label, expires, owned, hasKey }, ... }`
:::

::: details GetKeyHolders
Who holds a saved key (spare or temporary) to a car.

### Export
```lua
exports.fwb_vehiclekeys:GetKeyHolders(plateOrVehicle)
```

### Returns
* `{ { identifier, name, kind, expires }, ... }`
:::

::: details GetSpareCount
How many spares were made since the locks were last changed.

### Export
```lua
exports.fwb_vehiclekeys:GetSpareCount(plateOrVehicle)
```

### Returns
* `number`
:::

::: details ChangeLocks
Every older key of the car stops working: saved keys are deleted, and key items keep the old lock and stop fitting. With `ownerSrc`, the owner gets a new key.

### Export
```lua
exports.fwb_vehiclekeys:ChangeLocks(plateOrVehicle, ownerSrc)
```

### Returns
* `number` — the new lock version
:::

::: details GetLockVersion
How many times the locks of a car were changed.

### Export
```lua
exports.fwb_vehiclekeys:GetLockVersion(plateOrVehicle)
```

### Returns
* `number`
:::

---

## Owners & Plates

::: details GetOwner
The owner's character id from the framework's owned-vehicles table.

### Export
```lua
exports.fwb_vehiclekeys:GetOwner(plateOrVehicle)
```

### Returns
* `string` or `nil`
:::

::: details GetOwnerSource
The owner's server id, when they are online.

### Export
```lua
exports.fwb_vehiclekeys:GetOwnerSource(plateOrVehicle)
```

### Returns
* `number` or `nil`
:::

::: details IsVehicleOwned
Whether somebody owns this car (it is in the owned-vehicles table).

### Export
```lua
exports.fwb_vehiclekeys:IsVehicleOwned(plateOrVehicle)
```

### Returns
* `boolean`
:::

::: details IsOwner
Whether this player owns this car.

### Export
```lua
exports.fwb_vehiclekeys:IsOwner(src, plateOrVehicle)
```

### Returns
* `boolean`
:::

::: details OwnerChanged
Call it after **your** script changed a car's owner in the database, so the cached owner is forgotten.

### Export
```lua
exports.fwb_vehiclekeys:OwnerChanged(plate)
```
:::

::: details PlateExists / IsPlateTaken
Whether a car in the owned-vehicles table already has this plate.

### Export
```lua
exports.fwb_vehiclekeys:PlateExists(plate)
exports.fwb_vehiclekeys:IsPlateTaken(plate)
```

### Returns
* `boolean`
:::

::: details GeneratePlate
A new plate nobody owns yet.

### Export
```lua
exports.fwb_vehiclekeys:GeneratePlate(format)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `format` | `string` (optional) | `A` = a random letter, `0` = a random digit, anything else is kept. 2 to 8 characters. Default: **Settings → General → New plates** (`00AAA000`). |

### Returns
* `string`, or `nil` when the format has no free plate left after 50 tries

### Example
```lua
local plate = exports.fwb_vehiclekeys:GeneratePlate()            -- "42KDF815"
local rental = exports.fwb_vehiclekeys:GeneratePlate('RENT 000') -- "RENT 381"
```
:::

::: details GetVehicleByPlate / IsVehicleOut
The car with this plate, if it is out in the world.

### Export
```lua
exports.fwb_vehiclekeys:GetVehicleByPlate(plate)   -- entity or nil
exports.fwb_vehiclekeys:IsVehicleOut(plate)        -- boolean
```
:::

::: details TransferCar
The car becomes another player's: the owned-vehicles row, new locks and their key. No fee and no distance check.

### Export
```lua
exports.fwb_vehiclekeys:TransferCar(plateOrVehicle, targetSrc)
```

### Returns
* `true`, or `false, reason` (`'player'` not online, `'framework'`, `'db'` no such car)
:::

::: details ChangePlate
A new plate for good. The database row, keys, locks, trackers, history and the car in the world all follow. No fee and no cooldown.

### Export
```lua
exports.fwb_vehiclekeys:ChangePlate(oldPlate, newPlate)
```

### Returns
* `true`, or `false, reason` (`'bad'` plate not allowed, `'taken'`, `'framework'`, `'db'`)

### Example
```lua
local ok, why = exports.fwb_vehiclekeys:ChangePlate('OLD 1', 'NEW 1')
if not ok then print('Plate not changed: ' .. why) end
```

Every plate change also fires `fwb_vehiclekeys:plateChanged` with `(oldPlate, newPlate)`.
:::

---

## The Car

Windows: `0` front left, `1` front right, `2` rear left, `3` rear right. Doors: `0`–`3` the same, `4` bonnet, `5` boot.

::: details Lock / Unlock / SetLocked / IsLocked
Locks or unlocks a car for everyone.

### Export
```lua
exports.fwb_vehiclekeys:Lock(vehicle)
exports.fwb_vehiclekeys:Unlock(vehicle)
exports.fwb_vehiclekeys:SetLocked(vehicle, locked)
exports.fwb_vehiclekeys:IsLocked(vehicle)
```

### Returns
* `boolean`
:::

::: details SetNoKeyNeeded / SetHotwired / IsHotwired
Anyone in the driver seat can start the car without a key, for example during test drives. `SetHotwired` does the same thing.

### Export
```lua
exports.fwb_vehiclekeys:SetNoKeyNeeded(vehicle, true)
exports.fwb_vehiclekeys:IsHotwired(vehicle)
```

### Returns
* `boolean`
:::

::: details SoundAlarm / StopAlarm / IsAlarmOn
The car alarm.

### Export
```lua
exports.fwb_vehiclekeys:SoundAlarm(vehicle, seconds) -- default 20
exports.fwb_vehiclekeys:StopAlarm(vehicle)
exports.fwb_vehiclekeys:IsAlarmOn(vehicle)
```
:::

::: details SetHazards / IsHazardOn
Hazard lights, seen by every player near the car.

### Export
```lua
exports.fwb_vehiclekeys:SetHazards(vehicle, on)
exports.fwb_vehiclekeys:IsHazardOn(vehicle)
```
:::

::: details SetInteriorLight / IsInteriorLightOn
The interior light.

### Export
```lua
exports.fwb_vehiclekeys:SetInteriorLight(vehicle, on)
exports.fwb_vehiclekeys:IsInteriorLightOn(vehicle)
```
:::

::: details SetWindow / SetWindows / IsWindowDown / GetWindows
Windows down (`true`) or up (`false`).

### Export
```lua
exports.fwb_vehiclekeys:SetWindow(vehicle, window, down)
exports.fwb_vehiclekeys:SetWindows(vehicle, down)          -- every window
exports.fwb_vehiclekeys:IsWindowDown(vehicle, window)
exports.fwb_vehiclekeys:GetWindows(vehicle)                -- { frontLeft, frontRight, rearLeft, rearRight }
```
:::

::: details ToggleDoor
Opens a shut door, or shuts an open one.

### Export
```lua
exports.fwb_vehiclekeys:ToggleDoor(vehicle, door)
```
:::

::: details ToggleEngine
Starts the engine if it is off, or stops it if it is running.

### Export
```lua
exports.fwb_vehiclekeys:ToggleEngine(vehicle)
```
:::

::: details GetVehicleState
Everything at once.

### Export
```lua
exports.fwb_vehiclekeys:GetVehicleState(vehicle)
```

### Returns
```lua
{
    plate = 'AB 123', locked = true, hotwired = false, alarm = false,
    hazards = false, interiorLight = false,
    windows = { frontLeft = false, frontRight = false, rearLeft = false, rearRight = false },
    owned = true, trackers = 1,
}
```

Indicators, headlights, doors and the engine are only known to the games near the car, so they are [client exports](./client#the-car-checks).
:::

---

## Trackers

`which` = `'own'` (the owner's own tracker), `'planted'` (someone else's) or `nil` (any).

::: details HasTracker
### Export
```lua
exports.fwb_vehiclekeys:HasTracker(plateOrVehicle, which)
```

### Returns
* `boolean` (dead trackers count too)
:::

::: details IsTrackerActive
A tracker that still works: battery left. An owner's own tracker always works.

### Export
```lua
exports.fwb_vehiclekeys:IsTrackerActive(plateOrVehicle, which)
```

### Returns
* `boolean`
:::

::: details GetTrackerCount / GetTrackers
### Export
```lua
exports.fwb_vehiclekeys:GetTrackerCount(plateOrVehicle, which)   -- number
exports.fwb_vehiclekeys:GetTrackers(plateOrVehicle)              -- { { id, own, planter, identifier, battery, created } }
```
:::

::: details PlantTracker
Puts a tracker on without the item or the minigame.

### Export
```lua
exports.fwb_vehiclekeys:PlantTracker(src, plateOrVehicle, options)
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `src` | `number` or `nil` | Who planted it (`nil` = "script") |
| `options.own` | `boolean` | The owner's own tracker (default: `true` when `src` owns the car) |
| `options.label` | `string` | Name shown in the planter's key ring |

### Returns
* `number` — the tracker id

### Example
```lua
-- a heist: the boss follows the getaway car
exports.fwb_vehiclekeys:PlantTracker(bossSrc, veh, { label = 'Getaway car' })
```
:::

::: details RemoveTracker / RemoveTrackers
### Export
```lua
exports.fwb_vehiclekeys:RemoveTracker(id)                    -- boolean
exports.fwb_vehiclekeys:RemoveTrackers(plateOrVehicle, which) -- how many were removed
```

### Example
```lua
-- police impound: take every tracker off
exports.fwb_vehiclekeys:RemoveTrackers(plate)
```
:::

::: details KillEngine
Stops the engine wherever the car is. It needs a key or a new hotwire to start again.

### Export
```lua
exports.fwb_vehiclekeys:KillEngine(plateOrVehicle)
```

### Returns
* `true`, or `false, 'far'` (the car is not out in the world)
:::

::: details TrackCar
Shows a car on a player's map, with the live card.

### Export
```lua
exports.fwb_vehiclekeys:TrackCar(src, plateOrVehicle, seconds) -- default: the fob's Track time
```
:::

::: details SendTheftAlert
The owner's "your car is being stolen" card.

### Export
```lua
exports.fwb_vehiclekeys:SendTheftAlert(vehicle, kind) -- lockpick | hotwire | alarm | carjack
```
:::

---

## Turning Features Off

On top of the admin's settings, a script can turn features off. Nothing is saved:

- **For everyone**, until the resource restarts: `SetFeature(name, false)`.
- **For one player**, until they leave: `BlockFeature(src, name, true)`.

A feature the admin turned off in `/fwb_vehiclekeys` stays off, whatever a script says.

::: details SetFeature / BlockFeature / IsFeatureOn / GetFeatures
### Export
```lua
exports.fwb_vehiclekeys:SetFeature(name, on)          -- everyone
exports.fwb_vehiclekeys:BlockFeature(src, name, on)   -- one player (true = blocked)
exports.fwb_vehiclekeys:IsFeatureOn(name, src)        -- src optional
exports.fwb_vehiclekeys:GetFeatures(src)              -- { name = { text, on, perPlayer, blocked } }
```

### Example
```lua
-- a jail script: no stealing cars while in prison
exports.fwb_vehiclekeys:BlockFeature(src, 'lockpick', true)
exports.fwb_vehiclekeys:BlockFeature(src, 'hotwire', true)

-- an event: every car can be driven without a key
exports.fwb_vehiclekeys:SetFeature('keyNeeded', false)
```
:::

| Name | What it turns off | One player? |
| :--- | :--- | :--- |
| `keyNeeded` | A key is needed to drive. **Off = anyone drives any car.** | No |
| `lockKey` | The lock key | Yes |
| `keyring` | Opening the key ring | Yes |
| `fob` | Every remote button | Yes |
| `engine` | The remote engine button | Yes |
| `summon` | Summon | Yes |
| `track` | The fob's Track button | Yes |
| `windows` | Windows from the key ring | Yes |
| `doors` | Doors, bonnet and boot from the key ring | Yes |
| `seats` | Changing seats from the key ring | Yes |
| `lights` | Hazards and interior light from the key ring | Yes |
| `lockpick` | Lockpicking (both items) | Yes |
| `hotwire` | Hotwiring | Yes |
| `search` | Searching a car or a body for the key | Yes |
| `carjack` | Carjacking | Yes |
| `npcLocks` | NPC cars being locked (off = all open) | No |
| `trackers` | Planting and following trackers | Yes |
| `detector` | Scanning cars for trackers | Yes |
| `pliers` | Cutting trackers off | Yes |
| `killSwitch` | The owner's kill switch | Yes |
| `theftAlerts` | Owners told about thefts | No |
| `policeAlerts` | Police alerts | No |
| `locksmith` | Every locksmith service and the shop | Yes |
| `spares` | Giving spare keys | Yes |
| `handover` | Handing a car over | Yes |
| `plateChange` | Changing a plate at the locksmith | Yes |

---

## Hooks

::: details registerHook / removeHooks
Stops an action with your own rule. Full list: [Hooks & Events](../editable-files/server).

### Export
```lua
local id = exports.fwb_vehiclekeys:registerHook(name, fn, options)
exports.fwb_vehiclekeys:removeHooks(id)   -- one hook; no id = every hook of your resource
```

| Option | Type | Description |
| :--- | :--- | :--- |
| `plateFilter` | `table` | Only these plates (`'LS*'` = starts with LS) |
| `modelFilter` | `table` | Only these models (spawn names or hashes) |
| `print` | `boolean` | Print each time it runs |

### Example
```lua
exports.fwb_vehiclekeys:registerHook('lockpick', function(data)
    return false, 'The city is on lockdown'
end, { plateFilter = { 'GOV*' } })
```
:::
