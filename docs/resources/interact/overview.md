---
title: Interact Overview | FWB Studio Docs
description: FWB Interact features for FiveM. Press E dots and prompts, ox_target / qb-target / qtarget support, hint cards, pick lists and in-game settings for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact (Free)

### 👆 Interact – One Interaction Engine for Every Script

Scripts add spots (places, props, vehicles, peds, players) with a few lines, and every spot works the same way for the player. FWB scripts that use it list `fwb_interact` as a dependency.

There is **no config file**. Everything is set in game with `/fwb_interact`, saves on the server and applies to every player straight away.

---

#### ⚙️ Key Features

* **Two types, same data** — `draw3d` (our dot and `[E]` prompt) or `target` (`ox_target`, then `qb-target`, then `qtarget`). A spot moves between them live, without being added again.
* **A dot on everything nearby** — 7 shapes (circle, square, diamond, hexagon, ring, solid, plus), 5 animations, any colour. The key badge takes the same shape.
* **Look-at prompt** — the spot nearest the middle of the screen shows `[E] Action`. Inside a box or poly zone you don't need to aim.
* **Several options** — each with its own key (E, G, Z…), or all in one pick list on E, chosen with the mouse wheel or arrow keys. The weapon wheel is blocked while the list shows.
* **Hint cards** — a title, text, up to 3 detail lines and an icon or image, shown when the player is close.
* **Everything can be interactive** — spheres, rotated boxes, poly zones, single entities (by handle or netId), vehicle bones, every entity of a model, every vehicle / ped / player / object.
* **Hidden behind walls** — spots behind a wall show no dot unless a spot turns it off.
* **Per-player settings** — players choose their own dot shape, colours, size and keys (kept on their PC). Admins can turn this off.
* **Each script decides** — a script picks press E or target for its spots (`type` per spot or `SetType`), and can switch them live, for example from its own in-game toggle.
* **Clean up on its own** — when a script stops, all of its spots, cards and its type go with it.
* **Low resmon** — nothing runs until the first spot exists; places sit in a 64 m grid so 10 or 10,000 spots cost the same; the per-frame loop only runs while a dot is in range.

---

## Package

| Package | Resource Folder | Version | Frameworks | Category |
| :--- | :--- | :--- | :--- | :--- |
| **Dependency** | `fwb_interact` | v1.0 | Standalone (works with ESX, QBCore, Qbox) | FiveM Dependency |

---

## Documentation

- [Installation](./installation) — server.cfg and menu access
- [Configuration](./configuration) — every setting in `/fwb_interact`
- [Commands](./commands) — the menu and the test command
- [Client Exports](./exports/client) — add, update and remove spots from your scripts
- [Server Exports](./exports/server) — handling an option's `serverEvent` on the server
- [Common Errors](./common-errors) — troubleshooting
