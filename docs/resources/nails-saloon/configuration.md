---
title: Nails Saloon Configuration | FWB Studio Docs
description: Configure Nails Saloon — config files and key options.
---


# Nails Saloon — Configuration

Edit `fs_nailssaloon/config/config.lua` in your download.

<div class="fwb-config-block">

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

-- Draw marker types
config.DrawMarker = { type = 20, size = {0.3, 0.3, 0.3}, rgb = {0, 255, 0}}

-- Time animation in miliseconds
config.Animation = { Dict = 'anim@amb@clubhouse@tutorial@bkr_tut_ig3@', Anim = 'machinic_loop_mechandplayer', TimeAnimation = 3000}


-- config.Business_Money_in_Society = true if you want to add the money to the society 
-- config.Business_Money_in_Society = false if you want to add the money to the society 
config.Business_Money_in_Society = true --{only applied on business not on shop markers}

config.Saloons = {
    -- you can see both example are pretty simple
    {
        -- shop under job example
        blip = { enable = true, title = 'Nails Saloon', coords = vector3(382.1680, -1100.5393, 29.4725 ), Sprite = 280, color = 48, scale = 1.0 },
        job = { job_name = 'nail', boss_menu = vector3(383.4969, -1103.8431, 29.4726)}, 
    },

    {
        -- automatic shop example {without any kind of job}
        blip = { enable = true, title = 'Nails Saloon', coords = vector3(382.1680, -1100.5393, 29.4725 ), Sprite = 280, color = 48, scale = 1.0 },
        shop = { price = 5000, shop_menu = vector3(369.7845, -1098.0541, 29.4781)}
    },
    -- add more here 

    
}


config.Notification = {
    Title = 'Nail Saloon',
    icon = "fa-solid fa-shop"
}
```

</div>
