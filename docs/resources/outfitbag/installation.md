---
title: Outfit Bag Installation | FWB Studio Docs
description: Install Outfit Bag v2.0 on FiveM ESX, QBCore or Qbox with oxmysql, automatic SQL, inventory items and ACE permissions.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426474" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Outfit Bag — Installation

## Dependencies

| Resource or service | Required | Notes |
| --- | --- | --- |
| `oxmysql` and MySQL/MariaDB | Yes | The only supported database adapter |
| ESX, QBCore or Qbox | For bundled gameplay integrations | Choose the framework actually running on your server |

### Supported inventories

| Resource | Supported | Get resource |
| --- | :---: | --- |
| `ox_inventory` | ✅ | [GitHub](https://github.com/overextended/ox_inventory) |
| `qb-inventory` | ✅ | [GitHub](https://github.com/qbcore-framework/qb-inventory) |
| `ps-inventory` | ✅ | [GitHub](https://github.com/Project-Sloth/ps-inventory) |
| `lj-inventory` | ✅ | [GitHub](https://github.com/loljoshie/lj-inventory) |
| `qs-inventory` | ✅ | Paid |
| `ak47_inventory` | ✅ | Paid |

### Supported clothing

| Resource | Supported | Get resource |
| --- | :---: | --- |
| `illenium-appearance` | ✅ | [GitHub](https://github.com/iLLeniumStudios/illenium-appearance) |
| `fivem-appearance` | ✅ | [GitHub](https://github.com/pedr0fontoura/fivem-appearance) |
| `qb-clothing` | ✅ | [GitHub](https://github.com/qbcore-framework/qb-clothing) |
| `skinchanger` | ✅ | [GitHub](https://github.com/esx-framework/esx_core) |
| `rcore_clothing` | ✅ | Paid |
| `crm-appearance` | ✅ | Paid |
| `p_appearance` | ✅ | Paid |
| `qs-appearance` | ✅ | Paid |

### Supported targets

| Resource | Supported | Get resource |
| --- | :---: | --- |
| `ox_target` | ✅ | [GitHub](https://github.com/overextended/ox_target) |
| `qb-target` | ✅ | [GitHub](https://github.com/qbcore-framework/qb-target) |

### Supported languages

| Language | Supported | Locale file |
| --- | :---: | --- |
| Arabic | ✅ | `ar.lua` |
| German | ✅ | `de.lua` |
| English | ✅ | `en.lua` |
| Spanish | ✅ | `es.lua` |
| French | ✅ | `fr.lua` |
| Dutch | ✅ | `nl.lua` |
| Polish | ✅ | `pl.lua` |
| Brazilian Portuguese | ✅ | `pt-br.lua` |
| Russian | ✅ | `ru.lua` |
| Turkish | ✅ | `tr.lua` |

Language files in `locales/` are open and editable. To add your own language, copy `en.lua`, change the locale code and language label, and translate the values without changing the keys. Restart the resource, then select your language in **Bridge → Language**. Missing translations fall back to English.

## 1. Install the resource

Place the folder under your server resources. Keep its exact name:

```text
resources/[fs]/fs_outfitbag/
```

Back up your database and existing configuration before replacing an older installation. The automatic schema setup creates current tables; it is not an automatic import of an older outfit-bag product's data.

## 2. Add inventory items and images

The package includes:

```text
[install_me_first]/
  [items]/ox_inventory.lua
  [items]/qb-inventory.lua
  [items]/qs-inventory.lua
  [items]/ps-inventory.lua
  [items]/lj-inventory.lua
  [items]/ak47_inventory.lua
  [images]/fs_small_bag.png
  [images]/fs_medium_bag.png
  [images]/fs_large_bag.png
```

Open the file in **[items]** that matches your inventory. Copy its three bag item entries into your existing item definitions. Each supplied file uses that inventory's format and contains entries only—no surrounding `return {}` block. Do not replace your existing item catalog.

Copy all three PNGs from **[images]** into your inventory's image directory, keeping their filenames unchanged. For **ox_inventory**, this is `ox_inventory/web/images/`.

| Item | Default outfit capacity |
| --- | --- |
| `fs_small_bag` | 5 |
| `fs_medium_bag` | 10 |
| `fs_large_bag` | 15 |

Use `stack = false` for ox_inventory, or `unique = true` for supported info-based inventories. Enabled definitions register through native framework usable-item callbacks. The supplied ox items do not need `consume` or `client.export` entries.

Admin item thumbnails use the active inventory's `itemname.png`, not images inside the installation folder.

## 3. Grant admin permission

Use `/fs_outfitbag` in-game, copy the permission line shown, and paste it into your `server.cfg`.

## 4. Start in the correct order

Place `fs_outfitbag` inside your `resources/[fs]/` folder. Make sure the following line is at the end of your resource startup entries in `server.cfg`, after your framework, inventory and other dependencies:

```cfg
ensure [fs]
```

If `ensure [fs]` is already present, move it to the end instead of adding it again.

## 5. Automatic SQL

No manual SQL import is required for a normal installation. On startup the resource installs missing tables through oxmysql and applies its schema checks. The database user needs table-creation/alter permissions as well as normal read/write access.

The schema is deliberately not included in the installation-items folder. For an administrator who needs a manual bootstrap, the source is `server/schema.sql`.

::: details Manual SQL alternative
<a href="/downloads/fs_outfitbag/schema.sql" download="fs_outfitbag-v2.0.sql">Download the v2.0 schema SQL</a>, or use the matching file shipped in your resource.

Back up the database, stop `fs_outfitbag`, and run the contents of `server/schema.sql` against the same database configured for oxmysql. Start the resource again so its runtime migrations and default-definition checks can finish.

Do not drop existing tables to reinstall. The bundled file uses `CREATE TABLE IF NOT EXISTS`; runtime checks are still needed for existing installations.
:::

## 6. Configure and test

1. Open `/fs_outfitbag`.
2. In **Bridge**, confirm framework, inventory, clothing, target and other providers.
3. Choose **Language** between Inventory and Framework.
4. Check the three default definitions in **Bag Items**.
5. Give yourself one non-stacking bag item through your inventory's normal administration tools.
6. Use the item to place the bag. Then use the prop's target to open it.
7. Save an outfit, wear/remove a component, pick up the bag, and test transfer and restart recovery.

Continue with [Configuration](./configuration) and [Integrations](./integrations).
