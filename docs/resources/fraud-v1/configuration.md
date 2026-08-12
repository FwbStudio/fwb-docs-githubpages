---
title: Fraud System v1 Configuration | FWB Studio Docs
description: Configure Fraud System v1 — config files and key options.
---


# Fraud System v1 — Configuration

Edit `fs_fraud_v1/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
Config = {}

--if u don't have jarry in fuel station then as 'weapon_petrolcan' as item or weapon according to ur inventory into any shop
Config.InfinteFuel = false -- no need jarry can to refuel

-- increase in this fuelConsumption will consume fuel faster
-- decrease in this fuelcnsumption value will consume fuel slower
Config.FuelConsumption = 1  -- defult = 1 mean fuel Consumption per mintue 1 from total fuel 100 so 100% filled generator will run 100 mints

Config.RemoveFuelCan = true -- remove fuel can from player after refill done

Config.PickupAllowed = {    -- items can be pickup back if once placed?
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true
}

Config.JobOnly = false     -- work only under job
Config.JobName = 'scammer' -- jobname only work if Config.JobOnly will be true

-- Config.RemoveOnUse = true --means remove item from inventory on use like laptop , printer,generator,skimmer
-- onfig.RemoveOnUse = false --don't remove item from inventory on use like laptop , printer,generator,skimmer
Config.RemoveOnUse = true

Config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,

    place = 38,   -- E
    cancel = 177, -- H
    pickup = 47,  -- G
}

Config.Speed = {
    rotate = 1.5,  -- rotate left right
    move = 0.01,   -- move up down
}

Config.MaxFar = 10.0 -- how much far a player can move object in placement phase

-- ox inventory = 'nui://ox_inventory/web/images/'
-- qs inverse  = 'nui://qs-inventory/html/images/'
-- or u can add according to ur inventory icon path
Config.ImagePath = 'nui://ox_inventory/web/images/' --image path for ox lib context icon please enter ur inventory path correctly

Config.Items = {
    blankcard = 'fs_blankcard',
    laptop = 'fs_laptop',
    skimmer = 'fs_skimmer',
    printer = 'fs_printer',
    generator = 'fs_generator',
    usb = 'fs_usb',
    clonnedcard = 'fs_clonnedcard',
    whiteslip = 'fs_whiteslip',
    stolenCard = 'fs_stolencard',
    forgedcheque = 'fs_forgedcheque'
}

Config.Shops = {
    [1] = {
        enable = true,
        id = 1, -- don't touch it otherwise it gonna broke
        npc = { model = 'ig_lifeinvad_01', invinsible = true },
        coords = vector4(-657.5576, -854.6655, 24.5075, 3.0106),
        account = 'money',                                               -- 'money', 'black_money','marked_bills' --{incase of qb marked_bills make sure to setup it in fs_bridge config}
        items = {
            { label = 'Printer',   name = 'fs_printer',   price = 100 }, --will charge player for this item
            { label = 'Generator', name = 'fs_generator', price = 150 }, --will charge player for this item
            { label = 'Laptop',    name = 'fs_laptop',    price = 200 }, --will charge player for this item
            --uncoment bottom line if you don't have any fuel can supported script
            --        { label = 'Fuel Can', name = 'WEAPON_PETROLCAN', price = 10 }, --will charge player for this item
        }
    },
    [2] = {
        enable = true,
        id = 2, -- don't touch it otherwise it gonna broke
        npc = { model = 'a_m_m_farmer_01', invinsible = true },
        coords = vector4(995.6941, -1855.3029, 31.0398, 180.6734),
        account = 'money',                                             -- 'money', 'black_money','marked_bills' --{incase of qb marked_bills make sure to setup it in fs_bridge config}
        items = {
            { label = 'White Slip', name = 'fs_whiteslip', price = 10 }, --will charge player for this item

        }
    },
    [3] = {
        enable = true,
        id = 3, -- don't touch it otherwise it gonna broke
        npc = { model = 'a_m_m_socenlat_01', invinsible = true },
        coords = vector4(-668.4225, -971.1768, 22.3409, 7.0597),
        account = 'money', -- 'money', 'black_money','marked_bills' --{incase of qb marked_bills make sure to setup it in fs_bridge config}
        items = {

            { label = 'Skimmer',            name = 'fs_skimmer',    price = 60 }, --will charge player for this item
            { label = 'Blank Card',         name = 'fs_blankcard',  price = 10 }, --will charge player for this item
            { label = 'Info Usb',           name = 'fs_usb',        price = 40 }, --will charge player for this item
            { label = 'Stolen Credit Card', name = 'fs_stolencard', price = 10 }, --will charge player for this item
        }
    },
    [4] = {
        enable = true,
        id = 4, -- don't touch it otherwise it gonna broke
        npc = { model = 'u_m_m_bankman', invinsible = true },
        coords = vector4(250.6103, 207.7793, 106.2868, 339.6009),
        account = 'money', -- 'money', 'black_money','marked_bills' --{incase of qb marked_bills make sure to setup it in fs_bridge config}
        alert = {
            enable = true, -- enable or disable alert on cheque sell_to_banker
            alert_chance = 50, -- in percentage 50% chance to alert police {only if alert_each_time = false}/ if you want each time alert make it 100
            alert_only_on_freezed = true -- alert police only when banker catch u / freezed_chance > 0
        },

        freezed_chance = 20, -- in percentage 20% chance that banker will catch u and remmove cheque from u / freezed_chance = 0 to disable
        
        items = {                                                                                              -- don't add any here it will not work
            { label = 'Forged Cheque', name = Config.Items.forgedcheque, price = { min = 1500, max = 2000 } }, -- will reward player by taking this item
        }
    }

}

Config.Atm = {
    command = 'insertcc',
    account = 'money',                 --money,bank,black_money
    amount = { min = 1500, max = 2000 }, -- player will get random amount of money
    alert = {
        enable = true,  -- enable or disable alert on atm use
        alert_chance = 50, -- in percentage 50% chance to alert police {only if alert_each_time = false}/ if you want each time alert make it 100
        alert_only_on_ate = false -- alert police only when atm eat ur card / atm_ate_chance > 0
    },

    atm_ate_chance = 0, -- in percentage 20% chance that atm will eat card/ atm_ate_chance = 0 to disable
    models = { 'prop_atm_02', 'prop_atm_01', 'prop_fleeca_atm', 'prop_atm_03' },
    extras = { cheque = true, price = { min = 1500, max = 2000 } },
}

Config.delay = {
    atm = 10 * 1000,    -- 60 seconds delay when u insert card then after 60 seconds u will get money
    banker = 10 * 1000, -- 60 seconds delay when u give cheque to banker and after 60 seconds u will get money
}

Config.Props = {
    [Config.Items.generator] = 'prop_generator_01a',
    [Config.Items.laptop] = 'prop_laptop_jimmy',
    [Config.Items.printer] = 'prop_printer_02',
    [Config.Items.skimmer] = 'fs_prop_sweeper_1'
}

Config.Progressbar = {
    enable = true, -- enable or disable progressbar
    circle = true  -- circle = true = use progress bar lib , false = use progressbar circle from ox lib
}
```

</div>
