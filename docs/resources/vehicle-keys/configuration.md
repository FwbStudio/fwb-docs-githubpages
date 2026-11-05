---
title: FWB Vehicle Keys Configuration | FWB Studio Docs
description: Configure FWB Vehicle Keys for FiveM in game with /fwb_vehiclekeys — keys, locking, car theft, NPC car locks, trackers, police, locksmiths, minigames and bridges for ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB Vehicle Keys — Configuration

FWB Vehicle Keys has **no config file to edit**. Everything is set in game with `/fwb_vehiclekeys` and saved in the database. Changes apply as soon as you press **Save changes**; no restart is needed. A few things that need code live in open Lua files under `bridge/`.

---

## First Setup

The first time an admin opens `/fwb_vehiclekeys`, a setup wizard asks five questions. Every answer is an ordinary setting, so you can change it later on the pages below. **Skip** keeps the defaults; **Overview → Run the setup again** opens it later.

| Step | Question |
| :--- | :--- |
| **Keys** | Key items in the inventory, or saved keys with no item |
| **Controls** | Hold the lock key for the fob (and how long), or a key of its own; the lock, fob and engine keys |
| **NPC cars** | Parked cars and cars on the road: all unlocked, random (and how many locked), or all locked |
| **Stealing cars** | Lockpick, hotwire, search for a key, carjacking: on or off |
| **Police** | Police alerts on or off, the police jobs, the dispatch script |

You don't need the wizard for the script to work: without it, every setting has its default (for example the police jobs `police` and `sheriff`).

![FWB Vehicle Keys setup wizard, Controls step: hold the lock key for 1.5 seconds or a key of its own, with the lock, hold time and engine fields](/images/vehicle-keys/wizard-2-controls.png)

::: details Every step of the wizard
![Setup wizard step 1: key items in the inventory or saved keys with no item](/images/vehicle-keys/wizard-1-keys.png)

![Setup wizard step 3: parked NPC cars and NPC cars on the road, all unlocked, random or all locked](/images/vehicle-keys/wizard-3-npc-cars.png)

![Setup wizard step 4: lockpick, hotwire, search for a key and carjacking switches](/images/vehicle-keys/wizard-4-stealing.png)

![Setup wizard step 5: police alerts, police jobs and the dispatch script](/images/vehicle-keys/wizard-5-police.png)

![Setup wizard summary: every answer with a Change button](/images/vehicle-keys/wizard-6-summary.png)
:::

---

## Admin Panel (`/fwb_vehiclekeys`)

