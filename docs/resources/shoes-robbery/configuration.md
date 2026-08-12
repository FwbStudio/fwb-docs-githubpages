---
title: Shoes Robbery Configuration | FWB Studio Docs
description: Configure Shoes Robbery — config files and key options.
---


# Shoes Robbery — Configuration

Edit the config files inside `fs_shoesrobbery/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

