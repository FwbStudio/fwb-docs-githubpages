---
title: Appearance Client Hooks | FWB Studio Docs
description: FWB Appearance client hooks for FiveM — stop menus opening, change or skip the look a player gets at login, and react when looks, models and menus change.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Appearance — Client Hooks

Same idea as the [server hooks](./server), on the player's game.

| Where | For |
| :--- | :--- |
| `bridge/hooks/client.lua` | Server owners. Not escrowed. |
| `exports.fwb_appearance:registerClientHook(name, fn)` | Other resources (a before hook) |
| `AddEventHandler('fwb_appearance:client:<event>', fn)` | Other resources (every after event) |

## Before hooks

| Hook | When | `data` |
| :--- | :--- | :--- |
| `openEditor` | A shop, the creator or another menu opens | `mode, sections, shop` |
| `openWardrobe` | A wardrobe opens | `wardrobe, label` |
| `loadLook` | The saved look is about to be put on at login · *changeable*. `false` = leave the player as they are (your own script dresses them) | `appearance` |

### Example
```lua
-- bridge/hooks/client.lua: no shopping in a vehicle
function before.openEditor(data)
    if data.mode ~= 'creator' and IsPedInAnyVehicle(PlayerPedId(), false) then
        return false, 'Get out of the vehicle first'
    end
    return true
end
```

## After events

| Event | When | `data` |
| :--- | :--- | :--- |
| `loaded` | The saved look was put on (login, reload) | `appearance` |
| `applied` | A whole look was put on the player | `appearance` |
| `modelChanged` | The player's model changed | `model` |
| `editorOpened` / `editorClosed` | A menu opened / closed | `mode` / `mode, saved` |
