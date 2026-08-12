---
title: Useable Foods Configuration | FWB Studio Docs
description: Configure Useable Foods — config files and key options.
---


# Useable Foods — Configuration

Edit the config files inside `fs_useablefoods/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

