---
title: Duty System Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Duty System script (fs_dutysystem).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426483" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Duty System — Configuration

Edit `fs_dutysystem/config/Config.lua` to configure interaction modes (Target vs TextUI), admin menu permissions, NPC ped invincibility, and job duty locations (`DutyPoints`).

---

## Complete `config/Config.lua` Reference

```lua
config = {}

-- Interaction Mode: true = ox_target / qb-target | false = TextUI 3D key prompt [E]
config.target = true

-- Admin Duty Menu Configuration (/dutymenu)
config.Admin = {
    enable = true,
    command = 'dutymenu',
    permission = {
        admingroups = {
            ['admin'] = true
        },
        aces = {
            -- Add ACE permission in your server.cfg:
            -- add_ace license:1c17a180cdad995771fea75248f0ed95569b9e6a "fs_dutysystem" allow #Capy
            ['fs_dutysystem'] = true,
        },
        identifiers = {
            ['license:wdwdwdw66916161w6d1w64d98w4d'] = true,
            ['discord:wdwdwdw66916161w6d1w64d98w4d'] = true,
        },
        characters = {
            ['char1:wdwdwdw66916161w6d1w64d98w4d'] = true,
            ['char2:wdwdwdw66916161w6d1w64d98w4d'] = true,
        },		
    }
}

-- NPC Ped Invincibility: true = peds cannot take damage | false = set to false if your anticheat flags invincible peds
config.Ped_Invincible = true

-- Job Duty Locations & Target Points
config.DutyPoints = {
    ['police'] = {
        Department = 'LSPD',
        points = { -- Note: points can be empty {} if relying solely on script exports
           [1] = {
               coords = vector4(434.9581, -974.4164, 29.7136, 86.9388), 
               model = "s_m_m_ciasec_01", 
               access_distance = 2.0
           },
        }
    },
    ['ambulance'] = {
        Department = 'EMS',
        points = {
            [1] = {
                coords = vector4(-81.5411, -1832.2010, 26.0970, 226.0478), 
                model = "s_m_m_doctor_01", 
                access_distance = 2.0
            },
        }
    },
}
```

---

## Detailed Option Explanations

### `config.target`
* **Type:** `boolean`
* **Default:** `true`
* **Description:** Sets the interaction method for duty peds/locations.
  - `true`: Uses target interaction (`ox_target` / `qb-target`).
  - `false`: Uses TextUI prompts (`[E]` key interaction).

---

### `config.Admin`
* **Description:** Configures access to the `/dutymenu` admin interface.
  - `enable`: Toggles admin menu functionality.
  - `command`: Chat command name (default `'dutymenu'`).
  - `permission`: Multi-layer permissions system allowing access by `admingroups`, `aces`, `identifiers`, or `characters`.
  - **ACE Setup Example in `server.cfg`:**
    ```lua
    add_ace license:YOUR_LICENSE_HERE "fs_dutysystem" allow
    ```

---

### `config.Ped_Invincible`
* **Type:** `boolean`
* **Default:** `true`
* **Description:** When set to `true`, NPC duty peds are set to invincible so they cannot be harmed or killed by players. If your server anticheat flags invincible peds as a violation, set this option to `false`.

---

### `config.DutyPoints`
* **Description:** Configures on-duty / off-duty locations per job role.
  - `Department`: Display name for the department (e.g. `'LSPD'`, `'EMS'`).
  - `coords`: `vector4` coordinates (`x`, `y`, `z`, `heading`) where the NPC ped spawns.
  - `model`: GTA 5 ped model string for the station NPC.
  - `access_distance`: Interaction distance in meters (e.g. `2.0`).
  - **Note:** If you want players to change duty state exclusively via client/server exports, leave `points = {}` empty.
