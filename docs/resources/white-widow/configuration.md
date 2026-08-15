---
title: White Widow Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM White Widow script (fs_whitewidow) — farming, growth timers, dispensary store, and smoking integration.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426496" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# White Widow — Configuration

Edit `fs_whitewidow/config/config.lua` and `config/farming.lua` to configure cultivation locations, harvest reward ranges, plant maintenance items, and dispensary counters.

---

## Configuration Reference Overview

```lua
-- config/config.lua
config.target = true -- Set true to use ox_target / qb-target; false for 3D markers

-- Enable integration with fs_smoking
config.smoking = true

-- config/farming.lua
config.FarmLocation = vector3(-287.8372, -1391.5770, 25.5145) -- Hydroponic grow room
config.FarmRadius = 100.0

-- Harvest Yield per plant
config.FarmGetItem = {
    name = 'weed_leaf',
    min = 1,
    max = 5,
}

-- Fertilizer Settings
config.FarmingFertilize = {
    item = 'weed_fertilizer',
    quantity = 1,
    damageChance = 10, -- 10% chance plant requests fertilizer
}

-- Pesticide Spray Settings
config.FarmingSpray = {
    item = 'weed_spray',
    quantity = 1,
    damageChance = 10, -- 10% chance plant requests spray
}

-- Items required to plant a new pot
config.FarmingRequired = {
    [1] = { item = 'weed_fertilizer', quantity = 1 },
    [2] = { item = 'weed_pot',        quantity = 1 },
    [3] = { item = 'seed_weed',       quantity = 1 },
}
```

---

## Configuration Parameter Details

* **`config.smoking`**: When set to `true`, harvested strains automatically interface with `fs_smoking` for rolling into custom joints and blunts.
* **`config.FarmGetItem`**: Sets the minimum and maximum amount of `weed_leaf` harvested per plant.
* **`config.FarmingFertilize.damageChance`**: Percentage probability during each growth stage that a plant will require manual fertilizer application.
