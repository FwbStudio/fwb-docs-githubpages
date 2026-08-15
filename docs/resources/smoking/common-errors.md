---
title: Smoking Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Smoking (fs_smoking).
---

# Smoking — Common Errors & FAQ

Have a question or encounter an issue while running **fs_smoking**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_smoking` in your `server.cfg`.
:::

::: tip Solution
Ensure `fs_bridge` starts before `fs_smoking` in `server.cfg`:
```lua
ensure fs_bridge
ensure fs_smoking
```
:::

---

### ❓ Q: Players cannot light up a joint?

::: danger Cause
`config.Joint.lighter.needed = true` is enabled and the player is not carrying a `lighter` or `cheap_lighter` in their inventory.
:::

::: tip Solution
Give the character a `lighter` or set `config.Joint.lighter.needed = false` in `config/config.lua`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
