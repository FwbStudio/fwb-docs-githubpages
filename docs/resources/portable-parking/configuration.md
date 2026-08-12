---
title: Portable Parking Configuration | FWB Studio Docs
description: Configure Portable Parking — config files and key options.
---


# Portable Parking — Configuration

Edit `fs_portableparking/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[

    -- Configuration File for Portable Parking Script --

]]

config.language = 'en' -- make sure this exist in locales file else 'en' will be used automatically

config.portableparking = {
    commands = {
        buypark = "vbuy",      -- command to buy portable parking
        vehiclelist = "vlist", -- command to see your parked vehicles
        parkvehicle = "vpark",

        admin = 'vadmin', -- admin command to access admin menu
    },
    vbuyprice = 500,      -- price of portable parking
    vimpoundprice = 2000, -- price to uimpound vehicle from impound
    buy_cooldown = 0,     -- 10 second cooldown

    -- if impount_anywhere = true then player will see a impound in vlist menu
    impound_anywhere = true,

    -- auto_unimpound = false means player have to unimpound
    -- auto_unimpound = true means vehicle will be unimpounded automatically on server restart / resource restart
    auto_unimpound = false,

    Impound = {
        command = 'vimpound',
        jobs = {
            ['police'] = true,
            ['sheriff'] = true,
        }
    }
}

-- for qbcore u have to make sure to add this line in server.cfg

config.admins = { -- for admin access using menu
    ['admin'] = true,
    ['mod'] = true,
}

-- can write in server cfg
-- add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "fs_portableparkingadmin" allow

-- support player identifier means player character id for both esx and qb
config.identifier = {
    ['char1:1c17a180cdad995771fea75248f0ed95569b9e6a'] = true,
    ['AOZ29226'] = true,

}

-- if u don't want to use impounds u can comment all impound in config.impounds
config.impounds = {
    [1] = {
        blip = { enable = true, id = 524, color = 1, scale = 0.7, name = "Impound Lot" },
        coords = vector4(143.5679, -1081.8391, 28.1923, 352.7644),
        radius = 10.0,
    }
}

-- on config.parking player will be able to use Press [E] to open menu
config.parking = { -- incase u wanted to setup some permanent parking too
    [1] = {
        -- if u don't want blip just make enable = false
        blip = { enable = true, id = 357, color = 3, scale = 0.7, name = "Parking Lot" },
        coords = vector4(150.9730, -1082.3186, 28.1924, 359.4603),
        radius = 10.0,
    }
}

Notify = function(text)
    if GetResourceState('fs_notify') ~= 'missing' then
        return exports.fs_notify:show(text, 'info', 5000, 'Portable Parking')
    end
    exports.ox_lib:notify({
        title = 'Portable Parking',
        description = text,
        type = 'info',
        duration = 5000,
        position = 'top',
    })
end


config.marker = {
    Garage = {
        type = 1,
        scale = vector3(2.0, 2.0, 0.2),
        color = { r = 202, g = 17, b = 272, a = 200 },
    },
    Impound = {
        type = 1,
        scale = vector3(2.0, 2.0, 0.2),
        color = { r = 255, g = 0, b = 0, a = 200 },
    },
}
```

</div>
