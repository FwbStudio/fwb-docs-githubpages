---
title: Notify Client Exports | FWB Studio Docs
description: client exports for Notify.
---


# Client exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details Notify()
Send a client notification through the active Bridge notification integration.

**Arguments**



| Name | Type | Notes |
|---|---|---|
| `argument` | `table|string` | Notification payload, or a plain string that Bridge converts to `{ description = argument }` |
| `argument.title` | `string` | Optional title |
| `argument.description` | `string` | Main notification text |
| `argument.type` | `string` | Optional type such as `inform`, `success`, `warning`, or `error` |
| `argument.position` | `string` | Optional position. Defaults to `top` |
| `argument.duration` | `number` | Optional duration in milliseconds. Defaults to `5000` |

**Returns**



- integration-specific result
- `nil`

**Example**

```lua
exports['fs_notify']:Notify({
    title = 'Bridge',
    description = 'Vehicle created successfully',
    type = 'success',
    duration = 5000,
    position = 'top'
})
```
:::
