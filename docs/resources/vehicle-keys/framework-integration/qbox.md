---
title: Vehicle Keys — Qbox Integration | FwB Studio Docs
description: Point qbx_core's key settings (giveVehicleKeys, setVehicleLock, hasKeys) at Vehicle Keys instead of qbx_vehiclekeys, so /car and persistent vehicles work.
---

# Qbox Integration

This page shows how to point qbx_core at Vehicle Keys instead of qbx_vehiclekeys, so the cars Qbox spawns for a player come with a key.

The scripts that already call Vehicle Keys (or send the qb-vehiclekeys events) work without this. But qbx_core itself calls `exports.qbx_vehiclekeys` in its config files. If qbx_vehiclekeys is not running, those calls fail. For example, the admin `/car` command spawns the car but stops with an error before any key is given. So on Qbox, make these edits when you replace qbx_vehiclekeys with Vehicle Keys.

All key calls in qbx_core go through its two config files, so you only change those:

- `config/server.lua`: `giveVehicleKeys` is used by the `/car` command (`server/commands.lua`). `setVehicleLock` is used when persistent vehicles are spawned again (`server/vehicle-persistence.lua`).
- `config/client.lua`: `hasKeys` fills `haskeys` in the `QBCore:Client:EnteringVehicle`, `EnteredVehicle` and `LeftVehicle` events (`bridge/qb/client/events.lua`).

---

## Step 1 — qbx_core/config/server.lua

**File:** `qbx_core/config/server.lua`, the `giveVehicleKeys` and `setVehicleLock` functions.

`giveVehicleKeys` gives a session key to the player who spawned the car. The plate is passed instead of the car, because qbx_core already read it. `setVehicleLock` gets `config.persistence.lockState`, which is `'lock'` or `'unlock'`. Vehicle Keys has a `Lock` and an `Unlock` export for that.

```lua
    persistence = {
        lockState = 'lock', -- 'lock' : vehicle will be locked when spawned, 'unlock' : vehicle will be unlocked when spawned
    },

    giveVehicleKeys = function(src, plate, vehicle)
        return exports.qbx_vehiclekeys:GiveKeys(src, vehicle) -- [!code --]
        return exports.fwb_vehiclekeys:GiveKeys(src, plate) -- [!code ++]
    end,

    setVehicleLock = function(vehicle, state)
        exports.qbx_vehiclekeys:SetLockState(vehicle, state) -- [!code --]
        if state == 'unlock' then -- [!code ++]
            exports.fwb_vehiclekeys:Unlock(vehicle) -- [!code ++]
        else -- [!code ++]
            exports.fwb_vehiclekeys:Lock(vehicle) -- [!code ++]
        end -- [!code ++]
    end,

    getSocietyAccount = function(accountName)
        return exports['Renewed-Banking']:getAccountMoney(accountName)
    end,
```

For reference, this is the `/car` command in `server/commands.lua` that calls `giveVehicleKeys`. It needs no change:

```lua
    local _, vehicle = qbx.spawnVehicle({
        model = args[locale('command.car.params.model.name')],
        spawnSource = ped,
        warp = true,
        bucket = bucket
    })

    local plate = qbx.getVehiclePlate(vehicle)
    config.giveVehicleKeys(source, plate, vehicle)
end)
```

---

## Step 2 — qbx_core/config/client.lua

**File:** `qbx_core/config/client.lua`, the `hasKeys` function.

As shipped, it reports `true` for every car when qbx_vehiclekeys is not started. After this change, scripts that read `haskeys` from the vehicle events get the real answer from Vehicle Keys.

```lua
    hasKeys = function(plate, vehicle)
        return GetResourceState('qbx_vehiclekeys') ~= 'started' or exports.qbx_vehiclekeys:HasKeys(vehicle) -- [!code --]
        return GetResourceState('fwb_vehiclekeys') ~= 'started' or exports.fwb_vehiclekeys:HasKeys(vehicle) -- [!code ++]
    end,
```

---

## What needs no change

- **The qb bridge `/car` event** (`bridge/qb/client/events.lua`, `QBCore:Command:SpawnVehicle`). It sends `vehiclekeys:client:SetOwner`, which Vehicle Keys already understands.
- **Owned cars** (in `player_vehicles`). Vehicle Keys reads the owner from that table, so the owner already has the key.
- **`qbx.spawnVehicle`** (`modules/lib.lua`) and the deprecated qb bridge helpers `SpawnVehicle` / `CreateVehicle`. They are used by many scripts for every kind of car and do not give keys. Give keys in the script that calls them.

Do not run qbx_vehiclekeys and Vehicle Keys together. Use one key script only.

---

## Check it works

1. In `server.cfg`, start `qbx_core` before `fwb_vehiclekeys`, then restart the server. qbx_core reads its config only when it starts.
2. As an admin, type `/car adder`. There is no error in the server console.
3. You are seated in the car. Hold `U` to open the key fob: the car is on it.
4. Press `G`: the engine starts and there is no hotwire prompt.
5. Get out, tap `U` to lock the car, and tap it again to unlock it.

::: tip
A qbx_core update replaces `config/server.lua` and `config/client.lua`, so these edits are lost. Make them again after every update.
:::
