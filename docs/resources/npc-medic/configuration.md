---
title: NPC Medic Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM NPC Medic script (fs_npcmedic) — commands, revive pricing, EMS limits, and hospital routing.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic — Configuration

Edit `fs_npcmedic/config/config.lua` in your download to customize command permissions, cooldowns, active EMS restrictions, revive fees, society payouts, zones, and paramedic driving behaviors.

---

## Complete `config/config.lua` Reference

```lua
--[[

    CR NPC Medic Configuration File

]]

config.Language = 'en'

-- config.selfrevive = false means dead player will not be able to use /help command at all
-- config.selfrevive = true means dead player will be able to use /help command to call medic for himself
config.selfrevive = true

-- config.othersrevive = false means other player will be able to call /help playerid to call medic for dead player
-- config.othersrevive = true means other player will not be able to call /help playerid to call medic for dead player
config.othersrevive = true

config.mediccommands = {
    -- if config.selfrevive = false then dead player will not be able to use /help to call medic for himself but other player can use /help playerid to call medic for dead player
    -- if config.selfrevive = true then dead player will be able to use /help to call medic for himself / also any other player will able to call help for any other person too
    callhelp = 'help', -- Command used to summon the NPC medic

    cooldown = 15,     -- Cooldown time in minutes before a player can use the revive command again

    restriction = {
        -- if enable = true then restriction will be applied on /help command usability (server will check amount of active EMS)
        -- if enable = false then restriction will not be applied (anyone can call /help anytime)
        enable = true,
        ems_jobs = { 'ambulance', 'doctor' },

        -- stop_command_if_active_ems_more_then = 2 means if 2 or more EMS are online, the /help command is disabled
        stop_command_if_active_ems_more_then = 2,
    },

    -- Animation played when a player calls /help [id] for another downed player
    animation = {
        dict = 'missheistdockssetup1clipboard@base',
        name = 'base',
        flag = 49,
    }
}

config.revive = {
    revive_fee = { min = 500, max = 1000 }, -- Random price range charged to the player upon revive

    revive_time = 30000,            -- Time in milliseconds (e.g. 30s) it takes for the medic to revive a player

    revive_money_to_society = true, -- If true, the revive fee is deposited into the society account

    -- For ESX: automatically prefixes 'society_' to the job name (e.g. 'society_ambulance')
    -- For QBCore/Qbox: uses the exact job name (e.g. 'ambulance')
    money_job_name = 'ambulance',

    crutch = {
        enable = false,
        time = 10,  -- Duration in minutes player walks with a crutch after revive
    }
}

config.blacklistzone = {
    enable = false, -- Enable or disable blacklisted zones (where /help is blocked)
    zones = {
        [1] = { coords = vector3(1151.21, -1529.63, 34.84), radius = 100.0 },
    }
}

config.whitelistzone = {
    -- If enabled, /help will ONLY work inside these defined zones
    enable = false,
    zones = {
        [1] = { coords = vector3(1151.21, -1529.63, 34.84), radius = 100.0 },
    }
}

config.medic = {
    models = { ped = 's_m_m_paramedic_01', vehicle = 'ambulance' },

    -- Distance from player (in meters) where the ambulance vehicle spawns
    vehicle_spawn_distance = 200.0,

    -- If true, the medic drives the dead player to the hospital before reviving them
    bring_to_hospital = false,

    hospital_area = {
        slowdown_radius = 40.0,
        stop_radius = 15.0,

        -- If distance between player and hospital exceeds this value, teleports player with a black screen
        teleport_distance = 5.0,
    },

    -- Drop-off points used when bring_to_hospital = true (script chooses the closest hospital)
    hospitals_dropoff = {
        [1] = vector3(292.4496, -585.3409, 43.1954),
    },
}

config.timeouts = {
    ambulance_to_player = 60000, -- Max time in ms for ambulance to reach the player before failsafe teleport
    doctor_to_player = 20000,    -- Max time in ms for doctor ped to reach the player
    bring_to_hospital = 120000,  -- Max time in ms for medic to drive player to hospital
}
```

---

## Configuration Parameter Details

### Calling & EMS Restrictions
* **`config.selfrevive`**: Set to `true` to allow dead players to run `/help` for themselves. Set to `false` if only other conscious players are allowed to call for them.
* **`config.othersrevive`**: Set to `true` to allow players to call a medic for someone else using `/help [playerid]`.
* **`config.mediccommands.cooldown`**: Cooldown time (in minutes) enforced before a player or target can request NPC medic service again.
* **`config.mediccommands.restriction.stop_command_if_active_ems_more_then`**: The maximum active player EMS count threshold. If the number of online on-duty medics meets or exceeds this number, the NPC medic command is automatically locked.

### Pricing & Society Banking
* **`config.revive.revive_fee`**: Table with `min` and `max` cash/bank amount charged to the patient.
* **`config.revive.revive_money_to_society`**: When `true`, funds paid by the player are deposited directly into the `money_job_name` society account (`society_ambulance` for ESX, or `ambulance` management for QBCore/Qbox).
* **`config.revive.crutch`**: Optional post-revive debuff giving the player a physical crutch and slowed walking animation for a configurable duration in minutes.

### Paramedic Navigation & Hospitals
* **`config.medic.bring_to_hospital`**: When `false`, the paramedic treats and revives the player directly at the incident scene. When `true`, the paramedic loads the patient into the ambulance and drives to the closest coordinate listed in `hospitals_dropoff`.
* **`config.timeouts`**: Failsafe timers (in milliseconds) that prevent NPCs from getting stuck in GTA V traffic.

---

## Custom Ambulance Scripts (`bridge/`)

`fs_npcmedic` comes with an unlocked `bridge/` folder. Death states are handled in `IsPlayerDead()`:

```lua
function IsPlayerDead()
    if GetResourceState("wasabi_ambulance") == 'started' and GetResourceMajorVersion("wasabi_ambulance") < 2 then
        return exports.wasabi_ambulance:isPlayerDead()
    elseif GetResourceState("wasabi_ambulance") == 'started' and GetResourceMajorVersion("wasabi_ambulance") >= 2 then
        return (LocalPlayer.state?['wasabi:deathState'] or 0) == 2
    elseif GetResourceState('ak47_ambulancejob') == 'started' then
        return LocalPlayer.state?.dead
    elseif GetResourceState('p_ambulancejob') == 'started' then
        return LocalPlayer.state?.isDead
    elseif GetResourceState('qbx_ambulancejob') == 'started' then
        return exports.qbx_medical:IsDead()
    elseif GetResourceState('tk_ambulancejob') == 'started' then
        return LocalPlayer.state?.isDead
    end
end
```

To support a custom medical script, simply add your resource check to `IsPlayerDead()` inside the `bridge/` folder.
