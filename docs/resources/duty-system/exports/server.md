---
title: Duty System Server Exports | FWB Studio Docs
description: Server exports for FiveM Duty System script (fs_dutysystem).
---

# Server Exports

Each export below is expandable. Open one to view description, arguments, return values, and usage examples.

::: details IsOnDuty

Checks if a specific player is currently on duty.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Target player's server ID. |

**Return Value**

| Type | Description |
| --- | --- |
| `boolean` | `true` if the specified player is currently ON duty, `false` if OFF duty. |

**Example**

```lua
local source = 1 -- Target player server ID
local isOnDuty = exports['fs_dutysystem']:IsOnDuty(source)

if isOnDuty then
    print('Player ' .. source .. ' is ON duty')
else
    print('Player ' .. source .. ' is OFF duty')
end
```

:::

::: details ToggleDutyStatus

Toggles the duty status of a specific target player between on-duty and off-duty.

**Arguments**

| Name | Type | Required | Notes |
| --- | --- | --- | --- |
| `source` | `number` | Yes | Target player's server ID. |

**Return Value**

None (`void`).

**Example**

```lua
local source = 1 -- Target player server ID

-- Toggle target player's duty status from server script
exports['fs_dutysystem']:ToggleDutyStatus(source)
```

:::
