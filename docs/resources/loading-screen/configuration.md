---
title: Loading Screen Configuration | FWB Studio Docs
description: Detailed configuration guide for FiveM Loading Screen script (fs_loadingscreen) — background media modes, audio tracks, and UI options.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426475" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Loading Screen — Configuration

Edit `fs_loadingscreen/config/config.lua` in your download to configure theme colors, background media (image, slideshow, local video, or hosted video), audio playlists, seasonal particle effects, staff cards, server rules, patch notes, and keybind displays.

---

## Complete `config/config.lua` Reference

```lua
config = {}

-- UI Theme Styling
config.Theme = {
    PrimaryColor = "#1abc9c",
    SecondaryColor = "#16a085",
    TextColor = "#ecf0f1",
    BackgroundColor = "#2c3e50",
    AccentColor = "#e74c3c",
    FontSize = "16px",
    FontFamily = "Arial, sans-serif"
}

-- Background Media & Audio Playlist Settings
config.BackGround = {
    Type = "video", -- Options: "image", "video", "slideshow"

    -- Image background (Active when Type = "image")
    Image = "web/images/background.jpg",

    -- Slideshow background (Active when Type = "slideshow")
    SlideShow = {
        Images = {
            [1] = "web/images/slide1.jpg",
            [2] = "web/images/slide2.jpg",
            [3] = "web/images/slide3.jpg"
        },
        Interval = 5 -- seconds per slide
    },

    -- Video background (Active when Type = "video")
    Video = {
        LocalVideo = false, -- true = use local webm file | false = use hosted video link
        File = "web/videos/background.webm", -- Local file (.webm format only due to FiveM browser limits)

        Type = "fivemanage", -- Supported hosted providers: "fivemanage", "streamable"
        Links = {
            [1] = "https://r2.fivemanage.com/PfePNofFFZxoCDe2hMQ57/Timeline_2.mp4",
        },
    },

    -- Audio Playlist (Randomized track selection on player connect)
    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
        -- [2] = { Label = "Cyber City", Artist = "Turbo Knight", File = "web/audio/cyber_city.mp3" },
    },

    -- Background Blur Overlay
    AddBlurToBackground = false,
    BlurValue = 5,

    -- Seasonal Weather Effects ("none", "snow", "rain", "leaves")
    SeasonEffect = "snow"
}

-- UI Visibility Toggles
config.hide = {
    showStaff = true,
    showRules = false,
    showUpdates = true,
    showKeyboard = true,
    showSocials = true,
}

-- Text & Branding Translations
config.Translation = {
    ServerName = 'FwB',
    Type = 'RolePlay',
    Team = 'Team',
    Rules = 'Rules',
    Keyboard = 'Keyboard',
    Loading = 'The city is now loading...',
    logo = 'web/images/logo.png'
}

-- Server Patch Notes & Updates
config.Updates = {
    [1] = { title = "Patch Note #1", date = "19 Dec, 2025", name = "Vehicle Expansion", description = "New vehicle lineup added to the city." },
    [2] = { title = "Patch Note #2", date = "19 Dec, 2025", name = "Performance Optimization", description = "Optimized loading times and overall FPS." },
    [3] = { title = "Patch Note #3", date = "19 Dec, 2025", name = "Stability & Bug Fixes", description = "Fixed reported community bugs." },
}

-- Server Rules
config.Rules = {
    [1] = { title = "Respect the Staff", description = "Follow staff member directions at all times." },
    [2] = { title = "Zero Tolerance for Harassment", description = "Strictly no toxicity or personal attacks." },
}

-- Staff Team Cards
config.Staff = {
    [1] = { Name = "Alice Johnson", Role = "Project Manager", image = "web/images/user.png" },
    [2] = { Name = "Bob Smith", Role = "Lead Developer", image = "web/images/modBg.png" },
}

-- Social Media Links (Maximum 3 supported)
config.Social = {
    [1] = { Label = "Website", URL = "https://example.com", Icon = "web/icons/website.png" },
    [2] = { Label = "Discord", URL = "https://discord.gg/example", Icon = "web/icons/discord.png" },
    [3] = { Label = "Twitter", URL = "https://twitter.com/example", Icon = "web/icons/twitter.png" },
}

-- Keyboard Keybind Display Guide
config.KeyboardKeys = {
    F1 = "Open Help Menu",
    F2 = "Open Settings",
    E = "Interact",
    M = "Open Map",
}
```

---

## Media Background Setup Guide

Choose how your loading screen presents visuals and audio by configuring `config.BackGround`:

::: code-group

```lua [Single Image + Audio]
-- Set Type to "image" and specify the local image path inside web/images/
config.BackGround = {
    Type = "image",
    Image = "web/images/background.jpg",

    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
    },
    AddBlurToBackground = false,
    BlurValue = 5,
    SeasonEffect = "none"
}
```

```lua [Audio Slideshow]
-- Set Type to "slideshow" and list image file paths with slide Interval (in seconds)
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
    SeasonEffect = "snow"
}
```

```lua [Local Video + Audio]
-- Set Type to "video", LocalVideo = true, and point to a .webm video inside web/videos/
-- Note: FiveM NUI only supports local .webm format video files.
config.BackGround = {
    Type = "video",
    Video = {
        LocalVideo = true,
        File = "web/videos/background.webm",
    },

    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
    },
    AddBlurToBackground = false,
    SeasonEffect = "rain"
}
```

::: tip Convert MP4 to WEBM
FiveM NUI **only supports local `.webm` format video files** due to FiveM browser engine limitations. If your video is in `.mp4` format, you can convert it right here in your browser using our built-in tool:
👉 **[Built-in Video Converter](./video-converter)**
:::

```lua [Hosted Video Link + Audio]
-- Set Type to "video", LocalVideo = false, Provider Type ("fivemanage" or "streamable"), and add direct video URLs
config.BackGround = {
    Type = "video",
    Video = {
        LocalVideo = false,
        Type = "fivemanage", -- Provider: "fivemanage" or "streamable"
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

## Configuration Parameter Details

* **`config.Theme`**: Hex color tokens (`PrimaryColor`, `SecondaryColor`, `TextColor`, `BackgroundColor`, `AccentColor`) and font family choices for the NUI interface.
* **`config.BackGround.SeasonEffect`**: Select ambient weather effects: `"none"`, `"snow"`, `"rain"`, or `"leaves"`.
* **`config.BackGround.Audio`**: Add track objects with `Label`, `Artist`, and local `.mp3` path in `web/audio/`. The loading screen automatically picks a random track upon player connection.
* **`config.hide`**: Toggle visibility of UI elements (`showStaff`, `showRules`, `showUpdates`, `showKeyboard`, `showSocials`).
* **`config.Social`**: Configure up to 3 social media button cards with custom icons and web links.
