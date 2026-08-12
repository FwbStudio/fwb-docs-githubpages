---
title: Outfitbag Configuration | FWB Studio Docs
description: Configure Outfitbag — config files and key options.
---


# Outfitbag — Configuration

Edit the config files inside `fs_outfitbag/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--[[

    FwB Studio Outfit Bag Config File

]]

-- unique_bags = true then if player saved outfit in small bag will not gonna get old stored outfits in new small bag
-- unique_bags = false then if player saved outfit in small bag will get old stored outfits in new small bag
config.unique_bags = false -- {if using command or non_item then this setting will be ignored}

-- {clothing item compatiblity will be avilable in next update}
config.clotingitem = false --  make it true if your using fs_clothingitem script to avoid saving outifts that are items in clothingitem script

config.onlyonebag = true   -- if true player can only place 1 bag on ground at a time {not effected on unique bags enabled}

--[[

    NAKED CHARACTER CONFIG

]]

config.character = {
    models = {
        [`mp_m_freemode_01`] = 'M', -- change only if you know what you are doing
        [`mp_f_freemode_01`] = 'F'  -- change only if you know what you are doing
    },
    naked = {
        ----------------------------<Naked Male>----------------------------
        [`mp_m_freemode_01`] = {

            mask_1 = { drawable = 0, texture = 0, palette = 0 },       -- mask
            helmet_1 = { drawable = -1, texture = 0, palette = 0 },    -- helmet
            glasses_1 = { drawable = -1, texture = 0, palette = 0 },   -- gl
            ears_1 = { drawable = -1, texture = 0, palette = 0 },      -- ears_1
            tshirt_1 = { drawable = 15, texture = 0, palette = 0 },    -- t shirt
```

