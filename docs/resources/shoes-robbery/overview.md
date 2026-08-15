---
title: Shoes Robbery Overview | FWB Studio Docs
description: Shoes Robbery features and setup overview for FiveM. Rob sneaker stores and steal shoes from other players for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426476" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Shoes Robbery

### 👟 Shoes Robbery – Sneaker Heists & Player Shoe Theft

Bring modern streetwear culture into criminal roleplay. Raid premium sneaker boutiques to loot designer shoeboxes and backpacks, or sneak up on rival players to literally steal the shoes off their feet! Sell your stolen pairs individually or combine them into curated collector bundles at the Black Market fence for massive cash payouts.

Works with **ESX**, **QBCore**, and **Qbox** through **FS Bridge**.

---

#### ⚙️ Key Features

* **Interactive Sneaker Store Heists** — Rob store display shelves with custom 3D shoebox models (`fs_sr_box_shoe.ytyp`, `fs_sr_backsack_shoe.ytyp`) and realistic looting animations.
* **Player-to-Player Shoe Theft (`config.robshoes`)** — Target real players to rob their kicks. On success, the victim's shoes are stripped down to barefoot models and the thief receives a stolen designer shoe item.
* **Black Market Sneaker Fence (`config.shoessell`)**:
  * **Individual Pair Sells**: Turn in 2 matching shoes for instant cash.
  * **Sneaker Set Bundles**: Combine full sets (e.g. *Premium Shoes Bundle*, *Air Bundle*, *Sports Bundle*) for huge bonus cash payouts.
* **Police Alerts & Cooldowns** — Configurable required active police count (`active_cop`), alert dispatch chances (`policealert.chance`), store cooldowns, and global cooldowns.
* **Reset Command (`/resetshoesrobbery`)** — Police rank 3+ or administrators can reset robbed stores back to full stock immediately.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fs_shoesrobbery` | ESX, QBCore, Qbox | FiveM Script |

---

## Documentation

- [Installation](./installation) — inventory items, prop streams, and server.cfg
- [Configuration](./configuration) — complete `config.lua`, store zones, and bundle rewards
- [Commands](./commands) — robbery reset command reference
- [Common Errors](./common-errors) — troubleshooting and common fixes
