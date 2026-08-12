---
title: Starter Pack Configuration | FWB Studio Docs
description: Configure Starter Pack — config files and key options.
---


# Starter Pack — Configuration

Edit the config files inside `fs_starterpack/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
--[[

    Config file

]]

config.debug = false

-- Available locales: en, es, fr, de
config.locale = 'en'

-- Primary mode: autodetect the active framework bridge.
-- Supported manual values: auto, esx, qbcore, qbox.
config.framework = 'auto'

-- Primary mode: autodetect the active inventory bridge.
config.inventory = 'auto'

-- Primary mode: autodetect the active target bridge.
-- Supported manual values: auto, oxtarget, qbtraget.
config.target = 'auto'

config.targetDistance = 2.0

-- Vehicle key bridge selection.
-- Supported manual values: wasabi_carlock, ak47_vehiclekeys, qs-vehiclekeys, vehicles_keys,
-- msk_vehiclekeys, Renewed-Vehiclekeys, qbx_vehiclekeys, qb-vehiclekeys, cd_garage, none.
-- Primary mode: autodetect the active key bridge.
config.vehiclekeys = 'auto'

-- QBCore and Qbox usually treat black money as a physical item instead of a real account.
-- If you use black_money in your rewards, the script will automatically convert it into the item configured below.
config.blackMoney = {
    qbcore = {
        item = 'markedbills', -- item name used on your server: black_money, markedbills, marked_bills, etc.
```

