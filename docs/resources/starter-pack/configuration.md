---
title: Starter Pack Configuration | FWB Studio Docs
description: Configure Starter Pack — config files and key options.
---


# Starter Pack — Configuration

Edit `fs_starterpack/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[

    Config file

]]

config.debug = false

-- Available locales: en, es, fr, de
config.locale = 'en'

-- Primary mode: autodetect the active framework bridge.
-- Supported manual values: auto, esx, qbcore, qbox.
config.framework = 'auto'

-- Primary mode: autodetect the active inventory bridge.
config.inventory = 'auto'

-- Primary mode: autodetect the active target bridge.
-- Supported manual values: auto, oxtarget, qbtraget.
config.target = 'auto'

config.targetDistance = 2.0

-- Vehicle key bridge selection.
-- Supported manual values: wasabi_carlock, ak47_vehiclekeys, qs-vehiclekeys, vehicles_keys,
-- msk_vehiclekeys, Renewed-Vehiclekeys, qbx_vehiclekeys, qb-vehiclekeys, cd_garage, none.
-- Primary mode: autodetect the active key bridge.
config.vehiclekeys = 'auto'

-- QBCore and Qbox usually treat black money as a physical item instead of a real account.
-- If you use black_money in your rewards, the script will automatically convert it into the item configured below.
config.blackMoney = {
    qbcore = {
        item = 'markedbills', -- item name used on your server: black_money, markedbills, marked_bills, etc.
        metadata = true,      -- true = item worth is stored in metadata.worth; false = item count is the worth
        bag_max_worth = 1000  -- only for metadata = true; large amounts are split into multiple bags
    },
    qbox = {
        item = 'black_money', -- qbox default ox_inventory dirty-money item
        metadata = false,
        bag_max_worth = 1000
    }
}

-- Model buckets used by the gendered starter-pack reward resolver.
config.models = {
    male = {
        [`mp_m_freemode_01`] = true,

        -- you can add more models here
    },
    female = {
        [`mp_f_freemode_01`] = true,

        -- you can add more models here
    }
}

config.starterPack = {
    reward = {
        male = {

            -- Account rewards use common keys: cash, bank, black_money.
            { type = 'account', itemName = 'cash',          quantity = 1000 }, -- example to add money reward
            { type = 'account', itemName = 'black_money',   quantity = 1000 }, -- example to add black money reward
            { type = 'account', itemName = 'bank',          quantity = 1000 }, -- example to add bank reward
            { type = 'item',    itemName = 'burger',        quantity = 5 },    --  example to add item reward
            { type = 'item',    itemName = 'water',         quantity = 5 },    -- example to add item reward
            { type = 'item',    itemName = 'weapon_pistol', quantity = 1 },    -- example to add item reward
            { type = 'vehicle', itemName = 'coquette4', },                     -- example to add vehicle reward (quantity will be ignored for vehicle rewards)
            { type = 'vehicle', itemName = 'coquette4', },
        },
        female = {
            -- Account rewards use common keys: cash, bank, black_money.
            { type = 'account', itemName = 'cash',          quantity = 1000 }, -- example to add money reward
            { type = 'account', itemName = 'black_money',   quantity = 1000 }, -- example to add black money reward
            { type = 'account', itemName = 'bank',          quantity = 1000 }, -- example to add bank reward
            { type = 'item',    itemName = 'burger',        quantity = 5 },    --  example to add item reward
            { type = 'item',    itemName = 'water',         quantity = 5 },    -- example to add item reward
            { type = 'item',    itemName = 'weapon_pistol', quantity = 1 },    -- example to add item reward
            { type = 'vehicle', itemName = 'coquette4', },                     -- example to add vehicle reward (quantity will be ignored for vehicle rewards)
        }
    },
    locations = { -- locations for NPC & vehicle spawn
        {
            blip = { enable = true, sprite = 280, color = 2, scale = 0.7, title = 'Starter Pack' },
            ped = {
                model = 's_f_y_shop_low',
                coords = vec3(-260.7750, -965.9571, 31.2245),
                heading = 123.7938,
                animation = { -- set to false to disable the hello gesture
                    dict = 'gestures@m@standing@casual',
                    name = 'gesture_hello',
                    duration = 2000,
                    flag = 48
                },
                voice = {
                    enable = true,
                    -- leave `name` unset to use the ped model's default voice bank
                    radius = 3.0,
                    enter = 'GENERIC_HI',
                    exit = 'GENERIC_BYE'
                }
            },
            vehicle = { coords = vector3(-235.0216, -987.6241, 29.1975), heading = 339.8381 }
        },
        -- you can add more locations here

    }
}


config.dailyrewards = {
    enable = true,
    -- each character starts on day 1 when their reward timeline is first created
    -- only enable whitelist if you want for specific players
    whitelist = {
        enable = false,
        permissions = {
            characters = {
                ['char1:1c17a180cdad995771fea75248f0ed95569b9e6a'] = true, -- canonical format
            }

            -- Legacy direct entries under permissions[...] = true are still supported for compatibility.
        }
    },


    complimentary = {         -- player can claim complimentary reward after certain days of consecutive claiming
        enable = true,
        max_visible_days = 6, -- how many upcoming streak milestones to show in the UI
        reward_item_list = {

            -- if type = 'vehicle' then quantity will be ignored
            -- Account rewards use common keys: cash, bank, black_money.

            { type = 'account', itemName = 'cash',                 quantity = 1000, days = 3 }, --  example to add money reward
            { type = 'account', itemName = 'bank',                 quantity = 1000, days = 5 }, --  example to add bank reward
            { type = 'account', itemName = 'black_money',          quantity = 1000, days = 7 }, --  example to add black_money money reward
            { type = 'item',    itemName = 'phone',                quantity = 1,    days = 9 },
            { type = 'item',    itemName = 'weapon_stone_hatchet', quantity = 1,    days = 11 },
            { type = 'item',    itemName = 'radio',                quantity = 1,    days = 13 },
            { type = 'account', itemName = 'cash',                 quantity = 5000, days = 15 },
            { type = 'vehicle', itemName = 't20',                  days = 30 }, -- example to add vehicle reward (quantity will be ignored for vehicle rewards)

            -- you can add more here according to days
        },
    },
    -- per-character 30-day reward timeline. Day 1 is the player's first reward day.
    fixed_rewards = {
        --[day] = { type = 'type of reward', itemName = 'item name or account name or vehicle model', quantity = amount }
        -- Account rewards use common keys: cash, bank, black_money.
        [1] = { type = 'account', itemName = 'cash', quantity = 500 },
        [2] = { type = 'item', itemName = 'water', quantity = 2 },
        [3] = { type = 'item', itemName = 'burger', quantity = 5 },
        [4] = { type = 'vehicle', itemName = 'scorcher', quantity = 1 },
        [5] = { type = 'account', itemName = 'cash', quantity = 1000 },
        [6] = { type = 'item', itemName = 'bandage', quantity = 5 },
        [7] = { type = 'item', itemName = 'burger', quantity = 10 },
        [8] = { type = 'item', itemName = 'sprunk', quantity = 5 },
        [9] = { type = 'account', itemName = 'black_money', quantity = 5000 },
        [10] = { type = 'item', itemName = 'weapon_pistol', quantity = 1 },
        [11] = { type = 'item', itemName = 'ammo-9', quantity = 10 },
        [12] = { type = 'item', itemName = 'burger', quantity = 5 },
        [13] = { type = 'vehicle', itemName = 'diablous', quantity = 1 },
        [14] = { type = 'account', itemName = 'cash', quantity = 2000 },
        [15] = { type = 'item', itemName = 'burger', quantity = 5 },
        [16] = { type = 'item', itemName = 'phone', quantity = 1 },
        [17] = { type = 'item', itemName = 'weapon_pumpshotgun', quantity = 1 },
        [18] = { type = 'item', itemName = 'ammo-shotgun', quantity = 10 },
        [19] = { type = 'item', itemName = 'radio', quantity = 1 },
        [20] = { type = 'item', itemName = 'burger', quantity = 10 },
        [21] = { type = 'vehicle', itemName = 'coquette4', quantity = 1 },
        [22] = { type = 'item', itemName = 'sprunk', quantity = 10 },
        [23] = { type = 'account', itemName = 'cash', quantity = 3000 },
        [24] = { type = 'item', itemName = 'weapon_smg_mk2', quantity = 1 },
        [25] = { type = 'item', itemName = 'ammo-9', quantity = 10 },
        [26] = { type = 'item', itemName = 'burger', quantity = 5 },
        [27] = { type = 'vehicle', itemName = 'shotaro', quantity = 1 },
        [28] = { type = 'item', itemName = 'sprunk', quantity = 10 },
        [29] = { type = 'account', itemName = 'black_money', quantity = 2000 },
        [30] = { type = 'vehicle', itemName = 'prototipo', quantity = 1 }
    }
}



config.notify = {
    title = 'Starter Pack & Daily Reward',
    icon = "fa-solid fa-gift",
    duration = 5000,
}
```

</div>
