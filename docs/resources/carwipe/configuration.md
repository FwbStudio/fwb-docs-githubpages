---
title: Carwipe Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Carwipe script (fs_carwipe).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426481" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Carwipe — Configuration

Edit `fs_carwipe/config/config.lua` to configure automatic car wipe timers, permanent safe zones, vehicle model & plate whitelists, in-game zone radius limits, and multi-layer command permissions.

---

## Complete `config/config.lua` Reference

```lua
config = {} -- DON'T rename this table, otherwise the script will break

-- Permanent static safe zones that cannot be deleted in-game. Vehicles in these zones are never wiped.
config.zones = {
    { coords = vector3(-843.7990, -1214.2749, 6.5552), radius = 100.0 },
    -- Add more permanent zones below:
    -- { coords = vector3(x, y, z), radius = 50.0 },
}

-- Default script settings
config.default = {
    autowipe_time = 60,   -- Automatic wipe timer in minutes
    onlybroken = true,    -- true = delete ONLY destroyed/broken vehicles | false = delete all empty vehicles
    maxradius = 100.0,    -- Maximum allowed radius for in-game interactive zones (/carwipezone)
    defaultradius = 40.0, -- Default radius for in-game interactive zones (/carwipezone)
    zonecolor = 1,        -- Map blip/zone marker color ID for in-game zones
    zonecoloralpha = 100, -- Opacity (transparency) of in-game zones on map (0 to 255)

    -- Whitelists (vehicles matching these models or plates will never be wiped)
    whitelist = {
        model = {
            [`ambcivicfine`] = true, -- Model hash whitelist (use backticks [`modelname`] = true)
        },
        plate = {
            ['POLICE'] = true, -- License plate text prefix whitelist (case-insensitive)
            ['DEALER'] = true,
        }
    }
}

-- Command permissions (zone creation & instant car wipe)
config.commands = {
    zonecommand = {
        command = 'carwipezone',
        allowed = {
            admingroups = {
                ['admin'] = true
            },
            jobgroups = {
                ['police'] = 0
            },
            aces = {
                ['whitewidow'] = true,
            },
            identifiers = {
                ['lic:asasasa'] = true,
                ['discord:asasas'] = true,
            },
            characters = {
                ['char1:asasasasas'] = true,
                ['char2:asasasasas'] = true,
            }
        }
    },
    instantwipecommand = {
        command = 'carwipe',
        allowed = {
            admingroups = {
                ['admin'] = true
            },
            jobgroups = {
                ['police'] = 0
            },
            aces = {
                ['whitewidow'] = true,
            },
            identifiers = {
                ['lic:asasasa'] = true,
                ['discord:asasas'] = true,
            },
            characters = {
                ['char1:asasasasas'] = true,
                ['char2:asasasasas'] = true,
            }
        }
    }
}
```

---

## Configuration Breakdown

### 📍 Permanent Safe Zones (`config.zones`)
* **Description:** Pre-defined static coordinates and protection radiuses on your server map.
* **Behavior:** Vehicles parked inside any permanent zone defined in `config.zones` are **100% exempt** from both automated scheduled wipes and manual `/carwipe` command wipes. These static zones cannot be deleted or removed in-game.

---

### ⚙️ Default Settings (`config.default`)

| Setting | Type | Description |
| --- | --- | --- |
| `autowipe_time` | `number` | Time interval (in minutes) between automated server car wipes. |
| `onlybroken` | `boolean` | `true`: Only destroyed/broken vehicles are deleted.<br>`false`: All unoccupied vehicles across the map are deleted. |
| `maxradius` | `number` | Maximum allowed zone radius (in meters) when creating interactive zones via `/carwipezone`. |
| `defaultradius` | `number` | Default initial radius (in meters) when creating interactive zones via `/carwipezone`. |
| `zonecolor` | `number` | GTA map blip color ID for interactive zone radius circles. |
| `zonecoloralpha` | `number` | Map zone circle opacity (`0` = invisible, `255` = solid). |
| `whitelist.model` | `table` | Model hash whitelist. Use backtick syntax `` [`modelname`] = true `` for vehicle model names. |
| `whitelist.plate` | `table` | Plate prefix whitelist. Matches string prefixes regardless of letter case (e.g. `'POLICE'`, `'DEALER'`). |

---

### 🔐 Command Permissions (`config.commands`)

Carwipe features a multi-layer permission system for `/carwipezone` and `/carwipe`. A player will be granted access if they meet **any** of the following allowed criteria:

* **`admingroups`**: Framework admin group names (e.g. `['admin'] = true`, `['superadmin'] = true`).
* **`jobgroups`**: Framework job permissions with minimum grade (e.g. `['police'] = 0`).
* **`aces`**: ACE permissions (e.g. `['whitewidow'] = true`).
* **`identifiers`**: Specific player license or Discord identifiers (e.g. `['lic:xxxx'] = true`, `['discord:xxxx'] = true`).
* **`characters`**: Specific framework character IDs (e.g. `['char1:xxxx'] = true`).
