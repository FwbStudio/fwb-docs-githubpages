---
title: Vehicle Keys — ESX Integration | FwB Studio Docs
description: Give players keys to the cars ESX Legacy (es_extended) spawns for them, such as the admin /car command, with one line of Vehicle Keys code.
---

# ESX Integration

This page shows where to add one line to ESX (`es_extended`) so the cars ESX spawns for a player come with a key from Vehicle Keys.

This is optional. Garages, dealerships and job scripts that already call Vehicle Keys (or send the qb-vehiclekeys events) work without it. ESX itself spawns a car for a player in one place only: the admin `/car` command.

The code below is taken from ESX Legacy 1.15 and 1.16.

---

## Step 1 — es_extended/server/modules/commands/registrations/vehicles.lua

**File:** `es_extended/server/modules/commands/registrations/vehicles.lua`, the `ESX.RegisterCommand("car", ...)` block.
On ESX 1.15 and older the same block is in `es_extended/server/modules/commands.lua`.

ESX spawns the car on the server and seats the admin in it, but never hands out a key. Without a key the engine will not start and the car asks to be hotwired. Add the line after the seating loop, when the car exists and its plate is known.

`upgrades.plate` is only set when `Config.SpawnVehMaxUpgrades` is on (the plate becomes `ADMINCAR`). In that case the plate is passed directly, because the car only gets it a moment later.

```lua
        local xRoutingBucket = GetPlayerRoutingBucket(xPlayer.source)

        ESX.OneSync.SpawnVehicle(args.car, playerCoords, playerHeading, upgrades, function(networkId)
            if networkId then
                local vehicle = NetworkGetEntityFromNetworkId(networkId)

                if xRoutingBucket ~= 0 then
                    SetEntityRoutingBucket(vehicle, xRoutingBucket)
                end

                for _ = 1, 100 do
                    Wait(0)
                    SetPedIntoVehicle(playerPed, vehicle, -1)

                    if GetVehiclePedIsIn(playerPed, false) == vehicle then
                        break
                    end
                end

                if GetResourceState('fwb_vehiclekeys') == 'started' then -- [!code ++]
                    exports.fwb_vehiclekeys:GiveKeys(xPlayer.source, upgrades.plate or vehicle) -- [!code ++]
                end -- [!code ++]

                if GetVehiclePedIsIn(playerPed, false) ~= vehicle then
                    showError("[^1ERROR^7] The player could not be seated in the vehicle")
                end
            end
        end)
    end,
```

The key is a session key: it lasts until the player leaves or the server restarts, and it is never saved.

---

## What needs no change

- **Owned cars** (`ESX.CreateExtendedVehicle` in `server/classes/vehicle.lua`, 1.16: `server/classes/vehicle/create.lua`). These cars are in `owned_vehicles`. Vehicle Keys reads the owner from that table, so the owner already has the key.
- **`ESX.OneSync.SpawnVehicle`** (`server/modules/onesync.lua`). This is a helper that many scripts use for every kind of car: job cars, NPC cars, props. It does not know which player the car is for, and the calling script often changes the plate right after. Do not add keys here. Add them in the script that calls it.
- **`ESX.Game.SpawnVehicle`** (client). In ESX 1.15 and newer this comes from `esx_lib` (`imports/game/client.lua`, `xLib.game.spawnVehicle`). It is the same kind of shared helper, so leave it alone for the same reason.
- **The `esx:spawnVehicle` callback.** It is deprecated by ESX and, from 1.16, only allowed for admins. Leave it.

---

## Check it works

1. In `server.cfg`, start `es_extended` before `fwb_vehiclekeys`, then restart the server (or `restart es_extended`, then `restart fwb_vehiclekeys`).
2. As an admin, type `/car adder`.
3. You are seated in the car. Hold `U` to open the key fob: the car is on it.
4. Press `G`: the engine starts and there is no hotwire prompt.
5. Get out, tap `U` to lock the car, and tap it again to unlock it.

::: tip
An ESX update replaces `es_extended`, so this edit is lost. Make it again after every update.
:::
