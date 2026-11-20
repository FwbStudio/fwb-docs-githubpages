---
title: NPC Medic Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM NPC Medic script (fwb_npcmedic).
---

# NPC Medic — Common Errors & FAQ

Have a question or an issue with **fwb_npcmedic**? Check the answers below.

---

### ❓ Q: `/help` says "Enough EMS are on duty. Call them instead."

::: danger Cause
The number of on-duty players with a job in `ems_jobs` is at or above `stop_command_if_active_ems_more_then`.
:::

::: tip Solution
In `config/config.lua`, raise the number, or set `enable = false` to let players call the NPC medic at any time:
```lua
restriction = {
    enable = true,
    ems_jobs = { 'ambulance', 'doctor' },
    stop_command_if_active_ems_more_then = 2,
},
```
:::

---

### ❓ Q: `/help` says "This player is not dead" even though the player is down.

::: danger Cause
Your ambulance script isn't one the script knows, so its death state isn't read.
:::

::: tip Solution
Add your ambulance script to `IsPlayerDead()` in `bridge/ambulance/client.lua` and to `RevivePlayer()` in `bridge/ambulance/server.lua`. See [Installation → Supported Ambulance Scripts](./installation#supported-ambulance-scripts).
:::

---

### ❓ Q: The console says "No supported ambulance job is running".

::: danger Cause
None of the supported ambulance scripts is started, so the player is revived with a plain resurrect, which your own death system may undo.
:::

::: tip Solution
Make sure your ambulance script starts **before** `fwb_npcmedic` in `server.cfg`, or add it to the `bridge/ambulance/` files.
:::

---

### ❓ Q: The console says "No supported framework is running" and `/help` does nothing.

::: danger Cause
`es_extended`, `qb-core` or `qbx_core` isn't started when `fwb_npcmedic` starts.
:::

::: tip Solution
Put `ensure fwb_npcmedic` **after** your framework in `server.cfg`.
:::

---

### ❓ Q: The console keeps saying "Please rename the folder ... to fwb_npcmedic".

::: tip Solution
Rename the resource folder to exactly `fwb_npcmedic` and update the `ensure` line.
:::

---

### ❓ Q: `/help` opens another script's help or does nothing.

::: danger Cause
Another resource also registers `/help`.
:::

::: tip Solution
Change the command name in `config/config.lua`, for example `callhelp = 'medic'`.
:::

---

### ❓ Q: "Cooldown active" right after a revive.

::: tip Solution
This is the cooldown working: `mediccommands.cooldown` minutes after a successful revive. Calls that failed or were cancelled don't start it. Set `cooldown = 0` to turn it off.
:::

---

### ❓ Q: The revive fee is not added to the society account.

::: danger Cause
The society name doesn't match your banking setup.
:::

::: tip Solution
1. Check `money_job_name = 'ambulance'` in `config/config.lua`.
2. **ESX:** `society_` is added in front (`society_ambulance`). Make sure that account exists in your `addon_account` table.
3. **QBCore / Qbox:** the account `ambulance` must exist in your banking resource (Renewed-Banking, okokBanking, tgg-banking, qs-banking, fd_banking, qb-banking or qb-management). Other banking scripts can be added in `AddSocietyMoney()` in `bridge/framework/qbcore/server.lua` or `bridge/framework/qbox/server.lua`.
:::

---

### ❓ Q: The ambulance never shows up and the paramedic appears next to me.

::: tip Solution
That's the fallback when there is no road near the player or the ambulance doesn't arrive within `timeouts.ambulance_to_player`. Raise the timeout or lower `vehicle_spawn_distance` so the ambulance spawns closer.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, open a ticket in our Discord:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
