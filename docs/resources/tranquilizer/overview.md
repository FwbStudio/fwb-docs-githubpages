---
title: Tranquilizer Overview | FWB Studio Docs
description: Tranquilizer features and setup overview for FiveM. Medical tranquilizer syringe, unconsciousness timers, and hospital recovery scenes for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7444827" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Tranquilizer

### 💉 Tranquilizer – Downed Player Sedation, Relog-Proof Timers & Hospital Recovery

Add tactical capture and advanced medical sedation to your server. Players and paramedics can administer tranquilizer injections to downed or unconscious players, subduing them into deep paralysis with persistent countdown timers that survive player combat logging, followed by realistic hospital bed recovery scenes.

Includes its own **built-in modular bridge** for **ESX**, **QBCore**, and **Qbox**. Does **not** require `fs_bridge`.

---

#### ⚙️ Key Features

* **Live In-Game Configuration Panel (`/fs_tranquilizer`)** — Configure sedation timers, hospital bed coordinates, recovery wake-up animations, and notification messages live in-game without editing Lua files.
* **Persistent Relog-Proof Paralysis** — If a tranquilized victim disconnects to evade capture, their remaining paralysis timer is saved in MySQL and resumes immediately when they reconnect.
* **Seamless Ambulance & EMS Integration** — Built-in bridge compatibility with `wasabi_ambulance`, `qbx_medical`, `esx_ambulancejob`, `qb-ambulancejob`, and custom death states.
* **Cinematic Hospital Treatment Sequences** — Transport tranquilized victims to hospital recovery beds where custom medical care scenes and waking sequences play out.
* **Multiple Target & Interaction Engines** — Works out-of-the-box with `ox_target`, `qb-target`, or floating text UI prompts.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_tranquilizer` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — items setup, ACE permissions, and server.cfg
- [Configuration](./configuration) — in-game UI editor guide
- [Commands](./commands) — admin panel command reference
- [Common Errors](./common-errors) — troubleshooting and common fixes
