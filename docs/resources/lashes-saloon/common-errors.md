---
title: Lashes Saloon Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Lashes Saloon script.
---

# Lashes Saloon — Common Errors & FAQ

Have a question or encounter an issue while running **fs_lashessaloon**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_lashessaloon** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_lashessaloon`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Applied lashes reset after opening a clothing store or wardrobe menu?

::: danger Cause
Some clothing scripts overwrite prop/drawable slots when saving outfits unless configured to ignore lash component slots.
:::

::: tip Solution
1. Ensure your clothing resource saves prop and accessory variation slots properly.
2. If using `qb-clothing` or `illenium-appearance`, ensure character skins are saved after applying lashes at the salon.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
