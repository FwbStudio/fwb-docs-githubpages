---
title: Skitz Shoes Store Configuration | FWB Studio Docs
description: Configure Skitz Shoes Store — config files and key options.
---


# Skitz Shoes Store — Configuration

Edit `fs_skitz_V1/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
config.target = false

config.restriction = {
    enable = true,                  -- if enable = true then script will be female only if enable = false then script will work for all kind of ped
    allowedpeds = {

        -- only keep that peds which you wnat to allow to use this script
        [`mp_m_freemode_01`] = true, -- default rp Male ped
        [`player_one`] = true, -- default rp Male ped
        
      --  [`mp_f_freemode_01`] = true, -- default rp female ped
        -- add your cusotm peds
        --    [`s_f_y_hooker_01`] = true,

    }
}

config.jobsonly = {
    enable = false, -- if enable = true then script will work only for bottom jobs enable = false then script will work for all jobs in server
    allowedjobs = {
        ['police'] = true,
     
    }
}

--config.textui = true : script will use textui ui when target is false
--config.textui = false: script will use 2d textuiwhen target is false

config.textui = true

config.range = 2.3 --range for marker or target {from how far u can press E to apply target to ped}

config.shopitems = {
    { label = "Leathers",      name = "fs_leather_materials", price = 75 },
    { label = "Foam Material", name = "fs_shoe_foam",         price = 75 },
    { label = "Raw Cloth",     name = "fs_clothe_materials",  price = 40 },
    { label = "Work Table",    name = "fs_shoes_table",       price = 2500 },
    { label = "Work Phone",    name = "fs_shoesphone",        price = 1500 }

}

config.shops = {
    -- shops / you can even use exports to open or close anymenu according to ur need
    {
        blip = { enable = true, sprite = 120, color = 0, name = "Skitz", scale = 0.7 },
        ped = 'a_m_m_soucent_01',
        coords = vector4(215.1540, -1531.2638, 28.2474, 229.1728),
    },
    -- make more shops under this you can copy upper shop to make more shop
}

config.crafting = {
    ['fs_sky_gliders_plus'] = { -- reward item name
        label = 'Sky Gliders Plus',
        time = 5000,            -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {            -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_breeze_bangs'] = { -- reward item name
        label = 'Breeze Bangs',
        time = 5000,        -- time in ms
        reward_count = { min = 1, max = 10 },
        required = {        -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_tiger_mediums'] = { -- reward item name
        label = 'Tiger Mediums',
        time = 5000,         -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {         -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_galaxy_x'] = { -- reward item name
        label = 'Galaxy X',
        time = 5000,    -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {    -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_sky_walkers'] = { -- reward item name
        label = 'Sky Walkers',
        time = 5000,       -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {       -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_sky_pilots'] = { -- reward item name
        label = 'Sky Pilots',
        time = 5000,      -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {      -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_sky_flyers'] = { -- reward item name
        label = 'Sky Flyers',
        time = 5000,      -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {      -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_sky_gliders'] = { -- reward item name
        label = 'Sky Gliders',
        time = 5000,       -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {       -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_fastrunner_2000'] = { -- reward item name
        label = 'Fast Runner 2000',
        time = 5000,           -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {           -- required
            { item = "fs_shoe_foam",        quantity = 1 },
            { item = "fs_shoe_foam",        quantity = 1 },
            { item = "fs_clothe_materials", quantity = 3 }
        }
    },
    ['fs_speedster_300'] = { -- reward item name
        label = 'Speedster 300',
        time = 5000,         -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {         -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_runner_prime'] = { -- reward item name
        label = 'Runner Prime',
        time = 5000,        -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {        -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_breeze_95s'] = { -- reward item name
        label = 'Breeze 95s',
        time = 5000,      -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {      -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_breeze_100s'] = { -- reward item name
        label = 'Breeze 100s',
        time = 5000,       -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {       -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_breeze_90s'] = { -- reward item name
        label = 'Breeze 90s',
        time = 5000,      -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {      -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_sky_walkers_red'] = { -- reward item name
        label = 'Sky Walkers Red',
        time = 5000,           -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {           -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    ['fs_shadow_yellows'] = { -- reward item name
        label = 'Shadow Yellows',
        time = 5000,          -- time in ms
        reward_count = { min = 1, max = 1 },
        required = {          -- required
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },


}

config.selling = {
    phone = {
        item = {
            enable = true, --- make it enable = false to use disable item to open phone
            item = 'fs_shoesphone',
        },
        command = {
            enable = false, --- make it enable = true to use command to open phone
            command = 'shoesphone',
        }
    },
    peds = {                     -- for buyers app only
        max_activepeds = 5,      -- max active peds at a time
        generateped = {
            time = 4000,         -- generate a new ped after every 4000 = 4seconds
            count = 1,           -- count = 1 means create 1 ped after every 4000 = 4 seconds only if active peds are less then max_activepeds
            ped_timeout = 30000, -- if ped is not near player after 30 seconds then delete that ped
        }
    },
    buyersitems = { -- use only for buyers app
        { item = 'fs_sky_gliders_plus', price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_breeze_bangs',     price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_tiger_mediums',    price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_galaxy_x',         price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_sky_walkers',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_sky_pilots',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_sky_flyers',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_sky_gliders',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_fastrunner_2000',  price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_speedster_300',    price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_runner_prime',     price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_breeze_95s',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_breeze_100s',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_breeze_90s',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_sky_walkers_red',  price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        { item = 'fs_shadow_yellows',   price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
    },
    delivery = {           -- use only for delivery app
        product_count = 2, -- 2 different product needed to start delivery
        items = {
            { item = 'fs_sky_gliders_plus', price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_breeze_bangs',     price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_tiger_mediums',    price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_galaxy_x',         price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_sky_walkers',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_sky_pilots',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_sky_flyers',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_sky_gliders',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_fastrunner_2000',  price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_speedster_300',    price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_runner_prime',     price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_breeze_95s',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_breeze_100s',      price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_breeze_90s',       price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_sky_walkers_red',  price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
            { item = 'fs_shadow_yellows',   price = { min = 1, max = 10 }, quantity = { min = 1, max = 10 } },
        }
    }
}

config.table = {
    prop = `fs_prop_table_shoes`,
    item = 'fs_shoes_table',
    nearby_distance = 2.0, --if using bigger table then increase it basically it is distance from where center of table to player distance is less then this value then u will able to access that table
    -- crafting animaton of items
    animtion = { dict = 'mini@repair', clip = 'fixing_a_ped' },
 
    -- if create_serverside = true then table will stay even after plyaer leave game or go far from table}
    -- if create_serverside = false then table will might remove after player leave game or go far from table
    create_serverside = false, --{recommened to keep it false}

    progress_circle = {
        -- enable = true, -- if you want to show ox_lib circle progressbar then make it true
        -- enable = false, -- if you you wnat to use ox_lib simple progressbar then do falsea
        enable = false,
        position = 'bottom', -- 'bottom' or 'middle' {only needed if enable = true}
    }
}



config.disablecontrols = {
    onPhoneUse = { 44, 1, 2, 25, 36, 63, 64, 71, 72, 75, 106, 200 },

}

config.deliverylocations = {
    vec3(373.8328, 427.9720, 144.6843),
    vec3(315.6384, 501.9844, 152.1798),
    vec3(128.2986, 566.0015, 182.9800),
    vec3(-516.7256, 433.3788, 96.8078),
    vec3(-968.6490, 436.8183, 79.5717),
    vec3(-1052.1809, 432.2358, 76.0639),
    vec3(-1122.7089, 485.7752, 81.1607),
    vec3(-728.7547, -879.7343, 21.7109),
    vec3(443.2751, -1707.2467, 28.7086),
    vec3(1229.2198, -725.3958, 59.7989),
    vec3(1251.2645, -621.3680, 68.4132),
    vec3(952.6441, -252.3502, 66.9664),
    vec3(-448.8238, -132.6289, 38.0829),
    vec3(-534.3204, -166.3404, 37.3248),
    vec3(-1098.2153, -346.1143, 36.8035),
    vec3(-716.3690, -864.7014, 22.1834),
    vec3(-668.2289, -971.5549, 21.3408),
    vec3(-706.1187, -1036.4200, 15.4240),
    vec3(-986.5771, -1199.3740, 5.0735),
    vec3(-1126.1855, -1171.8801, 1.3576),
    vec3(-1122.2983, -1046.33421, 1.1504),
    vec3(-1351.0392, -1128.5168, 3.1545),
    vec3(-1269.7740, -1296.4608, 3.0042),
}

config.peds = {
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

config.offset = {
    { x = 0.0,   y = 15.0 },
    { x = 0.0,   y = -15.0 },
    { x = 15.0,  y = 0.0 },
    { x = -15.0, y = 0.0 },
    { x = 15.0,  y = 15.0 },
    { x = -15.0, y = 15.0 },
    { x = 15.0,  y = -15.0 },
    { x = -15.0, y = -15.0 },
    { x = 0.0,   y = 25.0 },
    { x = 0.0,   y = -25.0 },
    { x = 25.0,  y = 0.0 },
    { x = -25.0, y = 0.0 },
    { x = 25.0,  y = 25.0 },
    { x = -25.0, y = 25.0 },
    { x = 25.0,  y = -25.0 },
    { x = -25.0, y = -25.0 },
    { x = 0.0,   y = 20.0 },
    { x = 0.0,   y = -20.0 },
    { x = 20.0,  y = 0.0 },
    { x = -20.0, y = 0.0 },
    { x = 20.0,  y = 20.0 },
    { x = -20.0, y = 20.0 },
    { x = 20.0,  y = -20.0 },
    { x = -20.0, y = -20.0 }
}

config.animation = {
    OpenPhone = {
        label = 'Dealing',
        anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
        prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
    },
    UseBuyerApp = {
        label = 'Dealing',
        anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
        prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
    },
    UseDeliveryApp = {
        label = 'Dealing',
        anim = { dict = 'cellphone@', clip = 'cellphone_text_read_base' },
        prop = { model = `prop_npc_phone_02`, bone = 28422, pos = vec3(0, 0, 0), rot = vec3(0, 0, 0) },
    },
    MakingDeal = {
        time = 2000,
        anim = { dict = 'mp_common', clip = 'givetake1_a' },
        prop = { model = `fs_skid_backsack_shoe`, bone = 57005, pos = vec3(0.38, 0.06, 0.01), rot = vec3(-10.0, -110.0, 220.0) },
        anim2 = { dict = 'mp_common', clip = 'givetake1_a' },
        prop2 = { model = `hei_prop_heist_cash_pile`, bone = 57005, pos = vec3(0.13, 0.02, 0.0), rot = vec3(-90.0, 0, 0) },
    }
}

config.deliveryblip = { title = 'Delivery Client', sprite = 286, color = 5, scale = 1.0 }

config.Notification = {
    title = "Skitz",
    icon = "fa-solid fa-bag-shopping",
    time = 5000,
    position = "top",
}

config.Textui = {
    icon = "fa-solid fa-bag-shopping",
    iconAnimation = 'bounce',
}

---- !!!! DO NOT TOUCH BELOW THIS LINE !!!! ----

config.statebag = true -- recommened to keep it true untill we don't let u disable it in discord ticket
```

</div>
