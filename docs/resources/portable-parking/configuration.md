---
title: Portable Parking Configuration | FWB Studio Docs
description: Complete configuration reference for FiveM Portable Parking script (fs_portableparking).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking — Configuration

Edit `fs_portableparking/config/config.lua` to customize command names, parking spot purchase fees, impound fees, staff permissions, permanent lots, and markers.

---

## Complete `config/config.lua` Reference

```lua
--[[

    -- Configuration File for Portable Parking Script --

]]

config.language = 'en'

config.portableparking = {
    commands = {
        buypark = "vbuy",      -- Command to purchase an on-demand parking/retrieve spot
        vehiclelist = "vlist", -- Command to open the vehicle retrieve menu at a spot
        parkvehicle = "vpark", -- Command to park the vehicle at current location
        admin = 'vadmin',      -- Admin command to manage impounds
    },
    vbuyprice = 500,           -- Cost to purchase a temporary parking spot
    vimpoundprice = 2000,      -- Fee charged to players to release impounded vehicles
    buy_cooldown = 0,          -- Purchase cooldown in seconds

    -- If true, players can unimpound vehicles directly from the /vlist menu
    impound_anywhere = true,

    -- If true, impounded vehicles automatically reset on server restart
    auto_unimpound = false,

    Impound = {
        command = 'vimpound',  -- Command for law enforcement to impound vehicles
        jobs = {
            ['police'] = true,
            ['sheriff'] = true,
        }
    }
}

-- Framework admin group permissions for /vadmin
config.admins = {
    ['admin'] = true,
    ['mod'] = true,
}

-- Specific character identifiers granted admin access
config.identifier = {
    -- ['char1:license_here'] = true,
}

-- Optional permanent impound lots
config.impounds = {
    [1] = {
        blip = { enable = true, id = 524, color = 1, scale = 0.7, name = "Impound Lot" },
        coords = vector4(143.5679, -1081.8391, 28.1923, 352.7644),
        radius = 10.0,
    }
}

-- Optional permanent parking garages
config.parking = {
    [1] = {
        blip = { enable = true, id = 357, color = 3, scale = 0.7, name = "Parking Lot" },
        coords = vector4(150.9730, -1082.3186, 28.1924, 359.4603),
        radius = 10.0,
    }
}

-- Marker visuals for permanent parking and impound zones
config.marker = {
    Garage = {
        type = 1,
        scale = vector3(2.0, 2.0, 0.2),
        color = { r = 45, g = 212, b = 191, a = 200 },
    },
    Impound = {
        type = 1,
        scale = vector3(2.0, 2.0, 0.2),
        color = { r = 255, g = 0, b = 0, a = 200 },
    },
}
```

---

## Configuration Parameter Details

* **`vbuyprice`**: Cash or bank amount deducted when a player creates a temporary parking spot with `/vbuy`.
* **`vimpoundprice`**: Fee charged to unimpound a seized vehicle.
* **`impound_anywhere`**: When set to `true`, players can unimpound vehicles on-demand through their purchased `/vlist` spot. When set to `false`, players must visit a physical impound yard.
* **`config.portableparking.Impound.jobs`**: Table of whitelisted jobs authorized to execute `/vimpound`.
