---
title: ESX Society Overview | FWB Studio Docs
description: ESX Society features and compatibility overview for FiveM ESX servers, including boss management, accounts, jobs, ranks, access points, and logging.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="./installation">Install</a>
</div>

# ESX Society

**ESX Society** is a complete modern redesign and drop-in replacement for the standard `esx_society` resource. It preserves the familiar ESX registration event, callbacks, money events, garage events, and boss-menu entry point while replacing the original interface with a professional tablet and safer administration tools.

## Main features

- Modern boss interface for employees, ranks and salaries, shared funds, money washing, and business webhooks.
- Searchable administrator interface for jobs, ranks, access points, providers, logging, and runtime settings.
- Automatic society provisioning for every job found in the ESX jobs table.
- Shared balances backed by `esx_addonaccount` using the conventional `society_<job>` account name.
- Persistent sphere, existing-prop, and placed-prop management points with rank and action permissions.
- Discord, FiveManage, and unlocked custom logging providers. Player IP data is removed before delivery.
- Fixed-duration or amount-based money-wash queues with minimum and maximum request limits.
- Current ESX `xLib.callback` and classic `ESX.TriggerServerCallback` compatibility.
- Server-side validation for job, grade, permission, distance, money, and employee mutations.
- Pagination, bounded caches, event-indexed online employees, targeted point refreshes, and no permanent proximity loop.
- Ten bundled languages for the tablet, Lua notifications, compatibility menus, targets, and placement controls, with unlocked locale files and live switching.

## Package

| Package | Resource folder |
| --- | --- |
| **ESX Society** | `esx_society` |

Only the `esx_society` resource is provided. It is built exclusively for ESX and uses the standard ESX society ecosystem rather than requiring an additional framework bridge.

**Supported languages:** English, Arabic, Dutch, French, German, Polish, Brazilian Portuguese, Russian, Spanish, and Turkish. Server owners can add complete locale files under `locales/`; only registered translations are shown in the in-game selector.

::: warning Folder name matters
The folder must be named exactly `esx_society`. Do not run the original `esx_society` resource at the same time.
:::

## What remains authoritative

Jobs, grades, and employees remain in the normal ESX tables. Shared balances remain in `esx_addonaccount`. Standard society garage data remains in `esx_datastore`. The resource stores only its own settings, access points, money-wash scheduling, business webhook destinations, and idempotent financial-operation data.

This is not a stock or inventory-storage system. The `inventory` value accepted during society registration is retained as compatibility metadata.

## Documentation

- [Installation](./installation)
- [Configuration](./configuration)
- [Commands](./commands)
- [Client exports](./exports/client)
- [Server exports](./exports/server)
- [Integrations and compatibility](./integrations)
- [Common errors](./common-errors)
