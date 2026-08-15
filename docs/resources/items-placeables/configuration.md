---
title: Items Placeables Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Items Placeables script (fs_placeables) — controls, items mapping, and prop models.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Configuration

Edit `fs_placeables/config/config.lua` to define placeable item names, corresponding 3D prop models, placement keybinds, rotation speeds, and interaction distances.

---

## Complete `config/config.lua` Reference

```lua
Config = {}

-- Set to true to use target (ox_target / qb-target), or false to use floating 3D text
Config.target = true 

Config.Menu = {
    enable = true,          -- Enable the inventory placement menu
    command = 'placeprop',  -- Chat command to open placement menu
    key = 'F9',             -- Default keybind to open menu
}

-- 3D Text settings (used when Config.target = false)
Config.textFont = 4
Config.textScale = 1.0

Config.Controls = {
    up = 172,     -- Arrow Up: Move prop away
    down = 173,   -- Arrow Down: Move prop closer
    left = 15,    -- Scroll Up / Key: Rotate Left
    right = 14,   -- Scroll Down / Key: Rotate Right
    place = 38,   -- E: Place object down
    cancel = 177, -- Backspace / H: Cancel placement
    pickup = { key = 47, text = 'Press ~g~G~w~ to pickup', size = 0.03 },
}

Config.Context = {
    label = 'Pickup',
    icon = 'fa-solid fa-hand-holding',
    targeticon = 'fa-solid fa-hand-holding',
}

Config.Speed = {
    rotate = 1.5, -- Rotation sensitivity
    move = 0.01,  -- Movement sensitivity
}

Config.MaxFar = 5.0           -- Maximum distance (in meters) a prop can be placed from the player
Config.ContinuePlacing = true -- If true, player can place multiple items consecutively if they carry more
Config.defaultprop = `hei_prop_heist_box` -- Fallback box prop if an item model fails to load
Config.PropAplha = 100        -- Alpha transparency (0-255) of the prop during preview positioning
Config.disallowItemStacking = false -- Set to true to prevent placing items on top of other props

--[[
    ITEMS MAPPING
    Define which inventory item spawns which prop model.
    You can specify multiple quantity thresholds (e.g. for money piles).
]]
Config.Items = {
    ['money'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['cash'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['markedbills'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['black_money'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },

    -- Examples of Custom Items:
    -- ['water_bottle'] = { [1] = `prop_ecola_can` },
    -- ['burger']       = { [1] = `prop_cs_burger_01` },
    -- ['weed_block']   = { [1] = `prop_weed_block_01` },
    -- ['cone']         = { [1] = `prop_roadcone01b` },
    -- ['barrier']      = { [1] = `prop_barrier_work01b` },
}
```

---

## Adding Custom Placeable Items

To make any new item placeable:
1. Open `config/config.lua`.
2. Add your item's spawn name under `Config.Items`:
   ```lua
   ['repairkit'] = {
       [1] = `prop_tool_box_04`,
   },
   ```
3. Restart `fs_placeables`. Any player with `repairkit` in their inventory can now place a toolbox on the ground.
