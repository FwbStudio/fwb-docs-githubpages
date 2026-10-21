---
title: Bodybag Client Exports | FWB Studio Docs
description: Client exports for the FiveM Bodybag script (ESX / QBCore / Qbox).
---

# Client Exports

Each export below is expandable. Open one to view description, arguments, return value, and usage examples.

::: details useBodybag

Uses a bodybag item on the closest dead or laststand player. This is the same flow as using the item from the inventory: nearby players are sent to the server, which checks distance, death status, item ownership and access before bagging. The item is consumed by the server only after bagging succeeds, so never configure the inventory to consume it as well.

ox_inventory calls this export automatically through the item's `client.export`. Other inventories use the framework usable-item callback, so you only need this export for custom item flows.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `item` | `string` or `table` | Yes | The bodybag item name (for example `fs_deadbodybag`), or an item table with a `name` field. The item must be configured in **Bodybag Items**. |

**Example**

```lua
-- ox_inventory item definition (data/items.lua)
['fs_deadbodybag'] = {
    label = 'Body Bag',
    weight = 1000,
    stack = true,
    close = true,
    consume = 0, -- Server consumes the item only after successful bagging.
    client = { export = 'fs_bodybag.useBodybag' },
},

-- Calling it from another client script
exports['fs_bodybag']:useBodybag('fs_deadbodybag')
```

:::

::: details placeLocation

Opens the Bodybag placement tool so another client resource can let the player pick a position. Only a local preview is created, and it is deleted when placement is confirmed or cancelled.

Controls: **WASD** moves the camera, **Shift** speeds up, **Ctrl** slows down, **click** pins the point, **arrows** and **Q/E** adjust it, **scroll** rotates the prop or changes the sphere radius, **right-click** unpins, **Enter** confirms, and **Backspace/Escape** cancels. The camera is limited to 30 metres from the player.

The export only returns coordinates. Your resource must authorize and validate anything it saves.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `options` | `table` | Yes | Placement options (see below). |
| `callback` | `function` | Yes | Called once with the result table. |

**Options**

| Field | Type | Notes |
| --- | --- | --- |
| `mode` | `string` | `prop` (place a model), `sphere` (pick an area) or `walk` (stand on the spot and confirm). |
| `model` | `string` | Preview model for `prop` mode. Defaults to `xm_prop_body_bag`. |
| `heading` | `number` | Starting heading. Defaults to the player's heading. |
| `radius` | `number` | Starting sphere radius, clamped to 1–25. Defaults to `5`. |

**Returns (callback)**

| Result | Meaning |
| --- | --- |
| `{ ok = true, data = { x, y, z, heading, radius } }` | Placement confirmed. |
| `{ ok = false, cancelled = true }` | The player cancelled. |
| `{ ok = false, error = '...' }` | Placement failed, for example another action is running or the model is invalid. |

**Example**

```lua
exports['fs_bodybag']:placeLocation({
    mode = 'prop',
    model = 'prop_coffin_02b',
}, function(result)
    if not result.ok then
        return
    end
    local point = result.data
    print(('Placed at %.2f, %.2f, %.2f (heading %.1f)'):format(point.x, point.y, point.z, point.heading))
end)
```

:::
