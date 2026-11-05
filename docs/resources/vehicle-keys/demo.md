---
title: FWB Vehicle Keys Minigame Demo | FWB Studio Docs
description: Try the FWB Vehicle Keys minigames in your browser — lockpick, hotwire, wire cutting and wiring puzzles on easy, medium and hard, exactly as FiveM players see them.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB Vehicle Keys — Minigame Demo

Play the four built-in puzzles right here. These are the same puzzles players get in game, with the default numbers of each difficulty. Pick a puzzle, pick a difficulty, and play.

<iframe class="fwb-demo-frame" src="/demos/vehicle-keys/index.html" title="FWB Vehicle Keys minigames" loading="lazy"></iframe>

<p class="fwb-demo-open"><a href="/demos/vehicle-keys/index.html" target="_blank" rel="noreferrer">Open the demo full screen ↗</a></p>

---

## How Each Puzzle Works

| Puzzle | Used for | How to play |
| :--- | :--- | :--- |
| **Lockpick** | Lockpicking a locked car | A disc lock. Line every disc's gate up with the mark. A click turns a disc one notch clockwise and drags the disc inside it along, so solve it from the outside in. The pick snaps after the fewest turns the lock needs plus a few spare turns. |
| **Hotwire** | Starting a car without a key | A screwdriver in the ignition. Drag the handle round from LOCK to START slowly, or it slips. Held at START the engine cranks: let go when the ring turns green. |
| **Wire cutting** | Removing a GPS tracker with pliers | The wires light up in an order, shown for a moment. Cut them in that order. |
| **Wiring** | Planting a GPS tracker | Under the car: drag each of the tracker's wires to the car's terminal of the same colour. A wrong terminal sparks and uses a mistake. |

## The Numbers Per Difficulty

These are the defaults. Admins change every number on **/fwb_vehiclekeys → Minigames**, with the same live preview. They also pick which difficulty each action uses: lockpick, advanced lockpick, hotwire, planting and removing a tracker.

| Puzzle | Easy | Medium | Hard |
| :--- | :--- | :--- | :--- |
| Lockpick | 3 discs · 40 s · 6 spare turns | 4 discs · 35 s · 4 spare turns | 5 discs · 30 s · 2 spare turns |
| Hotwire | 240 °/s · green 900 ms · 40 s · 4 tries | 170 °/s · green 600 ms · 35 s · 3 tries | 120 °/s · green 400 ms · 30 s · 2 tries |
| Wire cutting | 4 wires · order shown 3 s · 14 s | 5 wires · 2.5 s · 11 s | 6 wires · 2 s · 9 s |
| Wiring | 3 wires · 30 s · 3 mistakes | 4 wires · 25 s · 2 mistakes | 6 wires · 22 s · 1 mistake |

::: tip Another minigame script
Prefer ox_lib or ps-ui? Pick them on the **Bridges** page, one puzzle at a time. You can keep the built-in lockpick and use ox_lib for hotwiring, for example. See [Integrations](./integrations).
:::
