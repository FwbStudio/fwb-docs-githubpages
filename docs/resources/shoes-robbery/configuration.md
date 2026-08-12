---
title: Shoes Robbery Configuration | FWB Studio Docs
description: Configure Shoes Robbery — config files and key options.
---


# Shoes Robbery — Configuration

Edit `fs_shoesrobbery/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[*
*
* Config File Start Here
*
]]

-- set to true to see the zones
config.zonedebug = false

-- How many cops need to be online to trigger the robbery
config.active_cop = 0

-- after how many mints the same store can be robbed again
config.cooldown = 30

-- config.globalcooldown = true, after a store has been robbed, no other store can be robbed until config.cooldown time is over
-- config.globalcooldown = false after a store has been robbed, same store can't be robbed again untill config.cooldown time is over but other stores can be robbed
config.globalcooldown = false

--config.robbery_force_finish_time = 10 in minutes, if a player starts robbing and and not robbed all points then after this time the robbery will count as fully finished
config.robbery_force_finish_time = 10 -- when setting this time make sure its more than the total time taken to rob all points in a store

config.progress = {
    time = 10000,                -- time in ms
    label = "Robbing the store", -- label for the progress bar
}


-- dispatch code can be modified in fs_shoesrobbery/client/unlocked.lua
config.policealert = {
    chance = 100, -- chance in percentage to alert to cop
}

config.robshoes = {
    enable = true,                                                        --allow player to rob shoes of other real players
    target = { title = 'Rob Shoes', icon = 'fa-solid fa-shoe-prints' },
    cooldown = 60,                                                        -- cooldown in minutes for robbing shoes again from same player
    required_handsup = false,                                             -- set to true if you want player to have hands up to rob shoes
    non_shoes_clothes = {
        male = { model = 'mp_m_freemode_01', shoes1 = 34, shoes2 = 0 },   -- if player is wearing this shoes model then he can't be robbed
        female = { model = 'mp_f_freemode_01', shoes1 = 35, shoes2 = 0 }, -- if player is wearing this shoes model then he can't be robbed
    },
    rewarditem = {                                                        -- anyone item randomly the robber will get on stealing real player shoes
        -- any one item will be given randomly from this list
        { item = 'fs_rob_sky_gliders_plus', min = 1, max = 1 },
        { item = 'fs_rob_breeze_bangs',     min = 1, max = 1 },
        { item = 'fs_rob_tiger_mediums',    min = 1, max = 1 },
        { item = 'fs_rob_galaxy_x',         min = 1, max = 1 },
        { item = 'fs_rob_sky_walkers',      min = 1, max = 1 },
        { item = 'fs_rob_sky_pilots',       min = 1, max = 1 },
        { item = 'fs_rob_sky_flyers',       min = 1, max = 1 },
        { item = 'fs_rob_sky_gliders',      min = 1, max = 1 },
        { item = 'fs_rob_fastrunner_2000',  min = 1, max = 1 },
        { item = 'fs_rob_speedster_300',    min = 1, max = 1 },
        { item = 'fs_rob_runner_prime',     min = 1, max = 1 },
        { item = 'fs_rob_breeze_95s',       min = 1, max = 1 },
        { item = 'fs_rob_breeze_100s',      min = 1, max = 1 },
        { item = 'fs_rob_breeze_90s',       min = 1, max = 1 },
        { item = 'fs_rob_sky_walkers_red',  min = 1, max = 1 },
        { item = 'fs_rob_shadow_yellows',   min = 1, max = 1 },
        -- item to give to robber on successful robbery
        --{ item = 'shoes1', min = 50, max = 150} -- item to give to robber on successful robbery
    }
}

config.resetcommand = {
    enable = true,
    command = 'resetshoesrobbery',
    permission = {
        admingroups = {
            ['admin'] = true, -- admin group can reset robbery
            ['mod'] = true,   -- mod group can reset robbery
        },
        jobgroups = {
            ['police'] = 3, -- police job rank 3 or higher will able to reset the robbery
        },
        aces = {
            -- ['shoesstorerobbery'] = true, -- if you want to use ace permission u can uncommment this
        },
        identifiers = {
            -- ['license:1c17a180cdad995xxxxxx0ed95569b9e6a'] = true, -- can get this from txadmin player list support almost all those identifiers related to player
            -- ['discord:487249031102332929'] = true,                 -- can get this from txadmin player list support almost all those identifiers related to player
        },
        characters = {
            -- ['char1:1c17a180cdad9957sdsdsdsdsf0ed95569b9e6a'] = true, -- esx users table identifier support
            -- ['DVD44243'] = true,                                      -- qb players table citizen id support
        }
    }
}

config.shoessell = {
    target = { title = 'Black Market', icon = 'fa-solid fa-mask' },
    ped = { coords = vector3(184.1985, -1513.5674, 28.1416), heading = 53.5091, model = 's_m_y_dealer_01' },
    pair_sell = { -- this sell is paid means the price of written here is 2 item of same kind cause shoes will be in pair of 2

        ['fs_rob_sky_gliders_plus'] = { title = 'Sky Gliders Plus (R)', price = 1000 },
        ['fs_rob_breeze_bangs'] = { title = 'Breeze Bangs (R)', price = 1000 },
        ['fs_rob_tiger_mediums'] = { title = 'Tiger Mediums (R)', price = 1000 },
        ['fs_rob_galaxy_x'] = { title = 'Galaxy X (R)', price = 1000 },
        ['fs_rob_sky_walkers'] = { title = 'Sky Walkers (R)', price = 1000 },
        ['fs_rob_sky_pilots'] = { title = 'Sky Pilots (R)', price = 1000 },
        ['fs_rob_sky_flyers'] = { title = 'Sky Flyers (R)', price = 1000 },
        ['fs_rob_sky_gliders'] = { title = 'Sky Gliders (R)', price = 1000 },
        ['fs_rob_fastrunner_2000'] = { title = 'Fastrunner 2000 (R)', price = 1000 },
        ['fs_rob_speedster_300'] = { title = 'Speedster 300 (R)', price = 1000 },
        ['fs_rob_runner_prime'] = { title = 'Runner Prime (R)', price = 1000 },
        ['fs_rob_breeze_95s'] = { title = 'Breeze 95s (R)', price = 1000 },
        ['fs_rob_breeze_100s'] = { title = 'Breeze 100s (R)', price = 1000 },
        ['fs_rob_breeze_90s'] = { title = 'Breeze 90s (R)', price = 1000 },
        ['fs_rob_sky_walkers_red'] = { title = 'Sky Walkers Red (R)', price = 1000 },
        ['fs_rob_shadow_yellows'] = { title = 'Shadow Yellows (R)', price = 1000 },

    },
    bundle_sell = {
        {
            title = 'Premium Shoes Bundle',
            price = 5000,
            imagelink = 'https://i.ibb.co/LXchcW3J/1ign.png',                                       --put image link here
            items = {
                { item = 'fs_rob_sky_gliders_plus', label = 'Sky Gliders Plus (R)', quantity = 2 }, -- quantity two means two item
                { item = 'fs_rob_breeze_bangs',     label = 'Breeze Bangs (R)',     quantity = 2 },
                { item = 'fs_rob_tiger_mediums',    label = 'Tiger Mediums (R)',    quantity = 2 },
                { item = 'fs_rob_galaxy_x',         label = 'Galaxy X (R)',         quantity = 2 },
            },
        },
        {
            title = 'Air Bundle',
            price = 7000,
            imagelink = 'https://i.ibb.co/jZZSL9rM/2ign.png',                             --put image link here
            items = {
                { item = 'fs_rob_sky_walkers', label = 'Sky Walkers (R)', quantity = 2 }, -- quantity two means two item
                { item = 'fs_rob_sky_pilots',  label = 'Sky Pilots (R)',  quantity = 2 },
                { item = 'fs_rob_sky_flyers',  label = 'Sky Flyers (R)',  quantity = 2 },
                { item = 'fs_rob_sky_gliders', label = 'Sky Gliders (R)', quantity = 2 },
            },
        },
        {
            title = 'Sports Bundle',
            price = 8000,
            imagelink = 'https://i.ibb.co/qTLGL4h/3sign.png',                                     --put image link here
            items = {
                { item = 'fs_rob_shadow_yellows',  label = 'Shadow Yellows (R)',  quantity = 2 }, -- quantity two means two item
                { item = 'fs_rob_sky_walkers_red', label = 'Sky Walkers Red (R)', quantity = 2 },
                { item = 'fs_rob_breeze_90s',      label = 'Breeze 90s (R)',      quantity = 2 },
                { item = 'fs_rob_breeze_100s',     label = 'Breeze 100s (R)',     quantity = 2 },
            },
        },

        -- you can make more bundles here
    }
}


config.stores = {
    ['Premium Store'] = {
        -- zones under Premium Store
        {
            coords = vector3(-714.938, -145.128, 37.341),
            radius = 0.600,
            reward_items = {
                { item = 'fs_rob_sky_gliders_plus', min = 2, max = 2 },
            }
        },
        {
            coords = vector3(-715.029, -151.075, 37.468),
            radius = 0.300,
            reward_items = {
                { item = 'fs_rob_breeze_bangs', min = 2, max = 2 },
            }
        },
        {
            coords = vector3(-704.278, -157.758, 37.442),
            radius = 0.400,
            reward_items = {
                { item = 'fs_rob_tiger_mediums', min = 2, max = 2 },
            }
        },
        {
            coords = vector3(-705.733, -161.077, 36.932),
            radius = 0.300,
            reward_items = {
                { item = 'fs_rob_galaxy_x', min = 2, max = 2 },
            }
        },
    },
}
```

</div>
