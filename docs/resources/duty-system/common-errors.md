---
title: Duty System Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Duty System script.
---

# Duty System — Common Errors & FAQ

Have a question or encounter an issue while running **fs_dutysystem**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_dutysystem** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_dutysystem`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Admin command `/dutymenu` says you don't have permission?

::: danger Cause
Your player's framework admin group, ACE permission, job role, or identifier is not included in the permissions list inside `fs_dutysystem/config/Config.lua`.
:::

::: tip Solution
1. Open `fs_dutysystem/config/Config.lua`.
2. Locate `config.Admin.permission`.
3. Add your framework admin group (e.g. `['admin'] = true`), ACE permission (`['fs_dutysystem'] = true`), or player identifier.
4. Save the file and restart `fs_dutysystem`.
:::

---

### ❓ Q: Target options do not appear on station peds (or key prompts don't show)?

::: danger Cause
`config.target` in `fs_dutysystem/config/Config.lua` is misconfigured for your server interaction method.
:::

::: tip Solution
1. Open `fs_dutysystem/config/Config.lua`.
2. Set `config.target = true` if using a target system (`ox_target` or `qb-target`).
3. Set `config.target = false` if you prefer TextUI 3D key prompts (`[E]` key interaction).
4. Restart `fs_dutysystem`.
:::

---

### ❓ Q: Station NPC peds are taking damage, dying, or being flagged by anticheat?

::: danger Cause
`config.Ped_Invincible` in `fs_dutysystem/config/Config.lua` is set incorrectly for your server setup or anticheat resource.
:::

::: tip Solution
1. Open `fs_dutysystem/config/Config.lua`.
2. To prevent peds from being killed by players, ensure `config.Ped_Invincible = true`.
3. If your server anticheat flags invincible entities as a violation, set `config.Ped_Invincible = false`.
4. Restart `fs_dutysystem`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
