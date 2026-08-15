---
title: Items Placeables Server Exports | FWB Studio Docs
description: Server-side exports for Items Placeables (fs_placeables).
---

# Server Exports

`fs_placeables` shares the item registration export across both client and server runtime environments.

---

## Exports

::: details exports['fs_placeables']:additem(item, data)
Registers an inventory item as placeable on the server side so that placement validation and sync operate smoothly across all connecting clients.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `item` | `string` | **Yes** | The inventory item spawn name |
| `data` | `table` | **Yes** | Table of quantity thresholds mapped to GTA V prop model hashes |

### Example

```lua
-- Register a placeable item on server start
exports['fs_placeables']:additem('packaged_drugs', {
    [1] = `prop_weed_block_01`
})
```
:::
