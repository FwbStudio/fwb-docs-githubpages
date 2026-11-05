---
title: FWB Vehicle Keys Client Exports | FWB Studio Docs
description: Client-side exports for FWB Vehicle Keys on FiveM — HasKeys, GiveKeys for garages, lock, key fob, indicators, hazards, windows, doors, minigames and ignoring showroom cars.
---

# Client Exports

Call these from any client script. `vehicle` = a vehicle entity, or a plate of a car within 50 m.

The server has the last word: a client export can only do what that player is allowed to do. `GiveKeys` only works on a car right next to the player that nobody else owns, and the lock and remote buttons need the player's own key.

---

## Keys

::: details GiveKeys
A session key for a car next to the player that the player owns or nobody owns. Made for garages taking a car out. If the car has only just spawned, it keeps trying for about 2 seconds. A second argument (a model and so on) is ignored, so calls written for other key scripts work as they are.

`GiveKey`, `AddKey` and `AddKeys` do the same thing.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeys(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- garage: car taken out
exports.fwb_vehiclekeys:GiveKeys(vehicle)
```
:::

::: details RemoveKeys
Drops a session or temporary key of the player's own. Key items and owner or spare keys are never touched.

`RemoveKey` does the same thing.

### Export
```lua
exports.fwb_vehiclekeys:RemoveKeys(plateOrVehicle)
```

### Returns
* `boolean`

### Example
```lua
-- garage: car stored
exports.fwb_vehiclekeys:RemoveKeys(plate)
```
:::

::: details HasKeys
Asks the server once per car, then remembers the answer for a moment.

`HasKey` does the same thing.

### Export
```lua
exports.fwb_vehiclekeys:HasKeys(plateOrVehicle)
```

### Returns
* `boolean`
:::

::: details GiveKeysByVehicle / GiveKeysByPlate / RemoveKeysByVehicle / RemoveKeysByPlate / HasKeysByVehicle / HasKeysByPlate
The same calls, but you say what you pass, so a plate made only of digits is never taken for an entity. The `ByPlate` versions find the car within 50 m.

### Export
```lua
exports.fwb_vehiclekeys:GiveKeysByVehicle(vehicle)
exports.fwb_vehiclekeys:GiveKeysByPlate(plate)
exports.fwb_vehiclekeys:RemoveKeysByVehicle(vehicle)
exports.fwb_vehiclekeys:RemoveKeysByPlate(plate)
exports.fwb_vehiclekeys:HasKeysByVehicle(vehicle)
exports.fwb_vehiclekeys:HasKeysByPlate(plate)
```
:::

::: details GetKeys
The player's keys.

### Export
```lua
exports.fwb_vehiclekeys:GetKeys()
```

### Returns
* `{ { plate, kind, label, expires, owned }, ... }`
:::

::: details GetKeyKind
Which key the player has to a car.

### Export
```lua
exports.fwb_vehiclekeys:GetKeyKind(vehicle)
```

### Returns
* `'owner'` | `'spare'` | `'temp'` | `'session'` | `'job'` | `'item'` | `nil`
:::

::: details GetClosestKeyCar
The nearest car the player has a key to.

### Export
```lua
exports.fwb_vehiclekeys:GetClosestKeyCar(range) -- default 10 m
```

### Returns
* `{ vehicle, plate, dist }` or `nil`
:::

::: details IsVehicleOwned / IsOwner
Asks the server.

### Export
```lua
exports.fwb_vehiclekeys:IsVehicleOwned(plateOrVehicle)  -- somebody owns it
exports.fwb_vehiclekeys:IsOwner(plateOrVehicle)         -- this player owns it
```

### Returns
* `boolean`
:::

---

## Using the Car

::: details ToggleLock
The same as pressing the lock key.

### Export
```lua
exports.fwb_vehiclekeys:ToggleLock()
```
:::

::: details Lock / Unlock
With the player's own key, within the fob's reach.

### Export
```lua
exports.fwb_vehiclekeys:Lock(vehicle)
exports.fwb_vehiclekeys:Unlock(vehicle)
```

### Returns
* `boolean`
:::

::: details PressRemote
Any key ring button, with the player's own key, within the fob's reach. Made for phone apps and radial menus.

### Export
```lua
exports.fwb_vehiclekeys:PressRemote(vehicle, button, part)
```

| `button` | `part` |
| :--- | :--- |
| `lock`, `unlock`, `trunk`, `engine`, `lights`, `panic`, `summon`, `track`, `hazard`, `interior`, `doors` | — |
| `window` | `0`–`3` |
| `windows` | `'down'` or `'up'` |
| `door` | `0`–`5` (4 bonnet, 5 boot) |

### Returns
* `true`, or `false, error`

### Example
```lua
-- a phone app turns the hazards on
exports.fwb_vehiclekeys:PressRemote(veh, 'hazard')
```
:::

::: details OpenKeyRing
Opens the key ring.

### Export
```lua
exports.fwb_vehiclekeys:OpenKeyRing(view) -- 'compact' (the fob), 'full' (every key) or nil (their last one)
```
:::

---

## The Car: Checks

What this player's game sees, with no server call.

| Export | Returns |
| :--- | :--- |
| `IsLocked(vehicle)` | `boolean` |
| `IsHotwired(vehicle)` | `boolean` |
| `IsAlarmOn(vehicle)` | `boolean` |
| `IsEngineRunning(vehicle)` | `boolean` |
| `AreHeadlightsOn(vehicle)` | `boolean` |
| `IsHazardOn(vehicle)` | `boolean` |
| `IsIndicatorOn(vehicle, side)` | `side` = `'left'` / `'right'` → `boolean` |
| `IsLeftIndicatorOn(vehicle)` / `IsRightIndicatorOn(vehicle)` | `boolean` |
| `IsInteriorLightOn(vehicle)` | `boolean` |
| `IsWindowDown(vehicle, window)` | `boolean` (0 front left, 1 front right, 2 rear left, 3 rear right) |
| `IsDoorOpen(vehicle, door)` | `boolean` (0–3 doors, 4 bonnet, 5 boot) |

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
    engine = true, headlights = false, hazards = false,
    leftIndicator = false, rightIndicator = true, interiorLight = false,
    windows = { frontLeft = false, frontRight = false, rearLeft = false, rearRight = false },
    doors = { [0] = false, [1] = false, [2] = false, [3] = false, [4] = false, [5] = false },
}
```

### Example
```lua
-- a HUD shows the indicators and the lock
local s = exports.fwb_vehiclekeys:GetVehicleState(GetVehiclePedIsIn(PlayerPedId(), false))
if s then print(s.leftIndicator, s.rightIndicator, s.locked) end
```
:::

---

## Other

::: details IgnoreVehicle
The script leaves this car alone for this player: no "no key" hint and no engine rules. Use it for a car a player sits in just to look at.

Cars made only in one player's game (`CreateVehicle(..., false, false)`, such as showroom and preview cars) are left alone without calling this.

### Export
```lua
exports.fwb_vehiclekeys:IgnoreVehicle(vehicle, true)
```
:::

::: details RunMinigame
Runs one of the minigames, with the numbers from the **Minigames** page and the script picked in **Bridges**.

### Export
```lua
exports.fwb_vehiclekeys:RunMinigame(kind, difficulty)
```

| Parameter | Values |
| :--- | :--- |
| `kind` | `lockpick`, `hotwire`, `wirecut`, `wireattach` |
| `difficulty` | `easy`, `medium` (default), `hard` |

### Returns
* `boolean` — passed

### Example
```lua
-- another script borrows the lockpick puzzle for a safe
if exports.fwb_vehiclekeys:RunMinigame('lockpick', 'hard') then
    print('The safe opens')
end
```
:::

::: details IsFeatureOn
`false` when a script turned a feature off for everyone or for this player. Names: [Server exports → Turning Features Off](./server#turning-features-off).

### Export
```lua
exports.fwb_vehiclekeys:IsFeatureOn(name)
```
:::
