---
title: Smoking Configuration | FWB Studio Docs
description: Configure Smoking — config files and key options.
---


# Smoking — Configuration

Edit `fs_smoking/config/config.lua` in your download.

<div class="fwb-config-block">

```lua
local seconds = 1000 -- don't touch it

config.Keybinds = {
    joint = {
        ['smoke'] = { key = 144, label = '~INPUT_PARACHUTE_DEPLOY~' },
        ['throw'] = { key = 73, label = '~INPUT_VEH_DUCK~' },
        ['give'] = { key = 121, label = '~INPUT_VEH_FLY_ATTACK_CAMERA~' }
    },
    vape = {
        ['smoke'] = { key = 144, label = '~INPUT_PARACHUTE_DEPLOY~' },
        ['throw'] = { key = 73, label = '~INPUT_VEH_DUCK~' },
        ['give'] = { key = 121, label = '~INPUT_VEH_FLY_ATTACK_CAMERA~' },
        ['flavour'] = { key = 250, label = '~INPUT_RELOAD~Refill~' }
    },
}

config.Vape = {
    Smoke_Size = { mouth = 2.5 },
    Item = {
        vape = { max_size = 5, remove_size = 1, mouth_smoke = 2.0, model = "ba_prop_battle_vape_01", bone = 18905, pos = vec3(0.14, -0.02, 0.05), rot = vec3(164, -80, 10) },
        cheapvape = { max_size = 5, remove_size = 1, mouth_smoke = 2.0, model = "fs_prop_cookies_vape_cheap", bone = 18905, pos = vec3(0.14, -0.03, 0.05), rot = vec3(-100, -30, 0) },
        premiumvape = { max_size = 10, remove_size = 2, mouth_smoke = 2.0, model = "fs_prop_cookies_vape_premium", bone = 18905, pos = vec3(0.14, -0.02, 0.05), rot = vec3(-100, 10, -20) }
    },
    Flavours = {
        blueberry_jam_cookie = { label = "Blueberry Jam Cookie", liquid_size = 6 },
        butter_cookie = { label = "Butter Cookie", liquid_size = 6 },
        cookie_craze = { label = "Cookie Craze", liquid_size = 6 },
        get_figgy = { label = "Get Figgy", liquid_size = 6 },
        key_lime_cookie = { label = "Key Lime Cookie", liquid_size = 6 },
        marshmallow_crisp = { label = "Marshmallow Crisp", liquid_size = 6 },
        no_99 = { label = "NO 99", liquid_size = 6 },
        paris_fog = { label = "Paris Fog", liquid_size = 6 },
        pogo = { label = "Pogo", liquid_size = 6 },
        pumpkin_cookie = { label = "Pumpkin Cookie", liquid_size = 6 },
        shamrock_cookie = { label = "Shamrock Cookie", liquid_size = 6 },
        strawberry_jam_cookie = { label = "Strawberry Jam Cookie", liquid_size = 6 }
    }
}


config.Joint = {
    Smoke_Size = { prop = 0.7, mouth = 2.0 },
    ExaleTime = { min = 1, max = 3 },
    -- u can incrase time of auto remove to what ever max seconds u want or inhale count to what ever u want for joint
    AutoRemove = { time = 120 * seconds, inhale = 13 }, -- smoke wil remove on either 120 seconds / or if u smoke conntinous then 13 inhale can be smoked in 120 seconds then will be remove
    CraftingDelay = 15 * seconds,
    lighter = {
        needed = true,
        items = {
            { label = 'Lighter',       name = 'lighter',       count = 1 },
            { label = 'Cheap Lighter', name = 'cheap_lighter', count = 1 },
        }
    },
    UseableJoints = {
        ["cake_mix_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["cereal_milk_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["cheetah_piss_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["gary_payton_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["gelatti_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["georgia_pie_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["jefe_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["white_runtz_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["snow_man_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["whitecherry_gelato_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["blueberry_cruffin_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["fine_china_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["pink_sandy_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["zushi_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["apple_gelato_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["biscotti_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["collins_ave_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["marathon_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["oreoz_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["pirckly_pear_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["runtz_og_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["blue_tomyz_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["ether_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["froties_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["gmo_cookies_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["ice_cream_cake_pack_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["khalifa_kush_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["la_confidential_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["marshmallow_og_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["moon_rock_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["sour_diesel_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["tahoe_og_joint"] = {
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
        ["fs_deadopp"] = { -- only for using as deadopp for fs_bodybag
            model = 'prop_sh_joint_01',
            mouth = { bone = 12844, pos = vec3(-0.01, 0.07, -0.01), rot = vec3(70.0, 70.0, -68.0) },
            hand = { bone = 57005, pos = vec3(0.14, 0.02, 0.0), rot = vec3(0.0, 100.0, 0.0) }
        },
    },
    Joints_Crafting = {
        ['cake_mix'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['cake_mix_joint'] = 5, -- bottom is prop for using of this item for smoking
            },
        },
        ['cereal_milk'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['cereal_milk_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['cheetah_piss'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['cheetah_piss_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['gary_payton'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['gary_payton_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['gelatti'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['gelatti_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['georgia_pie'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['georgia_pie_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['jefe'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['jefe_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['white_runtz'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['white_runtz_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['snow_man'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['snow_man_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['whitecherry_gelato'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['whitecherry_gelato_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['blueberry_cruffin'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['blueberry_cruffin_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['fine_china'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['fine_china_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['pink_sandy'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['pink_sandy_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['zushi'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['zushi_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['apple_gelato'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['apple_gelato_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['biscotti'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['biscotti_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['collins_ave'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['collins_ave_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['marathon'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['marathon_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['oreoz'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['oreoz_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['pirckly_pear'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['pirckly_pear_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['runtz_og'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['runtz_og_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['blue_tomyz'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['blue_tomyz_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['ether'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['ether_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['froties'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['froties_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['gmo_cookies'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['gmo_cookies_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['ice_cream_cake_pack'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['ice_cream_cake_pack_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['khalifa_kush'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['khalifa_kush_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['la_confidential'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['la_confidential_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['marshmallow_og'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['marshmallow_og_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['moon_rock'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['moon_rock_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['sour_diesel'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['sour_diesel_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        },
        ['tahoe_og'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['backwoods_russian_cream'] = 1,
                ['grabba_leaf'] = 1,
                ['paxton_pearl_cigars'] = 1,
                ['banana_backwoods'] = 1,
                ['raw_cone_king'] = 1
            },

            rewards = {
                ['tahoe_og_joint'] = 5, -- bottom is prop for using of this item for smoking
            },

        }
    }
}

config.Notification = { title = "Smoking System", icon = "fa-solid fa-cannabis", time = 5000, position = "top" }
config.circleprogressbar = true -- set to true if you want to use circle progress bar, false for default progress bar
```

</div>
