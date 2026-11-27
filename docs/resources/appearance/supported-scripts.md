---
title: Appearance Supported Scripts | FWB Studio Docs
description: Frameworks, inventories, multicharacter scripts and old clothing scripts FWB Appearance supports — ox_inventory, qb-inventory, qs-inventory, codem, tgiann, imports from illenium-appearance, esx_skin, qb-clothing, rcore_clothing and more.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Appearance — Supported Scripts

::: warning Before you buy
Make sure every script you use is on this page. If one is missing, ask us on [Discord](https://discord.gg/fwbstudio) **before** you buy. We can add support for more scripts, but it can take time, and we can only add a script whose exports or database we can check.
:::

Everything below is **detected automatically**. Each one has its own open file in `bridge/`, so you can change it or add your own.

---

## Frameworks

| Framework | Resource |
| :--- | :--- |
| ESX | `es_extended` |
| QBCore | `qb-core` |
| Qbox | `qbx_core` |
| Standalone | none needed |

---

## Inventories (clothes as items)

Only needed when clothes are items (Settings → Clothing items). Folder: `bridge/inventory/<inventory>/`.

| Inventory | Resource |
| :--- | :--- |
| ox_inventory | `ox_inventory` |
| qb-inventory | `qb-inventory` |
| ps-inventory | `ps-inventory` |
| Quasar Inventory | `qs-inventory` |
| CodeM Inventory | `codem-inventory` |
| Core Inventory | `core_inventory` |
| JPR Inventory | `jpr-inventory` |
| One Inventory | `one_inventory` |
| Origen Inventory | `origen_inventory` |
| tgiann Inventory | `tgiann-inventory` |

---

## Multicharacter

| Script | How |
| :--- | :--- |
| [FWB Multicharacter](/resources/multicharacter/) | Built for it: creator, scene peds, starting looks |
| `esx_multicharacter` | Through the esx_skin events fwb_appearance answers |
| `qb-multicharacter` | Through the qb-clothing events fwb_appearance answers |
| Qbox character menu | Through the qb-clothing and illenium-appearance events and exports fwb_appearance answers |

---

## Scripts made for other appearance scripts

These scripts' events and exports are answered by fwb_appearance, so shops, jobs, housing and multicharacter scripts made for them keep working without changes:

| Made for | Examples of what keeps working |
| :--- | :--- |
| `esx_skin` + `skinchanger` | `esx_skin:openSaveableMenu`, `skinchanger:loadSkin`, `skinchanger:getSkin` |
| `qb-clothing` | `qb-clothing:client:openMenu`, `qb-clothes:client:CreateFirstCharacter`, `qb-clothing:client:loadOutfit` |
| `illenium-appearance` | `exports['illenium-appearance']:setPedAppearance`, `illenium-appearance:client:openClothingShop`, `…:client:changeOutfit` |

---

## Import From Your Old Script

Brings your players' looks over (admin menu). Folder: `bridge/import/<script>/`.

| Script |
| :--- |
| illenium-appearance |
| fivem-appearance |
| esx_skin / skinchanger |
| qb-clothing |
| rcore_clothing |
| bl_appearance |
| nf-skins |
| onex |

Another script? Copy `bridge/import/_template` and fill in where it keeps its looks.

---

## Interaction

| Resource | |
| :--- | :--- |
| `fwb_interact` (free) | **Press E** by default, or **Target** with `ox_target`, `qb-target` or `qtarget` |
| `cr_interact` | Works too |
