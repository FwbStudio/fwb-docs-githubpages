---
title: Fraud System v2 Server Editable Files | FWB Studio Docs
description: Unencrypted server functions for FiveM Fraud System v2 script (fs_fraud_v2).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426477" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Fraud System v2 — Server Editable Files

Unencrypted server-side functions in `fs_fraud/editable/server.lua` allow developers to customize server-side placement validation for scam devices and integrate third-party housing or territory systems.

---

## Server-Side Placement Validation

### `CanPlaceItem(source, item)`

* **Parameters:**
  * `source` (`number`): The server ID of the player attempting to place an item.
  * `item` (`string`): The item name being placed (e.g. `'fs_laptop'`, `'fs_generator'`, `'fs_skimmer'`, `'fs_printer'`, `'fs_cardshark'`, `'fs_clonejack'`, `'fs_doppel'`).
* **Return Value:** `boolean` (`true` to allow item placement, `false` to block placement).
* **Usage:** Use this function to implement server-side checks such as verifying if a player is inside a specific housing instance, safezone, or gang territory before allowing them to deploy scam equipment.

```lua
-- This function should return true if player can successfully place the item
-- This function should return false if player cannot place the item

function CanPlaceItem(source, item)
    -- Example server-side validation:
    -- You can add code here if your housing script provides a server export:
    -- if exports['qs-housing']:isPlayerInHouse(source) then
    --     return false
    -- end

    return true
end
```
