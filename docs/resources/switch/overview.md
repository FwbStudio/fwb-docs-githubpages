---
title: Switch Overview | FWB Studio Docs
description: Glock auto-switch weapon conversion features and setup overview for FiveM. Transform semi-auto pistols and rifles into full-auto for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426485" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Switch

### 🔫 Switch – Glock Auto-Switch & Full-Auto Weapon Conversions

Bring gritty street weapon modifications to your server with realistic Glock auto-switches. Players can use full-auto switch items (`fs_switch`, `fs_redswitch`, `fs_blueswitch`, `fs_greenswitch`) on semi-automatic pistols (`WEAPON_COMBATPISTOL`) and rifles (`WEAPON_CARBINERIFLE`) to convert them into rapid-firing automatic variants (`WEAPON_APPISTOL`, `WEAPON_SPECIALCARBINE`).

Includes its own **built-in modular bridge** for **ESX**, **QBCore**, and **Qbox**. Does **not** require `fs_bridge`.

---

#### ⚙️ Key Features

* **Instant Full-Auto Conversion** — Use a switch item from inventory to convert semi-automatic handguns into automatic machine pistols.
* **Realistic Assembly Animation** — Plays custom weapon tinkering animations (`michael_tux_fidget`) with configurable progress duration.
* **Limited-Use & Durability Counter** — Configure how many times a switch can be installed before it degrades or breaks (`limitedUse = { enable = true, count = 2 }`).
* **Switch Removal Command (`/r_switch`)** — Detach the switch at any time to recover the base weapon.
* **Global & Weapon-Specific Switches** — Support for universal switches as well as exclusive custom switches tailored to specific firearm models.
* **Wide Inventory Support** — Built-in support for `ox_inventory`, `qs-inventory`, `qb-inventory`, `ak47_inventory`, `ps-inventory`, and `ij-inventory`.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_switch` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — inventory items setup and server.cfg
- [Configuration](./configuration) — complete `config.lua` and weapon mapping guide
- [Commands](./commands) — switch detachment command reference
- [Common Errors](./common-errors) — troubleshooting and common fixes
