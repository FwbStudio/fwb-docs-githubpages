---
title: NPC Medic Configuration | FWB Studio Docs
description: Configuration reference for FiveM NPC Medic (fwb_npcmedic) — command, revive fee, EMS limit, zones, hospital transport, notifications and progress bar.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic — Configuration

Everything is set in `fwb_npcmedic/config/config.lua`. Texts are in `config/locales/<language>.lua`. Restart the resource after a change.

::: tip Old config files
A `config.lua` or locale file from an older version (including `fs_npcmedic`) works as it is. Settings it doesn't have use their defaults: built-in notify and progress bar, debug off.
:::

---

## Full `config/config.lua`

```lua
--[[

    FwB NPC Medic Configuration File

]]

config.Language = 'en' -- file name in config/locales (en = config/locales/en.lua)

config.debug = false   -- true prints extra lines in the F8 / server console while looking for a problem

-- 'builtin'   = the script's own notification (default)
-- 'ox_lib'    = ox_lib notify
-- 'framework' = ESX.ShowNotification / QBCore.Functions.Notify
config.notify = 'builtin'

-- 'builtin' = the script's own progress bar (default)
-- 'ox_lib'  = ox_lib progress bar
config.progress = 'builtin'

-- config.selfrevive = false means dead player will not be able to use /help command at all
-- config.selfrevive = true means dead player will be able to use /help command to call medic for himself
config.selfrevive = true

-- config.othersrevive = true means other players can use /help playerid to call a medic for a dead player
-- config.othersrevive = false means other players can not call a medic for someone else
config.othersrevive = true

config.mediccommands = {
    -- if config.selfrevive = false then dead player will not be able to use /help to call medic for himself but other player can use /help playerid to call medic for for dead player
    -- if config.selfrevive = true then dead player will be able to use /help to call medic for himself / also any other player will able to call help for anyother person too
    callhelp = 'help', -- {keep in mind upper settings depends upon if dead player can use this command or other player can use this command to call medic for dead player}

    cooldown = 15,     -- Cooldown in minutes after a successful revive before the same player can get a medic again

    restriction = {
        -- if enable = true then restriction will be applied on /help command useable {server wil check amount of active_ems }
        -- if enable = false then restriction will not be applied on /help command useable {any one call /help for dead person any time}
        enable = true,
        ems_jobs = { 'ambulance', 'doctor' },

        -- stop_command_if_active_ems_more_then = 2 means if this or greater then this number ems will be onlien then /help command will not work
        --{default value is 2 mean if 2 or more ems online then /help command will not work}

        stop_command_if_active_ems_more_then = 2,
    },


    -- only if anyone do /help id {call medic for other player}
    -- animation will not player if player use /help for himself
    animation = {
        dict = 'missheistdockssetup1clipboard@base',
        name = 'base',
        flag = 49,
        time = 4000, -- ms the caller plays it
    }
}

config.revive = {

    revive_fee = { min = 500, max = 1000 }, -- Price of a revive (random between min and max), taken from cash first, then bank

    revive_time = 30000,            -- Time in milliseconds it takes for the medic to revive a player

    revive_money_to_society = true, -- If true, the revive fee will be added to the society account

    -- for esx it put society_ infront of job name written in money_job_name {if you have different society_ prefix then change it in bridg folders}
    -- for qbcore it will just use job name written in money_job_name
    money_job_name = 'ambulance',

    crutch = {
        enable = false,
        time = 10,  -- time in mints
    }
}

config.blacklistzone = {
    -- if you enable this then /help command will not work inside these zones
    enable = false, -- Enable or disable blacklist zones
    zones = {
        [1] = { coords = vector3(1151.21, -1529.63, 34.84), radius = 100.0 },
    }
}

config.whitelistzone = {
    -- if you enable this then /help command will only work in these zones
    enable = false, -- Enable or disable whitelist zones
    zones = {
        [1] = { coords = vector3(1151.21, -1529.63, 34.84), radius = 100.0 },
    }
}

config.medic = {
    models = { ped = 's_m_m_paramedic_01', vehicle = 'ambulance' },

    -- distance from player where medic vehicle will spawn
    vehicle_spawn_distance = 200.0,

    -- if true then medic will bring dead player to hospital and then revive him
    bring_to_hospital = false,

    hospital_area = {
        slowdown_radius = 40.0, -- the ambulance slows down inside this distance from the drop-off
        stop_radius = 15.0,     -- the ride ends inside this distance from the drop-off

        -- if distance between player and hospital is greater then this value then medic will teleport player to hospital {in black screen teleportation}
        teleport_distance = 5.0,
    },

    -- hospital points only used if bring_to_hospital = true
    hospitals_dropoff = { -- {script will choose cloesest hospital from this list}
        [1] = vector3(292.4496, -585.3409, 43.1954),
    },
}

config.timeouts = {
    ambulance_to_player = 60000, -- Time in ms for ambulance to reach the player
    doctor_to_player = 20000,    -- Time in ms for doctor to reach the player
    doctor_to_vehicle = 60000,   -- Time in ms for doctor to carry the player to the ambulance (bring_to_hospital)
    bring_to_hospital = 120000,  -- Time in ms for medic to bring player to hospital
}
```

