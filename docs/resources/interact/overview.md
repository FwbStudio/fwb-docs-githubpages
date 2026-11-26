---
title: Interact Overview | FWB Studio Docs
description: Interact features for FiveM. Press E dots and prompts, ox_target / qb-target / qtarget support, hint cards, pick lists and in-game settings for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact (Free)

### 👆 Interact – One Interaction Engine for Every Script

Scripts add spots (places, props, vehicles, peds, players) with a few lines, and every spot works the same way for the player. FWB scripts that use it need `fwb_interact` running.

There is **no config file**. Everything is set in game with `/fwb_interact`, saves on the server and applies to every player straight away.

---

#### ⚙️ Key Features

* **Two types, same data** — `draw3d` (our dot and `[E]` prompt) or `target` (`ox_target`, then `qb-target`, then `qtarget`). A spot moves between them live, without being added again.
* **A dot on everything nearby** — 7 shapes (circle, square, diamond, hexagon, ring, solid, plus), 5 animations, any colour. The key badge takes the same shape.
* **Look-at prompt** — the spot nearest the middle of the screen shows `[E] Action`. Inside a box or poly zone you don't need to aim.
* **GTA VI style** — by default the prompt is white text with a black outline and a white round key, no background. The target option list (hold `ALT`) and the target box use the same look. The Default style puts each option on a dark rounded bar instead.
* **Car options** — toggle each door, the hood and the trunk of every car, like ox_target and qb-target. Two switches, apart from how other spots are used: with target (on) and with press E (off). The target ones show no dot on the car until `ALT` is held (**Dots on car options**, off by default).
* **Several options** — each with its own key (E, G, Z…), or all in one pick list on E, chosen with the mouse wheel or arrow keys. The weapon wheel is blocked while the list shows.
* **Hint cards** — a title, text, up to 3 detail lines and an icon or image, shown when the player is close.
* **Everything can be interactive** — spheres, rotated boxes, poly zones, single entities (by handle or netId), vehicle bones, every entity of a model, every vehicle / ped / player / object.
* **Hidden behind walls** — spots behind a wall show no dot unless a spot turns it off.
* **Per-player settings** — players choose their own dot shape, colours, prompt style, dot and prompt size and keys (kept on their PC). Admins can turn this off.
* **Press E or target** — admins pick it for every spot in `/fwb_interact`, and can let each player pick their own. Spots switch live. Target uses `ox_target` / `qb-target` / `qtarget` when one runs, else Interact's own target: hold `ALT`, aim, click.
* **Clean up on its own** — when a script stops, all of its spots, cards and its type go with it.
* **Target Replacement** — delete `ox_target`, `qb-target` or `qtarget`, turn on one `provide` line, and scripts made for them run on Interact without changes. See [Replace Ox/Qb Target](./replace-target).
* **Low resmon** — nothing runs until the first spot exists; places sit in a 64 m grid so 10 or 10,000 spots cost the same; the per-frame loop only runs while a dot is in range.

---

## Package

| Package | Resource Folder | Version | Frameworks | Category |
| :--- | :--- | :--- | :--- | :--- |
| **Dependency** | `fwb_interact` | v1.5 | Standalone (works with ESX, QBCore, Qbox) | FiveM Dependency |

---

## Documentation

- [Installation](./installation) — server.cfg and menu access
- [Replace Ox/Qb Target](./replace-target) — use Interact instead of ox_target / qb-target / qtarget, step by step
- [Configuration](./configuration) — every setting in `/fwb_interact`
- [Commands](./commands) — the menu and the test command
- [Client Exports](./exports/client) — add, update and remove spots from your scripts
- [Server Exports](./exports/server) — handling an option's `serverEvent` on the server
- [Integrations](./integrations) — next to your target, or Target Replacement
- [Common Errors](./common-errors) — troubleshooting
