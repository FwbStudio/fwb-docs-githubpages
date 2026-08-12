---
title: Switch Configuration | FWB Studio Docs
description: Configure Switch — config files and key options.
---


# Switch — Configuration

Edit the config files inside `fs_switch/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
Config = Config or {}
Config.Lang = Config.Lang or {}

Config.debug = true
Config.locale = 'en'
Config.framework = 'auto' -- esx, qbcore, qbox, auto
Config.inventory = 'auto' -- ox_inventory, ak47_inventory, qs_inventory, ps_inventory, qb_inventory, ij-inventory, auto


local seconds = 1000

Config.switch = {
    removecommand = 'r_switch',
    swap = {
        dict = 'missmic4',
        anim = 'michael_tux_fidget',
        duration = 5 * seconds
    }
}

Config.switches = {
    ['fs_switch'] = { limitedUse = { enable = true, count = 2 } },
    --['fs_redswitch'] = { limitedUse = { enable = false, count = 1 } },
    --['fs_blueswitch'] = { limitedUse = { enable = true, count = 2 } },
    --['fs_greenswitch'] = { limitedUse = { enable = true, count = 3 } }
}

Config.weapons = {
    {
        without_switch = 'WEAPON_COMBATPISTOL',
        with_switch = 'WEAPON_APPISTOL',
        global_switch = true, -- if true and written its mean global switch support if false or not written its mean only custom switch support
        custom_switch = {     -- if written don't matter global switch enable or not still it work under this weapon
            ['fs_redswitch'] = { limitedUse = { enable = true, count = 20 } },
            ['fs_blueswitch'] = { limitedUse = { enable = true, count = 2 } },
```

