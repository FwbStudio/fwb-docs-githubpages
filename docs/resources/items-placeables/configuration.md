---
title: Items Placeables Configuration | FWB Studio Docs
description: Configure Items Placeables — config files and key options.
---


# Items Placeables — Configuration

Edit the config files inside `fs_placeables/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
Config = {}

Config.target = true -- incase of false you will see 3dtext when go near to prop

Config.Menu = {      -- use menu to place inventory item as prop /
    -- if you enable true or false in both cause you can use export to place prop from inventory or from any other script
    enable = true,
    command = 'placeprop',
    key = 'F9',
}

-- Font used for the 3d text
Config.textFont = 4

-- Scale used for the 3d text
Config.textScale = 1.0

Config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,

    place = 38,   -- E
    cancel = 177, -- H
    pickup = { key = 47, text = 'Press ~g~G~w~ to pickup', size = 0.03 },

}

Config.Context = {
    label = 'Pickup',
    icon = 'fa-solid fa-hand-holding',
    targeticon = 'fa-solid fa-hand-holding',
}
```

