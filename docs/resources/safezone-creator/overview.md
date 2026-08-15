---
title: Safezone Creator Overview | FWB Studio Docs
description: Safezone Creator features and setup overview for FiveM. Advanced in-game safezone creator tool for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator

### 🛡️ Safezone Creator – Complete In-Game Safezone Management Suite

Design, place, and customize protected zones anywhere on your server without touching a single line of code. Using an interactive 3D in-game visual editor (`/safezonemenu`), server administrators can draw Sphere, Box, or PolyZone boundaries, enforce combat and driving restrictions, configure speed limits, and broadcast custom entry/exit alerts.

Includes its own **built-in modular bridge** for **ESX**, **QBCore**, and **Qbox**. Does **not** require `fs_bridge`.

---

#### ⚙️ Key Features

* **Visual In-Game Creator Gizmo (`/safezonemenu`)** — Draw and scale safezones live in the world with real-time 3D gizmos, wireframe previews, and point-and-click vertex editing.
* **3 Flexible Zone Types**:
  * **Sphere Zones**: Quick radial protection around hospitals, spawns, or car meets.
  * **Box Zones**: Defined rectangular boundaries with length, width, height, and heading.
  * **PolyZone**: Freeform multi-point polygon shapes matching any custom MLO, building interior, or gang territory perimeter.
* **Granular Safety & Protection Rules**:
  * **Disable Weapon Shooting & Aiming**
  * **Player & Vehicle Invincibility (Godmode)**
  * **Disable Vehicle Damage & Ghosting / Anti-Ram**
  * **Enforce Speed Limits Inside Zone**
  * **Disable Melee Combat / Punching**
  * **Disable Stealing, Looting, & Robbery Interactions**
* **Custom Entry & Exit Notifications** — Set tailored title, description, and sound effects whenever players cross the safezone boundary.
* **Dynamic Map Blips & Radiuses** — Create custom radar blips, change blip icons, colors, alpha transparencies, and labels directly in-game.
* **Persistent MySQL Sync** — All created safezones save instantly to the database and sync live to all online players without restarting the server.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_safezonecreator` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — dependencies and server.cfg setup
- [Configuration](./configuration) — in-game management panel guide
- [Commands](./commands) — admin command and permission setup
- [Common Errors](./common-errors) — troubleshooting and common fixes
