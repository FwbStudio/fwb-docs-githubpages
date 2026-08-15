---
title: Fraud System v1 Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Fraud System v1 script.
---

# Fraud System v1 — Common Errors & FAQ

Have a question or encounter an issue while running **fs_fraud_v1**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_fraud_v1** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_fraud_v1`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Item icons are missing or blank in context menus?

::: danger Cause
`Config.ImagePath` in `fs_fraud_v1/config/config.lua` is set to an incorrect inventory icon directory for your server setup.
:::

::: tip Solution
1. Open `fs_fraud_v1/config/config.lua`.
2. Update `Config.ImagePath` to match your inventory system image path:
   - For `ox_inventory`: `'nui://ox_inventory/web/images/'`
   - For `qs-inventory`: `'nui://qs-inventory/html/images/'`
3. Restart `fs_fraud_v1`.
:::

---

### ❓ Q: Generator turns off immediately or placed equipment loses power?

::: danger Cause
`Config.InfinteFuel` is set to `false`, and the generator has no fuel in its tank.
:::

::: tip Solution
1. Ensure players have a petrol can (`WEAPON_PETROLCAN`) in their inventory to refuel the generator.
2. If you want generators to run infinitely without requiring fuel cans, open `fs_fraud_v1/config/config.lua` and set `Config.InfinteFuel = true`.
:::

---

### ❓ Q: Insertion command `/insertcc` at ATMs does not work?

::: danger Cause
The player is not standing close enough to a supported ATM prop (`prop_atm_01`, `prop_fleeca_atm`, etc.) or the cloned card item name in `Config.Items.clonnedcard` does not match your inventory.
:::

::: tip Solution
1. Stand directly in front of a supported ATM prop listed in `Config.Atm.models`.
2. Open `fs_fraud_v1/config/config.lua` and verify that `Config.Items.clonnedcard` matches your inventory item registration (`fs_clonnedcard`).
3. Verify that `/insertcc` is typed correctly in chat.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
