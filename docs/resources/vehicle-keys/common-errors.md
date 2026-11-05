---
title: FWB Vehicle Keys Common Errors & FAQ | FWB Studio Docs
description: Troubleshooting FWB Vehicle Keys on FiveM — admin access, key items without a plate, garages not giving keys, hotwire hints in showrooms, lockpick and tracker items.
---

# FWB Vehicle Keys — Common Errors & FAQ

---

### ❓ Q: `/fwb_vehiclekeys` shows a "permission" screen instead of the admin panel

::: danger Cause
Your account does not have the `fwb_vehiclekeys.admin` ACE.
:::

::: tip Solution
1. Copy the line the screen shows (it already contains your license).
2. Paste it into `server.cfg`, or give your admin group access:
   ```lua
   add_ace group.admin fwb_vehiclekeys.admin allow
   ```
3. Restart the server.
:::

---

### ❓ Q: The Overview says keys can't be items / the key item has no plate

::: danger Cause
Your inventory can't keep data on an item (for example the ESX default inventory), or it starts after `fwb_vehiclekeys`.
:::

::: tip Solution
1. `ensure` your inventory **before** `fwb_vehiclekeys`.
2. Use an inventory that keeps item data (ox_inventory, qb / ps / lj-inventory, qs-inventory, codem-inventory), or set **Settings → General → Keys are** to **Saved keys**.
:::

---

### ❓ Q: Players can't drive the car they take out of their garage

::: danger Cause
The garage still calls the key script you removed, or no key script at all.
:::

::: tip Solution
Set the garage's key option to `"none"` / custom and call `exports.fwb_vehiclekeys:GiveKeys(vehicle)` when the car comes out. See [Integrations → Garages & Dealerships](./integrations#garages-dealerships).

Cars the player **owns** (in your framework's owned-vehicles table) always work for them, with or without a key item. For cars that are not owned (rentals, job cars), give the key from the server with `GiveKeys(src, plate)`; it can be called before the car spawns.
:::

---

### ❓ Q: Storing a car in the garage doesn't remove the key item

::: tip This is how it works
The key item is a real, permanent key. A garage only gives and takes a **session** key; the owner's key item stays in the inventory and fits the car again next time. A lost or stolen key is fixed at the locksmith with **Change the locks**.
:::

---

### ❓ Q: "[H] Hotwire [J] Search" shows while looking at a car in a showroom

::: tip Solution
Cars made only in one player's game (`CreateVehicle(..., false, false)`) are ignored automatically. If your showroom spawns networked cars, call `exports.fwb_vehiclekeys:IgnoreVehicle(vehicle, true)` on that player's client.
:::

---

### ❓ Q: Using a lockpick, tracker, detector or pliers does nothing

::: tip Solution
1. Check the item exists in your inventory with the same name as in the panel (**Car theft → Lockpicks**, **Settings → Trackers**).
2. Lockpick: stand at a **locked** car's door. Detector and pliers: stand next to the car.
3. **Settings → Police → Police needed on duty**: lockpicking and hotwiring only work when enough police are on duty.
:::

---

### ❓ Q: Police get no alerts

::: tip Solution
1. Check the police jobs in **Settings → Police** (a whole job like `police`, or one rank like `sheriff:2`). The default is `police` and `sheriff`.
2. The officer must be **on duty** in your framework (ESX: `/job` shows it).
3. Check the alert chances there (0% = never). A carjacking alerts 70% of the time by default.
4. Pick your dispatch script on the **Bridges** page, or leave it on auto. The built-in alert shows a **POLICE ALERT** card and a map blip to on-duty police.
:::

---

### ❓ Q: A stolen or spare key stopped working

::: tip This is how it works
The owner changed the locks: every older key of that car stops working. The player is told *"The owner already changed the locks on this car"*. If you set a time in **Settings → General → Stolen keys work for**, a stolen key also stops after that time.
:::

---

### ❓ Q: A tracker says "NO SIGNAL"

::: tip This is how it works
The car is not in the world: stored in a garage, deleted, or gone after a restart. The blip stays, grey, where it was last seen. The tracker picks the car up again as soon as it is back out.
:::

---

### ❓ Q: The console says `owned_vehicles` (or `player_vehicles`) has no index

::: tip Solution
Every key check looks a car up by plate, and the key ring lists a player's cars by owner. Without an index, each lookup reads the whole table, which is slow on a big database. Run the line the console prints once, for example:

```sql
ALTER TABLE `owned_vehicles` ADD INDEX `owner` (`owner`);
```

Stock QBCore and Qbox tables already have both indexes; stock ESX has the plate one only.
:::

---

### ❓ Q: An action says "You cannot do that right now"

::: tip Solution
A hook stopped it: in `bridge/hooks/server.lua` or in another resource that called `registerHook`. Set `print = true` in that resource's `registerHook` options to see which one runs. See [Hooks & Events](./editable-files/server).
:::

---

### ❓ Q: I need console prints to find a problem

::: tip Solution
Turn on **Debug messages** in **Settings → General**. Leave it off on a live server.
:::

---

### 💬 Need More Help?

Open a ticket in our Discord:

👉 **[Join FWB Studio Discord](https://discord.com/invite/sPqkfQHPAa)**
