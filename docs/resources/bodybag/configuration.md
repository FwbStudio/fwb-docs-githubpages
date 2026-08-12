---
title: Bodybag Configuration | FWB Studio Docs
description: Configure Bodybag — config files and key options.
---


# Bodybag — Configuration

Edit `fs_bodybag/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
-------------------------------------------------------------------------------------------
--- Config for the body bag system
-------------------------------------------------------------------------------------------

config.grave = {
    display_time = 300000,                                                    -- time in ms to display the body = 300000 = 5 minute
    -- item to use for burying the body
    item_needed = 'fs_shovel',                                                -- item to use for digging
    burytime = 5000,                                                          -- time in ms to dig
    deadanim = { dict = 'anim@gangops@morgue@table@', clip = 'body_search' }, -- animation to use while displaying the body
    coffin_box = 'prop_coffin_02b',
    -- display setting for ped attach with coffin
    display_settings = { offset = vector3(0.0, 0.0, 1.2), rotation = vector3(0.0, 0.0, 180.0), bone = 0 }
}

config.furnace = {
    -- put this item into ur shop system
    item_needed = 'fs_ashesemptybag',
    -- after inserting_body_inside player will be kicked/moved to last world depend upon bodybag item
    inserting_body_inside = 30 * 1000, -- time in ms to insert body inside furnace = 30*1000 = 30 seconds

    decompose_time = 300,              -- time in second
    expire_after = 120,                -- time in second

    -- dead_opp_pack can be useable if your  using our Smoking Script : https://youtu.be/2iYqOx_Pka8
    dead_opp_pack = 'fs_deadopp', -- item name will have dead person name in description
    -- if your using our smoking script in that config u can choose how much smokes u will find in one pack/ otherwise u this in your own smoking script
    dead_opp_pack_qty = 1,        -- quantity of item pack
}

config.lastworld = {
    delete_inventory_items = true,   -- set to true if you want to delete all inventory items of player on going to last world
    heaven_chance = 50,              -- this percentage is {0 - 100}, 60 means 60% chance to go to heaven, 40% chance to go to hell
    cooldown_timer = 10 * 60 * 1000, -- time in ms to last in the world = 10 minutes = 10*60*1000
    heaven = { coords = vector3(680.8724, -11.7546, 2590.8125), heading = 329.7527 },
    hell = { coords = vector3(2031.8000, -2593.6675, 2423.0942), heading = 247.1420 },
    release = {
        { coords = vector3(293.0233, -597.9794, 43.2744), heading = 134.0560 },
        { coords = vector(216.0442, -799.7159, 30.8040),  heading = 128.7217 },
        -- can add more point here
    },
}

config.yards = {
    -------------------------------------------------------------------------------------------------------------------
    -- this is for setting  graveyard
    ['City Grave Yard'] = {                             -- must be unique
        -- this blip will use grave coords
        blip = { sprite = 84, color = 1, scale = 0.8 }, --/remove this line if u don't wanna use it
        shovel = {
            --sphare zone {for target and marker both}
            debug = false, -- set to true if you want to see the zone in game
            coords = vector3(-1760.0, -261.45, 48.8),
            radius = 1.0,
        },
        grave = {
            -- its sphare zzone for target and marker both
            debug = false, -- set to true if you want to see the zone in game
            coords = vector3(-1763.2, -262.8, 47.7),
            radius = 2.7,
        },
        display = {
            coords = vector3(-1766.2903, -260.6998, 49.2289), -- coords of the display
            heading = 333.2251,                               -- heading of the display
        }
    },
    -------------------------------------------------------------------------------------------------------------------
    -- this is for setting furnace
    ['City Furnace Yard'] = {                           -- must be unique
        blip = { sprite = 84, color = 1, scale = 0.8 }, -- blip settings/remove this line if u don't wanna use it
        furnace = {                                     --sphere zone {for target and marker both}
            debug = false,
            coords = vector3(1109.5, -2008.5, 31.0),
            radius = 3.0,
        }
    },
    -------------------------------------------------------------------------------------------------------------------

    -- you can add more here to make more graveyards or furnaces
}

-- don't touch untill u know what you are doing
config.bodybags = { -- offsets for bodybag settings on dead player ped
    ['xm_prop_body_bag'] = { usetime = 5000, bone = 24816, offset = vector3(0.0, -0.4, -1.0), rotation = vector3(0.0, 0.0, 180.0) },

}

-- bodybag items
config.Items = {

    -------------------------------------------------------------
    --    ['fs_deadbodybag'] = {            --  item name of bodybag
    --        deletechar = true,            --if deletechar = true then it will delete character from server database || deletechar = false then only kick player from server {both siuatiopn only done if body bury in any graveyard}
    --        dispatch = true,              -- if dispatch is true then it will send dispatch only on bury{not depend upon delete char or not}
    --        bodybag = 'xm_prop_body_bag', -- make sure use anyone from config.bodybags there you set offset etc all stuff of that prop
    --        allow_burn_everywhere = true, -- set to true if you want to allow burning bodybag everywhere not only furnace
    --    },
    -------------------------------------------------------------
    ['fs_deadbodybag'] = {            --  item name of bodybag
        deletechar = true,            --if deletechar = true then it will delete character from server database || deletechar = false then only kick player from server {both siuatiopn only done if body bury in any graveyard}
        dispatch = true,              -- if dispatch is true then it will send dispatch only on bury{not depend upon delete char or not}
        bodybag = 'xm_prop_body_bag', -- make sure use anyone from config.bodybags there you set offset etc all stuff of that prop
        allow_burn_everywhere = true, -- set to true if you want to allow burning bodybag everywhere not only furnace
    },

    -------------------------------------------------------------
    -- copy upper and make more items {make sure to copy according to lined i made start and end of each item to avoid confusion or mistake of brackets}


}

config.burn_leftover_prop = 'fs_prop_body_burnt' -- prop that will spawn after finalizing burning process in furnace or everywhere

config.burn_everywhere = {
    light_item = 'fs_lighter',      -- item to use for lighting the body
    light_time = 4000,              -- time in ms

    burn_item = 'weapon_petrolcan', -- item to use for burning the body
    burn_time = 4000,               -- time in ms


    decompose_time = 300, -- time in second
    expire_after = 120,   -- time in second
}

-- news system settings
config.news = {
    enabled = true,   -- set to true if you want to use news system
    time = 40 * 1000, -- time in ms to display the news = 40*1000 = 40 seconds
    announcement = 'Funeral Announcement',
    msg = 'Unfortunately we have lost another soul of %s',
    footer = "He is now in %s .Came in %s to pay your last respects.",
}


config.dispatch = {
    enabled = true,
    jobs = { 'police', 'ambulance' },                       -- jobs that will receive the dispatch
    callcode = { Code = '10-10', Title = 'BodyBag Scene' }, -- call code for the dispatch
    message = 'A body has been found at %s. Please respond to the scene.',
    flashes = true,                                         -- set to true if you want to use flashes on the blip
    icon = 'fa-solid fa-skull-crossbones',                  -- icon for the dispatch
    blip = {
        Sprite = 488,
        Scale = 1.5,
        Colour = 1,
        Flashes = true,
        Text = 'BodyBag Scene',
        Time = 60000, -- ms
        radius = 0,
    }

}

config.Notification = { title = "BodyBag", icon = "fa-solid fa-skull-crossbones", time = 5000, position = "top" }
config.Textui = { icon = "fa-solid fa-skull-crossbones", iconAnimation = 'bounce' }
config.circleprogressbar = true -- set to true if you want to use circle progress bar, false for default progress bar
```

</div>
