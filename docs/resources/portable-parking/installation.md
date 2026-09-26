---
title: Portable Parking Installation | FWB Studio Docs
description: Install FiveM Portable Parking for ESX, QBCore, and Qbox, with native storage or JG Advanced Garages compatibility.
---

# Portable Parking — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | Database queries |
| ESX, QBCore, or Qbox | Yes | Start your selected framework before Portable Parking |
| `ox_lib` | Framework-dependent | Used by Qbox and its interaction prompts; keep your framework dependencies installed |

## Database Setup

**Native mode:** no manual Portable Parking SQL import is required. Startup verifies the framework storage column (`stored` on ESX, `state` on QBCore/Qbox), adds required indexes, and records completed migrations. ESX and QBCore can migrate numeric storage data from older `vin` versions once.

**JG mode:** complete JG Advanced Garages' database installation first. Portable Parking validates JG's existing columns; it does not install JG's schema or run the native storage migration in this mode. Do not add or recreate a `vin` column for the current version.

## Choose Garage Compatibility

Edit `fs_portableparking/config/config.lua`:

```lua
config.framework = 'auto' -- auto, esx, qb, qbox
config.garageCompatibility = 'auto' -- auto, none, jg-garage
```

| Value | Behavior | JG start order |
| :--- | :--- | :--- |
| `'auto'` | Detects a supported garage that is started or starting; otherwise uses native storage | Start JG before Portable Parking |
| `'jg-garage'` | Explicitly uses the JG adapter | Either order; JG's database columns must already exist |
| `'none'` | Uses native framework storage | No JG integration |

Restart Portable Parking after changing this setting. If JG starts later while using `auto`, restart Portable Parking to detect it. If multiple supported garages are detected, select one explicitly.

## Install Steps

1. Place `fs_portableparking` in `resources/[fs]/fs_portableparking`.
2. Install `oxmysql`, your framework, and its dependencies.
3. If using JG, finish its database installation and choose the compatibility setting above.
4. Configure fees, permissions, locations, and integrations in `config/config.lua` and `bridge/`.
5. Add the resources to `server.cfg`. This example uses Qbox and automatic JG detection:

```cfg
ensure oxmysql
ensure ox_lib
ensure qbx_core
ensure jg-advancedgarages
ensure fs_portableparking
```

For ESX or QBCore, use your framework resource (`es_extended` or `qb-core`) and its dependencies instead of `qbx_core`. Omit JG if you are not using it. With explicit `'jg-garage'`, JG can start before or after Portable Parking.

6. Start the resource and check the console for `Garage compatibility: jg-garage` or `Garage compatibility: none`. Resolve any database preparation error before using it.
7. Test storing a personal vehicle in JG and retrieving it through Portable Parking, then the reverse. Check its plate, model, modifications, fuel, and keys. JG impounds must remain releasable only through JG.

## Admin Permissions (Optional)

```cfg
add_ace group.admin "fs_portableparkingadmin" allow
```

In JG mode, `/vadmin` cannot release JG-impounded vehicles. See [JG compatibility](./configuration#garage-compatibility) for the behavior of each command.
