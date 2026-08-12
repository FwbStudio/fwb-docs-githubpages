---
title: Fraud System v2 Configuration | FWB Studio Docs
description: Configure Fraud System v2 — config files and key options.
---


# Fraud System v2 — Configuration

Edit `fs_fraud_v2/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
--[[*
*
* Config File Start Here
*
]]

config.target = true

--if u don't have jarry in fuel station then as 'weapon_petrolcan' as item or weapon according to ur inventory into any shop
config.InfinteFuel = false -- no need jarry can to refuel

-- config.generator = true -- if this true means generator acting as power source
-- config.generator = false -- if this false means laptop act as power source
config.generator = true

-- increase in this fuelConsumption will consume fuel faster
-- decrease in this fuelcnsumption value will consume fuel slower
config.FuelConsumption = 1  -- defult = 1 mean fuel Consumption per mintue 1 from total fuel 100 so 100% filled generator will run 100 mints

config.RemoveFuelCan = true -- remove fuel can from player after refill done

config.PickupAllowed = {    -- items can be pickup back if once placed?
    generator = true,
    skimmer = true,
    laptop = true,
    printer = true,
    cardshark = true,
    clonejack = true,
    doppel = true,
}

-- config.RemoveOnUse = true --means remove item from inventory on use like laptop , printer,generator,skimmer,cardshark,doppel,clonnedsocialcard
-- config.RemoveOnUse = false --don't remove item from inventory on use like laptop , printer,generator,skimmer,cardshark,doppel,clonnedsocialcard
config.RemoveOnUse = true
config.PickupAdded = true -- pickup added to inventory when u pickup item from ground

config.JobOnly = false    -- work only under job
config.AllowedJobs = {
    ['scammer'] = true,
    -- add more here
}

config.Controls = {
    up = 172,
    down = 173,
    left = 15,
    right = 14,

    place = 38,   -- E
    cancel = 177, -- H
    pickup = 47,  -- G
}

config.Speed = {
    rotate = 1.5, -- rotate left right
    move = 0.01,  -- move up down
}

config.MaxFar = 10.0             -- how much far a player can move object in placement phase

config.circleprogressbar = false -- if true then circle progress bar from ox_lib or normal progressbar

config.Items = {                 -- all items used in this script so if you want to change name just change here
    laptop = 'fs_laptop',
    generator = 'fs_generator',
    fuelcan = 'WEAPON_PETROLCAN', -- can be changed to any item if needed

    nfccard = 'fs_nfccard',
    clonnedcard = 'fs_clonnedcard',
    infousb = 'fs_infousb',
    skimmer = 'fs_skimmer', -- we have old prop yet

    whiteslip = 'fs_whiteslip',
    forgedcheque = 'fs_forgedcheque',
    stolencard = 'fs_stolencard',       -- shop needed
    printer = 'fs_printer',
    contractphone = 'fs_contractphone', -- phone to get stolencard


    cardstock = 'fs_cardstock',
    clonnedgiftcard = 'fs_clonnedgiftcard',
    giftcard = 'fs_giftcard',
    cardshark = 'fs_cardshark',

    softslip = 'fs_softslip',
    clonnedlotteryticket = 'fs_clonnedlotteryticket',
    lotteryticket = 'fs_lotteryticket',
    clonejack = 'fs_clonejack',


    blankcard = 'fs_blankcard',
    clonnedsocialcard = 'fs_clonnedsocialcard',
    stolensocialcard = 'fs_stoleninfoslip',
    doppel = 'fs_doppel',

    fraudtablet = 'fs_fraudtablet'

}

--! Keep in mind you don't add any items in config.Required_Rewards but you can only change number values
config.Required_Rewards = {
    [config.Items.skimmer] = {
        required = { -- required item quantity  to craft reward
            [config.Items.nfccard] = 1,
            [config.Items.infousb] = 1
        },
        reward = { [config.Items.clonnedcard] = 1 } -- reward item quantity
    },
    [config.Items.printer] = {
        required = {
            [config.Items.whiteslip] = 1,
            [config.Items.stolencard] = 1
        },
        reward = { [config.Items.forgedcheque] = 1 },
    },
    [config.Items.cardshark] = {
        required = {
            [config.Items.cardstock] = 1,
            [config.Items.giftcard] = 1
        },
        reward = { [config.Items.clonnedgiftcard] = 2 },
    },
    [config.Items.clonejack] = {
        required = {
            [config.Items.softslip] = 1,
            [config.Items.lotteryticket] = 1
        },
        reward = { [config.Items.clonnedlotteryticket] = 2 },
    },
    [config.Items.doppel] = {
        required = {
            [config.Items.blankcard] = 1,
            [config.Items.stolensocialcard] = 1
        },
        reward = { [config.Items.clonnedsocialcard] = 1 },
    },
}

config.Shops = {
    ['Electornic Shop'] = {
        enable = true,
        ped = { coords = vector4(392.6530, -831.9913, 29.2917, 222.8036), model = 'ig_lifeinvad_01', invinsible = true },

        -- if you don't want blip either make enable = false or you can comment whole bottm line
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },

        -- blackmoney = false : script will use normal cash or Money what ever your server use
        -- blackmoney = true : script will use black money or dirty money what ever your server use
        blackmoney = false, -- blackmoney item will followed by fs_bridge config
        items = {
            { label = 'Generator',      name = config.Items.generator,     price = 1000 },
            { label = 'Printer',        name = config.Items.printer,       price = 1000 },
            { label = 'Laptop',         name = config.Items.laptop,        price = 2000 },
            { label = 'Contract Phone', name = config.Items.contractphone, price = 1000 },
            -- uncomment bottom line if you don't have any fuel can supported script
            --{ label = 'Fuel Can', name = 'WEAPON_PETROLCAN', price = 10 },
        }
    },
    ['Paper Shop'] = {
        enable = true,
        ped = { coords = vector4(995.6941, -1855.3029, 31.0398, 180.6734), model = 'a_m_m_farmer_01', invinsible = true },

        -- if you don't want blip either make enable = false or you can comment whole bottm line
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },

        -- blackmoney = false : script will use normal cash or Money what ever your server use
        -- blackmoney = true : script will use black money or dirty money what ever your server use
        blackmoney = false, -- blackmoney item will followed by fs_bridge config
        items = {
            { label = 'White Slip', name = 'fs_whiteslip', price = 50 },
            { label = 'Soft Slip',  name = 'fs_softslip',  price = 50 },
            { label = 'Card Stock', name = 'fs_cardstock', price = 50 },
        }
    },
    ['Black Accessories Shop'] = {
        enable = true,
        ped = { coords = vector4(145.1111, -2199.7078, 4.6880, 181.6250), model = 'a_m_m_socenlat_01', invinsible = true },

        -- if you don't want blip either make enable = false or you can comment whole bottm line
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },

        -- blackmoney = false : script will use normal cash or Money what ever your server use
        -- blackmoney = true : script will use black money or dirty money what ever your server use
        blackmoney = true, -- blackmoney item will followed by fs_bridge config
        items = {

            { label = 'Skimmer',      name = config.Items.skimmer,     price = 1000 },
            { label = 'Info Usb',     name = config.Items.infousb,     price = 1000 },
            { label = 'Card Shark',   name = config.Items.cardshark,   price = 1000 },
            { label = 'Clonejack',    name = config.Items.clonejack,   price = 1000 },
            { label = 'Doppel',       name = config.Items.doppel,      price = 1000 },
            { label = 'Fraud Tablet', name = config.Items.fraudtablet, price = 3000 },

        }
    },
    ['Blank Card Shop'] = {
        enable = true,
        ped = { coords = vector4(-381.1197, -42.6400, 49.0244, 69.0171), model = 'a_m_m_socenlat_01', invinsible = true },

        -- if you don't want blip either make enable = false or you can comment whole bottm line
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },

        -- blackmoney = false : script will use normal cash or Money what ever your server use
        -- blackmoney = true : script will use black money or dirty money what ever your server use
        blackmoney = true, -- blackmoney item will followed by fs_bridge config
        items = {
            { label = 'Nfc Card',   name = config.Items.nfccard,   price = 50 },
            { label = 'Blank Card', name = config.Items.blankcard, price = 50 },
        }
    },
    ['Gift Card Shop'] = {
        enable = true,
        ped = { coords = vector4(-656.9600, -854.4056, 24.5042, 357.9516), model = 'a_m_m_socenlat_01', invinsible = true },

        -- if you don't want blip either make enable = false or you can comment whole bottm line
        blip = { enable = false, sprite = 1, color = 1, scale = 0.7 },

        -- blackmoney = false : script will use normal cash or Money what ever your server use
        -- blackmoney = true : script will use black money or dirty money what ever your server use
        blackmoney = false, -- blackmoney item will followed by fs_bridge config
        items = {
            { label = 'GiftCard',       name = config.Items.giftcard,      price = 500 },
            { label = 'Lottery Ticket', name = config.Items.lotteryticket, price = 800 },
        }
    },

}

config.Atm = {
    models = { 'prop_atm_02', 'prop_atm_01', 'prop_fleeca_atm', 'prop_atm_03' },

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false, -- blackmoney item will followed by fs_bridge config

    timer = 10000,      -- time in miliseconds in ms to take to animation on atm
    moneychance = 100,  -- chance to get money from banker{ 0-100} 100 means 100% chance to get money from banker

    --alert_onReject_only = true || then police will get alert only if buyer reject item
    --alert_onReject_only = false || then police will get alert on each item sell start
    alert_onReject_only = false,


    item = { label = 'Clonned Card', name = config.Items.clonnedcard, price = { min = 1000, max = 2500 }, quantity = 1 },
    withdraw_cheque = {
        enable = true, -- if true then player can withdraw cheque from atm
        timer = 15000, -- time in miliseconds in ms to take to animation on atm for cheque
        item = { label = 'Withdraw Cheque', name = config.Items.forgedcheque, price = { min = 1000, max = 2500 }, quantity = 1 },
    }
}

config.Banker = {
    peds = {
        { coords = vector4(250.3983, 207.7024, 106.2868, 341.2410), model = 'a_m_y_business_01', invinsible = true, blip = { enable = false, title = 'Banker', sprite = 1, color = 1, scale = 0.7 } },
    },

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false, -- blackmoney item will followed by fs_bridge config

    timer = 10000,      -- time in miliseconds in ms to give cheque to banker
    moneychance = 50,   -- chance to get money from banker{ 0-100} 100 means 100% chance to get money from banker

    --alert_onReject_only = true || then police will get alert only if buyer reject item
    --alert_onReject_only = false || then police will get alert on each item sell start
    alert_onReject_only = false,
    item = { label = 'Forged Cheque', name = config.Items.forgedcheque, price = { min = 1000, max = 2500 }, quantity = 1 },

}

config.GiftExchanger = {

    peds = {
        { coords = vector4(121.7701, -876.8692, 31.1231, 250.4280), model = 'a_m_y_business_01', invinsible = true, blip = { enable = false, title = 'Gift Exchanger', sprite = 1, color = 1, scale = 0.7 } },
    },

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false, -- blackmoney item will followed by fs_bridge config

    timer = 10000,      -- time in miliseconds in ms to take to animation on atm
    moneychance = 50,   -- chance to get money from banker{ 0-100} 100 means 100% chance to get money from banker

    --alert_onReject_only = true || then police will get alert only if buyer reject item
    --alert_onReject_only = false || then police will get alert on each item sell start
    alert_onReject_only = false,

    item = { label = 'Clonned GiftCard', name = config.Items.clonnedgiftcard, price = { min = 500, max = 500 }, quantity = 1 }, -- if min and max are same then it will be fixed price
}

config.LotteryExchanger = {
    peds = {
        { coords = vector4(308.0541, -910.8138, 29.2958, 345.8549), model = 'a_m_y_business_01', invinsible = true, blip = { enable = false, title = 'Lottery Exchanger', sprite = 1, color = 1, scale = 0.7 } },
    },

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false, -- blackmoney item will followed by fs_bridge config

    timer = 10000,      -- time in miliseconds in ms to take to animation on atm
    moneychance = 50,   -- chance to get money from banker{ 0-100} 100 means 100% chance to get money from banker

    --alert_onReject_only = true || then police will get alert only if buyer reject item
    --alert_onReject_only = false || then police will get alert on each item sell start
    alert_onReject_only = false,

    item = { label = 'Clonned Lottery Ticket', name = config.Items.clonnedlotteryticket, price = { min = 800, max = 800 }, quantity = 1 },
}

config.SocialExchanger = {
    peds = {
        { coords = vector4(263.6539, -309.4271, 49.6456, 344.0214), model = 'a_m_y_business_01', invinsible = true, blip = { enable = false, title = 'Social Exchanger', sprite = 1, color = 1, scale = 0.7 } },
    },

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false, -- blackmoney item will followed by fs_bridge config

    timer = 10000,      -- time in miliseconds in ms to give cheque to banker
    moneychance = 50,   -- chance to get money from banker{ 0-100} 100 means 100% chance to get money from banker

    --alert_onReject_only = true || then police will get alert only if buyer reject item
    --alert_onReject_only = false || then police will get alert on each item sell start
    alert_onReject_only = false,
    item = { label = 'Clonned Social Card', name = config.Items.clonnedsocialcard, price = { min = 1000, max = 2500 }, quantity = 1 },
}

config.contract_phone = {
    remove_on_use = false, -- remove item from inventory on use

    -- blackmoney = false : script will use normal cash or Money what ever your server use
    -- blackmoney = true : script will use black money or dirty money what ever your server use
    blackmoney = false,            -- blackmoney item will followed by fs_bridge config
    timer = 5000,                  -- time in miliseconds in ms to take to animation on purchasing item

    alert_onEach_Purchase = false, -- if true then police will get alert on each item purchase

    -- only work if alert_onEach_Purchase = false
    alert_chance = 50, -- chance to get alert { 0-100} 100 means 100% chance to get alert

    -- if alert_on_usingphone = true then police will get alert when player use phone to get ped
    -- if alert_on_usingphone = false then police will get alert when player use phone to get ped and also when player give cheque to banker
    alert_on_usingphone = true,

    item = { label = 'Stolen Card', name = config.Items.stolencard, price = { min = 1000, max = 2500 }, quantity = 1 },

    invinsible = true, -- if true then ped will invinsible to player

    points = {
        vec4(405.0268, -1748.7028, 29.2799, 122.5766),
        vec4(-109.6634, -1590.5364, 31.9251, 226.5505),
        vec4(-81.2452, -1427.0469, 29.6720, 45.8232),
        vec4(-233.7205, -1492.0140, 32.9599, 256.3004),
        vec4(-329.2263, -1316.9365, 31.4004, 182.7166),
        vec4(37.3050, -1026.7601, 29.5245, 67.4766),
        vec4(-775.5924, -194.8068, 37.2836, 121.9321),
        vec4(-481.3463, -62.4743, 39.9942, 51.7425),
        vec4(-334.4873, -89.6957, 47.0547, 72.9829),
        vec4(-239.3871, -240.0972, 36.6384, 87.3479),
        vec4(112.5943, -275.1132, 46.3335, 72.9456),
        vec4(230.8748, -150.6827, 58.7581, 174.1727),
        vec4(314.1805, -197.3297, 54.2218, 234.8734),
        vec4(358.4421, -326.5321, 46.7010, 256.8027),
        vec4(447.7314, -595.2244, 28.4999, 356.6031),
        vec4(470.0899, -731.0141, 27.4080, 92.4163),
        vec4(450.6314, -847.8163, 27.9982, 279.2787),
        vec4(3.6118, -1215.7142, 26.7031, 271.9090),
        vec4(-61.4590, -1218.4181, 28.7018, 291.8816),
        vec4(-304.8885, -1181.0920, 23.6931, 79.3596),
        vec4(-45.1449, -1289.1827, 29.1901, 275.7023),
        vec4(455.8383, -1298.8911, 29.3349, 5.0149),
        vec4(733.5408, -1269.7998, 27.0369, 87.0789),
        vec4(927.7554, -1212.1394, 25.6656, 193.1262),
        vec4(821.6992, -783.8000, 26.1831, 270.4345),
    },
    pedmodels = {
        'ig_abigail',
        'csb_abigail',
        'u_m_y_abner',
        'a_m_m_afriamer_01',
        'ig_mp_agent14',
        'csb_mp_agent14',
        'csb_agent',
        's_f_y_airhostess_01',
        's_m_y_airworker',
        'u_m_m_aldinapoli',
        'ig_amandatownley',
        'cs_amandatownley',
        's_m_y_ammucity_01',
    }

}

--! configure dispach in fs_bridge docs if not supported by bridge
--! if you don't have any supported dispach bridge will use its own dispach notification
config.policealert = {
    enable = true, -- if true then police will get alert when player give cheque to banker
    title = { title = 'Fraud Activity', code = "10-4" },
    message = 'There is Fraud Activity report in this area',
    blip = { sprite = 161, color = 1, scale = 1.0 }, -- blip sprite color and scale
    jobs = { 'police', 'sheriff' },
}


config.Notification = {
    title = "Fraud System",
    icon = "fa-solid fa-laptop-file",
    time = 5000,
    position = "top",
}

config.Textui = {
    icon = "fa-solid fa-laptop-file",
    iconAnimation = 'bounce',
}


config.props = {
    [config.Items.laptop] = 'prop_laptop_jimmy',
    [config.Items.generator] = 'prop_generator_01a',

    [config.Items.nfccard] = 'fs_prop_sweepcardblank',
    [config.Items.clonnedcard] = 'fs_prop_sweepcardwrt',
    [config.Items.skimmer] = 'fs_prop_sweeper_1',

    --fine to use
    [config.Items.whiteslip] = 'fs_prop_blankpage',
    [config.Items.forgedcheque] = 'fs_prop_printedcheck',
    [config.Items.printer] = 'fs_prop_checkprinter',

    [config.Items.cardstock] = 'fs_prop_giftclean',
    [config.Items.clonnedgiftcard] = 'fs_prop_giftprinted',
    [config.Items.cardshark] = 'fs_prop_cardshark_1',

    [config.Items.softslip] = 'fs_prop_lotteryblankpage',
    [config.Items.clonnedlotteryticket] = 'fs_prop_lotterypaper',
    [config.Items.clonejack] = 'fs_prop_lotteryprinter',

    [config.Items.blankcard] = 'fs_prop_socialcardblank',
    [config.Items.clonnedsocialcard] = 'fs_prop_socialcardprinted',
    [config.Items.doppel] = 'fs_prop_cardprinter',

    [config.Items.fraudtablet] = 'fs_prop_tablet_scam',
}
```

</div>
