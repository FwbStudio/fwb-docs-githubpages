---
title: Notify Configuration | FWB Studio Docs
description: Complete configuration and in-game customization guide for FiveM Notify script (fs_notify).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7464228" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Notify — Configuration

`fs_notify` provides a minimal, clean `config/config.lua` file for server behavior, while all visual styling, sounds, positions, opacities, and animations are managed in real time through the **In-Game Customization Menu (`/fs_notify`)**.

---

## Complete `config/config.lua` Reference

```lua
--[[
================================
      Configuration File
================================
]]

config = {
    command = 'fs_notify',  -- Command used to open the in-game notify panel

    AllowPlayerEdit = true, -- true = each player customizes their own notify style (saved to KVP)
                            -- false = only admins with ACE permission can modify global server styles

    Permissions = {
        ace = 'fs_notify.admin' -- ACE permission required when AllowPlayerEdit = false
    }
}
```

---

## Configuration Parameter Details

* **`config.command`**: The in-game chat command players or admins use to open the notify styling menu (default: `'fs_notify'`).
* **`config.AllowPlayerEdit`**:
  * When `true`: All players can run `/fs_notify` to customize their personal notification preferences (position, sound, colors, font scale). Overrides are saved locally to client KVP storage.
  * When `false`: Only server staff with the configured ACE permission can open the panel. Any edits made in the panel are saved directly to `current_config.json` on the server and broadcasted live to all players via `GlobalState`.
* **`config.Permissions.ace`**: The ACE permission checked by the server when `AllowPlayerEdit = false` (default: `'fs_notify.admin'`).

---

## In-Game Customization Panel (`/fs_notify`)

Opening the in-game menu gives you instant access to configure all 4 notification types (**Success**, **Info**, **Warning**, **Error**):

### 🔊 1. Sound Settings
* **Built-in Sounds**: `none`, `esx`, `okok`, `okok_textui`, `soft_chime`, `synth_ping`, `success_bell`, `info_pulse`, `warning_ping`, `error_buzz`, `mellow_bloom`.
* **Custom Sound URL**: Select `custom` and paste any direct `.mp3` or `.ogg` web URL.
* **Sound Modes**:
  * `first_only` — Plays audio only for the first notification in a rapid burst (recommended to prevent sound spam).
  * `every_notify` — Plays audio every single time a notification is displayed.

### 📍 2. Screen Placement
* **8 Available Screen Anchors**:
  * `top-left`, `top`, `top-right`
  * `center-left`, `center-right`
  * `bottom-left`, `bottom`, `bottom-right`

### 🎨 3. Visual Styling & Palettes
* **Icons (12 options)**: Circle Check, Circle Info, Triangle Exclamation, Circle Xmark, Bell, Shield Check, Shield Alert, Circle Help, Circle Alert, Check, Xmark, Circle Exclamation.
* **Background Color**: Midnight (`#0A0E16`), Slate (`#111827`), Navy (`#172033`), Plum (`#18101F`), Cocoa (`#20120F`), Deep Green (`#0F1D18`), Deep Rose (`#240D14`), or custom hex.
* **Accent & Gradient Colors**: Cyan (`#00FFC8`), Indigo (`#7C8CFF`), Gold (`#FFC96D`), Rose (`#FF4D77`), Sky (`#4DD8FF`), Violet (`#A78BFA`), Emerald (`#4ADE80`), White (`#FFFFFF`), or custom hex.
* **Text Color**: White (`#F8FAFF`), Soft Gold (`#FFF5CC`), Ice (`#DFF7FF`), Rose (`#FFE4EC`), Mint (`#E7FCEB`), or custom hex.
* **Opacity**: `50%`, `60%`, `70%`, `80%`, `88%`, `95%`.
* **Padding & Sizing**: Padding from `10px` to `18px`; Size scale from `Small (0.94)` to `Large (1.16)`.

### ✍️ 4. Typography & Font Scaling
* **Font Families**: Theme Default, Segoe UI, Trebuchet MS, Verdana, Tahoma, Typographic Onedalism.
* **Font Scaling**: `Tiny (0.88)`, `Smaller (0.94)`, `Default (1.0)`, `Comfortable (1.06)`, `Large (1.12)`, `Extra Large (1.18)`, `Huge (1.24)`, `Oversized (1.30)`.

---

## 🏷️ Rich Text Badges & Keycaps (`[...]`)

`fs_notify` automatically detects and styles square brackets `[...]` inside any notification message into an interactive, 3D glass keycap badge.

### How to Use
Simply wrap the key, currency, item name, or highlight word inside brackets:

```lua
-- Keybind Prompt
exports.fs_notify:show('Press [E] to access the trunk.', 'info', 5000, 'Vehicle')

-- Payment / Reward
exports.fs_notify:show('You received [$500] and [5x Lockpick].', 'success', 5000, 'Inventory')

-- Location / Job Tag
exports.fs_notify:show('Dispatch call from [Legion Square]. Units respond [10-99].', 'warning', 8000, 'Police Dispatch')
```

### Visual Effect
- Renders as a glass badge with a subtle border, gradient background, drop shadow, and clean monospace typography (`JetBrains Mono`).
- Automatically scales fluidly with the user's selected font scale and screen size.
