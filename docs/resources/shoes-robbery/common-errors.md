---
title: Shoes Robbery Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Shoes Robbery (fs_shoesrobbery).
---

# Shoes Robbery — Common Errors & FAQ

Have a question or encounter an issue while running **fs_shoesrobbery**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_shoesrobbery` in your `server.cfg`.
:::

::: tip Solution
Ensure `fs_bridge` starts before `fs_shoesrobbery` in `server.cfg`:
```lua
ensure fs_bridge
ensure fs_shoesrobbery
```
:::

---

### ❓ Q: Why can't players rob sneaker store shelves?

::: danger Cause
Either not enough police officers are online (`config.active_cop`), or the store is currently on robbery cooldown (`config.cooldown`).
:::

::: tip Solution
1. Lower `config.active_cop = 0` for local testing.
2. Run `/resetshoesrobbery` to clear any active cooldowns.
:::

---

### ❓ Q: Shoe box props are invisible during robbery?

::: tip Solution
Ensure the stream data files in `fxmanifest.lua` are active:
```lua
data_file 'DLC_ITYP_REQUEST' 'stream/fs_sr_backsack_shoe.ytyp'
data_file 'DLC_ITYP_REQUEST' 'stream/fs_sr_box_shoe.ytyp'
```
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
