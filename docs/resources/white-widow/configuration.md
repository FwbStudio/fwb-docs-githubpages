---
title: White Widow Configuration | FWB Studio Docs
description: Configure White Widow — config files and key options.
---


# White Widow — Configuration

Edit the config files inside `fs_whitewidow/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
config.target = false -- config.target = true will use coords from config/target.lua and if false then use marker from other configs in config folder

config.Marker = {
    type = 2,
    color = { r = 50, g = 205, b = 50, a = 200 },
    size = { x = 0.2, y = 0.2, z = 0.1 },
    font = 0,
    fontSize = 0.4,
}

config.ShopMarker = {
    type = 27,
    color = { r = 50, g = 205, b = 50, a = 200 },
    size = { x = 1.6, y = 1.6, z = 0.8 },
}


-- config.smoking = true -- if you want to use fs_smoking to smoke items of this script then make it true, if you want to use any custom script to smoke items of this script then make it true
-- config.smoking = false -- if you want to use any custom script to smoke items of this script then make it false

config.smoking = true
```

