---
title: Bodybag Configuration | FWB Studio Docs
description: Configure Bodybag — config files and key options.
---


# Bodybag — Configuration

Edit the config files inside `fs_bodybag/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

