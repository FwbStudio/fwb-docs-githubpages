---
title: Fraud System v2 Client Editable Files | FWB Studio Docs
description: Unencrypted client functions for FiveM Fraud System v2 script (fs_fraud_v2).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426477" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v2 — Client Editable Files

Unencrypted client-side functions in `fs_fraud/editable/client.lua` allow you to customize placement restrictions (e.g., housing checks), 3D text UI, device/selling minigames, control disabling, and custom dispatch alerts.

---

## 1. Item Placement Checks

### `CanPlaceItem(item_name)`
* **Description:** Controls whether a player can place a scam device (`laptop`, `generator`, `skimmer`, `printer`, `cardshark`, `clonejack`, `doppel`) at their current location. Return `true` to allow placement or `false` to block placement (e.g. inside housing instances).

```lua
function CanPlaceItem(item_name)
    -- Example integration with qs-housing to prevent placing items inside housing
    if GetResourceState('qs-housing') == 'started' then
        if exports['qs-housing']:getCurrentHouse() then
            return false
        end
    end

    return true
end
```

---

## 2. 3D Text & Help Notifications

### `Draw3DText(position, text)`
* **Description:** Custom 3D text renderer used for in-world placement labels and object interactions.

```lua
function Draw3DText(position, text)
    SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry("STRING")
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(position.x, position.y, position.z, 0)
    DrawText(0.0, 0.0)
    local factor = (string.len(text)) / 370
    DrawRect(0.0, 0.0 + 0.0125, 0.017 + factor, 0.03, 0, 0, 0, 75) -- Comment out to remove background box
    ClearDrawOrigin()
end
```

### `ShowHelpNotification(msg)`
* **Description:** Displays native GTA 5 top-left help notifications.

```lua
function ShowHelpNotification(msg)
    BeginTextCommandDisplayHelp('STRING')
    AddTextComponentSubstringPlayerName(msg)
    EndTextCommandDisplayHelp(0, false, true, -1)
end
```

---

## 3. Device Cloning Minigames

Customize or replace minigames used when cloning items at scam machines (`ClonnedCard`, `ForgedCheque`, `ClonnedGiftCard`, `ClonnedLotteryTicket`, `ClonnedSocialCard`). Supports integrations like `magni-cardswipe` or default `StartDataCrack(difficulty)`.

```lua
function ClonnedCard()
    if GetResourceState('magni-cardswipe') == 'started' then
        local promise = promise.new()
        exports["magni-cardswipe"]:cardswipe(
            function() promise:resolve(true) end,
            function() promise:resolve(false) end
        )
        return Citizen.Await(promise)
    end

    local success = StartDataCrack(3) -- Difficulty 1-5
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function ForgedCheque()
    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function ClonnedGiftCard()
    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function ClonnedLotteryTicket()
    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function ClonnedSocialCard()
    if GetResourceState('magni-cardswipe') == 'started' then
        local promise = promise.new()
        exports["magni-cardswipe"]:cardswipe(
            function() promise:resolve(true) end,
            function() promise:resolve(false) end
        )
        return Citizen.Await(promise)
    end

    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end
```

---

## 4. Selling Minigames

Minigames triggered when cashing out items at ATMs or NPC exchanger locations.

```lua
function AtmMiniGame_clonnedcard()
    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function AtmMiniGame_clonnedcheque()
    local success = StartDataCrack(3)
    if not success then
        FWB.Notification("Failed to pass security check.")
        return false
    end
    return true
end

function BankerMiniGame_clonnedcheque()
    return true
end

function GiftMinigame_clonnedGiftcard()
    return true
end

function LotteryMinigame_clonnedGiftcard()
    return true
end

function SocialMinigame_clonnedSocialCard()
    return true
end
```

---

## 5. Control Locking & Custom Dispatch

### Control Locks (`DisableControls` & `DisableTabletControls`)
* Disables player combat, firing, and movement actions while shop UIs or the fraud tablet interface are open.

```lua
function DisableControls(bool)
    -- Disables firing and inventory controls while shops are open
end

function DisableTabletControls(bool)
    -- Disables firing and movement controls while fraud tablet is open
end
```

### Custom Dispatch Integration (`Dispatch`)
* Invoked when fraud activities trigger police alerts. Calls `FWB.AddCustomDispatch(argument)` via FS Bridge or your custom dispatch script (cd_dispatch, ps-dispatch, qs-dispatch, etc.).

```lua
function Dispatch(argument, item_name)
    -- Default call to FWB Bridge custom dispatch function
    FWB.AddCustomDispatch(argument)
end
```
