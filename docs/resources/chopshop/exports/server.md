---
title: Chop Shop Server Exports | FWB Studio Docs
description: Server exports for FiveM Chop Shop script (fs_chopshop).
---

# Server Exports

Each export below is expandable. Open one to view description, arguments, return value, and usage examples.

::: details addplateblacklist

Adds a vehicle license plate to the chop shop blacklist on runtime, preventing players from dismantling the vehicle.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `plate` | `string` | Yes | The vehicle license plate text to blacklist from being chopped. |

**Example**

```lua
-- Blacklist vehicle plate 'VIP123' on runtime from server script
exports['fs_chopshop']:addplateblacklist('VIP123')
```

:::
