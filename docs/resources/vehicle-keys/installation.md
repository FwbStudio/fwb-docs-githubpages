---
title: FWB Vehicle Keys Installation | FWB Studio Docs
description: Install FWB Vehicle Keys on FiveM — dependencies, items for ox_inventory, qb-inventory, qs-inventory and ESX, server.cfg order and the fwb_vehiclekeys.admin ACE.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB Vehicle Keys — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | The database. Tables are created on first start; there is nothing to import. |
| Framework | Yes | `es_extended`, `qb-core` or `qbx_core`. |
| Inventory | Optional | Needed for keys **as items** (the key carries its plate): `ox_inventory`, `qb-inventory` / `ps-inventory` / `lj-inventory`, `qs-inventory` or `codem-inventory`. Without one, keys are saved keys. |
| Target | Optional | `ox_target`, `qb-target` or `sleepless_interact` for the locksmith. Without one, a "[E]" 3D text is used. |
| Dispatch | Optional | `cd_dispatch`, `ps-dispatch`, `qs-dispatch`, `rcore_dispatch` or `core_dispatch`. Without one, the built-in alert is used. |
| `ox_lib`, `ps-ui` | Optional | Only if you want their minigames instead of the built-in ones. |

---

## `[Install_me_first]`

| Path | What it is |
| :--- | :--- |
| `items/ox_inventory.lua` | Item entries for `ox_inventory/data/items.lua` |
| `items/qb-inventory.lua` | Item entries for `qb-core/shared/items.lua` (qb / ps / lj-inventory) |
| `items/qs-inventory.lua` | Item entries for `qs-inventory/shared/items.lua` |
| `items/esx.sql` | ESX without an inventory script (tools only; keys are saved keys there) |
| `images/` | Item pictures (from [items.rainmad.com](https://items.rainmad.com/)): `vehiclekey`, `carlockpick`, `advancedlockpick`, `tracker`, `scanner`, `pliers` |

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory if you haven't already (`resources/[fs]/`).
2. Place the `fwb_vehiclekeys` folder into `resources/[fs]/fwb_vehiclekeys`.
3. Remove or stop any other vehicle keys resource (qb-vehiclekeys, qbx_vehiclekeys, wasabi_carlock…) so two key scripts don't fight over the same cars. Scripts that call those keep working: see [Integrations](./integrations).
4. Add the items and pictures ([Items](#items) below).
5. Add the resource to your `server.cfg` **after** your framework, inventory and `oxmysql`:

```lua
ensure oxmysql
ensure es_extended      # or qb-core / qbx_core
ensure ox_inventory     # your inventory
ensure fwb_vehiclekeys
```

6. Give yourself admin access ([Admin Access](#admin-access)) and restart the server.
7. In game, run `/fwb_vehiclekeys`. The **Overview** page shows what was detected and what is still missing.

---

## Items

| Item | What it is |
| :--- | :--- |
| `vehiclekey` | A key with the plate on it (only with an inventory that keeps data on items) |
| `carlockpick` | Opens a locked car door, with some luck |
| `advancedlockpick` | A better pick: higher chance, breaks less |
| `tracker` | A GPS tracker: planted on a car, it shows the holder where the car is |
| `scanner` | A handheld scanner that finds a tracker hidden on a car |
| `pliers` | Cuts a tracker off a car |

The names can be changed in game: **Settings → General** (key item), **Car theft → Lockpicks** and **Settings → Trackers**. If you rename one, rename it in your inventory too. **Overview → Items in the inventory** tells you which are still missing.

::: details ox_inventory (ESX / Qbox)
Paste `[Install_me_first]/items/ox_inventory.lua` into `ox_inventory/data/items.lua`:

```lua
['vehiclekey'] = {
    label = 'Vehicle key',
    weight = 50,
    stack = false,
    close = true,
    description = 'A key with a number plate on it',
},
['carlockpick'] = { label = 'Car lockpick', weight = 100, stack = true, close = true },
['advancedlockpick'] = { label = 'Advanced lockpick', weight = 150, stack = true, close = true },
['tracker'] = { label = 'GPS tracker', weight = 80, stack = true, close = true },
['scanner'] = { label = 'Tracker scanner', weight = 200, stack = true, close = true },
['pliers'] = { label = 'Pliers', weight = 150, stack = true, close = true },
```

Pictures: copy `[Install_me_first]/images/*.png` into `ox_inventory/web/images/`.
:::

::: details qb-inventory / ps-inventory / lj-inventory (QBCore)
Paste `[Install_me_first]/items/qb-inventory.lua` into `qb-core/shared/items.lua`.

Pictures: copy the images into `qb-inventory/html/images/` (or `ps-inventory/html/images/`, `lj-inventory/html/images/`).
:::

::: details qs-inventory
Paste `[Install_me_first]/items/qs-inventory.lua` into `qs-inventory/shared/items.lua`.

Pictures: copy the images into `qs-inventory/html/images/`.
:::

::: details codem-inventory
Use `items/qb-inventory.lua` (QBCore) or `items/esx.sql` (ESX) for your framework's item list.

Pictures: copy the images into `codem-inventory/html/itemimages/`.
:::

::: details ESX without an inventory script
Run `[Install_me_first]/items/esx.sql` on your database:

```sql
INSERT INTO `items` (`name`, `label`, `weight`) VALUES
  ('carlockpick', 'Car lockpick', 1),
  ('advancedlockpick', 'Advanced lockpick', 1),
  ('tracker', 'GPS tracker', 1),
  ('scanner', 'Tracker scanner', 1),
  ('pliers', 'Pliers', 1);
```

The ESX default inventory can't keep a plate on an item, so keys are **saved keys** (no key item).
:::

Restart the inventory (or the server) after adding the items.

---

## Admin Access

The `fwb_vehiclekeys.admin` ACE is the only admin check. Without it, typing `/fwb_vehiclekeys` in game shows a screen with **your own** server.cfg line (license filled in) and a copy button.

```lua
# Give it to an admin group:
add_ace group.admin fwb_vehiclekeys.admin allow

# Or to a single player:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fwb_vehiclekeys.admin allow
```

The command name and the ACE can be renamed in **Settings → Commands**.

---

## Where Settings Are Saved

Everything is stored in your database through `oxmysql`. The tables are created on first start:

| Table | What it holds |
| :--- | :--- |
| `fwb_keys_config` | Settings, locksmith places, job key rules |
| `fwb_keys` | Saved keys (spares, temporary keys) |
| `fwb_keys_locks` | Lock version per plate (changed locks) |
| `fwb_keys_trackers` | GPS trackers |
| `fwb_keys_log` | Car history (who locked, drove, hotwired…) |
| `fwb_keys_plates` | Plate changes (for the cooldown) |
