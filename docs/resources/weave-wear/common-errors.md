---
title: Wig Craft & Sell Common Errors & FAQ | FWB Studio Docs
description: Frequently asked questions and troubleshooting for FiveM Wig Craft & Sell (fs_weavewear).
---

# Wig Craft & Sell — Common Errors & FAQ

Have a question or encounter an issue while running **fs_weavewear**? Check the common questions and error solutions below.

---

### ❓ Q: "Attempt to index a nil value (field 'FWB')" on server start?

::: danger Cause
`fs_bridge` is missing, stopped, or started **after** `fs_weavewear` in your `server.cfg`.
:::

::: tip Solution
Ensure `fs_bridge` starts before `fs_weavewear` in `server.cfg`:
```lua
ensure fs_bridge
ensure fs_weavewear
```
:::

---

### ❓ Q: Wig table prop is invisible when placed down?

::: tip Solution
Ensure `stream/fs_wig_backsack_wave.ytyp` is active in `fxmanifest.lua`:
```lua
data_file 'DLC_ITYP_REQUEST' 'stream/fs_wig_backsack_wave.ytyp'
```
:::

---

### 💬 Need More Help?

If your issue or question isn't listed here, feel free to open a ticket in our official Discord community:

👉 **[Join FWB Studio Discord](https://discord.gg/fwbstudio)**
