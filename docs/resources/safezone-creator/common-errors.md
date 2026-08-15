---
title: Safezone Creator Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Safezone Creator (fs_safezonecreator).
---

# Safezone Creator — Common Errors & FAQ

Have a question or encounter an issue while running **fs_safezonecreator**? Check the common questions and error solutions below.

---

### ❓ Q: Why does `/safezonemenu` not open or say "Access Denied"?

::: danger Cause
The player executing the command lacks the required ACE permission (`safezone.admin`) or framework admin rank.
:::

::: tip Solution
Add the ACE permission to your `server.cfg`:
```lua
add_ace group.admin "safezone.admin" allow
# Or for your specific player license:
add_ace identifier.license:your_license_here "safezone.admin" allow
```
:::

---

### ❓ Q: Does `fs_safezonecreator` require `fs_bridge`?

::: danger Cause
`fs_safezonecreator` contains its own internal modular bridge system and does **not** depend on `fs_bridge`.
:::

::: tip Solution
In your `server.cfg`, simply ensure:
```lua
ensure oxmysql
ensure fs_safezonecreator
```
:::

---

### ❓ Q: Do created safezones survive server restarts?

::: tip Solution
**Yes.** All created zones, points, rules, blips, and settings are saved automatically to MySQL via `oxmysql` and load immediately on server startup.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
