---
title: Outfit Bag Commands | FWB Studio Docs
description: Admin and player commands for Outfit Bag.
---

# Outfit Bag — Commands

## Admin menu

| Command | Purpose |
| --- | --- |
| `/fs_outfitbag` | Open the admin menu. |
| `/outfitbagadmin` | Alternative command for the same admin menu. |

Admin permission is required. If access is denied, copy the permission line shown and paste it into `server.cfg`.

The main admin command can be changed in **Settings**.

## Player command bag

| Command | Purpose |
| --- | --- |
| `/outfitbag` | Place your command bag without an inventory item. |
| `/ob` | Short version of `/outfitbag`; uses the same bag. |

Enable this feature in the admin menu's **Command bag** tab and set the outfit slots. Both commands work when it is enabled. If you configure another command name, it works alongside these two aliases.

After placing the bag, use its target interaction to open it. Command bags cannot be robbed.

## Item and Job Bags

No player command is needed for these bags:

- **Item bag:** use the inventory item to place it, then interact with the bag to open it.
- **Job Bag:** interact with the placed prop. Your job and rank must have access.

## Restart after file changes

Run this in the **server console** after editing bridge or locale files:

```text
restart fs_outfitbag
```

Pending inventory operations are retried automatically; no recovery command is required.
