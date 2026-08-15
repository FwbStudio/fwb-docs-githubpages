---
title: Smoking Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Smoking script (fs_smoking) — keybinds, joint auto-removal, vape flavours, and crafting recipes.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426496" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Smoking — Configuration

Edit `fs_smoking/config/config.lua` to customize smoking keybinds, inhale duration, auto-remove timers, lighter requirements, vape flavors, and rolling recipes.

---

## Configuration Reference Overview

```lua
local seconds = 1000

-- In-Hand Keybinds
config.Keybinds = {
    joint = {
        ['smoke'] = { key = 144, label = '~INPUT_PARACHUTE_DEPLOY~' },
        ['throw'] = { key = 73,  label = '~INPUT_VEH_DUCK~' },
        ['give']  = { key = 121, label = '~INPUT_VEH_FLY_ATTACK_CAMERA~' }
    },
    vape = {
        ['smoke']   = { key = 144, label = '~INPUT_PARACHUTE_DEPLOY~' },
        ['throw']   = { key = 73,  label = '~INPUT_VEH_DUCK~' },
        ['give']    = { key = 121, label = '~INPUT_VEH_FLY_ATTACK_CAMERA~' },
        ['flavour'] = { key = 250, label = '~INPUT_RELOAD~Refill~' }
    },
}

-- Vape Settings & Flavors
config.Vape = {
    Smoke_Size = { mouth = 2.5 },
    Item = {
        vape = { max_size = 5, remove_size = 1, mouth_smoke = 2.0, model = "ba_prop_battle_vape_01", bone = 18905, pos = vec3(0.14, -0.02, 0.05), rot = vec3(164, -80, 10) },
        cheapvape = { max_size = 5, remove_size = 1, mouth_smoke = 2.0, model = "fs_prop_cookies_vape_cheap", bone = 18905, pos = vec3(0.14, -0.03, 0.05), rot = vec3(-100, -30, 0) },
        premiumvape = { max_size = 10, remove_size = 2, mouth_smoke = 2.0, model = "fs_prop_cookies_vape_premium", bone = 18905, pos = vec3(0.14, -0.02, 0.05), rot = vec3(-100, 10, -20) }
    },
    Flavours = {
        blueberry_jam_cookie = { label = "Blueberry Jam Cookie", liquid_size = 6 },
        strawberry_jam_cookie = { label = "Strawberry Jam Cookie", liquid_size = 6 },
        butter_cookie = { label = "Butter Cookie", liquid_size = 6 },
        key_lime_cookie = { label = "Key Lime Cookie", liquid_size = 6 },
        -- additional e-liquids...
    }
}

-- Joint Inhales & Auto-Removal
config.Joint = {
    Smoke_Size = { prop = 0.7, mouth = 2.0 },
    ExaleTime = { min = 1, max = 3 },
    AutoRemove = { time = 120 * seconds, inhale = 13 }, -- Removes after 120s or 13 continuous inhales
    CraftingDelay = 15 * seconds,
    lighter = {
        needed = true,
        items = {
            { label = 'Lighter',       name = 'lighter',       count = 1 },
            { label = 'Cheap Lighter', name = 'cheap_lighter', count = 1 },
        }
    },
    -- Rolling Crafting Recipes
    Joints_Crafting = {
        ['cake_mix'] = {
            required_one_of_this = {
                ['backwoods_grape'] = 1,
                ['backwoods_honey'] = 1,
                ['grabba_leaf'] = 1,
                ['raw_cone_king'] = 1
            },
            rewards = {
                ['cake_mix_joint'] = 5,
            },
        },
    }
}
```
