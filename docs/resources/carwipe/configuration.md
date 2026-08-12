---
title: Carwipe Configuration | FWB Studio Docs
description: Configure Carwipe — config files and key options.
---


# Carwipe — Configuration

Edit the config files inside `fs_carwipe/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
config = {} --DON'T touch it otherwise script will be broke

config.zones = {  --permanenet zones that cannot be deleted from inside game and vehicles in this zones will never gonna deleted in any kind of wipe

    { coords = vector3(-843.7990, -1214.2749, 6.5552), radius = 100.0 },   --copy paste it bottom and add more 
--    { coords = vector3(-843.7990, -1214.2749, 6.5552), radius = 100.0 },


    
}

config.default = { -- default settings for the script
    autowipe_time = 60, -- time in minutes for auto wipe
    onlybroken =  true, --{ onlybroken = true means only broken will be deleted / onlybroken = false means all vehicles will be deleted }
    maxradius = 100.0, -- max radius of ingame zones only
    defaultradius = 40.0, -- default radius of ingame zones only
    zonecolor = 1,         -- color of ingame zones only {on map}
    zonecoloralpha = 100,   -- opacity of ingame zones only {on map}
    whitelist = { -- bottom kind will not gonna get deleted
        model = {
            [`ambcivicfine`] = true, --make sure to copy paste it cause its not a string
      
        },
        plate = {
            ['POLICE'] = true, -- upper or lower cause don't matter you can write in any case
            ['DEALER'] = true,
        }
    }
}

config.commands = { -- all commaands permissions
    zonecommand = {
        command = 'carwipezone',
        allowed = {
```

