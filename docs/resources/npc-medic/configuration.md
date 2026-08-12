---
title: Npc Medic Configuration | FWB Studio Docs
description: Configure Npc Medic — config files and key options.
---


# Npc Medic — Configuration

Edit `fs_npcmedic/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[

    CR NPC Medic Configuration File

]]

config.Language = 'en'

-- config.selfrevive = false means dead player will not be able to use /help command at all
-- config.selfrevive = true means dead player will be able to use /help command to call medic for himself
config.selfrevive = true

-- config.othersrevive = false means other player will be able to call /help playerid to caLL medic for dead player
-- config.othersrevive = true means other player will not be able to call /help playerid to call medic for dead player
config.othersrevive = true

config.mediccommands = {
    -- if config.selfrevive = false then dead player will not be able to use /help to call medic for himself but other player can use /help playerid to call medic for for dead player
    -- if config.selfrevive = true then dead player will be able to use /help to call medic for himself / also any other player will able to call help for anyother person too
    callhelp = 'help', -- {keep in mind upper settings depends upon if dead player can use this command or other player can use this command to call medic for dead player}

    cooldown = 15,     -- Cooldown time in minutes before a player can be use revive command again

    restriction = {
        -- if enable = true then restriction will be applied on /help command useable {server wil check amount of active_ems }
        -- if enable = false then restriction will not be applied on /help command useable {any one call /help for dead person any time}
        enable = true,
        ems_jobs = { 'ambulance', 'doctor' },

        -- stop_command_if_active_ems = 2 means if this or greater then this number ems will be onlien then /help command will not work
        --{default value is 2 mean if 2 or more ems online then /help command will not work}

        stop_command_if_active_ems_more_then = 2,
    },


    -- only if anyone do /help id {call medic for other player}
    -- animation will not player if player use /help for himself
    animation = {
        dict = 'missheistdockssetup1clipboard@base',
        name = 'base',
        flag = 49,
    }
}

config.revive = {

    revive_fee = { min = 500, max = 1000}, -- Price to revive if minigame is lost

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
        slowdown_radius = 40.0,
        stop_radius = 15.0,

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
    bring_to_hospital = 120000,  -- Time in ms for medic to bring player to hospital
}
```

</div>
