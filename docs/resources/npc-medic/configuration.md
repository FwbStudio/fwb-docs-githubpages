---
title: Npc Medic Configuration | FWB Studio Docs
description: Configure Npc Medic — config files and key options.
---


# Npc Medic — Configuration

Edit the config files inside `fs_npcmedic/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

