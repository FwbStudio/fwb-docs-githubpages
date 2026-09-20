---
title: Outfit Bag Common Errors | FWB Studio Docs
description: Troubleshoot Outfit Bag v2.0 items, SQL, job access, previews and recovery on FiveM ESX and QBCore servers.
---

# Outfit Bag — Common Errors

Enable **Settings → Debug logging** while diagnosing a problem. Disable it again when you are finished.

| Symptom | Check |
| --- | --- |
| Tablet access denied | Grant the dedicated `fs_outfitbag.admin` ACE to the correct group/license. General command permission is not enough. |
| Repeated rename warning | Rename the resource folder to exactly `fs_outfitbag` and restart it. |
| Storage starting/unavailable | Start oxmysql first, verify the connection and database privileges, then inspect debug output. SQL setup is automatic. |
| Item does nothing | Confirm a single enabled Bag Item definition matches the item, the framework/inventory providers are active, and the callback supplies an exact slot. |
| Item callback error after restart | Ensure the selected framework and inventory are fully started; restart Outfit Bag after its providers and retry. Capture debug output if it persists. |
| Duplicate/stacked item rejected | Use non-stacking/unique bag items. Do not duplicate `fs_bag_uid` metadata manually. |
| Missing admin item image | Install `itemname.png` into the active inventory's image directory. The installation folder is not a thumbnail fallback. |
| Bag cannot be placed | Stand on foot with clear space nearby. Check collision, obstacles, surface slope and whether the chosen prop exists in your game build. |
| Job Bag not visible | Check Enabled, saved placement, OneSync, prop model availability and the placement's routing bucket. |
| Job outfit missing/inaccessible | Check the bag's selected job/ranks, the outfit's access subset and the player's model. A higher rank is not automatically included in an explicit rank selection. |
| Outfit does not change a component | Check allowed parts, drawable/texture blacklist, model compatibility, selected clothing provider and naked defaults. |
| Camera/animation problem | Check `bridge/default/animations.lua` and conflicts with other resources controlling the ped/camera. Include debug details in your report. |
| Bag item operation pending | Free inventory space and run `/outfitbagrecover` once the inventory provider is available. |
| Language missing | Confirm the locale registers its code/label correctly, then restart the resource. |
| Some text remains English | Missing or empty translated keys fall back to `en.lua`. Keep keys unchanged when translating. |
| Footer only shows Version | The online check was unavailable. Gameplay is unaffected; enable debug for the diagnostic reason. |
| UI changes are not visible | FiveM loads `web/build`. Keep it synchronized with `web/source` and restart after deployment. |

## Before reporting an issue

Include your framework, inventory and clothing resource versions, relevant debug output, reproduction steps, and whether it affects inventory bags, Job Bags or both. Do not post database credentials or license secrets.

[FwB Studio support on Discord](https://discord.com/invite/sPqkfQHPAa).
