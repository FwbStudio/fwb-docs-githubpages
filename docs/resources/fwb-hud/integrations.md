---
title: FWB HUD Integrations | FWB Studio Docs
description: Connect FWB HUD to your FiveM server — ESX, QBCore, Qbox, notifications, fuel scripts, electric vehicles, pma-voice and custom statuses.
---

# FWB HUD — Integrations

Everything that touches other resources lives in the open `bridge/` folder.

---

## Framework

ESX, QBCore, Qbox and Standalone are detected automatically. Pick one manually in **/fwb_hud → Bridge** if needed.

Scripts made for your framework's stock HUD keep working — each bridge answers the usual events:

| Framework | Handled events |
| :--- | :--- |
| ESX | `esx_status:onTick`, account money, job, death / revive, eating and drinking |
| QBCore / Qbox | `hud:client:UpdateNeeds`, `hud:client:UpdateStress`, `seatbelt:client:ToggleSeatbelt`, `seatbelt:client:ToggleCruise`, `hud:client:ShowAccounts`, `hud:server:GainStress`, `hud:server:RelieveStress` |

On QBCore / Qbox, stress is the character's `metadata.stress`.

### Adding another framework

Copy a folder in `bridge/framework/`, rename it, change `NAME` at the top of its three files (and the resource it detects), then add its `shared.lua`, `client.lua` and `server.lua` to the three script lists in `fxmanifest.lua`. It appears in the Bridge tab after a restart.

---

## Notifications

On **auto**, the first running provider is used: `fs_notify`, then `ox_lib`, then the framework's own. Add another the same way as a framework, in `bridge/notify/`.

---

## Fuel & Electric Vehicles

Edit `Integration.fuel` in `bridge/integrations/client.lua`. Most fuel scripts (LegacyFuel, cdn-fuel, ps-fuel, qb-fuel, lc_fuel, ox_fuel) set the game's fuel level, so the default works without changes.

```lua
function Integration.fuel(vehicle, electric)
    return GetVehicleFuelLevel(vehicle)

    -- An export that takes the vehicle:
    --   return exports.LegacyFuel:GetFuel(vehicle)
    -- A state bag:
    --   return Entity(vehicle).state.fuel
end

function Integration.isElectric(vehicle, model)
    return nil -- nil = use the list in /fwb_hud > Vehicles
end
```

---

## Voice

`pma-voice` is read from its state bags (`proximity`, `radioActive`) — nothing to set up.

---

## Seatbelt & Cruise from Another Script

Hook its event in `bridge/integrations/client.lua`:

```lua
RegisterNetEvent('myseatbelt:toggle', function(on) FwbHud.seatbelt(on) end)
AddEventHandler('mycruise:changed', function(enabled) FwbHud.cruise(enabled) end)
```

---

## Custom Statuses (hygiene, shower, radiation…)

Add a line to `bridge/defaults/statuses.lua` and restart:

```lua
{ id = 'shower', label = 'Shower', icon = 'fa:shower', color = '#7dd3fc', source = 'event', event = 'myscript:shower' },
```

Or feed it from code:

```lua
-- client
FwbHud.status('radiation', exports.myradiation:GetLevel())
-- server
exports.fwb_hud:SetStatus(src, 'hygiene', level)
```

---

## Helpers in `bridge/integrations/client.lua`

| Call | What it does |
| :--- | :--- |
| `FwbHud.seatbelt(on)` | Another script's seatbelt changed (`nil` = toggled) |
| `FwbHud.cruise(on)` | Same for cruise control |
| `FwbHud.status(id, value)` | Feed a status 0–100 |
| `FwbHud.addStress(amount)` / `FwbHud.relieveStress(amount)` | Stress, follows the job % |
| `FwbHud.setStress(value)` | Exact stress value |
| `FwbHud.flashMoney()` | Show the money block for a moment |
| `FwbHud.notify(msg, kind)` | Notification through the notify bridge |
