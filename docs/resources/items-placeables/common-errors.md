---
title: Items Placeables Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Items Placeables script (fs_placeables).
---

# Items Placeables — Common Errors & FAQ

Have a question or encounter an issue while running **fs_placeables**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
This occurs when `fs_bridge` is missing, stopped, or started **after** `fs_placeables` in your `server.cfg`.
:::

::: tip Solution
1. Ensure `fs_bridge` is present inside your `resources/[fs]/` directory.
2. In your `server.cfg`, ensure `fs_bridge` is started before `fs_placeables`:
   ```lua
   ensure fs_bridge
   ensure fs_placeables
   ```
:::

---

### ❓ Q: Why does `/placeprop` show an empty menu?

::: danger Cause
The player has no items in their inventory that match the names defined in `Config.Items` in `config/config.lua`.
:::

::: tip Solution
1. Open `fs_placeables/config/config.lua`.
2. Ensure the item names configured in `Config.Items` (e.g. `cash`, `money`, `burger`, `water_bottle`) match your framework/inventory item names exactly.
3. Give your character that item in-game and try `/placeprop` again.
:::

---

### ❓ Q: Props spawn as a default cardboard box instead of the item model?

::: danger Cause
The prop model name specified in `Config.Items` is invalid, misspelled, or failing to load in GTA V. The script automatically falls back to `Config.defaultprop` (`hei_prop_heist_box`) to prevent crashes.
:::

::: tip Solution
1. Verify the model hash name in `Config.Items` (e.g. `prop_cash_pile_01`, `prop_ecola_can`).
2. If using custom streamed addon props, ensure the prop's `.ydr` and `.ytyp` are loaded on the server before `fs_placeables`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
