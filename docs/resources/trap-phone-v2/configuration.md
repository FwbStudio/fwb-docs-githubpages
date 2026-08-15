---
title: Trap Phone v2 Configuration | FWB Studio Docs
description: Complete configuration guide for FiveM Trap Phone v2 (fs_trapphone_v2) — live in-game NUI editor, apps, webhooks, and bridge compatibility.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426493" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Trap Phone v2 — Configuration

**Trap Phone v2** features a modern **Live In-Game NUI Dashboard**. You can adjust every setting, add items, configure apps, and tune drop rates directly inside FiveM with instant hot-reloading!

---

## Accessing the In-Game Editor

1. Ensure your character has the `fs_trapphone_v2.admin` ACE permission.
2. Type `/fs_trapphone` in chat or console.
3. Use the tabs on the left navigation bar to configure features:

* **Compatibility**: Select or auto-detect Framework, Inventory, Target, Dispatch, and Lockpicking systems.
* **Apps Configuration**: Tune settings for Burner, Signal, Corner Selling, Delivery, Trap House, and Trap Taxi.
* **Prop Editor**: Adjust 3D attachment offsets live with free-look camera and gizmo controls.
* **Webhooks**: Configure Discord or Fivemanage audit channels.
* **XP & Limits**: Set level thresholds and daily session caps.

All changes made in the NUI save directly into `server/config.json`.

---

## Configuration Categories in NUI Panel

The in-game NUI editor (`/fs_trapphone`) categorizes server management into intuitive tabs:

* **Access & Permissions**: Customize the admin command name (`/fs_trapphone`) and ACE permission (`fs_trapphone_v2.admin`).
* **Compatibility & Bridges**: Set auto-detection or manual overrides for Framework, Inventory, Targeting, Dispatch alerts, and Lockpicking minigames.
* **Apps Management**: Enable or disable specific apps, configure XP unlock requirements, cooldown timers, and activity limits.
* **Economic Pricing & Drugs**: Configure drug item names, purchase quantities, min/max street prices, and marked bills / clean cash payout rules.
* **Audit Webhooks**: Direct logging for individual criminal apps (Burner, Signal, Corner Selling, Delivery, Trap House) using Discord or Fivemanage.
* **3D Prop Gizmo Editor**: Visually position in-hand phone models and interaction points live in 3D space.

---

## Compatibility Options

| Category | Options | Description |
| :--- | :--- | :--- |
| **Framework** | `auto`, `esx`, `qbcore`, `qbox` | Automatically detects the active server framework |
| **Inventory** | `auto`, `ox_inventory`, `qb-inventory`, `qs-inventory`, `ps-inventory`, `lj-inventory`, `ak47_inventory`, `codem-inventory`, `pappu-inventorynp`, `custom` | Multi-inventory bridge handling items, cash rewards, and drug stashes |
| **Target** | `auto`, `ox_target`, `qb_target`, `3dtext` | Interaction prompt mode for customers, stashes, and doors |
| **Dispatch** | `auto`, `fs_trapphone`, `qs-dispatch`, `cd_dispatch`, `op-dispatch`, `ps-dispatch` | Police alerts triggered during corner selling or delivery drops |
| **Lockpick** | `auto`, `builtin`, `ox_lib`, `custom` | Directional WASD lockpick minigame or `ox_lib` skillcheck |
