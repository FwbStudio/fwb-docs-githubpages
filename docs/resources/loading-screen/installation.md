---
title: Loading Screen Installation | FWB Studio Docs
description: Install Loading Screen on FiveM — standalone setup and server.cfg. FiveM loading screen FWB Studio.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426475" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Loading Screen — Installation

## Dependencies

| Resource | Required | Notes |
| --- | --- | --- |
| `None` | No | Loading Screen is 100% standalone — works with any framework or standalone server |


## Install steps

1. Create a category folder named `[fs]` inside your server's `resources/` directory (`resources/[fs]/`).
2. Download and place `fs_loadingscreen` into `resources/[fs]/fs_loadingscreen`.
3. If you plan to use a local video background, convert your video to `.webm` using our built-in [Video Converter](./video-converter) tool and place it in `fs_loadingscreen/web/videos/`.
4. Configure your media, audio, staff, and patch notes in `fs_loadingscreen/config/config.lua` (see [Configuration](./configuration)).
5. Add the resource to your `server.cfg`:

```lua
ensure fs_loadingscreen
```

6. Restart your FiveM server and reconnect to view your new loading screen.
