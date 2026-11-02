---
title: FiveM Place Money Using ox_inventory (ESX, QBCore, Qbox) | FWB Studio Docs
description: Drop and place cash, money bags and black money as 3D props in FiveM with ox_inventory. Step-by-step fs_placeables setup for ESX, QBCore and Qbox.
head:
  - - meta
    - name: keywords
      content: fivem place money, fivem drop cash, fivem money prop, ox_inventory money, ox_inventory drop money, fivem black money prop, fivem cash pile, fivem money bag, esx ox_inventory money, qbcore ox_inventory money, fs_placeables
  - - script
    - type: application/ld+json
    - '{"@context":"https://schema.org","@graph":[{"@type":"TechArticle","headline":"Place Money Using ox_inventory in FiveM","description":"Drop and place cash, money bags and black money as 3D props in FiveM with ox_inventory, using FWB Studio Items Placeables (fs_placeables) on ESX, QBCore and Qbox.","about":["FiveM","ox_inventory","ESX","QBCore","Qbox"],"author":{"@type":"Organization","name":"FWB Studio","url":"https://fwbstudio.tebex.io/"},"publisher":{"@type":"Organization","name":"FWB Studio","logo":{"@type":"ImageObject","url":"https://docs.fwbstudio.com/logo.png"}},"mainEntityOfPage":"https://docs.fwbstudio.com/resources/items-placeables/place-money-ox-inventory"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Items Placeables","item":"https://docs.fwbstudio.com/resources/items-placeables/"},{"@type":"ListItem","position":2,"name":"Place Money Using ox_inventory","item":"https://docs.fwbstudio.com/resources/items-placeables/place-money-ox-inventory"}]}]}'
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Place Money Using ox_inventory

With **Items Placeables** (`fs_placeables`) players can drop **cash**, **money bags** and **black money** in the world as real 3D props, then pick them up again. This guide shows how to set it up with **ox_inventory** on **ESX**, **QBCore** and **Qbox**. It's good for cash handoffs, drug deals, ransom drops and robbery loot.

The money entries are already in the default `config/config.lua`. Follow the steps below to keep the right ones for your framework and test them.

---

## How money works in fs_placeables

The script does **not** treat money as a normal item. These names in `Config.Items` are handled as framework money:

| Item name in `Config.Items` | Handled as | Taken and given back through |
| :--- | :--- | :--- |
| `money`, `cash` | Cash | fs_bridge cash functions (player money) |
| `black_money` (ESX) | Dirty money | fs_bridge dirty money functions |
| `markedbills` (QBCore, or the item set in fs_bridge dirty money config) | Dirty money | fs_bridge dirty money functions |

Every other name is handled as a normal inventory item.

ox_inventory keeps your framework money and its `money` / `black_money` items in sync. So when fs_placeables takes $10,000 cash, the `money` stack in ox_inventory drops by 10,000 too, and the reverse happens on pickup.

---

## Step 1: Keep the right money entries for your framework

Open `fs_placeables/config/config.lua`.

::: code-group

```lua [ESX + ox_inventory]
Config.Items = {
    ['money'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['black_money'] = {
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    -- ['cash'] and ['markedbills'] are not ESX items, remove or comment them out
}
```

```lua [QBCore / Qbox + ox_inventory]
Config.Items = {
    ['money'] = {               -- ox_inventory 'money' item = QBCore 'cash' account
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    ['markedbills'] = {         -- must match fs_bridge dirty money item
        [1000] = `prop_cash_pile_01`,
        [10000] = `prop_money_bag_01`,
        [1000000] = `prop_cash_case_01`,
    },
    -- ['cash'] is the same balance as 'money', ['black_money'] is ESX only
}
```

:::

::: tip Why remove the extra entries?
On start, the server checks every `Config.Items` name against your item list. ox_inventory has `money` and `black_money` but no `cash` or `markedbills`, so you'd get `Item cash is not found in your server item list` in the console. The warning is harmless, but removing the unused entries keeps the console clean.
:::

