---
title: NPC Medic Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM NPC Medic script (fs_npcmedic).
---

# NPC Medic — Common Errors & FAQ

Have a question or encounter an issue while running **fs_npcmedic**? Check the common questions and error solutions below.

---

### ❓ Q: Why does `/help` say the service is currently unavailable?

::: danger Cause
This occurs when real player EMS/medics are online and on duty, and their count meets or exceeds the threshold configured in `config.mediccommands.restriction.stop_command_if_active_ems_more_then`.
:::

::: tip Solution
1. Open `fs_npcmedic/config/config.lua`.
2. Check `config.mediccommands.restriction`:
   ```lua
   restriction = {
       enable = true,
       ems_jobs = { 'ambulance', 'doctor' },
       stop_command_if_active_ems_more_then = 2, -- Increase this number or set enable = false for testing
   }
   ```
3. If you want players to always be able to call NPC medics regardless of online EMS, set `enable = false`.
:::

---

### ❓ Q: Why does `/help` say "You are not dead" even though the player is downed?

::: danger Cause
The death state from your custom or updated ambulance script is not recognized by `IsPlayerDead()` in the `bridge/` folder.
:::

::: tip Solution
1. Open `fs_npcmedic/bridge/` and find `IsPlayerDead()`.
2. Ensure your ambulance resource name matches the condition check:
   - For **wasabi_ambulance v2+**: ensure `LocalPlayer.state['wasabi:deathState'] == 2`.
   - For **qbx_medical**: ensure `exports.qbx_medical:IsDead()`.
   - For custom scripts: add an `elseif` block calling your script's death export.
:::

---

### ❓ Q: Why is the revive fee not depositing into the society account?

::: danger Cause
The society name does not match your framework's banking configuration.
:::

::: tip Solution
1. Open `fs_npcmedic/config/config.lua` and verify `money_job_name = 'ambulance'`.
2. For ESX, the script automatically prefixes `society_` (resulting in `society_ambulance`). Ensure `society_ambulance` exists in your `addon_account` database table or banking system.
3. For QBCore/Qbox, ensure management account `ambulance` exists in your banking resource (e.g. `qb-management`, `qb-banking`, or `renewed-banking`).
:::

---

### ❓ Q: Does `fs_npcmedic` require `fs_bridge`?

::: danger Cause
`fs_npcmedic` does **not** require `fs_bridge`. It has its own self-contained open `bridge/` folder that directly communicates with ESX, QBCore, and Qbox.
:::

::: tip Solution
You only need `ox_lib` and your framework installed. In your `server.cfg`, simply ensure:
```lua
ensure ox_lib
ensure fs_npcmedic
```
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
