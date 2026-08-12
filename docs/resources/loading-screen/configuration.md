---
title: Loading Screen v1 Configuration | FWB Studio Docs
description: Configure Loading Screen v1 — config files and key options.
---


# Loading Screen v1 — Configuration

Edit the config files inside `fs_loadingscreen/config/`. Exact keys depend on your package version.

## Config excerpt

```lua
config = {}

config.Theme = {
    PrimaryColor = "#1abc9c",
    SecondaryColor = "#16a085",
    TextColor = "#ecf0f1",
    BackgroundColor = "#2c3e50",
    AccentColor = "#e74c3c",
    FontSize = "16px",
    FontFamily = "Arial, sans-serif"
}

config.BackGround = {
    Type = "video", -- "image", "video", "slideshow"

    -- Image only work if Type = "image"
    Image = "web/images/background.jpg",

    -- Slide show only work if Type = "slideshow"
    SlideShow = {
        Images = {
            [1] = "web/images/slide1.jpg",
            [2] = "web/images/slide2.jpg",
            [3] = "web/images/slide3.jpg"
        },
        Interval = 5 -- seconds
    },

    -- video only work if Type = "video"
    Video = {
        -- if LocalVideo = false then script will use bottom link
        -- if LocalVideo  = true then script will use file pathfinding
        LocalVideo = false,
        File = "web/videos/background.webm", --{only .webm format is supported due to fivem limitations}
```

