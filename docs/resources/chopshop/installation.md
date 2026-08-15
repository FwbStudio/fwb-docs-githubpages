---
title: Chop Shop Installation | FWB Studio Docs
description: Install Chop Shop on FiveM — dependencies, items setup, and server.cfg.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426482" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Chop Shop — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `ox_lib` | Yes | Free open-source UI/callbacks library — available on [GitHub](https://github.com/overextended/ox_lib) |
| `oxmysql` | Yes | MySQL database resource |
| `ESX, QBCore, or Qbox` | Yes | Free open-source framework — requires one of them on your server |


## Items & inventory setup

Open `fs_chopshop/[INSTALL_ME_FIRST]` and use the block for **your** inventory system to register stripped vehicle items (`fs_door`, `fs_bonnet`, `fs_boot`).


## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_chopshop` into your `resources/[fs]/` directory.
3. Ensure required dependencies (`ox_lib`, `oxmysql`, and your framework) are installed and started before `[fs]`.
4. Complete **Items & inventory setup** by opening `fs_chopshop/[INSTALL_ME_FIRST]` and adding the items to your inventory system.
5. Configure `fs_chopshop/config/` settings before starting.
6. Add the resources to your `server.cfg` at the end of your ensured resources:

```lua
ensure ox_lib

-- make sure to ensure all resources above this to make it work properly
ensure [fs] -- ensure it as last resource
```

7. Restart your server after completing configuration and installation, and check the server console for clean startup prints.
