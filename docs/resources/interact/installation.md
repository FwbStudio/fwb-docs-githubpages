---
title: Interact Installation | FWB Studio Docs
description: Install Interact on FiveM — server.cfg order, ACE permission and optional ox_target / qb-target / qtarget for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Visit the Store</a>
</div>

# Interact — Installation

## Dependencies

| Resource | Required | Notes |
| :--- | :--- | :--- |
| `ox_target`, `qb-target` or `qtarget` | Optional | With **Target** chosen, spots go onto your target when one runs; without one they use Interact's own target (hold `ALT`). You can also replace your target: [Replace Ox/Qb Target](./replace-target) |

Nothing else is needed: no database and no framework. Settings are stored in the resource's own server storage (KVP).

---

## 1. Install Steps

1. Place `fwb_interact` in `resources/[fs]/fwb_interact`. Keep the folder name exactly `fwb_interact`: other scripts call `exports.fwb_interact`.
2. Add the ACE permission (step 2 below) to your `server.cfg`.
3. Start it **before** the scripts that use it:

```lua
ensure ox_target -- your target, if you keep it (see step 3: Replace Ox/Qb Target)

ensure fwb_interact

-- scripts that use fwb_interact after this line
ensure [fs]
```

4. Restart your server and run `/fwb_interact` in game.

---

## 2. Menu Access (ACE)

Every player can open `/fwb_interact` for their **own** settings. Server settings need the ACE:

```lua
# Give your admin group access:
add_ace group.admin fwb_interact.admin allow

# Or give one player access by license:
add_ace identifier.license:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx fwb_interact.admin allow
```

::: tip Admin-only menu
Turn off **General → Players can change their own** to make the menu admin only. A player without access then sees their license and the exact `add_ace` line to copy.
:::

---

## 3. Replace Ox/Qb Target (optional)

Don't want to run `ox_target`, `qb-target` or `qtarget` at all? Interact can take its place, and scripts made for that target keep working without changes:

1. Move the target resource out of the `resources` folder and remove its `ensure` line.
2. Remove the `--` in front of its `provide` line in `fwb_interact/fxmanifest.lua`.
3. `ensure fwb_interact` right after your framework (`es_extended`, `qb-core` or `qbx_core`).
4. Restart the server and check the console.
5. Pick **Press E** or **Target** in `/fwb_interact` → **General**.

Every step with pictures: [Replace Ox/Qb Target](./replace-target).
