---
title: Skitz Shoes Store Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Skitz Shoes Store (fs_skitz).
---

# Skitz Shoes Store — Common Errors & FAQ

Have a question or encounter an issue while running **fs_skitz**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_skitz` in your `server.cfg`.
:::

::: tip Solution
In your `server.cfg`, start `fs_bridge` before `fs_skitz`:
```lua
ensure fs_bridge
ensure fs_skitz
```
:::

---

### ❓ Q: Workbench prop is invisible or missing collision?

::: tip Solution
Ensure `stream/fs_prop_table_shoes.ytyp` is properly registered in `fxmanifest.lua`:
```lua
data_file 'DLC_ITYP_REQUEST' 'stream/fs_prop_table_shoes.ytyp'
```
:::

---

### ❓ Q: Why don't NPC buyers spawn when using the Buyers App?

::: danger Cause
The player's character ped model might not be in `config.restriction.allowedpeds` or the character is inside a vehicle or non-navigable zone.
:::

::: tip Solution
1. Ensure your ped model (e.g. `mp_m_freemode_01`, `mp_f_freemode_01`) is enabled in `config.restriction.allowedpeds`.
2. Stand on a public sidewalk or open area.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
