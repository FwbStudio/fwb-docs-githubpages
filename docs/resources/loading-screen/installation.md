---
title: Loading Screen Installation | FWB Studio Docs
description: Complete installation and media setup guide for FiveM Loading Screen (fs_loadingscreen) — image, slideshow, local webm video, and hosted stream video modes.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426475" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Loading Screen — Installation

`fs_loadingscreen` is 100% standalone and works on any FiveM framework (ESX, QBCore, Qbox, or standalone servers).

---

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `None` | No | Standalone client NUI resource — no framework, database, or Bridge required. |

---

## Quick Install Steps

1. Create a folder named `[fs]` inside your server's `resources/` directory if you haven't already (`resources/[fs]/`).
2. Download and place the `fs_loadingscreen` folder into `resources/[fs]/fs_loadingscreen`.
3. Choose your background media mode below (Image, Slideshow, Local Video, or Hosted Video) and configure `fs_loadingscreen/config/config.lua`.
4. Add the resource to your `server.cfg`:

```lua
ensure fs_loadingscreen
```

5. Restart your FiveM server and connect to view your custom loading screen.

---

## Deep Media Background Setup Guide

Select your preferred visual mode to view exact asset folder locations and `config.lua` code:

::: code-group

```lua [🖼️ Single Image + Audio]
-- ====================================================================
-- OPTION 1: SINGLE IMAGE + AUDIO PLAYLIST
-- ====================================================================
-- 1. Place your background image inside:
--    fs_loadingscreen/web/images/background.jpg
-- 2. Place your .mp3 audio tracks inside:
--    fs_loadingscreen/web/audio/animals.mp3
-- 3. Set config.BackGround in config/config.lua:

config.BackGround = {
    Type = "image",
    Image = "web/images/background.jpg",

    -- Audio playlist (Randomized on each player connection)
    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
        -- [2] = { Label = "Track Title", Artist = "Artist Name", File = "web/audio/track2.mp3" },
    },

    AddBlurToBackground = false,
    BlurValue = 5,

    -- Ambient Weather Particles: "none", "snow", "rain", "leaves"
    SeasonEffect = "snow"
}
```

```lua [🎞️ Slideshow + Audio]
-- ====================================================================
-- OPTION 2: IMAGE SLIDESHOW + AUDIO PLAYLIST
-- ====================================================================
-- 1. Place your slide images inside:
--    fs_loadingscreen/web/images/slide1.jpg
--    fs_loadingscreen/web/images/slide2.jpg
--    fs_loadingscreen/web/images/slide3.jpg
-- 2. Place your .mp3 audio tracks inside:
--    fs_loadingscreen/web/audio/animals.mp3
-- 3. Set config.BackGround in config/config.lua:

config.BackGround = {
    Type = "slideshow",
    SlideShow = {
        Images = {
            [1] = "web/images/slide1.jpg",
            [2] = "web/images/slide2.jpg",
            [3] = "web/images/slide3.jpg"
        },
        Interval = 5 -- Time in seconds between slide transitions
    },

    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
    },

    AddBlurToBackground = false,
    SeasonEffect = "leaves"
}
```

```lua [📹 Local Video (.webm) + Audio]
-- ====================================================================
-- OPTION 3A: LOCAL VIDEO FILE (.webm) + AUDIO PLAYLIST
-- ====================================================================
-- IMPORTANT: FiveM NUI only supports .webm format for local video assets.
-- If your video is .mp4, convert it online for free using:
-- 👉 https://clideo.com/editor/?convertTo=WEBM
--
-- 1. Place your converted .webm video file inside:
--    fs_loadingscreen/web/videos/background.webm
-- 2. Place your .mp3 audio tracks inside:
--    fs_loadingscreen/web/audio/animals.mp3
-- 3. Set config.BackGround in config/config.lua:

config.BackGround = {
    Type = "video",
    Video = {
        LocalVideo = true, -- Enable local video file playback
        File = "web/videos/background.webm",
    },

    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
    },

    AddBlurToBackground = false,
    SeasonEffect = "rain"
}
```

```lua [🌐 Hosted Video Link + Audio]
-- ====================================================================
-- OPTION 3B: HOSTED VIDEO LINK (FiveManage / Streamable) + AUDIO
-- ====================================================================
-- 1. Upload your video to FiveManage (https://fivemanage.com) or Streamable (https://streamable.com).
-- 2. Copy the direct video stream URL.
-- 3. Place your .mp3 audio tracks inside:
--    fs_loadingscreen/web/audio/animals.mp3
-- 4. Set config.BackGround in config/config.lua:

config.BackGround = {
    Type = "video",
    Video = {
        LocalVideo = false, -- Disable local file; use hosted URL
        Type = "fivemanage", -- Supported providers: "fivemanage", "streamable"
        Links = {
            [1] = "https://r2.fivemanage.com/PfePNofFFZxoCDe2hMQ57/Timeline_2.mp4",
        },
    },

    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
    },

    AddBlurToBackground = false,
    SeasonEffect = "none"
}
```

:::

---

## Next Steps

- Explore theme styling, staff team cards, server rules, and patch notes in the [Configuration](./configuration) guide.
- Check [Common Errors](./common-errors) if you encounter any video playback or audio issues.
