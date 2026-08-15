---
title: Portable Parking Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Portable Parking script (fs_portableparking).
---

# Portable Parking — Common Errors & FAQ

Have a question or encounter an issue while running **fs_portableparking**? Check the common questions and error solutions below.

---

### ❓ Q: SQL Error: `Unknown column 'vin' in 'field list'`?

::: danger Cause
The database migration adding the `vin` column to `owned_vehicles` (ESX) or `player_vehicles` (QBCore) has not been run.
:::

::: tip Solution
Execute the SQL snippet for your framework:

**For ESX:**
```sql
ALTER TABLE owned_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE owned_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```

**For QBCore / Qbox:**
```sql
ALTER TABLE player_vehicles DROP COLUMN IF EXISTS vin;
ALTER TABLE player_vehicles ADD COLUMN vin TINYINT(1) NOT NULL DEFAULT 1;
```
:::

---

### ❓ Q: Does `fs_portableparking` require `fs_bridge`?

::: danger Cause
`fs_portableparking` is **self-contained** and includes its own `bridge/` folder. It does not require `fs_bridge`.
:::

::: tip Solution
In your `server.cfg`, simply ensure:
```lua
ensure oxmysql
ensure ox_lib
ensure fs_portableparking
```
:::

---

### ❓ Q: Why does `/vlist` say "No purchased spot found"?

::: danger Cause
`/vlist` can only be used after purchasing a parking spot via `/vbuy`, or by standing inside one of the permanent garage coordinates configured in `config.parking`.
:::

::: tip Solution
1. Run `/vbuy` to create a temporary spawn marker.
2. Run `/vlist` to spawn your vehicle at that marker.
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
