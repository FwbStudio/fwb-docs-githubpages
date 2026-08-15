---
title: Icebox Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Icebox script.
---

# Icebox — Common Errors & FAQ

Have a question or encounter an issue while running **fs_icebox**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_icebox** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_icebox`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: How do employees access the Icebox boss menu & storage replenishment?

::: danger Cause
The player's job rank is below `Config.Shop.managementRankFor.price` or `Config.Shop.managementRankFor.stock`.
:::

::: tip Solution
1. Open `fs_icebox/config/Config.lua`.
2. Adjust `Config.Shop.managementRankFor` parameters to match your framework's job rank numbers for manager/boss positions.
3. Ensure the player has the configured job name assigned in your framework.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
