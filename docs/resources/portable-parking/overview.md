---
title: Portable Parking Overview | FWB Studio Docs
description: Portable Parking features and setup overview for FiveM. Park and retrieve vehicles anywhere on the map for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7431940" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Portable Parking

### 🚗 Portable Parking – Park & Retrieve Vehicles Anywhere

Free your players from rigid static garage locations. With `fs_portableparking`, players can park their vehicles on the spot (`/vpark`) for free, purchase on-demand retrieve spots (`/vbuy`) to spawn owned vehicles anywhere (`/vlist`), and access comprehensive police impounds and admin recovery tools.

Includes its own **unlocked `bridge/` folder** for **ESX**, **QBCore**, and **Qbox**. Does **not** require `fs_bridge`.

---

#### ⚙️ Key Features

* **Park Anywhere (`/vpark`)** — Instantly store your current vehicle into the garage database from any location on the map, free of charge.
* **On-Demand Parking Spots (`/vbuy` & `/vlist`)** — Purchase a temporary vehicle retrieve spot for a configurable fee (`vbuyprice`), allowing players to summon their stored or impounded vehicles right to their feet.
* **Police & Sheriff Impound System (`/vimpound`)** — Law enforcement can impound vehicles on-scene with customizable unimpound fees (`vimpoundprice`).
* **Admin Management Panel (`/vadmin`)** — Staff can view all currently impounded server vehicles and release them with a single click without paying fees.
* **Permanent Public Lots & Blips** — Support for permanent world parking lots and impound yards with custom map blips and 3D radius markers.
* **Seamless Notification Support** — Natively styled with `fs_notify` or automatically falls back to `ox_lib` notifications.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_portableparking` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — database SQL, dependencies, and server.cfg
- [Configuration](./configuration) — complete `config.lua` parameter guide
- [Commands](./commands) — player, police, and admin command references
- [Common Errors](./common-errors) — troubleshooting and common fixes
