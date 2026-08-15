---
title: Clothing As Item Client Editable Files | FWB Studio Docs
description: Unencrypted client functions for FiveM Clothing As Item script (fs_clothingitem).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Clothing As Item — Client Editable Files

Unencrypted client-side functions allow you to customize target state checks (dead / hands-up), skill check minigames, robbery permission checks, and wear item conditions.

---

## Unencrypted Client Functions

```lua
-- Returns true if target player ped is dead or dying
function isPlayerDead(ped, playerserverid)
    return IsPedDeadOrDying(ped, true)
end

-- Returns true if target player ped has hands up or is cuffed
function IsPlayerhandsup(ped)
    return IsPedCuffed(ped)
    or IsEntityPlayingAnim(ped, 'missminuteman_1ig_2', 'handsup_base', 3)
    or IsEntityPlayingAnim(ped, 'missminuteman_1ig_2', 'handsup_enter', 3)
    or IsEntityPlayingAnim(ped, 'random@mugging3', 'handsup_standing_base', 3)
end

-- Robbery skill check minigame
-- typeof: 'bag', 'chains', 'decals', 'ear', 'glass', 'hat', 'mask', 'pant', 'shoes', 'torso', 'vest', 'watches', 'outfits'
function minigame(typeof, itemName)
    local success = lib.skillCheck({ 'easy', 'easy', 'easy' }, { 'a', 's', 'd', 'w' })
    return success
end

-- Custom check to allow/disallow robbing a specific clothing item (returns true or false)
function CanRob(typeof, itemName)
    return true
end

-- Custom check to allow/disallow wearing a specific clothing item (returns true or false)
function CanWearItem(typeof, itemName)
    return true
end
```
