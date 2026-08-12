---
title: Notify Server Exports | FWB Studio Docs
description: server exports for Notify.
---


# Server exports

Each export below is expandable. Open one to see description, arguments, return value, and example code.

::: details Notify()
Forward a notification from the server to one target client.

**Arguments**



| Name | Type | Notes |
|---|---|---|
| `source` | `number` | Target player source |
| `argument` | `table|string` | Notification payload, or a plain string that Bridge converts to `{ description = argument }` on the client |

**Returns**



- `nil`

**Example**

```lua
exports['fs_notify']:Notify(source, {
    title = 'Bridge',
    description = 'Garage updated',
    type = 'inform'
})
```
:::
