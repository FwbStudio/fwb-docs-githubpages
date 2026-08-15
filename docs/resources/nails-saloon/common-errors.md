---
title: Nails Saloon Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Nails Saloon script.
---

# Nails Saloon — Common Errors & FAQ

Have a question or encounter an issue while running **fs_nailssaloon**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_nailssaloon** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_nailssaloon`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Applied nail designs disappear after reopening the wardrobe or changing clothing?

::: danger Cause
Some clothing resources reset hand drawable/texture variations when loading standard outfits.
:::

::: tip Solution
1. Ensure your clothing script (`illenium-appearance`, `qb-clothing`, `esx_skin`) correctly saves and reapplies hands/arm textures when saving outfits.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
