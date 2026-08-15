---
title: Switch Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Switch script (fs_switch) — weapon mappings and durability rules.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426485" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Switch — Configuration

Edit `fs_switch/config/config.lua` to define framework detection, inventory type, weapon conversion pairs, switch durability, and removal command names.

---

## Complete `config/config.lua` Reference

```lua
Config = Config or {}
Config.Lang = Config.Lang or {}

Config.debug = false
Config.locale = 'en'
Config.framework = 'auto' -- 'esx', 'qbcore', 'qbox', or 'auto'
Config.inventory = 'auto' -- 'ox_inventory', 'ak47_inventory', 'qs_inventory', 'ps_inventory', 'qb_inventory', 'ij-inventory', or 'auto'

local seconds = 1000

Config.switch = {
    removecommand = 'r_switch', -- Command to detach switch and revert weapon
    swap = {
        dict = 'missmic4',
        anim = 'michael_tux_fidget',
        duration = 5 * seconds,  -- Installation animation duration
    }
}

-- Switch durability / usage limits
Config.switches = {
    ['fs_switch']      = { limitedUse = { enable = true, count = 2 } },
    ['fs_redswitch']   = { limitedUse = { enable = false, count = 1 } },
    ['fs_blueswitch']  = { limitedUse = { enable = true, count = 2 } },
    ['fs_greenswitch'] = { limitedUse = { enable = true, count = 3 } },
}

-- Weapon conversion mappings
Config.weapons = {
    {
        without_switch = 'WEAPON_COMBATPISTOL',
        with_switch = 'WEAPON_APPISTOL',
        global_switch = true, -- Allows universal switch items
        custom_switch = {     -- Specific switches with unique durability limits
            ['fs_redswitch']   = { limitedUse = { enable = true, count = 20 } },
            ['fs_blueswitch']  = { limitedUse = { enable = true, count = 2 } },
            ['fs_greenswitch'] = { limitedUse = { enable = true, count = 3 } },
        }
    },
    {
        without_switch = 'WEAPON_CARBINERIFLE',
        with_switch = 'WEAPON_SPECIALCARBINE',
    }
}
```

---

## Adding New Weapon Conversions

To convert another weapon:
1. Open `config/config.lua`.
2. Add a new mapping table inside `Config.weapons`:
   ```lua
   {
       without_switch = 'WEAPON_PISTOL',
       with_switch = 'WEAPON_PISTOL50',
       global_switch = true,
   },
   ```
3. Restart `fs_switch`.
