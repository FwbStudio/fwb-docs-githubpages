---
title: Interact Configuration | FWB Studio Docs
description: Every Interact setting in the in-game /fwb_interact menu — type, distances, dot shape and colour, keys, target icon and texts for FiveM ESX, QBCore, and Qbox.
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
| Look | Dot size | 1.00 | Size of the dot and the target ring (0.5 to 2) |
| Look | Outline | On | A thin dark edge so the dot shows on bright walls and in the sky |
| Look | Dots on target spots | On | Show a dot where target spots are too |
| Look | Style | GTA VI | **GTA VI**: white text with a black outline and a white round key, no background; a list of options is linked by a line with a dot per option; the target option list (hold `ALT`) and the target box get the same look. **Default**: each option on a dark rounded bar. Cards keep their look |
| Look | Key colour | FwB teal | The key and the badge on cards (Default style) |
| Look | Prompt size | 1.00 | Size of the key, the text and cards (0.5 to 2) |
| Look | Aim help | 0.16 | Higher: a spot counts as looked at even when it is not in the middle of the screen |
| Keys | How you use spots | Server's choice | Press E or Target (hold `ALT`, aim, click). Only shows while admins turn on **Players can choose** |
| Keys | Use key | E | E, G, H, F, X, Y or Z |
| Keys | Mouse wheel picks | On | Pick from a list with the mouse wheel |
| Keys | Arrow keys pick | On | Pick from a list with arrow up / down |
| Keys | Rows shown at once | 5 | A longer list scrolls (2 to 10) |

---

## Server tabs (admins)

Needs the ACE `fwb_interact.admin` (see [Installation](./installation#_2-menu-access-ace)).

| Tab | Setting | Default | What it does |
| :--- | :--- | :--- | :--- |
| General | Players can change their own | Off | Off: the menu is admin only and everyone uses the server settings |
| General | How spots are used | Press E | Press E, or Target: `ox_target` / `qb-target` / `qtarget` when one runs, else Interact's own target (hold `ALT`, aim, click). For every spot of every script, including ox_target / qb-target scripts with Target Replacement on |
| General | Players can choose | Off | On: every player picks press E or target for themselves on their **Keys** tab, starting on **How spots are used**. Needs **Players can change their own** on |
| General | Car options with press E | Off | Toggle each door, the hood and the trunk of every car with press E (the options ox_target and qb-target come with), whatever **How spots are used** says |
| General | Car options with target | On | The same with target (hold `ALT`), even while spots use press E. Not while ox_target or qb-target runs: they bring their own. With Target Replacement on, these take their place |
| General | Dots on car options | Off | Off: the target car options show no dot and no box on the car, near or far; they show only while target (`ALT`) is held. On: a dot like other target spots. Press E car options always show theirs |
| General | Use distance | 1.5 m | How close a player has to be to use an option without its own `distance` |
| General | Dot range | 3.0 m | How much further than the use distance the dot shows (2 m use distance + 3 m = dot from 5 m), for spots without their own `range` |
| General | Range on models | 2.0 m | The same for `AddModel` and the `AddGlobal…` exports. Keep it low |
| General | Hide behind walls | On | No dot for spots behind a wall (a spot can turn this off with `los = false`) |
| Target | Default icon | `fa-solid fa-hand` | Font Awesome icon for target options without one. The button next to it opens a list of popular icons |
| Target | Sphere size | 1.0 m | The zone of a sphere spot on a target |
| Target | Card footer | Use your target to interact | Shown on a card of a target spot |
| Target | Key on the card | ALT | The key shown next to that footer |
| Default look | — | — | The Look settings players get until they pick their own |
| Default keys | — | — | The Keys settings players get until they pick their own |
| Text | List hint | Scroll to choose | Under a list of several options |
| Developer | Debug | Off | Prints what happens to every spot in F8 and draws target zones. Also prints a line in the server console each time an admin saves the settings |
| Developer | Test command | Off | Turns on `/fwbinteract_test` (see [Commands](./commands)) |

The two car option switches are apart from **How spots are used**, and both can be on: for example spots on press E and car options on target, or the other way round.

**Server defaults** in the footer fills every server setting with its starting value; press **Save** to use them.
