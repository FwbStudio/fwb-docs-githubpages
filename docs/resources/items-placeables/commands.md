---
title: Items Placeables Commands | FWB Studio Docs
description: In-game chat commands and keybinds for FiveM Items Placeables (fs_placeables).
---

# Items Placeables — Commands & Keybinds

`fs_placeables` provides commands and default keybinds for opening the item placement menu and controlling prop positioning in real time.

---

## Commands

::: details /placeprop
Opens the placeable items selection menu, displaying all items currently in your inventory that have registered 3D props.

### Syntax
```
/placeprop
```

*(Command name is customizable in `config/config.lua` under `Config.Menu.command`)*
:::

---

## Default Keybinds

| Key | Action | Description |
| :--- | :--- | :--- |
| **`F9`** | Open Menu | Opens the inventory placement menu |
| **`Arrow Up / Down`** | Move Prop | Moves the preview prop closer or further away |
| **`Mouse Scroll / Left / Right`** | Rotate Prop | Rotates the prop smoothly around its vertical axis |
| **`E`** | Confirm Placement | Places the object firmly onto the ground/surface |
| **`Backspace / H`** | Cancel | Aborts placement without consuming the item |
| **`G` / Target** | Pick Up | Picks up the placed prop and returns the item to your inventory |
