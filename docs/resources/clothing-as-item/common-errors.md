---
title: Clothing As Item Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Clothing As Item script.
---

# Clothing As Item — Common Errors & FAQ

Have a question or encounter an issue while running **fs_clothingitem**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_clothingitem** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_clothingitem`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Clothing items are removed from inventory but outfit does not load on player?

::: danger Cause
If running QBCore, `qb-clothing` is missing the `qb-clothing:client:loadOutfit` event handler or `qb-inventory` is missing the `onRemoveInventoryItem` event trigger.
:::

::: tip Solution
1. Open [`docs/resources/clothing-as-item/installation`](./installation).
2. Follow **QBCore Framework Modifications** and add `TriggerEvent('qb-core:onRemoveInventoryItem', ...)` into your `qb-inventory/server/main.lua`.
3. Add the `qb-clothing:client:loadOutfit` and `qb-clothing:getSkin` event handlers to the bottom of `qb-clothing/client/main.lua`.
4. Restart your server.
:::

---

### ❓ Q: Robbery commands (`/robchain`, `/robhat`, `/robmask`) say target player must have hands up?

::: danger Cause
`target_handsup = true` is set in `config.RobCommands` for that clothing slot, and the target player is not performing a hands-up animation or cuffed.
:::

::: tip Solution
1. Tell the target player to raise their hands (or cuff them).
2. Alternatively, open `fs_clothingitem/config/config.lua` and set `target_handsup = false` for that clothing slot to allow robbing without hands up.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
