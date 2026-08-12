---
title: Portable Parking Configuration | FWB Studio Docs
description: Configure Portable Parking — config files and key options.
---


# Portable Parking — Configuration

Edit the config files inside `fs_portableparking/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

