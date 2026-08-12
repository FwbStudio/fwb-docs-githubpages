---
title: Notify Client Exports | FWB Studio Docs
description: Client exports for fs_notify.
---


# Client exports

<details class="fwb-faq">
<summary><code>Notify</code> — send a client notification</summary>

Send a notification through the active Bridge notification integration.

**Arguments**

| Name | Type | Notes |
| --- | --- | --- |
| `argument` | `table` \| `string` | Payload, or plain string → `{ description = argument }` |
| `argument.title` | `string` | Optional title |
| `argument.description` | `string` | Main message |
| `argument.type` | `string` | `inform`, `success`, `warning`, or `error` |
| `argument.position` | `string` | Default `top` |
| `argument.duration` | `number` | Milliseconds. Default `5000` |

**Example**

```lua
exports['fs_notify']:Notify({
    title = 'FWB',
    description = 'Vehicle created successfully',
    type = 'success',
    duration = 5000,
    position = 'top'
})
```

</details>
