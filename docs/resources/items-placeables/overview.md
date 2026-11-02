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

Turn inventory items and money into physical 3D props that players place in the world and pick up again. Good for drug drops, cash handoffs, police roadblocks, construction scenes, food roleplay and housing decoration.

Works with **ESX**, **QBCore**, and **Qbox** through **FS Bridge**.

---

#### ⚙️ Key Features

* **Free placement preview** — The prop follows where you aim. Rotate it with the mouse wheel, raise or lower it with the arrow keys, and place it with `E`. A green outline means it can be placed, red means it can't.
* **Place on objects and vehicles** — Put props on tables, crates or vehicle hoods. Props placed on a vehicle attach to it and move with it.
* **Money as props** — Cash and dirty money come straight from the framework accounts. Each configured amount has its own prop:
  * $1,000 = `prop_cash_pile_01` (cash pile)
  * $10,000 = `prop_money_bag_01` (money bag)
  * $1,000,000 = `prop_cash_case_01` (briefcase)
* **Target or 3D text pickup** — `ox_target` / `qb-target`, or floating `Press G to pickup` text.
* **Placement menu (`F9` / `/placeprop`)** — Lists every placeable item the player carries, then the amounts they can afford.
* **Continuous placement** — After placing, the next copy opens straight away while the player still has enough.
* **Runtime registration** — The `additem` export makes items placeable from another resource, and the `fs_placeables:placeitemhook` event starts placement from usable items or inventory buttons.
* **Stacking control** — `Config.disallowItemStacking` blocks placing props on top of other props.
* **[Place money using ox_inventory](./place-money-ox-inventory)** — Drop cash piles, money bags and black money that sync with ox_inventory on ESX, QBCore and Qbox.

---

## Package

| Package | Resource Folder | Version | Frameworks |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_placeables` | v1.2 | ESX, QBCore, Qbox |
| **Bridge** | `fs_bridge` | v3.7 or newer | ESX, QBCore, Qbox |

::: info Good to know
Placed props are not saved. They are removed when the server or `fs_placeables` restarts, and the items or money in them are lost. Anyone within 2.5 m can pick up a placed prop.
:::

---

## Documentation

- [Installation](./installation) — dependencies and server.cfg
- [Configuration](./configuration) — `config.lua` and the items table
- [Commands](./commands) — placement menu and controls
- [Exports — Client](./exports/client) / [Server](./exports/server) — runtime item registration and the placement event
- [Place Money Using ox_inventory](./place-money-ox-inventory) — drop cash, money bags and black money with ox_inventory
- [Common Errors](./common-errors) — console messages and fixes
