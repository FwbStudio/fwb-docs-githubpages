---
title: Appearance Installation | FWB Studio Docs
description: Install FWB Appearance on FiveM — game build, OneSync, oxmysql and fwb_interact, replacing esx_skin, skinchanger, qb-clothing or illenium-appearance, clothing items and the fwb_appearance.admin ACE.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Appearance — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| Game build 2699+ | Yes | `sv_enforceGameBuild 2699` or newer (the newest is best). Needed to keep pictures and settings on the right piece when clothing packs change. The console warns when the build is older. |
| OneSync | Yes | Stock delivery vans are made on the server. |
| `oxmysql` | Yes | The database. Tables are created on first start; there is nothing to import. |
| `fwb_interact` | Yes (Free) | How players use the shops: **Press E** by default, or **Target**. `cr_interact` works too. |
| Framework | Optional | `es_extended`, `qb-core` or `qbx_core`. Without one it runs standalone. |
| Inventory | Optional | Only for clothes as items. See [Supported Scripts](./supported-scripts#inventories-clothes-as-items). |

---

## `[Install_me_first]`

| Path | What it is |
| :--- | :--- |
| `items/ox_inventory.lua` | The clothing item for `ox_inventory/data/items.lua` |
| `items/qb-core.lua` | The clothing item for `qb-core/shared/items.lua` |
| `images/clothing.webp` | The item picture |

---

## Install Steps

1. **Stop your old appearance script**: `esx_skin`, `skinchanger`, `qb-clothing` or `illenium-appearance`. Don't run both. Scripts made for them keep working.
2. Put `fwb_appearance` in your `resources` folder.
3. Add it to `server.cfg` after `oxmysql`, your framework and `fwb_interact`:

```cfg
ensure oxmysql
ensure es_extended      # or qb-core / qbx_core
ensure fwb_interact
ensure fwb_appearance
```

4. Give yourself the admin menu:

```cfg
add_ace identifier.license:YOUR_LICENSE fwb_appearance.admin allow
```

Type `/fwb_appearance` without it and the screen shows your own line, with a Copy button.

5. Restart, join and type `/fwb_appearance`. To bring your players' looks over, use the import on the admin menu.

::: tip esx_skin and qb-clothing names
fwb_appearance provides the names `esx_skin` and `qb-clothing`, so scripts that list them as a dependency (esx_multicharacter, qb-apartments, qb-houses …) still start.
:::
