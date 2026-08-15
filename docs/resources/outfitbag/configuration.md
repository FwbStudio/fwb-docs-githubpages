---
title: Outfit Bag Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Outfit Bag script (fs_outfitbag) — items, commands, job lockers, and clothing exclusions.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfit Bag — Configuration

Edit `fs_outfitbag/config/config.lua` to configure bag modes, slots, job whitelist lockers, character naked fallback clothes, animations, and clothing exclusion rules.

---

## Complete `config/config.lua` Reference

```lua
--[[

    FwB Studio Outfit Bag Config File

]]

-- unique_bags = true: If a player saves outfits in a small bag, they will not see those outfits in a newly purchased small bag
-- unique_bags = false: Saved outfits are linked to the player account across bags of the same type
config.unique_bags = false

-- Set to true if using fs_clothingitem to avoid duplicate saving of itemized clothing
config.clotingitem = false 

-- If true, a player can only place 1 bag on the ground at a time
config.onlyonebag = true

--[[
    NAKED CHARACTER DEFAULTS
]]
config.character = {
    models = {
        [`mp_m_freemode_01`] = 'M',
        [`mp_f_freemode_01`] = 'F'
    },
    naked = {
        [`mp_m_freemode_01`] = {
            mask_1 = { drawable = 0, texture = 0, palette = 0 },
            helmet_1 = { drawable = -1, texture = 0, palette = 0 },
            glasses_1 = { drawable = -1, texture = 0, palette = 0 },
            ears_1 = { drawable = -1, texture = 0, palette = 0 },
            tshirt_1 = { drawable = 15, texture = 0, palette = 0 },
            torso_1 = { drawable = 15, texture = 0, palette = 0 },
            decals_1 = { drawable = 0, texture = 0, palette = 0 },
            bproof_1 = { drawable = 0, texture = 0, palette = 0 },
            arms = { drawable = 15, texture = 0, palette = 0 },
            watches_1 = { drawable = -1, texture = 0, palette = 0 },
            bracelets_1 = { drawable = -1, texture = 0, palette = 0 },
            bags_1 = { drawable = 0, texture = 0, palette = 0 },
            pants_1 = { drawable = 61, texture = 0, palette = 0 },
            shoes_1 = { drawable = 34, texture = 0, palette = 0 },
        },
        [`mp_f_freemode_01`] = {
            mask_1 = { drawable = 0, texture = 0, palette = 0 },
            helmet_1 = { drawable = -1, texture = 0, palette = 0 },
            glasses_1 = { drawable = -1, texture = 0, palette = 0 },
            ears_1 = { drawable = -1, texture = 0, palette = 0 },
            tshirt_1 = { drawable = 15, texture = 0, palette = 0 },
            torso_1 = { drawable = 15, texture = 0, palette = 0 },
            decals_1 = { drawable = 0, texture = 0, palette = 0 },
            bproof_1 = { drawable = 0, texture = 0, palette = 0 },
            arms = { drawable = 15, texture = 0, palette = 0 },
            watches_1 = { drawable = -1, texture = 0, palette = 0 },
            bracelets_1 = { drawable = -1, texture = 0, palette = 0 },
            bags_1 = { drawable = 0, texture = 0, palette = 0 },
            pants_1 = { drawable = 61, texture = 0, palette = 0 },
            shoes_1 = { drawable = 34, texture = 0, palette = 0 },
        }
    }
}

--[[
    PUBLIC BAGS VIA COMMANDS (NON-ITEM MODE)
]]
config.non_item = {
    enable = true,  -- Enable or disable opening bags via commands
    commands = {
        [1] = { command = 'outfitbag', bag = 'fs_small_bag' },
        [2] = { command = 'ob', bag = 'fs_small_bag' },
    }
}

-- Timeout in minutes before unattended bags on the ground are deleted
config.bag_timeout = 10 

--[[
    PUBLIC BAGS AS INVENTORY ITEMS
]]
config.public_bags = {
    enable = true, -- Enable usable item logic
    items = {
        ['fs_small_bag'] = {
            label = 'Small Outfit Bag',
            slots = 5,                         -- Maximum outfit slots
            model = 'fs_prop_outfitbag_small', -- Custom 3D ground prop
        },
        ['fs_medium_bag'] = {
            label = 'Medium Outfit Bag',
            slots = 10,
            model = 'fs_prop_outfitbag_med',
        },
        ['fs_large_bag'] = {
            label = 'Large Outfit Bag',
            slots = 15,
            model = 'fs_prop_outfitbag_large',
        },
    }
}

--[[
    DEVELOPER / ADMIN OUTFIT COPY TOOL
]]
config.command = {
    enable = false,        -- Enable only when setting up job uniforms
    command = 'getoutfit', -- Command to copy current worn clothes to clipboard
}

--[[
    JOB & WHITELIST LOCKER BAGS
]]
config.whitelist_bags = {
    enable = true,
    Bags = {
        ['police_bag'] = {
            label = 'Police Outfit Bag',
            model = 'fs_prop_outfitbag_pol',
            points = {
                vector4(450.9824, -992.9879, 30.6896, 356.1895), -- Police station coordinates
            },
            whitelist = {
                enable = false, -- If true, only matching permissions can open
                permissions = {
                    jobgroups = { ['police'] = 0 },
                },
            },
            outfits = {
                [1] = {
                    title = 'Duty Outfit',
                    playermodel = `mp_m_freemode_01`,
                    whitelist = {
                        ['police'] = { 0, 1, 2, 3 }, -- Grade restrictions
                    },
                    outfit = {
                        mask_1 = { drawable = 0, texture = 0, palette = 0 },
                        helmet_1 = { drawable = 46, texture = 0, palette = 0 },
                        glasses_1 = { drawable = 6, texture = 0, palette = 0 },
                        ears_1 = { drawable = 0, texture = 0, palette = 0 },
                        tshirt_1 = { drawable = 129, texture = 0, palette = 0 },
                        torso_1 = { drawable = 55, texture = 0, palette = 0 },
                        decals_1 = { drawable = 0, texture = 0, palette = 0 },
                        bproof_1 = { drawable = 0, texture = 0, palette = 0 },
                        arms = { drawable = 0, texture = 0, palette = 0 },
                        watches_1 = { drawable = -1, texture = -1, palette = 0 },
                        bracelets_1 = { drawable = -1, texture = -1, palette = 0 },
                        bags_1 = { drawable = 0, texture = 0, palette = 0 },
                        pants_1 = { drawable = 35, texture = 0, palette = 0 },
                        shoes_1 = { drawable = 25, texture = 0, palette = 0 },
                    },
                },
            }
        },
        ['ems_bag'] = {
            label = 'EMS Outfit Bag',
            model = 'fs_prop_outfitbag_doc',
            points = {
                vector4(307.1971, -597.6035, 43.2840, 343.3831), -- Hospital coordinates
            },
            whitelist = {
                enable = false,
                permissions = {
                    jobgroups = { ['ambulance'] = 0 }
                },
            },
            outfits = {
                [1] = {
                    title = 'Duty Outfit',
                    playermodel = `mp_m_freemode_01`,
                    whitelist = {
                        ['ambulance'] = { 0, 1, 2, 3 },
                    },
                    outfit = {
                        mask_1 = { drawable = 0, texture = 0, palette = 0 },
                        helmet_1 = { drawable = 122, texture = 0, palette = 0 },
                        glasses_1 = { drawable = 6, texture = 0, palette = 0 },
                        ears_1 = { drawable = 0, texture = 0, palette = 0 },
                        tshirt_1 = { drawable = 154, texture = 0, palette = 0 },
                        torso_1 = { drawable = 250, texture = 0, palette = 0 },
                        decals_1 = { drawable = 58, texture = 0, palette = 0 },
                        bproof_1 = { drawable = 0, texture = 0, palette = 0 },
                        arms = { drawable = 0, texture = 0, palette = 0 },
                        watches_1 = { drawable = -1, texture = -1, palette = 0 },
                        bracelets_1 = { drawable = -1, texture = -1, palette = 0 },
                        bags_1 = { drawable = 0, texture = 0, palette = 0 },
                        pants_1 = { drawable = 28, texture = 8, palette = 0 },
                        shoes_1 = { drawable = 21, texture = 0, palette = 0 },
                    },
                },
            }
        },
    }
}

config.preview = true

--[[
    CLOTHING EXCLUSIONS
    Set any component to false if you do not want it saved inside outfit bags
]]
config.supported = {
    ["mask_1"] = true,
    ['helmet_1'] = true,
    ['glasses_1'] = true,
    ['ears_1'] = true,
    ["tshirt_1"] = true,
    ["torso_1"] = true,
    ["decals_1"] = true,
    ["bproof_1"] = true,
    ["arms"] = true,
    ["watches_1"] = true,
    ["bracelets_1"] = true,
    ['bags_1'] = true,
    ["pants_1"] = true,
    ["shoes_1"] = false, -- Example: exclude shoes from being overwritten
}
```

---

## Configuration Parameter Details

* **`config.unique_bags`**: When `true`, each bag item tracks its own unique outfit inventory via item metadata. When `false`, saved outfits persist across all bags of the same tier for that player.
* **`config.public_bags.items`**: Defines bag tiers (`fs_small_bag`, `fs_medium_bag`, `fs_large_bag`), their slot limits, and 3D prop models.
* **`config.whitelist_bags`**: Defines static job/faction locker bags at specific `vector4` coordinates with job permissions (`jobgroups`, `admingroups`, `aces`, `identifiers`) and pre-set uniform templates.
* **`config.supported`**: Toggle individual clothing components (torso, mask, shoes, accessories) on or off to control what gets saved into outfits.
