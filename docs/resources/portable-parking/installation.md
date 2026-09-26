---
title: Portable Parking Installation | FWB Studio Docs
description: Install FiveM Portable Parking for ESX, QBCore, and Qbox, with optional garage compatibility settings.
---

# Portable Parking — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | Database queries |
| ESX, QBCore, or Qbox | Yes | Start your selected framework before Portable Parking |
| `ox_lib` | Framework-dependent | Used by Qbox and its interaction prompts; keep your framework dependencies installed |

## Database Setup

No manual Portable Parking SQL import is required for native storage. Startup verifies the framework storage column (`stored` on ESX, `state` on QBCore/Qbox), adds required indexes, and records completed migrations. ESX and QBCore can migrate numeric storage data from older `vin` versions once. Do not add or recreate a `vin` column for the current version.

## Choose Garage Compatibility

If you want to use Portable Parking and JG Advanced Garages at the same time, set the garage compatibility in `fs_portableparking/config/config.lua`:

```lua
config.garageCompatibility = 'jg-garage' -- auto, none, jg-garage
```

- `'jg-garage'`: enables JG compatibility regardless of which resource starts first. JG's database installation must already be complete.
- `'auto'`: detects JG when it is started or starting. Start JG before Portable Parking for automatic detection.
- `'none'`: uses native framework storage without garage integration.

Restart Portable Parking after changing this setting. In JG mode, impound releases stay with JG. See [Garage Compatibility](./configuration#garage-compatibility) for details.

## Install Steps

1. Place `fs_portableparking` in `resources/[fs]/fs_portableparking`.
2. Install `oxmysql`, your framework, and its dependencies.
3. Configure your framework, fees, permissions, and locations in `config/config.lua`.
4. Add the resources to `server.cfg`. This example uses Qbox:

```text
ensure oxmysql
ensure ox_lib
ensure qbx_core
ensure fs_portableparking
```

For ESX or QBCore, use your framework resource (`es_extended` or `qb-core`) and its dependencies instead of `qbx_core`.

5. Start the resource and check the server console for database preparation errors.
6. Test parking and retrieving a personal vehicle. Check its plate, model, modifications, fuel, and keys.

## Admin Permissions (Optional)

```text
add_ace group.admin "fs_portableparkingadmin" allow
```
