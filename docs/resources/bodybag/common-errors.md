---
title: Bodybag Common Errors | FWB Studio Docs
description: Bodybag v2.0 common errors for FiveM, ESX, QBCore and Qbox servers.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426479" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Bodybag — Common Errors

## Installation and gameplay

| Symptom | What to check |
| --- | --- |
| Repeating rename warning | Rename the resource folder to exactly `fs_bodybag` and restart it. |
| Admin access denied | Grant `fs_bodybag.admin` using ACE permissions. Framework admin rank alone does not replace the ACE check. |
| Settings database loading or unavailable | Check oxmysql, your SQL connection and database permissions. No manual SQL import is needed. |
| Bodybag item does nothing | Install the correct item definition, start inventory first, and verify the item is enabled and its whitelist permits the player. |
| No target option | Check the selected target system and resource startup. E/3D-text fallback is available nearby; static disposal requires the matching enabled location. |
| Bury anywhere is unavailable | Enable it on the item and check soil-only settings, required tools and player/process state. |
| Could not prepare the character outcome | Check Last World verification when deletion is off, or character-table/deletion compatibility when it is on. |
| Skeleton body unavailable | Install/start `fs_mlo_lastworld` for the configured burned-body model. Disposal can finish without that display, but ashes cannot be collected from a missing prop. |
| Cannot collect ashes or grave reward | Check the reward toggle, ready/expiry timer, required items, inventory capacity and reward item definition. |
| Player still has a reuse cooldown | This survives bag removal, disposal and reconnects. Review or clear it in Active Players. |
| Saved values differ from defaults | SQL settings override first-install defaults. Edit and save through the admin menu. |

## Character deletion and recovery

A **deletion queued** log is not confirmation that deletion completed. Check for **Character Deleted** and inspect Backups/Recovery when an operation fails.

| Situation | Action |
| --- | --- |
| Pending character disposal blocks reconnect | Review the pending job in Recovery. Retry after fixing the stated cause. Cancel is allowed only when the original record remains and deletion has not committed. |
| Related table cannot be mapped | Unresolvable related groups are preserved. A dependency preventing deletion of the main character record must be resolved before disposal can complete. |
| Backup cannot be restored | Check expiry, account offline status and schema compatibility. Do not disable keys or change column types to force restoration. |
| Original character slot is occupied | Restore chooses an available database slot. Ensure the multicharacter selector allows that slot. |
| Uncertain inventory or payment result | Verify actual inventory/balance before making a correction. Mark resolved records the decision; it does not grant an automatic refund. |

## Frequently asked questions

<details>
<summary>Is ox_lib required?</summary>

ox_lib is optional for notification and progress integrations; oxmysql is required.

</details>

<details>
<summary>Where are the old config files and SQL installer?</summary>

Use /fs_bodybag to configure server settings. SQL tables are created by server-side Lua. Do not import old configuration over this version.

</details>

<details>
<summary>Does restoring a backup restore every third-party script's data?</summary>

Only data included in the compatible backup can be restored. Unmapped or excluded tables are not included. Review character-table selection before enabling deletion.

</details>

<details>
<summary>What happens if a player brings another body to an occupied funeral location?</summary>

The resource checks location/process availability before starting another disposal. Wait for the occupied funeral display or process to finish before reusing that spot.

</details>

## Support

Contact [FwB Studio on Discord](https://discord.gg/sPqkfQHPAa) with your framework, inventory, ambulance provider, resource version and relevant error text. Do not post database credentials or webhook URLs.

