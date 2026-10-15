---
title: Safezone Creator Configuration | FWB Studio Docs
description: In-game menu guide for FiveM Safezone Creator (fwb_safezonecreator) — zones, combat rules, weapon whitelist, logs, bridge, creation tool and debug for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Configuration

`fwb_safezonecreator` is configured **entirely in-game**. `config/config.lua` is only a note pointing to the menu, so there's no config file to edit. Zones and settings are stored in MySQL.

```
/fwb_safezonecreator
```

Every change saves automatically. The top bar shows **Saving…**, **Saved** or **Not saved**. Only the command and ACE name need a resource restart.

The menu has six tabs: **Zones**, **General**, **Logs**, **Bridge**, **Creation tool** and **Debug**.

---

## Zones

A list of every zone with its ID, name, on/off state, rules and distance. Search by name or `#id`, and filter by **All**, **On**, **Off** or **Problems** (overlapping zones, or zones where admins ignore the rules).

Click a zone to open it. At the top of the zone popup you can rename it and switch it on or off. You can also:

| Button | What it does |
| :--- | :--- |
| **Show / Hide outline** | Draws this zone's walls in the world for you |
| **Teleport** | Teleports you to the zone |
| **Copy rules to new zone** | Opens **New zone** with the same rules; you draw a new area |
| **Copy info for support** | Copies a plain-text summary of the zone to paste in a support ticket |
| **Delete zone** | Asks for confirmation, then removes the zone for everyone |

A summary at the top of the popup explains in plain words what the zone does, for example *"Players cannot get hurt."*

### Creating a zone

1. Click **New zone** and type a name.
2. Set the rules (below).
3. Click **Draw area** and place the points in the world (see [Creation tool](#creation-tool)).
4. Click **Create zone**.

### Combat

Each zone has one combat choice:

| Option | Behaviour |
| :--- | :--- |
| **Block all fighting** *(recommended)* | Nobody can shoot, aim, punch or use melee. Players keep their weapons, but they don't work. |
| **Take weapons away** | Weapons are removed on entry and then every **Weapon check** interval (General tab, default 2 s) unless whitelisted. Punching and melee stay blocked. |

**Allowed weapons** (Take weapons away only): pick a job (or **All Jobs**) and a weapon class or single weapon, then click **Add**. Classes follow GTA weapon groups (Pistols, SMGs, Rifles, Machine guns, Shotguns, Sniper rifles, Heavy, Thrown, Melee, Unarmed, Stun guns), including addon weapons that set a group. Players holding an allowed weapon keep it and can shoot.

### Protection

| Option | Behaviour |
| :--- | :--- |
| **God mode** | Players inside can't be hurt, even by someone outside the zone. |
| **Admins ignore rules** | Anyone with menu access can fight in this zone and isn't protected. Turn it off while testing the zone. |

### Vehicles

| Option | Behaviour |
| :--- | :--- |
| **Speed limit** | Caps vehicle speed inside the zone (1–200 MPH). The cap is removed when the vehicle leaves. |
| **No collision** | Vehicles and players near you pass through you and your vehicle while you're in the zone. Uses more performance than a speed limit. |

### Map and messages

| Option | Behaviour |
| :--- | :--- |
| **Enter / leave message** | Shows the messages from the General tab when players enter or leave. |
| **Map blip** | Icon, name, color, size, and **Only show when close**. |
| **Area on map** | Paints the zone shape on the map in the chosen color. |

### Area

Shows the point count, height and overlap status. **Draw area** / **Redraw area** opens the creation tool. Zones can't overlap; zones stacked on different floors are fine as long as their heights don't overlap.

---

## General

| Section | Options |
| :--- | :--- |
| **Menu access** | **Command** (default `fwb_safezonecreator`) and **ACE permission** (default `fwb_safezonecreator`). Applied after a resource restart. |
| **Weapon check** | **Check every** 0.25–10 s (default 2 s). Used only by zones set to *Take weapons away*. Lower reacts faster but checks more often. |
| **Enter / leave messages** | The message text shown in zones that have *Enter / leave message* on. |
| **Safezone icon** | **Show icon**, choose one of 12 icons, and **Move on screen** to drag, resize, set opacity and animation (None, Pulse, Float, Glow). |

---

## Logs

| Option | Description |
| :--- | :--- |
| **All events** | Webhook that gets every log type. |
| **Player entered / Player left** | Webhooks for players entering or leaving a zone. |
| **Admin actions** | Create, edit, delete and teleport. |
| **Errors** | Failed saves and script errors. |
| **What to log** | Turn admin actions, players entering and leaving, and errors on or off. |

Leave a webhook field empty to turn that log off.

---

## Bridge

Shows which resource is used for each part, with a green (running) or red (missing) badge. Leave it on **Auto detect** to use the first supported resource that is running, or pick one.

| Category | Options |
| :--- | :--- |
| **Framework** | ESX, QBCore, Qbox |
| **Language** | 20 languages. Missing text falls back to English. |
| **Inventory** | ox_inventory, qb-inventory, qs-inventory, ps-inventory, lj-inventory, codem-inventory, core_inventory, origen_inventory, tgiann-inventory, ak47_inventory |
| **Notifications** | fs_notify, ox_lib, ESX, QBCore, Qbox |
| **Database** | oxmysql |
| **Zone Engine** | ox_lib, PolyZone. Changing it needs a resource restart. |

A red banner explains what to start if a selected resource isn't running.

::: tip Adding a language or notify system
Copy a file in `locales/` to add a language; it loads automatically. `bridge/notify/client.lua` has a copy/paste template for adding your own notify resource.
:::

---

## Creation tool

Settings for the drawing tool used by **Draw area**.

| Option | Description |
| :--- | :--- |
| **Starting height** | Height of a new zone in metres. Change it while drawing with the scroll wheel. |
| **Minimum points** | Points needed before Finish works (at least 3). |
| **Camera speed / Fast / Slow multiplier** | Free-camera movement speed, and the multipliers while holding the fast or slow key. |
| **Point marker** | Shows the marker and guide line while drawing. |
| **Controls hint** | Shows the list of keys at the bottom of the screen. **Move on screen** sets its position, size and opacity. |
| **Keys** | For each action: the text shown in the hint and the FiveM control ID. |

Default keys:

| Action | Key |
| :--- | :--- |
| Add point / Undo point | Left / Right mouse button |
| Clear all | DELETE |
| Finish / Cancel | ENTER / BACKSPACE or ESC |
| Move camera | W, A, S, D, Q, E |
| Fast / Slow | Hold Shift / Hold Alt |
| Upper / Lower height | SCROLL / CTRL + SCROLL |

---

## Debug

Keep these off on a live server.

| Option | Description |
| :--- | :--- |
| **Show all zone outlines** | Draws every zone in the world for admins. Costs frame time. |
| **Console debug** | Prints detailed safezone messages in F8 and the server console. |