| Page | What you set there |
| :--- | :--- |
| **Overview** | Key mode, the scripts that were detected, counts, and a "ready to play" list. **Items in the inventory** checks your inventory for every item this setup uses (and, with ox_inventory, its picture) and names the missing ones. |
| **Keys** | Find a car by plate or a player by name: who holds keys, the owner, trackers on the car. Give or remove a key, change the locks, or get a key for the car you sit in. |
| **Locksmiths** | Add a locksmith where you stand. Set the salesperson ped, the blip icon, colour and size, and open, move or teleport to each one. |
| **Job keys** | Rules: members of a job (from a set rank) get keys to cars by plate start or model. |
| **Car theft** | NPC car locks and rules, lockpicks and the alarm, hotwire and search, carjacking and searching the body. See [Car Theft](#car-theft) below. |
| **Minigames** | The built-in puzzles per difficulty, with a live preview. |
| **Bridges** | Framework, inventory, notification, target, text UI, progress bar, dispatch, and one minigame script **per puzzle**. Each is set to auto-detect or picked by hand. |
| **Logs** | Discord webhook, Fivemanage or custom, and which groups get logged (keys given, theft, admin actions). |
| **Settings** | The tabs below. |

![FWB Vehicle Keys admin Overview: key mode, counts and the ready-to-play checks, including Items in the inventory](/images/vehicle-keys/admin-overview.png)

### Settings tabs

| Tab | What you set there |
| :--- | :--- |
| **General** | Keys are items or saved keys, the key item name, how long **stolen keys** work (0 = until the owner changes the locks, the default), the format of **new plates** (for the `GeneratePlate` export), money sign and Debug. |
| **Locking** | How far the lock key and the fob reach, how far **Summon** reaches (100 m by default, up to 150 m), which key ring controls players get (windows, doors, seats, lights), lock chirp, flashing lights, fob animation, engine auto-start, engine keeps running, Summon. |
| **Trackers** | Item names (tracker, scanner, pliers), the props (the scanner is `w_am_digiscanner` by default), report rate, battery life, the fob's Track time, detector time per spot, minigame difficulties, what a wrong wire does, owner alerts and the kill switch. |
| **Police** | Police jobs (whole job or one rank), the alert chance per action, the built-in blip time, and how many police must be on duty before lockpicking or hotwiring works. |
| **Spares & locksmith** | Spares per car, the spare fee, locksmith prices (new key, spare, change locks, tracker, detector, pliers, new plate), the plate cooldown and the hand-over fee. |
| **Keybinds** | How the lock key works (tap to lock, hold for the fob, and how long: 1.5 s by default), and the default keys. |
| **Commands** | The admin command name and its ACE. **Seats:** the seat command (`seatshuffle`, on or off) and **Passengers stay in their seat** (on by default: GTA no longer slides a front passenger into an empty driver seat). |


::: details Screenshots of the Settings tabs
![Settings, General tab: keys are items or saved keys, key item name, how long stolen keys work](/images/vehicle-keys/settings-general.png)

![Settings, Locking tab: lock key, fob and Summon reach, key ring controls](/images/vehicle-keys/settings-locking.png)

![Settings, Trackers tab: item names, scanner prop, report rate, battery and minigames](/images/vehicle-keys/settings-trackers.png)

![Settings, Police tab: police jobs, alert chance per action, blip time and police needed on duty](/images/vehicle-keys/settings-police.png)

![Settings, Keybinds tab: quick lock key, compact key ring held for 1.5 seconds, large key ring and other keys](/images/vehicle-keys/settings-keybinds.png)

![Settings, Commands tab: admin command and ACE, seat command and passengers stay in their seat](/images/vehicle-keys/settings-commands.png)
:::

---

## Car Theft

| Tab | What you set there |
| :--- | :--- |
| **NPC cars** | **NPC cars are:** by chance (parked % and on-the-road %), every car locked, or no car locked. **Rules** are checked first, top to bottom, and the first that fits decides. Match by **vehicle type** (Emergency, Super, Motorcycles…), **model** (`police`) or **plate** (`LS*` = starts with LS). Each rule is always locked, never locked, or a chance %. |
| **Lockpicks** | Lockpick and advanced lockpick: item name (`carlockpick`, `advancedlockpick`), minigame difficulty, chance to open, chance to break. The alarm: chance and how long it sounds. |
| **Hotwire & search** | Hotwire: time, difficulty, chance. Search the car: time and chance to find a key. |
| **Carjacking** | **Needs:** a gun, a gun or a melee weapon, or anything (bare hands). How long to threaten, the top speed of a car that still stops, and the threat animations. **What the driver does:** shares for throws you the key and runs / runs off with it / drives off / fights back, each shown as its real chance. **Police always get the key:** on by default, police jobs skip the roll. **Search the body:** time and chance (a driver who ran off with the key always has it). |


![Car theft, Carjacking tab: what is needed, threat time, top speed, what the driver does, police always get the key, search the body](/images/vehicle-keys/theft-carjacking.png)

::: details The other Car theft tabs
![Car theft, NPC cars tab: by chance, every car locked or none, and rules by vehicle type, model or plate](/images/vehicle-keys/theft-npc.png)

![Car theft, Lockpicks tab: lockpick and advanced lockpick items, chances and the alarm](/images/vehicle-keys/theft-lockpicks.png)

![Car theft, Hotwire and search tab: time, difficulty and chances](/images/vehicle-keys/theft-hotwire.png)
:::

---

## Default Keys

| Action | Key |
| :--- | :--- |
| Lock / unlock (tap) | `U` |
| Key fob (hold the lock key) | `U`, held for 1.5 seconds |
| Engine on / off | `G` |
| Hotwire (driver seat, no key) | `H` |
| Search the car / search a body | `J` |
| Key fob by its own key | `F5` (when **Keybinds → How the key works** is set to separate keys) |
| Large key ring by its own key | `F6` (when switched on) |

Players can rebind them in GTA's settings: **Key Bindings → FiveM**. The admin's keys are only the defaults for players who never changed them.

---

## Open Files

| File | What it is for |
| :--- | :--- |
| `bridge/hooks/server.lua` | Your own rules before each action and reactions after it. See [Hooks & Events](./editable-files/server). |
| `bridge/framework/*` | ESX, QBCore and Qbox: players, money, owned vehicles, items, jobs. |
| `bridge/inventory/*.lua` | Key items with their plate, item counts. |
| `bridge/notify/*.lua`, `bridge/progressbar/*.lua`, `bridge/textui/*.lua`, `bridge/target/*.lua` | Notifications, progress bars, text prompts and the locksmith's target. |
| `bridge/dispatch/*.lua` | Police alerts. |
| `bridge/minigame/*.lua` | Minigame scripts. Fill in `custom.lua` to use your own. |
| `bridge/logs/*.lua` | Where logs go. |
| `locale/en.lua` | Every text players see in notifications and prompts. |

::: tip
A new file in one of the single-file bridge folders (inventory, notify, dispatch, minigame…) loads on restart and shows up on the **Bridges** page.
:::
