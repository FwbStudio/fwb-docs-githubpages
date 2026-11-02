---
title: Items Placeables Client Exports | FWB Studio Docs
description: Client-side exports and events for Items Placeables (fs_placeables) — runtime item registration and starting placement.
---

# Client Exports

---

## Exports

:::: details exports['fs_placeables']:additem(item, data)
Makes an item placeable at runtime without editing `config.lua`. On the client it adds the item to the placement menu and adds the pickup target to its models.

::: warning Call it on both sides
The client and server each keep their own item list. Call `additem` with the same data on the **client** (menu and target) and the **server** (prop model). See [Server Exports](./server).
:::

If the item is already in `Config.Items`, the call does nothing.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `item` | `string` | **Yes** | The item's spawn name |
| `data` | `table` | **Yes** | `[amount] = model`, same format as `Config.Items` |

### Example

```lua
exports['fs_placeables']:additem('repairkit', {
    [1] = `prop_tool_box_04`
})
```
::::

---

## Events

::: details TriggerEvent('fs_placeables:placeitemhook', item, count)
Starts placement of `count` of `item` without the menu. Use it from a usable item, an ox_inventory item button, a radial menu, etc.

The server checks the player has enough before the preview opens. The item is only taken when the prop is placed.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `item` | `string` | **Yes** | Item name in `Config.Items` (or `money` / `black_money` / `markedbills`) |
| `count` | `number` | No | Amount to place. Defaults to `1`. Use an amount from `Config.Items`, otherwise the `[1]` model or `Config.defaultprop` is used |

### Example

```lua
-- client side
TriggerEvent('fs_placeables:placeitemhook', 'money', 10000)

-- from a server script
TriggerClientEvent('fs_placeables:placeitemhook', source, 'repairkit', 1)
```

For an ox_inventory button example, see [Place Money Using ox_inventory](../place-money-ox-inventory#optional-add-a-place-button-to-the-money-item).
:::
