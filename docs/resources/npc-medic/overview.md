---
title: NPC Medic Overview | FWB Studio Docs
description: NPC Medic features and setup overview for FiveM. Automatic AI ambulance dispatch for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7459663" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# NPC Medic

### 🚑 NPC Medic – Reliable Backup When EMS Is Offline

Provide downed players with an immersive fallback when no active EMS units are available. Downed players (or nearby bystanders) can dispatch an AI-driven ambulance unit that drives directly to their location, administers medical treatment, charges a configurable fee (with optional society bank deposits), and can optionally transport patients to the nearest hospital.

`fs_npcmedic` includes its own **open `bridge/` folder** and supports all major ambulance scripts out of the box.

---

#### ⚙️ Key Features

* **AI Paramedic Dispatch** — Downed players or bystanders call for help (`/help` or `/help [playerid]`), spawning an AI ambulance unit that navigates traffic to revive the patient.
* **On-Duty EMS Restrictions** — Automatically disables the command if a configurable number of real player medics (`ambulance`, `doctor`) are on duty, keeping player jobs valuable.
* **Revive Fee & Society Deposits** — Charge configurable min/max prices for medical care and automatically route funds into the hospital/ambulance society account.
* **Self & Bystander Calling** — Configure whether downed players can self-revive, or require other nearby players to call for them with realistic clipboard animations.
* **Crutch Debuff System** — Optional temporary walking crutch effect after being revived to encourage hospital roleplay.
* **Zone Restrictions** — Full support for Whitelist zones (e.g. city limits only) or Blacklist zones (e.g. red zones, gang territories, event grounds).
* **Hospital Transport Option** — Choose whether the paramedic treats the player on-scene or drives them directly to the nearest hospital emergency room.

---

#### 🏥 Supported EMS / Ambulance Scripts

`fs_npcmedic` comes pre-configured with built-in death state detection for:

| EMS Script | Supported Versions / Notes |
| :--- | :--- |
| **Wasabi Ambulance** | `wasabi_ambulance` v1.x & v2+ (`LocalPlayer.state['wasabi:deathState']`) |
| **AK47 Ambulance** | `ak47_ambulancejob` (`LocalPlayer.state.dead`) |
| **P_AmbulanceJob** | `p_ambulancejob` (`LocalPlayer.state.isDead`) |
| **Qbox Medical** | `qbx_ambulancejob` / `qbx_medical` (`exports.qbx_medical:IsDead()`) |
| **TK Ambulance** | `tk_ambulancejob` (`LocalPlayer.state.isDead`) |
| **Custom / Other** | Easily add any custom death check in the unlocked `bridge/` folder |

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_npcmedic` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — dependencies, setup, and server.cfg
- [Configuration](./configuration) — complete `config.lua` reference and parameter guide
- [Common Errors](./common-errors) — troubleshooting and common fixes
