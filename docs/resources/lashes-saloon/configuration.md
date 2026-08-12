---
title: Lashes Saloon Configuration | FWB Studio Docs
description: Configure Lashes Saloon — config files and key options.
---


# Lashes Saloon — Configuration

Edit `fs_lashessaloon/config/config.lua` in your download.

<div class="fwb-config-block">

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
        {id = 14, max = 1},
        {id = 15, max = 1},
        {id = 33, max = 0}

    }
}

config.Access = {
    command = 'openlashesmenu',
    key = 'F6'
}

-- Draw marker types
config.DrawMarker = { type = 20, size = {0.3, 0.3, 0.3}, rgb = {0, 255, 0}}

config.Animation = { Dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@', Anim = 'machinic_loop_mechandplayer', TimeAnimation = 3000}

config.Saloons = {
    -- you can see both example are pretty simple
    {
        -- shop under job example
        blip = { enable = true, title = 'Lashes Saloon', coords = vector3(117.0506, -1340.3600, 29.4154), Sprite = 280, color = 48, scale = 1.0 },
        job = { job_name = 'lashes', boss_menu = vector3(125.5329, -1332.4996, 29.4132) }, 
    },

 
    {
        -- automatic shop example {without any kind of job}
        blip = { enable = true, title = 'Lashes Saloon', coords = vector3(117.0506, -1340.3600, 29.4154), Sprite = 280, color = 48, scale = 1.0 },
        shop = { price = 5000, shop_menu = vector3(121.1909, -1336.0529, 29.4142)}
    },

    -- add more here 
}
 

config.Notification = {
    Title = 'Lashes Saloon',
    icon = "fa-solid fa-shop"
}
```

</div>
