---
title: Carwipe Editable Files — Server | FWB Studio Docs
description: Open server-side editable functions and customization hooks for FiveM Carwipe script.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="../">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426481" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Carwipe — Editable Files (Server)

Carwipe includes unencrypted, open server-side functions. Experienced developers can edit these functions to customize warning notifications or integrate custom garage, impound, and parking scripts.

> [!NOTE]
> **Developer Note:** These open functions are provided for custom developer integrations (such as automatically sending wiped vehicles to player garages or custom database tables). FWB Studio does not provide support for third-party script modifications written inside these functions.

---

### `WipeStartNotification()`

Customizes the countdown notification sequence leading up to a car wipe.

```lua
function WipeStartNotification()
    -- Global notification sequence sent to all players before a wipe occurs
    GenerateGlobalNotification('A car wipe is coming in 2 minutes. \n If you don\'t want your car to disappear, sit in it')
    Wait(60000)
    GenerateGlobalNotification('A car wipe is coming in 1 minutes. \n If you don\'t want your car to disappear, sit in it')
    Wait(15000)
    GenerateGlobalNotification('A car wipe is coming in 45 seconds. \n If you don\'t want your car to disappear, sit in it')
    Wait(15000)
    GenerateGlobalNotification('A car wipe is coming in 30 seconds. \n If you don\'t want your car to disappear, sit in it')
    Wait(15000)
    GenerateGlobalNotification('A car wipe is coming in 15 seconds. \n If you don\'t want your car to disappear, sit in it')
    Wait(5000)
    GenerateGlobalNotification('A car wipe is coming in 10 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 9 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 8 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 7 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 6 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 5 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 4 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 3 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 2 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
    Wait(1000)
    GenerateGlobalNotification('A car wipe is coming in 1 seconds. \n If you don\'t want your car to disappear, sit in it', 1000)
end
```

* **Description:** Runs when the wipe countdown begins. You can modify notification messages, add custom UI popups (e.g. `ox_lib` notifications), play warning sounds, or send a Discord webhook alert.

---

### `CarWipeStarted()`

Executes once right when the car wipe process begins.

```lua
function CarWipeStarted()
    -- Code here executes once when car wipe starts
end
```

* **Description:** Useful for server logging, sending Discord webhooks, or toggling admin state flags during a cleanup.

---

### `CanWipeVehicle(vehicle, plate, owned)`

Evaluates whether a specific vehicle can be wiped.

```lua
function CanWipeVehicle(vehicle, plate, owned)
    -- You can run custom vehicle logic here
    
    -- MUST return true or false:
    -- return true: Vehicle will be wiped (default checks like ped presence & safezones still apply)
    -- return false: Vehicle will NOT be wiped under any circumstances
    return true
end
```

* **Parameters:**
  - `vehicle` (`number`): Vehicle entity handle.
  - `plate` (`string`): Vehicle license plate text.
  - `owned` (`boolean`): `true` if vehicle is player-owned, `false` otherwise.
* **Return Value:** `boolean` (`true` to allow wiping, `false` to prevent wiping).
* **CRITICAL:** This function **must** return a boolean value (`true` or `false`). Returning `nil` or failing to return will cause a script error.

---

### `BeforeSuccessfullyWiped(vehicle, plate, owned)`

Executes for each vehicle immediately before it is deleted from the world.

```lua
function BeforeSuccessfullyWiped(vehicle, plate, owned)
    -- Code here runs for each vehicle right before deletion
end
```

* **Parameters:**
  - `vehicle` (`number`): Vehicle entity handle.
  - `plate` (`string`): Vehicle license plate text.
  - `owned` (`boolean`): `true` if vehicle is player-owned, `false` otherwise.
* **Use Cases:** Save inventory/trunk contents, update database garage status to stored state before entity deletion, or log vehicle info.

---

### `AfterSuccessfullyWiped(plate, owned)`

Executes for each vehicle immediately after it has been deleted from the world.

```lua
function AfterSuccessfullyWiped(plate, owned)
    -- Code here runs for each vehicle right after deletion
end
```

* **Parameters:**
  - `plate` (`string`): Vehicle license plate text.
  - `owned` (`boolean`): `true` if vehicle is player-owned, `false` otherwise.
* **Use Cases:** Execute custom SQL queries to send wiped player cars to garages/impound lots, notify vehicle owners, or update server logs.

---

### `CarWipeFinished()`

Executes once when the entire car wipe process has completed across all vehicles.

```lua
function CarWipeFinished()
    -- Code here runs once after all vehicles are processed
end
```

* **Description:** Ideal for logging total cleanup stats to Discord webhooks or notifying admins that the server car wipe is complete.
