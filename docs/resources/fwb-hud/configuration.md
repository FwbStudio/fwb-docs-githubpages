---
title: FWB HUD Configuration | FWB Studio Docs
description: Configure FWB HUD for FiveM — in-game admin panel (/fwb_hud), status sources, themes, defaults and integrations for ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB HUD — Configuration

FWB HUD has **no config file to edit**. Commands, language, keys, features and the default look are all set in game with `/fwb_hud` and saved in the server KVP. A few things that need code live in open Lua files under `bridge/`.

---

## Admin Panel (`/fwb_hud`)

| Page | What you set there |
| :--- | :--- |
| **Overview** | Active framework and notification script, version check, players online, warnings. |
| **Server look** | Style the HUD (theme, preset, logo, layout, values, map / speed / money) and save it as the default for everyone. |
| **Statuses** | Which statuses show, their order, icon, colour, low / warning levels, and custom statuses. |
| **Features** | Seatbelt (crashes, injuries, reminder, racing harness), cruise control, engine, indicators, nitro (settings, per vehicle, blacklist, refill), stress (settings, per job, per weapon), weapon card, clock. |
| **Vehicles** | Electric models, speedometer type per model (car / cycle / aircraft / electric), fuel. |
| **Players** | Every online player's live statuses, stress and HUD; reset a player's HUD. |
| **Permissions** | What players may change in their own menu (theme, positions…). |
| **Commands & keys** | Command names, default keys, language, refresh rates and Debug. |
| **Bridge** | Framework and notification script (auto-detect or pick one). |

## Player Menu (`/hudsettings`)

| Tab | What players set there |
| :--- | :--- |
| **Themes** | Pick a theme and preset, customise it, save their own presets. |
| **Layout** | Show or hide pieces, open the drag-and-drop editor, whole-HUD size. |
| **Values** | When status numbers show (never, when low, always). |
| **Map, speed & money** | Minimap shape and mode, speed unit and speedometer options, money display mode. |
| **Keys** | Every key the HUD uses. |

---

## Open Files

| File | What it is for |
| :--- | :--- |
| `bridge/defaults/statuses.lua` | Where each status gets its value. Read on every start — edit and restart. |
| `bridge/defaults/server.lua` | First-start values of the admin panel (commands, keys, features) and the safe ranges for its numbers. |
| `bridge/defaults/themes.lua` | Themes and presets in the Themes tab. Add your own presets here. |
| `bridge/defaults/minimap.lua` | Minimap position offsets for square and round maps. |
| `bridge/integrations/client.lua` | Fuel / battery, electric detection and other scripts' seatbelt, cruise and status events. |
| `bridge/integrations/server.lua` | Hooks for other server scripts (stress, statuses). |
| `shared/stress.lua` | Built-in per-weapon and per-job stress tables (also edited in the admin panel). |
| `locale/*.lua` | Translations: `en`, `de`, `fr`, `es`. |

::: tip
`bridge/defaults/server.lua` only fills in values the admin has never changed. After the first start, change them in `/fwb_hud`.
:::

---

## Status Sources (`bridge/defaults/statuses.lua`)

```lua
Defaults.Statuses = {
    { id = 'health',  label = 'Health',  icon = 'fa:heart',      color = '#ff4d6d', source = 'native', core = true, ring = true },
    { id = 'hunger',  label = 'Hunger',  icon = 'fa:burger',     color = '#ffb347', source = 'framework', status = 'hunger', low = 20, ring = true },
    { id = 'stress',  label = 'Stress',  icon = 'fa:brain',      color = '#c084fc', source = 'event', inverted = true, enabled = false, ring = true },
    { id = 'hygiene', label = 'Hygiene', icon = 'fa:soap',       color = '#5eead4', source = 'event', event = 'cr_hygiene:needs', field = 'hygiene', resource = 'cr_hygiene', low = 25, warn = 50 },
    -- ...
}
```

| `source` | Where the value comes from |
| :--- | :--- |
| `native` | The game (health, armor, stamina, oxygen). |
| `framework` | The active bridge, by the name in `status` (ESX: esx_status names; QBCore / Qbox: metadata). |
| `event` | A client event with a 0–100 value (`event`, default `fwb_hud:status:<id>`). |
| `export` | `exports[resource][export]()`, polled every status tick. |

Every status also accepts `exports.fwb_hud:SetStatus(id, value)`. The look fields (label, icon, colour, low / warn) are only starting values — after the first start, edit them in **/fwb_hud → Statuses**.

---

## Default Keys

| Action | Key |
| :--- | :--- |
| Seatbelt | `K` |
| Cruise control | `Y` |
| Engine | `G` |
| Indicators left / right / hazard | `←` / `→` / `↑` |
| Nitro boost | `Left Shift` |
| Cancel a progress bar | `X` |
| Cinematic mode | `F9` |
| Show money (hold) | `F10` |

Players can rebind them in GTA's key bindings (FiveM section) or in `/hudsettings → Keys`.
