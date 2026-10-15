---
title: Safezone Creator Common Errors & FAQ | FWB Studio Docs
description: Troubleshooting and FAQ for FiveM Safezone Creator (fwb_safezonecreator) — menu access, zone engine, overlaps, combat rules and logs for ESX, QBCore, and Qbox.
---

<div class="fwb-inline-cta">
  <a class="fwb-product-hero__buy" href="./">Preview</a>
  <a class="fwb-product-hero__buy" href="https://fwbstudio.tebex.io/package/7426491" target="_blank" rel="noreferrer">Purchase on Tebex</a>
</div>

# Safezone Creator — Common Errors & FAQ

Have a question or an issue with **fwb_safezonecreator**? Check the answers below. For extra detail, turn on **Debug → Console debug** in the menu and check F8 and the server console.

---

### ❓ Q: The menu says "You do not have permission for this menu"

::: danger Cause
Your player doesn't have the menu's ACE permission (default `fwb_safezonecreator`).
:::

::: tip Solution
The page shows your license and the exact line to add. Click **Copy**, paste it into `server.cfg`, then restart the server:
```lua
add_ace identifier.license:your_license_here fwb_safezonecreator allow
# Or for your whole admin group:
add_ace group.admin fwb_safezonecreator allow
```
If you changed the ACE name in **General → Menu access**, use that name instead.
:::

---

### ❓ Q: The console keeps saying "Rename this resource folder to fwb_safezonecreator"

::: tip Solution
The folder must be named exactly `fwb_safezonecreator`. Rename it, update `server.cfg` if you ensure it by name, and restart. See [Updating from fs_safezonecreator](./installation#updating-from-fs-safezonecreator).
:::

---

### ❓ Q: "No zone engine is running" or zones don't detect players

::: danger Cause
Neither `ox_lib` nor `PolyZone` is started before this resource, or the zone engine selected in the **Bridge** tab isn't running.
:::

::: tip Solution
Ensure `ox_lib` (or `PolyZone`) **before** `fwb_safezonecreator` in `server.cfg`. If you changed **Bridge → Zone Engine**, restart the resource afterwards.
:::

---

### ❓ Q: A bridge category is red — "is selected but not running"

::: tip Solution
The **Bridge** tab names the missing resource. Start it, then restart this resource, or set that category back to **Auto detect**.
:::

---

### ❓ Q: I can't finish drawing — "This area overlaps another zone"

::: danger Cause
Zones can't overlap. Points inside another zone are refused, and overlapping parts show as red walls.
:::

::: tip Solution
Move your points so the shapes don't touch, or change the height so the zones sit on different floors. Zones that already overlap are listed under the **Problems** filter on the Zones tab. Open one and click **Redraw area**.
:::

---

### ❓ Q: Players can still fight or get hurt inside a zone

::: tip Check these
* The zone is switched **on** (the summary at the top of the zone popup says *"Zone is OFF"* if it isn't).
* **Admins ignore rules** is off. Admins with that option on can fight and aren't protected, so test with a normal player.
* **God mode** is on if players shouldn't take damage.
* With **Take weapons away**, whitelisted weapons can still shoot. Check the **Allowed weapons** list.
:::

---

### ❓ Q: Weapons aren't taken away

::: tip Solution
Weapons are only removed when the zone's combat option is **Take weapons away**. With **Block all fighting**, players keep their weapons but can't use them. Removal happens on entry and then every **Weapon check** interval (General tab, default 2 s).
:::

---

### ❓ Q: Vehicles still hit players with No collision on

::: tip Solution
Open the zone and make sure **No collision** shows **ON** and the footer says **All changes saved**. With **Console debug** on, F8 prints `No collision zone <id> setting true enabled true` while you're inside.

No collision runs on each player's own game. A car whose driver is outside the zone can still be simulated by the driver's game, so a hit can still happen at the edge of a zone.
:::

---

### ❓ Q: "Safezone menu opened, but data failed to load"

::: tip Solution
The server didn't answer in time. Check the server console for errors (usually `oxmysql` or the database connection), then reopen the menu.
:::

---

### ❓ Q: Discord logs don't arrive

::: tip Solution
Paste a full `https://discord.com/api/webhooks/…` URL in the **Logs** tab and make sure the matching switch under **What to log** is on. An empty webhook field turns that log off.
:::

---

### ❓ Q: Do zones survive server restarts?

::: tip Solution
**Yes.** Zones, rules and menu settings are saved in MySQL (`fwb_safezonecreator` and `fwb_safezonecreator_settings`) and load on startup.
:::

---

### ❓ Q: How does the update check work?

::: tip Answer
On start the console prints **Version check passed** or an **Outdated Version Detected** banner, and the menu's bottom bar shows the same status.

To avoid GitHub rate limits, the script asks for the latest version **at most once every 24 hours**. The result is saved in the `fwb_safezonecreator_settings` table (key `version_check`), so restarts within 24 hours reuse it without a new request. The installed version is still compared on every start, so updating the resource is noticed straight away. If a request fails, it waits an hour before trying again and keeps showing the last known result.

Servers that share one database share the same 24-hour timer.
:::

::: tip Force a new check
Delete the saved result, then restart the resource:
```sql
DELETE FROM fwb_safezonecreator_settings WHERE `key` = 'version_check';
```
:::

---

### ❓ Q: "Version check skipped" in the console

::: danger Cause
GitHub couldn't be reached or rate-limited the request, or the response wasn't valid.
:::

::: tip Solution
Nothing to fix in the script. It retries after an hour and keeps the last known result in the meantime. If it keeps failing, check that your server can reach `raw.githubusercontent.com`.
:::

---

### ❓ Q: How many zones can I create?

::: tip Solution
Up to **250** zones, each with **3 to 128** points.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
