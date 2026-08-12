---
title: Useable Foods Configuration | FWB Studio Docs
description: Configure Useable Foods — config files and key options.
---


# Useable Foods — Configuration

Edit `fs_useablefoods/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[ =================================================
                            =               Menus Configuration                     =
                            ====================================================== ]] --

Config.Menu = {

    ['MAIN_USE_MENU'] = {
        TextFont = 4,
        TextColor = { 255, 255, 255 },
        Scale = 0.4,
        Position = { x = 0.50, y = 0.95 },
        Background = {
            enable = true,
            color = { r = 35, g = 35, b = 35, alpha = 200 },
        },
    },

    ['MAIN_STOP_USE_MENU'] = {
        TextFont = 4,
        TextColor = { 255, 255, 255 },
        Scale = 0.4,
        Position = { x = 0.50, y = 0.95 },
        Background = {
            enable = true,
            color = { r = 35, g = 35, b = 35, alpha = 200 },
        },
    },

    ['MAIN_NON_USE_MENU'] = {
        TextFont = 4,
        TextColor = { 255, 255, 255 },
        Scale = 0.4,
        Position = { x = 0.50, y = 0.95 },
        Background = {
            enable = true,
            color = { r = 35, g = 35, b = 35, alpha = 200 },
        },
    },

    ['PLACE'] = {
        TextFont = 4,
        TextColor = { 255, 255, 255 },
        Scale = 0.4,
        Position = { x = 0.50, y = 0.95 },
        Background = {
            enable = true,
            color = { r = 35, g = 35, b = 35, alpha = 200 },
        },
    },

    ['INFO'] = {
        TextFont = 4,
        TextColor = { 255, 255, 255 },
        Scale = 0.4,
        Position = { x = 0.94, y = 0.90 },
        Background = {
            enable = true,
            color = { r = 35, g = 35, b = 35, alpha = 200 },
        },
    },
}


--[[ =================================================
                            =               Controls Configuration                =
                            ====================================================== ]] --


Config.Controls = {
    ['Main_Menu'] = {
        Use = 38,         -- Button for consumption
        Stop = 38,        -- Button for stop consumption while in auto eat mode
        AutoConsume = 58, -- Button for automatic consumption
        Give = 10,        -- Button to give the item to the player
        Place = 11,       -- Button to place an item on the ground
        Hide = 105,       -- Button to cancel consumption
    },
    ['Give_Item_Menu'] = {
        Give = 38,  -- Button to confirm that the item will be placed on the ground, Button to confirm the give of the item to the player
        Back = 105, -- Button to return from the menu to place the item on the ground and give the item to the player
    },
    ['Place_Menu'] = {
        Place = 38,
        Up = 172,
        Down = 173,
        Left = 15,
        Right = 14,
        Hide = 105, -- Button to cancel consumption
    },
    ['Pickup_Menu'] = {
        Pickup = 47,
        Size = 0.04, -- text size for pickup
    }
}


--[[ =================================================
                            =               Placeables Configuration                =
                            ====================================================== ]] --


Config.target = false -- only for pickup placed item from ground

Config.Speed = {
    rotate = 1.5, -- rotate left right
    move = 0.01,  -- move up down
}

Config.MaxFar = 15.0    -- max far can be a player place object from its current location at the time of placeable

Config.PropAplha = 100 -- make it 0 if u want don't want color around prop

-- Whether or not to disable item stacking (placing items on top of other items)
Config.disallowItemStacking = false


--[[ =================================================
                            =               Drunk System Configuration                =
                            ====================================================== ]] --


Config.blowertime = 2 --in seconds -- time in which blower will check

Config.Animations = {
    Enable = true,
    Tester_Prop = `prop_inhaler_01`,

    Share_Anim = 'package_dropoff',
    Share_Dict = 'mp_safehouselost@',

    Use_Anim = 'loop',
    Use_Dict = 'mp_player_inteat@pnq'
}

Config.DrunkLevel = {
    [25] = 'green',  --Low Value [25 means upto 25 is low value of drunk]
    [70] = 'yellow', --Mid Value
    [100] = 'red'    --High Value
}

-- according to my calculation if a person drunk to max 100 point then he will be normal in exectly 4 mints
Config.DrunkSettings = {
    --This will reduce alcholic level after certain seconds (In Seconds) and also it trigger random vehicle effect and zoom effect according to this
    Reduce_Interval = 10, -- it needed some math caculation to fix it if u want to change it


    --Reduce Level after each upper seconds
    Reduce_Level = 4.16, -- it needed some math caculation to fix it if u want to change it
}


Config.DrunkEffect = true --Enble/Disable Drunk Effect
Config.Effect_Interval = {
    --You can add more stages if you want
    [10] = {                         --Drunk Level at which this Effect will occur
        Enable = true,               --Enable/Disable Stage
        Random_Fall = true,          --Random Fall Effect
        Animation = 'move_m@drunk@a' --WalkStyle
    },
    [40] = {
        Enable = true,
        Random_Fall = true, --Random Fall Effect
        Animation = 'move_m@drunk@moderatedrunk'
    },
    [80] = {
        Enable = true,
        Random_Fall = true, --Random Fall Effect
        Animation = 'move_m@drunk@slightlydrunk'
    },
    [95] = {                --Heavy Drunk Max Stage
        Enable = true,
        Random_Fall = true, --Random Fall Effect
        Animation = 'move_m@drunk@verydrunk'
    },
}


Config.VehicleInteraction = {    -- these will be random on each reduce level

    { interaction = 7,  time = 800 }, --turn left and accel
    { interaction = 8,  time = 800 }, --turn right and accel
    { interaction = 10, time = 800 }, --turn left and restore wheel pos
    { interaction = 11, time = 800 }, --turn right and restore wheel pos
}

Config.Ui = {
    item = {
        enable = true,
        name = 'fs_drunktester',
    },
    command = {
        enable = true,
        name = 'opentester',
    },
}

--[[ =================================================
                            =               Expiry Date Configuration                =
                            ====================================================== ]] --


-- if you want to disable expiry date for all items set this to false
-- this is also solve issue for qs inventory uers casue there inventory use 1 slot for 1 item so its there choice to enable or disable expiry date
-- if u {Config.EnableExpiryItemFeature = false} it will let items stack on eeach other at the time of purchasing from business {this issue only exit in qs inventory}
Config.EnableExpiryItemFeature = true --{ this option can be used for any inventory}


Config.ExpiredFood = {
    can_use = true,    -- if true player can use expired food
    set_status = {     -- this will apply on each bite of expired food
        hunger = -50,  -- fill hunger status range 0 to 100 / -1 to -100 decrease hunger status
        thirst = -50,  -- fill thirst status range 0 to 100 / -1 to -100 decrease thirst status
        stress = 10,   -- increase stress status range 0 to 100 / -1 to -100 decrease stress status
        alcohol = nil, -- increase drunk status range 0 to 100 / -1 to -100 decrease drunk status
        armor = nil,   -- increase armor status range 0 to 100 / -1 to -100 decrease armor status
    },
    -- for get time in seconds go on google write conver 1 day into seconds
    Global_Expiry = 86400, -- if expiry date is not set for item in bottom it will use this value { its in seconds so by default 1 day = 86400 seconds} simple math just
}

Config.GiveItemOnHide = true -- if you want to give half eaten food to player on hide item set this to true
```

</div>
