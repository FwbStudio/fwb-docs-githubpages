---
title: FWB HUD Overview | FWB Studio Docs
description: FWB HUD features — FiveM HUD with speedometer, minimap, voice, money, stress, seatbelt, cruise control and nitro. 12 themes, ESX, QBCore, Qbox and Standalone.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB HUD

### 🎛️ FWB HUD – Customizable FiveM HUD & Speedometer

A premium, fully customizable HUD for FiveM. Admins style the HUD once in game and save it as the default for everyone; players pick their own theme, drag and resize every piece, and choose what shows. No config file to edit — everything is set in game with `/fwb_hud` and saved in the server KVP (no database needed).

Works on **ESX**, **QBCore**, **Qbox** and **Standalone**, detected automatically.

---

#### 🎨 Themes & Layout

* **12 themes, each with its own presets** — FWB Orbit (default), Linea, Pulse, Dash, Mono Text, Ringline, Analog, Halo Chips, Frost, Vice, Neon Street and Patrol. Picking a theme never moves anything the player placed.
* **Drag-and-drop layout editor** — every piece (statuses, voice, location, speedometer, money, minimap) can be moved and resized; whole-HUD size slider.
* **Custom presets** — players save their customised look as their own preset; admins save a server look every player starts with.
* **Style options** — accent colour, per-status colours, glow, shadow strength, and when status values show (never, when low, always).
* **Server logo** — your logo in the top corner (round, soft, rounded, square or diamond).

#### 🚗 Speedometer & Vehicles

* Speed, unit, gear and RPM; fuel or battery, altitude and tell-tales.
* Car, cycle, aircraft and electric layouts, with per-model overrides.
* Works with any fuel script (LegacyFuel, cdn-fuel, ps-fuel, ox_fuel, lc_fuel…) through one open function.

#### ⚙️ Gameplay Systems (all optional)

| System | What it does |
| :--- | :--- |
| **Seatbelt** | Key toggle (default `K`), buckle sounds, exit lock while buckled. Unbuckled, a crash throws you through the windscreen with the game's own physics; hard crashes cost health (a quarter when buckled) with a crash effect. |
| **Seatbelt reminder** | Ding-ding and a blinking belt icon while driving unbuckled (30 s by default). Admins set the time and speed; players can switch it off or set their own time. Works with the framework's seatbelt too. |
| **Racing harness** | Optional item (default `harness`) fitted into a vehicle. The seatbelt key straps you in: never thrown out, a fraction of the crash damage, wears out after a set number of hard crashes. |
| **Cruise control** | Key toggle (default `Y`) locks your speed; brake or handbrake cancels. |
| **Engine toggle** | Key (default `G`) turns the engine on or off. |
| **Indicators** | Left / right / hazards (default arrow keys), visible to other players. |
| **Nitro** | Usable item (default `nitrous`) installs a tank; hold `Left Shift` for an instant boost past top speed, with exhaust flames and a screen effect. Duration, power and top speed per model, a model blacklist and optional auto refill. |
| **Progress bar** | Its own themed progress bar for item use (nitro, harness), with countdown and `X` to cancel. Other scripts can use it: `exports.fwb_hud:Progress(...)`. |
| **Stress** | Gained from shooting (per weapon) and speeding, relieved by running, swimming and eating. Staged effects: camera shake, blur, aim shake, unsteady walk, driving jolts, stumbling. Per-job stress %. |
| **Weapon card** | Current weapon with clip / reserve ammo. |
| **Clock** | In-game or real time, optional date. |
| **Vehicle sounds** | Indicator tick, seatbelt buckle, seatbelt reminder, light switch, cruise chime — no audio files; players can turn them off. |

#### 🧭 Also Included

* **Minimap** — square or round, on foot or only in vehicles, with custom masks shipped in the resource.
* **Voice** — pma-voice range and radio shown in the range colour.
* **Money** — cash, bank and dirty money; shown always, on change, or while holding a key.
* **Statuses** — health, armor, hunger, thirst, stamina, oxygen, stress, hygiene, drunk, plus your own custom statuses. A status only shows while the script feeding it runs (no dead hygiene icon without a hygiene script; no stress icon while Stress is off).
* **Players page** — admins see every online player's live statuses, stress and HUD, and can reset it.
* **Built for 1000+ player servers** — light client loops, admin-tunable refresh rates, nothing sent to the UI unless it changed.
* **4 languages** — English, German, French, Spanish.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fwb_hud` | ESX, QBCore, Qbox, Standalone | FiveM Script |

`client/` and `server/` are escrowed. `bridge/` and `locale/` stay open so you can connect any framework, notification or fuel script.

---

## Documentation

- [Installation](./installation) — setup, server.cfg and admin access
- [Configuration](./configuration) — in-game admin panel and the open Lua files
- [Commands](./commands) — `/fwb_hud`, `/hud`, `/hudsettings` and default keys
- [Exports — Client](./exports/client) — client exports and events
- [Exports — Server](./exports/server) — server exports and events
- [Integrations](./integrations) — framework, notify, fuel, voice and status hooks
- [Common Errors](./common-errors) — troubleshooting and FAQ
