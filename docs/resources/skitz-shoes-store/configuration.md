---
title: Skitz Shoes Store Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Skitz Shoes Store script (fs_skitz) — shops, crafting recipes, buyer app, delivery app, and workbench.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426492" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Skitz Shoes Store — Configuration

Edit `fs_skitz/config/config.lua` to define raw material store locations, crafting recipes, buyer app NPC generation rates, delivery drop-offs, and custom workbench props.

---

## Complete `config/config.lua` Reference

```lua
config.target = false -- Set to true to use ox_target / qb-target; false for text UI prompts

-- Restrict script to specific ped models (e.g. mp_m_freemode_01, mp_f_freemode_01)
config.restriction = {
    enable = true,
    allowedpeds = {
        [`mp_m_freemode_01`] = true,
        [`mp_f_freemode_01`] = true,
    }
}

-- Job restriction toggle
config.jobsonly = {
    enable = false,
    allowedjobs = {
        ['police'] = true,
    }
}

config.textui = true
config.range = 2.3

-- Material Hardware Store Items
config.shopitems = {
    { label = "Leathers",      name = "fs_leather_materials", price = 75 },
    { label = "Foam Material", name = "fs_shoe_foam",         price = 75 },
    { label = "Raw Cloth",     name = "fs_clothe_materials",  price = 40 },
    { label = "Work Table",    name = "fs_shoes_table",       price = 2500 },
    { label = "Work Phone",    name = "fs_shoesphone",        price = 1500 }
}

-- Shop Locations
config.shops = {
    {
        blip = { enable = true, sprite = 120, color = 0, name = "Skitz", scale = 0.7 },
        ped = 'a_m_m_soucent_01',
        coords = vector4(215.1540, -1531.2638, 28.2474, 229.1728),
    },
}

-- Sneaker Crafting Recipes on Workbench
config.crafting = {
    ['fs_sky_gliders_plus'] = {
        label = 'Sky Gliders Plus',
        time = 5000,
        reward_count = { min = 1, max = 1 },
        required = {
            { item = "fs_leather_materials", quantity = 1 },
            { item = "fs_shoe_foam",         quantity = 1 },
            { item = "fs_clothe_materials",  quantity = 3 }
        }
    },
    -- additional recipes...
}

--[[
    SELLING APPS CONFIGURATION
]]
config.selling = {
    phone = {
        item = { enable = true, item = 'fs_shoesphone' },
        command = { enable = false, command = 'shoesphone' }
    },
    peds = {
        max_activepeds = 5,
        generateped = {
            time = 4000,         -- Spawn customer every 4 seconds
            count = 1,
            ped_timeout = 30000, -- Despawn if buyer cannot reach player in 30s
        }
    },
    -- Items accepted in Buyers App (Corner Dealing)
    buyersitems = {
        { item = 'fs_sky_gliders_plus', price = { min = 250, max = 400 }, quantity = { min = 1, max = 3 } },
        { item = 'fs_breeze_bangs',     price = { min = 250, max = 400 }, quantity = { min = 1, max = 3 } },
    },
    -- Items requested in Delivery App (Wholesale Logistics)
    delivery = {
        product_count = 2,
        items = {
            { item = 'fs_sky_gliders_plus', price = { min = 600, max = 900 }, quantity = { min = 2, max = 5 } },
        }
    }
}

-- Workbench Settings
config.table = {
    prop = `fs_prop_table_shoes`,
    item = 'fs_shoes_table',
    nearby_distance = 2.0,
    animtion = { dict = 'mini@repair', clip = 'fixing_a_ped' },
    create_serverside = false,
}
```
