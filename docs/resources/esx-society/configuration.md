---
title: ESX Society Configuration | FWB Studio Docs
description: Configure ESX Society in game for FiveM ESX, including providers, access points, money washing, logging, ACE access, and placement presets.
---

# ESX Society — Configuration

The redesigned ESX Society is configured from its administration tablet. Open `/esx_society` after adding your identifier ACE.

::: info About `config/config.lua`
`config/config.lua` is intentionally a readable command hint only. It is not loaded by `fxmanifest.lua` and contains no runtime configuration table.
:::

## Jobs

The **Jobs** tab can search, sort, create, rename, and delete ESX jobs. Open a job row to manage its ranks and access points. Job IDs use lowercase letters, numbers, and underscores; labels may contain normal display text.

Deleting a rank demotes assigned employees by one available rank. If no lower rank exists, they are moved to the configured unemployed fallback. Deleting a job removes its ranks and moves all assigned employees to rank `0` of the fallback job before the job is removed.

## Bridge

| Provider | Choices | Notes |
| --- | --- | --- |
| Notifications | Auto, `fs_notify`, ESX, `ox_lib` | Auto prefers `fs_notify`, then ESX; `ox_lib` is optional |
| Target | Auto, `ox_target`, `qb-target` | Needed only for in-world management points |
| Zone engine | Auto, `ox_lib`, PolyZone | Optional area workflows; not a hard dependency |

Restart `esx_society` after changing target or zone providers so connected clients rebuild their registrations consistently. Notification-provider changes apply immediately.

## Logs

The administrator **Logs** tab supports:

- **Discord** — paste the administrator webhook URL.
- **FiveManage** — select FiveManage and set the dataset name. The API key remains configured through `fmsdk`.
- **Custom** — implement the unlocked adapter in `bridge/logging/custom/server.lua`.

Administrator activity is external-only and is not stored in a browsable audit table. Actor and target identifiers may be logged, but player IP identifiers, IP fields, and IP-shaped metadata are removed before a provider receives an entry.

Each business boss may add up to ten private Discord destinations from the boss-menu **Logs** page. Every destination can independently subscribe to deposits, withdrawals, money wash, employee hires/removals/rank changes, rank and salary settings, uniforms, access points, webhook changes, and job settings.

## Settings

| Setting | Default | Purpose |
| --- | --- | --- |
| Admin command | `esx_society` | Opens the administration tablet |
| ACE permission | `esx_society.admin` | Controls administrator access |
| Unemployed fallback | `unemployed` | Receives employees removed by rank or job deletion |
| Money-wash rule | Fixed duration | Uses one duration for each new request |
| Fixed duration | 60 minutes | Queue duration in fixed mode |
| Amount block | 1,000 | Amount used as one timing block in amount mode |
| Time per amount | 5 minutes | Processing time for each amount block |
| Request range | 100–100,000 | Inclusive minimum and maximum wash amount |

Changing the admin command registers the new command for the current runtime. Restart the resource after changing command or ACE settings to ensure one clean, predictable entry point.

## Management access points

An administrator can create three point types:

- **Sphere** — an invisible target area with a configurable radius.
- **Existing prop** — attaches a target to a detected map entity.
- **Placed prop** — creates a persistent prop and registers a local-entity target.

Each point can allow every grade or selected grades, and can independently permit deposits, withdrawals, transaction history, money washing, money-wash history, hiring, firing, employee rank changes, salaries, grade labels, and uniforms.

All actions are revalidated by the server against the player's current ESX job, grade, stored point permissions, and distance. Existing and placed props use local-entity targets; only sphere points register sphere targets. No permanent proximity loop is used.

## Editable placement defaults

Edit the unlocked file:

```text
bridge/management_setup/defaults.lua
```

It contains the default sphere radius (`0.75`), minimum and maximum radius, mouse-wheel step, creator camera speeds, placed-prop movement speeds, rotation step, model loading limits, existing-prop priorities, and the prop preset list. Restart `esx_society` after editing this bridge file.
