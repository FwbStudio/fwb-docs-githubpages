---
title: Skitz Shoes Store Configuration | FWB Studio Docs
description: Configure Skitz Shoes Store — config files and key options.
---


# Skitz Shoes Store — Configuration

Edit the config files inside `fs_skitz_V1/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
config.target = false

config.restriction = {
    enable = true,                  -- if enable = true then script will be female only if enable = false then script will work for all kind of ped
    allowedpeds = {

        -- only keep that peds which you wnat to allow to use this script
        [`mp_m_freemode_01`] = true, -- default rp Male ped
        [`player_one`] = true, -- default rp Male ped
        
      --  [`mp_f_freemode_01`] = true, -- default rp female ped
        -- add your cusotm peds
        --    [`s_f_y_hooker_01`] = true,

    }
}

config.jobsonly = {
    enable = false, -- if enable = true then script will work only for bottom jobs enable = false then script will work for all jobs in server
    allowedjobs = {
        ['police'] = true,
     
    }
}

--config.textui = true : script will use textui ui when target is false
--config.textui = false: script will use 2d textuiwhen target is false

config.textui = true

config.range = 2.3 --range for marker or target {from how far u can press E to apply target to ped}

config.shopitems = {
    { label = "Leathers",      name = "fs_leather_materials", price = 75 },
    { label = "Foam Material", name = "fs_shoe_foam",         price = 75 },
```

