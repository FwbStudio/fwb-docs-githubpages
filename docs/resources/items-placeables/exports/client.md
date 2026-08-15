---
title: Items Placeables Client Exports | FWB Studio Docs
description: Client-side exports for Items Placeables (fs_placeables) — dynamic runtime item registration.
---

# Client Exports

`fs_placeables` provides an export to dynamically register new placeable inventory items and target interactions at runtime from third-party client scripts.

---

## Exports

::: details exports['fs_placeables']:additem(item, data)
Dynamically registers an inventory item to become placeable in the world without editing `config.lua`.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `item` | `string` | **Yes** | The inventory item spawn name |
| `data` | `table` | **Yes** | Table of quantity thresholds mapped to GTA V prop model hashes |

### Example

```lua
-- Register a custom repair kit and toolbox prop at runtime
exports['fs_placeables']:additem('repairkit', {
    [1] = `prop_tool_box_04`
})

-- Register a dynamic cash stack
exports['fs_placeables']:additem('black_money', {
    [1000] = `prop_cash_pile_01`,
    [10000] = `prop_money_bag_01`,
    [1000000] = `prop_cash_case_01`,
})
```
:::
