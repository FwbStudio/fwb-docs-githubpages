---
title: Gun Jamming Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Gun Jamming script.
---

# Gun Jamming — Common Errors & FAQ

Have a question or encounter an issue while running **fs_gunjamming**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_gunjamming** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_gunjamming`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Whitelisted job weapons (police/sheriff) are still jamming?

::: danger Cause
The player's framework job name does not match the job key in `config.Whitelistedjobs` inside `fs_gunjamming/config/config.lua`.
:::

::: tip Solution
1. Open `fs_gunjamming/config/config.lua`.
2. Check `config.Whitelistedjobs`.
3. Verify that your framework job name matches exactly (e.g. `['police'] = true`, `['sheriff'] = true`).
4. Restart `fs_gunjamming`.
:::

---

### ❓ Q: Newly added weapon is not jamming or causes a config error?

::: danger Cause
Weapon names inside `config.Weapons` were written in lowercase or formatted with incorrect quotation marks instead of backticks.
:::

::: tip Solution
1. Open `fs_gunjamming/config/config.lua`.
2. Ensure weapon hash keys are written in **ALL UPPERCASE** inside backticks:
   ```lua
   [`WEAPON_COMBATPISTOL`] = { JamChance = 25, UnjamChance = 80 },
   ```
3. Restart `fs_gunjamming`.
:::

---

### ❓ Q: Players fire accidental shots or damage teammates while unjamming?

::: danger Cause
`config.Shoot` in `fs_gunjamming/config/config.lua` is set to `true`, which forces players to fire a discharge round during the unjamming process.
:::

::: tip Solution
1. Open `fs_gunjamming/config/config.lua`.
2. Set `config.Shoot = false` so players do not fire a shot while clearing jams and can move freely.
3. Restart `fs_gunjamming`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
