---
title: FWB HUD Common Errors & FAQ | FWB Studio Docs
description: Troubleshooting FWB HUD on FiveM — admin access, missing hunger and thirst, fuel, two HUDs, stress and minimap issues.
---

# FWB HUD — Common Errors & FAQ

---

### ❓ Q: `/fwb_hud` shows a "permission" screen instead of the admin panel

::: danger Cause
Your account does not have the `fwb_hud.admin` ACE.
:::

::: tip Solution
1. Copy the line the screen shows (it already contains your license).
2. Paste it into `server.cfg`, or give your admin group access:
   ```lua
   add_ace group.admin fwb_hud.admin allow
   ```
3. Restart the server.
:::

---

### ❓ Q: Hunger and thirst stay at 100% / don't move

::: danger Cause
The framework or status script starts after `fwb_hud`, or the wrong framework was picked.
:::

::: tip Solution
1. `ensure fwb_hud` **after** your framework in `server.cfg`.
2. Open **/fwb_hud → Overview** and check the detected framework. Change it in **Bridge** if it's wrong.
:::

---

### ❓ Q: Two HUDs on screen

::: tip Solution
Stop your old HUD (qb-hud, ps-hud, esx_hud…) and remove its `ensure` line.
:::

---

### ❓ Q: Fuel always shows full or empty

::: tip Solution
Your fuel script doesn't use the game's fuel level. Return its value in `Integration.fuel` in `bridge/integrations/client.lua` — see [Integrations → Fuel](./integrations#fuel-electric-vehicles).
:::

---

### ❓ Q: Stress doesn't show

::: tip Solution
Stress is off by default. Turn it on in **/fwb_hud → Features → Stress**, then enable the Stress status in **/fwb_hud → Statuses**.
:::

---

### ❓ Q: Nitro item does nothing

::: tip Solution
1. Nitro needs ESX, QBCore or Qbox (not Standalone). Turn it on in **/fwb_hud → Features**.
2. Make sure the item name there (default `nitrous`) exists in your inventory.
3. Stand within a few metres of the car when using it.
:::

---

### ❓ Q: Players changed their HUD and don't see my new server look

::: tip Solution
A player's own changes are kept. Reset them on **/fwb_hud → Players**, or players can pick the server look again in their Themes tab.
:::

---

### ❓ Q: I need console prints to find a problem

::: tip Solution
Turn on **Debug** in **/fwb_hud → Commands & keys**. It is off by default; only the version check prints.
:::

---

### 💬 Need More Help?

Open a ticket in our Discord:

👉 **[Join FWB Studio Discord](https://discord.com/invite/sPqkfQHPAa)**

---

### ❓ Q: Two seatbelts / cruise control turns on and off at once (QBCore / Qbox)

::: danger Cause
FWB HUD's seatbelt and cruise control run next to the framework's (qb-smallresources, or qbx_seatbelt and qbx_cruise).
:::

::: tip Solution
Keep one of each. Either turn off the framework's versions, or switch FWB HUD's off in **/fwb_hud → Features**. Step by step: [Installation → Framework Setup](./installation#framework-setup).
:::

---

### ❓ Q: Switching seats in the radial menu throws a `HasHarness` error

::: tip Solution
The framework's seatbelt was turned off, but the radial menu still asks it about the harness. Point it at `exports.fwb_hud:HasHarness()` as shown in [Installation → Framework Setup](./installation#framework-setup).
:::
