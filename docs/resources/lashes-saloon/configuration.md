---
title: Lashes Saloon Configuration | FWB Studio Docs
description: Configure Lashes Saloon — config files and key options.
---


# Lashes Saloon — Configuration

Edit the config files inside `fs_lashessaloon/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--========================================================--
--====================  ⚙️✨ CONFIGURATION ✨⚙️  ====================--

--! Bottom to select in which slot you have lashes added by default we added in 8 which are for decals

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


-- Here you can add more lashes to the menu
config.Lashes = {
    ComponentId = 7, -- not touching
    Numbers = {
        --  { id = clotheid, max = maximumtexture},
        {id = 1, max = 4},
        {id = 2, max = 4},
        {id = 3, max = 4},
        {id = 4, max = 4}, 
        {id = 5, max = 4},
        {id = 6, max = 4},
        {id = 7, max = 4},
        {id = 11, max = 4},
        {id = 12, max = 4},
        {id = 13, max = 4},
```

