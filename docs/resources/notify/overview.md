---
title: Notify Overview | FWB Studio Docs
description: High-performance customizable notification system for FiveM. In-game live styling editor, rich sounds, and developer exports for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7464228" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Notify

### 🔔 Notify – Fully Customizable In-Game Notification System

Replace cluttered, mismatched notification styles across your server with a unified, high-performance UI alert system. `fs_notify` gives server owners a shared in-game panel (`/fs_notify`) to design and preview alerts in real time, allows players to personalize their own alert preferences, and provides developers with clean, unified client and server exports.

Standalone — works on **ESX**, **QBCore**, **Qbox**, or any custom standalone framework. Does **not** require `fs_bridge`.

---

#### ⚙️ Key Features

* **Interactive In-Game Editor (`/fs_notify`)** — Real-time live visual editor to adjust sounds, icons, positions, paddings, scales, opacities, and color schemes.
* **Dual Editor Modes**:
  * **Player Mode (`AllowPlayerEdit = true`)**: Allows individual players to personalize their notify layout, sounds, and positions (saved to client KVP).
  * **Admin Shared Mode (`AllowPlayerEdit = false`)**: Restricts the menu to administrators with ACE permission (`fs_notify.admin`), applying changes globally server-wide across all connected players via `GlobalState`.
* **4 Notification Types** — `success`, `info`, `warning`, and `error` (with full backward compatibility for `inform`).
* **12 Audio Notification Sounds** — Built-in sounds including `esx`, `okok`, `okok_textui`, `soft_chime`, `synth_ping`, `success_bell`, `info_pulse`, `warning_ping`, `error_buzz`, `mellow_bloom`, plus support for **Custom Audio URLs**.
* **Sound Modes** — Choose between `first_only` (plays sound only for the first notification in a rapid burst) or `every_notify`.
* **8 Screen Positions** — `top-left`, `top`, `top-right`, `center-left`, `center-right`, `bottom-left`, `bottom`, `bottom-right`.
* **Deep Visual Customization**:
  * **12 Icons**: Circle Check, Circle Info, Triangle Exclamation, Circle Xmark, Bell, Shield Check, Shield Alert, etc.
  * **Custom Palette**: Background Colors, Accent Glows, Gradient Highlights, and Text Colors.
  * **Typography**: Customizable font families (Segoe UI, Trebuchet MS, Verdana, Tahoma, etc.) and fluid font scales (Tiny to Oversized).
* **Rich Keycap & Tag Badges (`[...]`)** — Automatically converts any text inside square brackets (e.g. `[E]`, `[$10]`, `[Lockpick]`) into custom stylized glass keycaps/badges.
* **Unified Developer API** — Simple, reliable client and server exports (`show`, `OpenMenu`) and net events for third-party scripts.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_notify` | ESX, QBCore, Qbox, Standalone | FiveM Script |

---

## Documentation

- [Installation](./installation) — setup and server.cfg
- [Configuration](./configuration) — config.lua reference and in-game menu guide
- [Commands](./commands) — in-game styling commands and permissions
- [Special Feature](./special-feature) — rich keycaps and badge formatting
- [Exports — Client](./exports/client) — client-side exports and events
- [Exports — Server](./exports/server) — server-side exports and events
- [Common Errors](./common-errors) — troubleshooting and FAQ
