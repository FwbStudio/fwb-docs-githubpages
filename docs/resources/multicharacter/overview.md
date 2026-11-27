---
title: Multicharacter Overview | FWB Studio Docs
description: Multicharacter features — FiveM character select with scene peds, wallet and stats cards, registration, starting looks, a GTA map spawn picker with homes and spawn pictures, extra slots and an admin menu.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Multicharacter

### 👥 Multicharacter – Character Select, Registration & Map Spawn Picker

Players see their characters standing in a scene, pick one, and choose where to start on the GTA map. New players fill in a short form, make their look and pick their first spawn place.

There is **no config file**. Everything is set in game with `/fwb_multicharacter` and saved in the database, which creates its tables on first start.

Works on **ESX**, **QBCore** and **Qbox**, detected automatically.

| Package | |
| :--- | :--- |
| Folder | `fwb_multicharacter` |
| Version | 1.0.0 |
| Frameworks | ESX, QBCore, Qbox |

---

#### 🎬 Character Select

* **Characters in a scene** — every character stands in the scene in their own clothes. Click a ped, or a slot, and the camera moves to them.
* **Character card** — a wallet card (cash, bank, dirty money), age, time played, vehicles owned, and kills, deaths and K/D.
* **Scenes** — a built-in scene, or your own: place the peds and the camera in game. One scene for everyone, or a random one per player.
* **Delete** — players can delete their own characters (the admin can turn this off). Every delete is logged, with an optional Discord webhook.

#### 📝 Registration

* **Form** — first and last name, date of birth, sex, height and nationality, with the age range the admin sets.
* **Starting look** — the admin can save a starting look for men and women (**Use my current look**). New characters start in it in the creator.
* **Starter items** — given once, at the first spawn: the framework's own list or your own.

#### 🗺️ Spawn Picker

* **The GTA map** — Satellite, Map and Print layers in HD, with a pin for every place.
* **Last location** — always the default for an existing character.
* **Homes** — every home the character owns or has a key to, read from your housing script.
* **Spawn places** — the admin places them in game and can take a picture of each place; the picture shows on the map. Places can be for new characters, for everyone, or only for some jobs.
* **Your own spawn picker** — switch the built-in one off and open yours instead (open file).

#### 🛠️ Admin Menu

* **`/fwb_multicharacter`** — a first-time setup wizard, then pages for slots, new characters, spawn places, scenes, housing, characters and settings.
* **Slots** — a default number of slots, and extra slots per player, job or ACE.
* **Characters** — find any character, go to their last location, or delete them.
* **Themes** — FwB, Dark Grey, White and Fluid Glass. Add your own in `bridge/themes.lua`.

#### 🔓 Open Files

* The whole `bridge/` folder stays open: frameworks, appearance scripts, housing scripts, inventory, starter items, extra tables to delete, logs, hooks and the spawn picker.
* See [Supported Scripts](./supported-scripts), [Editable Files](./editable-files/server) and [Exports](./exports/server).
