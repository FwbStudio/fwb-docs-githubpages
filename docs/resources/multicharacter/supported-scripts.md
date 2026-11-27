---
title: Multicharacter Supported Scripts | FWB Studio Docs
description: Frameworks, appearance scripts, housing scripts and inventories FWB Multicharacter supports out of the box — fwb_appearance, illenium-appearance, CodeM, rcore_clothing, ak47, qs-housing, ps-housing, qbx_properties and more.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Multicharacter — Supported Scripts

::: warning Before you buy
Make sure every script you use is on this page. If one is missing, ask us on [Discord](https://discord.gg/fwbstudio) **before** you buy. We can add support for more scripts, but it can take time, and we can only add a script whose exports or database we can check.
:::

Every script below is **detected automatically**. Each one has its own open folder in `bridge/`, so you can change it, or copy `_template` to add a script that isn't listed.

---

## Frameworks

| Framework | Resource | Notes |
| :--- | :--- | :--- |
| ESX | `es_extended` | `Config.Multichar = true` (see [Installation](./installation#esx)) |
| QBCore | `qb-core` | Replaces `qb-multicharacter` and `qb-spawn` |
| Qbox | `qbx_core` | `useExternalCharacters = true` (see [Installation](./installation#qbox)) |

---

## Appearance Scripts

Used to dress the characters in the scene, to open the creator for a new character and to load the look when they play. Folder: `bridge/appearance/<script>/`.

| Script | Resource | Creator for new characters |
| :--- | :--- | :--- |
| FWB Appearance | `fwb_appearance` | Opens before the spawn map |
| CodeM Clothing | `codem-clothing` | Opens before the spawn map |
| rcore Clothing | `rcore_clothing` | Opens once the character stands in the world |
| illenium-appearance | `illenium-appearance` | Opens before the spawn map |
| qb-clothing | `qb-clothing` | Opens once the character stands in the world |
| esx_skin + skinchanger | `esx_skin` | Opens before the spawn map |
| ak47 Clothing (ESX) | `ak47_clothing` | Opens before the spawn map |

With none of these, the script dresses the scene peds itself from the framework's skin data (ESX `users.skin`, QBCore / Qbox `playerskins`).

**If you run more than one, the one higher in this list is used.**

---

## Housing Scripts

Homes on the spawn map: every home a character owns, and where the script allows it, every home they have a key to. Folder: `bridge/housing/<script>/`. **Automatic** (the default) shows homes from every housing script that is running; you can also pick one on the **Housing** page of the admin menu.

| Script | Resource | Owned | Key holder |
| :--- | :--- | :---: | :---: |
| Quasar Housing | `qs-housing` | ✅ | — |
| RTX Housing | `rtx_housing` | ✅ | — |
| VMS Housing | `vms_housing` | ✅ (and rented) | — |
| Qbox Properties | `qbx_properties` | ✅ | ✅ |
| TK Housing | `tk_housing` | ✅ | ✅ |
| ps-housing | `ps-housing` | ✅ | ✅ |
| BCS Housing | `bcs_housing` | ✅ | ✅ |
| NoLag Properties | `nolag_properties` | ✅ | — |
| esx_property | `esx_property` | ✅ | ✅ |
| qb-houses | `qb-houses` | ✅ | ✅ |
| qb-apartments | `qb-apartments` | ✅ | — |

"—" means that script gives no way to read who holds a key, so only owned homes show.

---

## Inventories (starter items)

| Inventory | Resource |
| :--- | :--- |
| ox_inventory | `ox_inventory` |
| qb-inventory | `qb-inventory` |
| Quasar Inventory | `qs-inventory` |
| Any other | The framework's own item functions. Add yours in `bridge/inventory.lua`. |

---

## Your Script Isn't Listed?

1. Copy `bridge/appearance/_template` or `bridge/housing/_template` and rename the folder to your script's name.
2. Fill in what your script offers (the template explains each line).
3. Restart. Nothing else needs editing; the admin menu shows it.

Or ask us on [Discord](https://discord.gg/fwbstudio) and we'll look at adding it.
