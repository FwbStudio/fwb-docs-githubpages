---
title: Appearance Overview | FWB Studio Docs
description: FWB Appearance features — FiveM character creator, clothing, barber, tattoo and surgeon shops, wardrobes, player owned shops, clothes as items, a picture studio and imports from your old clothing script.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Appearance

### 👕 Appearance – Creator, Shops, Wardrobes & Clothes as Items

A full appearance system for FiveM with pictures everywhere: clothing, hair, tattoos, parents, peds and outfits.

There is **no config file**. Everything is set in game with `/fwb_appearance` and saved in the database, which creates its tables on first start.

Works on **ESX**, **QBCore**, **Qbox** and **standalone**, detected automatically.

| Package | |
| :--- | :--- |
| Folder | `fwb_appearance` |
| Frameworks | ESX, QBCore, Qbox, Standalone |

---

#### 🧍 Character Creator & Shops

* **Character creator** — parents, face, hair, makeup and clothes, with pictures instead of numbers.
* **Clothing, barber, tattoo and surgeon shops** — placed in game through fwb_interact (Press E or Target).
* **Wardrobes** — saved outfits per character.
* **Menu side** — players move the menu to the left or the right.

#### 🏪 Player Owned Shops

* Shops a player or a job can own, with staff, a boss menu and stock delivered by van.
* Shop money goes where you want it (`bridge/society.lua`).

#### 🎒 Clothes as Items

* Each piece can be its own item (Settings → Clothing items), with the piece in its metadata. See [Supported Scripts](./supported-scripts) for the inventories.

#### 📸 Picture Studio

* Takes pictures of addon clothing and peds in game, so every piece shows a picture.

#### 🔁 Moving From Another Script

* Imports the looks from your old clothing script (see [Supported Scripts](./supported-scripts#import-from-your-old-script)).
* Scripts made for **esx_skin / skinchanger**, **qb-clothing** and **illenium-appearance** keep working: their events and exports are answered by fwb_appearance.

#### 🔓 Open Files

* The whole `bridge/` folder stays open: frameworks, inventories, imports, hooks, the creator's starting look, the picture studio and themes.
* See [Exports](./exports/server) and [Hooks & Open Files](./editable-files/server).
