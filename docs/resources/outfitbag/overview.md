---
title: Outfit Bag Overview | FWB Studio Docs
description: Outfit Bag features and setup overview for FiveM. Portable placeable wardrobe and job locker bags for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfit Bag

### 🎒 Outfit Bag – Portable Wardrobe & Job Lockers On The Go

Give your players and job services the freedom to manage, preview, and change their outfits anywhere on the map without traveling to a static clothing store. Place custom 3D physical outfit bags on the ground, open a sleek UI with live camera views, dress with realistic animations, and configure job locker bags with grade-restricted duty uniforms.

Works with **ESX**, **QBCore**, and **Qbox** through **FS Bridge**.

---

#### ⚙️ Key Features

* **3D Physical Placeable Props** — Place realistic custom bags on the ground (`fs_prop_outfitbag_small`, `fs_prop_outfitbag_med`, `fs_prop_outfitbag_large`, `fs_prop_outfitbag_pol`, `fs_prop_outfitbag_doc`).
* **Interactive UI & 3D Dressing Camera** — Beautiful responsive NUI with dynamic camera focus that frames your character while previewing and changing clothes.
* **Realistic Dressing Animations** — Custom animations for donning masks, changing shirts, pants, and changing shoes.
* **Dual Operating Modes**:
  * **Inventory Usable Items**: Small (5 slots), Medium (10 slots), and Large (15 slots) bags.
  * **Quick Chat Commands**: `/outfitbag` or `/ob` for instant wardrobe access without inventory items.
* **Job & Whitelist Locker Bags** — Place permanent job locker bags (e.g. Police Stations, Hospitals, Firehouses) at fixed coordinates with job, grade, or admin ACE restrictions and pre-set duty uniforms.
* **Unique vs Shared Bags System** — Configure whether each physical bag has unique metadata storage or shares the player's cloud outfit library.
* **Developer Outfit Extractor Tool (`/getoutfit`)** — Quick admin command to extract currently worn outfit codes straight into config format for effortless job uniform setup.
* **Despawn Failsafe Timer** — Unattended bags placed in the world automatically despawn after a configurable timeout to keep server performance clean.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_outfitbag` | ESX, QBCore, Qbox | FiveM Script |
| **Bridge** | `fs_bridge` | ESX, QBCore, Qbox | Framework Bridge |

---

## Documentation

- [Installation](./installation) — dependencies, database SQL, and server.cfg
- [Configuration](./configuration) — complete `config.lua` and parameter guide
- [Commands](./commands) — player commands and developer outfit copy tool
- [Common Errors](./common-errors) — troubleshooting and common fixes
