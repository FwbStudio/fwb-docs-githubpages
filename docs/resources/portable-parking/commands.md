---
title: Portable Parking Commands | FWB Studio Docs
description: FiveM Portable Parking commands for ESX, QBCore, and Qbox, including JG garage compatibility restrictions.
---

# Portable Parking — Commands

`fs_portableparking` provides commands for parking, purchasing retrieve spots, police impounding, and admin vehicle recovery.

---

::: info JG compatibility
When `jg-garage` is selected (manually or by `auto`), JG owns impounds. JG-impounded vehicles are excluded from `/vlist` and `/vadmin`; `/vimpound` directs authorized players to JG. Normal personal-vehicle parking and outside-vehicle recovery remain available. See [Garage Compatibility](./configuration#garage-compatibility).
:::

## Player Commands

::: details /vpark
Stores your current vehicle into the garage database from your exact current position.

### Syntax
```
/vpark
```
* **Cost**: Free.
* **Usage**: Sit in your owned vehicle and run `/vpark`. The vehicle is securely despawned and saved to the database.
:::

::: details /vbuy
Purchases a temporary one-time vehicle retrieve spot at your player coordinates.

### Syntax
```
/vbuy
```
* **Cost**: Configured via `config.portableparking.vbuyprice` (default: `$500`).
* **Usage**: Run `/vbuy` to create a parking marker where you stand. You can then run `/vlist` at that spot.
:::

::: details /vlist
Opens the vehicle list menu showing your owned vehicles available to spawn or unimpound.

### Syntax
```
/vlist
```
* **Usage**: Must be executed inside a purchased parking spot or permanent garage lot. Selecting a vehicle spawns it at the spot.
:::

---

## Law Enforcement Commands

::: details /vimpound
In native mode, seizes and impounds the targeted vehicle. In JG mode, use JG to impound vehicles.

### Syntax
```
/vimpound
```
* **Who can use it**: Whitelisted law enforcement jobs (`police`, `sheriff`).
* **Usage**: Stand near a vehicle and run `/vimpound`. The vehicle is locked into the impound lot and requires `vimpoundprice` to release.
:::

---

## Admin Commands

::: details /vadmin
Opens the administrative vehicle manager to release eligible vehicles for free. In JG mode, it handles eligible outside personal vehicles and excludes JG impounds.

### Syntax
```
/vadmin
```
* **Requirement**: Staff group in `config.admins` or ACE permission `fs_portableparkingadmin`.
:::
