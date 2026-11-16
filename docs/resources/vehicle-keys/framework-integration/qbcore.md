---
title: Vehicle Keys — QBCore Integration | FwB Studio Docs
description: How Vehicle Keys works with the cars qb-core spawns, such as the admin /car command, and the optional edits to qb-core's client/events.lua.
---

# QBCore Integration

This page shows how the cars qb-core spawns for a player get a key from Vehicle Keys, and which lines you can change.

This is optional. Garages, dealerships and job scripts that already call Vehicle Keys (or send the qb-vehiclekeys events) work without it.

## Most of qb-core needs no change

Vehicle Keys understands the events of qb-vehiclekeys:

- `vehiclekeys:client:SetOwner` (client), and `qb-vehiclekeys:client:AddKeys` (client)
- `qb-vehiclekeys:server:AcquireVehicleKeys` (server)

Each one gives the player a session key to the car with that plate, if the car is within 10 m of the player and no other player owns it.

qb-core's admin `/car` command already sends `vehiclekeys:client:SetOwner`, so it gives a key **with no change**:

- `server/commands.lua`: `QBCore.Commands.Add('car', ...)` sends `QBCore:Command:SpawnVehicle` to the admin.
- `client/events.lua`: `QBCore:Command:SpawnVehicle` spawns the car, seats the admin, then runs `TriggerEvent('vehiclekeys:client:SetOwner', QBCore.Functions.GetPlate(vehicle))`.

Owned cars (in `player_vehicles`) need nothing either: Vehicle Keys reads the owner from that table.

The server helpers `QBCore.Functions.SpawnVehicle`, `QBCore.Functions.CreateVehicle` and `QBCore.Functions.CreateAutomobile` (`server/functions.lua`), and the client helper `QBCore.Functions.SpawnVehicle` (`client/functions.lua`), do not give keys. Leave them alone. Many scripts use them for every kind of car, and the calling script usually sets the plate after the car is made. Give keys in the script that calls them.

The two steps below are optional extras.

---

## Step 1 — qb-core/client/events.lua

**File:** `qb-core/client/events.lua`, the `QBCore:Command:SpawnVehicle` event (the `/car` command).

This step is only needed if you want `/car` to call Vehicle Keys directly instead of going through the qb-vehiclekeys event. The result is the same: a session key for the car the admin sits in.

```lua
RegisterNetEvent('QBCore:Command:SpawnVehicle', function(vehName)
    local ped = PlayerPedId()
    local hash = joaat(vehName)
    local veh = GetVehiclePedIsUsing(ped)
    if not IsModelInCdimage(hash) then return end
    RequestModel(hash)
    while not HasModelLoaded(hash) do
        Wait(0)
    end

    if IsPedInAnyVehicle(ped) then
        SetEntityAsMissionEntity(veh, true, true)
        DeleteVehicle(veh)
    end

    local vehicle = CreateVehicle(hash, GetEntityCoords(ped), GetEntityHeading(ped), true, false)
    TaskWarpPedIntoVehicle(ped, vehicle, -1)
    SetVehicleFuelLevel(vehicle, 100.0)
    SetVehicleDirtLevel(vehicle, 0.0)
    SetModelAsNoLongerNeeded(hash)
    TriggerEvent('vehiclekeys:client:SetOwner', QBCore.Functions.GetPlate(vehicle)) -- [!code --]
    exports.fwb_vehiclekeys:GiveKeys(vehicle) -- [!code ++]
end)
```

---

## Step 2 — qb-core/client/events.lua

**File:** `qb-core/client/events.lua`, the `QBCore:Client:VehicleInfo` event.

qb-core fills `haskeys` in the `QBCore:Client:EnteringVehicle`, `EnteredVehicle` and `LeftVehicle` events. It only asks qb-vehiclekeys. Without qb-vehiclekeys it always reports `true`. Scripts that read `haskeys` get the right answer after this change.

```lua
RegisterNetEvent('QBCore:Client:VehicleInfo', function(info)
    local plate = QBCore.Functions.GetPlate(info.vehicle)
    local hasKeys = true

    if GetResourceState('qb-vehiclekeys') == 'started' then
        hasKeys = exports['qb-vehiclekeys']:HasKeys(plate)
    elseif GetResourceState('fwb_vehiclekeys') == 'started' then -- [!code ++]
        hasKeys = exports.fwb_vehiclekeys:HasKeys(plate) -- [!code ++]
    end

    local data = {
        vehicle = info.vehicle,
        seat = info.seat,
        name = info.modelName,
        plate = plate,
        driver = GetPedInVehicleSeat(info.vehicle, -1),
        inseat = GetPedInVehicleSeat(info.vehicle, info.seat),
        haskeys = hasKeys
    }

    TriggerEvent('QBCore:Client:' .. info.event .. 'Vehicle', data)
end)
```

Do not run qb-vehiclekeys and Vehicle Keys together. Use one key script only.

---

## Check it works

1. In `server.cfg`, start `qb-core` before `fwb_vehiclekeys`, then restart the server (or `restart qb-core`, then `restart fwb_vehiclekeys`).
2. As an admin, type `/car adder`.
3. You are seated in the car. Hold `U` to open the key fob: the car is on it.
4. Press `G`: the engine starts and there is no hotwire prompt.
5. Get out, tap `U` to lock the car, and tap it again to unlock it.

::: tip
A qb-core update replaces `client/events.lua`, so the optional edits are lost. Make them again after every update.
:::
