---
title: Chop Shop Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Chop Shop script (fs_chopshop).
---

# Chop Shop — Common Errors & FAQ

Have a question or encounter an issue while running **fs_chopshop**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_chopshop** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_chopshop`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Dismantled items (`fs_door`, `fs_bonnet`, `fs_boot`) are not giving items or missing in inventory?

::: danger Cause
This happens when the items are not registered in your inventory framework, or `fs_bridge` was started **before** your inventory resource in `server.cfg`.
:::

::: tip Solution
1. In your `server.cfg`, ensure your inventory resource (e.g., `ox_inventory`, `qb-inventory`, `qs-inventory`) is ensured **before** `[fs]`.
2. Open `fs_chopshop/[INSTALL_ME_FIRST]` and copy the item definitions for `fs_door`, `fs_bonnet`, and `fs_boot` into your inventory items configuration.
3. Check `fs_bridge/config/sh_config.lua` and verify that the inventory setting matches your active inventory system.
4. Restart your server.
:::

---

### ❓ Q: Players cannot start chopping vehicles at a station ("Not enough police on duty")?

::: danger Cause
`Config.Stations[1].need_job` is enabled in `fs_chopshop/config/config.lua`, but there are fewer active duty police officers logged into the server than required.
:::

::: tip Solution
1. Check `Config.Stations[1].need_job` in `fs_chopshop/config/config.lua`.
2. Ensure active duty players are clocked into the required job (`police`, `sheriff`, etc.).
3. To allow chopping without requiring online police officers, set `need_job.enable = false` in `config.lua`.
:::

---

### ❓ Q: Certain vehicles or emergency cars cannot be chopped at stations?

::: danger Cause
The vehicle model, vehicle class, or license plate text is matched in `Config.blacklistmodels`, `Config.blacklistClasses`, or `Config.blacklistplates`.
:::

::: tip Solution
1. Open `fs_chopshop/config/config.lua`.
2. Check `Config.blacklistClasses` (e.g. `[18] = true` for Emergency vehicles) or `Config.blacklistplates`.
3. Set the specific model, class ID, or plate string to `false` if you want to allow players to chop those vehicles.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
