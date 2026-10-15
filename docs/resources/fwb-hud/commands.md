---
title: FWB HUD Commands | FWB Studio Docs
description: FWB HUD chat commands for FiveM — /fwb_hud admin panel, /hud toggle and /hudsettings player menu, with ACE permission setup.
---

# FWB HUD — Commands

FWB HUD has three chat commands. Their names can be changed in game under **/fwb_hud → Commands & keys**.

---

## In-Game Commands

::: details /fwb_hud
Opens the admin control centre: server look, statuses, features, vehicles, players, permissions, commands & keys and bridge.

### Syntax
```
/fwb_hud
```

### Permission
Requires the `fwb_hud.admin` ACE. A player without it sees a screen with their own `add_ace` line and a copy button.

```lua
add_ace group.admin fwb_hud.admin allow
# or
add_ace identifier.license:your_license_here fwb_hud.admin allow
```
:::

::: details /hud
Shows or hides the HUD for yourself.

### Syntax
```
/hud
```

Available to all players.
:::

::: details /hudsettings
Opens the player's own HUD menu: themes, layout editor, values, map / speed / money and keys.

### Syntax
```
/hudsettings
```

Available to all players. Admins decide what players may change in **/fwb_hud → Permissions**.
:::

---

## Key Bindings

Key actions (seatbelt, cruise, engine, indicators, nitro, cinematic mode, money) are registered as FiveM key bindings and are not shown in chat. See [Configuration → Default Keys](./configuration#default-keys).
