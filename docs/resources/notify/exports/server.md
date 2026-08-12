---
title: Notify Server Exports | FWB Studio Docs
description: Server exports for fs_notify.
---


# Server exports

<details class="fwb-faq">
<summary><code>Notify</code> — send notification to a player</summary>

Forward a notification from the server to one target client.

**Arguments**

| Name | Type | Notes |
| --- | --- | --- |
| `source` | `number` | Target player server id |
| `argument` | `table` \| `string` | Payload, or plain string → `{ description = argument }` on client |

**Example**

```lua
exports['fs_notify']:Notify(source, {
    title = 'FWB',
    description = 'Garage updated',
    type = 'inform'
})
```

</details>
