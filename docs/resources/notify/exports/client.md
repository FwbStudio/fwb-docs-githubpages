---
title: Notify Client Exports & Events | FWB Studio Docs
description: Complete client-side exports and events reference for FiveM Notify script (fs_notify).
---

# Client Exports & Events

`fs_notify` provides clean client exports and event listeners to trigger notifications or open the styling editor from any client-side script.

---

## Exports

::: details exports['fs_notify']:show(message, notificationType, duration, title)
Displays a notification on the local client screen.

### Arguments

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `message` | `string` | **Yes** | The notification text message |
| `notificationType` | `string` | No | Notification type: `'success'`, `'info'`, `'warning'`, or `'error'` (defaults to `'success'`) |
| `duration` | `number` | No | Duration in milliseconds to display the alert (defaults to `5000`) |
| `title` | `string` | No | Optional header title text for the notification card |

### Returns
* `boolean`: `true` if displayed successfully, `false` otherwise.

### Examples

```lua
-- Standard notification with rich brackets [...]
exports.fs_notify:show('You received [$500] cash from the ATM.', 'success', 5000, 'Banking')

-- Keybind interaction prompt
exports.fs_notify:show('Press [E] to unlock the door or [G] to knock.', 'info', 5000, 'Property')
```
:::

::: details exports['fs_notify']:OpenMenu()
Opens the in-game notification customization menu.

### Returns
* `boolean`: `true` if menu was opened, `false` if access was denied.

### Example
```lua
exports.fs_notify:OpenMenu()
```
:::

---

## Client Events

::: details TriggerEvent('fs_notify:show', message, notificationType, duration, title)
Local client event to trigger a notification without calling exports directly.

### Example
```lua
TriggerEvent('fs_notify:show', 'You paid $25 for fuel.', 'success', 4000, 'Gas Station')
```
:::

::: details TriggerEvent('fs_notify:openMenu', payload)
Local client event to open the editor menu in a specific mode.

### Example
```lua
TriggerEvent('fs_notify:openMenu', {
    mode = 'player' -- 'player' or 'admin'
})
```
:::
