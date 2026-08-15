---
title: Pizza Shop Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Pizza Shop script.
---

# Pizza Shop — Common Errors & FAQ

Have a question or encounter an issue while running **fs_pizzashop**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_pizzashop** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Resource items or UI are not working or missing in inventory?

::: danger Cause
This happens when the correct inventory is not detected because `fs_bridge` was started **before** your inventory resource in `server.cfg`, or due to an incorrect inventory selection in `fs_bridge` configuration.
:::

::: tip Solution
1. In your `server.cfg`, ensure your inventory resource (e.g., `ox_inventory`, `qb-inventory`, `qs-inventory`) is ensured **before** `[fs]`.
2. Check `fs_bridge/config/sh_config.lua` and verify that the inventory setting matches your installed inventory system.
3. Open `fs_pizzashop/[INSTALL_ME_FIRST]` and use the item/sql blocks for your inventory system.
4. Restart your server cleanly.
:::

---

### ❓ Q: Error saying item or database entry is missing in framework items?

::: danger Cause
This happens because `fs_bridge` was started **before** your inventory resource in `server.cfg`, or `fs_bridge` is ensured separately at the top of your `server.cfg`. As a result, `fs_bridge` fails to detect your inventory system and falls back to default framework item checks.
:::

::: tip Solution
1. Place `fs_bridge` inside the `resources/[fs]/` category folder alongside your other FWB resources.
2. Make sure `fs_bridge` is **not** ensured separately in your `server.cfg`.
3. In your `server.cfg`, ensure your inventory resource (e.g. `ox_inventory`, `qs-inventory`) **before** `[fs]`.
4. Ensure `[fs]` at the end of your ensured resources in `server.cfg`:
   ```lua
   ensure ox_inventory

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
5. Restart your server.
:::

---

### ❓ Q: Food or drink items are not consumable or usable from inventory?

::: danger Cause
This issue occurs because `fs_useablefoods` is missing, not started, or not installed in your `resources/[fs]/` folder. `fs_useablefoods` handles all consumable food/drink item effects and eating/drinking animations.
:::

::: tip Solution
1. Download `fs_useablefoods` from your Tebex / Keymaster purchase package.
2. Place `fs_useablefoods` inside your `resources/[fs]/` category folder.
3. Make sure `[fs]` is ensured at the end of your `server.cfg`:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
4. Restart your server cleanly.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
