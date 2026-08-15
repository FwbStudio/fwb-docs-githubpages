---
title: Chop Shop Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Chop Shop script (fs_chopshop).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426481" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Chop Shop — Configuration

Edit `fs_chopshop/config/config.lua` to configure vehicle stripping prices, scrap items, blacklists, police dispatch alerts, and chop shop station locations.

---

## Complete `config.lua` Reference

```lua
Config = Config or {}

Config.framework = 'esx' -- 'esx' or 'qb'
Config.framework_core = { esx = 'es_extended', qb = 'qb-core' }

Config.Debug = false           -- Enable debug print information in console to assist troubleshooting
Config.DeletePermanent = false -- true = permanently delete player-owned vehicles from database upon chopping

Config.AnimTime = 5            -- Part removal animation time (in seconds)

-- Prices paid for individual dismantled vehicle parts & sold vehicle body
Config.Price = {
    door = 20,     -- Price for each door part
    bonnet = 10,   -- Price for bonnet/hood part
    boot = 15,     -- Price for boot/trunk part
    vehicle = 1500 -- Price for remaining vehicle body purchased by NPC (Alan/Siemon)
}

-- Item names received when stripping vehicle parts
Config.items = {
    door = 'fs_door',
    bonnet = 'fs_bonnet',
    boot = 'fs_boot'
}

-- Blacklisted vehicle spawn names (true = blacklisted, cannot be chopped)
Config.blacklistmodels = {
    ['t20'] = false,
    ['blista'] = false,
    ['bifta'] = false,
}

-- Police & law enforcement jobs that receive dispatch alerts when chopping occurs
Config.DispatchJobs = {
    ['police'] = true,
    ['sheriff'] = true,
    ['statepolice'] = true,
}

-- Blacklisted vehicle classes (0 to 22; true = blacklisted, cannot be chopped)
Config.blacklistClasses = {
    [0] = false,  -- Compacts
    [1] = false,  -- Sedans
    [2] = false,  -- SUVs
    [3] = false,  -- Coupes
    [4] = false,  -- Muscle
    [5] = false,  -- Sports Classics
    [6] = false,  -- Sports
    [7] = false,  -- Super
    [8] = false,  -- Motorcycles
    [9] = false,  -- Off-road
    [10] = false, -- Industrial
    [11] = false, -- Utility
    [12] = false, -- Vans
    [13] = false, -- Cycles
    [14] = false, -- Boats
    [15] = false, -- Helicopters
    [16] = false, -- Planes
    [17] = false, -- Service
    [18] = false, -- Emergency
    [19] = false, -- Military
    [20] = false, -- Commercial
    [21] = false, -- Trains
    [22] = false, -- Open Wheel
}

-- Blacklisted vehicle license plate prefixes (true = blacklisted, cannot be chopped)
Config.blacklistplates = {
    ['police'] = true,
    ['admincar'] = false,
    ['ambulance'] = true,
}

-- Chop Shop Station Locations & Settings
Config.Stations = {
    [1] = {
        Blip = { 
            enable = true, 
            coords = vector3(-425.2820, -1688.6230, 19.0219), 
            title = 'Scraper Chop Shop', 
            id = 527, 
            color = 31, 
            scale = 0.7 
        },
        Allowed = { 
            npcvehicles = true,    -- Allow chopping randomly spawned NPC vehicles
            playervehicles = true, -- Allow chopping player-owned vehicles
            alert_police = true    -- Trigger police dispatch alerts when chopping
        },
        need_job = {
            enable = true,      -- Enable minimum active police requirement
            jobname = {         -- Minimum number of active duty police required to chop
                ['police'] = 1,
                ['sheriff'] = 1,
            },
        },
        ScapPoints = {                                             
            startpoint = vector3(-425.2820, -1688.6230, 19.0219),  -- Vehicle dismantling interaction point
            doordrop = vector3(-416.4831, -1677.1935, 19.0291),    -- Drop/store stripped doors
            bootdrop = vector3(-419.5987, -1676.0206, 19.0291),    -- Drop/store stripped boot/trunk
            bonnetdrop = vector3(-423.6266, -1674.7255, 19.0292),  -- Drop/store stripped bonnet/hood
            SellScap = vector3(-413.2837, -1679.3021, 19.0291),    -- Collect money or sell stored parts

            sellSiemon = vector3(-429.2665, -1686.2042, 19.0291),  -- Interaction point to call NPC to buy remaining vehicle
            SiemonSpawn = vector3(-433.3221, -1673.4714, 19.0291), -- NPC spawn point to drive away vehicle body
        },
        -- Optional: Restrict chop shop station to specific job role (e.g. Scraper job)
        Job = { enable = false, name = 'scraper', boss = vector3(-426.3301, -1670.7089, 19.0291) }
    }
}
```

---

## Detailed Option Explanations

### `Config.DeletePermanent`
* **Default:** `false`
* **Description:** When set to `true`, chopping a player-owned vehicle permanently removes the vehicle entry from the database. When set to `false`, the vehicle will not be permanently deleted unless handled by custom garage integrations.

### `Config.AnimTime`
* **Default:** `5`
* **Description:** The duration (in seconds) required for players to perform dismantling animations for doors, bonnets, and boots.

### `Config.Price`
* **Description:** Sets the monetary payouts given for stripped vehicle parts (`door`, `bonnet`, `boot`) and the final vehicle shell purchased by NPC Alan/Siemon (`vehicle`).

### `Config.items`
* **Description:** Defines the inventory item names received by players when removing vehicle parts (`fs_door`, `fs_bonnet`, `fs_boot`). Make sure these items are registered in your inventory.

### `Config.blacklistmodels`, `Config.blacklistClasses`, `Config.blacklistplates`
* **Description:** Prevents specific vehicle models, vehicle classes (e.g. Emergency, Super, Boats), or plate text prefixes (e.g. `POLICE`) from being chopped at stations.

### `Config.Stations`
* **Description:** Configures map locations, blips, police requirement thresholds (`need_job`), drop points for dismantled parts (`doordrop`, `bootdrop`, `bonnetdrop`), scrap selling points, and NPC buyer spawn coordinates (`sellSiemon`, `SiemonSpawn`).
