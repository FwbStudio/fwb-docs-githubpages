---
title: Items Placeables Configuration | FWB Studio Docs
description: Configure Items Placeables — config files and key options.
---


# Items Placeables — Configuration

Edit `fs_placeables/config/config.lua` in your download.

<div class="fwb-config-block">

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

Config.Speed = {
    rotate = 1.5, -- rotate left right
    move = 0.01,  -- move up down
}

Config.MaxFar = 5.0           -- max far can be a player place object from its current location at the time of placeable

Config.ContinuePlacing = true -- continue placing items if player has more quanitty

-- incase any food using more then 1 prop then script will place top first prop as placeable prop

Config.defaultprop = `hei_prop_heist_box` -- if u want to change this please rename prop name to avoid errors

Config.PropAplha = 100                    -- make it 0 if u want don't want color round prop

-- Whether or not to disable item stacking (placing items on top of other items)
Config.disallowItemStacking = false

-- for any fs food bussiness you don't have to make anything placeable support is added by default
Config.Items = {
    -- if you want to run these default items then make sure u add these items into your server items list and images too or keep them commented like they are now

    --[[

    ['water_bottle'] = {
        [1] = `prop_ecola_can`,
    },

    ['burger'] = {
        [1] = `prop_cs_burger_01`,
    },

    ['cola'] = {
        [1] = `prop_ecola_can`,
    },

    ['weed_block'] = {
        [1] = `prop_weed_block_01`,
    },


    ['cone'] = {
        [1] = `prop_roadcone01b`,
    },

    ['cylinder'] = {
        [1] = `prop_gascyl_01a`,
    },
    ['case_1'] = {
        [1] = `prop_idol_case`,
    },

    ['barrier'] = {
        [1] = `prop_barrier_work01b`,
    },
    ]]

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
    --add items here if you want any item placeable


}
```

</div>
