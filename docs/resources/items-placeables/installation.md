---
title: Items Placeables Installation | FWB Studio Docs
description: Install Items Placeables on FiveM — dependencies and server.cfg setup for ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | **v3.7 or newer.** Included with your Tebex / Keymaster download |
| `ox_lib` | Yes | Free UI / callbacks library — [GitHub](https://github.com/overextended/ox_lib) |
| `ESX`, `QBCore` or `Qbox` | Yes | One framework on your server |
| `ox_target` or `qb-target` | Optional | Only when `Config.target = true`. With `false`, floating 3D text is used |

---

## Items & Inventory Setup

`INSTALL_ME_FIRST/install.lua` only links to these docs. There are no item files to import.

- **Money** (`money`, `cash`, `black_money`, `markedbills`) uses your framework accounts. See [Place Money Using ox_inventory](./place-money-ox-inventory) for which entries to keep.
- **Any other item** in `Config.Items` must already exist in your inventory's item list, with an image. On start the server prints `Item <name> is not found in your server item list` for every missing one.

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Place the resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_placeables`
3. Keep the folder name `fs_placeables`. A renamed folder prints `Change Script name back to fs_placeables` every second.
4. Install `ox_lib` in your `resources/` directory.
5. Set up `Config.Items` in `fs_placeables/config/config.lua` (see [Configuration](./configuration)).
6. Add the resources to your `server.cfg` after your framework and inventory:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your server. The console should show `fs_bridge Found successfully` and no missing item warnings.
