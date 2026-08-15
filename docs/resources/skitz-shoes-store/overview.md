---
title: Skitz Shoes Store Overview | FWB Studio Docs
description: Skitz Shoes Store features and setup overview for FiveM. Full-fledged sneaker crafting, workbench manufacturing, and mobile distribution business for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426492" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Skitz Shoes Store

### 👟 Skitz Shoes Store – Sneaker Manufacturing & Street Distribution Business

Turn your players into underground sneaker moguls! From purchasing raw leathers, foam, and fabric to manufacturing 16+ pairs of custom designer kicks on a 3D physical workbench, Skitz delivers an end-to-end craft-and-sell economy with a dedicated in-game smartphone.

Works with **ESX**, **QBCore**, and **Qbox** through **FS Bridge**.

---

#### ⚙️ Key Features

* **Complete Material & Hardware Store** — Buy leather materials (`fs_leather_materials`), shoe foam (`fs_shoe_foam`), raw cloth (`fs_clothe_materials`), work tables, and Skitz phones from NPC suppliers.
* **3D Physical Workbench (`fs_shoes_table`)** — Place a physical craft table (`fs_prop_table_shoes`) anywhere to assemble 16+ designer sneaker models with custom repair animations.
* **Dedicated Skitz Smartphone (`fs_shoesphone`)**:
  * **Buyers App (Street Hustle)**: Attract dynamic NPC foot traffic who walk directly to the player to buy individual shoes in exchange for cash.
  * **Delivery App (Wholesale Logistics)**: Accept bulk delivery contracts to transport shoe packages to 23+ randomized drop-off zones across Los Santos.
* **Interactive Handoff Animations** — Realistic shoe backpack props (`fs_skid_backsack_shoe`), shoebox props (`fs_skid_box_shoe`), and cash pile exchange animations.
* **Job & Ped Model Whitelisting** — Restrict crafting or selling to specific jobs (`config.jobsonly`) or specific character ped models (`config.restriction`).

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_skitz` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — inventory items, prop streams, and server.cfg
- [Configuration](./configuration) — complete `config.lua` crafting recipes and apps guide
- [Commands](./commands) — smartphone command reference
- [Common Errors](./common-errors) — troubleshooting and common fixes
