---
title: Notify Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Notify script (fs_notify).
---

# Notify — Common Errors & FAQ

Have a question or encounter an issue while running **fs_notify**? Check the common questions and error solutions below.

---

### ❓ Q: Why does `/fs_notify` display a "Permission Required" screen?

::: danger Cause
This occurs when `AllowPlayerEdit = false` is set in `config/config.lua` and the player executing the command lacks the required ACE admin permission (`fs_notify.admin`).
:::

::: tip Solution
1. **To allow admins only**: Add the ACE permission to your `server.cfg`:
   ```lua
   add_ace group.admin fs_notify.admin allow
   # Or for your specific license:
   add_ace identifier.license:your_license_here fs_notify.admin allow
   ```
2. **To allow all players to customize their own styles**: Open `fs_notify/config/config.lua` and set:
   ```lua
   config.AllowPlayerEdit = true
   ```
3. Restart your server.
:::

---

### ❓ Q: Why are notifications not playing any audio sound?

::: danger Cause
The selected sound is set to `none`, sound volume is muted in GTA V audio settings, or a custom audio URL is not a direct audio link.
:::

::: tip Solution
1. Run `/fs_notify` in-game and select an active sound profile (e.g. `esx`, `okok`, `soft_chime`).
2. If using a **Custom Sound URL**, ensure the link is a direct, publicly accessible URL ending in `.mp3` or `.ogg` (e.g. hosted on Discord or a CDN).
3. Check `soundMode`: If set to `first_only`, subsequent notifications in a rapid burst will not play sounds to avoid spam. Set to `every_notify` if you prefer audio on every single alert.
:::

---

### ❓ Q: Does `fs_notify` require `fs_bridge`?

::: danger Cause
`fs_notify` is **100% standalone** and does **not** require `fs_bridge` to operate.
:::

::: tip Solution
In your `server.cfg`, simply ensure:
```lua
ensure fs_notify
```
:::

---

### ❓ Q: How can I replace my framework's default notification with `fs_notify`?

::: tip Solution
You can replace your framework's notification function in your core files or bridge scripts:

**For ESX (`es_extended`):**
```lua
function ESX.ShowNotification(message, type, duration)
    exports.fs_notify:show(message, type or 'info', duration or 5000)
end
```

**For QBCore (`qb-core`):**
```lua
function QBCore.Functions.Notify(text, texttype, length)
    exports.fs_notify:show(text, texttype or 'info', length or 5000)
end
```
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
