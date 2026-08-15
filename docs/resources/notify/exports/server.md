---
title: Notify Server Exports & Events | FWB Studio Docs
description: Complete server-side exports and events reference for FiveM Notify script (fs_notify).
---

# Server Exports & Events

`fs_notify` provides clean server exports and events to send notifications to individual players or broadcast announcements to everyone online.

---

## Exports

::: details exports['fs_notify']:show(target, message, notificationType, duration, title)
Sends a notification from the server to one specific player or broadcasts it to all players.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `target` | `number` | **Yes** | Target player `source` ID, or `-1` to broadcast to all connected players |
| `message` | `string` | **Yes** | The notification text message |
| `notificationType` | `string` | No | Notification type: `'success'`, `'info'`, `'warning'`, or `'error'` (defaults to `'success'`) |
| `duration` | `number` | No | Duration in milliseconds to display the alert (defaults to `5000`) |
| `title` | `string` | No | Optional header title text for the notification card |

### Returns
* `boolean`: `true` if dispatched successfully.

### Examples

**Targeting a Single Player (`source`):**
```lua
exports.fs_notify:show(source, 'Your paycheck of [$1,250] has been deposited.', 'success', 5000, 'Salary')
```

**Broadcasting to All Players (`-1`):**
```lua
exports.fs_notify:show(-1, 'Scheduled server restart in [15 minutes].', 'warning', 10000, 'Server Announcement')
```
:::

::: details exports['fs_notify']:OpenMenu(target)
Forces the notification styling editor menu to open for a specific target player from the server side.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `target` | `number` | **Yes** | Target player `source` ID |

### Returns
* `boolean`: `true` if menu trigger was sent, `false` if invalid player ID.

### Example
```lua
RegisterCommand('editnotify', function(source, args)
    -- Allow admins to open the shared editor for themselves
    exports.fs_notify:OpenMenu(source)
end, true)
```
:::

---

## Server-Triggered Client Events

::: details TriggerClientEvent('fs_notify:show', target, message, notificationType, duration, title)
Server event to push a notification directly to a client without calling exports.

### Examples

```lua
-- Send to one player
TriggerClientEvent('fs_notify:show', source, 'You purchased 5x Lockpicks.', 'success', 5000, 'Store')

-- Send to all players
TriggerClientEvent('fs_notify:show', -1, 'Air Drop event is starting in Sandy Shores!', 'warning', 8000, 'Event Alert')
```
:::
