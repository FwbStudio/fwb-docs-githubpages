---
title: Items Placeables Commands | FWB Studio Docs
description: In-game chat commands and keybinds for FiveM Items Placeables (fs_placeables).
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426487" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Items Placeables — Commands & Keybinds

---

## Commands

::: details /placeprop
Opens the placement menu. It lists every item you carry that is in `Config.Items`, plus Money and Black Money. Choosing an item shows the amounts you can afford.

### Syntax
```
/placeprop
```

The command name and key are set in `Config.Menu`. Set `Config.Menu.enable = false` to remove both.
:::

---

## Default Keybinds

| Key | Action | Description |
| :--- | :--- | :--- |
| **`F9`** | Open Menu | Opens the placement menu. Players can rebind it in GTA Settings → Key Bindings → FiveM |
| **Aim** | Move Prop | The prop follows where you look, up to about 10 m from you |
| **`Mouse Wheel`** | Rotate Prop | Rotates the prop around its vertical axis |
| **`Arrow Up / Down`** | Raise / Lower | Moves the prop up or down |
| **`E`** | Place | Places the prop. Only works while the outline is green or cyan |
| **`Backspace` / `Esc` / Right mouse** | Cancel | Stops placement. Nothing is taken from you |
| **`G` / Target** | Pick Up | Picks up a placed prop within 2.5 m and gives the item or money back |

### Outline colours

| Colour | Meaning |
| :--- | :--- |
| Green | Ground — can place |
| Cyan | On an object or vehicle that is big enough — can place |
| Red | Object too small, or stacking is disabled — can't place |
