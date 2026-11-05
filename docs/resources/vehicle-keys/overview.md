---
title: FWB Vehicle Keys Overview | FWB Studio Docs
description: FWB Vehicle Keys features — FiveM car keys, key fob remote, spares, lockpicking, hotwiring, carjacking, NPC car locks, GPS trackers, locksmiths and police alerts for ESX, QBCore and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# FWB Vehicle Keys

### 🔑 FWB Vehicle Keys – Car Keys, Key Fob, Car Theft & Trackers

A complete vehicle keys system for FiveM. Players lock and unlock their cars, use a key fob with a real remote, hand out spare keys and keep track of their car. Thieves lockpick, hotwire and carjack, and plant GPS trackers. Locksmiths cut new keys and change locks.

There is **no config file**. Everything is set in game with `/fwb_vehiclekeys` and saved in the database, which creates its tables on first start.

Works on **ESX**, **QBCore** and **Qbox**, detected automatically.

---

#### 🔑 Keys

* **Items or saved keys** — the admin picks. As **items**, a `vehiclekey` carries its plate and can be handed over, dropped or stolen. As **saved keys**, every player has a key list and nothing can be lost.
* **Key kinds** — owner's key, spare, temporary (rentals, test drives), stolen (found in a car, on a body, or thrown by a carjacked driver) and job keys.
* **Owners always have their key** — read from your framework's owned-vehicles table. A car bought at **any** dealership works for its owner within seconds, with no export to add to the dealership.
* **Stolen keys** — work until the owner changes the locks, or for a time you set. In items mode they are real key items too, with the plate on them.
* **Change the locks** — every older key of that car stops working, and the owner gets a new one. Anyone who tries an old key is told *"The owner already changed the locks on this car"*.
* **Job keys** — members of a job, from a set rank, get keys to cars by plate start or by model.

#### 📟 Key Fob & Key Ring

* **Lock key** — tap to lock or unlock the nearest car you have a key for. Hold it (1.5 s by default) to take out the key fob. The notification says which car: *Car locked — Albany Manana · KO1Z1H9 is locked.*
* **Key fob** — the screen shows the distance, signal, lock state and plate. The buttons are lock, unlock, trunk, remote engine, **Summon** (the car drives itself to you, from up to 100 m by default, 150 m at most) and **Track** (your car on the map for a while).
* **Seats** — `/seatshuffle` (renamable) moves you to the next free seat. Passengers are no longer slid into an empty driver seat by GTA (switchable).
* **Key ring** — every key you hold, and for each car:
  * windows and doors one by one;
  * hazard lights and the interior light;
  * changing seats;
  * the car's history ("last used").
![FWB Vehicle Keys key fob: distance, signal, lock state and plate, with lock, unlock, trunk, engine, Summon and Track buttons](/images/vehicle-keys/player-key-fob.png)

* **Spares** — give a spare to a nearby player (limit per car, optional fee) and take spares back.
* **Hand a car over** — a nearby player becomes the owner, with new locks.
* **Lock chirp, flashing lights and fob animation**, seen by players near the car.

#### 🚨 Car Theft

