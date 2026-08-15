---
title: Skitz Shoes Store Installation | FWB Studio Docs
description: Install Skitz Shoes Store on FiveM — items setup, dependencies, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426492" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Skitz Shoes Store — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `fs_bridge` | Yes | FWB Bridge — included in package with Tebex/Keymaster download |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |

---

## Items & Inventory Setup

Open `fs_skitz/INSTALL_ME_FIRST/` and add the materials, tools, and sneaker item definitions corresponding to **your** inventory system.

Copy the item images from `INSTALL_ME_FIRST/Images/` into your inventory resource's web/images folder.

---

## Install Steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place the resources into `resources/[fs]/`:
   - `fs_bridge`
   - `fs_skitz`
3. Download and install `ox_lib` into your `resources/` directory.
4. Complete **Items & Inventory Setup** from `INSTALL_ME_FIRST`.
5. Configure `fs_skitz/config/config.lua` before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your FiveM server and check the server console for clean startup prints.