---

## Settings

### General
* **`config.Language`**: File name in `config/locales/`. To translate, copy `en.lua` to a new file (for example `de.lua`), change `config.Lang['en']` in it to `config.Lang['de']`, translate the texts and set `config.Language = 'de'`. Missing texts fall back to English.
* **`config.debug`**: `true` prints extra lines in the F8 and server console while looking for a problem.
* **`config.notify`**: `'builtin'` (the script's own notification, default), `'ox_lib'` or `'framework'` (ESX / QBCore / Qbox notify). When the picked one isn't running, the built-in one is shown.
* **`config.progress`**: `'builtin'` (default) or `'ox_lib'`. The progress bar shows while the paramedic does CPR.

### Who Can Call
* **`config.selfrevive`**: `true` lets a downed player type `/help` for themselves.
* **`config.othersrevive`**: `true` lets other players type `/help [playerid]` for someone who is down. The caller plays `mediccommands.animation` for `time` ms.
* **`config.mediccommands.callhelp`**: The command name (default `help`). Change it if another script already uses `/help`.
* **`config.mediccommands.cooldown`**: Minutes after a **successful** revive before the same player can get a medic again. A call that fails or is cancelled doesn't start the cooldown. The cooldown is kept per player license, so leaving and rejoining doesn't skip it.
* **`config.mediccommands.restriction`**: With `enable = true`, the command turns off while `stop_command_if_active_ems_more_then` or more players with a job in `ems_jobs` are on duty.

### Revive Fee & Society
* **`config.revive.revive_fee`**: A random amount between `min` and `max`, taken from cash first, then bank. A player who can't pay can't call a medic.
* **`config.revive.revive_time`**: How long the CPR takes, in milliseconds.
* **`config.revive.revive_money_to_society`** / **`money_job_name`**: Sends the fee to the society account (`society_ambulance` on ESX, `ambulance` on QBCore / Qbox).
* **`config.revive.crutch`**: Gives a crutch for `time` minutes after the revive (`wasabi_crutch` or `ak47_crutch`).

### Zones
* **`config.blacklistzone`**: With `enable = true`, the medic doesn't come inside these zones.
* **`config.whitelistzone`**: With `enable = true`, the medic only comes inside these zones.

### Paramedic & Hospital
* **`config.medic.models`**: Paramedic ped and ambulance model.
* **`config.medic.vehicle_spawn_distance`**: How far from the player the ambulance spawns.
* **`config.medic.bring_to_hospital`**: `false` revives the player where they are. `true`: the paramedic carries the player to the ambulance and drives to the closest point in `hospitals_dropoff`; the screen fades and the player is revived there.
* **`config.medic.hospital_area`**: The ambulance slows down inside `slowdown_radius` and stops inside `stop_radius` of the drop-off. When the player is farther than `teleport_distance` from it, they are moved to the drop-off during the fade.
* **`config.timeouts`**: Safety timers in milliseconds so the paramedic never gets stuck. When the ambulance takes too long, the paramedic comes on foot; when the paramedic takes too long to walk over, they are placed next to the player.

---

## The open `bridge/` folder

| Folder | What it does |
| :--- | :--- |
| `bridge/framework/esx`, `qbcore`, `qbox` | Money, jobs, EMS count, society money and the framework notify. Only the running framework is used. |
| `bridge/ambulance` | `IsPlayerDead()` (client), `RevivePlayer()` and `ApplyCrutch()` (server). Add your own ambulance script here. |
| `bridge/notify/builtin`, `ox_lib`, `framework` | The notifications picked with `config.notify`. |
| `bridge/progressbar/builtin`, `ox_lib` | The progress bars picked with `config.progress`. |

To add your own notification, copy `bridge/notify/ox_lib/client.lua` to a new folder (for example `bridge/notify/mynotify/client.lua`), change `NotifyBridge.ox_lib` to `NotifyBridge.mynotify`, call your notify inside it, add the file to `client_scripts` in `fxmanifest.lua` and set `config.notify = 'mynotify'`. Progress bars work the same way with `ProgressBridge`.
