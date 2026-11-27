---
title: Appearance Hooks & Open Files | FWB Studio Docs
description: FWB Appearance server hooks for FiveM — stop or change shop payments, creator saves, wardrobe actions, clothes saves and character deletes with your own rules, react with server events, and the open bridge files.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Appearance — Hooks & Open Files

Hooks let you add your own rules to the script, or react when something happens, without editing the escrowed code. They work like ox_inventory's `registerHook`.

- **Before hooks** run before something happens. Return `false` (or `false, 'Text'`, the player sees the text) to stop it. Hooks marked *changeable* may also change `data`: the script uses what you leave in it.
- **After events** run once it has happened. Use them for logs, XP, rewards or a Discord webhook.

| Where | For |
| :--- | :--- |
| `bridge/hooks/server.lua` | Server owners. Not escrowed: an empty function for every hook. Fill in the ones you need. |
| `exports.fwb_appearance:registerHook(name, fn)` | Other resources (a before hook) |
| `AddEventHandler('fwb_appearance:<event>', fn)` | Other resources (every after event) |

> [!NOTE]
> **Developer note:** these open functions are for your own rules and integrations. FWB Studio does not support third-party code written inside them.

---

## Before hooks

| Hook | When | `data` |
| :--- | :--- | :--- |
| `openShop` | A player opens a shop | `source, shopId, shopName, type` |
| `pay` | A player pays (the price is already worked out) | `source, shopId, shopName, type, total, account ('cash' \| 'bank'), appearance, old` |
| `saveCreator` | The creator is saved | `source, appearance` |
| `saveClothes` | Another script saves the player's clothes (outfit bag, uniform script, `WearOutfit`) · *changeable* | `source, appearance` |
| `legacySave` | A save from a script made for another clothing system (`esx_skin:save`, `qb-clothing:saveSkin`, illenium `saveAppearance`) | `source, from, appearance` |
| `openWardrobe` | A wardrobe opens | `source, wardrobe, label, shared` |
| `wardrobe` | Something is done in a wardrobe | `source, wardrobe, action, outfitId, name, code` |
| `boss` | A boss menu action of a player owned shop | `source, shopId, action, payload, role` |
| `admin` | An admin menu action | `source, action, payload` |
| `deleteCharacter` | A deleted character's look and wardrobes are about to be removed. `false` keeps them | `identifier` |

### Example
```lua
-- bridge/hooks/server.lua
function before.pay(data)
    if Player(data.source).state.wanted then
        return false, 'Not while you are wanted'
    end
    return true
end
```

---

## After events

| Event | When | `data` |
| :--- | :--- | :--- |
| `appearanceSaved` | A look was saved | `source, identifier, appearance, reason (shop \| creator \| clothes \| legacy \| export)` |
| `purchased` | A player paid in a shop | `source, shopId, shopName, type, total, account, appearance` |
| `creatorFinished` | A new character finished the creator | `source, appearance` |
| `outfitWorn` | An outfit was put on from a wardrobe | `source, wardrobe, outfitId, job, appearance` |
| `wardrobeChanged` | An outfit was saved, renamed, deleted, shared, taken out ... | `source, wardrobe, action, outfitId, name, code` |
| `bossChanged` | Something changed in a boss menu | `source, shopId, action, payload` |
| `delivered` | Stock was unloaded at a player owned shop | `source, shopId, units` |
| `adminChanged` | The admin changed something | `source, action, payload` |
| `characterDeleted` | A deleted character's look and wardrobes were removed | `identifier` |

### Example
```lua
AddEventHandler('fwb_appearance:purchased', function(data)
    print(('%s paid $%d in %s'):format(GetPlayerName(data.source), data.total, data.shopName))
end)
```

---

## Open files

Every file in `bridge/` is not escrowed. Change them freely; keep your copy when you update.

| File | What it is for |
| :--- | :--- |
| `bridge/hooks/server.lua`, `bridge/hooks/client.lua` | The hooks on this page and on [Client Hooks](./client) |
| `bridge/creator.lua` | The creator's starting look for men and women |
| `bridge/framework/*` | ESX, QBCore, Qbox and standalone: players, money, jobs, identifiers |
| `bridge/inventory/*` | Clothing as items: ox_inventory, qb-inventory, qs-inventory, codem, core, jpr, one, origen, ps, tgiann |
| `bridge/import/*` | Importing looks and outfits from esx_skin, illenium-appearance, fivem-appearance, qb-clothing, bl_appearance, nf-skins, onex, rcore_clothing (`_template` for your own) |
| `bridge/society.lua` | Where shop money goes for player owned shops |
| `bridge/capture.lua` | The picture studio: base clothes, hidden body parts, creator peds |
| `bridge/themes.lua` | The menu themes |
