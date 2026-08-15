---
title: Switch Installation | FWB Studio Docs
description: Install Switch on FiveM — inventory items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426485" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Switch — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |
| `fs_bridge` | **No** | `fs_switch` includes its own internal multi-framework bridge |

---

## Items & Inventory Setup

Open `fs_switch/install_me_first/item/` and use the file corresponding to **your** inventory system (`ox_inventory.lua`, `qs_inventory.lua`, `qb_inventory.lua`, `ak47_inventory.lua`).

Copy the switch item images from `fs_switch/install_me_first/images/` into your inventory resource's web/images folder.

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_switch` into `resources/[fs]/fs_switch`.
3. Download and install `ox_lib` into your `resources/` directory.
4. Complete **Items & Inventory Setup** from `install_me_first`.
5. Configure `fs_switch/config/config.lua` before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your FiveM server and check the server console for clean startup prints.
