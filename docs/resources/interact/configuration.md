---
title: Interact Configuration | FWB Studio Docs
description: Every FWB Interact setting in the in-game /fwb_interact menu — type, distances, dot shape and colour, keys, target icon and texts for FiveM ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact — Configuration

There is no config file. Open `/fwb_interact` in game. Saving applies to every player straight away, without a restart, and updates keep your settings.

The menu has a live preview at the top of the **Look**, **Keys**, **Target** and default look / keys tabs.

---

## Player tabs

Every player gets these (unless admins turn them off). They only change what that player sees, and are kept on their own PC. A grey **Server** tag means the player still uses the server's value; **Reset** goes back to it.

| Tab | Setting | Default | What it does |
| :--- | :--- | :--- | :--- |
| Look | Shape | Circle | The dot's shape. The key badge takes the same shape |
| Look | Animation | None | None, pulse, spin, breathe, bounce |
| Look | Colour | White | The dot: white, the key colour, or a colour of your own |
| Look | Outline | On | A thin dark edge so the dot shows on bright walls and in the sky |
| Look | Dots on target spots | On | Show a dot where target spots are too |
| Look | Key colour | FwB teal | The key and the badge on cards |
| Look | Size on screen | 1.00 | Size of the dot and the prompt (0.5 to 2) |
| Look | Aim help | 0.16 | Higher: a spot counts as looked at even when it is not in the middle of the screen |
| Keys | Use key | E | E, G, H, F, X, Y or Z |
| Keys | Mouse wheel picks | On | Pick from a list with the mouse wheel |
| Keys | Arrow keys pick | On | Pick from a list with arrow up / down |
| Keys | Rows shown at once | 5 | A longer list scrolls (2 to 10) |

---

## Server tabs (admins)

Needs the ACE `fwb_interact.admin` (see [Installation](./installation#_2-menu-access-ace)).

| Tab | Setting | Default | What it does |
| :--- | :--- | :--- | :--- |
| General | Players can change their own | On | Off: the menu is admin only and everyone uses the server settings |
| General | Use distance | 1.5 m | How close a player has to be to use an option without its own `distance` |
| General | Dot range | 3.0 m | How far away the dot shows, for spots without their own `range` |
| General | Range on models | 2.0 m | The same for `AddModel` and the `AddGlobal…` exports. Keep it low |
| General | Hide behind walls | On | No dot for spots behind a wall (a spot can turn this off with `los = false`) |
| Target | Default icon | `fa-solid fa-hand` | Font Awesome icon for target options without one. The button next to it opens a list of popular icons |
| Target | Sphere size | 1.0 m | The zone of a sphere spot on a target |
| Target | Card footer | Use your target to interact | Shown on a card of a target spot |
| Target | Key on the card | ALT | The key shown next to that footer |
| Default look | — | — | The Look settings players get until they pick their own |
| Default keys | — | — | The Keys settings players get until they pick their own |
| Text | List hint | Scroll to choose | Under a list of several options |
| Developer | Debug | Off | Prints what happens to every spot in F8 and draws target zones |
| Developer | Test command | Off | Turns on `/fwbinteract_test` (see [Commands](./commands)) |

**Server defaults** in the footer fills every server setting with its starting value; press **Save** to use them.
