---
title: Interact Commands | FWB Studio Docs
description: The /fwb_interact settings menu and the /fwbinteract_test command for FiveM FWB Interact on ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact — Commands

---

## Player Commands

::: details /fwb_interact
Opens the settings menu.

### Syntax
```
/fwb_interact
```

### Who sees what
* **Every player** — the **Look** and **Keys** tabs, for their own settings.
* **Admins** (ACE `fwb_interact.admin`) — also the server tabs: General, Target, Default look, Default keys, Text and Developer.
* With **Players can change their own** turned off, players without the ACE see a page with their own `add_ace` line to copy.

```lua
add_ace group.admin fwb_interact.admin allow
```

See [Configuration](./configuration) for every setting.
:::

---

## Developer Commands

::: details /fwbinteract_test
Adds a test spot where you stand. Turn it on in **/fwb_interact → Developer → Test command** (no restart). Leave it off on a live server.

### Syntax
```
/fwbinteract_test [draw3d|target] [sphere|veh|card|many]
```

### Examples
* `/fwbinteract_test` — a sphere with four options in a pick list, including **Switch type**, which flips it between draw3d and target live.
* `/fwbinteract_test target` — the same, on your target.
* `/fwbinteract_test draw3d card` — with a hint card.
* `/fwbinteract_test draw3d many` — eight options, to see the list scroll.
* `/fwbinteract_test draw3d veh` — on your last vehicle.
:::
