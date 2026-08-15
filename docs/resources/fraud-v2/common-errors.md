---
title: Fraud System v2 Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Fraud System v2 script.
---

# Fraud System v2 — Common Errors & FAQ

Have a question or encounter an issue while running **fs_fraud**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_fraud** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_fraud`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Scam equipment fails to operate or shows "No Power"?

::: danger Cause
`config.generator` in `fs_fraud/config/config.lua` is set to `true`, but no generator is placed nearby or the generator has run out of fuel.
:::

::: tip Solution
1. Place a generator (`fs_generator`) near your scam machines and ensure it is refueled with a petrol can (`WEAPON_PETROLCAN`).
2. If you prefer laptops (`fs_laptop`) to act directly as the power source without requiring a generator, open `fs_fraud/config/config.lua` and set `config.generator = false`.
:::

---

### ❓ Q: Black-market shops fail to charge black/dirty money?

::: danger Cause
`blackmoney = true` is set in `config.Shops`, but `fs_bridge` is not configured with your server's dirty money item or account name.
:::

::: tip Solution
1. Open `fs_bridge/config/sh_config.lua`.
2. Ensure your framework dirty money item or account (e.g. `'black_money'`, `'marked_bills'`) is properly configured in `fs_bridge`.
3. Restart `fs_bridge` and `fs_fraud`.
:::

---

### ❓ Q: Contract phone fails to trigger drop call locations?

::: danger Cause
The player item name in `config.Items.contractphone` does not match the item registered in your inventory, or the player is not using the contract phone item correctly.
:::

::: tip Solution
1. Open `fs_fraud/config/config.lua` and verify `config.Items.contractphone = 'fs_contractphone'`.
2. Verify that `fs_contractphone` is registered in your inventory items table.
3. Check `config.contract_phone.points` to ensure vector4 drop locations are accessible.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
