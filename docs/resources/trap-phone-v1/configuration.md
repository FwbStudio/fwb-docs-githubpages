---
title: Trap Phone v1 Configuration | FWB Studio Docs
description: Configure Trap Phone v1 — config files and key options.
---


# Trap Phone v1 — Configuration

Edit the config files inside `fs_trapphone_v1/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
Config = Config or {}

local seconds = 1000

-- Options: 'auto', 'esx', 'qbcore', 'qbox'. Missing Config.framework also falls back to auto.
Config.framework = 'auto'

-- Set true if you want debug prints in console.
Config.debug = false

-- Language file from locales/translations.
-- Available locales right now: 'en', 'es', 'fr', 'de', 'pt', 'tr', 'ar'
-- Example: Config.locale = 'en'
Config.locale = 'en'

Config.DefaultDrugProp = {
    model = 'prop_weed_bottle',
    pos = vec3(0.13, 0.02, 0.0),
    rot = vec3(-90.0, 0.0, 0.0),
}

Config.Drugs = {
    -- quantity can be a number or { min = 1, max = 5 }
    -- price can be a number or { min = 50, max = 100 }
    -- prop is optional. If prop is missing, Config.DefaultDrugProp will be used.

    { -- quantity and price both random
        name = 'water',
        quantity = { min = 10, max = 15 },
        price = { min = 10, max = 15 },
    },

    { -- fixed quantity and fixed price
        name = 'wood',
        quantity = 2,
```

