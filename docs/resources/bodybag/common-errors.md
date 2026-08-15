---
title: Bodybag Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Bodybag script.
---

# Bodybag — Common Errors & FAQ

Have a question or encounter an issue while running **fs_bodybag**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before `fs_bodybag` initializes.
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

### ❓ Q: Bodybag items are not usable or missing in inventory?

::: danger Cause
This happens when the correct inventory is not detected because `fs_bridge` was started **before** your inventory resource in `server.cfg`, or due to an incorrect inventory selection in `fs_bridge` configuration.
:::

::: tip Solution
1. In your `server.cfg`, ensure your inventory resource (e.g., `ox_inventory`, `qb-inventory`, `qs-inventory`) is ensured **before** `[fs]`.
2. Check `fs_bridge/config/sh_config.lua` and verify that the inventory setting matches your installed inventory system.
3. Open `fs_bodybag/[INSTALL_ME_FIRST]` and use the block for your inventory system.
4. Restart your server cleanly.
:::

---

### ❓ Q: Player is not permanently deleted when buried or cremated?

::: danger Cause
`Config.DeleteCharacter` is disabled in the configuration file.
:::

::: tip Solution
1. Open `fs_bodybag/config/sh_config.lua`.
2. Set `Config.DeleteCharacter = true` for the bodybag item configuration.
3. When set to `false`, the player will be transported to Heaven/Hell or respawned instead of permanently deleting their character.
:::

---

### ❓ Q: Target interaction option does not appear near dead bodies?

::: danger Cause
The target system is misconfigured in `fs_bridge`, or `fs_bridge` / `[fs]` was ensured **before** your target resource (`ox_target`, `qb-target`, etc.) in `server.cfg`.
:::

::: tip Solution
1. In your `server.cfg`, make sure your target resource (`ox_target`, `qb-target`, `qbx_target`) is ensured **before** `[fs]`.
2. Check `fs_bridge/config/sh_config.lua` and set `sh_config.target` to match your active target system.
3. Restart your server.
:::

---

### ❓ Q: Error saying item `fs_deadbodybag` is missing in `esx_items` (or ESX database) even though you use `ox_inventory`?

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

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
