---
title: Loading Screen v1 Configuration | FWB Studio Docs
description: Configure Loading Screen v1 — config files and key options.
---


# Loading Screen v1 — Configuration

Edit `fs_loadingscreen/config/config.lua` in your download.

<div class="fwb-config-block">

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

        -- bottom only will work if LocalVideo = false
        -- type of video link supported are: "fivemanage": , "streamable"
        Type = "fivemanage",
        Links = {
            [1] = "https://r2.fivemanage.com/PfePNofFFZxoCDe2hMQ57/Timeline_2.mp4",

        },
    },

    -- if you add more then one then it wil be random each time
    Audio = {
        [1] = { Label = "Animals", Artist = "Martin Garrix", File = "web/audio/animals.mp3" },
        -- [2] = { Label = "Cyber City", Artist = "Turbo Knight", File = "web/audio/cyber_city.mp3" },
        -- [3] = { Label = "Neon Drive", Artist = "Turbo Knight", File = "web/audio/neon_drive.mp3" },

    },

    -- if AddBlurToBackground = true then background will be blurred
    -- if AddBlurToBackground = false then background will be cleaned
    AddBlurToBackground = false,
    -- blur intensity
    BlurValue = 5,

    SeasonEffect = "snow" -- "none", "snow", "rain" , "leaves"
}

config.hide = {
    showStaff = true,
    showRules = false,
    showUpdates = true,
    showKeyboard = true,
    showSocials = true,
}

config.Translation = {
    ServerName = 'FwB',
    Type = 'RolePlay',
    Team = 'Team',
    Rules = 'Rules',
    Keyboard = 'Keyboard',
    Loading = 'The city is now loading...',
    logo = 'web/images/logo.png'
}

config.Updates = {
    [1] = {
        title = "Patch Note #1",
        date = " 2025",
        name = "Vehicle Ex19 Dec,pansion",
        description =
        "Our vehicle lineup has been expanded with a variety of new additions. Players can now enjoy high-performance sports cars, reliable SUVs, and everyday vehicles, offering a richer and more immersive driving experience."
    },
    [2] = {
        title = "Patch Note #2",
        date = "19 Dec, 2025",
        name = "Performance Optimization",
        description =
        "Major performance optimizations have been implemented to improve overall gameplay. These updates deliver faster loading times, smoother performance, reduced lag, and more efficient resource usage."
    },
    [3] = {
        title = "Patch Note #3",
        date = "19 Dec, 2025",
        name = "Stability & Bug Fixes",
        description =
        "Multiple bugs and stability issues reported by the community have been resolved. This update improves server reliability, reduces crashes, and fixes various gameplay-related issues."
    },
    [4] = {
        title = "Patch Note #4",
        date = "19 Dec, 2025",
        name = "New Mission Content",
        description =
        "New missions have been introduced, offering fresh challenges and expanded gameplay. Players now have more opportunities to explore the city and engage in dynamic activities."
    }
}


config.Rules = {
    [1] = {
        title = "Respect the Staff",
        description =
        "All players must show respect to server staff at all times. Staff members are responsible for maintaining fairness, order, and an enjoyable experience for everyone."
    },
    [2] = {
        title = "Zero Tolerance for Harassment",
        description =
        "Any form of harassment, including bullying, discrimination, hate speech, or personal attacks, is strictly prohibited and may result in immediate disciplinary action or a permanent ban."
    },
    [3] = {
        title = "Request Assistance Properly",
        description =
        "If you require help or have questions, contact the staff through the appropriate channels. Our team is always available to assist you."
    },
    [4] = {
        title = "Comply with Staff Instructions",
        description =
        "Players are required to follow all instructions issued by staff members. These rules exist to ensure fair gameplay and smooth server operations."
    },
    [5] = {
        title = "Report Rule Violations",
        description =
        "If you encounter bugs, issues, or witness rule-breaking behavior, report it to the staff immediately. Your cooperation helps maintain a healthy and enjoyable community."
    },
    [6] = {
        title = "Stay Updated on Rules",
        description =
        "Players are responsible for staying informed about server rules, updates, and announcements. Claiming ignorance of the rules will not be accepted as an excuse."
    }
}


config.Staff = {
    [1] = { Name = "Alice Johnson", Role = "Project Manager", image = "web/images/user.png" },
    [2] = { Name = "Bob Smith", Role = "Lead Developer", image = "web/images/modBg.png" },
    [3] = { Name = "Catherine Lee", Role = "Community Manager", image = "web/images/hodBg.png" },
    [4] = { Name = "David Brown", Role = "Senior Moderator", image = "web/images/user.png" },
    [5] = { Name = "David Red", Role = "Senior Moderator", image = "web/images/modBg.png" },
    [6] = { Name = "David Pink", Role = "Senior Moderator", image = "web/images/hodBg.png" },
    [7] = { Name = "David Blue", Role = "Senior Moderator", image = "web/images/user.png" },
    [8] = { Name = "Eva", Role = "Senior Moderator", image = "web/images/modBg.png" },
    -- can add more here
    -- can add more here
}

config.Social = {
    [1] = { Label = "Website", URL = "https://example.com", Icon = "web/icons/website.png" },
    [2] = { Label = "Discord", URL = "https://discord.gg/example", Icon = "web/icons/discord.png" },
    [3] = { Label = "Twitter", URL = "https://twitter.com/example", Icon = "web/icons/twitter.png" },
    -- only 3 supported if you add more then it will ignore them
}

config.KeyboardKeys = {
    F1 = "Open Help Menu",
    F2 = "Open Settings",
    F3 = "Toggle HUD",
    E = "Interact",
    H = "Horn",
    J = "Toggle Siren",
    K = "Toggle Door Lock",
    M = "Open Map",
    N = "Toggle Voice Chat",
    Q = "Quick Inventory",
    R = "Reload Weapon",
    V = "Change View",
    Y = "Open Phone",
    I = "Open Inventory",
    O = "Open Objectives",
    Home = "Open Admin Menu",
}
```

</div>
