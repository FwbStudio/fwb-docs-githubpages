---
title: Carwipe Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions, troubleshooting, and common error fixes for FiveM Carwipe script.
---

# Carwipe — Common Errors & FAQ

Have a question or encounter an issue while running **fs_carwipe**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" error on server start?

::: danger Cause
This error occurs because `fs_bridge` is missing, not started, or not running on your server before **fs_carwipe** initializes.
:::

::: tip Solution
1. Ensure `fs_bridge` is installed in your `resources/[fs]/` folder alongside `fs_carwipe`.
2. In your `server.cfg`, ensure `ox_lib` and `[fs]` category folder in proper order:
   ```lua
   ensure ox_lib

   -- make sure to ensure all resources above this to make it work properly
   ensure [fs] -- ensure it as last resource
   ```
3. Update `fs_bridge` to the latest version.
:::

---

### ❓ Q: Admin commands (`/carwipe` or `/carwipezone`) say you don't have permission?

::: danger Cause
Your player's framework admin group, ACE permission, job role, or identifier is not included in the permissions list inside `fs_carwipe/config/config.lua`.
:::

::: tip Solution
1. Open `fs_carwipe/config/config.lua`.
2. Locate the `config.commands` section (`zonecommand` / `instantwipecommand`).
3. Add your framework admin group (e.g. `['admin'] = true`), job role, ACE permission, or player identifier to the `allowed` sub-tables.
4. Save the file and restart `fs_carwipe`.
:::

---

### ❓ Q: Vehicles parked in protected safezones are still being wiped?

::: danger Cause
The safezone radius is set too small, the zone coordinates in `config.zones` do not match the area, or `CanWipeVehicle` in server editable functions is returning `true` unconditionally.
:::

::: tip Solution
1. Use the `/carwipezone` command in-game or check `config.zones` in `fs_carwipe/config/config.lua` to verify the zone center coordinates and radius.
2. Ensure vehicles are parked completely inside the defined zone radius before the wipe countdown finishes.
3. If you have custom server editable logic in `editable-files/server.md`, verify that `CanWipeVehicle(vehicle, plate, owned)` returns `false` for vehicles you want to protect.
:::

---

### ❓ Q: Car wipes are happening automatically at unexpected times?

::: danger Cause
`config.default.autowipe_time` in `fs_carwipe/config/config.lua` is set to run automatically at set minute intervals.
:::

::: tip Solution
1. Open `fs_carwipe/config/config.lua`.
2. Locate `config.default.autowipe_time` and adjust the minute interval to your preferred duration (e.g., `60` or `120`).
3. If you only want staff to wipe cars manually using `/carwipe`, adjust your server timer configuration accordingly.
4. Save the file and restart `fs_carwipe`.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
