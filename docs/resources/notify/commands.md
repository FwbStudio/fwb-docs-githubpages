---
title: Notify Commands | FWB Studio Docs
description: In-game chat commands reference for FiveM Notify script (fs_notify) — styling editor and permissions.
---

# Notify — Commands

`fs_notify` provides an in-game command to open the live notification styling and customization menu.

---

## In-Game Commands

::: details /fs_notify
Opens the interactive in-game notification customization panel.

### Syntax
```
/fs_notify
```

*(The command name can be customized in `fs_notify/config/config.lua` under `config.command`)*

---

### Command Behaviors

#### 👤 When Player Editing is Enabled (`AllowPlayerEdit = true`)
* **Who can use it**: Available to **all players** on the server.
* **Function**: Opens the player personalization editor.
* **Persistence**: Any changes made by the player (position, audio sound, colors, font scale) are saved locally to their client-side KVP storage.
* **Scope**: Only affects the local player's screen; other players are unaffected.

#### 🛡️ When Player Editing is Disabled (`AllowPlayerEdit = false`)
* **Who can use it**: Restricted to **Server Administrators** with the `fs_notify.admin` ACE permission.
* **Function**: Opens the global server-wide notification editor.
* **Persistence**: Changes are saved directly to `current_config.json` on the server and broadcasted live across the server via `GlobalState`.
* **Scope**: Modifies the default notification appearance for **all players** on the server.
* **Non-Admin Feedback**: If a player without the required ACE permission runs `/fs_notify`, an access screen is shown explaining that player editing is disabled and displays the missing ACE permission.

---

### ACE Permission Setup (for Admin Mode)

To grant an administrator permission to open the shared editor when `AllowPlayerEdit = false`, add the following to your `server.cfg`:

```lua
# Grant to an entire admin group:
add_ace group.admin fs_notify.admin allow

# Or grant directly to a player's Rockstar license:
add_ace identifier.license:your_license_here fs_notify.admin allow
```
:::
