---
title: Shoes Robbery Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Shoes Robbery script (fs_shoesrobbery) — cop requirements, stores, black market bundles, and player robbery.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426476" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Shoes Robbery — Configuration

Edit `fs_shoesrobbery/config/config.lua` to define store zones, loot tables, active cop counts, player shoe robbery chances, and black market bundle payout prices.

---

## Complete `config/config.lua` Reference

```lua
-- Debug zones visualization
config.zonedebug = false

-- Minimum online police required to start a sneaker store heist
config.active_cop = 0

-- Cooldown in minutes before a store can be robbed again
config.cooldown = 30

-- If true, robbing one store puts ALL stores on cooldown; if false, each store tracks cooldown independently
config.globalcooldown = false

-- Force-finish timeout in minutes if a robber leaves without finishing all points
config.robbery_force_finish_time = 10 

config.progress = {
    time = 10000,                -- Looting duration in ms
    label = "Robbing the store", -- Progress bar label
}

-- Police alert dispatch settings
config.policealert = {
    chance = 100, -- Percentage chance (0-100) to alert police on robbery start
}

--[[
    PLAYER-TO-PLAYER SHOE ROBBERY
]]
config.robshoes = {
    enable = true,                                                        -- Allow robbing shoes from real players
    target = { title = 'Rob Shoes', icon = 'fa-solid fa-shoe-prints' },
    cooldown = 60,                                                        -- Cooldown in minutes per victim
    required_handsup = false,                                             -- Require victim to have hands up
    non_shoes_clothes = {
        male = { model = 'mp_m_freemode_01', shoes1 = 34, shoes2 = 0 },   -- Barefoot male model
        female = { model = 'mp_f_freemode_01', shoes1 = 35, shoes2 = 0 }, -- Barefoot female model
    },
    rewarditem = {
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
    }
}

--[[
    RESET COMMAND PERMISSIONS
]]
config.resetcommand = {
    enable = true,
    command = 'resetshoesrobbery',
    permission = {
        admingroups = { ['admin'] = true, ['mod'] = true },
        jobgroups = { ['police'] = 3 },
    }
}

--[[
    BLACK MARKET SNEAKER FENCE
]]
config.shoessell = {
    target = { title = 'Black Market', icon = 'fa-solid fa-mask' },
    ped = { coords = vector3(184.1985, -1513.5674, 28.1416), heading = 53.5091, model = 's_m_y_dealer_01' },
    
    -- Price per pair (requires 2 identical shoe items)
    pair_sell = {
        ['fs_rob_sky_gliders_plus'] = { title = 'Sky Gliders Plus (R)', price = 1000 },
        ['fs_rob_breeze_bangs']     = { title = 'Breeze Bangs (R)',     price = 1000 },
        ['fs_rob_tiger_mediums']    = { title = 'Tiger Mediums (R)',    price = 1000 },
        ['fs_rob_galaxy_x']         = { title = 'Galaxy X (R)',         price = 1000 },
        -- additional shoes...
    },
    
    -- Multi-item Collector Bundles
    bundle_sell = {
        {
            title = 'Premium Shoes Bundle',
            price = 5000,
            imagelink = 'https://i.ibb.co/LXchcW3J/1ign.png',
            items = {
                { item = 'fs_rob_sky_gliders_plus', label = 'Sky Gliders Plus (R)', quantity = 2 },
                { item = 'fs_rob_breeze_bangs',     label = 'Breeze Bangs (R)',     quantity = 2 },
                { item = 'fs_rob_tiger_mediums',    label = 'Tiger Mediums (R)',    quantity = 2 },
                { item = 'fs_rob_galaxy_x',         label = 'Galaxy X (R)',         quantity = 2 },
            },
        },
        {
            title = 'Air Bundle',
            price = 7000,
            imagelink = 'https://i.ibb.co/jZZSL9rM/2ign.png',
            items = {
                { item = 'fs_rob_sky_walkers', label = 'Sky Walkers (R)', quantity = 2 },
                { item = 'fs_rob_sky_pilots',  label = 'Sky Pilots (R)',  quantity = 2 },
                { item = 'fs_rob_sky_flyers',  label = 'Sky Flyers (R)',  quantity = 2 },
                { item = 'fs_rob_sky_gliders', label = 'Sky Gliders (R)', quantity = 2 },
            },
        },
    }
}

--[[
    STORE SHELF LOCATIONS & REWARDS
]]
config.stores = {
    ['Premium Store'] = {
        {
            coords = vector3(-714.938, -145.128, 37.341),
            radius = 0.600,
            reward_items = { { item = 'fs_rob_sky_gliders_plus', min = 2, max = 2 } }
        },
        {
            coords = vector3(-715.029, -151.075, 37.468),
            radius = 0.300,
            reward_items = { { item = 'fs_rob_breeze_bangs', min = 2, max = 2 } }
        },
        {
            coords = vector3(-704.278, -157.758, 37.442),
            radius = 0.400,
            reward_items = { { item = 'fs_rob_tiger_mediums', min = 2, max = 2 } }
        },
        {
            coords = vector3(-705.733, -161.077, 36.932),
            radius = 0.300,
            reward_items = { { item = 'fs_rob_galaxy_x', min = 2, max = 2 } }
        },
    },
}
```
