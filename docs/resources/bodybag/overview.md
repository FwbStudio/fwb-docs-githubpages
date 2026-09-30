---
title: Bodybag Overview | FWB Studio Docs
description: Bodybag v2.0 overview for FiveM, ESX, QBCore and Qbox servers.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Overview

Bodybag v2.0 provides body transport, funerals, supply shops and character recovery through an in-game admin menu. Configure it with **/fs_bodybag**; players use inventory items, targets or nearby 3D-text interactions.

## Package

| Component | Resource folder | Purpose |
| --- | --- | --- |
| Bodybag v2.0 | `fs_bodybag` | ESX, QBCore and Qbox gameplay and administration |
| Last World assets | `fs_mlo_lastworld` | Assets for the supplied Hell/Heaven locations and custom burned-body prop |

## Features

- Create bodybag items with their own models, allowed actions, consumption rules, character-deletion outcome, and job/grade or player whitelists.
- Carry or drag a bag. Carry blocks sprinting and jumping; dragging uses a slower movement speed.
- Configure cemetery burial and furnace cremation locations, or allow burial and burning elsewhere per item. Optional soil-only burial uses a client terrain check.
- Place supply-shop peds, set item prices and inventory images, and configure shop and location blips.
- Send non-deleted characters to Hell or Heaven with a saved stay duration, radius enforcement, weapon disarming and hunger/thirst refills.
- Back up selected character data before permanent deletion. Restore an eligible backup to an available character slot.
- Manage active processes and saved bodybag cooldowns from Active Players. Review failed or uncertain operations in Recovery.
- Configure funeral rewards, collection timers, scrolling announcements and announcement blips.
- Select Discord, FiveManage or custom logging and choose which events to record.

## Character outcomes

With **Permanently delete character** disabled on the item, disposal sends the character to the configured Last World location. Configure and verify these destinations before use.

With deletion enabled, the player is disconnected before the resource waits for framework unload/save and attempts a transactional backup and deletion. Only directly mapped, selected character data is processed. Related groups that cannot be safely mapped are preserved; a dependency that blocks removal of the main character record prevents deletion.

Backups expire after seven days. Restoration requires the account to be offline and the current schema to be compatible. A successful restore removes the backup. An available database slot does not grant additional slots in a multicharacter selector.

## Documentation

- [Installation](./installation) — dependencies, items and first start
- [Configuration](./configuration) — admin pages and editable files
- [Common Errors](./common-errors) — troubleshooting and recovery

