---
title: Fraud System v1 Configuration | FWB Studio Docs
description: Configure Fraud System v1 — config files and key options.
---


# Fraud System v1 — Configuration

Edit the config files inside `fs_fraud_v1/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
Config = {}

--if u don't have jarry in fuel station then as 'weapon_petrolcan' as item or weapon according to ur inventory into any shop
Config.InfinteFuel = false -- no need jarry can to refuel

-- increase in this fuelConsumption will consume fuel faster
-- decrease in this fuelcnsumption value will consume fuel slower
Config.FuelConsumption = 1  -- defult = 1 mean fuel Consumption per mintue 1 from total fuel 100 so 100% filled generator will run 100 mints

Config.RemoveFuelCan = true -- remove fuel can from player after refill done

Config.PickupAllowed = {    -- items can be pickup back if once placed?
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true
}

Config.JobOnly = false     -- work only under job
Config.JobName = 'scammer' -- jobname only work if Config.JobOnly will be true

-- Config.RemoveOnUse = true --means remove item from inventory on use like laptop , printer,generator,skimmer
-- onfig.RemoveOnUse = false --don't remove item from inventory on use like laptop , printer,generator,skimmer
Config.RemoveOnUse = true

Config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,

    place = 38,   -- E
    cancel = 177, -- H
    pickup = 47,  -- G
}
```

