---
title: ESX Society Integrations & Compatibility | FWB Studio Docs
description: Integrate the ESX Society replacement with FiveM ESX jobs, addon accounts, datastore garages, targets, notifications, logging, and existing scripts.
---

# Integrations & Compatibility

The resource is a complete visual and operational redesign, but it deliberately retains the standard ESX Society integration surface for existing job scripts.

## Standard ESX Society surface

Existing scripts can continue using these established entry points.

### Events

- `esx_society:registerSociety`
- `esx_society:getSociety`
- `esx_society:getSocieties`
- `esx_society:checkSocietyBalance`
- `esx_society:withdrawMoney`
- `esx_society:depositMoney`
- `esx_society:washMoney`
- `esx_society:putVehicleInGarage`
- `esx_society:removeVehicleFromGarage`
- Client event: `esx_society:openBossMenu`

### Server callbacks

- `esx_society:isBoss`
- `esx_society:getSocietyMoney`
- `esx_society:getEmployees`
- `esx_society:getJob`
- `esx_society:setJob`
- `esx_society:setJobSalary`
- `esx_society:setJobLabel`
- `esx_society:setJobUniform`
- `esx_society:getOnlinePlayers`
- `esx_society:getVehiclesInGarage`

Classic `ESX.TriggerServerCallback` and current ESX `xLib.callback` transports are supported. The boss-menu close context supports current `ESX.OpenContext` and the older `ESX.UI.Menu` callback shape.

::: warning Validate external mutations
Do not pass untrusted NUI data directly to money, employee, salary, or garage mutation events. External resources must validate their own intent and inputs.
:::

## Shared accounts

Society balances always use `esx_addonaccount`. At startup, each ESX job is provisioned with `society_<job>` unless an explicit registration supplies another account name. Running the original `esx_society` beside this resource is unsupported.

## Garage compatibility

The standard garage APIs use `esx_datastore`:

- `esx_society:getVehiclesInGarage` reads the `garage` array.
- `esx_society:putVehicleInGarage` appends a vehicle.
- `esx_society:removeVehicleFromGarage` removes the first matching plate.

Install and start `esx_datastore`, and ensure the registered society datastore exists, before using these APIs. The resource does not add a separate garage system.

## Targets and zones

`ox_target` and `qb-target` are supported for management points. Existing and placed props are registered as local-entity targets; sphere access points use sphere targets. `ox_lib` and PolyZone are optional zone engines and are not manifest dependencies.

## Notifications

Auto detection prefers `fs_notify`, then ESX notifications. `ox_lib` may be selected when installed.

## Logging

- **Discord:** built-in webhook delivery configured in the administrator Logs tab.
- **FiveManage:** delivered through `fmsdk`, which manages its API key and batching.
- **Custom:** implement `bridge/logging/custom/server.lua` and return `true` from `available()` while ready.

## Uniforms

Uniform callbacks remain available for compatible skin resources. Enable the `uniforms` boss-menu option only when the server has the required appearance workflow.
