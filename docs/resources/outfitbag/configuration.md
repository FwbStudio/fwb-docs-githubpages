---
title: Outfit Bag Configuration | FWB Studio Docs
description: Configure Outfit Bag through its in-game admin menu.
---

# Outfit Bag — Configuration

Use `/fs_outfitbag` to open the admin menu. Configure the resource in-game and use the page's **Save** button to apply your changes.

## Admin tabs

| Tab | What you can do |
| --- | --- |
| **Bag Items** | Create and edit usable bags. Choose the inventory item, world prop, outfit slots, storage mode, appearance and robbery settings. |
| **Active Bags** | View and inspect placed inventory bags. |
| **Job Bags** | Place static bags, select jobs and ranks, and create their outfits. |
| **Command bag** | Enable item-free bags, set the command name and choose the number of outfit slots. |
| **Bridge** | Select your inventory, language, framework, notifications, clothing and target providers. |
| **Outfit Rules** | Choose which clothing parts may be saved and blacklist specific clothing variations. |
| **Naked defaults** | Set the male and female clothing used when a player removes an outfit part. |
| **Settings** | Configure public sharing, ground cleanup, admin access and debug logging. |

## Create an item bag

1. Open **Bag Items** and click **Create bag item**.
2. Select an inventory item from the searchable picker.
3. Choose the world prop and outfit capacity.
4. Adjust storage, appearance and robbery options.
5. Save the bag.

Small, Medium and Large bag definitions are included by default.

**Linked to each bag:** each physical bag keeps its own outfits, including when transferred to another player.

**Linked to player:** outfits are linked to the player and item type.

The player who places the bag manages it. Public visitors can wear outfits, but cannot edit outfits or pick up the bag.

## Create a Job Bag

1. Open **Job Bags** and create a bag.
2. Enter the **Target label** and choose its prop.
3. Open **Job access**. Select jobs on the left and tick their allowed ranks on the right.
4. Place the prop using the placement tool.
5. Use **Create outfit** to edit clothes on the preview model or copy an existing player's clothes.
6. Use **Manage access** on an outfit row to restrict it to selected ranks from the bag's access list.
7. Click **Save bag**.

Changes inside the job/rank picker and clothing editor remain a draft until you save the bag.

## Enable command bags

In **Command bag**, enable the feature, choose the outfit slot count and save. Players can then use `/outfitbag` or `/ob` without an inventory item. A custom command name can also be configured.

Command bags cannot be robbed. See [Commands](./commands).

## Clothing rules

In **Outfit Rules**, toggle the parts players may save. Under **Blacklisted variations**, select a part, player model, drawable ID and either all textures or one texture.

In **Naked defaults**, configure male and female replacements. Use **Edit on model** to choose them visually, then save. Check these defaults with your server's clothing packs.

## Global settings

- **Public sharing:** allow or disable public bags for both item and command bags. When disabled, players do not see the public/private actions.
- **Ground cleanup:** enable cleanup and choose how long ground bags remain.
- **Admin access:** configure the admin command and permission.
- **Debug:** enable diagnostic console messages when troubleshooting.

## Language and editable files

Choose the interface language in **Bridge**. For a custom language, copy `locales/en.lua`, change its locale code and language label, and translate the values without changing the keys. Missing translations fall back to English.

| File | Purpose |
| --- | --- |
| `bridge/default/dropdowns.lua` | Prop choices and dropdown labels |
| `bridge/default/animations.lua` | Bag and clothing animations |
| `bridge/default/bags.lua` | Initial default bag definitions |
| `locales/*.lua` | Translations |

Restart the resource after editing Lua files. Keep `server/settings.json` when updating; saved bags and outfits are stored in the database.
