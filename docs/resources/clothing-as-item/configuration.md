---
title: Clothing As Item Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Clothing As Item script (fs_clothingitem).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Clothing As Item — Configuration

Edit `fs_clothingitem/config/config.lua` and preset files inside `fs_clothingitem/config/preset/` to configure robbery commands, skill checks, hands-up requirements, and item apparel variations.

---

## Complete `config/config.lua` Reference

```lua
config = {}

-- UI Progress Bar Settings
config.progressbar = {
    enable = false,
    circle = true, -- true = circular progress bar from ox_lib | false = linear progress bar
}

config.circle_progressbar = true

-- Robbery Commands & Requirements per Clothing Category
config.RobCommands = {
    ['bag']      = { command = { enable = true, command = 'robbag', description = 'Rob a bag from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['chains']   = { command = { enable = true, command = 'robchain', description = 'Rob a chain from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['decals']   = { command = { enable = true, command = 'robdecal', description = 'Rob a decal from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['ear']      = { command = { enable = true, command = 'robear', description = 'Rob an ear item from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['glass']    = { command = { enable = true, command = 'robglasses', description = 'Rob glasses from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['hat']      = { command = { enable = true, command = 'robhat', description = 'Rob a hat from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['mask']     = { command = { enable = true, command = 'robmask', description = 'Rob a mask from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['pant']     = { command = { enable = true, command = 'robpant', description = 'Rob pants from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['shoes']    = { command = { enable = true, command = 'robshoes', description = 'Rob shoes from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['torso']    = { command = { enable = true, command = 'robtorso', description = 'Rob torso from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['vest']     = { command = { enable = true, command = 'robvest', description = 'Rob vest from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['watches']  = { command = { enable = true, command = 'robwatch', description = 'Rob a watch from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
    ['outfits']  = { command = { enable = true, command = 'roboutfit', description = 'Rob an outfit from a player' }, key = { enable = false, key = 'k' }, needed = { target_handsup = true, can_rob_dead_target = true, minigame = true } },
}

-- Notification Preferences
config.Notification = {
    title = "Clothing Item",
    icon = "fa-solid fa-bag-shopping",
    time = 5000,
    position = "top",
}

config.Textui = {
    icon = "fa-solid fa-bag-shopping",
    iconAnimation = 'bounce',
}
```

---

## Category Preset Structure (`config/preset/`)

Clothing presets are located in `fs_clothingitem/config/preset/`:

| Preset File | Category | Description |
| --- | --- | --- |
| `bag.lua` | Bags | Backpacks and duffel bags |
| `chains.lua` | Chains & Necklaces | Neck jewelry and chains |
| `decals.lua` | Decals & Badges | Badges and chest decals |
| `ear.lua` | Ear Accessories | Earrings and earpieces |
| `glass.lua` | Eyewear | Sunglasses and glasses |
| `hat.lua` | Headwear | Hats, caps, and helmets |
| `mask.lua` | Masks | Facial masks and disguises |
| `outfits.lua` | Full Outfits | Complete outfit presets |
| `pant.lua` | Legs | Pants and jeans |
| `shoes.lua` | Footwear | Shoes and boots |
| `torso.lua` | Tops & Jackets | Shirts, jackets, and torsos |
| `vest.lua` | Vests | Body armor and vests |
| `watches.lua` | Watches | Wrist watches |

### Preset Code Structure Example (`config/preset/chains.lua`)

```lua
config.Preset.chains = {
    animation = {
        on  = { dir = 'clothingtie', anim = 'try_tie_positive_a', delay = 3400 },
        off = { dir = 'clothingtie', anim = 'try_tie_positive_a', delay = 2800 },
    },
    uni = {
        chain_dogtag = {
            male = {
                main = { chain_1 = 141, chain_2 = 0 },
                extras = { arms = 15, arms_2 = 0 },
            },
            female = {
                main = { chain_1 = 141, chain_2 = 0 },
                extras = { arms = 15, arms_2 = 0 },
            },
            whitelist = {
                admingroups = { ['admin'] = true },
                jobgroups = { ['police'] = 0 },
                aces = { ['whitewidow'] = true },
                identifiers = { ['lic:asasasa'] = true },
                characters = { ['char1:asasasasas'] = true }
            },
        },
        chain_richman = {
            male   = { main = { chain_1 = 143, chain_2 = 0 } },
            female = { main = { chain_1 = 112, chain_2 = 0 } },
        },
    },
    non_uni = {
        male   = { chain_1 = 0, chain_2 = 0 },
        female = { chain_1 = 0, chain_2 = 0 },
    },
}
```
