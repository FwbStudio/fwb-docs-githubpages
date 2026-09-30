---
title: Portable Parking Common Errors & FAQ | FWB Studio Docs
description: Troubleshoot FiveM Portable Parking on ESX, QBCore, and Qbox, including JG garage detection and database errors.
---

# Portable Parking — Common Errors & FAQ

Have a question or encounter an issue while running **fs_portableparking**? Check the common questions and error solutions below.

---

### Does the current version need a `vin` SQL import?

No. Native storage is prepared automatically on startup. If an older installation reports an unknown `vin` column, check that you installed the complete current resource and restarted it. Do not drop or recreate `vin` using old installation snippets. See [Database Setup](./installation#database-setup).

### JG compatibility troubleshooting

| Symptom | What to check |
| :--- | :--- |
| Console says `Garage compatibility: none` while using `auto` | Start `jg-advancedgarages` before Portable Parking, then restart Portable Parking. Alternatively set `config.garageCompatibility = 'jg-garage'`. |
| Must JG start first with explicit `'jg-garage'`? | No. Manual selection ignores resource start order. JG's database columns must already be installed. |
| `JG garage compatibility requires ...; finish JG installation first` | Complete JG's database installation for your framework. ESX uses `owned_vehicles`; QBCore/Qbox use `player_vehicles`. Confirm the correct database connection, then restart Portable Parking. |
| `Unknown garage compatibility` | Use `auto`, `none`, or `jg-garage`. The resource folder name `jg-advancedgarages` is not the config value. |
| Multiple compatible garages are running | Select the intended adapter explicitly instead of `auto`. |
| JG-impounded car is missing from `/vlist` or `/vadmin` | Expected: release it through JG. Our recovery/admin tools do not bypass JG impounds. |
| `/vimpound` says to use the garage system | Expected in JG mode. Use JG's impound action. |
| `auto_unimpound` does not release JG vehicles | Expected: this option does not reset JG records. |
| Vehicle appears after a spawn-failed notification | Garage compatibility changes storage handling, not spawn timeouts. Record the model and plate, F8 output, and server logs for support. |

See [Garage Compatibility](./configuration#garage-compatibility) for supported behavior and limitations.

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
