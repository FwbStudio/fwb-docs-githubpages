---
title: Outfit Bag Integrations | FWB Studio Docs
description: Set up Outfit Bag framework, inventory, clothing and target integrations.
---

# Outfit Bag — Integrations

Integrations are included inside the resource's `bridge/` folder. Select your providers in the admin menu's **Bridge** tab and save.

See [supported resources](./installation#supported-inventories) for the inventory, clothing and target lists.

## Framework

Select **ESX**, **QBCore** or **Qbox**, or leave automatic detection enabled. The framework integration handles player identity, job ranks and usable bag items.

Supported bag items register automatically. You do not need to add a separate client export to the supplied ox_inventory items.

## Inventory

Select your active inventory and install its matching item file from `[install_me_first]/[items]/`.

Bag items must be non-stacking or unique, as specified in the supplied file. Metadata keeps each bag's identity and outfits attached to the correct item during pickup and transfer.

Copy the supplied images into your inventory's image directory. The admin menu uses the selected item's image from that inventory.

## Clothing

Select the clothing resource your server uses. This integration captures, applies and saves outfit changes. Check male/female naked defaults against any custom clothing packs.

## Saving clothes after reconnecting

Enable **Settings → Persist outfit changes** in the admin menu. This is off by default and applies to item bags, command bags and Job Bags. Completed wear/remove actions save through the selected clothing system. Preview models and cancelled sequences do not trigger a save.

### QB Clothing only — old and new versions

Check whether your qb-clothing already has the `qb-clothing:getSkin` event or `GetSkinData` export. If either exists, no getter change is needed.

Otherwise, add this at the bottom of the client file containing `local skinData`:

```lua
AddEventHandler('qb-clothing:getSkin', function(cb)
    cb(skinData)
end)
```

Use `qb-clothing/client.lua` or `qb-clothing/client/main.lua`, depending on your version. Keep the hook in the same file as `skinData`, not a separate file, and do not add duplicate handlers.

This applies to both old and new QB Clothing versions using `skinData` and the normal `qb-clothing:saveSkin` server event. No inventory edits or replacement `loadOutfit` event are required. Restart qb-clothing and fs_outfitbag after adding the hook.

Other supported clothing systems do not need this QB-specific modification. The bridges submit saves through their provider APIs, not direct database writes. Test your installed versions by wearing and removing clothes, then reconnecting.

## Target providers

Use **ox_target** or **qb-target**. Bag actions attach to the actual bag prop.

Players place normal bags by using an item or the enabled bag command. The freecam placement tool is only for administrators creating static Job Bags.

## Notifications

Choose **Framework**, **fs_notify** or **ox_lib** to display action results and errors. Start the chosen notification resource before Outfit Bag.

## Database

**oxmysql** is the only supported database adapter. Tables install automatically when the resource starts; there is no database selector in the admin menu.

## Custom integrations

Provider-specific files are in the corresponding `bridge/` folders. Custom inventory support requires implementing the adapter; selecting Custom alone does not add compatibility.

For another server-side script to trigger bag item use, see the [UseBag export](./exports/server).

Before opening your server to players, test placement, outfit saving, wearing, pickup and item transfers with your installed resource versions.
