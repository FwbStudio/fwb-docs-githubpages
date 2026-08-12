---
title: Smoking Configuration | FWB Studio Docs
description: Configure Smoking — config files and key options.
---


# Smoking — Configuration

Edit the config files inside `fs_smoking/config/`. Exact keys depend on your package version.

## Config excerpt

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
```

