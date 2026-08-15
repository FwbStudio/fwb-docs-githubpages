---
title: Switch Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Switch (fs_switch).
---

# Switch — Common Errors & FAQ

Have a question or encounter an issue while running **fs_switch**? Check the common questions and error solutions below.

---

### ❓ Q: Does `fs_switch` require `fs_bridge`?

::: danger Cause
`fs_switch` is **completely self-contained** and includes its own multi-framework and multi-inventory bridge modules.
:::

::: tip Solution
In your `server.cfg`, start the resource directly:
```lua
ensure ox_lib
ensure fs_switch
```
:::

---

### ❓ Q: Why does nothing happen when using a switch item?

::: danger Cause
The player is either not holding a valid weapon specified in `Config.weapons`, or the inventory item name does not match `Config.switches`.
:::

::: tip Solution
1. Ensure the player has the base weapon (e.g. `WEAPON_COMBATPISTOL`) equipped in their hands.
2. Verify that the item name in your inventory matches `fs_switch` in `config/config.lua`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
