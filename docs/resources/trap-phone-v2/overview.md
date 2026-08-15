---
title: Trap Phone v2 Overview | FWB Studio Docs
description: Trap Phone v2 features and setup overview for FiveM. Criminal smartphone OS, corner selling, wholesale deliveries, trap house management, and live in-game NUI editor for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426493" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Trap Phone v2

### 📱 Trap Phone v2 – The Complete Criminal Smartphone Operating System

Redefine street hustle and organized crime on your FiveM server. **Trap Phone v2** is a ground-up rebuild featuring a dedicated in-game NUI admin configuration editor, modular framework and inventory auto-detection, dynamic player XP progression, and 6 full-featured underworld apps.

Includes a **built-in self-contained bridge** supporting **ESX**, **QBCore**, and **Qbox** out of the box with zero external bridge dependencies.

---

#### ⚙️ Key Features

* **Live In-Game NUI Admin Dashboard (`/fs_trapphone`)** — Configure every drop rate, price tier, delivery mission, and permission live in-game with instant hot-reloading into `server/config.json`.
* **Universal Self-Contained Bridge** — Auto-detects and seamlessly integrates with all major systems:
  * **Inventories**: `ox_inventory`, `qb-inventory`, `qs-inventory` (Quasar), `ps-inventory`, `lj-inventory`, `ak47_inventory`, `codem-inventory` (m-Inventory), `pappu-inventorynp` (NoPixel style), plus a fully unlocked `custom` bridge.
  * **Frameworks**: `ESX`, `QBCore`, `Qbox`, and Standalone.
  * **Targeting / Interaction**: `ox_target`, `qb-target`, or `3dtext`.
  * **Police Dispatch**: `fs_trapphone` (built-in alerts & blips), `qs-dispatch`, `cd_dispatch`, `op-dispatch`, `ps-dispatch`.
  * **Lockpicking**: Built-in NUI WASD lockpick minigame, `ox_lib` skillcheck, or custom.
* **6 Fully Integrated Criminal Underworld Apps**:
  * 💬 **Burner App**: Setup clandestine physical meetings (trunk deals, tyre repair covers, vehicle meets) with NPC brokers to trade contraband, featuring runner robbery risks and dial spam protection.
  * 📡 **Signal App**: Inbound drug buyer hotline that pings your phone with customer orders, negotiation timers, and vehicle sale support.
  * 🏙️ **Corner Selling App**: Authentic on-foot street corner drug hustle with walking NPC buyers, dynamic rejection chances, witness police reporting, and cash/marked bills payouts.
  * 🚚 **Delivery App**: Wholesale drug supply contracts with GPS route navigation, timed deadlines, vehicle drops, and hidden stash drop-offs.
  * 🏚️ **Trap House App**: Dynamic safehouse infiltration and raid system. Track active trap houses, pick lock single/double security doors, eliminate armed guard NPCs, and search container props for valuable contraband loot before the hit timer expires.
  * 🚖 **Trap Taxi App**: Discreet criminal taxi dispatch for stealth player pickups and high-heat getaways.
* **Built-in NUI Lockpick Minigame** — Immersive WASD directional lockpicking minigame with optional fallback to `ox_lib` skill checks.
* **Dynamic 3D Prop Attachment Editor** — Free-cam editor to adjust in-hand and world prop positions directly in-game.
* **XP Progression & Session Limits** — Reward player loyalty with unlocking higher-tier drug recipes and bulk delivery contracts as their criminal level rises.
* **Multi-Provider Webhook Logging** — Native support for Discord and Fivemanage audit logging across all criminal actions.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_trapphone_v2` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — database setup, ACE permissions, and server.cfg
- [Configuration](./configuration) — in-game NUI editor and `server/config.json` reference
- [Commands](./commands) — admin commands and chat reference
- [Exports — Server](./exports/server) — comprehensive developer API
- [Common Errors](./common-errors) — troubleshooting and common fixes
