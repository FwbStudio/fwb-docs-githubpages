---
title: Vehicle Keys Client Exports | FWB Studio Docs
description: Client-side exports for Vehicle Keys on FiveM (ESX / QBCore / Qbox) — HasKeys, GiveKeys for garages, lock and unlock, key fob buttons, car state, key ring, minigames and ignoring showroom cars.
---

# Client Exports

Call these from any client script.

| Name in this page | What to pass |
| :--- | :--- |
| `vehicle` | A vehicle entity |
| `plateOrVehicle` | A vehicle entity, or the plate of a car within 50 m of the player |

The server has the last word: a client export can only do what that player is allowed to do. `GiveKeys` only works on a car right next to the player that nobody else owns, and the lock and remote buttons need the player's own key. When your script spawns or hands out the car on the server, use the [server exports](./server) instead.

Most of these exports ask the server and wait for the answer, so call them from a thread or an event handler, not from a tight loop.

---

## Keys

::: details GiveKeys
Gives the player a session key (until they leave) to a car within 10 m that they own or that nobody owns. It fails when another player owns the car or an NPC is driving it. Made for garages taking a car out: if the car has only just spawned, it keeps trying for about 2 seconds. A second argument (a model and so on) is ignored, so calls written for other key scripts work as they are.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeys(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a client-side garage takes a car out
local veh = CreateVehicle(model, coords.x, coords.y, coords.z, heading, true, true)
SetVehicleNumberPlateText(veh, plate)
TaskWarpPedIntoVehicle(PlayerPedId(), veh, -1)
exports.fwb_vehiclekeys:GiveKeys(veh)
```
:::

::: details RemoveKeys
Drops a session or temporary key of the player's own. Owner and spare keys are never touched, and a key item stays in the inventory.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeys(plateOrVehicle)
```

### Returns
* `true` when a key was dropped, `false` when the player had no session or temporary key to that plate

### Example
```lua
-- a client-side garage stores the car: the key goes with it
local veh = GetVehiclePedIsIn(PlayerPedId(), false)
local plate = GetVehicleNumberPlateText(veh)
exports.fwb_vehiclekeys:RemoveKeys(plate)
DeleteEntity(veh)
```
:::

::: details HasKeys
Whether the player can use the car. Any key counts. It asks the server once per car, then remembers the answer for about 20 seconds (or until the player's keys change).

### Export
```lua
exports.fwb_vehiclekeys:HasKeys(plateOrVehicle)
```

### Returns
* `boolean` (`false` when no such car is near)

### Example
```lua
-- a radial menu only shows "Car options" in a car the player has a key to
local veh = GetVehiclePedIsIn(PlayerPedId(), false)
if veh ~= 0 and exports.fwb_vehiclekeys:HasKeys(veh) then
    lib.addRadialItem({ id = 'car_options', label = 'Car options', icon = 'car', onSelect = openCarMenu })
end
```
:::

::: details GetKey
Which key the player has to a car.

### Export
```lua
exports.fwb_vehiclekeys:GetKey(plateOrVehicle)
```

### Returns
* `{ has = boolean, kind = string|nil }`
* `kind`: `'owner'`, `'spare'`, `'temp'`, `'session'`, `'job'` or `'item'`

### Example
```lua
-- a job script tells the player they are driving a work car
local key = exports.fwb_vehiclekeys:GetKey(GetVehiclePedIsIn(PlayerPedId(), false))
if key.kind == 'job' then
    lib.notify({ description = 'This is a work car' })
end
```
:::

::: details GetKeys
Every key the player holds. Asks the server.

### Export
```lua
exports.fwb_vehiclekeys:GetKeys()
```

### Returns
* `{ { plate, kind, label, expires, owned }, ... }`

### Example
```lua
-- a phone app lists the player's cars
for _, key in ipairs(exports.fwb_vehiclekeys:GetKeys()) do
    print(key.plate, key.label, key.owned and 'owned' or key.kind)
end
```
:::

::: details GetClosestKeyCar
The nearest car the player has a key to.

### Export
```lua
exports.fwb_vehiclekeys:GetClosestKeyCar(range)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `range` | `number` | Optional | How far to look, in metres. Default: `10` |

### Returns
* `{ vehicle, plate, dist }`, or `nil` when there is none in range

### Example
```lua
-- a valet script picks the player's nearest car
local car = exports.fwb_vehiclekeys:GetClosestKeyCar(25.0)
if car then
    print(('Your car %s is %.0f m away'):format(car.plate, car.dist))
end
```
:::

::: details IsOwner
Whether the player owns the car. Asks the server.

### Export
```lua
exports.fwb_vehiclekeys:IsOwner(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a tuning shop only lets the owner buy upgrades
local veh = GetVehiclePedIsIn(PlayerPedId(), false)
if not exports.fwb_vehiclekeys:IsOwner(veh) then
    return lib.notify({ type = 'error', description = 'Only the owner can tune this car' })
end
```
:::

---

## Locks & car

::: details ToggleLock
The same as pressing the lock key: locks or unlocks the nearest car the player has a key to.

### Export
```lua
exports.fwb_vehiclekeys:ToggleLock()
```

### Example
```lua
-- a radial menu button for the lock
lib.addRadialItem({
    id = 'car_lock', label = 'Lock / unlock', icon = 'lock',
    onSelect = function() exports.fwb_vehiclekeys:ToggleLock() end,
})
```
:::

::: details Lock
Locks the car with the player's own key, within the fob's reach (**Settings → Locking**).

### Export
```lua
exports.fwb_vehiclekeys:Lock(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a phone app's "Lock my car" button
local car = exports.fwb_vehiclekeys:GetClosestKeyCar(30.0)
if car and exports.fwb_vehiclekeys:Lock(car.vehicle) then
    lib.notify({ description = car.plate .. ' locked' })
end
```
:::

::: details Unlock
Unlocks the car with the player's own key, within the fob's reach (**Settings → Locking**).

### Export
```lua
exports.fwb_vehiclekeys:Unlock(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- a delivery job: unlock the work van when the player walks up to it
if not exports.fwb_vehiclekeys:Unlock(workVan) then
    lib.notify({ type = 'error', description = 'You have no key to this van' })
end
```
:::

::: details PressRemote
Presses a key ring button with the player's own key, within the fob's reach (Summon has its own reach). Made for phone apps and radial menus.

### Export
```lua
exports.fwb_vehiclekeys:PressRemote(plateOrVehicle, button, part)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `button` | `string` | Required | `lock`, `unlock`, `trunk`, `engine`, `lights`, `panic`, `summon`, `track`, `hazard`, `interior`, `window`, `windows`, `door`, `doors` |
| `part` | `number` or `string` | Optional | For `window`: `0`–`3`. For `windows`: `'down'` or `'up'`. For `door`: `0`–`5` (4 bonnet, 5 boot) |

### Returns
* `true`, or `false, error` (for example `'car'` no such car, `'far'` out of reach, `'off'` turned off, `'nokey'`)

### Example
```lua
-- a phone app rolls every window down
local ok, err = exports.fwb_vehiclekeys:PressRemote(veh, 'windows', 'down')
if not ok then print('Remote failed: ' .. tostring(err)) end
```
:::

::: details GetVehicleState
Everything this player's game sees about the car, with no server call.

### Export
```lua
exports.fwb_vehiclekeys:GetVehicleState(plateOrVehicle)
```

### Returns
* `nil` when no such car is near, otherwise:
```lua
{
    plate = 'AB 123', locked = true, noKeyNeeded = false, alarm = false,
    engine = true, headlights = false, hazards = false,
    leftIndicator = false, rightIndicator = true, interiorLight = false,
    windows = { frontLeft = false, frontRight = false, rearLeft = false, rearRight = false },
    doors = { [0] = false, [1] = false, [2] = false, [3] = false, [4] = false, [5] = false },
}
```
`windows`: `true` = down. `doors`: `true` = open (0–3 seats' doors, 4 bonnet, 5 boot).

### Example
```lua
-- a HUD shows the indicators and the lock
local s = exports.fwb_vehiclekeys:GetVehicleState(GetVehiclePedIsIn(PlayerPedId(), false))
if s then
    print(s.leftIndicator, s.rightIndicator, s.locked)
end
```
:::

---

## Key ring & minigames

::: details OpenKeyRing
Opens the key ring.

### Export
```lua
exports.fwb_vehiclekeys:OpenKeyRing(view)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `view` | `string` | Optional | `'compact'` (the fob), `'full'` (the wallet) or `nil` (the player's last one) |

### Example
```lua
-- a phone app button opens the full key ring
RegisterNUICallback('openKeys', function(_, cb)
    exports.fwb_vehiclekeys:OpenKeyRing('full')
    cb('ok')
end)
```
:::

::: details RunMinigame
Runs one of the minigames, with the numbers from the **Minigames** page and the minigame script picked in **Bridges**.

### Export
```lua
exports.fwb_vehiclekeys:RunMinigame(kind, difficulty)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `kind` | `string` | Required | `'lockpick'`, `'hotwire'`, `'wirecut'` or `'wireattach'` |
| `difficulty` | `string` | Optional | `'easy'`, `'medium'` (default) or `'hard'` |

### Returns
* `boolean`: `true` when the player passed

### Example
```lua
-- a robbery script borrows the lockpick puzzle for a safe
if exports.fwb_vehiclekeys:RunMinigame('lockpick', 'hard') then
    TriggerServerEvent('myrobbery:openSafe')
end
```
:::

---

## Other

::: details IgnoreVehicle
This script leaves the car alone for this player: no "no key" hint and no engine rules. Use it for a networked car a player sits in just to look at. `on = false` ends it.

Cars made only in one player's game (`CreateVehicle(..., false, false)`, such as showroom and preview cars) are left alone without calling this.

### Export
```lua
exports.fwb_vehiclekeys:IgnoreVehicle(vehicle, on)
```

### Arguments
| Name | Type | Required | Meaning |
| :--- | :--- | :--- | :--- |
| `vehicle` | `number` | Required | A vehicle entity (not a plate) |
| `on` | `boolean` | Optional | `true` (default) = leave it alone, `false` = normal rules again |

### Example
```lua
-- a dealership showroom: the player sits in a networked display car
exports.fwb_vehiclekeys:IgnoreVehicle(displayCar, true)
TaskWarpPedIntoVehicle(PlayerPedId(), displayCar, -1)
-- ...and when they get out
exports.fwb_vehiclekeys:IgnoreVehicle(displayCar, false)
```
:::
