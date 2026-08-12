---
title: Weapon Pack v1 Installation | FWB Studio Docs
description: Install Weapon Pack v1 on FiveM — dependencies and server.cfg. FiveM weapon pack v1 install ESX QBCore.
---


<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7005106" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Weapon Pack v1 — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| FiveM server | Yes | Latest artifacts recommended |
| Framework | Yes | ESX, QBCore, or Qbox |
| Inventory | Yes | ox_inventory, qb-inventory, qs-inventory, or ak47 |

## Items & inventory setup

Open `fs_weapons_v1/[INSTALL_ME_FIRST]` and follow the guide for **your** inventory:

<div class="fwb-inv-tabs">

<details>
<summary>ox_inventory</summary><div class="fwb-inv-tab-body">

1. Open **`OX-INSTALLATION.md`** in `[INSTALL_ME_FIRST]`
2. Copy weapon/item lines into `ox_inventory/data/weapons.lua` and items as instructed
3. Copy all `WEAPON_*.png` images to `ox_inventory/web/images/`

</div></details>

<details>
<summary>QBCore (new)</summary><div class="fwb-inv-tab-body">

1. Open **`NEW-QBCORE-INSTALLATION copy.md`** in `[INSTALL_ME_FIRST]`
2. Add items to `qb-core/shared/items.lua`
3. Add weapons to `qb-core/shared/weapons.lua`
4. Add durability + attachments in `qb-weapons/config.lua`
5. Copy images to `qb-inventory/html/images/`

</div></details>

<details>
<summary>QBCore (old)</summary><div class="fwb-inv-tab-body">

1. Open **`OLD-QBCORE-INSTALLATION.md`** in `[INSTALL_ME_FIRST]`
2. Follow the same sections: items, weapons, durability, attachments
3. Copy images to your inventory images folder

</div></details>

<details>
<summary>qs-inventory</summary><div class="fwb-inv-tab-body">

1. Open **`NEW QS INVENTORY-INSTALLATION.md`** or **`OLD QS INVENTORY-INSTALLATION.md`**
2. Apply item/weapon lines to the paths shown in that file
3. Copy weapon images to your qs-inventory images folder

</div></details>

<details>
<summary>ak47 inventory</summary><div class="fwb-inv-tab-body">

1. Open **`AK47-INSTALLATION.md`** in `[INSTALL_ME_FIRST]`
2. Follow item and weapon setup for ak47 inventory

</div></details>

<details>
<summary>Item & attachment images</summary><div class="fwb-inv-tab-body">

Copy all PNG files from `[INSTALL_ME_FIRST]` (weapon icons + attachment icons) into your inventory images folder.

</div></details>

</div>

## Install steps

1. Extract `fs_weapons_v1` into `resources/[fs]/`.
2. Complete the inventory setup above for your server.
3. Add to `server.cfg`:

```ini
ensure fs_weapons_v1
```

4. Restart the server and spawn/test weapons in-game.
