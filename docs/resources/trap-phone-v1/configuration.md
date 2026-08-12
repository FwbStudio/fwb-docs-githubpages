---
title: Trap Phone v1 Configuration | FWB Studio Docs
description: Configure Trap Phone v1 — config files and key options.
---


# Trap Phone v1 — Configuration

Edit `fs_trapphone_v1/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
Config = Config or {}

local seconds = 1000

-- Options: 'auto', 'esx', 'qbcore', 'qbox'. Missing Config.framework also falls back to auto.
Config.framework = 'auto'

-- Set true if you want debug prints in console.
Config.debug = false

-- Language file from locales/translations.
-- Available locales right now: 'en', 'es', 'fr', 'de', 'pt', 'tr', 'ar'
-- Example: Config.locale = 'en'
Config.locale = 'en'

Config.DefaultDrugProp = {
    model = 'prop_weed_bottle',
    pos = vec3(0.13, 0.02, 0.0),
    rot = vec3(-90.0, 0.0, 0.0),
}

Config.Drugs = {
    -- quantity can be a number or { min = 1, max = 5 }
    -- price can be a number or { min = 50, max = 100 }
    -- prop is optional. If prop is missing, Config.DefaultDrugProp will be used.

    { -- quantity and price both random
        name = 'water',
        quantity = { min = 10, max = 15 },
        price = { min = 10, max = 15 },
    },

    { -- fixed quantity and fixed price
        name = 'wood',
        quantity = 2,
        price = 10,
    },

    { -- fixed quantity and random price
        name = 'bread',
        quantity = 2,
        price = { min = 10, max = 15 },
    },

    { -- custom prop example
        name = 'phone',
        quantity = { min = 10, max = 15 },
        price = { min = 10, max = 15 },
        prop = {
            model = 'prop_cs_script_bottle_01',
            pos = vec3(0.13, 0.02, 0.0),
            rot = vec3(-90.0, 0.0, 0.0),
        },
    },
}

Config.Dispatch = {
    enable = true,
    notifyOnMakingCall = false,
    jobs = {
        ['police'] = true,
        ['sheriff'] = true,
        ['statepolice'] = true,
    }
}

Config.TrapPhone = {
    itemname = 'fs_trapphone',
    removeOnUse = false,
}

-- Limit number of completed drug turns each player can make until resource restart.
Config.LimitedCalls = {
    enable = false,
    limit = 50,
    command = 'checklimit',
}

-- Use 'money', 'bank', or 'black_money'. Keep 'money' for cash on every framework.
Config.Account = 'money'

-- ESX user no need to touch this option.
-- QB/Qbox use this item when Config.Account = 'black_money'.
-- metadata = true  means one bag item stores its value in metadata.worth.
-- metadata = false means the item count is the money amount.
Config.BlackMoney = {
    item = 'markedbills',
    metadata = true,
    bagMaxWorth = 1000, -- only used when metadata = true
}

Config.Reject = {
    enable = true,
    perentage = 10,
    notifyOnReject = true,
}

Config.Robbery = {
    enable = true,
    chance = 10,       -- 1 to 100
    decisionTime = 30, -- seconds
    weapon = `WEAPON_PISTOL`,
    allowDamage = 25,
    fadeOutTime = 5000,
    drunkTime = 20000,
    reclaimDistance = 2.0,
    reclaimTime = 90000,
    attackAccuracy = 55,
    skillCheck = {
        'medium',
        'medium',
        'hard',
    },
    skillKeys = {
        'w',
        'a',
        's',
        'd',
    },
}

-- If enabled, selling is allowed when any configured job reaches its required count.
Config.jobsNeeded = {
    enable = false,
    jobs = {
        ['police'] = 2,
        ['statepolice'] = 4,
    }
}

Config.SellingArea = {
    enable = false,
    center = vector3(263.0207, -1430.7174, 29.3564),
    radius = 1000,
}

Config.buyer = {
    walkspeed = 1.2,
    nextped = 1 * seconds,
    sendtext = 3 * seconds,
    makecall = 5 * seconds,
    cooldown = 10 * seconds,
}

Config.BuyerBlip = {
    enable = true,
    sprite = 280,
    color = 2,
    scale = 0.9,
    shortRange = false,
    title = 'Customer',
}

Config.seller = {
    cangofar = 10,
}

Config.PedList = {
    'g_m_y_ballaeast_01',
    'g_m_y_ballaorig_01',
    'g_m_y_ballasout_01',
    'g_f_y_families_01',
    'g_m_y_famca_01',
    'g_m_y_famdnf_01',
    'g_f_y_vagos_01',
    'g_m_y_mexgoon_01',
    'g_m_y_mexgoon_02',
    'g_f_y_lost_01',
    'g_m_y_lost_01',
    'g_m_y_lost_02',
    'u_m_y_baygor',
    'u_m_y_burgerdrug_01',
    'u_m_y_chip',
}

Config.Offsets = {
    [1] = { x = 0.0, y = 15.0 },
    [2] = { x = 0.0, y = -15.0 },
    [3] = { x = 15.0, y = 0.0 },
    [4] = { x = -15.0, y = 0.0 },
    [5] = { x = 15.0, y = 15.0 },
    [6] = { x = -15.0, y = 15.0 },
    [7] = { x = 15.0, y = -15.0 },
    [8] = { x = -15.0, y = -15.0 },
    [9] = { x = 0.0, y = 25.0 },
    [10] = { x = 0.0, y = -25.0 },
    [11] = { x = 25.0, y = 0.0 },
    [12] = { x = -25.0, y = 0.0 },
    [13] = { x = 25.0, y = 25.0 },
    [14] = { x = -25.0, y = 25.0 },
    [15] = { x = 25.0, y = -25.0 },
    [16] = { x = -25.0, y = -25.0 },
    [17] = { x = 0.0, y = 20.0 },
    [18] = { x = 0.0, y = -20.0 },
    [19] = { x = 20.0, y = 0.0 },
    [20] = { x = -20.0, y = 0.0 },
    [21] = { x = 20.0, y = 20.0 },
    [22] = { x = -20.0, y = 20.0 },
    [23] = { x = 20.0, y = -20.0 },
    [24] = { x = -20.0, y = -20.0 }
}

Config.SendBuyerTextProgressBar = {
    Type = 'circle', -- 'circle' or 'progressBar'
    circle = {
        position = 'bottom',
        anim = {
            dict = 'cellphone@',
            clip = 'cellphone_text_read_base',
        },
        prop = {
            bone = 28422,
            model = `prop_npc_phone_02`,
            pos = vec3(0.0, 0.0, 0.0),
            rot = vec3(0.0, 0.0, 0.0)
        }
    },
    progressBar = {
        anim = {
            dict = 'cellphone@',
            clip = 'cellphone_text_read_base',
        },
        prop = {
            bone = 28422,
            model = `prop_npc_phone_02`,
            pos = vec3(0.0, 0.0, 0.0),
            rot = vec3(0.0, 0.0, 0.0)
        }
    }
}

Config.BuyerCallClientProgressBar = {
    Type = 'circle', -- 'circle' or 'progressBar'
    circle = {
        position = 'bottom',
        anim = {
            dict = 'cellphone@',
            clip = 'cellphone_call_listen_base',
        },
        prop = {
            bone = 28422,
            model = `prop_npc_phone_02`,
            pos = vec3(0.0, 0.0, 0.0),
            rot = vec3(0.0, 0.0, 0.0)
        }
    },
    progressBar = {
        anim = {
            dict = 'cellphone@',
            clip = 'cellphone_call_listen_base',
        },
        prop = {
            bone = 28422,
            model = `prop_npc_phone_02`,
            pos = vec3(0.0, 0.0, 0.0),
            rot = vec3(0.0, 0.0, 0.0)
        }
    }
}
```

</div>
