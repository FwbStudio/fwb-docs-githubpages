---
title: White Widow Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM White Widow (fs_whitewidow).
---

# White Widow — Common Errors & FAQ

Have a question or encounter an issue while running **fs_whitewidow**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_whitewidow` in your `server.cfg`.
:::

::: tip Solution
Ensure `fs_bridge` starts before `fs_whitewidow` in `server.cfg`:
```lua
ensure fs_bridge
ensure fs_whitewidow
```
:::

---

### ❓ Q: How do players roll and smoke harvested weed?

::: tip Solution
Install and start **fs_smoking**. In `fs_whitewidow/config/config.lua`, ensure:
```lua
config.smoking = true
```
Players can then use rolling papers (e.g. `backwoods_honey`, `raw_cone_king`) to roll harvested strains into joints.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
