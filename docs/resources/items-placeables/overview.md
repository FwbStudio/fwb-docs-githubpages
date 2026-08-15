---
title: Items Placeables Overview | FWB Studio Docs
description: Items Placeables features and setup overview for FiveM. Physical 3D item prop placement for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables

### 📦 Items Placeables – Drop & Position Physical Props Anywhere

Transform standard inventory items into physical 3D world props that players can position, stack, and interact with in real time. Perfect for drug drops, cash handoffs, police roadblocks, construction scenes, food roleplay, and player housing decorations.

Works with **ESX**, **QBCore**, and **Qbox** through **FS Bridge**.

---

#### ⚙️ Key Features

* **Interactive Free-Placement Gizmo** — Precise controls to rotate left/right, raise/lower, move forward/backward, and snap items onto tables, vehicle hoods, or floors.
* **Tiered Dynamic Cash Props** — Automatic model switching based on currency quantity:
  * Small amounts ($1,000) = `prop_cash_pile_01` (Cash Stacks)
  * Medium amounts ($10,000) = `prop_money_bag_01` (Duffel Bag)
  * Large amounts ($1,000,000) = `prop_cash_case_01` (Briefcase)
* **Target & 3D Text Interactions** — Seamless integration with `ox_target`, `qb-target`, or floating 3D text prompts (`G`) to pick up placed items.
* **Placement Menu & Keybind (`F9` / `/placeprop`)** — Open a visual menu listing all placeable items currently carried in the player's inventory.
* **Dynamic Developer Export (`additem`)** — Easily register new items and their corresponding 3D props from any external resource at runtime.
* **Continuous Placement Mode** — Place multiple copies of an item sequentially without reopening the menu each time.
* **Anti-Stacking & Distance Limits** — Configurable maximum placement radius (`Config.MaxFar`) and item collision rules.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_placeables` | ESX, QBCore, Qbox | FiveM Script |
| **Bridge** | `fs_bridge` | ESX, QBCore, Qbox | Framework Bridge |

---

## Documentation

- [Installation](./installation) — dependencies and server.cfg
- [Configuration](./configuration) — complete `config.lua` and items table reference
- [Commands](./commands) — placement menu commands and keybinds
- [Exports — Client](./exports/client) / [Server](./exports/server) — dynamic runtime item registration
- [Common Errors](./common-errors) — troubleshooting and common fixes
