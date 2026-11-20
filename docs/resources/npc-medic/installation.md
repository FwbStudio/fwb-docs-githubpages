---
title: NPC Medic Installation | FWB Studio Docs
description: Install NPC Medic on FiveM — dependencies, supported ambulance scripts, and server.cfg setup.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `es_extended`, `qb-core` or `qbx_core` | Yes | Framework for money, jobs and the EMS count |
| A supported ambulance script | Recommended | Tells the script who is dead and revives them (list below) |
| `ox_lib` | Optional | Only when you set `config.notify` or `config.progress` to `'ox_lib'` |
| A society / banking resource | Optional | Only when `revive_money_to_society = true` (ESX: `esx_addonaccount`; QBCore / Qbox: Renewed-Banking, okokBanking, tgg-banking, qs-banking, fd_banking, qb-banking or qb-management) |
| `wasabi_crutch` or `ak47_crutch` | Optional | Only when `crutch.enable = true` |

The script needs **OneSync** (on by default on current servers) for the zone checks and for removing the ambulance when a player leaves.

---

## Supported Ambulance Scripts

`fwb_npcmedic` finds the running ambulance script by itself:

| Ambulance Script | Dead check | Revive |
| :--- | :--- | :--- |
| **esx_ambulancejob** | ESX death events / dead ped | `esx_ambulancejob:revive` |
| **qb-ambulancejob** | `isdead` / `inlaststand` metadata | `hospital:client:Revive` |
| **qbx_ambulancejob** / **qbx_medical** | `exports.qbx_medical:IsDead()` | `exports.qbx_medical:Revive()` |
| **wasabi_ambulance** (v1.x) | `exports.wasabi_ambulance:isPlayerDead()` | `RevivePlayer` export |
| **wasabi_ambulance** (v2+) | `LocalPlayer.state['wasabi:deathState'] == 2` | `RevivePlayer` export |
| **ak47_ambulancejob** | `LocalPlayer.state.dead` | `ak47_ambulancejob:revive` |
| **p_ambulancejob** | `LocalPlayer.state.isDead` | `p_ambulancejob/client/death/revive` |
| **tk_ambulancejob** | `LocalPlayer.state.isDead` | `tk_ambulancejob:revive` |

Without any of these, the dead ped is checked and the player is revived with a plain resurrect. The server console shows a warning in that case.

::: tip Custom ambulance script
Add an `elseif` for your script in `IsPlayerDead()` (`bridge/ambulance/client.lua`) and in `RevivePlayer()` (`bridge/ambulance/server.lua`):

```lua
-- bridge/ambulance/client.lua
elseif started('your_ambulance') then
    return exports.your_ambulance:isDead() == true

-- bridge/ambulance/server.lua
elseif started('your_ambulance') then
    TriggerClientEvent('your_ambulance:revive', source)
```
:::

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` folder if you don't have one yet (`resources/[fs]/`).
2. Put the `fwb_npcmedic` folder in `resources/[fs]/fwb_npcmedic`. Keep the folder name `fwb_npcmedic`; the console warns when it is renamed.
3. Set your command, prices, EMS limit and hospital drop-offs in `fwb_npcmedic/config/config.lua`.
4. Add the resource to your `server.cfg`, after your framework and ambulance script:

```lua
ensure fwb_npcmedic
```

5. Restart the server and check the console.

::: info Updating from fs_npcmedic
Remove the old `fs_npcmedic` folder, put in `fwb_npcmedic` and change `ensure fs_npcmedic` to `ensure fwb_npcmedic`. You can copy your old `config/config.lua` and locale files over the new ones; they keep working. `ox_lib` is no longer required.
:::
