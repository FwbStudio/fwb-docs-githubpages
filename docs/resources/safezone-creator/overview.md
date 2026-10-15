---
title: Safezone Creator Overview | FWB Studio Docs
description: Safezone Creator features for FiveM. Draw polygon safezones in-game, block combat, take weapons away, god mode, speed limits and no collision for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator

### 🛡️ Safezone Creator – In-Game Safezone Management

Draw safezones anywhere on your map and set their rules from an in-game admin menu. You don't edit any Lua or restart the server: zones save to MySQL and update for every player straight away.

Open the menu with `/fwb_safezonecreator` (the command and ACE name can be changed in the menu).

Includes its own **built-in bridge** for **ESX**, **QBCore**, and **Qbox**, 10 inventories, 6 notify systems, and the **ox_lib** or **PolyZone** zone engine.

---

#### ⚙️ Key Features

* **Draw zones in the world** — Fly a free camera and click to place polygon points (3 to 128 per zone). Set the zone height with the scroll wheel. A hint on screen shows the keys, point count, height and overlap status.
* **No overlapping zones** — Points inside another zone are refused while drawing, overlapping zones show as red walls, and the server checks again on save. Zones stacked on different floors are allowed.
* **Combat rules per zone**:
  * **Block all fighting** — No shooting, aiming, punching or melee. Players keep their weapons, but they don't work.
  * **Take weapons away** — Weapons are removed on entry and then on a timer (default every 2 seconds) unless whitelisted.
* **Weapon whitelist** — Allow whole weapon classes (pistols, rifles, stun guns…) or single inventory weapons, for all jobs or for one job.
* **God mode** — Players inside can't be hurt, even by someone outside the zone.
* **Server-side damage check** — The server cancels damage from attackers standing in a zone and against god-mode players, so mod menus that skip the client-side blocking are covered too.
* **Vehicle rules** — Speed limit (MPH) and **No collision**, which lets vehicles and players pass through each other.
* **Admins ignore rules** — Optional per zone, so staff can still act inside it.
* **Map blips and areas** — Blip icon, name, color, size and short range, plus a colored area drawn over the zone shape on the map.
* **Enter / leave messages** — Shared messages, turned on per zone.
* **Safezone icon** — A small on-screen icon while a player is inside a zone. Choose from 12 icons, move and resize it on screen, and pick an animation.
* **Discord logs** — Separate webhooks for all events, players entering, players leaving, admin actions and errors.
* **20 languages** — Menu and messages in English, Arabic, Chinese, Dutch, Farsi, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Thai, Turkish, Urdu and Vietnamese.
* **Built for low resmon** — Zones load only near the player, and the per-frame work inside a zone is kept to the controls GTA forgets every frame.
* **Exports and hooks** — Client and server exports, editable enter / leave / inside hooks, and public events.

---

## Package

| Package | Resource Folder | Version | Frameworks | Category |
| :--- | :--- | :--- | :--- | :--- |
| **Script Package** | `fwb_safezonecreator` | v2.3 | ESX, QBCore, Qbox | FiveM Script |

::: tip Renamed from fs_safezonecreator
The resource used to be called `fs_safezonecreator`. Scripts that call `exports['fs_safezonecreator']` or listen to the old `fs_safezonecreator:` events keep working. See [Installation → Updating from fs_safezonecreator](./installation#updating-from-fs-safezonecreator).
:::

---

## Documentation

- [Installation](./installation) — dependencies, server.cfg and menu access
- [Configuration](./configuration) — every option in the in-game menu
- [Commands](./commands) — admin command and permission
- [Client Exports](./exports/client) / [Server Exports](./exports/server)
- [Client Functions](./functions/client) / [Server Functions](./functions/server) — editable hooks and events
- [Common Errors](./common-errors) — troubleshooting and common fixes
