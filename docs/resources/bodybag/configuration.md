---
title: Bodybag Configuration | FWB Studio Docs
description: Bodybag v2.0 configuration for FiveM, ESX, QBCore and Qbox servers.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Configuration

Most settings are managed through **/fs_bodybag** and stored in SQL. There is no v1 `config/config.lua` setup in this version.

## Admin pages

| Page | What to configure |
| --- | --- |
| Items | Item availability, model, use time, consumption, Carry/open permissions, disposal methods, deletion and whitelists |
| Active Players | Bodybag and Last World processes, remaining time, cooldowns, skip and revive/return actions |
| Locations | Burial/cremation areas, prop positions, enabled state, blips and teleport tools |
| Shops | Ped model/position, items, prices, availability, blips and teleport |
| Character Deletion | Character-table selection and supported identifier mappings |
| Inventory | Tool/reward items and inventory removal policy |
| Backups | Inspect saved data, check restore eligibility, restore or remove backups |
| Last World | Hell/Heaven chance, separate centers/radii, stay duration, return position and map verification |
| General | Gameplay limits, reuse cooldown, weapon-check timing and general behavior |
| Funerals | Display/collection timers, rewards by disposal method, announcements and blips |
| Recovery | Pending deletion and uncertain inventory/payment operations |
| Logs | Provider, destinations and selected events |

Use **Apply changes** in editors and **Save changes** where shown. Check the footer for save success before closing. Logging configuration has its own save flow. Saved SQL settings take precedence over first-install defaults.

## Locations and placement

Static burial and cremation actions appear only at matching enabled locations. Burial has a coffin position and burial area; cremation supports a sphere or disposal prop setup. Blips have label, sprite, color, scale and short-range settings.

Follow the placement tool's hints. Click sets the center, right-click undoes placement, scroll adjusts radius or heading, Enter confirms and Backspace/Escape cancels. The return-position tool lets you move normally and capture your current position and heading.

## Funerals and rewards

Enable rewards independently for cemetery burial, furnace cremation, bury anywhere and burn anywhere. The coffin/clone display timer is separate from the burial plant's collection process. Wait, dig and reward-preparation durations are configurable.

Rewards can include the deceased character's name when the inventory supports metadata. An external smoking resource must be configured separately to make the reward usable for smoking.

## Last World and cooldowns

Non-deletion disposal requires verified Last World destinations. Stay times persist across reconnects. Radius checks return residents to the configured center; weapon checks use the inventory disarm integration. Framework hunger and thirst are periodically refilled.

Bodybag reuse cooldown is saved per character. It remains after bag removal or disposal. Active Players includes cooldown-only entries and a **Clear cooldown** action, including offline character entries. Clearing a cooldown does not end another active process.

## Languages

Copy `locales/en.lua`, change `Bodybag.Locales.en` to your language code and change `label`. Translate values inside `strings`, retaining the keys and placeholders. Set the locale and restart:

```cfg
setr fs_bodybag_locale en
```

## Logs

Discord supports multiple destinations; FiveManage and Custom support one each. Select the events each destination records. Settings saves are not logged. Discord events use labeled embeds; deletion queued, completed and failed are separate outcomes.

For FiveManage, start `fmsdk` and configure `FIVEMANAGE_LOGS_API_KEY` on the server. Keep secrets in server configuration. Discord delivery retries transient failures but is not persistent across resource restarts.

