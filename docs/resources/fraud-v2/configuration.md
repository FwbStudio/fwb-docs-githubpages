---
title: Fraud System v2 Configuration | FWB Studio Docs
description: Configure Fraud System v2 — config files and key options.
---


# Fraud System v2 — Configuration

Edit the config files inside `fs_fraud_v2/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--[[*
*
* Config File Start Here
*
]]

config.target = true

--if u don't have jarry in fuel station then as 'weapon_petrolcan' as item or weapon according to ur inventory into any shop
config.InfinteFuel = false -- no need jarry can to refuel

-- config.generator = true -- if this true means generator acting as power source
-- config.generator = false -- if this false means laptop act as power source
config.generator = true

-- increase in this fuelConsumption will consume fuel faster
-- decrease in this fuelcnsumption value will consume fuel slower
config.FuelConsumption = 1  -- defult = 1 mean fuel Consumption per mintue 1 from total fuel 100 so 100% filled generator will run 100 mints

config.RemoveFuelCan = true -- remove fuel can from player after refill done

config.PickupAllowed = {    -- items can be pickup back if once placed?
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true,
    cardshark = true,
    clonejack = true,
    doppel = true,
}

-- config.RemoveOnUse = true --means remove item from inventory on use like laptop , printer,generator,skimmer,cardshark,doppel,clonnedsocialcard
-- config.RemoveOnUse = false --don't remove item from inventory on use like laptop , printer,generator,skimmer,cardshark,doppel,clonnedsocialcard
config.RemoveOnUse = true
config.PickupAdded = true -- pickup added to inventory when u pickup item from ground
```

