---
title: NPC Medic Overview | FWB Studio Docs
description: NPC Medic features and setup overview for FiveM. AI ambulance and paramedic that revive downed players when EMS is offline, for ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic

### 🚑 NPC Medic – Reliable Backup When EMS Is Offline

A downed player (or someone next to them) types `/help`. An AI ambulance drives through traffic to them with its siren on, a paramedic walks over and does CPR, and the player is revived for a fee. Optionally, the paramedic carries the player to the ambulance and drives them to the nearest hospital instead.

`fwb_npcmedic` has an open `bridge/` folder and supports the common ambulance scripts out of the box.

---

#### ⚙️ Key Features

* **AI Paramedic Dispatch** — `/help` or `/help [playerid]` sends an ambulance that drives to the closest road point. When there is no road nearby, or the ambulance is stuck, the paramedic comes on foot.
* **On-Duty EMS Limit** — The command turns off while enough real EMS players are on duty, so player medics stay important.
* **Revive Fee & Society Money** — A random fee between a min and max, taken from cash first and then bank. It can go to the ambulance society account.
* **Self & Bystander Calls** — Choose whether downed players can call for themselves and whether others can call for them. The caller plays a clipboard animation.
* **Zones** — Whitelist zones (the medic only comes there) or blacklist zones (the medic never comes there).
* **Hospital Transport** — Revive on scene, or carry the player to the ambulance and drive to the nearest hospital drop-off.
* **Crutch After Revive** — Optional, with `wasabi_crutch` or `ak47_crutch`.
* **Built-in Notifications & Progress Bar** — Own toast and progress bar by default; ox_lib or the framework's notify can be picked in the config.
* **Server-Checked Revives** — The server decides who is revived and who pays. A revive only happens for a medic the server sent, after the CPR time, while the player is still down and can pay.
* **Clean World** — The ambulance and paramedic are removed when the call ends, is cancelled, times out, the player leaves or the resource restarts.
* **Server Exports** — Start a medic from your own scripts. See [Server Exports](./exports/server).

---

#### 🏥 Supported Ambulance Scripts

| Ambulance Script | Notes |
| :--- | :--- |
| **esx_ambulancejob** | ESX default |
| **qb-ambulancejob** | QBCore default |
| **qbx_ambulancejob** / **qbx_medical** | Qbox |
| **wasabi_ambulance** | v1.x and v2+ |
| **ak47_ambulancejob** | |
| **p_ambulancejob** | |
| **tk_ambulancejob** | |
| **Custom / Other** | Add your own check in the open `bridge/ambulance/` files |

---

## Package

| Package | Resource Folder | Version | Frameworks | Category |
| :--- | :--- | :--- | :--- | :--- |
| **Script Package** | `fwb_npcmedic` | v1.2 | ESX, QBCore, Qbox | FiveM Script |

::: tip Coming from fs_npcmedic?
The script is now called `fwb_npcmedic`. Rename the folder and the `ensure` line. Your old `config.lua` and locale files work as they are, and other scripts that use `exports['fs_npcmedic']` keep working.
:::

---

## Documentation

- [Installation](./installation) — dependencies, setup and server.cfg
- [Configuration](./configuration) — full `config.lua` reference and the open `bridge/` folder
- [Server Exports](./exports/server) — start a medic from your own scripts
- [Common Errors](./common-errors) — troubleshooting and common fixes