---

## Step 2: Check the money items exist in ox_inventory

`money` and `black_money` ship with ox_inventory in `ox_inventory/data/items.lua`, with `money.png` and `black_money.png` in `ox_inventory/web/images/`. **On ESX there is nothing to add.**

On **QBCore / Qbox**, add `markedbills` if you use it as dirty money:

```lua
-- ox_inventory/data/items.lua
['markedbills'] = {
    label = 'Marked Bills',
    weight = 100,
},
```

Add a `markedbills.png` to `ox_inventory/web/images/` as well. The placement menu shows the item's inventory image.

---

## Step 3: Choose the cash amounts and money props

Each key under an item is the **exact amount** placed in one prop, and the value is the prop model for that amount.

```lua
['money'] = {
    [500] = `prop_cash_pile_02`,       -- new: drop $500 as a small cash pile
    [1000] = `prop_cash_pile_01`,      -- cash pile
    [10000] = `prop_money_bag_01`,     -- money bag
    [1000000] = `prop_cash_case_01`,   -- briefcase
},
```

- The submenu lists the amounts the player can afford.
- Picking **$10,000** takes exactly $10,000 and spawns `prop_money_bag_01`. Picking it up gives back exactly $10,000.
- Amounts are fixed. A player with $25,000 can't drop $25,000 in one prop, but can drop $10,000 twice.
- With `Config.ContinuePlacing = true`, the next $10,000 preview opens straight away while the player still has enough. Press **Backspace** to stop.

---

## Step 4: Test dropping money in game

1. Restart `fs_placeables` (`ensure fs_placeables` or restart the server).
2. Give yourself money, for example on ESX: `/giveaccountmoney [id] money 20000`.
3. Press **F9** or type `/placeprop`. **Money** and **Black Money** are always listed.
4. Pick **Money → Quantity: 10000**, aim where you want it and press **E**.
5. Your ox_inventory `money` stack drops by 10,000.
6. Look at the bag and pick it up (target, or **G** in 3D text mode). The 10,000 comes back.

If you have less than the smallest amount, the submenu opens with no amounts to pick.

---

## Optional: Add a "Place" button to the money item

ox_inventory item `buttons` run on the client when the player right-clicks the item. Use them to start placing money straight from the inventory with the `fs_placeables:placeitemhook` event:

```lua
-- ox_inventory/data/items.lua
['money'] = {
    label = 'Money',
    buttons = {
        {
            label = 'Place $1,000',
            action = function(slot)
                TriggerEvent('fs_placeables:placeitemhook', 'money', 1000)
            end
        },
        {
            label = 'Place $10,000',
            action = function(slot)
                TriggerEvent('fs_placeables:placeitemhook', 'money', 10000)
            end
        },
    }
},
```

Use amounts that exist in `Config.Items['money']`. An amount with no entry (and no `[1]` entry) uses `Config.defaultprop`, the cardboard box. The server still checks the player has enough money before anything is placed.

---

## FAQ

### Can players drop cash on the ground with ox_inventory?
Yes. Keep the `money` entry in `Config.Items` and players can drop cash piles, money bags or briefcases from the `/placeprop` menu or an inventory button.

### Does it work with black money and marked bills?
Yes. `black_money` on ESX and `markedbills` on QBCore are taken from and returned to dirty money, the same way cash is.

### Is dropped money saved after a restart?
No. Placed props are removed when the server or `fs_placeables` restarts, and the money in them is lost. Pick it up before restarting.

### Can other players pick up money I dropped?
Yes. Anyone within 2.5 m can pick up a placed money prop, which is what makes handoffs and robberies work.

### Do I need ox_target?
No. With `Config.target = true` pickup uses ox_target or qb-target. With `false`, players see floating `Press G to pickup` text instead. See [Configuration](./configuration#target-or-3d-text).

---

Next: [Configuration](./configuration) · [Commands](./commands) · [Common Errors](./common-errors)
