---
title: Multicharacter Installation | FWB Studio Docs
description: Install FWB Multicharacter on FiveM — dependencies, replacing esx_multicharacter, qb-multicharacter or the Qbox character menu, server.cfg order and the fwb_multicharacter.admin ACE.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Multicharacter — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `oxmysql` | Yes | The database. Tables are created on first start; there is nothing to import. |
| Framework | Yes | `es_extended`, `qb-core` or `qbx_core`. |
| Appearance script | Optional | Dresses the characters in the scene and opens the creator for new ones. See [Supported Scripts](./supported-scripts). [FWB Appearance](/resources/appearance/) works best. |
| Housing script | Optional | Homes on the spawn map. See [Supported Scripts](./supported-scripts). |
| Inventory | Optional | For starter items: `ox_inventory`, `qb-inventory` or `qs-inventory`. Without one, the framework's own item functions are used. |

---

## Install Steps

1. Put `fwb_multicharacter` in your `resources` folder.
2. Stop the character menu you use now (see your framework below).
3. Add it to `server.cfg` **after** `oxmysql`, your framework, your appearance script and your housing script:

```cfg
ensure oxmysql
ensure es_extended        # or qb-core / qbx_core
ensure fwb_appearance     # your appearance script
ensure fwb_multicharacter
```

4. Give yourself the admin menu:

```cfg
add_ace identifier.license:YOUR_LICENSE fwb_multicharacter.admin allow
```

The framework's own admins can open it too.

5. Restart the server, join, and type `/fwb_multicharacter`. The setup wizard opens the first time.

---

## Your Framework

### ESX

* Remove or park `esx_multicharacter`. Don't run both.
* In `es_extended/shared/config/main.lua` set:

```lua
Config.Multichar = true
```

`fwb_multicharacter` provides the name `esx_multicharacter`, so scripts that need it keep working. If ESX is not in multicharacter mode, the server console says so at start.

### QBCore

* Remove or park `qb-multicharacter` and `qb-spawn`. Character select and the spawn map are both done by `fwb_multicharacter`, and the events qb-spawn sends (`QBCore:Client:OnPlayerLoaded` and others) are sent for you.

### Qbox

* Turn off Qbox's own character menu in `qbx_core/config/client.lua`:

```lua
characters = {
    useExternalCharacters = true,
    -- ...
}
```

---

::: tip Updating
Keep your own copy of the `bridge/` folder (hooks, housing, appearance, starter items, logs). Everything you set in the admin menu is in the database and stays.
:::
