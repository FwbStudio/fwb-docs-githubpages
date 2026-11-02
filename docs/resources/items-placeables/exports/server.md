---
title: Items Placeables Server Exports | FWB Studio Docs
description: Server-side exports for Items Placeables (fs_placeables) — runtime item registration.
---

# Server Exports

---

## Exports

:::: details exports['fs_placeables']:additem(item, data)
Adds an item to the server's item list. The server uses this list to pick the prop model when a player places the item.

::: warning Call it on both sides
The server call alone doesn't add the item to players' menus or targets. Call the [client export](./client) with the same data too.
:::

If the item is already in `Config.Items`, the call does nothing.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `item` | `string` | **Yes** | The item's spawn name |
| `data` | `table` | **Yes** | `[amount] = model`, same format as `Config.Items` |

### Example

```lua
-- shared script (runs on client and server), or call it in both your client and server files
exports['fs_placeables']:additem('packaged_drugs', {
    [1] = `prop_weed_block_01`
})
```
::::
