---
title: FWB Vehicle Keys Integrations | FWB Studio Docs
description: Connect FWB Vehicle Keys to FiveM garages, dealerships, inventories, target, dispatch and minigame scripts — and keep scripts made for qb-vehiclekeys, qs-vehiclekeys, wasabi_carlock and others working.
---

# FWB Vehicle Keys — Integrations

Everything that touches other resources lives in the open `bridge/` folder. Each kind is **auto-detected**, and you can pick one by hand on **/fwb_vehiclekeys → Bridges**.

---

## Supported Scripts

| Kind | Supported |
| :--- | :--- |
| Framework | ESX, QBCore, Qbox |
| Inventory (key items) | ox_inventory, qb-inventory / ps-inventory / lj-inventory, qs-inventory, codem-inventory. Other inventories: saved keys. |
| Notifications | fs_notify, ox_lib, okokNotify, mythic_notify, the framework's own |
| Target (locksmith) | ox_target, qb-target, sleepless_interact, built-in "[E]" 3D text |
| Text UI (key hints) | Built in, ox_lib, okokTextUI, esx_textui, qb-core |
| Progress bar | Built in, ox_lib, fwb_hud, progressbar, esx_progressbar |
| Dispatch | cd_dispatch, ps-dispatch, qs-dispatch, rcore_dispatch, core_dispatch, built in (notification + blip) |
| Minigames | Built in, ox_lib, ps-ui, custom. Pick one **per puzzle**: lockpick, hotwire, wire cutting, wire attaching. |
| Logs | Discord webhook, Fivemanage, custom |

To add another, copy a file in the same `bridge/` folder, rename it and change what it calls. It loads on restart and shows up on the Bridges page.

---

## Garages & Dealerships

Most garages and dealerships have a "vehicle keys" setting with a give function and a remove function. Set it to `"none"` (or "custom") and put these two lines in:

```lua
-- give keys (car taken out of the garage, test drive starts)
exports.fwb_vehiclekeys:GiveKeys(vehicleEntity)

-- remove keys (car stored, test drive over)
exports.fwb_vehiclekeys:RemoveKeys(plate)
```

::: tip Key items are never touched
`GiveKeys` gives a session key, and `RemoveKeys` only takes a session or temporary key back. In items mode, the owner's key item stays in the inventory when the car is stored, and fits the car again when it comes out.
:::

::: tip Bought cars need nothing
Owners always have the key to their own cars: the script reads your framework's owned-vehicles table (`owned_vehicles` / `player_vehicles`). A car bought at **any** dealership works for its owner within seconds, with no export added to the dealership.
:::

| Situation | What to use |
| :--- | :--- |
| A player's own car out of the garage | Nothing (they own it), or client `GiveKeys(vehicle)` |
| A rental, a job car, a mission car your script spawns | Server `GiveKeys(src, plate)`: it works **before** the car exists (keys are by plate), and the car is never locked by the NPC car roll |
| Job cars, gang garages, keys for someone else | Server `GiveKey(src, vehicle, ...)` (the client export only works on a car the player owns or nobody owns) |
| A test drive without a key | Server `SetNoKeyNeeded(vehicle, true)`, or `GiveTempKey(src, vehicle, seconds)` |
| Showroom and preview cars | Nothing: cars made with `CreateVehicle(..., false, false)` are left alone (no "[H] Hotwire" hint) |
| A networked car a player only looks at | Client `IgnoreVehicle(vehicle, true)` |
| A new plate for a bought car | Server `GeneratePlate()` |

### FWB Dealership Creator

`fwb_dealerships` finds FWB Vehicle Keys by itself. Buyers get the owner's key, test drives get a temporary key, and the delivery job gets a session key. Nothing to set up.

---

## Scripts Made for Other Key Systems

These calls keep working without changes. Each one gives a key only for the car of that plate right next to the player, and only when no other player owns it:

| What the script calls | Works as |
| :--- | :--- |
| `TriggerEvent('vehiclekeys:client:SetOwner', plate)` (qb-vehiclekeys) | Gives a key |
| `TriggerEvent('qb-vehiclekeys:client:AddKeys', plate)` | Gives a key |
| `TriggerServerEvent('qb-vehiclekeys:server:AcquireVehicleKeys', plate)` | Gives a key |
| `TriggerServerEvent('vehicles_keys:selfGiveVehicleKeys', plate)` (jaksam) | Gives a key |
| `TriggerServerEvent('t1ger_keys:updateOwnedKeys', plate, true / false)` | Gives / takes back a key |

The export names of other key scripts work too, as long as they call `exports.fwb_vehiclekeys`:

| Other script's call | Becomes |
| :--- | :--- |
| `GiveKeys(plate, model)` (qs-vehiclekeys) | `exports.fwb_vehiclekeys:GiveKeys(plate, model)` |
| `AddKey(vehicle)` (mk_vehiclekeys) | `exports.fwb_vehiclekeys:AddKey(vehicle)` |
| `GiveKey(plate)` (wasabi_carlock) | `exports.fwb_vehiclekeys:GiveKey(plate)` |
| `RemoveKeys(plate, model)` / `RemoveKey(plate)` | `exports.fwb_vehiclekeys:RemoveKeys(plate)` |

### Example: a garage with a "custom key system" slot

```lua
function Framework.Client.VehicleGiveKeys(plate, vehicleEntity)
    if not DoesEntityExist(vehicleEntity) then return false end
    exports.fwb_vehiclekeys:GiveKeys(vehicleEntity)
end

function Framework.Client.VehicleRemoveKeys(plate, vehicleEntity)
    exports.fwb_vehiclekeys:RemoveKeys(plate)
end
```

---

## Your Own Minigame

Fill in `bridge/minigame/custom.lua`, then pick **Custom** for any puzzle on the Bridges page. The other puzzles can keep the built-in one.

---

## Your Own Rules

Stop actions or react to them with hooks: see [Hooks & Events](./editable-files/server).