| Feature | What it does |
| :--- | :--- |
| **NPC cars** | Parked cars and cars on the road are locked by chance, or always, or never. **Rules** by vehicle type, model or plate come first: for example, emergency cars always locked and bicycles never. |
| **Lockpick** | Two items (`carlockpick`, `advancedlockpick`) with their own chances. A disc-lock puzzle; the pick may break and the alarm may go off. |
| **Hotwire** | In the driver seat without a key: a screwdriver-in-the-ignition puzzle. |
| **Search the car** | A chance to find the key in the car, once per car. |
| **Carjacking** | Threaten an NPC driver with a gun, a melee weapon or bare hands (admin's choice): aim at the driver or anywhere on the car. A progress bar shows the threat. The car is braked and held, the driver keeps their hands up, then **throws the key at your feet and runs** (pick it up with **E**), **runs off with it**, **drives off** or **fights back**. You set the share of each. **Police always get the key** (switchable). A carjacked car you drive with its key is kept: the game no longer tidies it away as traffic. |
| **Search the body** | A dead NPC driver may have the key. A driver who ran off with the key always has it. |
| **Alarm & police alerts** | Chance per action, through your dispatch script or the built-in alert: a **POLICE ALERT** card for on-duty police (what happened, the car and plate, the street, how far and which way) and a flashing map blip. |
| **Owner alerts** | The owner is told their car is being stolen. |

![Built-in police alert card: Carjacking, Albany Manana with its plate, Vinewood Blvd / Power St, 640 m NE, on the map for 60 seconds](/images/vehicle-keys/player-police-alert.png)

![The owner's theft alert: their car is being broken into, with how to track it](/images/vehicle-keys/player-theft-alert.png)

#### 📡 GPS Trackers

* **Plant a tracker** — lie under the car and wire it in (a wiring minigame). It sits under the body as a real prop, out of sight from outside, and you can see it on a lift or when the car flips. Its holder follows the car on the map until the battery dies. When the car is not in the city (in a garage, or gone) the card says **NO SIGNAL** and the blip turns grey where it was last seen.
* **Owner's own tracker** — owners fit their own to find their car, get theft alerts and use a **remote kill switch**.
* **Scanner** — a handheld scanner (GTA's digiscanner). Walk round the car and press **E** at each spot, side by side, to find a hidden tracker. Police can read who planted it.
![Tracking card: the tracked car's plate, battery, distance and direction, and the next report](/images/vehicle-keys/player-tracking.png)

![The scanner card: the car from above with its nine spots, the spot being scanned and the results so far](/images/vehicle-keys/player-scanner.png)

* **Pliers** — lie under the car and cut the right wire. A wrong wire can sound the alarm, blow a spark or fry the tracker.

#### 🔧 Locksmiths

* Places set in game where the admin stands: a ped with your target script or "[E]" 3D text, and a map blip with its own icon, colour and size.
* Services: **new key**, **spare key**, **change the locks**, **new number plate** (with a cooldown), and a **shop** for trackers, detectors and pliers.

#### 🧩 Minigames

* Four built-in puzzles: lockpick, hotwire, wire cutting and wire attaching. Each has three difficulties you can tune on the **Minigames** page, with a live preview.
* Or pick another minigame script for **each** puzzle: ox_lib, ps-ui or your own.

#### 🛠️ For Developers

* **Simple and detailed exports** on the server and the client: keys, owners, plates, locks, windows, hazards, indicators, trackers, a plate generator, and switching features off for everyone or for one player. See [Exports — Server](./exports/server) and [Exports — Client](./exports/client).
* **Hooks** like ox_inventory: stop any action with your own rules, or react after it happens. See [Hooks & Events](./editable-files/server).
* **Works with scripts made for other key systems** — `vehiclekeys:client:SetOwner`, qs-vehiclekeys, mk_vehiclekeys, wasabi_carlock, jaksam and t1ger style calls.
* **Built for 1000+ player servers** — no loops over every player, small targeted network messages, cached data, and every call checked on the server. A player's own cars are read once when they join; many players asking about the same car share one database query. On start, the script warns you if your owned-vehicles table is missing an index it needs.

---

## Package

| Package | Resource Folder | Frameworks | Category |
| :--- | :--- | :--- | :--- |
| **Script Package** | `fwb_vehiclekeys` | ESX, QBCore, Qbox | FiveM Script |

`client/`, `server/` and `shared/` are escrowed. `bridge/` and `locale/` stay open, so you can connect any framework, inventory, notification, target, dispatch or minigame script and write your own hooks.

---

## Documentation

- [Installation](./installation) — items, pictures, server.cfg and admin access
- [Configuration](./configuration) — the in-game admin panel, page by page
- [Commands](./commands) — `/fwb_vehiclekeys` and the default keys
- [Exports — Client](./exports/client) — client exports
- [Exports — Server](./exports/server) — server exports
- [Hooks & Events](./editable-files/server) — stop actions or react to them
- [Integrations](./integrations) — garages, dealerships, bridges and other key scripts
- [Common Errors](./common-errors) — troubleshooting and FAQ
