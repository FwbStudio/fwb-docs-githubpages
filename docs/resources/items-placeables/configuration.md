---
title: Items Placeables Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Items Placeables script (fs_placeables) — controls, items mapping, and prop models.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Configuration

Edit `fs_placeables/config/config.lua`. Restart `fs_placeables` after every change.

---

## `config/config.lua` Reference

```lua
Config = {}

-- true = ox_target / qb-target, false = floating 3D text near placed props
Config.target = true

Config.Menu = {
    enable = true,          -- placement menu on/off (exports and events work either way)
    command = 'placeprop',  -- chat command that opens the menu
    key = 'F9',             -- default keybind (players can rebind it in GTA settings)
}

-- 3D text settings (used when Config.target = false)
Config.textFont = 4
Config.textScale = 1.0

Config.Controls = {
    up = 172,     -- Arrow Up: raise the prop
    down = 173,   -- Arrow Down: lower the prop
    left = 15,    -- Mouse wheel up: rotate
    right = 14,   -- Mouse wheel down: rotate the other way
    place = 38,   -- E: place the prop
    cancel = 177, -- Backspace / Esc / Right mouse: cancel placement
    pickup = { key = 47, text = 'Press ~g~G~w~ to pickup', size = 0.03 }, -- G, 3D text mode only
}

Config.Context = {           -- target option on placed props
    label = 'Pickup',
    icon = 'fa-solid fa-hand-holding',
    targeticon = 'fa-solid fa-hand-holding',
}

Config.Speed = {
    rotate = 1.5, -- degrees per frame while rotating
    move = 0.01,  -- metres per frame while raising / lowering
}

Config.MaxFar = 5.0                        -- not used in v1.2: the preview follows your aim up to about 10 m
Config.ContinuePlacing = true              -- open the next preview after placing, while the player has enough
Config.defaultprop = `hei_prop_heist_box`  -- prop used when an amount has no model of its own
Config.PropAplha = 100                     -- coloured outline in the preview, 0 = no outline
Config.disallowItemStacking = false        -- true = props can't be placed on other props (vehicles still allowed)

Config.Items = {
    ['money'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['cash'] = { ... },
    ['markedbills'] = { ... },
    ['black_money'] = { ... },

    -- commented examples in the file:
    -- ['water_bottle'] = { [1] = `prop_ecola_can` },
    -- ['burger']       = { [1] = `prop_cs_burger_01` },
    -- ['weed_block']   = { [1] = `prop_weed_block_01` },
    -- ['cone']         = { [1] = `prop_roadcone01b` },
    -- ['barrier']      = { [1] = `prop_barrier_work01b` },
}
```

---

## How `Config.Items` works

```lua
['item_name'] = {
    [amount] = `prop_model`,
},
```

- **`item_name`** is the item's spawn name in your inventory. `money`, `cash`, `black_money` and `markedbills` are handled as framework money ([details](./place-money-ox-inventory#how-money-works-in-fs-placeables)).
- **`amount`** is how many are placed in one prop. Placing removes exactly that many; pickup gives exactly that many back.
- **`prop_model`** can be a backtick hash (`` `prop_name` ``), a string (`'prop_name'`) or a number hash.
- The menu lists the amounts the player can afford.
- When an amount has no entry, the `[1]` entry is used, and if there is none, `Config.defaultprop`.

---

## Target or 3D text

| `Config.target` | Pickup method |
| :--- | :--- |
| `true` | `ox_target` / `qb-target` (through fs_bridge) on every model in `Config.Items` and on `Config.defaultprop` |
| `false` | Floating text `Press G to pickup` when you look at a placed prop within 2.5 m |

Anyone within 2.5 m can pick up a placed prop, not only the player who placed it. Notifications go through fs_bridge, menus use `ox_lib`, and texts are in `locales/en.lua`.

---

## Adding Custom Placeable Items

1. Make sure the item exists in your inventory with an image.
2. Add it to `Config.Items`:
   ```lua
   ['repairkit'] = {
       [1] = `prop_tool_box_04`,
   },
   ```
3. Restart `fs_placeables`. A player carrying `repairkit` can now place a toolbox from the menu.

You can give one item several sizes, for example `[1] = small box, [10] = crate`.

::: warning Model must exist
If the model is not in the game files (or your streamed addon is not loaded), the client prints `Model not found in cdimage for item ...` and nothing is placed. The item is not taken.
:::
