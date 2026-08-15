---
title: Loading Screen Video Converter | FWB Studio Docs
description: Free browser-based MP4 to WEBM video converter for FiveM loading screen backgrounds. Converts 100% locally in your browser.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426475" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Loading Screen — Video Converter

<p class="fwb-converter-subtitle">
  FiveM NUI only supports <code>.webm</code> video format for local backgrounds. Convert your video below.<br>
  <strong>100% private</strong> — your video never leaves your browser. No files are uploaded to any server.
</p>

<WebmConverter />

<div class="fwb-converter-note">

> [!NOTE]
> **First conversion takes ~10–20 seconds** to load the FFmpeg WebAssembly engine (~30 MB). Subsequent conversions on the same page load are instant.

</div>

---

## How to use the converted file

Once downloaded, place your `.webm` file inside your Loading Screen resource folder:

```
fs_loadingscreen/
└── web/
    └── videos/
        └── background.webm   ← place it here
```

Then in `fs_loadingscreen/config/config.lua`, set:

```lua
config.BackGround = {
    Type = "video",
    Video = {
        LocalVideo = true,
        File = "web/videos/background.webm",
    },
    -- ...
}
```

Next, follow the [Installation](./installation) guide to ensure the resource in your `server.cfg`.
