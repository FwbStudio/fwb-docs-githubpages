---
title: Portable Parking Configuration | FWB Studio Docs
description: Configure FiveM Portable Parking for ESX, QBCore, and Qbox, including JG Advanced Garages compatibility and impound behavior.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking — Configuration

Edit `fs_portableparking/config/config.lua` to customize command names, parking spot purchase fees, impound fees, staff permissions, permanent lots, and markers.

---

## Garage Compatibility

Framework and garage compatibility are separate settings:

```lua
config.framework = 'auto' -- auto, esx, qb, qbox
config.garageCompatibility = 'auto' -- auto, none, jg-garage
```

| Setting | Behavior |
| :--- | :--- |
| `'auto'` | Detects supported garages that are started or starting when Portable Parking initializes. Start `jg-advancedgarages` first; otherwise native storage is selected. |
| `'jg-garage'` | Selects JG explicitly, regardless of its resource start order. JG's database columns must already be installed. |
| `'none'` | Keeps the native ESX/QBCore/Qbox storage behavior. |

The value is **`'jg-garage'`**, while JG's resource folder is **`jg-advancedgarages`**. Restart Portable Parking after changing the setting. Detection does not switch adapters while the resource is running.

### JG Advanced Garages

The adapter targets JG's v3 storage schema on **ESX, QBCore, and Qbox**. It uses `in_garage` and `impound` as the storage authority. It reads personal vehicles, preserves their JG garage assignment, and updates JG storage plus the native state column when that column exists.

| Action | Behavior with JG selected |
| :--- | :--- |
| `/vpark` | Stores an owned personal vehicle using JG storage fields and saves properties, fuel, body health, and engine health. |
| `/vlist` retrieval | Can retrieve stored personal vehicles from any JG garage. JG job/gang fleet vehicles are excluded. |
| Outside-vehicle recovery | Can recover personal vehicles that are outside and not JG-impounded; existing world vehicles are located instead of respawned. |
| JG impounded vehicles | Excluded from Portable Parking retrieval, recovery, and admin menus. Release them through JG. |
| `/vimpound` | Directs authorized players to use JG's impound action. |
| `/vadmin` | Can recover eligible outside personal vehicles; cannot release JG impounds. |
| `auto_unimpound` | Does not reset JG records. JG owns its restart and impound rules. |

Existing JG advanced deformation data is preserved, but Portable Parking does not apply or update JG's separate deformation format. This storage integration does not change vehicle spawning timeouts or coordinate simultaneous actions inside JG's encrypted code.

### Editable Integration Files

- `bridge/framework/ESX`, `bridge/framework/QB`, and `bridge/framework/Qbox`: framework ownership, database mappings, permissions, and money handling.
- `bridge/Garages/jg.lua`: editable JG storage adapter shared by all three frameworks.
- `server/garages.lua`: loader in the escrow-protected server folder.

Future garage adapters can register in `PortableParkingGarageAdapters` and must load before `server/garages.lua` in the manifest.

## Key `config/config.lua` Settings

This excerpt covers core settings. The shipped config also includes job garages and performance settings.

```lua
--[[

    -- Configuration File for Portable Parking Script --

]]

config.language = 'en'
config.framework = 'auto' -- auto, esx, qb, qbox
config.garageCompatibility = 'auto' -- auto, none, jg-garage

config.portableparking = {
    commands = {
        buypark = "vbuy",      -- Command to purchase an on-demand parking/retrieve spot
        vehiclelist = "vlist", -- Command to open the vehicle retrieve menu at a spot
        parkvehicle = "vpark", -- Command to park the vehicle at current location
        admin = 'vadmin',      -- Admin command to manage impounds
    },
    vbuyprice = 500,           -- Cost to purchase a temporary parking spot
    vimpoundprice = 2000,      -- Fee charged to players to release impounded vehicles
    buy_cooldown = 10,          -- Purchase cooldown in seconds

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
        color = { r = 202, g = 17, b = 255, a = 200 },
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

In JG mode, the impound settings above do not override JG release restrictions; see [Garage Compatibility](#garage-compatibility).
