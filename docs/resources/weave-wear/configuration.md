---
title: Wig Craft & Sell Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Wig Craft & Sell (fs_weavewear) — shops, crafting recipes, buyer app, and delivery routes.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426495" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Wig Craft & Sell — Configuration

Edit `fs_weavewear/config/config.lua` to define raw material store locations, wig crafting recipes, buyer app rates, delivery drop-offs, and custom workbench props.

---

## Complete `config/config.lua` Reference

```lua
config.target = false -- true for ox_target / qb-target; false for text UI prompts

-- Restrict script to specific ped models (e.g. mp_f_freemode_01)
config.restriction = {
    enable = false,
    allowedpeds = {
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

-- Material Supply Store Items
config.shopitems = {
    { label = "Wig Cap",    name = "fs_ww_wigcap",    price = 75 },
    { label = "Wig bundle", name = "fs_ww_wigbundle", price = 75 },
    { label = "Sewing kit", name = "fs_ww_sewingkit", price = 100 },
    { label = "Wig table",  name = "fs_ww_table",     price = 40 },
    { label = "WW Phone",   name = "fs_ww_phone",     price = 1500 }
}

-- Shop Locations
config.shops = {
    {
        blip = { enable = true, sprite = 489, color = 1, name = "Weave & Wear", scale = 0.7 },
        ped = 'a_m_m_soucent_01',
        coords = vector4(-506.7363, 292.4022, 82.3882, 169.4869),
    },
}

-- Wig Crafting Recipes on Workbench
config.crafting = {
    ["fs_ww_long_curly"] = {
        label = 'Long Curly Wig',
        time = 5000,
        reward_count = { min = 1, max = 1 },
        required = {
            { item = "fs_ww_wigcap",    quantity = 1 },
            { item = "fs_ww_wigbundle", quantity = 1 },
            { item = "fs_ww_sewingkit", quantity = 3 }
        }
    },
    -- additional wig models...
}

--[[
    SELLING APPS CONFIGURATION
]]
config.selling = {
    phone = {
        item = { enable = true, item = 'fs_ww_phone' },
        command = { enable = false, command = 'wwphone' }
    },
    peds = {
        max_activepeds = 5,
        generateped = {
            time = 4000,         -- Spawn customer every 4 seconds
            count = 1,
            ped_timeout = 30000, -- Despawn if buyer cannot reach player in 30s
        }
    },
    -- Street Customer Orders
    buyersitems = {
        { item = "fs_ww_long_curly", price = { min = 300, max = 500 }, quantity = { min = 1, max = 2 } },
    },
    -- Wholesale Delivery Contracts
    delivery = {
        product_count = 2,
        items = {
            { item = "fs_ww_long_curly", price = { min = 600, max = 1000 }, quantity = { min = 2, max = 5 } },
        }
    }
}

-- Workbench Settings
config.table = {
    prop = `fs_prop_table_wigs`,
    item = 'fs_ww_table',
    nearby_distance = 2.0,
    animtion = { dict = 'mini@repair', clip = 'fixing_a_ped' },
    create_serverside = false,
}
```
