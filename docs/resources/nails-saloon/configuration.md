---
title: Nails Saloon Configuration | FWB Studio Docs
description: Configure Nails Saloon — config files and key options.
---


# Nails Saloon — Configuration

Edit the config files inside `fs_nailssaloon/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--========================================================--
--====================  ⚙️✨ CONFIGURATION ✨⚙️  ====================--

--! Bottom to select in which slot you have nails added by default we added in 8 which are for decals

-- ComponentsId = 1,        -- mask
-- ComponentsId = 2,        -- torso 
-- ComponentsId = 3,        -- pants
-- ComponentsId = 4,        -- bags
-- ComponentsId = 5,        -- shoes
-- ComponentsId = 6,        -- undershirt
-- ComponentsId = 7,        -- armor
-- ComponentsId = 8,       -- decals 
-- ComponentsId = 9,       -- hats
-- ComponentsId = 10,       --glasses
-- ComponentsId = 11,       -- watches
-- ComponentsId = 12,       -- braclets
-- ComponentsId = 13,       -- ear

-- Here you can add more nails to the menu
config.Nails = {
    ComponentId = 8, -- not touching
    Numbers = {
        --  { id = clotheid, max = maximumtexture},
        { id = 10, max = 5 },
        { id = 11, max = 7 },
        { id = 14, max = 8 },
        { id = 17, max = 10 },
    }
}

config.Access = {
    command = 'opennailsmenu',
    key = 'F6'
}
```

