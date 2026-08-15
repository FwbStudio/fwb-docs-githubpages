---
title: Duty System Client Exports | FWB Studio Docs
description: Client exports for FiveM Duty System script (fs_dutysystem).
---

# Client Exports

Each export below is expandable. Open one to view description, arguments, return values, and usage examples.

::: details IsOnDuty

Checks if the local player is currently on duty.

**Arguments**

None.

**Return Value**

| Type | Description |
| --- | --- |
| `boolean` | `true` if the local player is currently ON duty, `false` if OFF duty. |

**Example**

```lua
local isOnDuty = exports['fs_dutysystem']:IsOnDuty()

if isOnDuty then
    print('Player is currently ON duty')
else
    print('Player is currently OFF duty')
end
```

:::

::: details ToggleDutyStatus

Toggles the duty status of the local player between on-duty and off-duty.

**Arguments**

None.

**Return Value**

None (`void`).

**Example**

```lua
-- Toggle local player's duty status
exports['fs_dutysystem']:ToggleDutyStatus()
```

:::
