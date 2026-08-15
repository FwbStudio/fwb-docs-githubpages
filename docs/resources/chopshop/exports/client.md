---
title: Chop Shop Client Exports | FWB Studio Docs
description: Client exports for FiveM Chop Shop script (fs_chopshop).
---

# Client Exports

Each export below is expandable. Open one to view description, arguments, return value, and usage examples.

::: details addplateblacklist

Adds a vehicle license plate to the chop shop blacklist on runtime, preventing players from dismantling the vehicle.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `plate` | `string` | Yes | The vehicle license plate text to blacklist from being chopped. |

**Example**

```lua
-- Blacklist vehicle plate 'VIP123' on runtime
exports['fs_chopshop']:addplateblacklist('VIP123')
```

:::
