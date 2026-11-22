---
title: Vehicle Keys Server Exports | FWB Studio Docs
description: Server-side exports for Vehicle Keys on FiveM (ESX / QBCore / Qbox) — give, remove and check keys, test drives, owners, plates, GeneratePlate, locks, car state, trackers, kill engine, feature switches and hooks.
---

# Server Exports

Call these from any server script.

| Name in this page | What to pass |
| :--- | :--- |
| `src` | A player's server id |
| `vehicle` | A vehicle entity or its network id |
| `plateOrVehicle` | A number is a vehicle (entity or network id). Text is a plate (`'AB 123'`, also `'12345'`). |

Keys are stored by **plate**. Case and GTA's padding spaces don't matter (`'abc 123'` is the same as `'ABC 123 '`). The owner of a car (from the framework's owned-vehicles table) always has access to it.

Exports called by other scripts skip the player-action hooks, but the `giveKey` and `removeKey` hooks run for every key. See [Hooks & Events](../editable-files/server).

---

## Keys

::: details GiveKeys
Gives the player a key to the car. Use it when a garage takes a car out, and for rentals and job cars.

- **The owner, key items on:** they get their key item, only when they don't already carry a working one to this car. Taking a car out twice never stacks keys.
- **The owner, key items off:** nothing is needed, the owner always has access.
- **Anyone else:** a key in memory until they leave or the server restarts. Never a key item, never saved.

Because keys are by plate, you can call it **before** the car exists: the key works as soon as a car with that plate spawns. When your script has just set the plate with `SetVehicleNumberPlateText`, pass that plate instead of the vehicle, because the server may still read the old plate for a moment.

Garages that spawn the car on the server and send its plate in a `VehicleProperties` / `setVehicleProperties` state bag (ESX, ox_lib, Qbox) can pass the vehicle right after spawning: the key goes to the plate the car is getting, not the random one it has for a moment.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeys(src, plateOrVehicle)
```

### Returns
* `true` when the key was given, `false` when not (empty plate or longer than 12 characters, player not loaded, or a `giveKey` hook stopped it)

### Example
```lua
-- a garage takes a car out for the player
local veh = CreateVehicle(model, x, y, z, h, true, true)
SetVehicleNumberPlateText(veh, plate)
-- pass the plate we just set, not the vehicle
exports.fwb_vehiclekeys:GiveKeys(source, plate)
```
:::

::: details RemoveKeys
Takes the key back. Use it when a garage stores the car.

- A key the player holds in memory (from `GiveKeys`, a temporary or saved key) goes.
- **Key items on:** the owner's key item to this car goes back too, so it is in the inventory only while the car is out. A spare or stolen key item stays (use [ChangeLocks](#keys) to make old key items stop working).
- The owner keeps access to their own car either way.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeys(src, plateOrVehicle)
```

### Returns
* `true` when a key was removed, `false` when the player had no such key or a `removeKey` hook stopped it

### Example
```lua
-- a garage stores the car: the key the garage gave goes with it
if exports.fwb_vehiclekeys:HasKeys(source, veh) then
    exports.fwb_vehiclekeys:RemoveKeys(source, veh)
    DeleteEntity(veh)
end
```
:::

::: details HasKeys
Whether the player can use the car. Any key counts: their own car, a spare, a temporary or session key, a job key or a key item that still fits the lock.

### Export
```lua
exports.fwb_vehiclekeys:HasKeys(src, plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a garage only lets a player store a car they have a key to
RegisterNetEvent('mygarage:store', function(netId)
    local src = source
    if not exports.fwb_vehiclekeys:HasKeys(src, netId) then
        return TriggerClientEvent('ox_lib:notify', src, { description = 'You have no key to this car' })
    end
    -- store the car here
end)
```
:::

::: details GiveKey
Gives a key of a chosen kind. `owner`, `spare` and `temp` keys become a key item when key items are on; `session` keys never do.

With saved keys (no key items), `owner` only confirms the owner's access when the player owns the car; for anyone else it gives a `spare` instead. A `temp` key with `seconds = 0` works until the locks are changed.

### Export
```lua
exports.fwb_vehiclekeys:GiveKey(src, plateOrVehicle, options)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `options` | `table` or `string` | Optional | `{ kind, seconds, label }`, or just the kind as text: `GiveKey(src, plate, 'spare')` |
| `options.kind` | `string` | Optional | `'session'` (default, until they leave), `'temp'` (ends after `seconds`, survives a relog), `'spare'` or `'owner'` |
| `options.seconds` | `number` | Optional | For `temp`. Default: **Settings → Keys → temporary minutes** (when that is 0, the key works until the locks are changed) |
| `options.label` | `string` | Optional | The car's name, shown on the key (up to 64 characters) |

### Returns
* `true`, or `false, reason` (`'plate'`, `'player'`, `'hook'`, `'inventory'` when the key item could not be given)

### Example
```lua
-- a rental: a key for two hours with the car's name on it
local ok, why = exports.fwb_vehiclekeys:GiveKey(source, 'RENT 42', { kind = 'temp', seconds = 7200, label = 'Blista' })
if not ok then print('No rental key: ' .. why) end
```
:::

::: details RemoveKeyById
Removes a saved key by the player's character id, so it also works when the player is offline. When the player is online, it works like [RemoveKeys](#keys).

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeyById(identifier, plate)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `identifier` | `string` | Required | The framework's character id |
| `plate` | `string` | Required | The plate |

### Returns
* `true`, or `false` when a `removeKey` hook stopped it (or the online player had no such key)

### Example
```lua
-- a rental company ends every rental of a plate, even for offline players
for _, holder in ipairs(exports.fwb_vehiclekeys:GetKeyHolders('RENT 42')) do
    exports.fwb_vehiclekeys:RemoveKeyById(holder.identifier, 'RENT 42')
end
```
:::

::: details GiveKeyById
Gives a key to a player who may be offline, by their character id (the framework's identifier).

- **Online:** the same as `GiveKey`.
- **Offline:** a saved key they find when they join: a spare, or a temporary key with an end time. It works with key items on too, it is just not an item.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeyById(identifier, plate, opts)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `identifier` | `string` | Required | The character id (ESX `identifier`, QBCore / Qbox `citizenid`) |
| `plate` | `string` | Required | The car's plate |
| `opts` | `table` or `string` | Optional | `{ kind = 'spare' or 'temp', seconds, label }`, or just the kind. Default `spare` |

### Returns
* `true`, or `false, reason` (`'player'`, `'plate'`, `'hook'`)

### Example
```lua
-- a car rental website: the renter gets a 2-hour key, online or not
exports.fwb_vehiclekeys:GiveKeyById(citizenid, 'RENT 042', { kind = 'temp', seconds = 7200, label = 'Rental' })
```
:::

::: details GetKeysById
Every key of a player who may be offline.

- **Online:** what their key ring lists.
- **Offline:** their saved keys and their own cars. Key items are not listed, because an offline player's inventory is not read.

### Export
```lua
exports.fwb_vehiclekeys:GetKeysById(identifier)
```

### Returns
* `{ { plate, kind, label, expires, owned } }`

### Example
```lua
-- a police computer lists the keys of a suspect
for _, k in ipairs(exports.fwb_vehiclekeys:GetKeysById(citizenid)) do
    print(k.plate, k.kind, k.owned and 'owner' or '')
end
```
:::

::: details GetKey
Which key a player has to a car, and when it ends.

### Export
```lua
exports.fwb_vehiclekeys:GetKey(src, plateOrVehicle)
```

### Returns
* `{ has = boolean, kind = string|nil, expires = number|nil }`
* `kind`: `'owner'`, `'spare'`, `'temp'`, `'session'`, `'job'` or `'item'`
* `expires`: an `os.time()` value, only for keys that end

### Example
```lua
-- a rental desk tells the player how long their rental lasts
local key = exports.fwb_vehiclekeys:GetKey(source, veh)
if key.kind == 'temp' and key.expires then
    print('Your rental ends at ' .. os.date('%H:%M', key.expires))
end
```
:::

::: details GetKeys
Every key a player holds: what their key ring lists.

### Export
```lua
exports.fwb_vehiclekeys:GetKeys(src)
```

### Returns
* `{ { plate, kind, label, expires, owned, hasKey }, ... }`

### Example
```lua
-- a phone app lists the player's cars
for _, key in ipairs(exports.fwb_vehiclekeys:GetKeys(source)) do
    print(key.plate, key.label, key.owned and 'owned' or key.kind)
end
```
:::

::: details GetKeyHolders
Who holds a saved key to a car (spares and temporary keys). Session keys are not listed.

### Export
```lua
exports.fwb_vehiclekeys:GetKeyHolders(plateOrVehicle)
```

### Returns
* `{ { identifier, name, kind, expires }, ... }`

### Example
```lua
-- an MDT shows who has a key to a car
for _, holder in ipairs(exports.fwb_vehiclekeys:GetKeyHolders(plate)) do
    print(holder.name .. ' has a ' .. holder.kind .. ' key')
end
```
:::

::: details ChangeLocks
Every older key of the car stops working: saved keys are deleted, and key items keep the old lock and no longer fit. The spare count goes back to 0. With `ownerSrc`, that player gets a new owner key.

### Export
```lua
exports.fwb_vehiclekeys:ChangeLocks(plateOrVehicle, ownerSrc)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `ownerSrc` | `number` | Optional | A player who gets a new owner key |

### Returns
* `number`: the new lock version

### Example
```lua
-- a car was stolen and found again: old keys stop working, the owner gets a new one
local owner = exports.fwb_vehiclekeys:GetOwner(plate)
exports.fwb_vehiclekeys:ChangeLocks(plate, owner and owner.source)
```
:::

::: details GetSpareCount
How many spare keys were made since the locks were last changed.

### Export
```lua
exports.fwb_vehiclekeys:GetSpareCount(plateOrVehicle)
```

### Returns
* `number`

### Example
```lua
-- a key shop sells at most 3 spares per car
if exports.fwb_vehiclekeys:GetSpareCount(plate) >= 3 then
    return print('This car already has 3 spares')
end
```
:::

---

## Test drives

::: details StartTestDrive
Starts a test drive: the player can unlock, lock and start the car until [EndTestDrive](#test-drives), or until `seconds` pass when given. It works the same with or without key items: the key is never an item and is never saved, so nothing lands in the inventory and nothing is left after a restart.

Pass the vehicle (entity or network id) when you have it: the car is then unlocked and is never treated as a locked NPC car. A plate works too, but then only the key is given.

### Export
```lua
exports.fwb_vehiclekeys:StartTestDrive(src, plateOrVehicle, seconds, label)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `seconds` | `number` | Optional | The key ends by itself after this many seconds. Without it, it lasts until `EndTestDrive` (or the player leaves). |
| `label` | `string` | Optional | Shown on the key ring. Default: `'Test drive'` |

### Returns
* `true`, or `false, reason` (`'plate'`, `'player'`, `'hook'`)

### Example
```lua
-- a dealership: a 5-minute test drive in an Adder
local veh = CreateVehicle(`adder`, x, y, z, h, true, true)
while not DoesEntityExist(veh) do Wait(0) end
exports.fwb_vehiclekeys:StartTestDrive(source, veh, 300, 'Adder')
```
:::

::: details EndTestDrive
Ends a test drive: the player's key to this car is taken back. Call it before you delete the car, or pass the plate if the car is already gone.

### Export
```lua
exports.fwb_vehiclekeys:EndTestDrive(src, plateOrVehicle)
```

### Returns
* `true`, or `false` when the player had no test drive key to the car (a spare or temporary key they hold is never taken)

### Example
```lua
-- the dealership's test drive timer runs out
SetTimeout(300000, function()
    exports.fwb_vehiclekeys:EndTestDrive(src, veh)
    DeleteEntity(veh)
end)
```
:::

---

## Owners & Plates

::: details GetOwner
Who owns the car, from the framework's owned-vehicles table.

### Export
```lua
exports.fwb_vehiclekeys:GetOwner(plateOrVehicle)
```

### Returns
* `{ identifier, source }` (`source` only when the owner is online), or `nil` when nobody owns the car

### Example
```lua
-- a police script tells the owner their car was impounded
local owner = exports.fwb_vehiclekeys:GetOwner(plate)
if owner and owner.source then
    TriggerClientEvent('ox_lib:notify', owner.source, { description = 'Your car ' .. plate .. ' was impounded' })
end
```
:::

::: details IsOwner
Whether this player owns this car.

### Export
```lua
exports.fwb_vehiclekeys:IsOwner(src, plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- only the owner may sell the car
if not exports.fwb_vehiclekeys:IsOwner(source, plate) then
    return print('Only the owner can sell this car')
end
```
:::

::: details OwnerChanged
Call it after **your** script changed a car's owner in the database, so the cached owner is forgotten. It does not change keys or locks; use [TransferCar](#owners-plates) for a full hand-over.

### Export
```lua
exports.fwb_vehiclekeys:OwnerChanged(plate)
```

### Example
```lua
-- a car auction moves the car to the winner itself
MySQL.update.await('UPDATE owned_vehicles SET owner = ? WHERE plate = ?', { winnerId, plate })
exports.fwb_vehiclekeys:OwnerChanged(plate)
```
:::

::: details RefreshOwnedVehicles
Call it after your dealership or garage wrote to the owned-vehicles table for a player (bought, sold, gifted). Their cars are read again at once, so a car they just bought counts straight away and a car they sold stops counting. Without it, a new car counts within 15 seconds.

The same job as jaksam's `refreshPlayerOwnedVehicles`, without its 2-second wait.

### Export
```lua
exports.fwb_vehiclekeys:RefreshOwnedVehicles(src)
```

### Returns
* `true` when the player's cars were read, `false` when the player is not loaded

### Example
```lua
-- a dealership after the sale
MySQL.insert.await('INSERT INTO owned_vehicles (owner, plate, vehicle) VALUES (?, ?, ?)', { xPlayer.identifier, plate, json.encode(props) })
exports.fwb_vehiclekeys:RefreshOwnedVehicles(source)
```
:::

::: details TransferCar
The car becomes another player's: the owned-vehicles row is changed through the framework bridge, the locks are changed and the new owner gets a key. No fee and no distance check.

### Export
```lua
exports.fwb_vehiclekeys:TransferCar(plateOrVehicle, target)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `target` | `number` | Required | The new owner's server id (must be online) |

### Returns
* `true`, or `false, reason` (`'player'` not online, `'framework'` the framework can't do it, `'db'` no such car)

### Example
```lua
-- a car dealer sells a used car to a player
local ok, why = exports.fwb_vehiclekeys:TransferCar(plate, buyerSrc)
if not ok then print('Sale failed: ' .. why) end
```
:::

::: details PlateExists
Whether a car in the owned-vehicles table already has this plate. Handy before giving a car a new plate.

### Export
```lua
exports.fwb_vehiclekeys:PlateExists(plate)
```

### Returns
* `boolean`

### Example
```lua
-- a custom plate shop checks the plate is free
if exports.fwb_vehiclekeys:PlateExists(wanted) then
    return print('That plate is taken')
end
```
:::

::: details GeneratePlate
A new plate nobody owns yet.

### Export
```lua
exports.fwb_vehiclekeys:GeneratePlate(format)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `format` | `string` | Optional | `A` = a random letter, `0` = a random digit, anything else is kept. Default: **Settings → General → New plates** |

### Returns
* `string`, or `nil` when no free plate was found after 50 tries (the format is too full)

### Example
```lua
-- a rental company gives each rental its own plate
local plate = exports.fwb_vehiclekeys:GeneratePlate('RENT 000') -- "RENT 381"
SetVehicleNumberPlateText(veh, plate)
exports.fwb_vehiclekeys:GiveKey(source, plate, { kind = 'temp', seconds = 3600 })
```
:::

::: details ChangePlate
A new plate for good. The database row, keys, locks, trackers, history and the car in the world all follow. No fee and no cooldown. Every plate change also fires `fwb_vehiclekeys:plateChanged` with `(oldPlate, newPlate)`.

### Export
```lua
exports.fwb_vehiclekeys:ChangePlate(old, new)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `old` | `string` | Required | The current plate |
| `new` | `string` | Required | The new plate |

### Returns
* `true`, or `false, reason` (`'bad'` plate not allowed or the same, `'taken'`, `'framework'`, `'db'`)

### Example
```lua
-- a custom plate shop
local ok, why = exports.fwb_vehiclekeys:ChangePlate('OLD 1', 'NEW 1')
if not ok then print('Plate not changed: ' .. why) end
```
:::

::: details GetVehicleByPlate
The car with this plate, if it is out in the world.

### Export
```lua
exports.fwb_vehiclekeys:GetVehicleByPlate(plate)
```

### Returns
* A vehicle entity, or `nil`

### Example
```lua
-- a garage won't take out a car that is already out
if exports.fwb_vehiclekeys:GetVehicleByPlate(plate) then
    return print('This car is already out')
end
```
:::

---

## Locks & car

Windows are named `frontLeft`, `frontRight`, `rearLeft`, `rearRight` (`true` = down). Doors: `0`–`3` the seats' doors, `4` bonnet, `5` boot.

::: details Lock
Locks the car for everyone.

### Export
```lua
exports.fwb_vehiclekeys:Lock(vehicle)
```

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- a police script locks a car it just impounded
exports.fwb_vehiclekeys:Lock(veh)
```
:::

::: details Unlock
Unlocks the car for everyone.

### Export
```lua
exports.fwb_vehiclekeys:Unlock(vehicle)
```

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- a job car spawns unlocked for the worker
local veh = CreateVehicle(`burrito3`, x, y, z, h, true, true)
while not DoesEntityExist(veh) do Wait(0) end
exports.fwb_vehiclekeys:Unlock(veh)
```
:::

::: details IsLocked
Whether the car is locked.

### Export
```lua
exports.fwb_vehiclekeys:IsLocked(vehicle)
```

### Returns
* `boolean` (`false` when the vehicle does not exist)

### Example
```lua
-- a police "break in" action only for locked cars
if exports.fwb_vehiclekeys:IsLocked(netId) then
    exports.fwb_vehiclekeys:Unlock(netId)
end
```
:::

::: details SetNoKeyNeeded
Anyone in the driver seat can start the car without a key. `on = false` ends it.

### Export
```lua
exports.fwb_vehiclekeys:SetNoKeyNeeded(vehicle, on)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `on` | `boolean` | Optional | `true` (default) = no key needed, `false` = a key is needed again |

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- a race event: every racer can start the shared race cars
for _, veh in ipairs(raceCars) do
    exports.fwb_vehiclekeys:SetNoKeyNeeded(veh, true)
end
```
:::

::: details SoundAlarm
Sets the car alarm off.

### Export
```lua
exports.fwb_vehiclekeys:SoundAlarm(vehicle, seconds)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `seconds` | `number` | Optional | How long it sounds. Default: `20` |

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- a heist script: breaking the window sets the alarm off for 30 seconds
exports.fwb_vehiclekeys:SoundAlarm(veh, 30)
```
:::

::: details StopAlarm
Stops the car alarm.

### Export
```lua
exports.fwb_vehiclekeys:StopAlarm(vehicle)
```

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- a mechanic silences the alarm while repairing the car
exports.fwb_vehiclekeys:StopAlarm(veh)
```
:::

::: details GetVehicleState
Everything the server knows about the car at once. Indicators, headlights, doors and the engine are only known to the games near the car, so read them with the [client export](./client#locks-car).

### Export
```lua
exports.fwb_vehiclekeys:GetVehicleState(vehicle)
```

### Returns
* `nil` when the vehicle does not exist, otherwise:
```lua
{
    plate = 'AB 123', locked = true, noKeyNeeded = false, alarm = false,
    hazards = false, interiorLight = false,
    windows = { frontLeft = false, frontRight = false, rearLeft = false, rearRight = false },
    owned = true, trackers = 1,
}
```

### Example
```lua
-- an MDT shows a car's status
local s = exports.fwb_vehiclekeys:GetVehicleState(netId)
if s then
    print(s.plate, s.locked and 'locked' or 'open', s.owned and 'owned' or 'not owned')
end
```
:::

::: details SetVehicleState
Changes only what you pass, for everyone near the car.

### Export
```lua
exports.fwb_vehiclekeys:SetVehicleState(vehicle, change)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `change.hazards` | `boolean` | Optional | Hazard lights on or off |
| `change.interiorLight` | `boolean` | Optional | Interior light on or off |
| `change.windows` | `boolean` or `table` | Optional | `true` / `false` for every window, or `{ rearLeft = true, ... }` for some |
| `change.door` | `number` | Optional | `0`–`5`: opens a shut door or shuts an open one |
| `change.engine` | `boolean` | Optional | `true` starts the engine if it is off, or stops it if it is running |

`door` and `engine` are one action each; when both are passed, only `door` is done.

### Returns
* `true`, or `false` when the vehicle does not exist or `change` is not a table

### Example
```lua
-- a tow job: hazards on and the boot open while the car is hooked up
exports.fwb_vehiclekeys:SetVehicleState(veh, {
    hazards = true,
    door = 5, -- the boot
})
```
:::

---

## Trackers

`which` = `'own'` (the owner's own tracker), `'planted'` (someone else's) or `nil` (any).

::: details PlantTracker
Puts a tracker on a car without the item or the minigame. A planted tracker (not the owner's own) has a battery that runs out after **Settings → Trackers → battery hours**.

### Export
```lua
exports.fwb_vehiclekeys:PlantTracker(src, plateOrVehicle, options)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `src` | `number` or `nil` | Optional | Who planted it. `nil` = "script" |
| `options.own` | `boolean` | Optional | The owner's own tracker. Default: `true` when `src` owns the car |
| `options.label` | `string` | Optional | The name shown in the planter's key ring |
| `options.planterName` | `string` | Optional | The planter's name when `src` is `nil` |

### Returns
* `number`: the tracker id, or `nil` when it could not be made

### Example
```lua
-- a heist: the boss can follow the getaway car
local id = exports.fwb_vehiclekeys:PlantTracker(bossSrc, veh, { label = 'Getaway car' })
if not id then print('No tracker planted') end
```
:::

::: details GetTrackers
Every tracker on a car, newest first.

### Export
```lua
exports.fwb_vehiclekeys:GetTrackers(plateOrVehicle)
```

### Returns
* `{ { id, own, planter, identifier, battery, created }, ... }` (`battery > 0` = it still works)

### Example
```lua
-- a police scanner counts working trackers on a car
local working = 0
for _, t in ipairs(exports.fwb_vehiclekeys:GetTrackers(plate)) do
    if t.battery > 0 then working = working + 1 end
end
print(working .. ' working trackers')
```
:::

::: details RemoveTrackers
Removes the trackers of a car.

### Export
```lua
exports.fwb_vehiclekeys:RemoveTrackers(plateOrVehicle, which)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `which` | `string` | Optional | `'own'`, `'planted'` or `nil` (every tracker) |

### Returns
* `number`: how many were removed

### Example
```lua
-- a police impound takes off every tracker criminals planted
local n = exports.fwb_vehiclekeys:RemoveTrackers(plate, 'planted')
print(n .. ' trackers removed')
```
:::

::: details RemoveTracker
Removes one tracker: an `id` from `GetTrackers`. Use it for your own removal scene, such as a mechanic job. Trackers show no prop on the car; players find them with the scanner item.

### Export
```lua
exports.fwb_vehiclekeys:RemoveTracker(id, src)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `id` | `number` | Required | The tracker's id from `GetTrackers` |
| `src` | `number` | Optional | Who removed it (passed on to the `trackerRemoved` event) |

### Returns
* `true` when the tracker was there and is gone, `false` when there was no such tracker

### Example
```lua
-- a mechanic job: the mechanic takes off the first planted tracker
for _, t in ipairs(exports.fwb_vehiclekeys:GetTrackers(plate)) do
    if not t.own then
        exports.fwb_vehiclekeys:RemoveTracker(t.id, mechanicSrc)
        break
    end
end
```
:::

::: details KillEngine
Stops the engine wherever the car is. It needs a key or a new hotwire to start again. A driver with the key starts it with the engine key: pressing W alone does not start it.

### Export
```lua
exports.fwb_vehiclekeys:KillEngine(plateOrVehicle)
```

### Returns
* `true`, or `false, 'far'` (the car is not out in the world)

### Example
```lua
-- a police chase: dispatch kills the engine of a stolen car
local ok = exports.fwb_vehiclekeys:KillEngine(plate)
if not ok then print('That car is not out') end
```
:::

::: details TrackCar
Shows a car on a player's map, with the live card, for a while. There is no key or owner check: your script decides who may see the car.

### Export
```lua
exports.fwb_vehiclekeys:TrackCar(src, plateOrVehicle, seconds)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `seconds` | `number` | Optional | How long. Default: the fob's Track time (**Settings → Trackers**) |

### Returns
* `true`, or `false` when the car is not out in the world or `src` is not a number

### Example
```lua
-- a police script shows a reported stolen car to an officer for 2 minutes
exports.fwb_vehiclekeys:TrackCar(officerSrc, plate, 120)
```
:::

::: details SendTheftAlert
Sends the owner the "your car is being stolen" card. It is only shown when theft alerts are on and the owner is online, and the same car and kind alert at most once a minute.

### Export
```lua
exports.fwb_vehiclekeys:SendTheftAlert(vehicle, kind)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `kind` | `string` | Optional | `'lockpick'`, `'hotwire'`, `'alarm'` (default) or `'carjack'` |

### Returns
* `true`, or `false` when the vehicle does not exist

### Example
```lua
-- your own car-theft script tells the owner a thief is at work
exports.fwb_vehiclekeys:SendTheftAlert(veh, 'lockpick')
```
:::

---

## Feature switches

On top of the admin's settings, a script can turn features off. Nothing is saved:

- **For everyone**, until the resource restarts: `SetFeature(name, false)`.
- **For one player**, until they leave: `BlockFeature(src, name, true)`.

A feature the admin turned off in `/fwb_vehiclekeys` stays off, whatever a script says.

| Name | What it turns off | One player? |
| :--- | :--- | :--- |
| `keyNeeded` | A key is needed to start and drive a car. **Off = anyone can drive any car.** | No |
| `lockKey` | The lock key | Yes |
| `keyring` | Opening the key ring | Yes |
| `fob` | Every remote button of the key ring | Yes |
| `engine` | The remote engine button | Yes |
| `summon` | Summon | Yes |
| `track` | The fob's Track button | Yes |
| `windows` | Windows from the key ring | Yes |
| `doors` | Doors, bonnet and boot from the key ring | Yes |
| `seats` | Changing seats from the key ring | Yes |
| `lights` | Hazard lights and interior light from the key ring | Yes |
| `lockpick` | Lockpicking (both lockpick items) | Yes |
| `hotwire` | Hotwiring | Yes |
| `search` | Searching a car for its key | Yes |
| `carjack` | Carjacking NPC drivers | Yes |
| `npcLocks` | NPC cars being locked (off = every NPC car is open) | No |
| `trackers` | Planting and following trackers | Yes |
| `detector` | Scanning cars for trackers | Yes |
| `pliers` | Cutting trackers off | Yes |
| `killSwitch` | The owner's kill switch | Yes |
| `theftAlerts` | Owners being told about thefts | No |
| `policeAlerts` | Police alerts | No |
| `locksmith` | Every locksmith service and the shop | Yes |
| `spares` | Giving spare keys | Yes |
| `handover` | Handing a car over | Yes |
| `plateChange` | Changing a plate at the locksmith | Yes |

::: details SetFeature
Turns a feature off (or back on) for everyone, until the resource restarts.

### Export
```lua
exports.fwb_vehiclekeys:SetFeature(name, on)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Required | A name from the table above |
| `on` | `boolean` | Optional | `false` = off, `true` (default) = back on |

### Returns
* `true`, or `false` when the name is unknown

### Example
```lua
-- a car show event: every car can be driven without a key
exports.fwb_vehiclekeys:SetFeature('keyNeeded', false)
-- ...and back to normal when the event ends
exports.fwb_vehiclekeys:SetFeature('keyNeeded', true)
```
:::

::: details BlockFeature
Blocks a feature for one player, until they leave. Only names marked "Yes" in the table above work per player.

### Export
```lua
exports.fwb_vehiclekeys:BlockFeature(src, name, on)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Required | A name from the table above |
| `on` | `boolean` | Optional | `true` (default) = blocked, `false` = allowed again |

### Returns
* `true`, or `false` when the player is not online or the name can't be blocked per player

### Example
```lua
-- a jail script: no stealing cars while in prison
exports.fwb_vehiclekeys:BlockFeature(src, 'lockpick', true)
exports.fwb_vehiclekeys:BlockFeature(src, 'hotwire', true)
-- ...and when they are released
exports.fwb_vehiclekeys:BlockFeature(src, 'lockpick', false)
exports.fwb_vehiclekeys:BlockFeature(src, 'hotwire', false)
```
:::

::: details GetFeatures
Every feature name, with what scripts did to it. `on` only shows what `SetFeature` did, not the admin's settings.

### Export
```lua
exports.fwb_vehiclekeys:GetFeatures(src)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `src` | `number` | Optional | Also fill in `blocked` for this player |

### Returns
* `{ [name] = { text, on, perPlayer, blocked }, ... }`

### Example
```lua
-- check whether a player is still blocked from lockpicking
local features = exports.fwb_vehiclekeys:GetFeatures(src)
if features.lockpick.blocked then print('Still blocked') end
```
:::

---

## Hooks

Full list of hook names and their `data`: [Hooks & Events](../editable-files/server).

::: details registerHook
Adds your own rule before an action. Return `false` (and a text the player sees) to stop it. Your hooks are removed when your resource stops.

### Export
```lua
exports.fwb_vehiclekeys:registerHook(name, fn, options)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Required | The hook name |
| `fn` | `function` | Required | `function(data)`, returns `false, text` to stop the action |
| `options.plateFilter` | `table` | Optional | Only these plates (`'LS*'` = starts with LS) |
| `options.modelFilter` | `table` | Optional | Only these models (spawn names or hashes) |
| `options.print` | `boolean` | Optional | Print each time it runs |

### Returns
* `number`: the hook id, or `nil` when the name is unknown or `fn` is missing

### Example
```lua
-- government cars can't be lockpicked
local hookId = exports.fwb_vehiclekeys:registerHook('lockpick', function(data)
    return false, 'This car is too well protected'
end, { plateFilter = { 'GOV*' } })
```
:::

::: details removeHooks
Removes one hook by its id. Without an id, it removes every hook your resource added.

### Export
```lua
exports.fwb_vehiclekeys:removeHooks(id)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `id` | `number` | Optional | The id `registerHook` returned |

### Example
```lua
-- the city lockdown is over: lockpicking works again
exports.fwb_vehiclekeys:removeHooks(hookId)
```
:::
